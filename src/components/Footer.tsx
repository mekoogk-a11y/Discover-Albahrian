import React from 'react';
import { Phone, Heart, ExternalLink, ShieldCheck, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenAbout: () => void;
  onOpenAdmin: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAbout, onOpenAdmin, onNavigate }) => {
  const { language, t } = useLanguage();

  const whatsappNumber = '00249919980435';
  const whatsappClean = '249919980435';
  const whatsappMessage = encodeURIComponent(
    language === 'ar'
      ? 'السلام عليكم، تواصل بخصوص منصة اكتشف البحرين 🇧🇭'
      : 'Hello, inquiring regarding Discover Bahrain platform 🇧🇭'
  );

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier: Brand & Royal Dedication */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl" aria-hidden="true">🇧🇭</span>
              <div>
                <h2 className="text-2xl font-bold font-display tracking-tight text-white">
                  {t('appTitle')}
                </h2>
                <p className="text-sm font-medium text-stone-400 mt-0.5">
                  «{t('appSubtitle')}»
                </p>
              </div>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed max-w-md">
              {language === 'ar'
                ? 'منصة ثقافية وسياحية رقمية مستقلة، تهدف لتوثيق تاريخ مملكة البحرين وحضاراتها العريقة ومعالمها البارزة وتراثها الإنساني برؤية عصرية سهلة المنال.'
                : 'An independent digital cultural and tourism platform documenting the civilizational heritage, historical landmarks, and timeless spirit of the Kingdom of Bahrain.'}
            </p>
          </div>

          {/* Elegant Dedication Card */}
          <div className="md:col-span-7 bg-stone-800/60 rounded-2xl p-6 sm:p-7 border border-stone-700/60">
            <div className="flex items-center gap-2 text-[#E2334D] text-xs font-bold uppercase tracking-wider mb-2">
              <Heart className="w-3.5 h-3.5 fill-[#E2334D]" />
              <span>{t('dedicationTitle')}</span>
            </div>
            <blockquote className="text-base sm:text-lg font-serif italic text-white leading-relaxed">
              «{t('dedicationText')}»
            </blockquote>
            
            <div className="mt-5 pt-4 border-t border-stone-700/80 flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-0.5">
                <p className="text-sm font-semibold text-stone-200">
                  {t('designerCredit')}
                </p>
                <p className="text-xs text-stone-400">
                  Senior Software Architect & UX/UI Designer
                </p>
              </div>

              {/* Direct WhatsApp Contact */}
              <a
                href={`https://wa.me/${whatsappClean}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-700 hover:bg-stone-600 text-xs font-medium text-white transition-colors border border-stone-600"
                title="تواصل عبر واتساب"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span dir="ltr">{whatsappNumber}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links & Institutional Sources */}
        <div className="py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm border-b border-stone-800/80">
          <div>
            <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
              {language === 'ar' ? 'أقسام المنصة' : 'Platform'}
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('landmarks')} className="hover:text-white transition-colors">
                  {t('landmarks')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cities')} className="hover:text-white transition-colors">
                  {t('cities')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('museums')} className="hover:text-white transition-colors">
                  {t('museums')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('history')} className="hover:text-white transition-colors">
                  {t('history')}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
              {language === 'ar' ? 'التراث والخريطة' : 'Heritage & Map'}
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('heritage')} className="hover:text-white transition-colors">
                  {t('heritage')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('map')} className="hover:text-white transition-colors">
                  {t('map')}
                </button>
              </li>
              <li>
                <button onClick={onOpenAbout} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" />
                  <span>{t('about')}</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenAdmin} className="hover:text-white transition-colors flex items-center gap-1.5 text-stone-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{t('adminDashboard')}</span>
                </button>
              </li>
            </ul>
          </div>

          <div className="col-span-2">
            <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
              {language === 'ar' ? 'المصادر والجهات المرجعية الرسمية' : 'Official Verified References'}
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <a
                href="https://culture.gov.bh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <span>هيئة البحرين للثقافة والآثار (BACA)</span>
                <ExternalLink className="w-3 h-3 text-stone-500" />
              </a>
              <a
                href="https://whc.unesco.org/en/statesparties/bh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <span>مواقع التراث العالمي لمملكة البحرين - اليونسكو (UNESCO)</span>
                <ExternalLink className="w-3 h-3 text-stone-500" />
              </a>
              <a
                href="https://btea.bh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <span>هيئة البحرين للسياحة والمعارض (BTEA)</span>
                <ExternalLink className="w-3 h-3 text-stone-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Independence Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            {language === 'ar'
              ? 'مشروع ثقافي رقمي مستقل، هدفه التوثيق والتعريف بتراث وحضارة البحرين.'
              : 'Independent digital cultural project dedicated to documenting Bahraini heritage.'}
          </p>
          <p className="tabular-nums">
            © {new Date().getFullYear()} {t('appTitle')}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
