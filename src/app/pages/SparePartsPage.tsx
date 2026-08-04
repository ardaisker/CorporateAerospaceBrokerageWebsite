import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEOHead } from '@/app/components/SEOHead';
import { seoContent } from '@/utils/seoContent';
import { PageHeader } from '@/app/components/primitives/PageHeader';
import { Plane, Package, FileCheck } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import enginePartsImage from '@/assets/spare-parts-engine.webp';

export const SparePartsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const seo = seoContent[language].spareParts;

  const categories = [
    {
      icon: Plane,
      title: t('spareparts.narrowwide.title'),
      description: t('spareparts.narrowwide.desc'),
      features: [
        language === 'en' ? 'Complete component coverage' : 'Tam bileşen kapsamı',
        language === 'en' ? 'OEM and certified aftermarket parts' : 'OEM ve sertifikalı yan sanayi parçaları',
        language === 'en' ? 'Rapid sourcing capabilities' : 'Hızlı tedarik yetenekleri',
      ],
    },
    {
      icon: Package,
      title: t('spareparts.boeing.title'),
      description: t('spareparts.boeing.desc'),
      features: [
        '737 Series (Narrow Body)',
        '747, 767, 777, 787 (Wide Body)',
        language === 'en' ? 'Full technical documentation' : 'Tam teknik dokümantasyon',
      ],
    },
    {
      icon: Package,
      title: t('spareparts.airbus.title'),
      description: t('spareparts.airbus.desc'),
      features: [
        'A320 Family (Narrow Body)',
        'A330, A340, A350, A380 (Wide Body)',
        language === 'en' ? 'Direct manufacturer connections' : 'Doğrudan üretici bağlantıları',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonical="https://guleraero.com/spare-parts"
        keywords={seo.keywords}
      />
      
      <PageHeader title={t('spareparts.title')} subtitle={t('spareparts.subtitle')} />

      {/* Categories Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:gap-12">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-surface-muted rounded-lg border border-line overflow-hidden"
              >
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <category.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex-1 w-full">
                      <h2 className="text-2xl sm:text-3xl font-bold text-brand-900 mb-3 sm:mb-4">
                        {category.title}
                      </h2>
                      <p className="text-base sm:text-lg text-ink-muted leading-relaxed mb-4 sm:mb-6">
                        {category.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                        {category.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 bg-white p-4 rounded border border-line"
                          >
                            <FileCheck className="w-5 h-5 text-brand-600 flex-shrink-0" />
                            <span className="text-ink-muted">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parts Image Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-surface-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-900 mb-4 sm:mb-6">
                {language === 'en'
                  ? 'Certified Components for Safety-Critical Applications'
                  : 'Güvenlik Kritik Uygulamalar için Sertifikalı Bileşenler'}
              </h2>
              <p className="text-base sm:text-lg text-ink-muted leading-relaxed mb-4 sm:mb-6">
                {language === 'en'
                  ? 'Every component sourced through our network meets stringent international aviation standards. We ensure complete traceability and documentation for all parts.'
                  : 'Ağımız aracılığıyla temin edilen her bileşen katı uluslararası havacılık standartlarını karşılar. Tüm parçalar için eksiksiz izlenebilirlik ve dokümantasyon sağlıyoruz.'}
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-600 rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-ink-muted">
                    {language === 'en' ? 'FAA & EASA Compliance' : 'FAA & EASA Uyumluluğu'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-600 rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-ink-muted">
                    {language === 'en' ? 'Form 8130-3 Documentation' : 'Form 8130-3 Dokümantasyonu'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-600 rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-ink-muted">
                    {language === 'en' ? 'Documented full chain of custody ensuring complete traceability from source to end user' : 'Tam Gözetim Zinciri'}
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src={enginePartsImage}
                alt="Certified aircraft engine parts"
                width={1080}
                height={701}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-brand-900 to-brand-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            {language === 'en'
              ? 'Need a Specific Component?'
              : 'Belirli Bir Bileşene mi İhtiyacınız Var?'}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-brand-100 mb-6 sm:mb-8">
            {language === 'en'
              ? 'Contact our team to discuss your spare parts requirements and receive a transparent quote.'
              : 'Yedek parça gereksinimlerinizi görüşmek ve şeffaf bir teklif almak için ekibimizle iletişime geçin.'}
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-brand-900 px-6 sm:px-8 py-3 sm:py-4 rounded hover:bg-surface-sunken transition-colors font-medium text-sm sm:text-base"
          >
            {t('nav.contact')}
          </a>
        </div>
      </section>
    </div>
  );
};