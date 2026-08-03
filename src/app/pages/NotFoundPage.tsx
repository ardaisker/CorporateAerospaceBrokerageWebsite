import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEOHead } from '@/app/components/SEOHead';
import { Home, Wrench, Mail } from 'lucide-react';

/**
 * Unknown paths previously rendered the site chrome with an empty body — no
 * heading, no way out. On a static host every mistyped or stale URL lands here,
 * so it needs to be a real page with real exits.
 */
export const NotFoundPage: React.FC = () => {
  const { t } = useLanguage();

  const exits = [
    { to: '/', icon: Home, label: t('notfound.home') },
    { to: '/services', icon: Wrench, label: t('notfound.services') },
    { to: '/contact', icon: Mail, label: t('notfound.contact') },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={t('notfound.title')}
        description={t('notfound.subtitle')}
        canonical="https://guleraero.com"
      />

      <section className="bg-gradient-to-br from-[#1a2332] to-[#2a5298] py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-5xl sm:text-6xl font-bold text-white/40 mb-4">404</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              {t('notfound.title')}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
              {t('notfound.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl">
            {exits.map(({ to, icon: Icon, label }) => (
              <Link
                key={to}
                to={to}
                className="flex items-center gap-3 rounded-lg border border-gray-200 p-5 transition-colors hover:border-[#2a5298] hover:bg-gray-50"
              >
                <Icon className="h-5 w-5 shrink-0 text-[#2a5298]" aria-hidden="true" />
                <span className="font-medium text-[#1a2332]">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
