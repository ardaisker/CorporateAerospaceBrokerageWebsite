import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.webp';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/">
              <img src={logo} alt="Guler Aero Solutions" width={700} height={234} loading="lazy" className="h-12 w-auto mb-4" />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              {language === 'en' 
                ? 'International aerospace parts brokerage and commercial consultancy connecting manufacturers and buyers worldwide.'
                : 'Dünya çapında üreticileri ve alıcıları birbirine bağlayan uluslararası havacılık parça aracılığı ve ticari danışmanlık.'}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#1a2332] font-semibold mb-4">{t('contact.info.title')}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@guleraero.com" className="hover:text-[#1a2332] transition-colors">
                  info@guleraero.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Phone className="w-4 h-4" />
                <a href="tel:+905316699519" className="hover:text-[#1a2332] transition-colors">
                  +90 531 669 9519
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <a 
                  href="https://wa.me/905316699519" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#1a2332] font-semibold mb-4">
              {language === 'en' ? 'Quick Links' : 'Hızlı Bağlantılar'}
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <Link to="/services" className="hover:text-[#1a2332] transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/spare-parts" className="hover:text-[#1a2332] transition-colors">
                  {t('nav.spareparts')}
                </Link>
              </li>
              <li>
                <Link to="/standards" className="hover:text-[#1a2332] transition-colors">
                  {t('nav.standards')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#1a2332] transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/parts-request" className="hover:text-[#1a2332] transition-colors">
                  {t('nav.partsrequest')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#1a2332] transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© 2026 Guler Aero Solutions. {language === 'en' ? 'All rights reserved.' : 'Tüm hakları saklıdır.'}</p>
        </div>
      </div>
    </footer>
  );
};