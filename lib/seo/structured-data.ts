export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ImageToPDF.online',
  url: 'https://imagetopdf.online',
  logo: 'https://imagetopdf.online/logo.png',
  description: 'Fast, secure and free image to PDF online converter tool for JPG, PNG, and WEBP files.',
  sameAs: [],
});

export const getWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ImageToPDF.online',
  url: 'https://imagetopdf.online',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://imagetopdf.online/tools?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
});

export const getWebApplicationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Image to PDF Online Converter',
  url: 'https://imagetopdf.online',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All (Windows, macOS, Linux, Android, iOS)',
  offers: {
    '@type': 'Offer',
    price: '0.00',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '2480',
  },
  featureList: [
    'Convert image to PDF online free',
    'Convert JPG to PDF',
    'Convert PNG to PDF',
    'Convert WEBP to PDF',
    'Combine multiple images into one PDF',
    'Custom page sizes: A4, A3, Letter, Legal, Fit to Image',
    '100% Client-side browser privacy',
    'No watermark, no registration, no file limits',
  ],
});

export const getHowToSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Convert Image to PDF Online for Free',
  description: 'Easily combine and convert your JPG, PNG, or WEBP images into an organized, high-definition PDF document.',
  totalTime: 'PT30S',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: '0',
  },
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Upload Images',
      text: 'Select or drag-and-drop your JPG, PNG, or WEBP image files into the upload box.',
      url: 'https://imagetopdf.online/#converter',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Reorder and Rotate Pages',
      text: 'Drag thumbnail cards to change page order and click rotate to correct photo orientation.',
      url: 'https://imagetopdf.online/#converter',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Choose PDF Layout Settings',
      text: 'Select your preferred page size (A4, Letter), orientation (Portrait or Landscape), and margin spacing.',
      url: 'https://imagetopdf.online/#converter',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Download Your PDF',
      text: 'Click Convert to PDF. Your high-definition PDF document is generated instantly in your browser ready for download.',
      url: 'https://imagetopdf.online/#converter',
    },
  ],
});

export const getFaqSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const getBreadcrumbSchema = (items: { name: string; item: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((crumb, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: crumb.name,
    item: crumb.item,
  })),
});
