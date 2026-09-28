import riffaImg from '../assets/images/video_riffa_fort_1790348564897.jpg';
import sitraImg from '../assets/images/video_sitra_coast_1790348575436.jpg';
import aaliImg from '../assets/images/video_aali_mounds_1790348586307.jpg';
import zallaqImg from '../assets/images/video_zallaq_beach_1790348598192.jpg';
import manamaImg from '../assets/images/hero_bahrain_skyline_1790335198535.jpg';
import muharraqImg from '../assets/images/bahrain_pearling_path_1790335221174.jpg';
import budaiyaImg from '../assets/images/qalat_al_bahrain_1790335210429.jpg';

export interface VideoScene {
  id: string;
  cityNameAr: string;
  cityNameEn: string;
  governorateAr: string;
  governorateEn: string;
  titleAr: string;
  titleEn: string;
  image: string;
  durationSeconds: number;
  narrationSudanese: string;
  narrationClassical: string;
  highlightsAr: string[];
  highlightsEn: string[];
  coordinates: [number, number];
}

export const BAHRAIN_VIDEO_SCENES: VideoScene[] = [
  {
    id: 'intro',
    cityNameAr: 'مملكة البحرين',
    cityNameEn: 'Kingdom of Bahrain',
    governorateAr: 'أرخبيل الخليج العربي',
    governorateEn: 'Arabian Gulf Archipelago',
    titleAr: 'لؤلؤة الخليج · أرض دلمون والخلود',
    titleEn: 'Pearl of the Gulf · Land of Dilmun',
    image: manamaImg,
    durationSeconds: 7,
    narrationSudanese: 'يا هلا ومرحب بيكم في مملكة البحرين! لؤلؤة الخليج وأرض الحضارات والتاريخ العريق! تعالوا ناخدكم في جولة تعريفية خاصة بمدن البحرين الساحرة!',
    narrationClassical: 'مرحباً بكم في مملكة البحرين، درة الخليج العربي وأرض الحضارات العريقة، نصحبكم في جولة استكشافية توثق مدن المملكة وتاريخها الخالد.',
    highlightsAr: ['أرض الخلود والحضارات', 'أكثر من 5000 عام من التاريخ', 'أرخبيل 33 جزيرة طبيعية'],
    highlightsEn: ['Land of Dilmun Civilizations', '5,000+ Years of History', 'Natural Island Archipelago'],
    coordinates: [26.0667, 50.5577]
  },
  {
    id: 'manama',
    cityNameAr: 'المنامة',
    cityNameEn: 'Manama',
    governorateAr: 'محافظة العاصمة',
    governorateEn: 'Capital Governorate',
    titleAr: 'عروس الخليج · العاصمة ومركز التجارة',
    titleEn: 'The Vibrant Capital & Commercial Heart',
    image: manamaImg,
    durationSeconds: 8,
    narrationSudanese: 'نبدأ بعروس البحرين: المنامة! عاصمة التجارة والأبراج الشامخة، موقع باب البحرين التاريخي وسوق المنامة العتيق، ملتقى الثقافات والنهضة المعمارية!',
    narrationClassical: 'المنامة، عاصمة المملكة ومركزها الاقتصادي النابض، حيث تتناغم ناطحات سحاب خليج البحرين مع عراقة باب البحرين وسوقها التاريخي الأصيل.',
    highlightsAr: ['باب البحرين وسوق المنامة', 'مرفأ البحرين المالي', 'مركز البحرين التجاري العالمي'],
    highlightsEn: ['Bab Al Bahrain & Old Souq', 'Financial Harbour', 'World Trade Center'],
    coordinates: [26.2285, 50.586]
  },
  {
    id: 'muharraq',
    cityNameAr: 'المحرق',
    cityNameEn: 'Muharraq',
    governorateAr: 'محافظة المحرق',
    governorateEn: 'Muharraq Governorate',
    titleAr: 'عاصمة اللؤلؤ التاريخية · مهد التراث',
    titleEn: 'The Historic Pearling Capital',
    image: muharraqImg,
    durationSeconds: 8,
    narrationSudanese: 'ونمشي للمحرق الأصيلة! عاصمة اللؤلؤ والتراث، موطن النواخذة والغواصين، مسار طريق اللؤلؤ العالمي لليونسكو وبيوت العمارة المرجانية القديمة!',
    narrationClassical: 'المحرق، العاصمة التاريخية وعاصمة اللؤلؤ في الخليج العربي، تحتضن مسار طريق اللؤلؤ لليونسكو وبيوت الطواشين المزخرفة بالجص وحجر الفروش.',
    highlightsAr: ['مسار طريق اللؤلؤ لليونسكو', 'عمارة حجر الفروش والبادغير', 'بيوت كبار تجار اللؤلؤ'],
    highlightsEn: ['UNESCO Pearling Path', 'Coral Stone & Wind Towers', 'Historic Merchant Mansions'],
    coordinates: [26.2572, 50.6122]
  },
  {
    id: 'riffa',
    cityNameAr: 'الرفاع',
    cityNameEn: 'Riffa',
    governorateAr: 'المحافظة الجنوبية',
    governorateEn: 'Southern Governorate',
    titleAr: 'مدينة القلاع والقصور العريقة',
    titleEn: 'City of Fortresses & Royal Heritage',
    image: riffaImg,
    durationSeconds: 8,
    narrationSudanese: 'ومنها للرفاع الأبية! مدينة القلاع والقصور التاريخية، قلعة الشيخ سلمان الشامخة والمشرفة على وادي الحنينية الشهير برياحه العليلة ومياهه العذبة!',
    narrationClassical: 'الرفاع، حاضرة القلاع والقصور التاريخية الشامخة، تضم قلعة الرفاع العريقة المشرفة على وادي الحنينية وعيون مائه العذبة ومقر الحكم العريق.',
    highlightsAr: ['قلعة الرفاع التاريخية', 'وادي الحنينية العريق', 'معقل القصور والحكم'],
    highlightsEn: ['Historic Riffa Fort', 'Hunainiya Valley', 'Sovereign Heritage'],
    coordinates: [26.1300, 50.5550]
  },
  {
    id: 'aali',
    cityNameAr: 'عالي',
    cityNameEn: 'Aali',
    governorateAr: 'المحافظة الشمالية',
    governorateEn: 'Northern Governorate',
    titleAr: 'مهد مدافن دلمون وعاصمة الفخار الألفي',
    titleEn: 'Dilmun Burial Mounds & Pottery Capital',
    image: aaliImg,
    durationSeconds: 8,
    narrationSudanese: 'ونصل إلى عالي التاريخية! مهد أقدم مدافن دلمون الملكية في العالم، وعاصمة صناعة الفخار اليدوي المتوارث منذ أكثر من أربعة آلاف سنة!',
    narrationClassical: 'عالي، موطن تلال مدافن دلمون الملكية المدرجة على لائحة التراث العالمي، وعاصمة صناعة الفخار اليدوي المستمرة عبر أربعة آلاف عام.',
    highlightsAr: ['تلال مدافن دلمون (اليونسكو)', 'أقدم ورش وأفران الفخار اليدوي', 'تراث عمره 4000 عام'],
    highlightsEn: ['UNESCO Dilmun Burial Mounds', 'Handmade Pottery Kilns', '4,000-Year Heritage'],
    coordinates: [26.1550, 50.5280]
  },
  {
    id: 'sitra',
    cityNameAr: 'سترة',
    cityNameEn: 'Sitra',
    governorateAr: 'محافظة العاصمة / الجنوبية',
    governorateEn: 'Capital / Southern Coast',
    titleAr: 'جزيرة العيون وسفن الصيد البحرية',
    titleEn: 'Island of Natural Springs & Dhows',
    image: sitraImg,
    durationSeconds: 7,
    narrationSudanese: 'وبعدها سترة الجميلة! جزيرة الخير والعيون العذبة وسفن الصيد والبوانيش، مرافئ هادئة تعكس روح البحر وأصالة أهل السواحل!',
    narrationClassical: 'سترة، جزيرة المرافئ والعيون العذبة والتقاليد البحرية المتجذرة، حيث ترسو سفن الصيد التراثية على ضفاف مياه الخليج الهادئة.',
    highlightsAr: ['مرافئ سفن الصيد التقليدية', 'عيون الماء العذبة التاريخية', 'أصالة الحياة البحرية'],
    highlightsEn: ['Traditional Fishing Dhows', 'Historic Fresh Springs', 'Coastal Maritime Culture'],
    coordinates: [26.1520, 50.6200]
  },
  {
    id: 'zallaq',
    cityNameAr: 'الزلاق',
    cityNameEn: 'Zallaq',
    governorateAr: 'المحافظة الجنوبية',
    governorateEn: 'Southern Governorate',
    titleAr: 'ساحل الغروب وبوابة شجرة الحياة',
    titleEn: 'Sunset Coast & Tree of Life Gateway',
    image: zallaqImg,
    durationSeconds: 8,
    narrationSudanese: 'ونتحرك للزلاق الرائعة! شواطئ الساحل الغربي والغروب الذهبي، وبوابة صحراء الصخير المشهورة بشجرة الحياة الصامدة في الرمال لأكثر من 400 سنة!',
    narrationClassical: 'الزلاق، درة الساحل الغربي برمالها وشواطئها الذهبية، وبوابة صحراء الصخير المشرفة على شجرة الحياة المعمرة لأكثر من أربعة قرون.',
    highlightsAr: ['شواطئ الساحل الغربي والغروب', 'بوابة صحراء الصخير', 'شجرة الحياة المعمرة (400 عام)'],
    highlightsEn: ['Golden Sunset Coastline', 'Sakhir Desert Gateway', 'The Tree of Life (400+ Years)'],
    coordinates: [26.0460, 50.4850]
  },
  {
    id: 'budaiya',
    cityNameAr: 'البديع',
    cityNameEn: 'Budaiya',
    governorateAr: 'المحافظة الشمالية',
    governorateEn: 'Northern Governorate',
    titleAr: 'واحات النخيل وسواحل الشمال الخضراء',
    titleEn: 'Palm Groves & Northern Coastal Enclaves',
    image: budaiyaImg,
    durationSeconds: 8,
    narrationSudanese: 'وأخيراً البديع الخضراء! واحة النخيل والمزارع وسواحل الشمال الهادئة، وبجوارها قلعة البحرين التاريخية الشامخة على مياه البحر!',
    narrationClassical: 'البديع، ملتقى بساتين النخيل والواحات والقرى البحرية الشمالية، والمجاورة لقلعة البحرين العريقة المسجلة على قائمة اليونسكو.',
    highlightsAr: ['بساتين النخيل والواحات', 'موقع قلعة البحرين لليونسكو', 'سواحل الشمال الهادئة'],
    highlightsEn: ['Lush Date Palm Groves', 'UNESCO Bahrain Fort Vicinity', 'Northern Peaceful Coastline'],
    coordinates: [26.2167, 50.4500]
  },
  {
    id: 'outro',
    cityNameAr: 'مملكة البحرين',
    cityNameEn: 'Kingdom of Bahrain',
    governorateAr: 'البحرين كما لم تعرفها من قبل',
    governorateEn: 'Bahrain as You Have Never Known It',
    titleAr: 'مرحباً بكم في أرض المحبة والسلام',
    titleEn: 'Welcome to the Land of Peace & Heritage',
    image: manamaImg,
    durationSeconds: 7,
    narrationSudanese: 'دي البحرين كما لم تعرفوها من قبل! كرم وضيافة وتاريخ يشرف! مرحب بيكم في مملكة البحرين، ونلتقي دائماً على كل خير!',
    narrationClassical: 'هذه هي مملكة البحرين، أرض الكرم والمحبة والسلام، وتاريخ حي يتجدد. البحرين... كما لم تعرفها من قبل.',
    highlightsAr: ['كرم وضيافة عربية أصيلة', 'إرث حضاري إنساني عالمي', 'البحرين ترحب بالجميع'],
    highlightsEn: ['Legendary Hospitality', 'Global Civilizational Legacy', 'Bahrain Welcomes the World'],
    coordinates: [26.2285, 50.586]
  }
];
