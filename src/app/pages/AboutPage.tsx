import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEOHead } from '@/app/components/SEOHead';
import { seoContent } from '@/utils/seoContent';
import { Globe, Shield, Building2, Users } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { t, language } = useLanguage();
  const seo = seoContent[language].about;

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonical="https://guleraero.com/about"
        keywords={seo.keywords}
      />
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#1a2332] to-[#2a5298] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              {t('about.title')}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
            <p>{t('about.intro')}</p>
            <p>{t('about.approach')}</p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a2332] mb-3 sm:mb-4">
              {language === 'en' ? 'Our Core Values' : 'Temel Değerlerimiz'}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Built on principles that guide every transaction and relationship'
                : 'Her işlemi ve ilişkiyi yönlendiren ilkeler üzerine kurulu'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#2a5298] rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#1a2332] mb-3 sm:mb-4">
                {t('about.expertise.title')}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {t('about.expertise.desc')}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#2a5298] rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#1a2332] mb-3 sm:mb-4">
                {t('about.integrity.title')}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {t('about.integrity.desc')}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#2a5298] rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#1a2332] mb-3 sm:mb-4">
                {language === 'en' ? 'Client Partnership' : 'Müşteri Ortaklığı'}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {language === 'en'
                  ? 'Long-term relationships built on mutual trust, clear communication, and shared success in aerospace procurement.'
                  : 'Karşılıklı güven, net iletişim ve havacılık tedariğinde ortak başarı üzerine kurulu uzun vadeli ilişkiler.'}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#2a5298] rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <Building2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#1a2332] mb-3 sm:mb-4">
                {language === 'en' ? 'Industry Excellence' : 'Sektör Mükemmelliği'}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {language === 'en'
                  ? 'Commitment to maintaining the highest standards in aerospace, aviation, and defense industry operations.'
                  : 'Havacılık, uzay ve savunma sanayi operasyonlarında en yüksek standartları koruma taahhüdü.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#1a2332] to-[#2a5298]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            {language === 'en' ? 'Our Mission' : 'Misyonumuz'}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed mb-6 sm:mb-8">
            {language === 'en'
              ? 'To transform aerospace parts procurement through transparency, connecting qualified manufacturers with buyers worldwide while eliminating traditional opacity and risk.'
              : 'Şeffaflık yoluyla havacılık parça tedariğini dönüştürmek, geleneksel opaklaşma ve riski ortadan kaldırırken nitelikli üreticileri dünya çapındaki alıcılarla birbirine bağlamak.'}
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300">
            {language === 'en'
              ? 'Every transaction guided by our principles: Right Part, Right Supplier, Right Commercial Structure.'
              : 'Her işlem ilkelerimiz tarafından yönlendirilir: Doğru Parça, Doğru Tedarikçi, Doğru Ticari Yapı.'}
          </p>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#2a5298] to-[#1a2332]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              {language === 'en' ? 'Global Reach' : 'Küresel Erişim'}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Operating across continents to serve the international aerospace community'
                : 'Uluslararası havacılık topluluğuna hizmet etmek için kıtalarda faaliyet gösteriyoruz'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};