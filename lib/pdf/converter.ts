import { PDFDocument } from 'pdf-lib';
import { ImageFileItem, PdfSettings, ConversionProgress, ConversionResult } from '@/types';

// Page dimensions in PDF points (72 points = 1 inch)
export const PAGE_SIZES: Record<string, [number, number]> = {
  a4: [595.28, 841.89],
  a3: [841.89, 1190.55],
  letter: [612.0, 792.0],
  legal: [612.0, 1008.0],
};

export const MARGINS: Record<string, number> = {
  none: 0,
  small: 14.17, // ~5mm
  medium: 28.35, // ~10mm
  large: 42.52, // ~15mm
};

const getQualityRatio = (quality: PdfSettings['quality']): number => {
  switch (quality) {
    case 'standard':
      return 0.75;
    case 'high':
      return 0.90;
    case 'maximum':
    default:
      return 1.0;
  }
};

// Converts image file to canvas data URL, handling rotation and format normalization (e.g. WEBP)
const prepareImageCanvas = async (
  item: ImageFileItem,
  qualityRatio: number
): Promise<{ dataUrl: string; width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Canvas 2D context not available'));
        return;
      }

      const rot = (item.rotation || 0) % 360;
      const isRotated90or270 = rot === 90 || rot === 270;

      // Set canvas dimension based on rotation
      canvas.width = isRotated90or270 ? img.height : img.width;
      canvas.height = isRotated90or270 ? img.width : img.height;

      // Apply rotation transformation
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rot * Math.PI) / 180);
      ctx.drawImage(img, -img.width / 2, -img.height / 2);

      // Determine output format
      // If PNG without rotation and high quality, keep PNG; otherwise use JPEG for size optimization
      const isPng = item.file.type === 'image/png' && qualityRatio === 1.0;
      const mimeType = isPng ? 'image/png' : 'image/jpeg';
      const dataUrl = canvas.toDataURL(mimeType, qualityRatio);

      resolve({
        dataUrl,
        width: canvas.width,
        height: canvas.height,
      });
    };

    img.onerror = () => reject(new Error(`Failed to load image: ${item.name}`));
    img.src = item.previewUrl;
  });
};

