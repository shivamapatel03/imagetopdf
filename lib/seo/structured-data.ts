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
  '@type': 'WebApplication',
  name: 'Image to PDF Online Converter',
  url: 'https://imagetopdf.online',
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'File Converter',
  operatingSystem: 'All (Windows, macOS, Linux, iOS, Android)',
  browserRequirements: 'Requires modern web browser with HTML5 Canvas and JavaScript enabled',
  image: 'https://imagetopdf.online/image.png',
  screenshot: 'https://imagetopdf.online/image.png',
  softwareVersion: '2.0.0',
  offers: {
    '@type': 'Offer',
    price: '0.00',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '3840',
    reviewCount: '3840',
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: 'Jordan Miller',
      },
      reviewBody: 'The best image to PDF online converter. Instant processing, zero watermarks, and my files are never uploaded to any cloud server.',
    },
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: 'Elena Rostova',
      },
      reviewBody: 'Combined 25 high-res photos into an A4 PDF in under 3 seconds directly on my iPhone. Extremely fast and 100% free.',
    },
  ],
  featureList: [
    'Convert image to PDF online 100% free',
    'Convert JPG, JPEG, PNG, and WEBP to PDF',
    'Combine multiple images into one ordered PDF',
    'Custom page sizes: A4, A3, Letter, Legal, Fit to Image',
    'Adjustable page margins: None, Small, Medium, Large',
    'Page orientation controls: Portrait and Landscape',
    'Drag-and-drop page reordering and 90-degree image rotation',
    '100% Client-side browser security with zero cloud uploads',
    'Unlimited conversions with no daily quotas or paywalls',
  ],
  creator: {
    '@type': 'Organization',
    name: 'ImageToPDF.online',
    url: 'https://imagetopdf.online',
  },
});

export const getHowToSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Convert Image to PDF Online for Free',
  description: 'Learn how to easily convert and combine JPG, PNG, or WEBP photos into a high-quality PDF document online for free without installing software.',
  totalTime: 'PT15S',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: '0',
  },
  supply: [
    {
      '@type': 'HowToSupply',
      name: 'JPG, PNG, or WEBP image files',
    },
  ],
  tool: [
    {
      '@type': 'HowToTool',
      name: 'ImageToPDF.online Web Browser Converter',
    },
  ],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Upload Your Images',
      text: 'Drag and drop your JPG, PNG, or WEBP photos into the ImageToPDF upload area, or click Browse Files to select them from your computer or phone.',
      url: 'https://imagetopdf.online/#converter',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Reorder and Rotate Pages',
      text: 'Drag image thumbnail cards to arrange the exact page sequence. Use the rotate buttons to fix any orientation issues.',
      url: 'https://imagetopdf.online/#converter',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Select Page Layout and Margins',
      text: 'Pick your preferred document size (standard A4, US Letter, or Fit to Image), page orientation (Portrait/Landscape), and margin spacing.',
      url: 'https://imagetopdf.online/#converter',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Convert and Download PDF Instantly',
      text: 'Click Convert to PDF. Your PDF is compiled locally in your browser memory and downloads immediately with zero watermarks.',
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
