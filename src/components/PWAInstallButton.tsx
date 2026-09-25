import React, { useState } from 'react';
import { Download, X, Smartphone } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { useLanguage } from '../context/LanguageContext';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const { t, language } = useLanguage();

  if (isInstalled) {
    return null;
  }

  if (isInstallable) {
    return (
      <button
        onClick={install}
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#C8102E] bg-[#FDF2F4] border border-[#F9D2D8] rounded-lg hover:bg-[#F9D2D8] transition-colors whitespace-nowrap"
        title={t('installApp')}
      >
        <Download className="w-3.5 h-3.5 text-[#C8102E]" />
        <span>{t('installApp')}</span>
      </button>
    );
  }

  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-white border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors whitespace-nowrap"
          title={t('installApp')}
        >
          <Smartphone className="w-3.5 h-3.5 text-stone-600" />
          <span>{language === 'ar' ? 'تثبيت على iPhone' : 'Install on iOS'}</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fade-in">
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl border border-stone-200">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <h3 className="text-base font-bold text-stone-900 font-display">
                  {language === 'ar' ? 'تثبيت التطبيق على الآيفون' : 'Install on iPhone / iPad'}
                </h3>
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="p-1 rounded-md text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-4 space-y-3 text-sm text-stone-600 leading-relaxed">
                <div className="flex items-start gap-3 p-3 bg-stone-50 rounded-xl">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#C8102E] text-white text-xs font-bold shrink-0">1</span>
                  <p>
                    {language === 'ar'
                      ? 'اضغط على زر المشاركة (Share) في شريط أدوات سفاري.'
                      : 'Tap the Share button in Safari toolbar.'}
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-stone-50 rounded-xl">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#C8102E] text-white text-xs font-bold shrink-0">2</span>
                  <p>
                    {language === 'ar'
                      ? 'مرر لأسفل واضغط على "إضافة إلى الشاشة الرئيسية" (Add to Home Screen).'
                      : 'Scroll down and select "Add to Home Screen".'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 w-full py-2.5 text-sm font-medium text-white bg-[#C8102E] hover:bg-[#A50D25] rounded-xl transition-colors"
              >
                {t('close')}
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
