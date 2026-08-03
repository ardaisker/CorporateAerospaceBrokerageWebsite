import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  SITE,
  organizationSchema,
  websiteSchema,
  generateBreadcrumbSchema,
} from '@/utils/structuredData';

/** Basliklarin 60 karakter siniri altinda kalmasi icin kisa marka eki. */
const SUFFIX = ' | Guler Aero';

/**
 * GitHub Pages serves each route from <route>/index.html, so a request for
 * /services is answered with a 301 to /services/. Canonicals were written
 * without the slash, which pointed every page's canonical at a redirect.
 * Normalising here means no page can drift out of sync again.
 */
function canonicalUrl(raw: string): string {
  try {
    const u = new URL(raw);
    if (!u.pathname.endsWith('/')) u.pathname += '/';
    return u.toString();
  } catch {
    return raw;
  }
}

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  keywords?: string;
  structuredData?: object | object[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonical = 'https://guleraero.com',
  ogType = 'website',
  ogImage = 'https://guleraero.com/og-image.jpg',
  keywords = 'aviation, aerospace, spare parts, Boeing, Airbus, aircraft parts, aviation consultancy, international aviation standards, havacılık, uçak yedek parça',
  structuredData
}) => {
  const { language } = useLanguage();
  const fullTitle = `${title}${SUFFIX}`;
  const url = canonicalUrl(canonical);
  const locale = language === 'tr' ? 'tr_TR' : 'en_US';
  const altLocale = language === 'tr' ? 'en_US' : 'tr_TR';

  // Organizasyon ve site semasi yalniz ana sayfadaydi; ic sayfalarda hicbir
  // yapisal veri yoktu. Sayfa basina tekrar yazmak yerine burada uretiliyor,
  // boylece yeni sayfa eklendiginde unutulamaz.
  const crumbs = [{ name: 'Home', url: `${SITE}/` }];
  const path = url.replace(SITE, '').replace(/^\/|\/$/g, '');
  if (path) crumbs.push({ name: title, url });

  const schemas: object[] = [
    organizationSchema,
    websiteSchema,
    ...(crumbs.length > 1 ? [generateBreadcrumbSchema(crumbs)] : []),
    ...(Array.isArray(structuredData) ? structuredData : structuredData ? [structuredData] : []),
  ];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {/* Boyutlar olmadan bazi paylasim kartlari gorseli ikinci istege kadar
          bos birakiyor; og-image.jpg 1200x630. */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Guler Aero Solutions" />
      <meta property="og:site_name" content="Guler Aero Solutions" />
      <meta property="og:locale" content={locale} />
      <meta property="og:locale:alternate" content={altLocale} />

      {/* Twitter — dokumante edilen bicim `name`, `property` degil */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Guler Aero Solutions" />

      {/* Additional SEO.
          `revisit-after` ve `language` kaldirildi: hicbir arama motoru ikisini de
          okumuyor, dil bilgisi artik <html lang> uzerinden veriliyor. */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
      <meta name="author" content="Guler Aero Solutions" />
      
      {/* Structured Data */}
      {schemas.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};