'use client';

import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { ConversionResult } from '@/types';
import { Download, RefreshCw, Eye, Check, Share2, Copy, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { AdBanner } from '@/components/ads/AdBanner';

export interface ReadyStateProps {
  result: ConversionResult;
  onStartOver: () => void;
}

export const ReadyState: React.FC<ReadyStateProps> = ({
  result,
  onStartOver,
}) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    // Launch celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D7CDFC', '#4D4AE8', '#000000', '#C4B5FD'],
      });
    } catch (e) {
      console.warn('Confetti error', e);
    }
  }, []);

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = result.url;
    a.download = result.fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 text-center max-w-xl mx-auto space-y-6">
      {/* Icon badge */}
      <div className="w-20 h-20 rounded-3xl bg-[#D7CDFC] border border-[#C4B5FD] mx-auto flex items-center justify-center">
        <FileCheck className="w-10 h-10 text-[#4D4AE8]" />
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
          Your PDF is Ready! 🎉
        </h3>
        <p className="text-sm text-gray-500 max-w-sm mx-auto">
          Successfully generated {result.pageCount} {result.pageCount === 1 ? 'page' : 'pages'} ({formatFileSize(result.fileSize)})
        </p>
      </div>

      {/* Primary Action Download Button */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Button
          variant="primary"
          size="lg"
          onClick={handleDownload}
          leftIcon={<Download className="w-5 h-5" />}
          className="w-full sm:w-auto px-8"
        >
          Download PDF
        </Button>

        <Button
          variant="secondary"
          size="lg"
          onClick={() => setIsPreviewOpen(true)}
          leftIcon={<Eye className="w-5 h-5" />}
          className="w-full sm:w-auto"
        >
          Preview PDF
        </Button>
      </div>

      {/* Secondary Actions */}
      <div className="pt-4 border-t border-gray-100 flex items-center justify-center gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={onStartOver}
          leftIcon={<RefreshCw className="w-3.5 h-3.5" />}
        >
          Start Over
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={handleCopyLink}
          leftIcon={isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
        >
          {isCopied ? 'Link Copied!' : 'Share Tool'}
        </Button>
      </div>

      {/* PDF Live Preview Modal */}
      {isPreviewOpen && (
        <Modal
          isOpen={isPreviewOpen}
          onClose={() => setIsPreviewOpen(false)}
          title={`Preview: ${result.fileName}`}
          maxWidth="max-w-4xl"
        >
          <div className="flex flex-col space-y-4">
            <div className="w-full h-[70vh] rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
              <iframe
                src={`${result.url}#toolbar=0`}
                className="w-full h-full"
                title="PDF Preview"
              />
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-gray-500">
                {result.pageCount} pages • {formatFileSize(result.fileSize)}
              </span>
              <Button
                variant="primary"
                size="sm"
                onClick={handleDownload}
                leftIcon={<Download className="w-4 h-4" />}
              >
                Download File
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Non-Intrusive Display Ad Slot (Below Download Actions) */}
      <div className="pt-4 border-t border-gray-100">
        <AdBanner slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_STUDIO || '5606768599'} format="horizontal" />
      </div>
    </div>
  );
};
