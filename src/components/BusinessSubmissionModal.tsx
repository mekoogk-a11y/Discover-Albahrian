import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { dataService } from '../services/dataService';
import {
  X,
  Building2,
  Hotel,
  UtensilsCrossed,
  Compass,
  CheckCircle2,
  AlertCircle,
  Upload,
  Link,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

interface BusinessSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'hotel' | 'restaurant' | 'attraction' | 'business';
  onSubmitted?: () => void;
}

export const BusinessSubmissionModal: React.FC<BusinessSubmissionModalProps> = ({
  isOpen,
  onClose,
  initialType = 'business',
  onSubmitted
}) => {
  const { language } = useLanguage();

  const [businessType, setBusinessType] = useState<'hotel' | 'restaurant' | 'attraction' | 'business'>(initialType);
  const [businessName, setBusinessName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('المنامة');
  const [area, setArea] = useState('');
  const [address, setAddress] = useState('');
  const [googleMapsUrl, setGoogleMapsUrl] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [instagramUrl, setInstagramUrl] = useState('');
  const [facebookUrl, setFacebookUrl] = useState('');
  const [description, setDescription] = useState('');
  const [services, setServices] = useState('');
  const [workingHours, setWorkingHours] = useState('');
  const [stars, setStars] = useState<number>(5);
  const [cuisineType, setCuisineType] = useState('bahraini');
  const [imageUrl, setImageUrl] = useState('');
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!businessName.trim() || !contactPerson.trim() || !phone.trim() || !email.trim() || !description.trim()) {
      setErrorMessage(
        language === 'ar'
          ? 'يرجى استيفاء جميع الحقول الأساسية المطلوبة (*)'
          : 'Please complete all required fields (*)'
      );
      return;
    }

    if (!agreedTerms) {
      setErrorMessage(
        language === 'ar'
          ? 'يرجى الموافقة على إقرار صحة البيانات للمتابعة.'
          : 'Please agree to the accuracy terms to proceed.'
      );
      return;
    }

    dataService.addSubmission({
      businessType,
      businessName,
      contactPerson,
      phone,
      whatsapp: whatsapp || phone,
      email,
      city,
      area: area || city,
      address,
      googleMapsUrl,
      websiteUrl,
      instagramUrl,
      facebookUrl,
      description,
      services,
      workingHours,
      stars: businessType === 'hotel' ? stars : undefined,
      cuisineType: businessType === 'restaurant' ? cuisineType : undefined,
      imageUrl: imageUrl || undefined,
      agreedTerms: true
    });

    setSubmittedSuccess(true);
    if (onSubmitted) onSubmitted();
  };

  const handleResetAndClose = () => {
    setSubmittedSuccess(false);
    setBusinessName('');
    setContactPerson('');
    setPhone('');
    setEmail('');
    setDescription('');
    setAgreedTerms(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-3 sm:p-6 overflow-y-auto animate-fade-in">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-4 sm:my-8 flex flex-col max-h-[90vh]">
        
        {/* Top Header Bar */}
        <div className="p-5 sm:p-6 border-b border-stone-100 flex items-center justify-between bg-stone-50/80">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C8102E]">
              <span>🇧🇭</span>
              <span>{language === 'ar' ? 'بوابة الأعمال السياحية والتجارية' : 'Business & Hospitality Portal'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-stone-900 mt-1">
              {language === 'ar' ? 'إضافة نشاط تجاري في دليل البحرين' : 'List Your Business in Discover Bahrain'}
            </h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-2 rounded-full bg-white text-stone-600 hover:text-stone-900 border border-stone-200 shadow-2xs transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {submittedSuccess ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold font-display text-stone-900">
                {language === 'ar' ? 'تم استلام طلبك بنجاح!' : 'Submission Received Successfully!'}
              </h4>
              <p className="text-stone-600 max-w-md mx-auto text-sm leading-relaxed">
                {language === 'ar'
                  ? 'طلبك الآن قيد المراجعة والتدقيق (Pending Review) من قِبل إدارة منصة اكتشف البحرين، وسيتم التحقق من بيانات النشاط ثم نشره مباشرة في الدليل الرسمي.'
                  : 'Your submission is now pending review by Discover Bahrain administrators. It will be verified and published promptly in the official guide.'}
              </p>
              <div className="pt-6">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#C8102E] hover:bg-[#A50D25] shadow-md transition-colors"
                >
                  {language === 'ar' ? 'تم، إغلاق النافذة' : 'Done, Close Window'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {errorMessage && (
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Type Switcher */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
                  {language === 'ar' ? 'نوع النشاط *' : 'Business Category *'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'hotel', labelAr: 'فندق / منتجع', labelEn: 'Hotel', icon: <Hotel className="w-4 h-4" /> },
                    { id: 'restaurant', labelAr: 'مطعم / مقهى', labelEn: 'Restaurant', icon: <UtensilsCrossed className="w-4 h-4" /> },
                    { id: 'attraction', labelAr: 'وجهة سياحية', labelEn: 'Attraction', icon: <Compass className="w-4 h-4" /> },
                    { id: 'business', labelAr: 'نشاط تجاري', labelEn: 'Business', icon: <Building2 className="w-4 h-4" /> }
                  ].map((t) => (
                    <button
                      type="button"
                      key={t.id}
                      onClick={() => setBusinessType(t.id as any)}
                      className={`flex items-center justify-center gap-2 p-3 rounded-2xl border text-xs font-bold transition-all ${
                        businessType === t.id
                          ? 'bg-[#C8102E] text-white border-[#C8102E] shadow-sm'
                          : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      {t.icon}
                      <span>{language === 'ar' ? t.labelAr : t.labelEn}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Business Name & Manager */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700">
                    {language === 'ar' ? 'اسم المنشأة أو النشاط *' : 'Business Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder={language === 'ar' ? 'مثال: فندق لؤلؤة البحرين' : 'e.g. Bahrain Pearl Hotel'}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700">
                    {language === 'ar' ? 'اسم الشخص المسؤول أو المدير *' : 'Manager / Contact Person *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    placeholder={language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 text-sm"
                  />
                </div>
              </div>

              {/* Phone, WhatsApp & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700">
                    {language === 'ar' ? 'رقم الهاتف *' : 'Phone *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+973 1700 0000"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 text-sm font-mono"
                    dir="ltr"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700">
                    {language === 'ar' ? 'رقم الواتساب (WhatsApp)' : 'WhatsApp'}
                  </label>
                  <input
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="+973 3900 0000"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 text-sm font-mono"
                    dir="ltr"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700">
                    {language === 'ar' ? 'البريد الإلكتروني *' : 'Email *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contact@business.bh"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 text-sm font-mono"
                    dir="ltr"
                  />
                </div>
              </div>

              {/* City & Area */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700">
                    {language === 'ar' ? 'المدينة *' : 'City *'}
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 text-sm bg-white"
                  >
                    <option value="المنامة">المنامة (Manama)</option>
                    <option value="المحرق">المحرق (Muharraq)</option>
                    <option value="الرفاع">الرفاع (Riffa)</option>
                    <option value="عالي">عالي (Aali)</option>
                    <option value="سترة">سترة (Sitra)</option>
                    <option value="الزلاق">الزلاق (Zallaq)</option>
                    <option value="البديع">البديع (Budaiya)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700">
                    {language === 'ar' ? 'المنطقة / الحي *' : 'District / Area *'}
                  </label>
                  <input
                    type="text"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder={language === 'ar' ? 'مثال: ضاحية السيف، خليج البحرين' : 'e.g. Seef, Bahrain Bay'}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700">
                    {language === 'ar' ? 'ساعات العمل' : 'Working Hours'}
                  </label>
                  <input
                    type="text"
                    value={workingHours}
                    onChange={(e) => setWorkingHours(e.target.value)}
                    placeholder={language === 'ar' ? 'مثال: 9:00 ص – 11:00 م' : 'e.g. 9 AM – 11 PM'}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 text-sm"
                  />
                </div>
              </div>

              {/* Special options depending on type */}
              {businessType === 'hotel' && (
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700">
                    {language === 'ar' ? 'تصنيف النجوم' : 'Star Rating'}
                  </label>
                  <select
                    value={stars}
                    onChange={(e) => setStars(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 text-sm bg-white"
                  >
                    <option value={5}>5 نجوم - فندق فاخر (5 Stars Luxury)</option>
                    <option value={4}>4 نجوم - فندق راقٍ (4 Stars Upscale)</option>
                    <option value={3}>3 نجوم - فندق اقتصادي (3 Stars Comfort)</option>
                  </select>
                </div>
              )}

              {businessType === 'restaurant' && (
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700">
                    {language === 'ar' ? 'نوع المطبخ' : 'Cuisine Type'}
                  </label>
                  <select
                    value={cuisineType}
                    onChange={(e) => setCuisineType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 text-sm bg-white"
                  >
                    <option value="bahraini">مأكولات بحرينية وتراثية (Bahraini)</option>
                    <option value="arab">عربية وشرقية (Arab & Middle Eastern)</option>
                    <option value="asian">آسيوية (Asian)</option>
                    <option value="luxury">مطعم فاخر / ستيك هاوس (Fine Dining)</option>
                    <option value="cafe">مقهى وكافيه (Cafe & Pastries)</option>
                    <option value="sweets">حلويات ومعجنات (Sweets)</option>
                  </select>
                </div>
              )}

              {/* Description */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700">
                  {language === 'ar' ? 'وصف النشاط والخدمات *' : 'Description & Services *'}
                </label>
                <textarea
                  required
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={
                    language === 'ar'
                      ? 'نبذة تعريفية شاملة عن النشاط، ميزاته، والخدمات المقدمة للزوار...'
                      : 'Comprehensive overview of your business, features, and guest experiences...'
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 text-sm"
                />
              </div>

              {/* Services Tags */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700">
                  {language === 'ar' ? 'المزايا والمرافق (مفصولة بفواصل)' : 'Key Facilities / Amenities (comma separated)'}
                </label>
                <input
                  type="text"
                  value={services}
                  onChange={(e) => setServices(e.target.value)}
                  placeholder={language === 'ar' ? 'مثال: واي فاي مجاني، مواقف سيارات، جلسات عائلية، مسبح' : 'Free WiFi, Parking, Family Seating, Pool'}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 text-sm"
                />
              </div>

              {/* Online Links: Website, Google Maps, Instagram */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700">
                    {language === 'ar' ? 'رابط الموقع الإلكتروني' : 'Website URL'}
                  </label>
                  <input
                    type="url"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="https://..."
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 text-sm font-mono text-xs"
                    dir="ltr"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700">
                    {language === 'ar' ? 'رابط خرائط Google' : 'Google Maps Link'}
                  </label>
                  <input
                    type="url"
                    value={googleMapsUrl}
                    onChange={(e) => setGoogleMapsUrl(e.target.value)}
                    placeholder="https://maps.google.com/..."
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 text-sm font-mono text-xs"
                    dir="ltr"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700">
                    {language === 'ar' ? 'رابط انستغرام (Instagram)' : 'Instagram Link'}
                  </label>
                  <input
                    type="url"
                    value={instagramUrl}
                    onChange={(e) => setInstagramUrl(e.target.value)}
                    placeholder="https://instagram.com/..."
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 text-sm font-mono text-xs"
                    dir="ltr"
                  />
                </div>
              </div>

              {/* Image URL */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700">
                  {language === 'ar' ? 'رابط صورة النشاط أو الشعار' : 'Image or Logo URL'}
                </label>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://... image.jpg"
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 text-sm font-mono text-xs"
                  dir="ltr"
                />
              </div>

              {/* Legal Agreement Checkbox */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={agreedTerms}
                    onChange={(e) => setAgreedTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded text-[#C8102E] focus:ring-[#C8102E]"
                  />
                  <span className="text-xs font-medium text-stone-800 leading-relaxed">
                    {language === 'ar'
                      ? 'أقر بأن جميع المعلومات والبيانات المقدمة صحيحة ودقيقة، وتخضع للمراجعة والتدقيق والاعتماد من قبل إدارة منصة «اكتشف البحرين» قبل نشرها رسمياً في الدليل.'
                      : 'I certify that all information provided is accurate and subject to verification and review by Discover Bahrain administration before publication.'}
                  </span>
                </label>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors"
                >
                  {language === 'ar' ? 'إلغاء' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-7 py-2.5 rounded-xl text-xs font-bold text-white bg-[#C8102E] hover:bg-[#A50D25] shadow-md transition-colors"
                >
                  {language === 'ar' ? 'إرسال الطلب للمراجعة' : 'Submit for Review'}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
