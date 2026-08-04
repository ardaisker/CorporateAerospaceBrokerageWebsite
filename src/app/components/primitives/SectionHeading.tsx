import React from 'react';

interface SectionHeadingProps {
  /** Bölümü bir kelimeyle konumlayan üst etiket. */
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  /** Koyu zeminlerde. */
  inverse?: boolean;
  as?: 'h2' | 'h3';
}

/**
 * Bölüm başlığı.
 *
 * Sayfalar başlıklarını ya ortalanmış tek bir h2 olarak ya da hiç vermeden
 * doğrudan karta giriyordu; okuyucu bir bölümün nerede başladığını yalnız
 * arka plan değişiminden anlıyordu. Eyebrow + başlık + alt başlık üçlüsü
 * bölümlere tutarlı bir giriş ve tarama için sabit bir çapa veriyor.
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  inverse = false,
  as: Tag = 'h2',
}) => {
  const centered = align === 'center';
  return (
    <div className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'} mb-10 sm:mb-14`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.14em] ${
            inverse ? 'text-brand-200' : 'text-brand-600'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className={`text-2xl sm:text-3xl lg:text-4xl ${inverse ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </Tag>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            inverse ? 'text-brand-100' : 'text-ink-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
      {/* Başlığı bölüme bağlayan ince marka çizgisi. */}
      <div
        className={`mt-6 h-1 w-12 rounded-full ${centered ? 'mx-auto' : ''} ${
          inverse ? 'bg-brand-300' : 'bg-brand-600'
        }`}
        aria-hidden="true"
      />
    </div>
  );
};
