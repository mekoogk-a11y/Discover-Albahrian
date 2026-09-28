import React, { useState } from 'react';
import { Search, Heart, Globe, Menu, X, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PWAInstallButton } from './PWAInstallButton';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenFavorites: () => void;
  onOpenAbout: () => void;
  onOpenAdmin: () => void;
  favoritesCount: number;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onOpenFavorites,
  onOpenAbout,
  onOpenAdmin,
  favoritesCount,
  activeSection,
  onNavigate
}) => {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'sudanese-ad-studio', label: language === 'ar' ? '🎙️ صوت إعلاني' : '🎙️ Voice Ad' },
    { id: 'video-tour', label: language === 'ar' ? 'فيديو المدن' : 'Cities Video' },
    { id: 'landmarks', label: t('landmarks') },
    { id: 'cities', label: t('cities') },
    { id: 'history', label: t('history') },
    { id: 'heritage', label: t('heritage') },
    { id: 'museums', label: t('museums') },
    { id: 'map', label: t('map') }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 transition-shadow duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Zone 1: Single text element Brand Zone */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2.5 text-right font-display text-lg sm:text-xl font-bold tracking-tight text-stone-900 hover:text-[#C8102E] transition-colors"
          >
            <span className="text-xl sm:text-2xl" aria-hidden="true">🇧🇭</span>
            <span className="whitespace-nowrap">{t('appTitle')}</span>
          </button>
        </div>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative py-1 transition-colors whitespace-nowrap ${
                  isActive
                    ? 'text-[#C8102E] font-semibold'
                    : 'hover:text-stone-900'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8102E] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions (Search, Favorites, Lang, Install, Menu) */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Quick Search */}
          <button
            onClick={onOpenSearch}
            className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
            title={t('searchPlaceholder')}
            aria-label="Search"
          >
            <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </button>

          {/* Favorites */}
          <button
            onClick={onOpenFavorites}
            className="relative p-2 text-stone-600 hover:text-[#C8102E] hover:bg-stone-100 rounded-lg transition-colors"
            title={t('favorites')}
            aria-label="Favorites"
          >
            <Heart className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            {favoritesCount > 0 && (
              <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-[#C8102E] rounded-full ring-2 ring-white">
                {favoritesCount}
              </span>
            )}
          </button>

          {/* PWA Install Button */}
          <div className="hidden sm:block">
            <PWAInstallButton />
          </div>

          {/* Language Switch */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-stone-700 hover:text-[#C8102E] hover:bg-stone-100 border border-stone-200 rounded-lg transition-colors"
            title={language === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
          >
            <Globe className="w-3.5 h-3.5 text-stone-500" />
            <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fade-in">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-stone-100">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`flex items-center justify-start p-2.5 rounded-xl text-sm font-medium text-right transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#FDF2F4] text-[#C8102E] font-bold'
                    : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => {
                onOpenAbout();
                setMobileMenuOpen(false);
              }}
              className="text-xs font-medium text-stone-600 hover:text-stone-900"
            >
              {t('about')}
            </button>
            <button
              onClick={() => {
                onOpenAdmin();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-1 text-xs font-medium text-stone-500 hover:text-[#C8102E]"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t('adminDashboard')}</span>
            </button>
            <div className="sm:hidden">
              <PWAInstallButton />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
