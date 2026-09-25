import React from 'react';
import { X, Heart, Shield, Award, Phone, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();

  if (!isOpen) return null;

  const whatsappNumber = '00249919980435';
  const whatsappClean = '249919980435';
  const whatsappMessage = encodeURIComponent('السلام عليكم، تواصل بخصوص منصة اكتشف البحرين 🇧🇭');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto animate-fade-in">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-6">
        
        {/* Top Header */}
        <div className="p-6 border-b border-stone-100 flex items-center justify-between bg-stone-50/50">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl" aria-hidden="true">🇧🇭</span>
            <div>
              <h3 className="text-xl font-bold font-display text-stone-900">
                {t('about')}
              </h3>
              <p className="text-xs text-stone-500 font-medium">
                {t('appTitle')} · «{t('appSubtitle')}»
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[70vh]">
          
          {/* Mission & Purpose as requested in prompt */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">
              {language === 'ar' ? 'فلسفة ورؤية المشروع' : 'Project Vision & Essence'}
            </h4>
            <blockquote className="text-base sm:text-lg text-stone-800 leading-relaxed font-sans font-medium p-4 bg-stone-50 rounded-2xl border-r-4 rtl:border-r-4 ltr:border-l-4 border-[#C8102E]">
              «اكتشف البحرين هو مشروع رقمي ثقافي يهدف إلى تقديم تاريخ مملكة البحرين ومدنها ومعالمها وتراثها بطريقة حديثة وتفاعلية.»
            </blockquote>
          </div>

          {/* Independence Disclaimer as requested */}
          <div className="p-4 rounded-2xl bg-stone-100 text-xs sm:text-sm text-stone-600 flex items-start gap-3">
            <Shield className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              «هذا التطبيق مشروع ثقافي رقمي مستقل، وليس موقعًا حكوميًا رسميًا.»
            </p>
          </div>

          {/* Royal Dedication Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#FDF2F4] via-white to-[#FDF2F4] border border-[#F9D2D8] space-y-4 shadow-xs">
            <div className="flex items-center gap-2 text-[#C8102E] text-xs font-bold uppercase tracking-wider">
              <Heart className="w-4 h-4 fill-[#C8102E]" />
              <span>🇧🇭 {t('dedicationTitle')}</span>
            </div>

            <p className="text-base sm:text-lg font-serif italic text-stone-900 leading-relaxed">
              «{t('dedicationText')}»
            </p>

            <div className="pt-4 border-t border-[#F9D2D8]/80 flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-0.5">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
                  {language === 'ar' ? 'تصميم وهندسة المنصة' : 'Platform Architecture & Design'}
                </span>
                <span className="text-sm font-bold text-stone-900 font-display">
                  {t('designerCredit')}
                </span>
              </div>

              <a
                href={`https://wa.me/${whatsappClean}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-stone-300 text-xs font-semibold text-stone-800 hover:text-emerald-700 hover:border-emerald-300 transition-colors shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span dir="ltr">{whatsappNumber}</span>
              </a>
            </div>
          </div>

          {/* Sources and Verifications */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider">
              {language === 'ar' ? 'الجهات والمراجع الأكاديمية والرسمية' : 'Verified Academic References'}
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              {language === 'ar'
                ? 'استند المحتوى العلمي والتاريخي إلى منشورات هيئة البحرين للثقافة والآثار (BACA)، ومركز التراث العالمي لليونسكو (UNESCO)، ومتحف البحرين الوطني، ومركز عيسى الثقافي للوثائق التاريخية.'
                : 'Content is strictly referenced from BACA, UNESCO World Heritage Centre, Bahrain National Museum, and the Isa Cultural Centre.'}
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-bold text-white bg-stone-900 hover:bg-black rounded-xl transition-colors"
          >
            {t('close')}
          </button>
        </div>

      </div>
    </div>
  );
};
