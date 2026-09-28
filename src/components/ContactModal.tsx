import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Send, CheckCircle, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const whatsappDisplay = '+24919980435';
  const whatsappClean = '24919980435';
  const whatsappUrl = `https://wa.me/${whatsappClean}?text=${encodeURIComponent(
    language === 'ar' ? 'السلام عليكم، تواصل بخصوص منصة اكتشف البحرين' : 'Hello, contact regarding Discover Bahrain'
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto animate-fade-in">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-6">
        
        {/* Header */}
        <div className="p-5 border-b border-stone-100 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-[#FDF2F4] text-[#C8102E]">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-stone-900">
                {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </h3>
              <p className="text-xs text-stone-500">
                {language === 'ar' ? 'اكتشف البحرين · نسعد باستفساراتكم وملاحظاتكم' : 'Discover Bahrain · We welcome your feedback'}
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
        <div className="p-6 space-y-6">
          {/* Quick Contact Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-2xl border border-emerald-200 flex items-center gap-3 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                💬
              </div>
              <div>
                <span className="font-bold block">{language === 'ar' ? 'واتساب مباشر' : 'WhatsApp'}</span>
                <span dir="ltr" className="font-mono text-xs">{whatsappDisplay}</span>
              </div>
            </a>

            <div className="p-3 bg-stone-50 text-stone-800 rounded-2xl border border-stone-200 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#C8102E] text-white flex items-center justify-center shrink-0">
                📍
              </div>
              <div>
                <span className="font-bold block">{language === 'ar' ? 'الجهة المبادرة' : 'Project Focus'}</span>
                <span className="text-stone-600 text-xs">{language === 'ar' ? 'مملكة البحرين' : 'Kingdom of Bahrain'}</span>
              </div>
            </div>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="p-6 bg-emerald-50 text-emerald-800 rounded-2xl border border-emerald-200 text-center space-y-2">
              <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-base">{language === 'ar' ? 'شكراً لتواصلكم!' : 'Thank you for reaching out!'}</h4>
              <p className="text-xs text-emerald-700">
                {language === 'ar' ? 'تم استلام رسالتكم بنجاح وسنقوم بالرد عليكم في أقرب وقت.' : 'Your message has been received successfully.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {language === 'ar' ? 'الاسم الكريم' : 'Your Name'}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={language === 'ar' ? 'أدخل اسمك' : 'Enter your name'}
                  className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-none focus:border-[#C8102E]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@domain.com"
                  className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-none focus:border-[#C8102E]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {language === 'ar' ? 'الرسالة أو الاستفسار' : 'Message'}
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={language === 'ar' ? 'اكتب استفسارك أو اقتراحك هنا...' : 'Write your inquiry here...'}
                  className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-none focus:border-[#C8102E] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#C8102E] hover:bg-[#A50D25] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}</span>
              </button>
            </form>
          )}

          <div className="pt-2 border-t border-stone-100 text-center text-[11px] text-stone-400">
            <span>{language === 'ar' ? 'تصميم كمال جعفر زكريا · واتساب: +24919980435' : 'Designed by Kamal Jaafar Zakaria · WhatsApp: +24919980435'}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
