import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEOHead } from '@/app/components/SEOHead';
import { seoContent } from '@/utils/seoContent';
import { PageHeader } from '@/app/components/primitives/PageHeader';
import { Shield, FileCheck, Globe, ClipboardCheck } from 'lucide-react';

export const StandardsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const seo = seoContent[language].standards;

  const standards = [
    {
      icon: Shield,
      title: t('standards.certified.title'),
      description: t('standards.certified.desc'),
    },
    {
      icon: FileCheck,
      title: t('standards.safety.title'),
      description: t('standards.safety.desc'),
    },
    {
      icon: Globe,
      title: t('standards.regulatory.title'),
      description: t('standards.regulatory.desc'),
    },
    {
      icon: ClipboardCheck,
      title: t('standards.traceability.title'),
      description: t('standards.traceability.desc'),
    },
  ];

  const certifications = [
    'FAA (Federal Aviation Administration)',
    'EASA (European Union Aviation Safety Agency)',
    'CAAC (Civil Aviation Administration of China)',
    'Transport Canada Civil Aviation',
    'DGCA (Directorate General of Civil Aviation)',
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonical="https://guleraero.com/standards"
        keywords={seo.keywords}
      />
      
      <PageHeader title={t('standards.title')} subtitle={t('standards.subtitle')} />

      {/* Standards Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {standards.map((standard, index) => (
              <div
                key={index}
                className="bg-surface-muted p-6 sm:p-8 rounded-lg border border-line"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-600 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <standard.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-brand-900 mb-3 sm:mb-4">
                  {standard.title}
                </h2>
                <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-brand-900 to-brand-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                {language === 'en'
                  ? 'Comprehensive Quality Assurance'
                  : 'Kapsamlı Kalite Güvencesi'}
              </h2>
              <p className="text-base sm:text-lg text-brand-100 leading-relaxed mb-6 sm:mb-8">
                {language === 'en'
                  ? 'Every transaction is backed by rigorous quality assurance protocols ensuring safety, compliance, and reliability.'
                  : 'Her işlem katı kalite güvence protokolleri ile destekleniyor, güvenlik ve uyumluluk garantileniyor.'}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
                      {language === 'en' ? 'Supplier Verification' : 'Tedarikçi Doğrulama'}
                    </h3>
                    <p className="text-sm sm:text-base text-brand-100">
                      {language === 'en'
                        ? 'All suppliers undergo thorough vetting and certification verification'
                        : 'Tüm tedarikçiler kapsamlı inceleme ve sertifika kontrolünden geçiyor'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileCheck className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
                      {language === 'en' ? 'Documentation Review' : 'Dokümantasyon İncelemesi'}
                    </h3>
                    <p className="text-sm sm:text-base text-brand-100">
                      {language === 'en'
                        ? 'Complete documentation package review for every component'
                        : 'Her parça için eksiksiz dokümantasyon incelemesi'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ClipboardCheck className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
                      {language === 'en' ? 'Continuous Monitoring' : 'Sürekli İzleme'}
                    </h3>
                    <p className="text-sm sm:text-base text-brand-100">
                      {language === 'en'
                        ? 'Ongoing compliance monitoring throughout the supply chain'
                        : 'Tedarik zinciri boyunca kesintisiz uyumluluk takibi'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 sm:p-10 lg:p-12 rounded-lg border border-white/20">
              <div className="text-white">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white">
                  {language === 'en' ? 'Our Commitment' : 'Taahhüdümüz'}
                </h2>
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl sm:text-5xl font-bold mb-2">100%</div>
                    <p className="text-sm sm:text-base text-brand-100">
                      {language === 'en' ? 'Certified Components' : 'Sertifikalı Bileşenler'}
                    </p>
                  </div>
                  <div>
                    <div className="text-4xl sm:text-5xl font-bold mb-2">100%</div>
                    <p className="text-sm sm:text-base text-brand-100">
                      {language === 'en' ? 'Documented Traceability' : 'Dokümante İzlenebilirlik'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};