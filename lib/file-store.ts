'use client';

import { ImageFileItem, PdfSettings } from '@/types';

// In-memory store for files transitioning between pages
let storedFiles: ImageFileItem[] = [];
let storedSettings: Partial<PdfSettings> = {};
let listeners: Array<() => void> = [];

export const getStoredFiles = (): ImageFileItem[] => {
  return storedFiles;
};

export const setStoredFiles = (files: ImageFileItem[]) => {
  storedFiles = files;
  listeners.forEach((listener) => listener());
};

export const addStoredFiles = (files: ImageFileItem[]) => {
  storedFiles = [...storedFiles, ...files];
  listeners.forEach((listener) => listener());
};

export const clearStoredFiles = () => {
  storedFiles.forEach((file) => {
    if (file.previewUrl) URL.revokeObjectURL(file.previewUrl);
  });
  storedFiles = [];
  listeners.forEach((listener) => listener());
};

export const getStoredSettings = (): Partial<PdfSettings> => {
  return storedSettings;
};

export const setStoredSettings = (settings: Partial<PdfSettings>) => {
  storedSettings = { ...storedSettings, ...settings };
  listeners.forEach((listener) => listener());
};

export const subscribeFileStore = (listener: () => void) => {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
};
