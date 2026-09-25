import React, { useState } from 'react';
import { X, Check, Copy, Share2, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  url?: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  url
}) => {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const shareText = `${title}\n«${description.slice(0, 120)}...»\n\n🇧🇭 اكتشف البحرين - منصة الثقافة والسياحة:`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText}\n${currentUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url: currentUrl
        });
        onClose();
      } catch {
        // User dismissed or failed
      }
    }
  };

  const shareWhatsApp = () => {
    const link = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText}\n${currentUrl}`)}`;
    window.open(link, '_blank');
  };

  const shareTelegram = () => {
    const link = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`;
    window.open(link, '_blank');
  };

  const shareTwitter = () => {
    const link = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`;
    window.open(link, '_blank');
  };

  const hasNativeShare = typeof navigator !== 'undefined' && !!navigator.share;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fade-in">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden">
        
        {/* Header */}
        <div className="p-5 border-b border-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-[#FDF2F4] text-[#C8102E]">
              <Share2 className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold font-display text-stone-900">
              {t('share')}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Share Preview Card */}
        <div className="p-5 space-y-4">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/90 shadow-2xs space-y-2">
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#C8102E] uppercase">
              <span>🇧🇭 {t('appTitle')}</span>
              <span className="text-stone-300">·</span>
              <span className="text-stone-500 font-normal">بطاقة مشاركة</span>
            </div>
            <h4 className="text-base font-bold font-display text-stone-900 leading-snug">
              {title}
            </h4>
            <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Social Platforms Action Buttons */}
          <div className="grid grid-cols-3 gap-3">
            {/* WhatsApp */}
            <button
              onClick={shareWhatsApp}
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-colors border border-emerald-200/80"
            >
              <span className="text-xl mb-1">💬</span>
              <span className="text-xs font-semibold">WhatsApp</span>
            </button>

            {/* Telegram */}
            <button
              onClick={shareTelegram}
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-sky-50 hover:bg-sky-100 text-sky-700 transition-colors border border-sky-200/80"
            >
              <Send className="w-5 h-5 mb-1 text-sky-600" />
              <span className="text-xs font-semibold">Telegram</span>
            </button>

            {/* X / Twitter */}
            <button
              onClick={shareTwitter}
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-900 transition-colors border border-stone-300/80"
            >
              <span className="text-xl mb-1 font-bold">𝕏</span>
              <span className="text-xs font-semibold">X (Twitter)</span>
            </button>
          </div>

          {/* Native Web Share API */}
          {hasNativeShare && (
            <button
              onClick={handleNativeShare}
              className="w-full py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-black text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>{language === 'ar' ? 'مشاركة عبر تطبيقات الهاتف' : 'Share via Device Apps'}</span>
            </button>
          )}

          {/* Copy Link Input Box */}
          <div className="pt-2">
            <div className="flex items-center gap-2 p-2 bg-stone-100 rounded-xl border border-stone-200">
              <input
                type="text"
                readOnly
                value={currentUrl}
                className="w-full bg-transparent text-xs text-stone-600 outline-none px-2 truncate"
              />
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-stone-50 border border-stone-300 text-xs font-semibold text-stone-800 shrink-0 shadow-2xs transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? t('copied') : t('copyLink')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors"
          >
            {t('close')}
          </button>
        </div>

      </div>
    </div>
  );
};
