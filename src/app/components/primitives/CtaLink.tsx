import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'onDark';

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800 shadow-e1 hover:shadow-e2',
  secondary:
    'bg-surface text-brand-900 border border-line-strong hover:border-brand-400 hover:bg-brand-50 active:bg-brand-100',
  ghost: 'text-brand-600 hover:text-brand-700 hover:bg-brand-50',
  onDark: 'bg-white text-brand-900 hover:bg-brand-50 active:bg-brand-100 shadow-e2',
};

interface CtaLinkProps {
  to: string;
  children: React.ReactNode;
  variant?: Variant;
  /** Oklu bağlantılar hover'da oku ileri kaydırır. */
  arrow?: boolean;
  className?: string;
}

/**
 * Birincil eylem bağlantısı.
 *
 * Butonlar her sayfada elle kuruluyordu; aynı işi yapan iki buton farklı
 * dolgu, farklı köşe yarıçapı ve farklı hover davranışına sahipti. Bazılarının
 * hiç :active durumu yoktu, yani basıldığı hissedilmiyordu.
 *
 * Odak halkası bilerek burada: sitenin genel *:focus-visible kuralı ince bir
 * çizgi bırakıyordu, birincil eylemlerde daha görünür olmalı.
 */
export const CtaLink: React.FC<CtaLinkProps> = ({
  to,
  children,
  variant = 'primary',
  arrow = false,
  className = '',
}) => (
  <Link
    to={to}
    className={`group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:text-base ${VARIANTS[variant]} ${className}`}
  >
    {children}
    {arrow && (
      <ArrowRight
        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 sm:h-5 sm:w-5"
        aria-hidden="true"
      />
    )}
  </Link>
);
