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
import { ArrowLeft, Plus, AlertCircle, FileText } from 'lucide-react';

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
  const [isConverting, setIsConverting] = useState(false);
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

    return () => unsubscribe();
  }, []);

  const handleFilesSelected = async (newFiles: File[]) => {
    setErrorMessage(null);
    const loadedItems: ImageFileItem[] = [];

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
    }

    const updated = [...images, ...loadedItems];
    setImages(updated);
    setStoredFiles(updated);
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
    <div className="min-h-[88vh] bg-[#FAFAFA] py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Top Minimal Toolbar */}
        <div className="flex items-center justify-between bg-white px-4 sm:px-6 py-3 rounded-2xl border border-gray-200">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button
                variant="icon"
                size="sm"
                aria-label="Back to home"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <span className="font-bold text-black text-sm sm:text-base">
                Arrange & Convert
              </span>
              <span className="text-xs text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full font-semibold">
                {images.length} {images.length === 1 ? 'image' : 'images'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <UploadZone
              isCompact
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['.jpg', '.jpeg', '.png', '.webp']}
            />
          </div>
        </div>

        {/* 1. Ready State */}
        {result ? (
          <div className="pt-8">
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
            <UploadZone onFilesSelected={handleFilesSelected} />
          </div>
        ) : (
          /* 4. FOCUSED STUDIO WORKSPACE: ONLY SIDEBAR & IMAGES - NO TEXT */
          <div className="flex flex-col lg:flex-row items-start gap-6 animate-in fade-in duration-200">
            {/* Left Main Gallery Area */}
            <div className="flex-1 w-full space-y-4">
              <div className="bg-white border border-gray-200 rounded-3xl p-4 sm:p-6 shadow-2xs">
                <ImageSorter
                  images={images}
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

            {/* Right Sticky Sidebar: Settings & Convert Action */}
            <div className="w-full lg:w-80 xl:w-[340px] shrink-0 lg:sticky lg:top-20">
              <ConversionSettings
                settings={settings}
                onChange={(updated) => setSettings((prev) => ({ ...prev, ...updated }))}
                imagesCount={images.length}
                onConvert={handleConvert}
                isConverting={isConverting}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
