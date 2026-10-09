import React from 'react';
import { Sparkles, Brain, ArrowLeft, Shield, Server, User, Phone, BookOpen, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface TechArticleTeaserSectionProps {
  onOpenArticle: () => void;
}

export const TechArticleTeaserSection: React.FC<TechArticleTeaserSectionProps> = ({
  onOpenArticle
}) => {
  const { language } = useLanguage();

  return (
    <section id="tech-article-feature" className="py-14 bg-gradient-to-b from-[#FAF8F5] via-slate-50 to-[#FAF8F5] border-y border-stone-200/90 relative overflow-hidden">
      
      {/* Subtle tech background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold tracking-wide shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>دراسة وتقارير تقنية متخصصة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display text-slate-950 tracking-tight">
            {language === 'ar' ? 'التحول الرقمي والذكاء الاصطناعي في البحرين' : 'Digital Transformation & AI in Bahrain'}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-medium max-w-2xl mx-auto">
            {language === 'ar'
              ? 'قراءة استشرافية شاملة وموثقة في بنية الاقتصاد المعرفي البحريني، والحكومة الإلكترونية، ومراكز البيانات السحابية، ورؤية البحرين الاقتصادية 2030.'
              : 'A comprehensive journalistic study on Bahrain’s knowledge economy, eGovernment, cloud computing, and AI vision.'}
          </p>
        </div>

        {/* Feature Presentation Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all duration-300 hover:shadow-2xl">
          
          {/* Visual Column - Modern Architecture (Strictly Zero Humans) */}
          <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full bg-slate-950 overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80"
              alt="أبراج وناطحات سحاب المركز المالي لمدينة المنامة في مملكة البحرين تعكس التطور المعماري والتكنولوجي"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/80 backdrop-blur-md text-white text-xs font-bold w-fit mb-2 shadow-sm">
                <Brain className="w-3.5 h-3.5" />
                <span>رؤية البحرين 2030</span>
              </span>
              <p className="text-xs text-slate-300 font-medium">
                المنامة: عاصمة رائدة للحوسبة السحابية والتكنولوجيا المالية في الشرق الأوسط
              </p>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              {/* Badges Bar */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200">
                  الحكومة الإلكترونية
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-sky-50 text-sky-700 border border-sky-200">
                  الحوسبة السحابية AWS
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                  الأمن السيبراني
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-purple-50 text-purple-700 border border-purple-200">
                  التكنولوجيا المالية FinTech
                </span>
                <span className="inline-flex items-center gap-1 text-slate-500 font-normal mr-auto">
                  <Clock className="w-3.5 h-3.5" />
                  <span>9 دقائق قراءة</span>
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-950 leading-tight">
                التحول الرقمي في مملكة البحرين: الذكاء الاصطناعي والتكنولوجيا ومستقبل الاقتصاد
              </h3>

              {/* Brief Excerpt */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                دراسة تحليلية توضح كيف تصدرت البحرين دول المنطقة في تطبيق سياسة «السحابة أولاً»، وبناء منظومة الحكومة الإلكترونية الشاملة، وحماية الفضاء السيبراني بقوانين عالمية متطورة، وفتح آفاق واعدة أمام رواد الأعمال والشركات الناشئة في مجالات الذكاء الاصطناعي.
              </p>

              {/* Author Attribution */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-slate-600 border-t border-slate-100">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <User className="w-4 h-4 text-blue-600" />
                  <span>إعداد: كمال جعفر زكريا موسى</span>
                </div>
                <a
                  href="https://wa.me/24919980435"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-semibold"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span dir="ltr">00249919980435</span>
                </a>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenArticle}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-700 to-slate-900 hover:from-blue-800 hover:to-slate-950 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <BookOpen className="w-4 h-4" />
                <span>قراءة المقال كاملاً بالدراسة التفصيلية</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  navigator.clipboard.writeText('https://discover-albahrian.vercel.app/digital-transformation-bahrain');
                  alert('تم نسخ رابط المقال المباشر بنجاح!');
                }}
                className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-xs sm:text-sm transition-colors"
                title="نسخ الرابط المباشر للمقال"
              >
                مشاركة الرابط
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
