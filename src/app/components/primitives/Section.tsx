import React from 'react';

type Tone = 'surface' | 'muted' | 'dark' | 'accent';

const TONES: Record<Tone, string> = {
  surface: 'bg-surface',
  muted: 'bg-surface-muted',
  dark: 'bg-brand-900',
  // Tek bir düz lacivert yerine hafif derinlikli, ama hero'daki gradyanı
  // tekrar etmeyen bir yüzey.
  accent: 'bg-gradient-to-br from-brand-800 via-brand-900 to-brand-950',
};

interface SectionProps {
  children: React.ReactNode;
  tone?: Tone;
  /** Dar içerik (uzun metin) için 4xl, ızgaralar için 7xl. */
  width?: '4xl' | '5xl' | '6xl' | '7xl';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  id?: string;
}

const WIDTHS = { '4xl': 'max-w-4xl', '5xl': 'max-w-5xl', '6xl': 'max-w-6xl', '7xl': 'max-w-7xl' };
const SIZES = {
  sm: 'py-10 sm:py-14',
  md: 'py-14 sm:py-20 lg:py-24',
  lg: 'py-20 sm:py-28 lg:py-32',
};

/**
 * Bölüm sarmalayıcı.
 *
 * Her sayfa kendi dikey boşluğunu (py-12 sm:py-16 lg:py-20) elle yazıyordu ve
 * değerler sayfadan sayfaya kayıyordu. Ritim artık tek yerde: aynı hiyerarşideki
 * bölümler aynı nefesi alıyor. `tone` de arka planları dönüşümlü kılıyor —
 * önceden her ikinci bölüm aynı lacivert gradyandı ve sayfa tekrara düşüyordu.
 */
export const Section: React.FC<SectionProps> = ({
  children,
  tone = 'surface',
  width = '7xl',
  size = 'md',
  className = '',
  id,
}) => (
  <section id={id} className={`${TONES[tone]} ${SIZES[size]} ${className}`}>
    <div className={`${WIDTHS[width]} mx-auto px-4 sm:px-6 lg:px-8`}>{children}</div>
  </section>
);
