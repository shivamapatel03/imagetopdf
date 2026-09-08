'use client';

import React, { useState } from 'react';
import { ImageFileItem, PdfSettings, ConversionProgress, ConversionResult } from '@/types';
import { convertImagesToPdf } from '@/lib/pdf/converter';
import { recordConversion } from '@/lib/supabase/conversions';
import { UploadZone } from './UploadZone';
import { ImageSorter } from './ImageSorter';
import { ConversionSettings } from './ConversionSettings';
import { ProgressIndicator } from './ProgressIndicator';
import { ReadyState } from './ReadyState';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Plus, AlertCircle } from 'lucide-react';

export interface ConverterAppProps {
  toolName?: string;
  acceptedFormats?: string[];
  initialPageSize?: PdfSettings['pageSize'];
  initialOrientation?: PdfSettings['orientation'];
  heading?: string;
  subheading?: string;
}

const DEFAULT_SETTINGS: PdfSettings = {
  pageSize: 'a4',
  orientation: 'portrait',
  margin: 'none',
  imageFit: 'fit',
  quality: 'high',
  layout: 'single',
};

import { useRouter } from 'next/navigation';
import { setStoredFiles, setStoredSettings } from '@/lib/file-store';

export const ConverterApp: React.FC<ConverterAppProps> = ({
  toolName = 'Image to PDF',
  acceptedFormats = ['.jpg', '.jpeg', '.png', '.webp'],
  initialPageSize = 'a4',
  initialOrientation = 'portrait',
}) => {
  const router = useRouter();
  const [images, setImages] = useState<ImageFileItem[]>([]);
  const [settings, setSettings] = useState<PdfSettings>({
    ...DEFAULT_SETTINGS,
    pageSize: initialPageSize,
    orientation: initialOrientation,
  });
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState<ConversionProgress | null>(null);
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Handle incoming files
  const handleFilesSelected = async (newFiles: File[]) => {
    setErrorMessage(null);
    const loadedItems: ImageFileItem[] = [];

    for (const file of newFiles) {
      const previewUrl = URL.createObjectURL(file);
      // Read dimensions
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

    if (loadedItems.length > 0) {
      setStoredFiles(loadedItems);
      setStoredSettings(settings);
      router.push('/convert');
    }
  };

  const handleRotate = (id: string) => {
    setImages((prev) =>
      prev.map((img) =>
        img.id === id ? { ...img, rotation: (img.rotation + 90) % 360 } : img
      )
    );
  };

  const handleRemove = (id: string) => {
    setImages((prev) => {
      const item = prev.find((i) => i.id === id);
      if (item) URL.revokeObjectURL(item.previewUrl);
      return prev.filter((img) => img.id !== id);
    });
  };

  const handleClearAll = () => {
    images.forEach((img) => URL.revokeObjectURL(img.previewUrl));
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

      // Save to real conversion tracking (Supabase + local)
      recordConversion({
        originalFileName: images.length === 1 ? images[0].name : `${images.length} images bundle`,
        convertedFileName: convResult.fileName,
        toolUsed: toolName,
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
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* 1. Ready State */}
      {result ? (
        <ReadyState result={result} onStartOver={handleStartOver} />
      ) : isConverting && progress ? (
        /* 2. Progress State */
        <ProgressIndicator progress={progress} />
      ) : images.length === 0 ? (
        /* 3. Empty Upload State */
        <UploadZone
          onFilesSelected={handleFilesSelected}
          acceptedFormats={acceptedFormats}
        />
      ) : (
        /* 4. Active Workspace: 2-Column Layout (Left: Sorter Gallery, Right: Sticky PDF Settings Sidebar) */
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 animate-in fade-in duration-200">
          {/* Main Content: Sorter & Reorder Area */}
          <div className="flex-1 w-full space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <h2 className="text-lg sm:text-xl font-bold text-black tracking-tight">
                Arrange Pages
              </h2>
              <UploadZone
                isCompact
                onFilesSelected={handleFilesSelected}
                acceptedFormats={acceptedFormats}
              />
            </div>

            <ImageSorter
              images={images}
              onReorder={setImages}
              onRotate={handleRotate}
              onRemove={handleRemove}
              onClearAll={handleClearAll}
            />

            {/* Error notice if any */}
            {errorMessage && (
              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 flex items-center gap-3 text-sm">
                <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
                <span>{errorMessage}</span>
              </div>
            )}
          </div>

          {/* Right Sticky Sidebar: PDF Settings & Instant Convert CTA */}
          <div className="w-full lg:w-80 xl:w-[340px] shrink-0 lg:sticky lg:top-24">
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
  );
};
