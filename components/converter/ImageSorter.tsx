'use client';

import React, { useState } from 'react';
import { ImageFileItem } from '@/types';
import { RotateCw, Trash2, ArrowLeft, ArrowRight, Eye, GripVertical } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';

export interface ImageSorterProps {
  images: ImageFileItem[];
  onReorder: (newOrder: ImageFileItem[]) => void;
  onRotate: (id: string) => void;
  onRemove: (id: string) => void;
  onClearAll: () => void;
}

export const ImageSorter: React.FC<ImageSorterProps> = ({
  images,
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

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-2 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-900">
            {images.length} {images.length === 1 ? 'Image' : 'Images'} Added
          </span>
          <span className="text-xs text-gray-400">
            • Drag cards or use arrows to reorder
          </span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={onClearAll}
          className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
          leftIcon={<Trash2 className="w-3.5 h-3.5" />}
        >
          Clear All
        </Button>
      </div>

      {/* Grid of uploaded images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        {images.map((item, index) => (
          <div
            key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragEnd={handleDragEnd}
            className={`group relative bg-white border border-gray-200 rounded-2xl p-2.5 flex flex-col transition-all duration-150 select-none hover:border-[#4D4AE8] ${
              draggedIndex === index ? 'opacity-40 scale-95 border-dashed border-[#4D4AE8]' : 'shadow-2xs'
            }`}
          >
            {/* Position badge */}
            <div className="absolute top-4 left-4 z-10 w-6 h-6 rounded-full bg-black/80 text-white text-xs font-bold flex items-center justify-center backdrop-blur-xs">
              {index + 1}
            </div>

            {/* Drag handle */}
            <div className="absolute top-4 right-4 z-10 p-1 rounded-md bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-grab">
              <GripVertical className="w-3.5 h-3.5" />
            </div>

            {/* Thumbnail preview container */}
            <div
              className="relative w-full aspect-square rounded-xl bg-gray-100 overflow-hidden flex items-center justify-center cursor-pointer mb-2.5"
              onClick={() => setPreviewItem(item)}
            >
              <img
                src={item.previewUrl}
                alt={item.name}
                style={{
                  transform: `rotate(${item.rotation}deg)`,
                  transition: 'transform 0.2s ease',
                }}
                className="max-h-full max-w-full object-contain"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Eye className="w-5 h-5 drop-shadow-sm" />
              </div>
            </div>

            {/* Meta info */}
            <div className="px-1 text-left flex-1 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold text-gray-900 truncate" title={item.name}>
                  {item.name}
                </p>
                <p className="text-[11px] text-gray-500 flex items-center justify-between mt-0.5">
                  <span>{item.width} × {item.height}</span>
                  <span>{formatFileSize(item.size)}</span>
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                {/* Rotate button */}
                <button
                  type="button"
                  onClick={() => onRotate(item.id)}
                  title="Rotate 90°"
                  className="p-1.5 rounded-lg text-gray-600 hover:text-black hover:bg-gray-100 transition-colors"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                </button>

                {/* Move buttons */}
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    disabled={index === 0}
                    onClick={() => moveItem(index, index - 1)}
                    title="Move left"
                    className="p-1.5 rounded-lg text-gray-600 hover:text-black hover:bg-gray-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    disabled={index === images.length - 1}
                    onClick={() => moveItem(index, index + 1)}
                    title="Move right"
                    className="p-1.5 rounded-lg text-gray-600 hover:text-black hover:bg-gray-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Delete button */}
                <button
                  type="button"
                  onClick={() => onRemove(item.id)}
                  title="Remove image"
                  className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Preview Modal */}
      {previewItem && (
        <Modal
          isOpen={Boolean(previewItem)}
          onClose={() => setPreviewItem(null)}
          title={previewItem.name}
          maxWidth="max-w-3xl"
        >
          <div className="flex flex-col items-center justify-center p-4">
            <div className="max-h-[60vh] overflow-hidden flex items-center justify-center bg-gray-50 rounded-xl p-4 w-full">
              <img
                src={previewItem.previewUrl}
                alt={previewItem.name}
                style={{ transform: `rotate(${previewItem.rotation}deg)` }}
                className="max-h-[50vh] max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-between w-full mt-4 text-sm text-gray-600">
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
      )}
    </div>
  );
};
