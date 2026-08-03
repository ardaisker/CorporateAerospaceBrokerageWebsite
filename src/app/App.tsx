import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Layout } from '@/app/components/Layout';
import { SplashScreen } from '@/app/components/SplashScreen';
import { ScrollToTop } from '@/app/components/ScrollToTop';
import { Sitemap } from '@/app/components/Sitemap';
import { RobotsTxt } from '@/app/components/RobotsTxt';
import { HomePage } from '@/app/pages/HomePage';
import { ServicesPage } from '@/app/pages/ServicesPage';
import { SparePartsPage } from '@/app/pages/SparePartsPage';
import { StandardsPage } from '@/app/pages/StandardsPage';
import { AboutPage } from '@/app/pages/AboutPage';
import { ContactPage } from '@/app/pages/ContactPage';
import { PartsRequestPage } from '@/app/pages/PartsRequestPage';
import { NotFoundPage } from '@/app/pages/NotFoundPage';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [hasShownSplash, setHasShownSplash] = useState(false);

  useEffect(() => {
    // Session storage kullanarak splash screen'i sadece ilk yüklemede göster
    const splashShown = sessionStorage.getItem('splashShown');
    if (splashShown) {
      setShowSplash(false);
      setHasShownSplash(true);
    }
  }, []);

  // SEO: Force "index, follow" meta tag
  useEffect(() => {
    // Find or create robots meta tag
    let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    
    if (robotsMeta) {
      robotsMeta.setAttribute('content', 'index, follow');
    } else {
      robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      robotsMeta.content = 'index, follow';
      document.head.appendChild(robotsMeta);
    }

    // Also set googlebot meta
    let googlebotMeta = document.querySelector('meta[name="googlebot"]') as HTMLMetaElement;
    
    if (googlebotMeta) {
      googlebotMeta.setAttribute('content', 'index, follow');
    } else {
      googlebotMeta = document.createElement('meta');
      googlebotMeta.name = 'googlebot';
      googlebotMeta.content = 'index, follow';
      document.head.appendChild(googlebotMeta);
    }
  }, []);

  const handleSplashFinish = () => {
    setShowSplash(false);
    setHasShownSplash(true);
    sessionStorage.setItem('splashShown', 'true');
  };

  // Splash screen gösterilirken
  if (showSplash && !hasShownSplash) {
    return <SplashScreen onFinish={handleSplashFinish} />;
  }

  // Ana site
  return (
    <HelmetProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* SEO Routes - No Layout */}
            <Route path="/sitemap.xml" element={<Sitemap />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/robots.txt" element={<RobotsTxt />} />
            <Route path="/robots" element={<RobotsTxt />} />
            
            {/* Regular Pages - With Layout */}
            <Route path="/*" element={
              <Layout>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/spare-parts" element={<SparePartsPage />} />
                  <Route path="/standards" element={<StandardsPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/parts-request" element={<PartsRequestPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Layout>
            } />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  );
}