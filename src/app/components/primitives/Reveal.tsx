import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  /** Izgara içinde sıralı giriş için: 0, 1, 2… (öge başına 60 ms). */
  index?: number;
  className?: string;
}

/**
 * Görünür olunca beliren içerik.
 *
 * Sayfada hiç hareket yoktu; bölümler kesme geçişle geliyordu. Giriş hareketi
 * ölçülü tutuldu: 500 ms, ease-out, yalnız `opacity` ve `transform` (düzen
 * yeniden hesaplanmıyor, dolayısıyla kayma üretmiyor).
 *
 * Üç güvenlik ağı var:
 *  - `prefers-reduced-motion` açıksa hiç animasyon yok, içerik doğrudan görünür.
 *  - IntersectionObserver yoksa (eski tarayıcı) içerik doğrudan görünür.
 *  - Bir kez göründükten sonra gözlem bırakılıyor; geri kaydırınca tekrar
 *    oynamıyor, bu tür tekrar hareketi rahatsız edici oluyor.
 */
export const Reveal: React.FC<RevealProps> = ({ children, index = 0, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -12% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none ${
        shown ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } ${className}`}
      style={{ transitionDelay: shown ? `${Math.min(index, 6) * 60}ms` : '0ms' }}
    >
      {children}
    </div>
  );
};