export const convertImagesToPdf = async (
  images: ImageFileItem[],
  settings: PdfSettings,
  onProgress?: (progress: ConversionProgress) => void
): Promise<ConversionResult> => {
  if (!images || images.length === 0) {
    throw new Error('No images selected for conversion');
  }

  // 1. Preparing Images
  onProgress?.({
    stage: 'preparing',
    percent: 15,
    message: 'Preparing images...',
  });

  const pdfDoc = await PDFDocument.create();
  if (settings.title) pdfDoc.setTitle(settings.title);
  if (settings.author) pdfDoc.setAuthor(settings.author);
  pdfDoc.setCreator('ImageToPDF.online (https://imagetopdf.online)');

  const qualityRatio = getQualityRatio(settings.quality);
  const marginPt = MARGINS[settings.margin] ?? 0;

  // Process and embed images
  const totalImages = images.length;

  if (settings.layout === 'single') {
    for (let i = 0; i < totalImages; i++) {
      const item = images[i];

      const stagePercent = Math.round(25 + ((i + 0.5) / totalImages) * 45);
      onProgress?.({
        stage: 'creating',
        percent: stagePercent,
        message: `Creating your PDF (Page ${i + 1} of ${totalImages})...`,
      });

      const { dataUrl, width: imgWidth, height: imgHeight } = await prepareImageCanvas(
        item,
        qualityRatio
      );

      // Embed image into pdfDoc
      let embeddedImage;
      if (dataUrl.startsWith('data:image/png')) {
        embeddedImage = await pdfDoc.embedPng(dataUrl);
      } else {
        embeddedImage = await pdfDoc.embedJpg(dataUrl);
      }

      // Determine Page Dimensions
      let pageWidth: number;
      let pageHeight: number;

      if (settings.pageSize === 'fit') {
        pageWidth = imgWidth + marginPt * 2;
        pageHeight = imgHeight + marginPt * 2;
      } else {
        const baseDims = PAGE_SIZES[settings.pageSize] || PAGE_SIZES.a4;
        let [w, h] = baseDims;

        if (settings.orientation === 'portrait') {
          pageWidth = Math.min(w, h);
          pageHeight = Math.max(w, h);
        } else if (settings.orientation === 'landscape') {
          pageWidth = Math.max(w, h);
          pageHeight = Math.min(w, h);
        } else {
          // Auto orientation based on image aspect ratio
          const isLandscape = imgWidth > imgHeight;
          pageWidth = isLandscape ? Math.max(w, h) : Math.min(w, h);
          pageHeight = isLandscape ? Math.min(w, h) : Math.max(w, h);
        }
      }

      const page = pdfDoc.addPage([pageWidth, pageHeight]);
      const availableWidth = Math.max(pageWidth - marginPt * 2, 1);
      const availableHeight = Math.max(pageHeight - marginPt * 2, 1);

      // Compute position and dimensions according to ImageFit
      let drawWidth = availableWidth;
      let drawHeight = availableHeight;
      let drawX = marginPt;
      let drawY = marginPt;

      if (settings.imageFit === 'fit' || settings.pageSize === 'fit') {
        const scale = Math.min(availableWidth / imgWidth, availableHeight / imgHeight);
        drawWidth = imgWidth * scale;
        drawHeight = imgHeight * scale;
        drawX = marginPt + (availableWidth - drawWidth) / 2;
        drawY = marginPt + (availableHeight - drawHeight) / 2;
      } else if (settings.imageFit === 'fill') {
        // Center fill
        drawWidth = availableWidth;
        drawHeight = availableHeight;
        drawX = marginPt;
        drawY = marginPt;
      } else if (settings.imageFit === 'original') {
        // Keep 1:1 points
        drawWidth = imgWidth;
        drawHeight = imgHeight;
        drawX = marginPt + (availableWidth - drawWidth) / 2;
        drawY = marginPt + (availableHeight - drawHeight) / 2;
      }

      page.drawImage(embeddedImage, {
        x: drawX,
        y: drawY,
        width: drawWidth,
        height: drawHeight,
      });
    }
  } else {
    // Multi-image per page layout (2 or 4 images per page)
    const perPage = settings.layout === 'two-per-page' ? 2 : 4;
    const totalPages = Math.ceil(totalImages / perPage);

    for (let p = 0; p < totalPages; p++) {
      onProgress?.({
        stage: 'creating',
        percent: Math.round(30 + ((p + 1) / totalPages) * 40),
        message: `Creating your PDF (Sheet ${p + 1} of ${totalPages})...`,
      });

      const baseDims = PAGE_SIZES[settings.pageSize] || PAGE_SIZES.a4;
      const pageWidth = settings.orientation === 'landscape' ? Math.max(baseDims[0], baseDims[1]) : Math.min(baseDims[0], baseDims[1]);
      const pageHeight = settings.orientation === 'landscape' ? Math.min(baseDims[0], baseDims[1]) : Math.max(baseDims[0], baseDims[1]);

      const page = pdfDoc.addPage([pageWidth, pageHeight]);
      const printableW = pageWidth - marginPt * 2;
      const printableH = pageHeight - marginPt * 2;

      const pageItems = images.slice(p * perPage, (p + 1) * perPage);

      if (perPage === 2) {
        // 2 rows
        const slotH = (printableH - marginPt) / 2;
        for (let i = 0; i < pageItems.length; i++) {
          const item = pageItems[i];
          const { dataUrl, width: imgW, height: imgH } = await prepareImageCanvas(item, qualityRatio);
          const embedded = dataUrl.startsWith('data:image/png') ? await pdfDoc.embedPng(dataUrl) : await pdfDoc.embedJpg(dataUrl);

          const scale = Math.min(printableW / imgW, slotH / imgH);
          const dw = imgW * scale;
          const dh = imgH * scale;
          const dx = marginPt + (printableW - dw) / 2;
          const dy = marginPt + (i === 0 ? slotH + marginPt : 0) + (slotH - dh) / 2;

          page.drawImage(embedded, { x: dx, y: dy, width: dw, height: dh });
        }
      } else {
        // 4 grid (2x2)
        const slotW = (printableW - marginPt) / 2;
        const slotH = (printableH - marginPt) / 2;

        for (let i = 0; i < pageItems.length; i++) {
          const item = pageItems[i];
          const col = i % 2;
          const row = Math.floor(i / 2);

          const { dataUrl, width: imgW, height: imgH } = await prepareImageCanvas(item, qualityRatio);
          const embedded = dataUrl.startsWith('data:image/png') ? await pdfDoc.embedPng(dataUrl) : await pdfDoc.embedJpg(dataUrl);

          const scale = Math.min(slotW / imgW, slotH / imgH);
          const dw = imgW * scale;
          const dh = imgH * scale;
          const dx = marginPt + col * (slotW + marginPt) + (slotW - dw) / 2;
          const dy = marginPt + (1 - row) * (slotH + marginPt) + (slotH - dh) / 2;

          page.drawImage(embedded, { x: dx, y: dy, width: dw, height: dh });
        }
      }
    }
  }

  // 3. Optimizing
  onProgress?.({
    stage: 'optimizing',
    percent: 85,
    message: 'Optimizing file...',
  });

  // 4. Finishing
  onProgress?.({
    stage: 'finishing',
    percent: 95,
    message: 'Almost finished...',
  });

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes as Uint8Array<ArrayBuffer>], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);

  // Ready
  onProgress?.({
    stage: 'ready',
    percent: 100,
    message: 'Your PDF is Ready! 🎉',
  });

  const defaultFileName = images.length === 1 
    ? `${images[0].name.replace(/\.[^/.]+$/, '')}.pdf`
    : `imagetopdf_converted_${Date.now().toString().slice(-4)}.pdf`;

  return {
    blob,
    url,
    fileName: defaultFileName,
    fileSize: blob.size,
    pageCount: pdfDoc.getPageCount(),
  };
};
