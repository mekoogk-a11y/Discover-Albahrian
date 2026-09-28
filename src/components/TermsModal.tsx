import React from 'react';
import { X, FileText, CheckCircle, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto animate-fade-in">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-6 flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-stone-100 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-stone-100 text-stone-800">
              <FileText className="w-5 h-5 text-[#C8102E]" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-stone-900">
                {language === 'ar' ? 'شروط الاستخدام والإخلاء القانوني' : 'Terms of Service & Disclaimer'}
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
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>{language === 'ar' ? '1. طبيعة المنصة واستقلاليتها' : '1. Nature of the Platform'}</span>
            </h4>
            <p>
              {language === 'ar'
                ? '«اكتشف البحرين هو مشروع رقمي ثقافي مستقل يهدف إلى تقديم تاريخ مملكة البحرين ومدنها ومعالمها وتراثها بطريقة حديثة وتفاعلية، وليس موقعاً حكومياً رسمياً.» تم بناؤه إهداءً ومحبةً لمملكة البحرين وتاريخها العريق.'
                : 'Discover Bahrain is an independent digital cultural project dedicated to documenting the heritage, cities, and landmarks of Bahrain, and is not an official government entity.'}
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-bold text-stone-900 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-600" />
              <span>{language === 'ar' ? '2. دقة المعلومات والمصادر' : '2. Information Accuracy'}</span>
            </h4>
            <p>
              {language === 'ar'
                ? 'تُستمد كافة البيانات التاريخية والأثرية والمعلومات السياحية من جهات رسمية موثقة ومعتمدة، وفي مقدمتها هيئة البحرين للثقافة والآثار (BACA)، وهيئة البحرين للسياحة والمعارض (BTEA)، ومركز التراث العالمي لليونسكو. يُنصح بمراجعة المواقع الرسمية لمواعيد الفعاليات المتغيرة ورسوم الدخول الآنية.'
                : 'All archaeological and cultural data are compiled from authoritative references (BACA, BTEA, UNESCO). Users are encouraged to verify seasonal event schedules on official portals.'}
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-bold text-stone-900">
              {language === 'ar' ? '3. حقوق الملكية الفكرية' : '3. Intellectual Property'}
            </h4>
            <p>
              {language === 'ar'
                ? 'كافة التصاميم البرمجية والهياكل التفاعلية وشفرات المنصة هي نتاج تصميم وهندسة برمجية متخصصة. لا يُسمح بإعادة استغلال محتويات المنصة لأغراض تجارية مضللة أو غير مشروعة.'
                : 'Software architectures and UI designs are crafted specifically for this platform. Unlawful commercial reproduction is prohibited.'}
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-bold text-stone-900">
              {language === 'ar' ? '4. تواصل المطور' : '4. Developer Contact'}
            </h4>
            <p>
              {language === 'ar'
                ? 'لأي استفسارات بخصوص المنصة أو التنسيق المعرفي، يمكن التواصل عبر واتساب: +24919980435.'
                : 'For developer inquiries or feedback, contact via WhatsApp: +24919980435.'}
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
