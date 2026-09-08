'use client';

import React, { useRef, useState } from 'react';
import { UploadCloud, Image as ImageIcon, Plus, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export interface UploadZoneProps {
  onFilesSelected: (files: File[]) => void | Promise<void>;
  maxFiles?: number;
  maxSizeMb?: number;
  acceptedFormats?: string[];
  isCompact?: boolean;
  isLoading?: boolean;
  loadingMessage?: string;
}

export const UploadZone: React.FC<UploadZoneProps> = ({
  onFilesSelected,
  maxFiles = 50,
  maxSizeMb = 25,
  acceptedFormats = ['.jpg', '.jpeg', '.png', '.webp'],
  isCompact = false,
  isLoading = false,
  loadingMessage,
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isInternalBuffering, setIsInternalBuffering] = useState(false);
  const [internalMessage, setInternalMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isBusy = isLoading || isInternalBuffering;
  const currentMessage = loadingMessage || internalMessage || 'Buffering photos from device...';

  const validateAndAddFiles = async (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;
    setErrorMessage(null);

    const validFiles: File[] = [];
    const maxSizeBytes = maxSizeMb * 1024 * 1024;

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const ext = '.' + file.name.split('.').pop()?.toLowerCase();
      const isAccepted = acceptedFormats.some((fmt) => fmt.toLowerCase() === ext);

      if (!isAccepted) {
        setErrorMessage(`"${file.name}" is not a supported format. Please upload JPG, PNG, or WEBP.`);
        continue;
      }

      if (file.size > maxSizeBytes) {
        setErrorMessage(`"${file.name}" exceeds the ${maxSizeMb}MB maximum limit.`);
        continue;
      }

      validFiles.push(file);
    }

    if (validFiles.length > 0) {
      setIsInternalBuffering(true);
      setInternalMessage(`Buffering ${validFiles.length} ${validFiles.length === 1 ? 'photo' : 'photos'}...`);
      try {
        await Promise.resolve(onFilesSelected(validFiles.slice(0, maxFiles)));
      } catch (err) {
        console.error('Failed to load selected files', err);
      } finally {
        setIsInternalBuffering(false);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isBusy) setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    if (!isBusy) validateAndAddFiles(e.dataTransfer.files);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateAndAddFiles(e.target.files);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  if (isCompact) {
    return (
      <div>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={acceptedFormats.join(',')}
          className="hidden"
          onChange={handleInputChange}
          disabled={isBusy}
        />
        <Button
          variant="outline"
          size="sm"
          disabled={isBusy}
          isLoading={isBusy}
          onClick={() => fileInputRef.current?.click()}
          leftIcon={<Plus className="w-3.5 h-3.5" />}
          className="text-xs font-semibold px-2.5 sm:px-3"
        >
          {isBusy ? (
            loadingMessage || 'Buffering...'
          ) : (
            <>
              <span>Add</span>
              <span className="hidden sm:inline">&nbsp;Images</span>
            </>
          )}
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-full mx-auto min-w-0">
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept={acceptedFormats.join(',')}
        className="hidden"
        onChange={handleInputChange}
        disabled={isBusy}
      />

      {isBusy ? (
        /* Simple Buffer Loading State for phone/desktop photo loading */
        <div className="relative border-2 border-[#4D4AE8]/30 bg-white rounded-3xl p-6 sm:p-9 text-center shadow-xs w-full max-w-full mx-auto min-w-0 box-border overflow-hidden animate-in fade-in duration-200">
          {/* Subtle ambient blur glow */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#D7CDFC]/40 rounded-full blur-2xl pointer-events-none" />

          {/* Loader icon with soft pulse */}
          <div className="relative mx-auto mb-3.5 w-14 h-14 flex items-center justify-center">
            <div className="absolute inset-0 rounded-2xl bg-[#D7CDFC] animate-ping opacity-35" />
            <div className="relative w-12 h-12 rounded-2xl bg-[#D7CDFC] border border-[#C4B5FD] flex items-center justify-center shadow-xs">
              <Loader2 className="w-6 h-6 text-[#4D4AE8] animate-spin" />
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-black mb-1">
            {currentMessage}
          </h3>

          <p className="text-xs sm:text-sm text-gray-500 max-w-xs mx-auto mb-4">
            Reading high-resolution photos from your device...
          </p>

          {/* Animated buffer progress bar */}
          <div className="w-48 sm:w-56 h-2 bg-gray-100 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-[#4D4AE8] rounded-full animate-pulse w-3/4" />
          </div>

          <div className="mt-3 text-[11px] text-gray-400 font-medium">
            Please wait a moment...
          </div>
        </div>
      ) : (
        /* Normal Upload Zone */
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`relative cursor-pointer border-2 border-dashed rounded-3xl p-5 sm:p-7 text-center transition-all duration-200 group w-full max-w-full mx-auto min-w-0 box-border ${
            isDragOver
              ? 'border-[#4D4AE8] bg-[#D7CDFC]/20 scale-[0.99]'
              : 'border-gray-200 hover:border-[#4D4AE8]/60 bg-white hover:bg-gray-50/50'
          }`}
        >
          {/* Visual empty state icon illustration */}
          <div className="mx-auto mb-2.5 w-12 h-12 rounded-xl bg-[#D7CDFC]/50 border border-[#C4B5FD] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
            <UploadCloud className="w-6 h-6 text-[#4D4AE8]" />
          </div>

          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-black mb-1">
            Upload Images
          </h3>

          <p className="text-xs sm:text-sm text-gray-500 max-w-sm mx-auto mb-3.5 px-2">
            Drag and drop your images here, or click to browse.
          </p>

          <div className="inline-flex items-center justify-center gap-2 mb-3.5 max-w-full">
            <Button
              variant="primary"
              size="md"
              type="button"
              className="pointer-events-none px-6 py-2 text-sm font-bold"
            >
              Select Images
            </Button>
          </div>

          {/* Supported badges */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-[11px] text-gray-500 max-w-full px-1">
            <span className="font-semibold text-gray-700">Supported:</span>
            {acceptedFormats.map((fmt) => (
              <span
                key={fmt}
                className="px-1.5 py-0.5 rounded-md bg-gray-100 font-mono uppercase text-gray-700 font-medium text-[10px]"
              >
                {fmt.replace('.', '')}
              </span>
            ))}
            <span className="text-gray-300">•</span>
            <span>Max {maxSizeMb}MB</span>
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="mt-4 p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2.5 text-sm text-red-700 animate-in fade-in">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};
