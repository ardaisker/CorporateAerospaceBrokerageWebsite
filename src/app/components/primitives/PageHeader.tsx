import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}

/**
 * Ic sayfa basligi.
 *
 * Alti sayfanin alti da birebir ayni gradyanla aciliyordu
 * (from-brand-900 to-brand-600), boylece sayfalar birbirinden ayirt
 * edilemiyordu ve okuyucu nerede oldugunu yalnizca basligi okuyarak
 * anliyordu.
 *
 * Yeni hali daha sakin bir koyu yuzey uzerinde ince bir izgara dokusu
 * tasiyor, ustune de kirinti yolu (breadcrumb) ekliyor — hem yon duygusu
 * veriyor hem de sayfalarda zaten yayinladigimiz BreadcrumbList semasiyla
 * gorsel olarak ortusuyor.
 */
export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, eyebrow }) => {
  const { t } = useLanguage();

  return (
    <section className="relative isolate overflow-hidden bg-brand-900">
      {/* Duz renk yerine cok hafif bir teknik izgara: havacilik/muhendislik
          diline yakin, metnin okunurlugunu bozmayacak kadar sonuk. */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-brand-700/40 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex items-center gap-1.5 text-sm text-brand-200">
            <li>
              <Link
                to="/"
                className="rounded transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {t('nav.home')}
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li className="font-medium text-white" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>

        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-3xl text-white sm:text-4xl lg:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};
