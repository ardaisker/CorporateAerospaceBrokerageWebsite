import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEOHead } from '@/app/components/SEOHead';
import { seoContent } from '@/utils/seoContent';
import { Package, Link2, Briefcase, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import handshakeImage from 'figma:asset/931b253ce3f28ce066eecc870a9198f04b7fafc9.png';
import engineImage from 'figma:asset/51c7bcd8dbfec148e09211171975e2c925d6e801.png';
import boardroomImage from 'figma:asset/cb8415d2afe488d4cc6a78b83d5e6882985e4e8c.png';

export const ServicesPage: React.FC = () => {
  const { t, language } = useLanguage();
  const seo = seoContent[language].services;

  const services = [
    {
      icon: Package,
      title: t('services.brokerage.title'),
      description: t('services.brokerage.desc'),
      image: engineImage,
      link: '/spare-parts',
    },
    {
      icon: Link2,
      title: t('services.matching.title'),
      description: t('services.matching.desc'),
      image: handshakeImage,
      link: '/parts-request',
    },
    {
      icon: Briefcase,
      title: t('services.consultancy.title'),
      description: t('services.consultancy.desc'),
      image: boardroomImage,
      link: '/contact',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonical="https://guleraero.com/services"
        keywords={seo.keywords}
      />
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#1a2332] to-[#2a5298] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              {t('services.title')}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 sm:gap-10 lg:gap-12 items-center`}
              >
                <div className="flex-1 w-full">
                  <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#2a5298] rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#1a2332]">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-[#2a5298] font-medium hover:gap-3 transition-all text-sm sm:text-base"
                  >
                    {language === 'en' ? 'Learn More' : 'Daha Fazla Bilgi'}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#1a2332] to-[#2a5298]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              {language === 'en' ? 'Why Choose Guler Aero Solutions?' : 'Neden Guler Aero Solutions?'}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Professional solutions backed by international expertise and compliance'
                : 'Uluslararası uzmanlık ve uyumlulukla desteklenen profesyonel çözümler'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-white/20">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                {language === 'en' ? 'Transparent Operations' : 'Şeffaf Operasyonlar'}
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                {language === 'en'
                  ? 'Clear pricing, complete documentation, and open communication throughout the procurement process.'
                  : 'Net fiyatlandırma, eksiksiz dokümantasyon ve tedarik süreci boyunca açık iletişim.'}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-white/20">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                {language === 'en' ? 'Risk Reduction' : 'Risk Azaltma'}
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                {language === 'en'
                  ? 'Vetted suppliers, certified components, and comprehensive quality assurance minimize procurement risks.'
                  : 'Doğrulanmış tedarikçiler, sertifikalı bileşenler ve kapsamlı kalite güvencesi tedarik risklerini minimize eder.'}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-white/20">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                {language === 'en' ? 'Global Network' : 'Küresel Ağ'}
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                {language === 'en'
                  ? 'Extensive international connections with manufacturers and buyers across aerospace markets.'
                  : 'Havacılık pazarlarında üreticiler ve alıcılarla kapsamlı uluslararası bağlantılar.'}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-white/20">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                {language === 'en' ? 'Industry Expertise' : 'Sektör Uzmanlığı'}
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                {language === 'en'
                  ? 'Deep understanding of aerospace, aviation, and defense industry requirements and regulations.'
                  : 'Havacılık, uzay ve savunma sanayi gereksinimleri ve düzenlemeleri konusunda derin anlayış.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};