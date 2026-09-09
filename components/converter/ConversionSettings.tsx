'use client';

import React from 'react';
import { PdfSettings, PageSize, PageOrientation, PageMargin, ImageFit, ImageQuality, PageLayout } from '@/types';
import { SlidersHorizontal, FileText, Layout, Maximize2, ShieldCheck, ArrowRight, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export interface ConversionSettingsProps {
  settings: PdfSettings;
  onChange: (updated: Partial<PdfSettings>) => void;
  imagesCount?: number;
  onConvert?: () => void;
  isConverting?: boolean;
  onClose?: () => void;
}

export const ConversionSettings: React.FC<ConversionSettingsProps> = ({
  settings,
  onChange,
  imagesCount = 0,
  onConvert,
  isConverting = false,
  onClose,
}) => {
  return (
    <aside className="bg-white border border-gray-200 rounded-none p-5 sm:p-6 space-y-5 shadow-xs">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#D7CDFC] border border-[#C4B5FD] flex items-center justify-center text-black">
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </div>
          <h3 className="text-base font-bold text-black tracking-tight">PDF Settings</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
            {imagesCount} {imagesCount === 1 ? 'Page' : 'Pages'}
          </span>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded-lg text-gray-400 hover:text-black hover:bg-gray-100 transition-colors cursor-pointer"
              title="Hide settings"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Settings Form Controls - Compact & Clean without scrolling */}
      <div className="space-y-4 text-xs">
        {/* Page Size */}
        <div className="space-y-1.5">
          <label className="font-bold uppercase tracking-wider text-gray-700 flex items-center justify-between">
            <span>Page Size</span>
            <span className="text-[10px] text-gray-400 font-normal">ISO / Standard</span>
          </label>
          <select
            value={settings.pageSize}
            onChange={(e) => onChange({ pageSize: e.target.value as PageSize })}
            className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-white text-xs font-semibold text-black focus:outline-hidden focus:border-[#4D4AE8]"
          >
            <option value="a4">A4 (Standard 210 × 297 mm)</option>
            <option value="a3">A3 (Large 297 × 420 mm)</option>
            <option value="letter">US Letter (8.5 × 11 in)</option>
            <option value="legal">US Legal (8.5 × 14 in)</option>
            <option value="fit">Fit to Image (Zero White Bars)</option>
          </select>
        </div>

        {/* Page Orientation */}
        <div className="space-y-1.5">
          <label className="font-bold uppercase tracking-wider text-gray-700">
            Orientation
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {(['portrait', 'landscape', 'auto'] as PageOrientation[]).map((orient) => (
              <button
                key={orient}
                type="button"
                onClick={() => onChange({ orientation: orient })}
                className={`py-1.5 px-2 rounded-xl border text-[11px] font-bold capitalize transition-all ${
                  settings.orientation === orient
                    ? 'border-[#4D4AE8] bg-[#D7CDFC]/40 text-black'
                    : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {orient}
              </button>
            ))}
          </div>
        </div>

        {/* Margins */}
        <div className="space-y-1.5">
          <label className="font-bold uppercase tracking-wider text-gray-700">
            Page Margins
          </label>
          <div className="grid grid-cols-4 gap-1">
            {(['none', 'small', 'medium', 'large'] as PageMargin[]).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => onChange({ margin: m })}
                className={`py-1.5 px-1 rounded-xl border text-[11px] font-bold capitalize transition-all ${
                  settings.margin === m
                    ? 'border-[#4D4AE8] bg-[#D7CDFC]/40 text-black'
                    : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Image Fit */}
        <div className="space-y-1.5">
          <label className="font-bold uppercase tracking-wider text-gray-700">
            Image Fit
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { id: 'fit', label: 'Fit' },
              { id: 'fill', label: 'Fill' },
              { id: 'original', label: 'Original' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onChange({ imageFit: item.id as ImageFit })}
                className={`py-1.5 px-1.5 rounded-xl border text-[11px] font-bold transition-all ${
                  settings.imageFit === item.id
                    ? 'border-[#4D4AE8] bg-[#D7CDFC]/40 text-black'
                    : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Image Quality & Layout in 2 cols */}
        <div className="grid grid-cols-2 gap-2">
          {/* Quality */}
          <div className="space-y-1.5">
            <label className="font-bold uppercase tracking-wider text-gray-700">
              Quality
            </label>
            <select
              value={settings.quality}
              onChange={(e) => onChange({ quality: e.target.value as ImageQuality })}
              className="w-full px-2.5 py-1.5 rounded-xl border border-gray-200 bg-white text-xs font-medium text-black focus:outline-hidden focus:border-[#4D4AE8]"
            >
              <option value="standard">Standard</option>
              <option value="high">High (Recommended)</option>
              <option value="maximum">Maximum</option>
            </select>
          </div>

          {/* Layout */}
          <div className="space-y-1.5">
            <label className="font-bold uppercase tracking-wider text-gray-700">
              Page Layout
            </label>
            <select
              value={settings.layout}
              onChange={(e) => onChange({ layout: e.target.value as PageLayout })}
              className="w-full px-2.5 py-1.5 rounded-xl border border-gray-200 bg-white text-xs font-medium text-black focus:outline-hidden focus:border-[#4D4AE8]"
            >
              <option value="single">1 per page</option>
              <option value="two-per-page">2 per page</option>
              <option value="four-per-page">4 per page</option>
            </select>
          </div>
        </div>
      </div>

      {/* Convert CTA Button embedded directly in Sidebar */}
      {onConvert && (
        <div className="pt-2 border-t border-gray-100 space-y-2">
          <Button
            variant="primary"
            size="lg"
            onClick={onConvert}
            disabled={imagesCount === 0 || isConverting}
            isLoading={isConverting}
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="w-full justify-center font-bold text-sm py-3"
          >
            Convert to PDF
          </Button>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>100% Client-side privacy</span>
          </div>
        </div>
      )}
    </aside>
  );
};
