'use client';

import { UserProfile, ConversionRecord } from '@/types';
import { recordConversion } from './conversions';

// No mock user - unauthenticated visitors start with null
export const getDemoUser = (): UserProfile | null => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem('imagetopdf_demo_user');
    } catch {
      // ignore
    }
  }
  return null;
};

export const updateDemoUser = (_updater: Partial<UserProfile>): UserProfile | null => {
  return null;
};

// No mock history - real saved conversions only
export const getDemoHistory = (): ConversionRecord[] => {
  if (typeof window === 'undefined') return [];
  try {
    localStorage.removeItem('imagetopdf_demo_history');
    const raw = localStorage.getItem('imagetopdf_user_conversions');
    if (raw) {
      const parsed: ConversionRecord[] = JSON.parse(raw);
      return parsed.filter(
        (c) => c.id !== 'conv-1' && c.id !== 'conv-2' && c.id !== 'conv-3' && !c.convertedFileName.includes('receipt_scan')
      );
    }
  } catch {
    // ignore
  }
  return [];
};

export const addDemoConversion = (
  record: Omit<ConversionRecord, 'id' | 'createdAt'>
): ConversionRecord => {
  recordConversion({
    originalFileName: record.originalFileName,
    convertedFileName: record.convertedFileName,
    toolUsed: record.toolUsed,
    fileSize: record.fileSize,
    downloadUrl: record.downloadUrl,
  });

  return {
    ...record,
    id: 'conv-' + Date.now(),
    createdAt: new Date().toISOString(),
  };
};
