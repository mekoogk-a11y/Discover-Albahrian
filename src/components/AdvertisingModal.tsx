import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  X,
  Sparkles,
  Check,
  Send,
  Building2,
  Crown,
  Zap,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface AdvertisingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSubmitBusiness?: () => void;
}

export const AdvertisingModal: React.FC<AdvertisingModalProps> = ({
  isOpen,
  onClose,
  onOpenSubmitBusiness
}) => {
  const { language } = useLanguage();
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'featured' | 'premium'>('featured');
  const [contactName, setContactName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setSentSuccess(true);
  };

  const plans = [
    {
      id: 'basic' as const,
      nameAr: 'الباقة الأساسية (Basic)',
      nameEn: 'Basic Listing',
      icon: <Building2 className="w-5 h-5 text-stone-600" />,
      featuresAr: [
        'إدراج معتمد في الدليل السياحي والتجاري',
        'صفحة مستقلة للمنشأة مهيأة للـ SEO',
        'عرض أرقام التواصل وروابط الموقع',
        'تحديد الموقع على خرائط التصفح التفاعلية'
      ],
      featuresEn: [
        'Verified Guide Directory Listing',
        'SEO-Optimized Independent Page',
        'Direct Phone & Website Links',
        'Interactive Map Pinning'
      ],
      badgeAr: 'المجانية / الأساسية',
      badgeEn: 'Starter',
      color: 'border-stone-200 bg-white'
    },
    {
      id: 'featured' as const,
      nameAr: 'الباقة المميّزة (Featured)',
      nameEn: 'Featured Partner',
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      featuresAr: [
        'جميع مزايا الباقة الأساسية',
        'شارة "مميّز / Featured" الرسمية البارزة',
        'أسبقية الظهور في نتائج البحث والتصفية',
        'إمكانية إضافة معرض صور متعدد فائق الجودة',
        'ظهور دوري في اكتشاف اليوم والتوصيات'
      ],
      featuresEn: [
        'All Basic Features Included',
        'Official "Featured" Golden Badge',
        'Top Priority in Category & Area Filters',
        'High-Resolution Extended Photo Gallery',
        'Recommendation in Daily Highlights'
      ],
      badgeAr: 'الأكثر طلباً',
      badgeEn: 'Most Popular',
      color: 'border-[#C8102E] ring-2 ring-[#C8102E]/20 bg-[#FDFBF7]'
    },
    {
      id: 'premium' as const,
      nameAr: 'الباقة الاحترافية (Premium VIP)',
      nameEn: 'Premium VIP Sponsor',
      icon: <Crown className="w-5 h-5 text-purple-600" />,
      featuresAr: [
        'جميع مزايا الباقتين السابقتين',
        'ظهور دائم ومخصص في الواجهة الرئيسية للموقع',
        'أولوية قصوى مطلقة في نتائج محرك البحث',
        'مساحة إعلانية بارزة وبانر ترويجي مباشر',
        'تغطية إعلامية في دليل وتوصيات المساعد الذكي',
        'تقرير دوري عن عدد النقرات والزيارات'
      ],
      featuresEn: [
        'All Features from Previous Tiers',
        'Exclusive Placement on Homepage Header Flow',
        'Top Search Ranking & SearchAction Priority',
        'High-Impact Custom Visual Ad Banner',
        'Smart Assistant Itinerary Endorsement',
        'Comprehensive Analytics & Impression Report'
      ],
      badgeAr: 'الشراكة الرسمية',
      badgeEn: 'Official Partner',
      color: 'border-purple-300 ring-2 ring-purple-500/20 bg-purple-50/20'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-3 sm:p-6 overflow-y-auto animate-fade-in">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-4 sm:my-8 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-6 border-b border-stone-100 flex items-center justify-between bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 text-white">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>{language === 'ar' ? 'بوابات الإعلان والرعاية التجارية' : 'Sponsorship & Advertising Opportunities'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              {language === 'ar' ? 'روّج لنشاطك على Discover Bahrain' : 'Promote Your Business on Discover Bahrain'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1 bg-stone-50/40">
          
          {/* Plans Grid */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-6">
              <h4 className="text-lg font-bold font-display text-stone-900">
                {language === 'ar' ? 'اختر باقة الترويج المناسبة لمنشأتك' : 'Select the Ideal Promotion Package'}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                {language === 'ar'
                  ? 'وصول مباشر لآلاف السياح والمقيمين الباحثين يومياً عن أفضل أماكن الإقامة والطعام والتجارب في البحرين.'
                  : 'Reach thousands of prospective tourists and locals exploring Bahrain daily.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((p) => {
                const isSelected = selectedPlan === p.id;
                return (
                  <div
                    key={p.id}
                    onClick={() => setSelectedPlan(p.id)}
                    className={`rounded-2xl p-6 border transition-all cursor-pointer flex flex-col justify-between relative shadow-xs hover:shadow-md ${p.color} ${
                      isSelected ? 'scale-102 ring-2 ring-[#C8102E]' : 'opacity-90 hover:opacity-100'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2.5 rounded-xl bg-white shadow-2xs">
                          {p.icon}
                        </div>
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-stone-100 text-stone-700">
                          {language === 'ar' ? p.badgeAr : p.badgeEn}
                        </span>
                      </div>

                      <h5 className="text-base font-bold text-stone-900">
                        {language === 'ar' ? p.nameAr : p.nameEn}
                      </h5>

                      <ul className="mt-4 space-y-2.5 text-xs text-stone-600">
                        {(language === 'ar' ? p.featuresAr : p.featuresEn).map((f, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 mt-6 border-t border-stone-200/60">
                      <button
                        type="button"
                        onClick={() => setSelectedPlan(p.id)}
                        className={`w-full py-2.5 rounded-xl text-xs font-bold transition-colors ${
                          isSelected
                            ? 'bg-[#C8102E] text-white shadow-xs'
                            : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
                        }`}
                      >
                        {isSelected
                          ? language === 'ar' ? 'الباقة المحددة ✓' : 'Selected Plan ✓'
                          : language === 'ar' ? 'تحديد هذه الباقة' : 'Choose Plan'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Inquiry / Sponsorship Contact Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-xs">
            {sentSuccess ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h5 className="text-lg font-bold text-stone-900">
                  {language === 'ar' ? 'تم استلام طلب الترويج التجاري بنجاح!' : 'Inquiry Submitted Successfully!'}
                </h5>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                  {language === 'ar'
                    ? 'سيتواصل معك فريق التسويق والشراكات في منصة اكتشف البحرين لمناقشة تفعيل الباقة وتجهيز المواد الإعلانية لمنشأتك.'
                    : 'Our partnerships team will reach out promptly to finalize activation and promotional assets.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="space-y-4">
                <h5 className="text-base font-bold text-stone-900">
                  {language === 'ar' ? 'طلب عرض مخصص وتفعيل الإعلان' : 'Inquire for Promotion & Activation'}
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      {language === 'ar' ? 'اسم المنشأة أو الشركة *' : 'Business / Brand Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder={language === 'ar' ? 'مثال: فندق أو مطعم...' : 'Brand Name'}
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:ring-2 focus:ring-[#C8102E]/30 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      {language === 'ar' ? 'اسم مسؤول التسويق أو التواصل *' : 'Contact Person *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder={language === 'ar' ? 'الاسم' : 'Name'}
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:ring-2 focus:ring-[#C8102E]/30 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      {language === 'ar' ? 'رقم الهاتف أو WhatsApp *' : 'Phone / WhatsApp *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+973 ..."
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs font-mono focus:ring-2 focus:ring-[#C8102E]/30 focus:outline-none"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      {language === 'ar' ? 'البريد الإلكتروني *' : 'Email *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="marketing@business.bh"
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs font-mono focus:ring-2 focus:ring-[#C8102E]/30 focus:outline-none"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    {language === 'ar' ? 'ملاحظات أو متطلبات خاصة' : 'Notes & Campaign Goals'}
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={language === 'ar' ? 'أهداف الحملة، التوقيت المفضل، أو أي استفسار...' : 'Campaign goals or questions...'}
                    className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:ring-2 focus:ring-[#C8102E]/30 focus:outline-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-stone-500">
                    {language === 'ar'
                      ? '⚡ استجابة سريعة خلال 24 ساعة عمل'
                      : '⚡ Prompt response within 24 business hours'}
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#C8102E] hover:bg-[#A50D25] shadow-xs transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{language === 'ar' ? 'إرسال طلب الترويج' : 'Submit Promotion Request'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
