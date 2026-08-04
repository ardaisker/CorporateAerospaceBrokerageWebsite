import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  children: React.ReactNode;
  /** Verildiğinde kart tıklanabilir olur ve hover'da yükselir. */
  to?: string;
  className?: string;
}

/**
 * Kart.
 *
 * Kartların hiçbirinde hover durumu yoktu — tıklanabilir olanlar bile hiçbir
 * geri bildirim vermiyordu (UX kuralı: "no hover feedback on clickable
 * elements"). Gölge de yoktu, sadece 1px kenarlık; kart zeminden ayrışmıyordu.
 * Artık tek bir yükselti ölçeği var ve etkileşim hissediliyor.
 *
 * Yükselme `transform` ile yapılıyor, `top`/`margin` ile değil: düzen yeniden
 * hesaplanmıyor, dolayısıyla kayma (CLS) üretmiyor.
 */
const BASE =
  'group relative rounded-xl border border-line bg-surface p-6 sm:p-8 shadow-e1 transition-[transform,box-shadow,border-color] duration-200 ease-out';
const INTERACTIVE =
  'hover:-translate-y-1 hover:border-brand-300 hover:shadow-e3 focus-visible:-translate-y-1 focus-visible:shadow-e3 motion-reduce:hover:translate-y-0 motion-reduce:transition-none';

export const Card: React.FC<CardProps> = ({ children, to, className = '' }) => {
  if (to) {
    return (
      <Link to={to} className={`${BASE} ${INTERACTIVE} block cursor-pointer ${className}`}>
        {children}
      </Link>
    );
  }
  return <div className={`${BASE} ${className}`}>{children}</div>;
};

/**
 * Kart içindeki ikon kabı.
 *
 * İkonlar 8×8'den 16×16'ya kadar rastgele boyutlardaydı ve bazıları dolu daire,
 * bazıları köşeli kutuydu. Tek bir kap, tek bir ölçek.
 */
export const CardIcon: React.FC<{
  icon: React.ComponentType<{ className?: string }>;
  tone?: 'solid' | 'soft';
}> = ({ icon: Icon, tone = 'soft' }) => (
  <div
    className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg transition-colors duration-200 ${
      tone === 'solid'
        ? 'bg-brand-600 text-white'
        : 'bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white'
    }`}
    aria-hidden="true"
  >
    <Icon className="h-6 w-6" />
  </div>
);
