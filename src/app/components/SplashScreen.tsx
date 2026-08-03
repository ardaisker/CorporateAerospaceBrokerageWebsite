import React, { useEffect, useState } from 'react';
import logo from '@/assets/logo.png';

interface SplashScreenProps {
  onFinish: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // 3 saniye sonra fade out başlat
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Fade out animasyonu bitince (600ms sonra) ana siteyi göster
      setTimeout(() => {
        onFinish();
      }, 600);
    }, 3000); // 3 saniye animasyon göster

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div 
      className={`fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-center transition-opacity duration-600 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative flex items-center justify-center">
        {/* Dönen loading ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 border-4 border-gray-200 border-t-[#1a2332] rounded-full animate-spin"></div>
        </div>
        
        {/* Logo animasyonu */}
        <div className={`relative z-10 ${fadeOut ? '' : 'animate-logo-entry'}`}>
          <img 
            src={logo} 
            alt="Guler Aero Solutions" 
            className="h-24 w-auto animate-pulse-slow"
          />
        </div>
      </div>
      
      {/* Custom CSS animasyonları için style tag */}
      <style>{`
        @keyframes logo-entry {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-logo-entry {
          animation: logo-entry 0.8s ease-out forwards;
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.02);
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};