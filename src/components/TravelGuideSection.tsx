import React, { useState } from 'react';
import { TravelGuideFAQ } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { HelpCircle, ChevronDown, ChevronUp, BookOpen, Compass, CheckCircle } from 'lucide-react';

interface TravelGuideSectionProps {
  faqs: TravelGuideFAQ[];
}

export const TravelGuideSection: React.FC<TravelGuideSectionProps> = ({ faqs }) => {
  const { language } = useLanguage();
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqs[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="guide" className="py-16 bg-white border-b border-stone-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C8102E] mb-2">
            <BookOpen className="w-4 h-4 text-[#C8102E]" />
            <span>{language === 'ar' ? 'دليل السفر والأسئلة الشائعة' : 'Travel Guide & Frequently Asked Questions'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-stone-900 tracking-tight">
            {language === 'ar' ? 'كل ما تود معرفته عن السياحة وزيارة البحرين' : 'Everything You Need to Know Before Visiting Bahrain'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600">
            {language === 'ar'
              ? 'إجابات شاملة وموثقة على أكثر الأسئلة بحثاً من السياح والزوار للتخطيط لرحلة لا تُنسى في مملكة البحرين.'
              : 'Detailed, authoritative answers to the most queried travel questions to help you plan your Bahrain journey.'}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            const question = language === 'ar' ? faq.questionAr : faq.questionEn;
            const answer = language === 'ar' ? faq.answerAr : faq.answerEn;

            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-stone-200/80 bg-stone-50/60 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-right rtl:text-right ltr:text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-stone-900 hover:text-[#C8102E] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#C8102E] shrink-0" />
                    <span>{question}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-stone-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-stone-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-stone-700 leading-relaxed font-sans border-t border-stone-200/40">
                    <p>{answer}</p>
                    <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>{language === 'ar' ? 'معلومات موثقة وفق هيئة البحرين للسياحة والمعارض' : 'Verified by Bahrain Tourism & Exhibitions Authority'}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Travel Quick Tips Box */}
        <div className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-stone-900 to-stone-950 text-white rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-right rtl:sm:text-right ltr:sm:text-left">
            <h3 className="text-xl font-bold font-display text-white">
              {language === 'ar' ? 'هل تخطط لزيارة قريبة لمملكة البحرين؟' : 'Planning a Trip to Bahrain Soon?'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300">
              {language === 'ar'
                ? 'استمتع بالضيافة الخليجية الدافئة، والتأشيرة الإلكترونية الميسرة لغالبية الجنسيات، وأفضل أوقات الزيارة بين أكتوبر وأبريل.'
                : 'Enjoy legendary Arabian hospitality, hassle-free eVisa for most nationalities, and ideal weather between October and April.'}
            </p>
          </div>
          <a
            href="https://btea.bh"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#C8102E] hover:bg-[#A50D25] text-white text-xs sm:text-sm font-bold whitespace-nowrap shadow-md transition-all shrink-0"
          >
            {language === 'ar' ? 'بوابة التأشيرات والسياحة الرسمية ←' : 'Official Travel Portal →'}
          </a>
        </div>

      </div>
    </section>
  );
};
