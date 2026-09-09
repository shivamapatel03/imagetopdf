'use client';

import React, { useState } from 'react';
import { ImageFileItem, PdfSettings } from '@/types';
import { RotateCw, Trash2, ArrowLeft, ArrowRight, Eye, GripVertical, FileText } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';

export interface ImageSorterProps {
  images: ImageFileItem[];
  settings?: PdfSettings;
  onReorder: (newOrder: ImageFileItem[]) => void;
  onRotate: (id: string) => void;
  onRemove: (id: string) => void;
  onClearAll: () => void;
}

export const ImageSorter: React.FC<ImageSorterProps> = ({
  images,
  settings,
  onReorder,
  onRotate,
  onRemove,
  onClearAll,
}) => {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [previewItem, setPreviewItem] = useState<ImageFileItem | null>(null);

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const moveItem = (from: number, to: number) => {
    if (to < 0 || to >= images.length) return;
    const updated = [...images];
    const [moved] = updated.splice(from, 1);
    updated.splice(to, 0, moved);
    onReorder(updated);
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;
    moveItem(draggedIndex, index);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  // Computes the realistic live geometry of each PDF sheet based on user settings
  const getSheetGeometry = (item: ImageFileItem) => {
    const pageSize = settings?.pageSize || 'a4';
    const orientation = settings?.orientation || 'portrait';
    const margin = settings?.margin || 'none';
    const imageFit = settings?.imageFit || 'fit';

    const rot = (item.rotation || 0) % 360;
    const isRotated90or270 = rot === 90 || rot === 270;
    const effWidth = isRotated90or270 ? item.height : item.width;
    const effHeight = isRotated90or270 ? item.width : item.height;

    let aspectRatio: string;
    let isLandscape: boolean;

    if (pageSize === 'fit') {
      isLandscape = effWidth > effHeight;
      aspectRatio = `${effWidth} / ${effHeight}`;
    } else {
      // Standard ISO aspect ratios (width / height)
      // A4: 210 / 297 (~0.707)
      // Letter: 8.5 / 11 (~0.773)
      // Legal: 8.5 / 14 (~0.607)
      // A3: 297 / 420 (~0.707)
      let portraitRatio = 210 / 297;
      if (pageSize === 'letter') portraitRatio = 8.5 / 11;
      else if (pageSize === 'legal') portraitRatio = 8.5 / 14;
      else if (pageSize === 'a3') portraitRatio = 297 / 420;

      if (orientation === 'landscape') {
        isLandscape = true;
        aspectRatio = `${1 / portraitRatio}`;
      } else if (orientation === 'portrait') {
        isLandscape = false;
        aspectRatio = `${portraitRatio}`;
      } else {
        // Auto orientation: match image aspect ratio
        isLandscape = effWidth > effHeight;
        aspectRatio = isLandscape ? `${1 / portraitRatio}` : `${portraitRatio}`;
      }
    }

    // Dynamic margin visual representation
    let marginPadding = '0px';
    let hasMargin = false;
    if (margin === 'small') {
      marginPadding = '6px';
      hasMargin = true;
    } else if (margin === 'medium') {
      marginPadding = '12px';
      hasMargin = true;
    } else if (margin === 'large') {
      marginPadding = '18px';
      hasMargin = true;
    }

    // Image fit styling
    let imageFitClass = 'w-full h-full object-contain';
    if (imageFit === 'fill') {
      imageFitClass = 'w-full h-full object-cover';
    } else if (imageFit === 'original') {
      imageFitClass = 'max-w-full max-h-full object-contain';
    }

    return {
      aspectRatio,
      isLandscape,
      marginPadding,
      hasMargin,
      imageFitClass,
    };
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Header Info */}
      <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-gray-100 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm font-bold text-gray-900">
            {images.length} {images.length === 1 ? 'Page' : 'Pages'} Added
          </span>
          <span className="text-xs text-gray-400 hidden md:inline">
            • Drag cards or tap arrows to arrange pages
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onClearAll}
            className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200 text-xs font-semibold py-1 px-2.5"
            leftIcon={<Trash2 className="w-3.5 h-3.5" />}
          >
            Clear All
          </Button>
        </div>
      </div>

      {/* Grid of uploaded images rendered as realistic PDF page sheets (2 columns on mobile!) */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4">
        {images.map((item, index) => {
          const sheet = getSheetGeometry(item);

          return (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragEnd={handleDragEnd}
              className={`group relative bg-white border border-gray-200 rounded-none p-2 sm:p-3 flex flex-col transition-all duration-200 select-none hover:border-[#4D4AE8] hover:shadow-md ${
                draggedIndex === index ? 'opacity-40 scale-95 border-dashed border-[#4D4AE8]' : 'shadow-xs'
              }`}
            >
              {/* Position badge */}
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 px-1.5 sm:px-2 py-0.5 rounded-none bg-black/80 text-white text-[9px] sm:text-[11px] font-bold flex items-center justify-center backdrop-blur-xs shadow-xs">
                Page {index + 1}
              </div>

              {/* Drag handle */}
              <div className="absolute top-3 right-3 z-10 p-1 rounded-none bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-grab">
                <GripVertical className="w-3.5 h-3.5" />
              </div>

              {/* PDF Sheet Workbench Container */}
              <div
                className="relative w-full aspect-square rounded-none bg-slate-100/90 border border-slate-200/80 p-1.5 sm:p-2.5 flex items-center justify-center cursor-pointer mb-2 sm:mb-3 overflow-hidden group/canvas"
                onClick={() => setPreviewItem(item)}
                title="Click to expand page preview"
              >
                {/* Simulated White Paper Page */}
                <div
                  className="relative bg-white shadow-md border border-gray-300 rounded-none transition-all duration-300 flex items-center justify-center overflow-hidden"
                  style={{
                    aspectRatio: sheet.aspectRatio,
                    width: sheet.isLandscape ? '100%' : 'auto',
                    height: sheet.isLandscape ? 'auto' : '100%',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    padding: sheet.marginPadding,
                  }}
                >
                  {/* Visual Printable Margin Boundary (when margin > none) */}
                  {sheet.hasMargin && (
                    <div className="absolute inset-0 pointer-events-none border border-dashed border-gray-300/80 m-1 rounded-none" />
                  )}

                  {/* The Image inside Printable Area */}
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    <img
                      src={item.previewUrl}
                      alt={item.name}
                      style={{
                        transform: `rotate(${item.rotation}deg)`,
                        transition: 'transform 0.2s ease',
                      }}
                      className={`${sheet.imageFitClass} select-none`}
                    />
                  </div>
                </div>

                {/* Hover overlay with preview indicator */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/canvas:opacity-100 transition-opacity flex items-center justify-center text-white pointer-events-none">
                  <div className="bg-black/75 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-md backdrop-blur-xs">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Page</span>
                  </div>
                </div>
              </div>

              {/* Meta info & Action toolbar */}
              <div className="px-0.5 text-left flex-1 flex flex-col justify-between space-y-1.5 sm:space-y-2">
                <div>
                  <p className="text-[11px] sm:text-xs font-bold text-gray-900 truncate" title={item.name}>
                    {item.name}
                  </p>
                  <div className="text-[10px] sm:text-[11px] text-gray-500 flex items-center justify-between mt-0.5">
                    <span>{item.width} × {item.height}</span>
                    <span>{formatFileSize(item.size)}</span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex items-center justify-between pt-1.5 sm:pt-2 border-t border-gray-100">
                  {/* Rotate button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onRotate(item.id);
                    }}
                    title="Rotate 90°"
                    className="p-1 sm:p-1.5 rounded-lg text-gray-600 hover:text-black hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <RotateCw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </button>

                  {/* Move Left / Right buttons */}
                  <div className="flex items-center gap-0.5 sm:gap-1">
                    <button
                      type="button"
                      disabled={index === 0}
                      onClick={(e) => {
                        e.stopPropagation();
                        moveItem(index, index - 1);
                      }}
                      title="Move left"
                      className="p-1 sm:p-1.5 rounded-lg text-gray-600 hover:text-black hover:bg-gray-100 disabled:opacity-25 disabled:pointer-events-none transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </button>
                    <button
                      type="button"
                      disabled={index === images.length - 1}
                      onClick={(e) => {
                        e.stopPropagation();
                        moveItem(index, index + 1);
                      }}
                      title="Move right"
                      className="p-1 sm:p-1.5 rounded-lg text-gray-600 hover:text-black hover:bg-gray-100 disabled:opacity-25 disabled:pointer-events-none transition-colors cursor-pointer"
                    >
                      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </button>
                  </div>

                  {/* Delete button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemove(item.id);
                    }}
                    title="Remove image"
                    className="p-1 sm:p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Image Preview Modal with Realistic Page Sheet */}
      {previewItem && (() => {
        const modalSheet = getSheetGeometry(previewItem);
        return (
          <Modal
            isOpen={Boolean(previewItem)}
            onClose={() => setPreviewItem(null)}
            title={previewItem.name}
            maxWidth="max-w-3xl"
          >
            <div className="flex flex-col items-center justify-center p-2 sm:p-4">
              <div className="max-h-[62vh] overflow-hidden flex items-center justify-center bg-slate-100 rounded-2xl p-4 sm:p-6 w-full">
                {/* Simulated White Sheet in Modal */}
                <div
                  className="relative bg-white shadow-xl border border-gray-300 rounded-xs flex items-center justify-center transition-all duration-300"
                  style={{
                    aspectRatio: modalSheet.aspectRatio,
                    width: modalSheet.isLandscape ? '100%' : 'auto',
                    height: modalSheet.isLandscape ? 'auto' : '100%',
                    maxWidth: '100%',
                    maxHeight: '50vh',
                    padding: modalSheet.hasMargin
                      ? modalSheet.marginPadding === '6px'
                        ? '16px'
                        : modalSheet.marginPadding === '12px'
                        ? '28px'
                        : '40px'
                      : '0px',
                  }}
                >
                  {modalSheet.hasMargin && (
                    <div className="absolute inset-0 pointer-events-none border border-dashed border-gray-300/80 m-2 rounded-2xs" />
                  )}
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    <img
                      src={previewItem.previewUrl}
                      alt={previewItem.name}
                      style={{ transform: `rotate(${previewItem.rotation}deg)` }}
                      className={`${modalSheet.imageFitClass}`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between w-full mt-4 text-xs sm:text-sm text-gray-600 flex-wrap gap-2">
                <div>
                  Dimensions: <span className="font-semibold text-black">{previewItem.width} × {previewItem.height} px</span>
                </div>
                <div>
                  Size: <span className="font-semibold text-black">{formatFileSize(previewItem.size)}</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onRotate(previewItem.id)}
                  leftIcon={<RotateCw className="w-3.5 h-3.5" />}
                >
                  Rotate 90°
                </Button>
              </div>
            </div>
          </Modal>
        );
      })()}
    </div>
  );
};
