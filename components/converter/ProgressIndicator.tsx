'use client';

import React from 'react';
import { ConversionProgress } from '@/types';
import { Loader2 } from 'lucide-react';

export interface ProgressIndicatorProps {
  progress: ConversionProgress;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ progress }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 text-center max-w-xl mx-auto space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-[#D7CDFC] border border-[#C4B5FD] mx-auto flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#4D4AE8] animate-spin" />
      </div>

      <div className="space-y-2">
        <h3 className="text-xl sm:text-2xl font-bold text-black flex items-center justify-center gap-2">
          <span>{progress.message}</span>
        </h3>
        <p className="text-sm text-gray-500">
          Please wait while your high-quality PDF document is created...
        </p>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold text-gray-700">
          <span>Conversion in progress</span>
          <span className="font-mono text-[#4D4AE8]">{progress.percent}%</span>
        </div>
        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden p-0.5 border border-gray-200">
          <div
            className="h-full bg-[#4D4AE8] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${Math.max(progress.percent, 5)}%` }}
          />
        </div>
      </div>

      {/* Steps indicator */}
      <div className="grid grid-cols-4 gap-2 pt-2 text-[11px] font-medium text-gray-400">
        <div className={progress.percent >= 15 ? 'text-black font-semibold' : ''}>1. Prep</div>
        <div className={progress.percent >= 45 ? 'text-black font-semibold' : ''}>2. Compose</div>
        <div className={progress.percent >= 80 ? 'text-black font-semibold' : ''}>3. Optimize</div>
        <div className={progress.percent >= 98 ? 'text-black font-semibold' : ''}>4. Complete</div>
      </div>
    </div>
  );
};
