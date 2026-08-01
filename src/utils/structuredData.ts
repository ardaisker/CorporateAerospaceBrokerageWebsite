// Structured Data for SEO (JSON-LD format)

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Guler Aero Solutions",
  "url": "https://guleraero.com",
  "logo": "https://guleraero.com/logo.png",
  "description": "International aviation parts brokerage and commercial consultancy company specializing in aerospace, aviation, and defense industry components.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+90-531-669-9519",
    "contactType": "Sales",
    "email": "info@guleraero.com",
    "areaServed": "Worldwide",
    "availableLanguage": ["English", "Turkish"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/guleraero"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "TR"
  }
};

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Aviation Parts Brokerage",
  "provider": {
    "@type": "Organization",
    "name": "Guler Aero Solutions"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Worldwide"
  },
  "description": "Professional aviation spare parts brokerage connecting manufacturers and buyers for aerospace, aviation, and defense components."
};