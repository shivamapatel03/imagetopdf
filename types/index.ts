export type PageSize = 'a4' | 'a3' | 'letter' | 'legal' | 'fit';
export type PageOrientation = 'portrait' | 'landscape' | 'auto';
export type PageMargin = 'none' | 'small' | 'medium' | 'large';
export type ImageFit = 'fit' | 'fill' | 'original';
export type ImageQuality = 'standard' | 'high' | 'maximum';
export type PageLayout = 'single' | 'two-per-page' | 'four-per-page';

export interface ImageFileItem {
  id: string;
  file: File;
  previewUrl: string;
  name: string;
  size: number;
  width: number;
  height: number;
  rotation: number; // 0, 90, 180, 270
}

export interface PdfSettings {
  pageSize: PageSize;
  orientation: PageOrientation;
  margin: PageMargin;
  imageFit: ImageFit;
  quality: ImageQuality;
  layout: PageLayout;
  title?: string;
  author?: string;
}

export interface ConversionProgress {
  stage: 'preparing' | 'creating' | 'optimizing' | 'finishing' | 'ready';
  percent: number;
  message: string;
}

export interface ConversionResult {
  blob: Blob;
  url: string;
  fileName: string;
  fileSize: number;
  pageCount: number;
}

export interface UserProfile {
  id: string;
  email: string;
  fullName?: string;
  avatarUrl?: string;
  plan: 'free' | 'premium';
  conversionsToday: number;
  conversionsThisMonth: number;
  totalConversions: number;
  storageUsedBytes: number;
}

export interface ConversionRecord {
  id: string;
  userId?: string;
  originalFileName: string;
  convertedFileName: string;
  toolUsed: string;
  fileSize: number;
  status: 'completed' | 'failed';
  downloadUrl?: string;
  createdAt: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: 'PDF Guides' | 'Image Conversion' | 'Productivity' | 'Document Management';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishDate: string;
  readTime: string;
  tableOfContents: { id: string; title: string }[];
  content: string;
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}
