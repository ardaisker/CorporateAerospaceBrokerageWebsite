import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.webp';

/**
 * Footer.
 *
 * Once beyaz zeminde uc esit sutundu ve sayfanin geri kalanindan yalnizca 1px
 * cizgiyle ayriliyordu — sayfa bitmis gibi hissettirmiyordu. Artik koyu bir
 * kapanis yuzeyi: govdeyle net bir kontrast, marka lacivertiyle ayni ailede.
 *
 * Sutun genislikleri de esit degil artik: sirket tanimi daha genis, baglanti
 * listeleri dar. Uc esit sutun, icerikleri farkli agirlikta oldugu icin
 * dengesiz duruyordu.
 */
export const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const quickLinks = [
    { to: '/services', label: t('nav.services') },
    { to: '/spare-parts', label: t('nav.spareparts') },
    { to: '/standards', label: t('nav.standards') },
    { to: '/about', label: t('nav.about') },
    { to: '/parts-request', label: t('nav.partsrequest') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const linkClass =
    'rounded text-brand-100 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300';

  return (
    <footer className="mt-auto bg-brand-950 text-brand-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Sirket — en genis sutun, metin burada */}
          <div className="lg:col-span-5">
            <Link
              to="/"
              className="inline-block rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
            >
              {/* Logo koyu zeminde: beyaz bir kart uzerinde durmasi yerine
                  dogrudan yerlesiyor, lacivert marka rengiyle ayni ailede. */}
              <img
                src={logo}
                alt="Guler Aero Solutions"
                width={700}
                height={234}
                loading="lazy"
                className="mb-5 h-11 w-auto brightness-0 invert"
              />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-brand-200">
              {language === 'en'
                ? 'International aerospace parts brokerage and commercial consultancy connecting manufacturers and buyers worldwide.'
                : 'Dünya çapında üreticileri ve alıcıları birbirine bağlayan uluslararası havacılık parça aracılığı ve ticari danışmanlık.'}
            </p>
          </div>

          {/* İletişim */}
          <div className="lg:col-span-4">
            <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-white">
              {t('contact.info.title')}
            </h2>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand-300" aria-hidden="true" />
                <a href="mailto:info@guleraero.com" className={linkClass}>
                  info@guleraero.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand-300" aria-hidden="true" />
                <a href="tel:+905316699519" className={linkClass}>
                  +90 531 669 9519
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 shrink-0 text-whatsapp" aria-hidden="true" />
                <a
                  href="https://wa.me/905316699519"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Hızlı bağlantılar — dar sütun, iki kolona bölünüyor */}
          <div className="lg:col-span-3">
            <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-white">
              {language === 'en' ? 'Quick Links' : 'Hızlı Bağlantılar'}
            </h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm sm:grid-cols-1 lg:grid-cols-1">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  {/* inline-block + dikey dolgu: satir ici <a> min-height
                      almadigi icin dokunmatik hedef 17px'e dusuyordu. */}
                  <Link to={l.to} className={`${linkClass} inline-block py-1`}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-brand-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Guler Aero Solutions.{' '}
            {language === 'en' ? 'All rights reserved.' : 'Tüm hakları saklıdır.'}
          </p>
          <p className="text-brand-400">
            {language === 'en'
              ? 'Aerospace · Aviation · Defense'
              : 'Havacılık · Uzay · Savunma'}
          </p>
        </div>
      </div>
    </footer>
  );
};
