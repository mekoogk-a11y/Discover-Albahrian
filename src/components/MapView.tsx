import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { Landmark, City, Museum } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Layers, Compass, ExternalLink } from 'lucide-react';

interface MapViewProps {
  landmarks: Landmark[];
  cities: City[];
  museums: Museum[];
  onSelectLandmark: (l: Landmark) => void;
  onSelectCity: (c: City) => void;
  onSelectMuseum: (m: Museum) => void;
}

export const MapView: React.FC<MapViewProps> = ({
  landmarks,
  cities,
  museums,
  onSelectLandmark,
  onSelectCity,
  onSelectMuseum
}) => {
  const { language, t } = useLanguage();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'landmarks' | 'cities' | 'museums'>('all');

  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      // Bahrain default center: [26.15, 50.55], zoom level 11
      const map = L.map(mapContainerRef.current, {
        center: [26.15, 50.55],
        zoom: 11,
        zoomControl: true,
        scrollWheelZoom: false
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors | Bahrain Discovery Map',
        maxZoom: 18,
        minZoom: 9
      }).addTo(map);

      const markersGroup = L.layerGroup().addTo(map);
      markersLayerRef.current = markersGroup;
      mapInstanceRef.current = map;
    }

    return () => {
      // Keep map instance mounted to prevent unnecessary re-inits
    };
  }, []);

  // Update Markers based on filter
  useEffect(() => {
    const map = mapInstanceRef.current;
    const layerGroup = markersLayerRef.current;
    if (!map || !layerGroup) return;

    layerGroup.clearLayers();

    // Custom Icon Generator with Bahrain Red styling
    const createCustomIcon = (type: 'landmark' | 'city' | 'museum') => {
      let iconColor = '#C8102E'; // Bahrain Red default
      let iconSymbol = '📍';

      if (type === 'city') {
        iconColor = '#1F2937';
        iconSymbol = '🏘️';
      } else if (type === 'museum') {
        iconColor = '#831843';
        iconSymbol = '🏛️';
      }

      return L.divIcon({
        className: 'custom-leaflet-marker',
        html: `
          <div style="
            background-color: ${iconColor};
            width: 34px;
            height: 34px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            font-size: 15px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            border: 2px solid #ffffff;
            cursor: pointer;
            transition: transform 0.2s ease;
          " onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'">
            ${iconSymbol}
          </div>
        `,
        iconSize: [34, 34],
        iconAnchor: [17, 17],
        popupAnchor: [0, -18]
      });
    };

    // Add Landmarks
    if (filterType === 'all' || filterType === 'landmarks') {
      landmarks.forEach((l) => {
        const marker = L.marker(l.coordinates, {
          icon: createCustomIcon('landmark')
        });

        const name = language === 'ar' ? l.nameAr : l.nameEn;
        const overview = language === 'ar' ? l.overviewAr : l.overviewEn;
        const cityName = language === 'ar' ? l.cityNameAr : l.cityNameEn;

        const popupContent = `
          <div style="width: 260px; font-family: sans-serif; direction: ${language === 'ar' ? 'rtl' : 'ltr'}; text-align: ${language === 'ar' ? 'right' : 'left'};">
            <div style="height: 120px; width: 100%; overflow: hidden; background: #eee;">
              <img src="${l.image}" style="width: 100%; height: 100%; object-fit: cover;" alt="${name}" />
            </div>
            <div style="padding: 12px;">
              <span style="font-size: 10px; font-weight: 700; color: #C8102E; text-transform: uppercase;">${cityName}</span>
              <h4 style="margin: 3px 0 6px; font-size: 14px; font-weight: 700; color: #111;">${name}</h4>
              <p style="margin: 0 0 10px; font-size: 11px; color: #555; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${overview}</p>
              <button id="btn-landmark-${l.id}" style="
                width: 100%;
                background: #C8102E;
                color: #fff;
                border: none;
                padding: 6px 12px;
                font-size: 11px;
                font-weight: 700;
                border-radius: 8px;
                cursor: pointer;
              ">${language === 'ar' ? 'اكتشف المعلم ←' : 'Discover Landmark →'}</button>
            </div>
          </div>
        `;

        marker.bindPopup(popupContent);
        marker.on('popupopen', () => {
          const btn = document.getElementById(`btn-landmark-${l.id}`);
          if (btn) {
            btn.onclick = () => onSelectLandmark(l);
          }
        });
        layerGroup.addLayer(marker);
      });
    }

    // Add Cities
    if (filterType === 'all' || filterType === 'cities') {
      cities.forEach((c) => {
        const marker = L.marker(c.coordinates, {
          icon: createCustomIcon('city')
        });

        const name = language === 'ar' ? c.nameAr : c.nameEn;
        const description = language === 'ar' ? c.descriptionAr : c.descriptionEn;

        const popupContent = `
          <div style="width: 260px; font-family: sans-serif; direction: ${language === 'ar' ? 'rtl' : 'ltr'}; text-align: ${language === 'ar' ? 'right' : 'left'};">
            <div style="height: 120px; width: 100%; overflow: hidden; background: #eee;">
              <img src="${c.image}" style="width: 100%; height: 100%; object-fit: cover;" alt="${name}" />
            </div>
            <div style="padding: 12px;">
              <span style="font-size: 10px; font-weight: 700; color: #1F2937; text-transform: uppercase;">${language === 'ar' ? c.governorateAr : c.governorateEn}</span>
              <h4 style="margin: 3px 0 6px; font-size: 14px; font-weight: 700; color: #111;">${name}</h4>
              <p style="margin: 0 0 10px; font-size: 11px; color: #555; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${description}</p>
              <button id="btn-city-${c.id}" style="
                width: 100%;
                background: #1F2937;
                color: #fff;
                border: none;
                padding: 6px 12px;
                font-size: 11px;
                font-weight: 700;
                border-radius: 8px;
                cursor: pointer;
              ">${language === 'ar' ? 'اكتشف المدينة ←' : 'Discover City →'}</button>
            </div>
          </div>
        `;

        marker.bindPopup(popupContent);
        marker.on('popupopen', () => {
          const btn = document.getElementById(`btn-city-${c.id}`);
          if (btn) {
            btn.onclick = () => onSelectCity(c);
          }
        });
        layerGroup.addLayer(marker);
      });
    }

    // Add Museums
    if (filterType === 'all' || filterType === 'museums') {
      museums.forEach((m) => {
        const marker = L.marker(m.coordinates, {
          icon: createCustomIcon('museum')
        });

        const name = language === 'ar' ? m.nameAr : m.nameEn;
        const description = language === 'ar' ? m.descriptionAr : m.descriptionEn;

        const popupContent = `
          <div style="width: 260px; font-family: sans-serif; direction: ${language === 'ar' ? 'rtl' : 'ltr'}; text-align: ${language === 'ar' ? 'right' : 'left'};">
            <div style="height: 120px; width: 100%; overflow: hidden; background: #eee;">
              <img src="${m.image}" style="width: 100%; height: 100%; object-fit: cover;" alt="${name}" />
            </div>
            <div style="padding: 12px;">
              <span style="font-size: 10px; font-weight: 700; color: #831843; text-transform: uppercase;">${t('museums')}</span>
              <h4 style="margin: 3px 0 6px; font-size: 14px; font-weight: 700; color: #111;">${name}</h4>
              <p style="margin: 0 0 10px; font-size: 11px; color: #555; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${description}</p>
              <button id="btn-museum-${m.id}" style="
                width: 100%;
                background: #831843;
                color: #fff;
                border: none;
                padding: 6px 12px;
                font-size: 11px;
                font-weight: 700;
                border-radius: 8px;
                cursor: pointer;
              ">${language === 'ar' ? 'اكتشف المتحف ←' : 'Discover Museum →'}</button>
            </div>
          </div>
        `;

        marker.bindPopup(popupContent);
        marker.on('popupopen', () => {
          const btn = document.getElementById(`btn-museum-${m.id}`);
          if (btn) {
            btn.onclick = () => onSelectMuseum(m);
          }
        });
        layerGroup.addLayer(marker);
      });
    }

  }, [filterType, landmarks, cities, museums, language, t, onSelectLandmark, onSelectCity, onSelectMuseum]);

  return (
    <section id="map" className="py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C8102E] mb-2">
              <Compass className="w-4 h-4 text-[#C8102E]" />
              <span>{t('map')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-stone-900 tracking-tight">
              {t('discoverOnMap')}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-600">
              {language === 'ar'
                ? 'خريطة جغرافية تفاعلية توضح مواقع المدن والمعالم الأثرية والمتاحف في كافة أرجاء مملكة البحرين.'
                : 'Interactive geographical map identifying archaeological ruins, UNESCO trails, and museums across Bahrain.'}
            </p>
          </div>

          {/* Filter Segmented Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-2xl border border-stone-200/80 shadow-xs">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors ${
                filterType === 'all'
                  ? 'bg-[#C8102E] text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {t('all')}
            </button>
            <button
              onClick={() => setFilterType('landmarks')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors ${
                filterType === 'landmarks'
                  ? 'bg-[#C8102E] text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {t('landmarks')}
            </button>
            <button
              onClick={() => setFilterType('cities')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors ${
                filterType === 'cities'
                  ? 'bg-[#C8102E] text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {t('cities')}
            </button>
            <button
              onClick={() => setFilterType('museums')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors ${
                filterType === 'museums'
                  ? 'bg-[#C8102E] text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {t('museums')}
            </button>
          </div>
        </div>

        {/* Map Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-stone-200 bg-stone-100 z-10">
          <div
            ref={mapContainerRef}
            className="w-full h-[450px] sm:h-[550px]"
            style={{ minHeight: '450px' }}
          />

          {/* Map Legend Overlay */}
          <div className="absolute bottom-4 right-4 z-20 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-stone-200 shadow-md text-xs space-y-1.5 pointer-events-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#C8102E]" />
              <span className="font-medium text-stone-800">{t('landmarks')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#1F2937]" />
              <span className="font-medium text-stone-800">{t('cities')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#831843]" />
              <span className="font-medium text-stone-800">{t('museums')}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
