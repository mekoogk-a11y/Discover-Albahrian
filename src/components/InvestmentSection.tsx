import React, { useState, useMemo } from 'react';
import {
  Briefcase,
  TrendingUp,
  Globe,
  Percent,
  TrendingDown,
  Truck,
  Award,
  HandCoins,
  Building2,
  ExternalLink,
  Search,
  CheckCircle2,
  Calculator,
  Compass,
  ArrowRight,
  ArrowLeft,
  Share2,
  Phone,
  MessageCircle,
  HelpCircle,
  ShieldCheck,
  Zap,
  MapPin,
  Sparkles,
  DollarSign,
  X,
  Send,
  Check
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import {
  investmentAdvantages,
  investmentOpportunities,
  investorSetupSteps,
  officialInvestmentPortals
} from '../data/investmentData';
import { InvestmentOpportunity, InvestmentSectorKey, InvestorInquiry } from '../types';

interface InvestmentSectionProps {
  onOpenArticle?: () => void;
  onOpenContact?: () => void;
}

export const InvestmentSection: React.FC<InvestmentSectionProps> = ({
  onOpenArticle,
  onOpenContact
}) => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  // Sector filtering & search
  const [selectedSector, setSelectedSector] = useState<InvestmentSectorKey>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Selected Opportunity for Inquiry Modal
  const [inquiryModalOpportunity, setInquiryModalOpportunity] = useState<InvestmentOpportunity | null>(null);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    budget: '50k-250k',
    notes: ''
  });

  // Calculator State
  const [calcSector, setCalcSector] = useState<'fintech' | 'tech' | 'logistics' | 'tourism' | 'consultancy'>('tech');
  const [calcScale, setCalcScale] = useState<'startup' | 'sme' | 'enterprise'>('startup');
  const [calcLocation, setCalcLocation] = useState<'fintech_bay' | 'logistics_zone' | 'manama_tower' | 'incubator'>('incubator');

  // Filtered Opportunities
  const filteredOpportunities = useMemo(() => {
    return investmentOpportunities.filter((opp) => {
      const matchesSector = selectedSector === 'all' || opp.sectorKey === selectedSector;
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesSector;

      const titleMatch = (isAr ? opp.titleAr : opp.titleEn).toLowerCase().includes(query);
      const descMatch = (isAr ? opp.descriptionAr : opp.descriptionEn).toLowerCase().includes(query);
      const locMatch = (isAr ? opp.locationAr : opp.locationEn).toLowerCase().includes(query);
      const secMatch = (isAr ? opp.sectorAr : opp.sectorEn).toLowerCase().includes(query);

      return matchesSector && (titleMatch || descMatch || locMatch || secMatch);
    });
  }, [selectedSector, searchQuery, isAr]);

  // Dynamic Calculator Result
  const calculatorResult = useMemo(() => {
    let baseRegistrationFee = 150; // BHD Sijilat MOIC base
    let annualLeaseEstimate = 3600; // BHD
    let expectedTamkeenGrant = 2400; // BHD
    let expectedTaxSavings = 12000; // BHD comparison to typical 20% corporate tax

    if (calcSector === 'fintech') {
      baseRegistrationFee += 250;
      annualLeaseEstimate = 4800;
      expectedTamkeenGrant = 6000;
    } else if (calcSector === 'logistics') {
      baseRegistrationFee += 200;
      annualLeaseEstimate = 7500;
      expectedTamkeenGrant = 5000;
    } else if (calcSector === 'tourism') {
      baseRegistrationFee += 350;
      annualLeaseEstimate = 9000;
      expectedTamkeenGrant = 4500;
    }

    if (calcScale === 'sme') {
      annualLeaseEstimate *= 2.5;
      expectedTamkeenGrant *= 2.8;
      expectedTaxSavings *= 3;
    } else if (calcScale === 'enterprise') {
      annualLeaseEstimate *= 6;
      expectedTamkeenGrant *= 5;
      expectedTaxSavings *= 8;
    }

    if (calcLocation === 'fintech_bay') {
      annualLeaseEstimate += 1800;
    } else if (calcLocation === 'logistics_zone') {
      annualLeaseEstimate += 1200;
    } else if (calcLocation === 'manama_tower') {
      annualLeaseEstimate += 2200;
    }

    return {
      registrationFee: baseRegistrationFee,
      annualLease: Math.round(annualLeaseEstimate),
      tamkeenGrant: Math.round(expectedTamkeenGrant),
      taxSavings: Math.round(expectedTaxSavings),
      netFirstYearOperatingEst: Math.round(baseRegistrationFee + annualLeaseEstimate - expectedTamkeenGrant)
    };
  }, [calcSector, calcScale, calcLocation]);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setInquiryModalOpportunity(null);
      setInquiryForm({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        country: '',
        budget: '50k-250k',
        notes: ''
      });
    }, 3000);
  };

  const handleWhatsAppDirect = (oppTitle: string) => {
    const message = encodeURIComponent(
      isAr
        ? `السلام عليكم، أود الاستفسار حول فرص الاستثمار في البحرين وتحديداً: ${oppTitle}`
        : `Hello, I would like to inquire about investment opportunities in Bahrain regarding: ${oppTitle}`
    );
    window.open(`https://wa.me/24919980435?text=${message}`, '_blank');
  };

  const sectorsNav = [
    { key: 'all', labelAr: 'جميع الفرص', labelEn: 'All Opportunities' },
    { key: 'fintech', labelAr: 'التكنولوجيا المالية', labelEn: 'FinTech & Banking' },
    { key: 'tech', labelAr: 'الذكاء الاصطناعي والحوسبة', labelEn: 'AI & Cloud ICT' },
    { key: 'logistics', labelAr: 'اللوجستيات والشحن', labelEn: 'Logistics' },
    { key: 'tourism', labelAr: 'السياحة والضيافة', labelEn: 'Tourism & Resorts' },
    { key: 'manufacturing', labelAr: 'الصناعة والألمنيوم', labelEn: 'Manufacturing' },
    { key: 'realestate', labelAr: 'العقارات والتملك الحر', labelEn: 'Freehold Real Estate' },
    { key: 'healthcare', labelAr: 'الرعاية الصحية', labelEn: 'Healthcare & Pharma' },
    { key: 'energy', labelAr: 'الطاقة النظيفة', labelEn: 'Renewable Energy' }
  ];

  return (
    <section id="investment" className="relative py-20 bg-stone-50 border-t border-stone-200/80 overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-stone-200/40 to-transparent pointer-events-none" />
      <div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-red-100/40 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-80 h-80 rounded-full bg-amber-100/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-600/10 via-amber-500/10 to-red-600/10 border border-red-600/20 text-[#C8102E] font-semibold text-xs sm:text-sm mb-4 shadow-sm">
            <Briefcase className="w-4 h-4 text-[#C8102E]" />
            <span>{isAr ? 'بوابة الأعمال والاستثمار في مملكة البحرين' : 'Business & Investment Gateway to Bahrain'}</span>
            <span className="text-stone-400">·</span>
            <span className="text-amber-700 font-bold">{isAr ? 'رؤية 2030' : 'Vision 2030'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-stone-900 tracking-tight leading-tight">
            {isAr ? 'الاستثمار في البحرين: فرص ذهبية وريادة إقليمية' : 'Invest in Bahrain: High Growth & Strategic Gateway'}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-medium">
            {isAr
              ? 'تعتبر البحرين أكثر بيئات الأعمال تنافسية في الخليج العربي، بفضل التملك الأجنبي الكامل بنسبة 100%، وانعدام ضرائب الشركات، وأقل تكاليف تشغيل في المنطقة، والوصول المباشر للسوق السعودي والخليجي.'
              : 'Bahrain stands as the GCC\'s most cost-effective business environment, featuring 100% foreign ownership, zero corporate tax, lowest operational overhead, and frictionless direct access to the Saudi Arabian market.'}
          </p>
        </div>

        {/* 1. Key Strategic Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {investmentAdvantages.map((adv) => {
            return (
              <div
                key={adv.id}
                className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm hover:shadow-md hover:border-red-300 transition-all duration-200 group relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-[#C8102E] flex items-center justify-center font-bold group-hover:bg-[#C8102E] group-hover:text-white transition-colors duration-200">
                      {adv.id === 'foreign-ownership' && <Globe className="w-6 h-6" />}
                      {adv.id === 'zero-tax' && <Percent className="w-6 h-6" />}
                      {adv.id === 'operating-costs' && <TrendingDown className="w-6 h-6" />}
                      {adv.id === 'market-access' && <Truck className="w-6 h-6" />}
                      {adv.id === 'golden-visa' && <Award className="w-6 h-6" />}
                      {adv.id === 'tamkeen-support' && <HandCoins className="w-6 h-6" />}
                    </div>
                    {adv.statNumber && (
                      <div className="text-left rtl:text-right">
                        <span className="block text-2xl font-black text-stone-900 font-display text-[#C8102E]">
                          {adv.statNumber}
                        </span>
                        <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                          {isAr ? adv.statLabelAr : adv.statLabelEn}
                        </span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 mb-2 font-display">
                    {isAr ? adv.titleAr : adv.titleEn}
                  </h3>

                  <p className="text-sm text-stone-600 leading-relaxed">
                    {isAr ? adv.descriptionAr : adv.descriptionEn}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="flex items-center gap-1 font-semibold text-[#C8102E]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {isAr ? 'ميزة معتمدة رسمياً' : 'Official Guarantee'}
                  </span>
                  <span>{isAr ? 'مجلس التنمية الاقتصادية' : 'Bahrain EDB'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Interactive Opportunities Catalog */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-md mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C8102E] uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" />
                <span>{isAr ? 'الفرص الاستثمارية الواعدة' : 'Flagship Investment Opportunities'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-stone-900 font-display">
                {isAr ? 'استكشف الفرص والمشاريع المتاحة في المملكة' : 'Explore Strategic Projects & Investment Sectors'}
              </h3>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isAr ? 'بحث في الفرص الاستثمارية...' : 'Search opportunities...'}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent bg-stone-50 text-stone-900"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3 rtl:left-auto rtl:right-3 top-3.5" />
            </div>
          </div>

          {/* Sector Pills Nav */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {sectorsNav.map((sec) => {
              const active = selectedSector === sec.key;
              return (
                <button
                  key={sec.key}
                  onClick={() => setSelectedSector(sec.key as InvestmentSectorKey)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                    active
                      ? 'bg-stone-900 text-white shadow-sm'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {isAr ? sec.labelAr : sec.labelEn}
                </button>
              );
            })}
          </div>

          {/* Opportunities Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOpportunities.length === 0 ? (
              <div className="col-span-full py-16 text-center text-stone-500">
                <HelpCircle className="w-10 h-10 mx-auto mb-3 text-stone-400" />
                <p className="font-bold text-base">
                  {isAr ? 'لم يتم العثور على فرص تطابق معايير البحث' : 'No opportunities matched your criteria'}
                </p>
                <button
                  onClick={() => {
                    setSelectedSector('all');
                    setSearchQuery('');
                  }}
                  className="mt-3 text-sm text-[#C8102E] font-bold underline"
                >
                  {isAr ? 'إعادة ضبط الفلاتر' : 'Reset all filters'}
                </button>
              </div>
            ) : (
              filteredOpportunities.map((opp) => {
                return (
                  <div
                    key={opp.id}
                    className="flex flex-col bg-stone-50 rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-lg hover:border-stone-300 transition-all duration-300 group"
                  >
                    {/* Card Image */}
                    <div className="relative h-48 w-full overflow-hidden bg-stone-200">
                      <img
                        src={opp.image}
                        alt={isAr ? opp.titleAr : opp.titleEn}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                      
                      {/* Sector Badge */}
                      <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md text-white text-[11px] font-bold">
                        {isAr ? opp.sectorAr : opp.sectorEn}
                      </div>

                      {/* Location Badge */}
                      <div className="absolute bottom-3 inset-x-3 text-white text-xs flex items-center gap-1.5 font-medium drop-shadow-md">
                        <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                        <span className="truncate">{isAr ? opp.locationAr : opp.locationEn}</span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-base font-bold text-stone-900 leading-snug mb-2 font-display">
                          {isAr ? opp.titleAr : opp.titleEn}
                        </h4>

                        <p className="text-xs text-stone-600 line-clamp-3 mb-4 leading-relaxed">
                          {isAr ? opp.descriptionAr : opp.descriptionEn}
                        </p>

                        {/* Investment Scale Box */}
                        <div className="bg-white p-3 rounded-xl border border-stone-200/80 mb-4 flex items-center justify-between">
                          <span className="text-[11px] font-semibold text-stone-500">
                            {isAr ? 'النطاق الاستثماري التقديري:' : 'Estimated Scale:'}
                          </span>
                          <span className="text-xs font-black text-[#C8102E] font-display">
                            {isAr ? opp.investmentRangeAr : opp.investmentRangeEn}
                          </span>
                        </div>

                        {/* Key Highlights */}
                        <div className="space-y-1.5 mb-5">
                          <span className="text-[11px] font-bold text-stone-700 block uppercase">
                            {isAr ? 'أبرز مميزات الفرصة:' : 'Key Highlights:'}
                          </span>
                          {(isAr ? opp.highlightsAr : opp.highlightsEn).slice(0, 2).map((h, idx) => (
                            <div key={idx} className="flex items-start gap-1.5 text-xs text-stone-600">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-4 border-t border-stone-200/80 flex items-center gap-2">
                        <button
                          onClick={() => setInquiryModalOpportunity(opp)}
                          className="flex-1 py-2.5 px-3 rounded-xl bg-[#C8102E] hover:bg-[#A50D25] text-white text-xs font-bold transition-colors shadow-sm flex items-center justify-center gap-1.5"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>{isAr ? 'طلب استفسار' : 'Inquire Now'}</span>
                        </button>

                        <button
                          onClick={() => handleWhatsAppDirect(isAr ? opp.titleAr : opp.titleEn)}
                          className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                          title={isAr ? 'تواصل عبر واتساب' : 'WhatsApp direct'}
                        >
                          <MessageCircle className="w-4 h-4" />
                        </button>

                        <a
                          href={opp.officialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-white hover:bg-stone-100 border border-stone-200 text-stone-600 transition-colors"
                          title={isAr ? 'الموقع الرسمي للجهة' : 'Official Portal'}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* 3. Interactive Business Setup & Operating Cost Estimator */}
        <div className="bg-gradient-to-br from-stone-900 via-stone-850 to-stone-950 rounded-3xl p-6 sm:p-10 text-white shadow-xl mb-16 border border-stone-800">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2.5 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Calculator className="w-5 h-5 text-amber-400" />
              <span>{isAr ? 'حاسبة تأسيس الأعمال والاستثمار' : 'Interactive Investment & Setup Estimator'}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white mb-3">
              {isAr ? 'احسب تقدير تكاليف تأسيس شركتك والدعم الحكومي المتوقع' : 'Estimate Business Setup Costs & Government Subsidies'}
            </h3>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-8">
              {isAr
                ? 'استخدم هذه الأداة للتعرف على التكاليف التقديرية لإصدار السجل التجاري، واستئجار المساحات، والدعم المالي والتشغيلي الممنوح عبر صندوق "تمكين".'
                : 'Interactive projection of commercial registration, leasing benchmarks, and direct wage & operational grants available through Tamkeen.'}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Form Controls (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                
                {/* Sector Select */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-2">
                    {isAr ? '1. قطاع النشاط التجاري:' : '1. Business Sector:'}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { key: 'tech', labelAr: 'تقنية وذكاء اصطناعي', labelEn: 'Tech & AI' },
                      { key: 'fintech', labelAr: 'تكنولوجيا مالية', labelEn: 'FinTech' },
                      { key: 'logistics', labelAr: 'لوجستيات وتجارة', labelEn: 'Logistics' },
                      { key: 'tourism', labelAr: 'سياحة وضيافة', labelEn: 'Tourism' },
                      { key: 'consultancy', labelAr: 'استشارات مهنية', labelEn: 'Consulting' }
                    ].map((item) => (
                      <button
                        key={item.key}
                        onClick={() => setCalcSector(item.key as any)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                          calcSector === item.key
                            ? 'bg-[#C8102E] border-red-500 text-white shadow-sm'
                            : 'bg-stone-800/80 border-stone-700 text-stone-300 hover:bg-stone-700'
                        }`}
                      >
                        {isAr ? item.labelAr : item.labelEn}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Scale Select */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-2">
                    {isAr ? '2. حجم المؤسسة المستهدف:' : '2. Company Scale:'}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { key: 'startup', labelAr: 'ناشئة (1-5 أفراد)', labelEn: 'Startup (1-5)' },
                      { key: 'sme', labelAr: 'متوسطة (6-30 فرد)', labelEn: 'SME (6-30)' },
                      { key: 'enterprise', labelAr: 'كبرى (+30 فرد)', labelEn: 'Enterprise (30+)' }
                    ].map((item) => (
                      <button
                        key={item.key}
                        onClick={() => setCalcScale(item.key as any)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                          calcScale === item.key
                            ? 'bg-amber-500 border-amber-400 text-stone-950 shadow-sm'
                            : 'bg-stone-800/80 border-stone-700 text-stone-300 hover:bg-stone-700'
                        }`}
                      >
                        {isAr ? item.labelAr : item.labelEn}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location Select */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-2">
                    {isAr ? '3. الموقع وبيئة العمل المفضلة:' : '3. Preferred Location:'}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { key: 'incubator', labelAr: 'حاضنة أعمال تقنية / مساحة مرنة', labelEn: 'Tech Incubator / Flex Space' },
                      { key: 'fintech_bay', labelAr: 'خليج البحرين للتكنولوجيا المالية', labelEn: 'Bahrain FinTech Bay' },
                      { key: 'logistics_zone', labelAr: 'منطقة البحرين اللوجستية (BLZ)', labelEn: 'Bahrain Logistics Zone' },
                      { key: 'manama_tower', labelAr: 'برج تجاري في المنامة / مرفأ البحرين', labelEn: 'Grade-A Commercial Tower' }
                    ].map((item) => (
                      <button
                        key={item.key}
                        onClick={() => setCalcLocation(item.key as any)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border text-right rtl:text-right ltr:text-left ${
                          calcLocation === item.key
                            ? 'bg-blue-600 border-blue-400 text-white shadow-sm'
                            : 'bg-stone-800/80 border-stone-700 text-stone-300 hover:bg-stone-700'
                        }`}
                      >
                        {isAr ? item.labelAr : item.labelEn}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live Output Card (5 cols) */}
              <div className="lg:col-span-5 bg-stone-800/90 rounded-2xl p-6 border border-stone-700 shadow-xl">
                <div className="flex items-center justify-between pb-4 border-b border-stone-700/80 mb-4">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                    {isAr ? 'الملخص المالي التقديري (سنوي)' : 'Annual Financial Projection'}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold">
                    BHD / دينار
                  </span>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-300">{isAr ? 'رسوم السجل التجاري (سجلات MOIC):' : 'Commercial Registration (MOIC):'}</span>
                    <span className="font-bold text-white font-mono">{calculatorResult.registrationFee} د.ب</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-stone-300">{isAr ? 'تقدير إيجار المساحة السنوي:' : 'Est. Annual Workspace Lease:'}</span>
                    <span className="font-bold text-white font-mono">{calculatorResult.annualLease.toLocaleString()} د.ب</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
                    <span className="text-emerald-300 font-semibold flex items-center gap-1.5">
                      <HandCoins className="w-3.5 h-3.5" />
                      {isAr ? 'دعم تمكين المالي والرواتب المتوقع:' : 'Expected Tamkeen Grant Subsidy:'}
                    </span>
                    <span className="font-black text-emerald-400 font-mono">-{calculatorResult.tamkeenGrant.toLocaleString()} د.ب</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-blue-950/40 border border-blue-500/30">
                    <span className="text-blue-300 font-semibold flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {isAr ? 'الوفر الضريبي (مقارنة بضريبة 20%):' : 'Tax Savings (vs 20% Corp Tax):'}
                    </span>
                    <span className="font-black text-blue-300 font-mono">+{calculatorResult.taxSavings.toLocaleString()} د.ب</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-700/80 flex items-center justify-between">
                  <div>
                    <span className="block text-[11px] font-semibold text-stone-400">
                      {isAr ? 'صافي التكلفة التشغيلية بعد الدعم:' : 'Net Operating Cost After Grants:'}
                    </span>
                    <span className="text-2xl font-black text-amber-300 font-display">
                      {calculatorResult.netFirstYearOperatingEst.toLocaleString()} د.ب
                    </span>
                  </div>
                  <span className="text-stone-400 text-[11px]">
                    ≈ ${(calculatorResult.netFirstYearOperatingEst * 2.65).toLocaleString(undefined, { maximumFractionDigits: 0 })} USD
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 4. Step-by-Step Investor Journey Guide */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-sm mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#C8102E] uppercase tracking-wider block mb-1">
              {isAr ? 'رحلة المستثمر السلسة' : 'Frictionless Investor Journey'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-stone-900 font-display">
              {isAr ? 'كيف تبدأ عملك وتستثمر في البحرين بخمس خطوات؟' : 'How to Launch Your Business in Bahrain in 5 Steps'}
            </h3>
            <p className="mt-2 text-stone-600 text-sm">
              {isAr
                ? 'إجراءات رقمية موحدة تتيح لك تأسيس شركتك واستخراج تصاريح العمل في غضون أيام قليلة.'
                : 'Fully integrated online workflows allowing company formation and visa issuance within days.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {investorSetupSteps.map((step) => {
              return (
                <div
                  key={step.step}
                  className="bg-stone-50 rounded-2xl p-5 border border-stone-200 flex flex-col justify-between relative group hover:border-[#C8102E] transition-colors"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-stone-900 text-white font-black text-sm flex items-center justify-center mb-4 font-display group-hover:bg-[#C8102E] transition-colors">
                      0{step.step}
                    </div>

                    <h4 className="text-sm font-bold text-stone-900 mb-2 font-display">
                      {isAr ? step.titleAr : step.titleEn}
                    </h4>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {isAr ? step.descAr : step.descEn}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-200/80 text-[11px] font-semibold text-[#C8102E] flex items-center gap-1">
                    <span>{isAr ? 'إجراء إلكتروني فوري' : '100% Digital Workflow'}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. Official Regulatory Portals Directory */}
        <div className="bg-stone-100 rounded-3xl p-6 sm:p-8 border border-stone-200/90 mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-[#C8102E] uppercase tracking-wider block mb-1">
                {isAr ? 'الجهات والمؤسسات الرسمية' : 'Official Investment Entities'}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-stone-900 font-display">
                {isAr ? 'بوابات المستثمرين والمنصات الحكومية المعتمدة' : 'Official Bahraini Investment Gateways'}
              </h3>
            </div>
            {onOpenArticle && (
              <button
                onClick={onOpenArticle}
                className="px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs transition-colors flex items-center gap-2"
              >
                <Zap className="w-4 h-4" />
                <span>{isAr ? 'اقرأ مقال التحول الرقمي والاقتصاد' : 'Read Digital Transformation Article'}</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {officialInvestmentPortals.map((portal, idx) => (
              <a
                key={idx}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-sm hover:shadow-md hover:border-[#C8102E] transition-all flex items-start justify-between gap-3 group"
              >
                <div>
                  <h4 className="text-sm font-bold text-stone-900 group-hover:text-[#C8102E] transition-colors mb-1 font-display">
                    {isAr ? portal.nameAr : portal.nameEn}
                  </h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    {isAr ? portal.roleAr : portal.roleEn}
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-stone-100 text-stone-500 group-hover:bg-red-50 group-hover:text-[#C8102E] transition-colors shrink-0">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 6. Investor Advisory Call to Action */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#C8102E] via-[#A50D25] to-stone-900 text-white p-8 sm:p-12 shadow-2xl">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isAr ? 'استشارات استثمارية مخصصة' : 'Dedicated Investor Support'}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black font-display tracking-tight text-white mb-4">
              {isAr
                ? 'هل تبحث عن فرصة استثمارية محددة أو ترغب في تأسيس فرع لشركتك؟'
                : 'Looking for tailored opportunities or setting up your regional headquarters?'}
            </h3>

            <p className="text-stone-100 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              {isAr
                ? 'فريقنا يوفر لك دراسات موثقة ومعلومات مفصلة حول الحوافز والمواقع الشاغرة والتواصل مع الجهات الرسمية في مملكة البحرين.'
                : 'Connect directly with investment advisors to receive curated briefs on available incentives, commercial plots, and regulatory sandbox admissions.'}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setInquiryModalOpportunity(investmentOpportunities[0])}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-stone-100 text-stone-950 font-bold text-sm shadow-lg transition-transform transform hover:-translate-y-0.5"
              >
                {isAr ? 'تقديم طلب استفسار استثماري' : 'Submit Investment Inquiry'}
              </button>

              <button
                onClick={() => handleWhatsAppDirect('استفسار عام عن فرص الاستثمار في البحرين')}
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg transition-transform transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isAr ? 'تواصل عبر واتساب فوراً' : 'Instant WhatsApp Connect'}</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Inquiry Modal */}
      {inquiryModalOpportunity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setInquiryModalOpportunity(null)}
              className="absolute top-5 right-5 rtl:right-auto rtl:left-5 p-2 rounded-full hover:bg-stone-100 text-stone-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {inquirySubmitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-stone-900 font-display mb-2">
                  {isAr ? 'تم استلام طلبكم بنجاح!' : 'Inquiry Received Successfully!'}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed max-w-sm mx-auto">
                  {isAr
                    ? 'شكراً لاهتمامكم بالاستثمار في مملكة البحرين. سيتم التواصل معكم عبر الواتساب أو البريد الإلكتروني في أقرب وقت.'
                    : 'Thank you for your interest in Bahrain investments. Our team will contact you via WhatsApp or Email shortly.'}
                </p>
              </div>
            ) : (
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#C8102E] text-xs font-bold mb-3">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>{isAr ? 'طلب استفسار عن فرصة استثمارية' : 'Investment Opportunity Inquiry'}</span>
                </div>

                <h3 className="text-xl font-black text-stone-900 font-display mb-1">
                  {isAr ? inquiryModalOpportunity.titleAr : inquiryModalOpportunity.titleEn}
                </h3>
                <p className="text-xs text-stone-500 mb-6">
                  {isAr ? `القطاع: ${inquiryModalOpportunity.sectorAr}` : `Sector: ${inquiryModalOpportunity.sectorEn}`}
                </p>

                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {isAr ? 'الاسم الكامل للمستثمر:' : 'Investor Full Name:'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={inquiryForm.fullName}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, fullName: e.target.value })}
                      placeholder={isAr ? 'مثال: محمد عبدالله' : 'e.g. John Doe'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-[#C8102E] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        {isAr ? 'اسم الشركة / الكيان:' : 'Company Name:'}
                      </label>
                      <input
                        type="text"
                        value={inquiryForm.companyName}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, companyName: e.target.value })}
                        placeholder={isAr ? 'اسم المؤسسة' : 'Company LLC'}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-[#C8102E] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        {isAr ? 'دولة الإقامة / المقر:' : 'Country of Origin:'} *
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryForm.country}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, country: e.target.value })}
                        placeholder={isAr ? 'مثال: السعودية، الإمارات، الكويت' : 'e.g. Saudi Arabia, UAE, UK'}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-[#C8102E] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        {isAr ? 'البريد الإلكتروني:' : 'Email Address:'} *
                      </label>
                      <input
                        type="email"
                        required
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                        placeholder="investor@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-[#C8102E] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        {isAr ? 'رقم الهاتف / الواتساب:' : 'WhatsApp / Phone:'} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                        placeholder="+966 / +973 ..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-[#C8102E] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {isAr ? 'الميزانية الاستثمارية التقريبية:' : 'Investment Budget Scale:'}
                    </label>
                    <select
                      value={inquiryForm.budget}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-[#C8102E] focus:outline-none bg-white"
                    >
                      <option value="50k-250k">{isAr ? '50,000 - 250,000 دينار بحريني' : 'BHD 50,000 - 250,000'}</option>
                      <option value="250k-1m">{isAr ? '250,000 - 1,000,000 دينار بحريني' : 'BHD 250,000 - 1,000,000'}</option>
                      <option value="1m-5m">{isAr ? '1,000,000 - 5,000,000 دينار بحريني' : 'BHD 1,000,000 - 5,000,000'}</option>
                      <option value="5m+">{isAr ? 'أكثر من 5,000,000 دينار بحريني' : 'BHD 5,000,000+'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {isAr ? 'ملاحظات أو استفسار محدد:' : 'Specific Inquiries or Notes:'}
                    </label>
                    <textarea
                      rows={3}
                      value={inquiryForm.notes}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, notes: e.target.value })}
                      placeholder={isAr ? 'اكتب أي متطلبات خاصة بالترخيص، التملك، أو الحوافز...' : 'Specify requirements regarding licensing, location, or subsidies...'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-[#C8102E] focus:outline-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 rounded-xl bg-[#C8102E] hover:bg-[#A50D25] text-white font-bold text-sm shadow-md transition-colors"
                    >
                      {isAr ? 'إرسال الطلب الآن' : 'Submit Inquiry'}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleWhatsAppDirect(isAr ? inquiryModalOpportunity.titleAr : inquiryModalOpportunity.titleEn)}
                      className="p-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                      title={isAr ? 'إرسال عبر الواتساب' : 'Send via WhatsApp'}
                    >
                      <MessageCircle className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
