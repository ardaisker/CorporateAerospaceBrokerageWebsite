import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between lg:justify-center lg:gap-12">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Guler Aero Solutions" className="h-12 sm:h-16" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-[#1a2332]"
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
                className={`text-sm xl:text-base transition-colors whitespace-nowrap ${
                  isActive(item.path)
                    ? 'text-[#1a2332] font-medium'
                    : 'text-gray-600 hover:text-[#1a2332]'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-200">
              <Globe className="w-5 h-5 text-gray-500" />
              <button
                onClick={() => setLanguage('en')}
                className={`text-sm xl:text-base transition-colors ${
                  language === 'en'
                    ? 'text-[#1a2332] font-medium'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                EN
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => setLanguage('tr')}
                className={`text-sm xl:text-base transition-colors ${
                  language === 'tr'
                    ? 'text-[#1a2332] font-medium'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                TR
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`text-base py-2 transition-colors ${
                    isActive(item.path)
                      ? 'text-[#1a2332] font-medium'
                      : 'text-gray-600 hover:text-[#1a2332]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-200">
                <Globe className="w-5 h-5 text-gray-500" />
                <button
                  onClick={() => setLanguage('en')}
                  className={`text-base transition-colors ${
                    language === 'en'
                      ? 'text-[#1a2332] font-medium'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  EN
                </button>
                <span className="text-gray-300">|</span>
                <button
                  onClick={() => setLanguage('tr')}
                  className={`text-base transition-colors ${
                    language === 'tr'
                      ? 'text-[#1a2332] font-medium'
                      : 'text-gray-500 hover:text-gray-700'
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