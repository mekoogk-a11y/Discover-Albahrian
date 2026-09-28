import React from 'react';
import { X, ShieldCheck, Lock, Eye, Database } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto animate-fade-in">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-6 flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-stone-100 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-stone-900">
                {language === 'ar' ? 'سياسة الخصوصية وحماية البيانات' : 'Privacy Policy & Data Protection'}
              </h3>
              <p className="text-xs text-stone-500">
                {language === 'ar' ? 'منصة اكتشف البحرين · آخر تحديث: 2026' : 'Discover Bahrain · Last Updated: 2026'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
          
          <section className="space-y-1.5">
            <h4 className="font-bold text-stone-900 flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#C8102E]" />
              <span>{language === 'ar' ? '1. التزامنا التام بالخصوصية' : '1. Our Privacy Commitment'}</span>
            </h4>
            <p>
              {language === 'ar'
                ? 'نحن نولي خصوصية زوار منصة "اكتشف البحرين" أقصى درجات الاهتمام والشفافية. هذا الموقع مصمم كمنصة ثقافية وسياحية رقمية لا تقوم بجمع أي بيانات شخصية حساسة أو بيعها لأي أطراف ثالثة على الإطلاق.'
                : 'We prioritize user privacy with utmost transparency. Discover Bahrain is an educational and tourism resource that collects no sensitive personal data nor sells any info to third parties.'}
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-bold text-stone-900 flex items-center gap-2">
              <Database className="w-4 h-4 text-[#C8102E]" />
              <span>{language === 'ar' ? '2. التخزين المحلي (Local Storage)' : '2. Local Storage Usage'}</span>
            </h4>
            <p>
              {language === 'ar'
                ? 'يستخدم الموقع ميزة التخزين المحلي في متصفحك (Local Storage) حصرياً لحفظ قائمة "مفضلتي" وتفضيلات اللغة، وتبقى هذه البيانات محفوظة على جهازك الشخصي ولا يتم نقلها أو مشاركتها مع أي خوادم خارجية.'
                : 'The application uses browser Local Storage strictly to remember your "My Favorites" bookmarks and language preferences directly on your device without transmitting data externally.'}
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-bold text-stone-900 flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#C8102E]" />
              <span>{language === 'ar' ? '3. ملفات تعريف الارتباط والتحليلات' : '3. Cookies & Analytics'}</span>
            </h4>
            <p>
              {language === 'ar'
                ? 'لا نستخدم أي ملفات تعريف ارتباط تتبعية مزعجة أو برمجيات إعلانية متطفلة. التحسينات التقنية تقتصر على مراقبة أداء سرعة التصفح لضمان تجربة مستخدم سلسة وفورية وفق معايير Core Web Vitals.'
                : 'We do not deploy invasive tracking cookies or aggressive ad software. Performance metrics serve solely to maintain swift page rendering.'}
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-bold text-stone-900">
              {language === 'ar' ? '4. الروابط الخارجية' : '4. External Links'}
            </h4>
            <p>
              {language === 'ar'
                ? 'يحتوي الموقع على روابط لمواقع رسمية موثوقة (مثل هيئة البحرين للثقافة والآثار وهيئة البحرين للسياحة والمعارض ومنظمة اليونسكو). نحن غير مسؤولين عن ممارسات الخصوصية الخاصة بالمواقع الخارجية.'
                : 'Our website references verified external portals (e.g. BACA, BTEA, UNESCO). We are not responsible for third-party privacy policies.'}
            </p>
          </section>

        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-stone-900 hover:bg-black rounded-xl transition-colors"
          >
            {language === 'ar' ? 'إغلاق' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
