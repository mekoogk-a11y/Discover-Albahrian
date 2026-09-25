import React, { useState } from 'react';
import { X, ShieldCheck, Clock, Check, Edit2, Save, FileText, Database } from 'lucide-react';
import { dataService } from '../services/dataService';
import { Museum, Landmark, ContentStatus } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDataUpdated: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose, onDataUpdated }) => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'museums' | 'landmarks' | 'architecture'>('museums');

  // Museum Editing state
  const museums = dataService.getAllMuseums();
  const landmarks = dataService.getAllLandmarks();
  const [editingMuseumId, setEditingMuseumId] = useState<string | null>(null);
  const [editHoursAr, setEditHoursAr] = useState('');
  const [editHoursEn, setEditHoursEn] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  if (!isOpen) return null;

  const handleStartEditMuseum = (m: Museum) => {
    setEditingMuseumId(m.id);
    setEditHoursAr(m.hoursAr);
    setEditHoursEn(m.hoursEn);
  };

  const handleSaveMuseumHours = (museumId: string) => {
    dataService.updateMuseumHours(museumId, editHoursAr, editHoursEn);
    setEditingMuseumId(null);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
    onDataUpdated();
  };

  const handleToggleStatus = (landmarkId: string, currentStatus: ContentStatus) => {
    const nextStatus: ContentStatus =
      currentStatus === 'published' ? 'draft' : currentStatus === 'draft' ? 'archived' : 'published';
    dataService.updateLandmarkStatus(landmarkId, nextStatus);
    onDataUpdated();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto animate-fade-in">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-6 flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="p-6 border-b border-stone-100 flex items-center justify-between bg-stone-50/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-stone-900 text-white">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display text-stone-900">
                {t('adminDashboard')} (Admin Management Core)
              </h3>
              <p className="text-xs text-stone-500">
                إدارة المحتوى الديناميكي وحالات النشر (Draft / Published / Archived) وتحديث ساعات المتاحف
              </p>
            </div>
          </div>

          <button onClick={onClose} className="p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-200">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="px-6 py-2.5 bg-stone-100/60 border-b border-stone-200 flex items-center gap-2">
          <button
            onClick={() => setActiveTab('museums')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-colors ${
              activeTab === 'museums' ? 'bg-[#C8102E] text-white' : 'bg-white text-stone-600 hover:bg-stone-200'
            }`}
          >
            تحديث ساعات عمل المتاحف ({museums.length})
          </button>
          <button
            onClick={() => setActiveTab('landmarks')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-colors ${
              activeTab === 'landmarks' ? 'bg-[#C8102E] text-white' : 'bg-white text-stone-600 hover:bg-stone-200'
            }`}
          >
            إدارة المعالم وحالات النشر ({landmarks.length})
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-colors ${
              activeTab === 'architecture' ? 'bg-[#C8102E] text-white' : 'bg-white text-stone-600 hover:bg-stone-200'
            }`}
          >
            مخطط الجداول (Schema Architecture)
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {saveSuccess && (
            <div className="p-3 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-xl border border-emerald-200 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>تم حفظ التعديلات بنجاح في قاعدة البيانات المحلية.</span>
            </div>
          )}

          {/* Museums Tab */}
          {activeTab === 'museums' && (
            <div className="space-y-4">
              <p className="text-xs text-stone-500">
                يمكن لمدير النظام تحديث أوقات وساعات الزيارة الرسمية لكل متحف، وتنعكس مباشرة على واجهة المستخدمين.
              </p>

              <div className="divide-y divide-stone-100 border border-stone-200 rounded-2xl overflow-hidden">
                {museums.map((m) => {
                  const isEditing = editingMuseumId === m.id;

                  return (
                    <div key={m.id} className="p-4 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <img src={m.image} alt="" className="w-12 h-12 rounded-xl object-cover" />
                        <div>
                          <h4 className="text-sm font-bold text-stone-900">{m.nameAr}</h4>
                          <span className="text-xs text-stone-500">{m.cityNameAr}</span>
                        </div>
                      </div>

                      {isEditing ? (
                        <div className="w-full sm:w-auto flex-1 max-w-md space-y-2">
                          <input
                            type="text"
                            value={editHoursAr}
                            onChange={(e) => setEditHoursAr(e.target.value)}
                            placeholder="ساعات العمل بالعربية"
                            className="w-full text-xs p-2 rounded-lg border border-stone-300"
                          />
                          <input
                            type="text"
                            value={editHoursEn}
                            onChange={(e) => setEditHoursEn(e.target.value)}
                            placeholder="Working hours in English"
                            className="w-full text-xs p-2 rounded-lg border border-stone-300"
                          />
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleSaveMuseumHours(m.id)}
                              className="px-3 py-1 bg-[#C8102E] text-white rounded-lg text-xs font-semibold flex items-center gap-1"
                            >
                              <Save className="w-3 h-3" />
                              <span>حفظ</span>
                            </button>
                            <button
                              onClick={() => setEditingMuseumId(null)}
                              className="px-3 py-1 bg-stone-100 text-stone-600 rounded-lg text-xs font-medium"
                            >
                              إلغاء
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3 text-xs text-stone-600">
                          <div className="text-right">
                            <span className="font-semibold text-stone-900 block">{m.hoursAr}</span>
                            <span className="text-stone-400 font-mono">{m.hoursEn}</span>
                          </div>
                          <button
                            onClick={() => handleStartEditMuseum(m)}
                            className="p-2 text-stone-400 hover:text-stone-800 hover:bg-stone-100 rounded-xl"
                            title="تعديل الساعات"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Landmarks Tab */}
          {activeTab === 'landmarks' && (
            <div className="space-y-4">
              <p className="text-xs text-stone-500">
                إدارة معالم البحرين وتغيير حالة النشر: اضغط على الحالة للتبديل بين (Published / Draft / Archived).
              </p>

              <div className="divide-y divide-stone-100 border border-stone-200 rounded-2xl overflow-hidden">
                {landmarks.map((l) => (
                  <div key={l.id} className="p-4 bg-white flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img src={l.image} alt="" className="w-12 h-12 rounded-xl object-cover" />
                      <div>
                        <h4 className="text-sm font-bold text-stone-900">{l.nameAr}</h4>
                        <span className="text-xs text-stone-500">{l.cityNameAr}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleToggleStatus(l.id, l.status)}
                      className={`px-3 py-1 rounded-xl text-xs font-bold transition-colors ${
                        l.status === 'published'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : l.status === 'draft'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-stone-100 text-stone-600 border border-stone-300'
                      }`}
                      title="اضغط لتغيير الحالة"
                    >
                      {l.status === 'published' ? 'منشور (Published)' : l.status === 'draft' ? 'مسودة (Draft)' : 'مؤرشف (Archived)'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Schema Architecture Tab */}
          {activeTab === 'architecture' && (
            <div className="space-y-4 text-xs font-mono text-stone-700 bg-stone-50 p-4 rounded-2xl border border-stone-200">
              <div className="flex items-center gap-2 text-stone-900 font-bold mb-2">
                <Database className="w-4 h-4 text-[#C8102E]" />
                <span>Production Data Architecture & Schema</span>
              </div>
              <p className="font-sans text-stone-600 text-xs">
                الهيكل مجهز بالكامل للمرحلة التالية للتوصيل مع PostgreSQL / Supabase أو Firebase بالنماذج التالية:
              </p>
              <pre className="p-3 bg-white rounded-xl border border-stone-200 overflow-x-auto text-[11px] leading-relaxed">
{`TABLE cities (
  id VARCHAR PRIMARY KEY,
  name_ar VARCHAR NOT NULL,
  name_en VARCHAR NOT NULL,
  governorate_ar VARCHAR NOT NULL,
  coordinates POINT NOT NULL,
  status VARCHAR DEFAULT 'published'
);

TABLE landmarks (
  id VARCHAR PRIMARY KEY,
  city_id VARCHAR REFERENCES cities(id),
  name_ar VARCHAR NOT NULL,
  category VARCHAR NOT NULL,
  overview_ar TEXT NOT NULL,
  story_ar TEXT NOT NULL,
  coordinates POINT NOT NULL,
  source_url VARCHAR NOT NULL,
  status VARCHAR DEFAULT 'published'
);

TABLE museums (
  id VARCHAR PRIMARY KEY,
  city_id VARCHAR REFERENCES cities(id),
  name_ar VARCHAR NOT NULL,
  hours_ar VARCHAR NOT NULL,
  hours_en VARCHAR NOT NULL,
  official_url VARCHAR NOT NULL,
  status VARCHAR DEFAULT 'published'
);`}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-stone-900 rounded-xl"
          >
            {t('close')}
          </button>
        </div>

      </div>
    </div>
  );
};
