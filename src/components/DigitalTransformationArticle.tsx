import React, { useState, useEffect } from 'react';
import {
  Cpu,
  Shield,
  Cloud,
  Server,
  Database,
  TrendingUp,
  Sparkles,
  Brain,
  Lock,
  Network,
  Lightbulb,
  ExternalLink,
  Share2,
  Check,
  Copy,
  Printer,
  ArrowRight,
  Clock,
  Calendar,
  User,
  Phone,
  Bookmark,
  ChevronDown,
  Layers,
  Code2,
  Building2,
  Compass,
  AlertCircle,
  Eye,
  MessageCircle
} from 'lucide-react';

interface DigitalTransformationArticleProps {
  onBackToHome: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const DigitalTransformationArticle: React.FC<DigitalTransformationArticleProps> = ({
  onBackToHome,
  onNavigateSection
}) => {
  // Reading progress state
  const [readingProgress, setReadingProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [activeSectionId, setActiveSectionId] = useState<string>('intro');

  const articleUrl = 'https://discover-albahrian.vercel.app/digital-transformation-bahrain';
  const articleTitle = 'التحول الرقمي في مملكة البحرين: الذكاء الاصطناعي والتكنولوجيا ومستقبل الاقتصاد';
  const authorName = 'كمال جعفر زكريا موسى';
  const authorWhatsapp = '00249919980435';
  const authorWhatsappLink = 'https://wa.me/24919980435';

  // Dynamic SEO & Structured Data Management
  useEffect(() => {
    // 1. Scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 2. Save original meta values
    const originalTitle = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const originalCanonical = canonicalLink ? canonicalLink.getAttribute('href') : '';

    const getMeta = (selector: string) => document.querySelector(selector)?.getAttribute('content') || '';
    const setMeta = (selector: string, val: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute('content', val);
    };

    const origOgType = getMeta('meta[property="og:type"]');
    const origOgTitle = getMeta('meta[property="og:title"]');
    const origOgDesc = getMeta('meta[property="og:description"]');
    const origOgUrl = getMeta('meta[property="og:url"]');
    const origOgImage = getMeta('meta[property="og:image"]');
    const origOgImageAlt = getMeta('meta[property="og:image:alt"]');
    const origTwTitle = getMeta('meta[name="twitter:title"]');
    const origTwDesc = getMeta('meta[name="twitter:description"]');
    const origTwImage = getMeta('meta[name="twitter:image"]');
    const origTwImageAlt = getMeta('meta[name="twitter:image:alt"]');

    const articleOgImage = 'https://discover-albahrian.vercel.app/og-digital-transformation.jpg';
    const articleMetaDesc =
      'دراسة وبحث صحفي تقني شامل حول مسيرة التحول الرقمي في مملكة البحرين، وتطبيقات الذكاء الاصطناعي، والحكومة الإلكترونية، والأمن السيبراني، ومستقبل الاقتصاد الرقمي ورؤية البحرين 2030.';

    // Update for this article
    document.title = `${articleTitle} | اكتشف البحرين`;
    if (metaDesc) metaDesc.setAttribute('content', articleMetaDesc);
    if (canonicalLink) canonicalLink.setAttribute('href', articleUrl);

    setMeta('meta[property="og:type"]', 'article');
    setMeta('meta[property="og:title"]', `${articleTitle} | اكتشف البحرين`);
    setMeta('meta[property="og:description"]', articleMetaDesc);
    setMeta('meta[property="og:url"]', articleUrl);
    setMeta('meta[property="og:image"]', articleOgImage);
    setMeta('meta[property="og:image:secure_url"]', articleOgImage);
    setMeta('meta[property="og:image:alt"]', articleTitle);

    setMeta('meta[name="twitter:title"]', `${articleTitle} | اكتشف البحرين`);
    setMeta('meta[name="twitter:description"]', articleMetaDesc);
    setMeta('meta[name="twitter:image"]', articleOgImage);
    setMeta('meta[name="twitter:image:alt"]', articleTitle);

    // 3. Inject Article & BreadcrumbList JSON-LD Schema
    const schemaScript = document.createElement('script');
    schemaScript.id = 'digital-transformation-article-schema';
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          '@id': `${articleUrl}#article`,
          isPartOf: {
            '@type': 'WebSite',
            '@id': 'https://discover-albahrian.vercel.app/#website',
            name: 'اكتشف البحرين | Discover Bahrain',
            url: 'https://discover-albahrian.vercel.app/'
          },
          headline: articleTitle,
          description:
            'دراسة وبحث صحفي تقني شامل حول مسيرة التحول الرقمي في مملكة البحرين، وتطبيقات الذكاء الاصطناعي، والحكومة الإلكترونية، والأمن السيبراني، ومستقبل الاقتصاد الرقمي.',
          image: [
            'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80'
          ],
          datePublished: '2026-10-09T08:00:00+03:00',
          dateModified: '2026-10-09T10:00:00+03:00',
          mainEntityOfPage: articleUrl,
          author: {
            '@type': 'Person',
            name: authorName,
            url: authorWhatsappLink
          },
          publisher: {
            '@type': 'Organization',
            name: 'اكتشف البحرين | Discover Bahrain',
            url: 'https://discover-albahrian.vercel.app/',
            logo: {
              '@type': 'ImageObject',
              url: 'https://discover-albahrian.vercel.app/icon.svg'
            }
          },
          keywords: [
            'التحول الرقمي في البحرين',
            'التكنولوجيا في البحرين',
            'الذكاء الاصطناعي في البحرين',
            'الحكومة الإلكترونية البحرينية',
            'الاقتصاد الرقمي في البحرين',
            'الأمن السيبراني',
            'الابتكار التكنولوجي',
            'رؤية البحرين 2030'
          ],
          inLanguage: 'ar'
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${articleUrl}#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'الرئيسية',
              item: 'https://discover-albahrian.vercel.app/'
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'الدراسات والتقارير التقنية',
              item: `${articleUrl}#`
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: articleTitle,
              item: articleUrl
            }
          ]
        }
      ]
    });
    document.head.appendChild(schemaScript);

    // 4. Track reading progress and active section
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, progress)));
      }

      // Check current visible section for TOC
      const sections = [
        'intro',
        'section-1',
        'section-2',
        'section-3',
        'section-4',
        'section-5',
        'section-6',
        'section-7',
        'section-8',
        'conclusion'
      ];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            setActiveSectionId(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) metaDesc.setAttribute('content', originalDesc);
      if (canonicalLink && originalCanonical) canonicalLink.setAttribute('href', originalCanonical);

      if (origOgType) setMeta('meta[property="og:type"]', origOgType);
      if (origOgTitle) setMeta('meta[property="og:title"]', origOgTitle);
      if (origOgDesc) setMeta('meta[property="og:description"]', origOgDesc);
      if (origOgUrl) setMeta('meta[property="og:url"]', origOgUrl);
      if (origOgImage) setMeta('meta[property="og:image"]', origOgImage);
      if (origOgImage) setMeta('meta[property="og:image:secure_url"]', origOgImage);
      if (origOgImageAlt) setMeta('meta[property="og:image:alt"]', origOgImageAlt);

      if (origTwTitle) setMeta('meta[name="twitter:title"]', origTwTitle);
      if (origTwDesc) setMeta('meta[name="twitter:description"]', origTwDesc);
      if (origTwImage) setMeta('meta[name="twitter:image"]', origTwImage);
      if (origTwImageAlt) setMeta('meta[name="twitter:image:alt"]', origTwImageAlt);

      const existingScript = document.getElementById('digital-transformation-article-schema');
      if (existingScript) existingScript.remove();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(articleUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareTwitter = () => {
    const text = encodeURIComponent(`${articleTitle}\n\n`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(articleUrl)}`, '_blank');
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(`${articleTitle}\n\nاقرأ المقال كاملاً:\n${articleUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleShareLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Font size class mapper
  const contentFontSizeClass =
    fontSize === 'xlarge'
      ? 'text-xl leading-relaxed sm:leading-loose'
      : fontSize === 'large'
      ? 'text-lg leading-relaxed sm:leading-loose'
      : 'text-base sm:text-lg leading-relaxed sm:leading-loose';

  const tableOfContents = [
    { id: 'intro', title: 'المقدمة: مسار التحول ورؤية البحرين 2030' },
    { id: 'section-1', title: '1. الحكومة الإلكترونية وتطوير البوابات الرقمية' },
    { id: 'section-2', title: '2. الذكاء الاصطناعي وتطبيقاته في القطاعات الحيوية' },
    { id: 'section-3', title: '3. الأمن السيبراني وحماية البيانات الشخصية' },
    { id: 'section-4', title: '4. التكنولوجيا والفرص الواعدة لرواد الأعمال' },
    { id: 'section-5', title: '5. الحوسبة السحابية ومنصة البيانات المفتوحة' },
    { id: 'section-6', title: '6. التحول الرقمي في القطاع السياحي والضيافة' },
    { id: 'section-7', title: '7. المهارات الرقمية وبناء رأس المال البشري' },
    { id: 'section-8', title: '8. التحديات التقنية واستشراف المستقبل' },
    { id: 'conclusion', title: 'الخاتمة: نحو اقتصاد معرفي مستدام' },
    { id: 'author-card', title: 'بطاقة الكاتب والمصادر المعتمدة' }
  ];

  return (
    <article className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-sky-500 selection:text-white" dir="rtl">
      
      {/* 1. Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-blue-600 to-indigo-600 z-50 transition-all duration-150"
        style={{ width: `${readingProgress}%` }}
        role="progressbar"
        aria-valuenow={readingProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* 2. Top Navigation Bar for the Article */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs" aria-label="شريط تنقل المقال">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          
          {/* Breadcrumb & Home Link */}
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-slate-700 hover:text-blue-700 hover:bg-slate-100 transition-colors font-medium text-xs sm:text-sm"
              title="العودة إلى الصفحة الرئيسية لمنصة اكتشف البحرين"
            >
              <ArrowRight className="w-4 h-4 text-blue-600" />
              <span>الرئيسية</span>
            </button>
            <span className="text-slate-300 font-light" aria-hidden="true">/</span>
            <span className="text-xs sm:text-sm font-semibold text-blue-700 hidden sm:inline">
              دراسات وتكنولوجيا
            </span>
            <span className="text-slate-300 font-light hidden sm:inline" aria-hidden="true">/</span>
            <span className="text-xs text-slate-500 truncate max-w-[140px] md:max-w-xs font-normal">
              التحول الرقمي في البحرين
            </span>
          </div>

          {/* Reading tools: Font Size & Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            
            {/* Font Resizer */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs text-slate-700" title="تغيير حجم خط القراءة">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-1 rounded transition-colors ${fontSize === 'normal' ? 'bg-white font-bold shadow-xs text-blue-700' : 'hover:bg-slate-200'}`}
              >
                أ
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-1 rounded transition-colors ${fontSize === 'large' ? 'bg-white font-bold shadow-xs text-blue-700' : 'hover:bg-slate-200'}`}
              >
                أ+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-2 py-1 rounded transition-colors ${fontSize === 'xlarge' ? 'bg-white font-bold shadow-xs text-blue-700' : 'hover:bg-slate-200'}`}
              >
                أ++
              </button>
            </div>

            {/* Quick Share Buttons */}
            <button
              onClick={handleShareWhatsApp}
              className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors border border-slate-200"
              title="مشاركة المقال عبر واتساب"
              aria-label="مشاركة عبر واتساب"
            >
              <MessageCircle className="w-4 h-4" />
            </button>
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
              title="نسخ رابط المقال المباشر"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">تم النسخ</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">نسخ الرابط</span>
                </>
              )}
            </button>
            <button
              onClick={handlePrint}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200 hidden sm:inline-flex"
              title="طباعة المقال أو حفظ كـ PDF"
              aria-label="طباعة"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* 3. Hero Header Section */}
      <header className="relative bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Subtle Tech Grid Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto space-y-6">
          
          {/* Category & Verified Badge */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>بحث ودراسة تقنية متخصصة</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-medium">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>مصادر حكومية ورسمية موثقة</span>
            </span>
            <span className="inline-flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              <span>وقت القراءة: 9 دقائق</span>
            </span>
          </div>

          {/* Primary Main H1 Title - Single and High-Impact */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white leading-tight md:leading-[1.25]">
            التحول الرقمي في مملكة البحرين:
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">
              الذكاء الاصطناعي والتكنولوجيا ومستقبل الاقتصاد
            </span>
          </h1>

          {/* Subtitle / Deck */}
          <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl font-light">
            قراءة تحليلية استشرافية في بنية الاقتصاد المعرفي البحريني، ومسيرة الحكومة الإلكترونية، واستضافة مراكز البيانات السحابية، وريادة الأعمال الرقمية اتساقاً مع رؤية البحرين الاقتصادية 2030.
          </p>

          {/* Author Byline & Date Bar */}
          <div className="pt-6 border-t border-slate-700/80 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-600 to-blue-700 flex items-center justify-center text-white font-bold shadow-md ring-2 ring-sky-400/30">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-sm sm:text-base">
                  إعداد: {authorName}
                </p>
                <p className="text-xs text-sky-300 font-medium">
                  باحث ومطور نظم البرمجيات وهندسة تجربة المستخدم
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-slate-400">
                <Calendar className="w-4 h-4 text-sky-400" />
                <time dateTime="2026-10-09">أكتوبر 2026</time>
              </div>
              <a
                href={authorWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-sm"
                title="تواصل مباشر مع الكاتب عبر واتساب"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>واتساب الكاتب</span>
              </a>
            </div>
          </div>

        </div>
      </header>

      {/* 4. Main Article Photo: Bahrain Modern Skyline Architecture (Strictly NO Humans) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-10 relative z-10">
        <figure className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80"
            alt="أبراج وناطحات سحاب المركز المالي لمدينة المنامة في مملكة البحرين ليلاً مع إضاءات معمارية حديثة تعكس الازدهار الرقمي"
            loading="eager"
            decoding="async"
            className="w-full aspect-16/9 sm:aspect-21/9 object-cover object-center group-hover:scale-102 transition-transform duration-700"
          />
          <figcaption className="p-3 sm:p-4 bg-slate-900 text-xs text-slate-400 flex items-center justify-between gap-2 border-t border-slate-800">
            <span>المنامة الحديثة: بنية تحتية عمرانية ومالية متقدمة تواكب استراتيجيات التحول الرقمي الوطنية</span>
            <span className="text-[11px] text-sky-400 font-mono">Kingdom of Bahrain • Tech Vision</span>
          </figcaption>
        </figure>
      </div>

      {/* 5. Main Content Layout (Table of Contents Sidebar + Editorial Body) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Sticky Table of Contents (Desktop Sidebar) */}
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className="sticky top-24 space-y-6">
              
              <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm">
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100 text-slate-900 font-bold text-sm">
                  <Bookmark className="w-4 h-4 text-blue-600" />
                  <span>فهرس موضوعات المقال</span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm font-medium">
                  {tableOfContents.map((item) => {
                    const isActive = activeSectionId === item.id;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full text-right px-2.5 py-1.5 rounded-lg transition-colors leading-relaxed block ${
                            isActive
                              ? 'bg-sky-50 text-blue-700 font-bold border-r-2 border-blue-600'
                              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                          }`}
                        >
                          {item.title}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Quick Key Metrics Card */}
              <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-5 shadow-sm space-y-4 border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider">
                  <TrendingUp className="w-4 h-4" />
                  <span>مؤشرات التحول الرقمي</span>
                </div>
                <div className="space-y-3 divide-y divide-slate-800 text-xs">
                  <div className="pt-2">
                    <p className="text-slate-400">سياسة السحابة أولاً (Cloud-First)</p>
                    <p className="text-sm font-bold text-white mt-0.5">الأولى إقليمياً في تطبيقها منذ عام 2017</p>
                  </div>
                  <div className="pt-2">
                    <p className="text-slate-400">منطقة مراكز بيانات AWS</p>
                    <p className="text-sm font-bold text-sky-300 mt-0.5">أول منطقة سحابية متكاملة في الشرق الأوسط</p>
                  </div>
                  <div className="pt-2">
                    <p className="text-slate-400">البوابة الوطنية bahrain.bh</p>
                    <p className="text-sm font-bold text-emerald-400 mt-0.5">مئات الخدمات الرقمية المتكاملة 24/7</p>
                  </div>
                  <div className="pt-2">
                    <p className="text-slate-400">البيئة الرقابية التجريبية (Sandbox)</p>
                    <p className="text-sm font-bold text-amber-300 mt-0.5">ريادة في اختبار حلول التكنولوجيا المالية FinTech</p>
                  </div>
                </div>
              </div>

              {/* Internal Quick Links to Discover Bahrain */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-xs space-y-3">
                <p className="font-bold text-slate-800 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-blue-600" />
                  <span>تصفح المنصة السياحية</span>
                </p>
                <p className="text-slate-600 leading-relaxed">
                  اكتشف المعالم والمتاحف والمدن الموثقة في منصتنا التفاعلية:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => onNavigateSection?.('landmarks')}
                    className="px-2.5 py-1 bg-white hover:bg-slate-100 rounded-md border border-slate-200 text-slate-700 font-medium transition-colors"
                  >
                    معالم البحرين
                  </button>
                  <button
                    onClick={() => onNavigateSection?.('cities')}
                    className="px-2.5 py-1 bg-white hover:bg-slate-100 rounded-md border border-slate-200 text-slate-700 font-medium transition-colors"
                  >
                    مدن ومناطق
                  </button>
                  <button
                    onClick={() => onNavigateSection?.('museums')}
                    className="px-2.5 py-1 bg-white hover:bg-slate-100 rounded-md border border-slate-200 text-slate-700 font-medium transition-colors"
                  >
                    متاحف البحرين
                  </button>
                  <button
                    onClick={() => onNavigateSection?.('map')}
                    className="px-2.5 py-1 bg-white hover:bg-slate-100 rounded-md border border-slate-200 text-slate-700 font-medium transition-colors"
                  >
                    الخريطة التفاعلية
                  </button>
                </div>
              </div>

            </div>
          </aside>

          {/* Editorial Article Body */}
          <main className="lg:col-span-8 order-1 lg:order-2 space-y-12">
            
            {/* Article Lead / Introduction */}
            <section id="intro" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-800 text-xs font-bold">
                <Lightbulb className="w-3.5 h-3.5 text-blue-600" />
                <span>مقدمة تحليلية</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 tracking-tight">
                مسيرة التحول الرقمي ورؤية البحرين الاقتصادية 2030
              </h2>
              <div className={`text-slate-700 space-y-4 font-normal ${contentFontSizeClass}`}>
                <p>
                  يشهد الاقتصاد العالمي في العقد الراهن تحولاً جذرياً مدفوعاً بظهور الجيل الجديد من خوارزميات الذكاء الاصطناعي، وتنامي قدرات الحوسبة الفائقة، وتدفق البيانات الضخمة التي أعادت رسم ملامح الإنتاجية وصناعة القرار. وفي خضم هذه الثورة التكنولوجية، وضعت مملكة البحرين خريطة طريق طموحة واستباقية تهدف إلى ترسيخ مكانة المملكة كمركز إقليمي متقدم للابتكار الرقمي والتكنولوجيا المالية وحلول الحوسبة السحابية.
                </p>
                <p>
                  تأتي هذه الرؤية كترجمة عملية لمبادئ <strong>«رؤية البحرين الاقتصادية 2030»</strong> التي أطلقتها المملكة، والقائمة على ثلاثية: <em>الاستدامة، والعدالة، والتنافسية</em>. وقد أدركت البحرين مبكراً أن الانتقال من نموذج اقتصادي يعتمد على الموارد الطبيعية التقليدية إلى اقتصاد معرفي مستدام يستلزم بناء بيئة تشريعية رقمية مرنة، وتطوير بنية تحتية تقنية عالمية المستوى، والاستثمار الاستراتيجي في الطاقات والكوادر البشرية الوطنية.
                </p>
              </div>

              {/* Quote Highlight */}
              <div className="p-6 rounded-2xl bg-gradient-to-l from-sky-50 via-blue-50/60 to-white border-r-4 border-blue-600 text-slate-800 shadow-xs">
                <blockquote className="italic font-serif text-base sm:text-lg text-slate-800 leading-relaxed font-semibold">
                  «التحول الرقمي في البحرين لم يعد مجرد أداة لتسريع الإجراءات الروتينية، بل أصبح عصب الاقتصاد الوطني وركيزة أساسية لجذب الاستثمارات التكنولوجية النوعية وتمكين الكفاءات الشابة.»
                </blockquote>
              </div>
            </section>

            {/* SECTION 1: Government Electronic & National Portal */}
            <section id="section-1" className="space-y-5 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-2.5 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>المحور الأول</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                الحكومة الإلكترونية في البحرين: ريادة البوابة الوطنية وتكامل الخدمات
              </h2>

              <div className={`text-slate-700 space-y-4 ${contentFontSizeClass}`}>
                <p>
                  تُعد تجربة مملكة البحرين في حقل الحكومة الإلكترونية نموذجاً إقليمياً متقدماً، إذ قادت <strong>هيئة المعلومات والحكومة الإلكترونية (Information & eGovernment Authority - iGA)</strong> استراتيجية متكاملة لإلغاء المعاملات الورقية، وتحويل الخدمات الحكومية إلى منصات رقمية موحدة يمكن الوصول إليها في أي وقت ومن أي مكان.
                </p>
                <p>
                  تمثل <strong>البوابة الوطنية لمملكة البحرين (bahrain.bh)</strong> النافذة المركزية الموحدة التي تجمع مئات الخدمات الإلكترونية الموجهة للأفراد والشركات والجهات الحكومية والزوار. وقد ركزت الاستراتيجية على مبدأ "الخدمة الشاملة"، حيث يتم ربط قواعد البيانات بين الوزارات والمؤسسات الرسمية لتجنب تكرار إدخال البيانات أو مراجعة مقار الدوائر الحكومية.
                </p>
              </div>

              {/* Photo 2: High Tech Data Center & Servers (Strictly NO Humans) */}
              <figure className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950 my-6">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                  alt="ممر خوادم مراكز البيانات الحديثة مع إضاءات زرقاء رقمية ترمز للبنية التحتية للحوسبة السحابية الحكومية"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-16/9 object-cover"
                />
                <figcaption className="p-3 bg-slate-900 text-xs text-slate-400 flex items-center justify-between">
                  <span>خوادم مراكز البيانات الرقمية التي تضمن استمرارية الخدمات الحكومية السحابية وأمان البيانات</span>
                  <span className="font-mono text-sky-400">Data Infrastructure</span>
                </figcaption>
              </figure>

              <div className={`text-slate-700 space-y-4 ${contentFontSizeClass}`}>
                <p>
                  ومن أبرز مكتسبات هذا التحول اعتماد تطبيق الهوية الرقمية، ونظام السجلات التجارية «سجلات»، والتكامل اللوجستي السحابي، مما أسهم في خفض النفقات الحكومية التشغيلية واختصار زمن إنجاز المعاملات من أيام إلى دقائق معدودة، رافقه رفع مستوى رضا المستفيدين وتحسين مؤشرات التنافسية الدولية للبحرين في تقارير الأمم المتحدة لتطوير الحكومة الإلكترونية.
                </p>
              </div>

              {/* Verified Government Reference Link */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-slate-600 font-medium">المصدر الرسمي الحكومي المعتمد:</span>
                <a
                  href="https://www.bahrain.bh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-blue-700 hover:text-blue-900 transition-colors"
                >
                  <span>البوابة الوطنية لمملكة البحرين (bahrain.bh)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </section>

            {/* SECTION 2: Artificial Intelligence & Economic Future */}
            <section id="section-2" className="space-y-5 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-2.5 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <Brain className="w-4 h-4" />
                <span>المحور الثاني</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                الذكاء الاصطناعي ومستقبل البحرين الرقمي: تطبيقات محورية في القطاعات الحيوية
              </h2>

              <div className={`text-slate-700 space-y-4 ${contentFontSizeClass}`}>
                <p>
                  لم يعد الذكاء الاصطناعي (AI) في البحرين مجرد حقل أكاديمي أو أداة تجريبية، بل أصبح محركاً جوهرياً يعزز الكفاءة الإنتاجية عبر أربعة قطاعات حيوية:
                </p>
              </div>

              {/* 4 Sector Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2 hover:border-blue-400 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">1. القطاع المالي والمصرفي (FinTech)</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    يُعد مصرف البحرين المركزي ريادياً في إطلاق «البيئة الرقابية التجريبية»، مما مكن البنوك من توظيف خوارزميات الذكاء الاصطناعي في الكشف التلقائي عن الاحتيال، والتقييم الائتماني الآلي، وتفعيل المصرفية المفتوحة (Open Banking).
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2 hover:border-blue-400 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">2. الخدمات الحكومية التنبؤية</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    استخدام نماذج التعلم الآلي للتنبؤ باحتياجات المواطنين، وتحليل أنماط استهلاك الطاقة والمياه، وتوجيه خطط التطوير الحضري وإدارة حركة المرور الذكية في شبكة طرق المنامة والمحرق.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2 hover:border-blue-400 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">3. التعليم والتدريب التفاعلي</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    تكييف المناهج الرقمية لتتطابق مع مستوى استيعاب الطلاب عبر منصات تعليمية ذكية، وافتتاح معامل متخصصة في جامعات البحرين لتدريس علوم البيانات والذكاء الاصطناعي والروبوتات.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2 hover:border-blue-400 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">4. السياحة والتجارة الإلكترونية</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    محركات توصية ذكية تقترح على السائح مسارات الزيارة المناسبة وفق اهتماماته، وتحليل آراء الزوار في المعالم والمطاعم، وأتمتة منصات الدفع السحابية للشركات التجارية الصغيرة والمتوسطة.
                  </p>
                </div>
              </div>

              {/* Photo 3: AI Circuit & Abstract Network (Strictly NO Humans) */}
              <figure className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950 my-6">
                <img
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80"
                  alt="شبكات وروابط عصبية متوهجة تمثل تكنولوجيا الذكاء الاصطناعي وخوارزميات التعلم العميق وتحليل البيانات"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-16/9 object-cover"
                />
                <figcaption className="p-3 bg-slate-900 text-xs text-slate-400 flex items-center justify-between">
                  <span>تمثيل بصري للشبكات العصبية الاصطناعية التي تقود مستقبل الحلول البرمجية الذكية</span>
                  <span className="font-mono text-sky-400">Artificial Intelligence</span>
                </figcaption>
              </figure>
            </section>

            {/* SECTION 3: Cybersecurity & Data Protection */}
            <section id="section-3" className="space-y-5 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-2.5 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <Shield className="w-4 h-4" />
                <span>المحور الثالث</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                الأمن السيبراني وحماية البيانات: الدرع الرقمي للاقتصاد الوطني
              </h2>

              <div className={`text-slate-700 space-y-4 ${contentFontSizeClass}`}>
                <p>
                  يدرك صانع القرار في مملكة البحرين أن أي تحول رقمي متسارع لا تصاحبه بنية أمنية صلبة يظل عرضة للمخاطر. ومن هذا المنطلق، أولت المملكة اهتماماً فائقاً بترسيخ منظومة أمنية متقدمة لحماية الفضاء السيبراني الوطني وتأمين البنى التحتية الحيوية في قطاعات الطاقة، والمالية، والاتصالات، والصحة.
                </p>
                <p>
                  ويبرز دور <strong>المركز الوطني للأمن السيبراني (NCSC)</strong> في قيادة الاستراتيجية الوطنية للأمن السيبراني، وتنسيق جهود التصدي للتهديدات السيبرانية، ومراقبة الشبكات على مدار الساعة، ووضع المعايير الإلزامية للمؤسسات الحكومية والخاصة لضمان حماية بيانات المواطنين وسرية المعلومات الحساسة.
                </p>
              </div>

              {/* Photo 5: Cyber Security Digital Lock & Shield (Strictly NO Humans) */}
              <figure className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950 my-6">
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
                  alt="قفل إلكتروني رقمي ودرع أمان سيبراني متوهج فوق لوحة دوائر إلكترونية يرمز لحماية الخصوصية وتشفير البيانات"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-16/9 object-cover"
                />
                <figcaption className="p-3 bg-slate-900 text-xs text-slate-400 flex items-center justify-between">
                  <span>الأمن السيبراني وتشفير البيانات هما الضمانة الأساسية لحماية الخصوصية وثقة المستثمرين</span>
                  <span className="font-mono text-emerald-400">Cyber Defense</span>
                </figcaption>
              </figure>

              <div className={`text-slate-700 space-y-4 ${contentFontSizeClass}`}>
                <h3 className="text-xl font-bold text-slate-900 mt-6">
                  قانون حماية البيانات الشخصية (PDPL): تشريع بمواصفات عالمية
                </h3>
                <p>
                  أصدرت البحرين <strong>قانون حماية البيانات الشخصية رقم (30) لسنة 2018 (PDPL)</strong>، والذي يعد واحداً من أكثر التشريعات تطوراً وصرامة في المنطقة، ومتوافقاً مع المبادئ العامة للائحة الأوروبية لحماية البيانات (GDPR). يحدد هذا القانون حقوق الأفراد في السيطرة على بياناتهم، ويفرض قيوداً واضحة على معالجة البيانات وتخزينها ونقلها عبر الحدود دون موافقة صريحة، مما أسهم في بناء ثقة راسخة لدى كبرى الشركات العالمية لاستضافة وتشغيل بياناتها داخل البحرين.
                </p>
              </div>

              {/* Official Link for NCSC */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-slate-600 font-medium">الجهة المرجعية للأمن السيبراني:</span>
                <a
                  href="https://www.ncsc.gov.bh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-blue-700 hover:text-blue-900 transition-colors"
                >
                  <span>المركز الوطني للأمن السيبراني (NCSC)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </section>

            {/* SECTION 4: Technology & Opportunities for Entrepreneurs */}
            <section id="section-4" className="space-y-5 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-2.5 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>المحور الرابع</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                التكنولوجيا والفرص الواعدة أمام رواد الأعمال والشركات الناشئة
              </h2>

              <div className={`text-slate-700 space-y-4 ${contentFontSizeClass}`}>
                <p>
                  يمثل رواد الأعمال والمطورون الشباب حجر الزاوية في منظومة التحول الرقمي البحرينية. فالفرص لم تعد مقتصرة على كبرى المؤسسات، بل أصبحت مفتوحة أمام المطورين والمبتكرين في مجالات:
                </p>
                <ul className="list-disc list-inside space-y-2 pr-2 text-slate-800 font-medium">
                  <li><strong>تطوير التطبيقات السحابية والمواقع التفاعلية:</strong> حلول مخصصة تخدم قطاعات التجارة، والمطاعم، والعقارات، والسياحة.</li>
                  <li><strong>حلول المتاجر الإلكترونية وبوابات الدفع:</strong> رقمنة قنوات البيع التقليدية وربطها بأنظمة الشحن والدفع اللاتلامسي.</li>
                  <li><strong>الأتمتة الذكية والذكاء الاصطناعي التوليدي:</strong> بناء أدوات تحليل المحتوى، وتوليد التقارير، ودعم العملاء الآلي.</li>
                  <li><strong>حلول البرمجيات كخدمة (SaaS):</strong> ابتكار منتجات برمجية موجهة لأسواق الخليج والشرق الأوسط انطلاقاً من المنامة.</li>
                </ul>
                <p>
                  ويلعب <strong>صندوق العمل «تمكين»</strong> دوراً محورياً في دعم هذه المنظومة من خلال برامج تمويل المشروعات التكنولوجية، ودعم تكاليف الحوسبة السحابية، وتقديم منح تدريب الكوادر الوطنية. إلى جانب ذلك، يقدم <strong>«خليج البحرين للتكنولوجيا المالية» (Bahrain FinTech Bay)</strong> بيئة حاضنة ومسرعة أعمال تربط الشركات الناشئة مع كبرى البنوك والمستثمرين العالميين.
                </p>
              </div>

              {/* Photo 9: Clean Software Code & Architecture (Strictly NO Humans) */}
              <figure className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950 my-6">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
                  alt="شاشة برمجية تعرض أكواد حاسوبية برمجية واجهات برمجية نظيفة وحديثة ترمز لتطوير التطبيقات الرقمية والحلول الذكية"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-16/9 object-cover"
                />
                <figcaption className="p-3 bg-slate-900 text-xs text-slate-400 flex items-center justify-between">
                  <span>البرمجيات وتطوير الحلول السحابية تفتح آفاقاً رحبة لرواد الأعمال والشركات الناشئة</span>
                  <span className="font-mono text-sky-400">Software & APIs</span>
                </figcaption>
              </figure>

              {/* Official Link for Bahrain FinTech Bay */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-slate-600 font-medium">حاضنة الابتكار والشركات الناشئة:</span>
                <a
                  href="https://www.bahrainfintechbay.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-blue-700 hover:text-blue-900 transition-colors"
                >
                  <span>خليج البحرين للتكنولوجيا المالية (Bahrain FinTech Bay)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </section>

            {/* SECTION 5: Cloud Computing & Open Data */}
            <section id="section-5" className="space-y-5 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-2.5 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <Cloud className="w-4 h-4" />
                <span>المحور الخامس</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                الحوسبة السحابية ومنصة البيانات المفتوحة: البنية التحتية لعصر الذكاء
              </h2>

              <div className={`text-slate-700 space-y-4 ${contentFontSizeClass}`}>
                <p>
                  سجلت مملكة البحرين سابقة تاريخية عام 2017 عندما أطلقت رسمياً <strong>سياسة «السحابة أولاً» (Cloud-First Policy)</strong>، لتكون الدولة الأولى في الشرق الأوسط التي تلزم كافة الوزارات والهيئات الحكومية بترحيل أنظمتها وخدماتها إلى البيئات السحابية بدلاً من بناء خوادم ومراكز بيانات تقليدية مكلفة.
                </p>
                <p>
                  وقد توجت هذه الخطوة باختيار عملاق التكنولوجيا العالمي <strong>أمازون ويب سيرفيسز (Amazon Web Services - AWS)</strong> لمملكة البحرين لتكون مقراً لأول منطقة مراكز بيانات سحابية متكاملة في الشرق الأوسط (AWS Middle East Region). وقد وفر هذا الإنجاز للبحرين زمن استجابة (Latency) بالغ السرعة، وجذب استثمارات عالمية بمليارات الدولارات، ووفر أماناً وموثوقية عالية لمؤسسات القطاعين العام والخاص.
                </p>
              </div>

              {/* Photo 4: Cloud Computing & Global Network (Strictly NO Humans) */}
              <figure className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950 my-6">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
                  alt="شبكة الحوسبة السحابية والاتصالات الرقمية العالمية مع خطوط بيانات متصلة ترمز للبنية التحتية التكنولوجية"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-16/9 object-cover"
                />
                <figcaption className="p-3 bg-slate-900 text-xs text-slate-400 flex items-center justify-between">
                  <span>منظومة الحوسبة السحابية المترابطة التي تربط البحرين بالاقتصاد الرقمي العالمي</span>
                  <span className="font-mono text-sky-400">Cloud Networks</span>
                </figcaption>
              </figure>

              <div className={`text-slate-700 space-y-4 ${contentFontSizeClass}`}>
                <h3 className="text-xl font-bold text-slate-900 mt-6">
                  منصة البيانات المفتوحة (data.gov.bh): وقود بحوث الذكاء الاصطناعي
                </h3>
                <p>
                  إيماناً بأهمية الشفافية وتمكين البحث العلمي، أطلقت الحكومة <strong>منصة البيانات المفتوحة (data.gov.bh)</strong>، التي توفر مجموعات بيانات إحصائية وجغرافية واقتصادية وصحية غير شخصية بصيغ قياسية مفتوحة. تمكن هذه البيانات رواد الأعمال والباحثين من تدريب نماذج الذكاء الاصطناعي، وتطوير تطبيقات تحليلية تنبؤية تخدم المجتمع وصناع القرار.
                </p>
              </div>
            </section>

            {/* SECTION 6: Technology & Tourism Sector in Bahrain */}
            <section id="section-6" className="space-y-5 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-2.5 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>المحور السادس</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                التكنولوجيا والقطاع السياحي: تجربة زائر رقمية ذكية ومتكاملة
              </h2>

              <div className={`text-slate-700 space-y-4 ${contentFontSizeClass}`}>
                <p>
                  شهد القطاع السياحي في البحرين نقلة نوعية عبر توظيف أحدث التقنيات الرقمية لتيسير تجربة الزائر وجعلها أكثر ثراءً وسلاسة. وتتكامل التكنولوجيا في هذا القطاع عبر عدة أبعاد رئيسية:
                </p>
              </div>

              {/* Tourism Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <span className="text-2xl">📱</span>
                  <h3 className="text-base font-bold text-slate-900">المنصات والأدلة السياحية الذكية</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    منصات مثل <strong>«اكتشف البحرين»</strong> تتيح للزوار الوصول التفاعلي الفوري لمعالم المنامة التاريخية والمتاحف والشواطئ والأسواق الشعبية عبر خرائط رقمية مدمجة ومعلومات موثقة بلغتين.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <span className="text-2xl">✈️</span>
                  <h3 className="text-base font-bold text-slate-900">مطار البحرين الدولي الجديد</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    بوابة جوية حديثة مجهزة بأنظمة السفر الذاتي، والتعرف البيومتري على المسافرين، والربط الرقمي الفوري للتأشيرات الإلكترونية المسبقة وسيارات الأجرة السحابية.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <span className="text-2xl">🏛️</span>
                  <h3 className="text-base font-bold text-slate-900">الواقع المعزز في المتاحف والتراث</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    استخدام شاشات تفاعلية ورموز QR وتطبيقات الواقع المعزز (AR) في قلعة البحرين ومسار اللؤلؤ لتقديم تجربة غامرة تعيد إحياء تاريخ دلمون وحضارة الغوص.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <span className="text-2xl">💳</span>
                  <h3 className="text-base font-bold text-slate-900">المدفوعات الرقمية في الأسواق الشعبية</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    تزويد المتاجر والمطاعم حتى في سوق المنامة القديم بحلول الدفع اللاتلامسي ونظام «بنفت بي» (BenefitPay)، مما يوفر راحة وأماناً فائقين للسياح.
                  </p>
                </div>
              </div>

              {/* Photo 8: Smart Cities & Connected Architecture (Strictly NO Humans) */}
              <figure className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950 my-6">
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80"
                  alt="مباني حضرية حديثة متصلة بشبكات الاتصالات والإنترنت في مدينة ذكية ترمز للتطور السياحي الرقمي"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-16/9 object-cover"
                />
                <figcaption className="p-3 bg-slate-900 text-xs text-slate-400 flex items-center justify-between">
                  <span>المدن الذكية والاتصال الرقمي المستمر يمنحان السياح تجربة تنقل واستكشاف سلسة</span>
                  <span className="font-mono text-sky-400">Smart Destinations</span>
                </figcaption>
              </figure>
            </section>

            {/* SECTION 7: Digital Skills & Human Capital */}
            <section id="section-7" className="space-y-5 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-2.5 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>المحور السابع</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                المهارات الرقمية والاستثمار في الإنسان: رأس المال الحقيقي للاقتصاد المعرفي
              </h2>

              <div className={`text-slate-700 space-y-4 ${contentFontSizeClass}`}>
                <p>
                  إن أحدث التقنيات وأقوى الخوادم تظل بلا جدوى إن لم تتوفر الكوادر البشرية القادرة على تصميمها، وبرمجتها، وصيانتها، وتطويرها. وانطلاقاً من هذا المبدأ، وضعت البحرين تأهيل المواطن في صدارة أولوياتها الوطنية.
                </p>
                <p>
                  أطلقت المملكة بالتعاون مع شركات التقنية العالمية (مثل AWS، Microsoft، Google Cloud، Cisco) مبادرات تدريبية متخصصة تهدف إلى تأهيل آلاف الكوادر البحرينية في:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-center space-y-1">
                    <Code2 className="w-5 h-5 mx-auto text-blue-600" />
                    <p className="text-xs font-bold text-slate-800">البرمجة وهندسة النظم</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-center space-y-1">
                    <Database className="w-5 h-5 mx-auto text-sky-600" />
                    <p className="text-xs font-bold text-slate-800">تحليل البيانات الضخمة</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-center space-y-1">
                    <Shield className="w-5 h-5 mx-auto text-emerald-600" />
                    <p className="text-xs font-bold text-slate-800">الأمن السيبراني والدفاع</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-center space-y-1">
                    <Brain className="w-5 h-5 mx-auto text-indigo-600" />
                    <p className="text-xs font-bold text-slate-800">تطوير الذكاء الاصطناعي</p>
                  </div>
                </div>
                <p>
                  وقد أسهمت برامج دعم الشهادات الاحترافية التي يمولها صندوق «تمكين» في تخريج أجيال شابة تقود فرق تكنولوجيا المعلومات في البنوك والشركات الاستثمارية ومؤسسات الدولة، مما خفض الاعتماد على الخبرات الخارجية وعزز التنافسية الإقليمية للكفاءات الوطنية.
                </p>
              </div>

              {/* Photo 7: High-Tech Semiconductor Microchip (Strictly NO Humans) */}
              <figure className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950 my-6">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
                  alt="شريحة إلكترونية دقيقة ومعالج دقيق متطور على لوحة إلكترونية ترمز لهندسة العتاد والبرمجيات الدقيقة"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-16/9 object-cover"
                />
                <figcaption className="p-3 bg-slate-900 text-xs text-slate-400 flex items-center justify-between">
                  <span>الرقائق الإلكترونية المتقدمة: الاستثمار في المهارات البرمجية الدقيقة يصنع الفارق في الاقتصاد الرقمي</span>
                  <span className="font-mono text-amber-400">Silicon & Innovation</span>
                </figcaption>
              </figure>
            </section>

            {/* SECTION 8: Challenges and Future Outlook */}
            <section id="section-8" className="space-y-5 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-2.5 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                <span>المحور الثامن</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                التحديات التقنية واستشراف المستقبل: واقعية التخطيط ومسؤولية التنفيذ
              </h2>

              <div className={`text-slate-700 space-y-4 ${contentFontSizeClass}`}>
                <p>
                  رغم المكتسبات الكبيرة التي حققتها البحرين، تفرض طبيعة التكنولوجيا المتسارعة تحديات واقعية يجب التعامل معها بوعي وتخطيط دقيق:
                </p>
                <div className="space-y-3 my-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      1. تكاليف التحديث المستمر للبنى التحتية
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pr-4">
                      يتطلب التحول الرقمي نفقات متواصلة على البرمجيات، ورخص المنصات السحابية، وترقية شبكات الألياف البصرية وشبكات الجيل الخامس (5G)، مما يستلزم تحسين كفاءة الإنفاق وتفعيل الشراكة مع القطاع الخاص.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                      2. تطور التهديدات السيبرانية المعقدة
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pr-4">
                      تتطور الهجمات الإلكترونية وحملات الفدية التشفيرية بسرعة تفوق في بعض الأحيان آليات الدفاع التقليدية، مما يتطلب يقظة أمنية استباقية وتدريباً مستمراً على سيناريوهات الطوارئ الرقمية.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      3. حوكمة الذكاء الاصطناعي وأخلاقيات البيانات
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pr-4">
                      ضرورة وضع معايير أخلاقية واضحة تمنع التحيز في الخوارزميات، وتضمن شفافية القرارات الصادرة عن الأنظمة الذكية، وتحمي الخصوصية الفردية دون إعاقة الابتكار.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      4. سد الفجوة الرقمية ومواكبة سوق العمل
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pr-4">
                      الحاجة المستمرة لتحديث المناهج الأكاديمية والمهنية لتتلاءم مع المهن المستحدثة التي يفرضها الذكاء الاصطناعي والأتمتة، وضمان شمول كافة فئات المجتمع في الخدمات الرقمية.
                    </p>
                  </div>
                </div>
              </div>

              {/* Photo 6: Data Analytics & Financial Charts (Strictly NO Humans) */}
              <figure className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950 my-6">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                  alt="شاشات تحليل البيانات الضخمة ومخططات بيانية ورسوم إحصائية رقمية ترمز لاتخاذ القرارات المبنية على البيانات"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-16/9 object-cover"
                />
                <figcaption className="p-3 bg-slate-900 text-xs text-slate-400 flex items-center justify-between">
                  <span>لوحات تحليل البيانات ومؤشرات الأداء هي البوصلة الاستراتيجية لاستشراف المستقبل الاقتصادي</span>
                  <span className="font-mono text-sky-400">Data Analytics</span>
                </figcaption>
              </figure>
            </section>

            {/* CONCLUSION */}
            <section id="conclusion" className="space-y-5 pt-8 border-t border-slate-200">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 text-white text-xs font-bold">
                <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                <span>الخاتمة والاستنتاجات</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                نحو اقتصاد رقمي مستدام: نموذج بحريني واعد
              </h2>
              <div className={`text-slate-700 space-y-4 font-normal ${contentFontSizeClass}`}>
                <p>
                  تثبت تجربة مملكة البحرين في التحول الرقمي أن النجاح في الاقتصاد الحديث لا يُقاس بحجم المساحة الجغرافية أو وفرة الموارد التقليدية، بل بوضوح الرؤية الاستراتيجية، وسرعة التكيف التشريعي، والقدرة على بناء شراكات مثمرة بين القطاعين العام والخاص، والاستثمار الحقيقي في الإنسان.
                </p>
                <p>
                  إن امتلاك البحرين لأول بيئة سحابية حكومية متكاملة في الشرق الأوسط، وبنية تحتية للأمن السيبراني تحمي الفضاء الوطني، ومجتمع ريادي شاب يبتكر الحلول البرمجية وتطبيقات الذكاء الاصطناعي، يضع المملكة بثقة على مسار واعد لتكون إحدى أكثر العواصم الرقمية كفاءة واستدامة بحلول عام 2030.
                </p>
              </div>

              {/* Photo 10: Modern Tech Innovation Hub Glass Architecture (Strictly NO Humans) */}
              <figure className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950 my-6">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                  alt="مبنى تكنولوجي حديث بتصميم معماري زجاجي مبتكر وخطوط هندسية متطورة يرمز لمراكز الابتكار التكنولوجي وحاضنات الأعمال"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-16/9 object-cover"
                />
                <figcaption className="p-3 bg-slate-900 text-xs text-slate-400 flex items-center justify-between">
                  <span>مراكز الابتكار التكنولوجي في المنامة تجسد بيئة العمل العصرية الموجهة للمستقبل المعرفي</span>
                  <span className="font-mono text-sky-400">Innovation Hub</span>
                </figcaption>
              </figure>
            </section>

            {/* AUTHOR CARD & WHATSAPP (Strict requirement) */}
            <section id="author-card" className="pt-8 border-t-2 border-slate-200">
              <div className="bg-gradient-to-br from-white via-slate-50 to-sky-50/50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-5">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-600 to-blue-700 flex items-center justify-center text-white shadow-lg ring-4 ring-sky-100 shrink-0">
                      <User className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-sky-700 uppercase tracking-wider block">
                        إعداد المقال والبحث:
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                        {authorName}
                      </h3>
                      <p className="text-xs text-slate-600 font-medium">
                        باحث في استراتيجيات التحول الرقمي وتطوير الحلول البرمجية
                      </p>
                    </div>
                  </div>

                  {/* Direct Clickable WhatsApp Contact Link */}
                  <a
                    href={authorWhatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg shrink-0"
                    title={`تواصل مع ${authorName} عبر تطبيق واتساب`}
                  >
                    <MessageCircle className="w-5 h-5 text-white" />
                    <span>للتواصل عبر واتساب: {authorWhatsapp}</span>
                  </a>
                </div>

                <div className="text-xs text-slate-600 leading-relaxed space-y-2">
                  <p>
                    تم إعداد هذا المقال كدراسة تحليلية توثيقية تعتمد على البيانات والاستراتيجيات المنشورة من الجهات الحكومية والتشريعية في مملكة البحرين، بهدف إثراء المحتوى العربي التقني المتخصص وتقديم رؤية واضحة ومبنية على أسس علمية لمسيرة الاقتصاد الرقمي والذكاء الاصطناعي.
                  </p>
                </div>

                {/* Verified Official Links List */}
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-xs font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-blue-600" />
                    <span>المصادر الرسمية المعتمدة للمعلومات والتشريعات:</span>
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <a
                      href="https://www.bahrain.bh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-blue-700 hover:border-blue-300 font-medium transition-colors inline-flex items-center gap-1"
                    >
                      <span>البوابة الوطنية لمملكة البحرين</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                    <a
                      href="https://www.iga.gov.bh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-blue-700 hover:border-blue-300 font-medium transition-colors inline-flex items-center gap-1"
                    >
                      <span>هيئة المعلومات والحكومة الإلكترونية (iGA)</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                    <a
                      href="https://www.bahrainedb.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-blue-700 hover:border-blue-300 font-medium transition-colors inline-flex items-center gap-1"
                    >
                      <span>مجلس التنمية الاقتصادية في البحرين (EDB)</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                    <a
                      href="https://www.ncsc.gov.bh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-blue-700 hover:border-blue-300 font-medium transition-colors inline-flex items-center gap-1"
                    >
                      <span>المركز الوطني للأمن السيبراني (NCSC)</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                    <a
                      href="https://www.tamkeen.bh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-blue-700 hover:border-blue-300 font-medium transition-colors inline-flex items-center gap-1"
                    >
                      <span>صندوق العمل (تمكين)</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  </div>
                </div>

              </div>
            </section>

            {/* Social Share Bar at Bottom */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-slate-900">هل وجدت هذا المقال مفيداً ومثرياً؟</p>
                <p className="text-xs text-slate-500">شاركه مع المهتمين بالتكنولوجيا واقتصاد البحرين الرقمي</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShareWhatsApp}
                  className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>واتساب</span>
                </button>
                <button
                  onClick={handleShareTwitter}
                  className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5 shadow-xs"
                >
                  <Share2 className="w-4 h-4" />
                  <span>منصة X</span>
                </button>
                <button
                  onClick={handleShareLinkedIn}
                  className="px-3.5 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5 shadow-xs"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>LinkedIn</span>
                </button>
                <button
                  onClick={handleCopyLink}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'تم النسخ!' : 'نسخ الرابط'}</span>
                </button>
              </div>
            </div>

            {/* Back to Home Button */}
            <div className="text-center pt-6">
              <button
                onClick={onBackToHome}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-md"
              >
                <ArrowRight className="w-4 h-4" />
                <span>العودة إلى الدليل الشامل لمنصة «اكتشف البحرين»</span>
              </button>
            </div>

          </main>
        </div>
      </div>

    </article>
  );
};
