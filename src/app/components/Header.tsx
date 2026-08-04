import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Menu, X } from 'lucide-react';
import logo from '@/assets/logo.webp';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Sayfa kayinca baslik yuzeyden ayrilsin: sabit baslik icerigin uzerinde
  // yuzerken tek bir 1px cizgi ile ayirt edilemiyordu.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
    { path: '/spare-parts', label: t('nav.spareparts') },
    { path: '/standards', label: t('nav.standards') },
    { path: '/about', label: t('nav.about') },
    { path: '/parts-request', label: t('nav.partsrequest') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-surface/95 backdrop-blur-sm transition-shadow duration-200 ${
        scrolled ? 'border-line shadow-e2' : 'border-line/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between lg:justify-center lg:gap-12">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Guler Aero Solutions" width={700} height={234} className="h-12 w-auto sm:h-16" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-ink-muted hover:text-brand-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                aria-current={isActive(item.path) ? 'page' : undefined}
                className={`relative whitespace-nowrap py-1 text-sm transition-colors duration-200 xl:text-base ${
                  isActive(item.path)
                    ? 'font-semibold text-brand-900'
                    : 'text-ink-muted hover:text-brand-900'
                }`}
              >
                {item.label}
                {/* Renk tek basina bir konum isareti degil (WCAG: bilgiyi
                    yalniz renkle tasima). Aktif sayfa ayrica cizgiyle. */}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-brand-600 transition-all duration-200 ${
                    isActive(item.path) ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`}
                  aria-hidden="true"
                />
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-line">
              <Globe className="w-5 h-5 text-ink-subtle" />
              <button
                onClick={() => setLanguage('en')}
                className={`text-sm xl:text-base transition-colors ${
                  language === 'en'
                    ? 'text-brand-900 font-medium'
                    : 'text-ink-subtle hover:text-ink-muted'
                }`}
              >
                EN
              </button>
              <span className="text-brand-200">|</span>
              <button
                onClick={() => setLanguage('tr')}
                className={`text-sm xl:text-base transition-colors ${
                  language === 'tr'
                    ? 'text-brand-900 font-medium'
                    : 'text-ink-subtle hover:text-ink-muted'
                }`}
              >
                TR
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-line pt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`text-base py-2 transition-colors ${
                    isActive(item.path)
                      ? 'text-brand-900 font-medium'
                      : 'text-ink-muted hover:text-brand-900'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-3 pt-3 border-t border-line">
                <Globe className="w-5 h-5 text-ink-subtle" />
                <button
                  onClick={() => setLanguage('en')}
                  className={`text-base transition-colors ${
                    language === 'en'
                      ? 'text-brand-900 font-medium'
                      : 'text-ink-subtle hover:text-ink-muted'
                  }`}
                >
                  EN
                </button>
                <span className="text-brand-200">|</span>
                <button
                  onClick={() => setLanguage('tr')}
                  className={`text-base transition-colors ${
                    language === 'tr'
                      ? 'text-brand-900 font-medium'
                      : 'text-ink-subtle hover:text-ink-muted'
                  }`}
                >
                  TR
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};