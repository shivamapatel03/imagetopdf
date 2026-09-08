'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ImageFileItem, PdfSettings, ConversionProgress, ConversionResult } from '@/types';
import { convertImagesToPdf } from '@/lib/pdf/converter';
import { recordConversion } from '@/lib/supabase/conversions';
import {
  getStoredFiles,
  setStoredFiles,
  clearStoredFiles,
  getStoredSettings,
  subscribeFileStore,
} from '@/lib/file-store';
import { ImageSorter } from '@/components/converter/ImageSorter';
import { ConversionSettings } from '@/components/converter/ConversionSettings';
import { ProgressIndicator } from '@/components/converter/ProgressIndicator';
import { ReadyState } from '@/components/converter/ReadyState';
import { UploadZone } from '@/components/converter/UploadZone';
import { Button } from '@/components/ui/Button';
import {
  ArrowLeft,
  ArrowRight,
  Plus,
  AlertCircle,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  PanelRightClose,
  PanelRightOpen,
  X,
  Loader2,
} from 'lucide-react';

const DEFAULT_SETTINGS: PdfSettings = {
  pageSize: 'a4',
  orientation: 'portrait',
  margin: 'none',
  imageFit: 'fit',
  quality: 'high',
  layout: 'single',
};

export default function ConvertStudioPage() {
  const router = useRouter();
  const [images, setImages] = useState<ImageFileItem[]>([]);
  const [settings, setSettings] = useState<PdfSettings>(DEFAULT_SETTINGS);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isConverting, setIsConverting] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [bufferMessage, setBufferMessage] = useState<string>('');
  const [progress, setProgress] = useState<ConversionProgress | null>(null);
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    // Read files from store
    const initialFiles = getStoredFiles();
    setImages(initialFiles);

    const initialSettings = getStoredSettings();
    if (initialSettings) {
      setSettings((prev) => ({ ...prev, ...initialSettings }));
    }

    const unsubscribe = subscribeFileStore(() => {
      setImages(getStoredFiles());
    });

    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }

    return () => unsubscribe();
  }, []);

  const handleFilesSelected = async (newFiles: File[]) => {
    setErrorMessage(null);
    setIsBuffering(true);
    setBufferMessage(`Buffering ${newFiles.length} ${newFiles.length === 1 ? 'photo' : 'photos'}...`);

    const loadedItems: ImageFileItem[] = [];
    let count = 0;

    for (const file of newFiles) {
      const previewUrl = URL.createObjectURL(file);
      await new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => {
          loadedItems.push({
            id: `img-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            file,
            previewUrl,
            name: file.name,
            size: file.size,
            width: img.width,
            height: img.height,
            rotation: 0,
          });
          resolve();
        };
        img.onerror = () => {
          loadedItems.push({
            id: `img-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            file,
            previewUrl,
            name: file.name,
            size: file.size,
            width: 800,
            height: 600,
            rotation: 0,
          });
          resolve();
        };
        img.src = previewUrl;
      });

      count++;
      if (newFiles.length > 1) {
        setBufferMessage(`Processing photo ${count} of ${newFiles.length}...`);
      }
    }

    const updated = [...images, ...loadedItems];
    setImages(updated);
    setStoredFiles(updated);
    setIsBuffering(false);
  };

  const handleRotate = (id: string) => {
    const updated = images.map((img) =>
      img.id === id ? { ...img, rotation: (img.rotation + 90) % 360 } : img
    );
    setImages(updated);
    setStoredFiles(updated);
  };

  const handleRemove = (id: string) => {
    const item = images.find((i) => i.id === id);
    if (item) URL.revokeObjectURL(item.previewUrl);
    const updated = images.filter((img) => img.id !== id);
    setImages(updated);
    setStoredFiles(updated);
  };

  const handleClearAll = () => {
    clearStoredFiles();
    setImages([]);
    setResult(null);
    setErrorMessage(null);
  };

  const handleConvert = async () => {
    if (images.length === 0) return;
    setIsConverting(true);
    setErrorMessage(null);

    try {
      const convResult = await convertImagesToPdf(images, settings, (p) => {
        setProgress(p);
      });

      setResult(convResult);

      recordConversion({
        originalFileName: images.length === 1 ? images[0].name : `${images.length} images bundle`,
        convertedFileName: convResult.fileName,
        toolUsed: 'Image to PDF',
        fileSize: convResult.fileSize,
        downloadUrl: convResult.url,
        pageCount: convResult.pageCount,
      });
    } catch (err: any) {
      console.error('Conversion failed', err);
      setErrorMessage(
        err?.message || 'Something went wrong while converting your files. Please try again.'
      );
    } finally {
      setIsConverting(false);
      setProgress(null);
    }
  };

  const handleStartOver = () => {
    handleClearAll();
    setResult(null);
    setProgress(null);
    router.push('/');
  };

  return (
    <div className="min-h-[88vh] bg-[#FAFAFA] py-2 sm:py-5 px-2.5 sm:px-6 lg:px-8 pb-24 lg:pb-8">
      <div className="max-w-7xl mx-auto space-y-3 sm:space-y-4">
        {/* Top Minimal Toolbar */}
        <div className="flex items-center justify-between bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-2xl border border-gray-200 shadow-2xs">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <Link href="/">
              <Button
                variant="icon"
                size="sm"
                aria-label="Back to home"
                className="shrink-0"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
              <span className="font-bold text-black text-sm sm:text-base whitespace-nowrap">
                Arrange
              </span>
              <span className="text-[11px] text-[#4D4AE8] bg-[#D7CDFC]/40 px-2 py-0.5 rounded-full font-bold shrink-0">
                {images.length} {images.length === 1 ? 'image' : 'images'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Add More Images Button */}
            <UploadZone
              isCompact
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['.jpg', '.jpeg', '.png', '.webp']}
              isLoading={isBuffering}
              loadingMessage={bufferMessage}
            />

            {images.length > 0 && !result && !isConverting && (
              <>
                {/* Desktop Toggle Button for PDF Settings: STRICTLY lg:inline-flex to avoid overflowing mobile screens */}
                <Button
                  variant={isSidebarOpen ? 'secondary' : 'outline'}
                  size="sm"
                  onClick={() => setIsSidebarOpen((prev) => !prev)}
                  leftIcon={<SlidersHorizontal className="w-3.5 h-3.5" />}
                  className="hidden lg:inline-flex font-bold text-xs"
                  title={isSidebarOpen ? 'Collapse settings sidebar' : 'Open settings sidebar'}
                >
                  {isSidebarOpen ? 'Hide Settings' : 'PDF Settings'}
                </Button>

                {/* Direct Convert CTA in toolbar when sidebar is closed on desktop */}
                {!isSidebarOpen && (
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleConvert}
                    isLoading={isConverting}
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                    className="hidden lg:inline-flex font-bold text-xs"
                  >
                    Convert to PDF
                  </Button>
                )}
              </>
            )}
          </div>
        </div>

        {/* 1. Ready State */}
        {result ? (
          <div className="pt-6">
            <ReadyState result={result} onStartOver={handleStartOver} />
          </div>
        ) : isConverting && progress ? (
          /* 2. Progress State */
          <div className="pt-12">
            <ProgressIndicator progress={progress} />
          </div>
        ) : images.length === 0 ? (
          /* 3. Empty Fallback */
          <div className="max-w-xl mx-auto pt-8">
            <UploadZone
              onFilesSelected={handleFilesSelected}
              isLoading={isBuffering}
              loadingMessage={bufferMessage}
            />
          </div>
        ) : (
          /* 4. FOCUSED STUDIO WORKSPACE: GALLERY + COLLAPSIBLE SIDEBAR */
          <div className="relative flex flex-col lg:flex-row items-start gap-5 sm:gap-6 animate-in fade-in duration-200">
            {/* Left Main Gallery Area (Smoothly expands when sidebar is closed) */}
            <div className="flex-1 w-full space-y-4 min-w-0 transition-all duration-300">
              <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-2.5 sm:p-6 shadow-2xs">
                <ImageSorter
                  images={images}
                  settings={settings}
                  onReorder={(newOrder) => {
                    setImages(newOrder);
                    setStoredFiles(newOrder);
                  }}
                  onRotate={handleRotate}
                  onRemove={handleRemove}
                  onClearAll={handleClearAll}
                />
              </div>

              {errorMessage && (
                <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 flex items-center gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar (Desktop Collapsible) */}
            {isSidebarOpen && (
              <div className="hidden lg:block w-80 xl:w-[340px] shrink-0 lg:sticky lg:top-20 transition-all duration-300 animate-in fade-in slide-in-from-right-4">
                <ConversionSettings
                  settings={settings}
                  onChange={(updated) => setSettings((prev) => ({ ...prev, ...updated }))}
                  imagesCount={images.length}
                  onConvert={handleConvert}
                  isConverting={isConverting}
                  onClose={() => setIsSidebarOpen(false)}
                />
              </div>
            )}
          </div>
        )}

        {/* Floating Side Tab to re-open sidebar when closed on Desktop */}
        {images.length > 0 && !result && !isConverting && !isSidebarOpen && (
          <button
            type="button"
            onClick={() => setIsSidebarOpen(true)}
            className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-white border-2 border-r-0 border-gray-200 hover:border-[#4D4AE8] shadow-lg hover:shadow-2xl rounded-l-2xl py-3.5 px-3 flex-col items-center gap-2 text-black transition-all duration-150 group cursor-pointer"
            title="Open PDF Settings"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#4D4AE8] group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-800 group-hover:text-[#4D4AE8] [writing-mode:vertical-rl] rotate-180 transition-colors">
              PDF Settings
            </span>
            <ChevronLeft className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#4D4AE8] transition-colors mt-0.5" />
          </button>
        )}

        {/* Mobile Sticky Bottom Action Bar (< lg) */}
        {images.length > 0 && !result && !isConverting && (
          <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-gray-200 px-3 py-2.5 shadow-lg flex items-center gap-2">
            <Button
              variant="outline"
              size="md"
              onClick={() => setIsSidebarOpen(true)}
              leftIcon={<SlidersHorizontal className="w-3.5 h-3.5" />}
              className="flex-1 justify-center font-bold text-xs py-2.5 rounded-xl border-gray-300"
            >
              Settings ({settings.orientation})
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={handleConvert}
              isLoading={isConverting}
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              className="flex-1 justify-center font-bold text-xs py-2.5 rounded-xl shadow-md"
            >
              Convert ({images.length})
            </Button>
          </div>
        )}

        {/* Mobile Slide-Up Settings Sheet / Drawer (< lg) */}
        {images.length > 0 && !result && !isConverting && isSidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end animate-in fade-in duration-200">
            {/* Dark Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
              onClick={() => setIsSidebarOpen(false)}
            />
            {/* Bottom Sheet Drawer */}
            <div className="relative z-10 bg-white rounded-t-3xl max-h-[85vh] overflow-y-auto p-4 sm:p-6 shadow-2xl animate-in slide-in-from-bottom duration-300">
              <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-3" />
              <ConversionSettings
                settings={settings}
                onChange={(updated) => setSettings((prev) => ({ ...prev, ...updated }))}
                imagesCount={images.length}
                onConvert={() => {
                  setIsSidebarOpen(false);
                  handleConvert();
                }}
                isConverting={isConverting}
                onClose={() => setIsSidebarOpen(false)}
              />
            </div>
          </div>
        )}

        {/* Buffering Overlay Modal for phone and desktop uploads */}
        {isBuffering && images.length > 0 && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center shadow-2xl border border-gray-200 space-y-3 animate-in zoom-in-95 duration-200">
              <div className="relative mx-auto w-14 h-14 flex items-center justify-center">
                <div className="absolute inset-0 rounded-2xl bg-[#D7CDFC] animate-ping opacity-35" />
                <div className="relative w-12 h-12 rounded-2xl bg-[#D7CDFC] border border-[#C4B5FD] flex items-center justify-center shadow-xs">
                  <Loader2 className="w-6 h-6 text-[#4D4AE8] animate-spin" />
                </div>
              </div>
              <h4 className="text-base sm:text-lg font-black text-black">
                {bufferMessage || 'Buffering Photos...'}
              </h4>
              <p className="text-xs text-gray-500 max-w-xs mx-auto">
                Reading and optimizing high-resolution photos from your device...
              </p>
              <div className="w-44 h-1.5 bg-gray-100 rounded-full overflow-hidden mx-auto">
                <div className="h-full bg-[#4D4AE8] rounded-full animate-pulse w-4/5" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
