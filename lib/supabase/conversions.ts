'use client';

import { createClient } from './client';
import { ConversionRecord } from '@/types';

const LOCAL_STORAGE_KEY = 'imagetopdf_user_conversions';

export const recordConversion = async (record: {
  originalFileName: string;
  convertedFileName: string;
  toolUsed: string;
  fileSize: number;
  downloadUrl?: string;
  pageCount?: number;
}): Promise<ConversionRecord> => {
  const supabase = createClient();
  let dbRecordId: string | null = null;
  let createdAt = new Date().toISOString();

  // 1. If Supabase is available, attempt to insert into the conversions table
  if (supabase) {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase
          .from('conversions')
          .insert({
            user_id: user.id,
            original_file_name: record.originalFileName,
            converted_file_name: record.convertedFileName,
            tool_used: record.toolUsed,
            file_size: record.fileSize,
            page_count: record.pageCount || 1,
            status: 'completed',
            storage_path: record.downloadUrl || null,
          })
          .select('id, created_at')
          .maybeSingle();

        if (data && !error) {
          dbRecordId = data.id;
          if (data.created_at) createdAt = data.created_at;
        }
      }
    } catch (err) {
      console.warn('Could not persist conversion to Supabase DB:', err);
    }
  }

  const newRecord: ConversionRecord = {
    id: dbRecordId || `conv-${Date.now()}`,
    originalFileName: record.originalFileName,
    convertedFileName: record.convertedFileName,
    toolUsed: record.toolUsed,
    fileSize: record.fileSize,
    status: 'completed',
    downloadUrl: record.downloadUrl,
    createdAt,
  };

  // 2. Cache in local storage for instant access
  if (typeof window !== 'undefined') {
    try {
      const existingRaw = localStorage.getItem(LOCAL_STORAGE_KEY);
      const existing: ConversionRecord[] = existingRaw ? JSON.parse(existingRaw) : [];
      // Clean out any legacy mock conversions that might have been stored previously
      const cleaned = existing.filter(
        (c) => c.id !== 'conv-1' && c.id !== 'conv-2' && c.id !== 'conv-3' && !c.convertedFileName.includes('receipt_scan')
      );
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([newRecord, ...cleaned]));
    } catch (e) {
      console.warn('Failed to cache conversion locally:', e);
    }
  }

  return newRecord;
};

export const fetchUserConversions = async (): Promise<ConversionRecord[]> => {
  const supabase = createClient();

  // 1. Try Supabase database first if user is logged in
  if (supabase) {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase
          .from('conversions')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (data && !error && data.length >= 0) {
          return data.map((item) => ({
            id: item.id,
            userId: item.user_id,
            originalFileName: item.original_file_name,
            convertedFileName: item.converted_file_name,
            toolUsed: item.tool_used,
            fileSize: Number(item.file_size || 0),
            status: item.status || 'completed',
            downloadUrl: item.storage_path || undefined,
            createdAt: item.created_at,
          }));
        }
      }
    } catch (err) {
      console.warn('Error fetching conversions from Supabase DB:', err);
    }
  }

  // 2. Fallback to real local storage conversions (with NO mock data)
  if (typeof window !== 'undefined') {
    try {
      // Remove old legacy demo keys
      localStorage.removeItem('imagetopdf_demo_history');

      const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (raw) {
        const parsed: ConversionRecord[] = JSON.parse(raw);
        // Exclude mock data
        return parsed.filter(
          (c) => c.id !== 'conv-1' && c.id !== 'conv-2' && c.id !== 'conv-3' && !c.convertedFileName.includes('receipt_scan')
        );
      }
    } catch {
      // ignore
    }
  }

  return [];
};
