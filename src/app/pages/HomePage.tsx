import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEOHead } from '@/app/components/SEOHead';
import { seoContent } from '@/utils/seoContent';
import { organizationSchema, generateBreadcrumbSchema } from '@/utils/structuredData';
import aircraftHeroImage from 'figma:asset/5f75242ecd8559a759a21a07d09ab78ce4ffbd6b.png';
import { Shield, Globe, CheckCircle, ArrowRight, Plane, Users, Building2 } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { t, language } = useLanguage();
  const seo = seoContent[language].home;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: language === 'en' ? 'Home' : 'Ana Sayfa', url: 'https://guleraero.com/' }
  ]);

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonical="https://guleraero.com/"
        keywords={seo.keywords}
        structuredData={[organizationSchema, breadcrumbSchema]}
      />
      
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] bg-gradient-to-br from-[#1a2332] to-[#2a5298] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={aircraftHeroImage}
            alt="Commercial Aircraft - Aviation Industry"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-white text-[#1a2332] px-6 sm:px-8 py-3 sm:py-4 rounded hover:bg-gray-100 transition-colors font-medium text-sm sm:text-base"
            >
              {t('hero.cta')}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#2a5298] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#1a2332] mb-3 sm:mb-4">
                {t('value.trust.title')}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {t('value.trust.desc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#2a5298] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#1a2332] mb-3 sm:mb-4">
                {t('value.international.title')}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {t('value.international.desc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#2a5298] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#1a2332] mb-3 sm:mb-4">
                {t('value.compliance.title')}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {t('value.compliance.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a2332] mb-4">
              {t('principles.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#2a5298] rounded flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1a2332]">
                  {t('principles.part')}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {t('principles.part.desc')}
              </p>
            </div>

            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#2a5298] rounded flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1a2332]">
                  {t('principles.supplier')}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {t('principles.supplier.desc')}
              </p>
            </div>

            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#2a5298] rounded flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1a2332]">
                  {t('principles.structure')}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {t('principles.structure.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#1a2332] to-[#2a5298]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <Plane className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-4 sm:mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            {language === 'en' 
              ? 'Ready to Connect with Global Aerospace Partners?'
              : 'Küresel Havacılık Ortaklarıyla Bağlantı Kurmaya Hazır mısınız?'}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Discover transparent brokerage solutions for your aerospace parts requirements.'
              : 'Havacılık parça gereksinimleriniz için şeffaf aracılık çözümlerini keşfedin.'}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#1a2332] px-6 sm:px-8 py-3 sm:py-4 rounded hover:bg-gray-100 transition-colors font-medium text-sm sm:text-base"
          >
            {t('nav.contact')}
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};