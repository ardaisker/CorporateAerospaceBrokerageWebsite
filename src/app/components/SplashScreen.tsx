import React, { useEffect, useState } from 'react';
import logo from '@/assets/logo.webp';

interface SplashScreenProps {
  onFinish: () => void;
}

/**
 * Brand intro, shown once per session.
 *
 * This used to be returned *instead of* the site: App rendered
 * `if (showSplash) return <SplashScreen />`, so for 3.6s nothing else existed
 * in the DOM. That put Largest Contentful Paint at 3.6s floor on every first
 * visit, and it is why the page looked blank whenever anything delayed the
 * bundle. It is now an overlay above a fully rendered site, and short.
 */
const HOLD_MS = 700;
const FADE_MS = 400;

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Anyone who asked for reduced motion gets no intro at all.
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      onFinish();
      return;
    }

    const hold = setTimeout(() => setFadeOut(true), HOLD_MS);
    const done = setTimeout(onFinish, HOLD_MS + FADE_MS);
    return () => {
      clearTimeout(hold);
      clearTimeout(done);
    };
  }, [onFinish]);

  return (
    <div
      // aria-hidden + pointer-events-none: the real page underneath is already
      // interactive and readable to assistive tech while this fades.
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-40 w-40 animate-spin rounded-full border-4 border-line border-t-brand-900"></div>
        </div>
        <div className="relative z-10 animate-logo-entry">
          <img
            src={logo}
            alt=""
            width={700}
            height={234}
            className="h-20 w-auto"
            decoding="async"
          />
        </div>
      </div>

      <style>{`
        @keyframes logo-entry {
          0%   { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-logo-entry { animation: logo-entry 0.45s ease-out forwards; }
      `}</style>
    </div>
  );
};
