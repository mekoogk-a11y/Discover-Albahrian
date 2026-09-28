import {
  City,
  Landmark,
  Museum,
  TimelineEvent,
  HeritageTopic,
  DailyDiscovery,
  HospitalityItem,
  TravelGuideFAQ
} from '../types';

// Verified Generated Local Assets
import heroSkyline from '../assets/images/hero_bahrain_skyline_1790335198535.jpg';
import qalatImg from '../assets/images/qalat_al_bahrain_1790335210429.jpg';
import pearlingImg from '../assets/images/bahrain_pearling_path_1790335221174.jpg';
import museumImg from '../assets/images/bahrain_national_museum_1790335231679.jpg';
import babImg from '../assets/images/bab_al_bahrain_manama_1790335242154.jpg';

import riffaSceneImg from '../assets/images/video_riffa_fort_1790348564897.jpg';
import sitraSceneImg from '../assets/images/video_sitra_coast_1790348575436.jpg';
import aaliSceneImg from '../assets/images/video_aali_mounds_1790348586307.jpg';
import zallaqSceneImg from '../assets/images/video_zallaq_beach_1790348598192.jpg';

export const CITIES_DATA: City[] = [
  {
    id: 'manama',
    nameAr: 'المنامة',
    nameEn: 'Manama',
    governorateAr: 'محافظة العاصمة',
    governorateEn: 'Capital Governorate',
    image: heroSkyline,
    descriptionAr: 'عاصمة مملكة البحرين ومركزها الاقتصادي والتجاري النابض. تلتقي فيها العمارة التراثية في باب البحرين مع ناطحات السحاب الحديثة في خليج البحرين ومرفأ البحرين المالي.',
    descriptionEn: 'The vibrant capital and commercial heart of Bahrain, where historic heritage at Bab Al Bahrain seamlessly meets futuristic skyline towers at Bahrain Bay.',
    historyAr: 'ورد ذكر المنامة في النصوص والخرائط التاريخية منذ العصور الإسلامية، ثم غدت الميناء التجاري الرئيسي للخليج العربي في القرن التاسع عشر ومطلع القرن العشرين بفضل تجارة اللؤلؤ الدولية.',
    historyEn: 'Documented since Islamic eras, Manama grew into the Arabian Gulf’s chief international trade and pearling port through the 19th and early 20th centuries.',
    coordinates: [26.2285, 50.586],
    landmarksCount: 14,
    museumsCount: 4,
    heritageCount: 8,
    source: {
      nameAr: 'هيئة البحرين للثقافة والآثار',
      nameEn: 'Bahrain Authority for Culture and Antiquities',
      url: 'https://culture.gov.bh',
      verifiedOrganization: 'BACA'
    },
    status: 'published'
  },
  {
    id: 'muharraq',
    nameAr: 'المحرق',
    nameEn: 'Muharraq',
    governorateAr: 'محافظة المحرق',
    governorateEn: 'Muharraq Governorate',
    image: pearlingImg,
    descriptionAr: 'العاصمة التاريخية للبحرين وقلبها الثقافي. موطن "طريق اللؤلؤ" المدرج على قائمة التراث العالمي لليونسكو، وتتميز بأزقتها الأندلسية الخليجية وبيوتها التراثية الشامخة.',
    descriptionEn: 'Bahrain’s historic capital and cultural nucleus. Home to the UNESCO World Heritage Pearling Path, characterized by winding alleys and masterfully restored coral stone mansions.',
    historyAr: 'كانت المحرق عاصمة البحرين ومقر الحكم حتى بدايات القرن العشرين، ومركز تجمع نخبة الطواشين ونواخذة الغوص في العصر الذهبي لاقتصاد اللؤلؤ الخليجي.',
    historyEn: 'Historic royal capital until the early 20th century and the epicenter of merchant fleet captains during the golden era of pearling.',
    coordinates: [26.2572, 50.6122],
    landmarksCount: 11,
    museumsCount: 3,
    heritageCount: 12,
    source: {
      nameAr: 'مركز التراث العالمي - اليونسكو',
      nameEn: 'UNESCO World Heritage Centre',
      url: 'https://whc.unesco.org/en/list/1364',
      verifiedOrganization: 'UNESCO'
    },
    status: 'published'
  },
  {
    id: 'riffa',
    nameAr: 'الرفاع',
    nameEn: 'Riffa',
    governorateAr: 'المحافظة الجنوبية',
    governorateEn: 'Southern Governorate',
    image: riffaSceneImg,
    descriptionAr: 'مدينة القلاع العريقة والقصور التاريخية، تنقسم إلى الرفاع الشرقي والرفاع الغربي، وتحتضن قلعة الشيخ سلمان بن أحمد الفاتح المشرفة على وادي الحنينية الشهير.',
    descriptionEn: 'A city of timeless fortresses and sovereign residences, divided into East and West Riffa, perched over the famed historic Hunainiya Valley.',
    historyAr: 'اتخذها حكام البحرين الأوائل مقراً للحكم في القرنين الثامن عشر والتاسع عشر لموقعها الاستراتيجي المرتفع وهوائها العليل وعيون مائها العذبة كعين الحنينية.',
    historyEn: 'Chosen by early Bahraini rulers as seat of governance in the 18th and 19th centuries due to its commanding elevation, sweet waters, and gentle breezes.',
    coordinates: [26.1300, 50.5550],
    landmarksCount: 6,
    museumsCount: 2,
    heritageCount: 5,
    source: {
      nameAr: 'هيئة البحرين للثقافة والآثار',
      nameEn: 'Bahrain Authority for Culture and Antiquities',
      url: 'https://culture.gov.bh',
      verifiedOrganization: 'BACA'
    },
    status: 'published'
  },
  {
    id: 'aali',
    nameAr: 'عالي',
    nameEn: 'Aali',
    governorateAr: 'المحافظة الشمالية',
    governorateEn: 'Northern Governorate',
    image: aaliSceneImg,
    descriptionAr: 'حاضرة أقدم مدافن تلية ملكية في العالم (تلال مدافن دلمون لليونسكو) وعاصمة صناعة الفخار اليدوي المتوارث منذ أكثر من أربعة آلاف عام.',
    descriptionEn: 'Home to Dilmun’s royal burial mounds (UNESCO) and the ancient capital of authentic handmade pottery passed down over four millennia.',
    historyAr: 'تضم عالي تلال مدافن ملكية ضخمة ترجع لعصر دلمون البرونزي، استمرت فيها عائلات الفخارين في استخدام أفران تقليدية متوارثة عبر الأجيال.',
    historyEn: 'Houses colossal Bronze Age Royal Dilmun burial mounds, surrounded by historic kiln workshops operating continuously across centuries.',
    coordinates: [26.1550, 50.5280],
    landmarksCount: 5,
    museumsCount: 1,
    heritageCount: 7,
    source: {
      nameAr: 'مركز التراث العالمي - اليونسكو',
      nameEn: 'UNESCO World Heritage Centre',
      url: 'https://whc.unesco.org/en/list/1542',
      verifiedOrganization: 'UNESCO'
    },
    status: 'published'
  },
  {
    id: 'sitra',
    nameAr: 'سترة',
    nameEn: 'Sitra',
    governorateAr: 'محافظة العاصمة / الجنوبية',
    governorateEn: 'Capital / Southern Coast',
    image: sitraSceneImg,
    descriptionAr: 'جزيرة العيون العذبة والتراث البحري، تشتهر بمرافئ قوارب الصيد والبوانيش وسواحلها الهادئة المطلة على مياه الخليج العربي الصافية.',
    descriptionEn: 'An island of natural springs and maritime lore, renowned for traditional dhow fishing harbors and peaceful coastal gulf shorelines.',
    historyAr: 'كانت محطة هامة لتجمع صيادي اللؤلؤ والأسماك عبر القرون، وتشتهر بعيون الماء التاريخية كعين رحى وعين كبكب وبساتين النخيل الساحلية.',
    historyEn: 'A key historic staging harbor for pearl divers and fishers throughout centuries, famous for natural springs and coastal date groves.',
    coordinates: [26.1520, 50.6200],
    landmarksCount: 3,
    museumsCount: 1,
    heritageCount: 4,
    source: {
      nameAr: 'هيئة البحرين للسياحة والمعارض',
      nameEn: 'Bahrain Tourism and Exhibitions Authority',
      url: 'https://btea.bh',
      verifiedOrganization: 'BTEA'
    },
    status: 'published'
  },
  {
    id: 'zallaq',
    nameAr: 'الزلاق',
    nameEn: 'Zallaq',
    governorateAr: 'المحافظة الجنوبية',
    governorateEn: 'Southern Governorate',
    image: zallaqSceneImg,
    descriptionAr: 'بلدة الساحل الغربي الهادئة المشهورة بشواطئها الذهبية المفتوحة وقربها من محمية العرين الطبيعية وصحراء الصخير وشجرة الحياة.',
    descriptionEn: 'Tranquil western coastal enclave celebrated for its pristine gulf waters, proximity to Al Areen Wildlife Reserve, and the legendary Tree of Life.',
    historyAr: 'كانت محطة هامة لسفن الغوص وصيادي الأسماك قديماً، وتشهد اليوم تطوراً سياحياً بيئياً راقياً مع الحفاظ على عذوبة بيئتها الطبيعية.',
    historyEn: 'An essential port of call for pearling fleets and fishermen in antiquity, now a premier eco-cultural gateway in the Kingdom.',
    coordinates: [26.0460, 50.4850],
    landmarksCount: 4,
    museumsCount: 1,
    heritageCount: 4,
    source: {
      nameAr: 'هيئة البحرين للسياحة والمعارض',
      nameEn: 'Bahrain Tourism and Exhibitions Authority',
      url: 'https://btea.bh',
      verifiedOrganization: 'BTEA'
    },
    status: 'published'
  }
];

export const LANDMARKS_DATA: Landmark[] = [
  {
    id: 'qalat-al-bahrain',
    nameAr: 'قلعة البحرين (موقع دلمون التراثي)',
    nameEn: 'Qal’at al-Bahrain (Bahrain Fort)',
    category: 'history',
    cityId: 'manama',
    cityNameAr: 'المنامة / كرباباد',
    cityNameEn: 'Manama / Karbabad',
    image: qalatImg,
    gallery: [qalatImg, heroSkyline],
    overviewAr: 'أحد أهم مواقع التراث العالمي لليونسكو في الخليج العربي. يمثل تلاً أثرياً تراكمت فيه طبقات الاستيطان البشري المستمر منذ عام 2300 قبل الميلاد وحتى القرن السادس عشر الميلادي.',
    overviewEn: 'A preeminent UNESCO World Heritage site comprising an artificial mound created by successive layers of human occupation from 2300 BCE to the 16th century CE.',
    storyAr: 'كان هذا الموقع عاصمة دلمون القديمة والميناء الرئيسي الذي استقبل سفن التجارة المحملة بالنحاس والأخشاب والأحجار الكريمة بين بلاد الرافدين ووادي السند.',
    storyEn: 'Ancient capital of the Dilmun empire, acting as the maritime trade nexus linking ancient Mesopotamia with the Indus Valley civilization.',
    historyAr: 'كشفت التنقيبات الأثرية للبعثات الدنماركية والفرنسية عن قلاع متعاقبة تعود للحقبة الدلمونية والتايلوسية والإسلامية، وتتوجها القلعة العسكرية البرتغالية المبنية في القرن السادس عشر.',
    historyEn: 'Excavated by Danish and French teams revealing layers from Bronze Age Dilmun, Hellenistic Tylos, and Islamic eras, crowned by the 16th-century fortress.',
    coordinates: [26.2339, 50.5204],
    nearbyPlaces: [
      { nameAr: 'متحف موقع قلعة البحرين', nameEn: 'Site Museum', distance: '150 م' },
      { nameAr: 'سواحل كرباباد', nameEn: 'Karbabad Coast', distance: '300 م' },
      { nameAr: 'مسجد وموقع باربار', nameEn: 'Barbar Site', distance: '4 كم' }
    ],
    source: {
      nameAr: 'مركز التراث العالمي لليونسكو',
      nameEn: 'UNESCO World Heritage Centre',
      url: 'https://whc.unesco.org/en/list/1192',
      verifiedOrganization: 'UNESCO'
    },
    isFeatured: true,
    status: 'published'
  },
  {
    id: 'pearling-path',
    nameAr: 'طريق اللؤلؤ في المحرق',
    nameEn: 'Bahrain Pearling Path',
    category: 'culture',
    cityId: 'muharraq',
    cityNameAr: 'المحرق',
    cityNameEn: 'Muharraq',
    image: pearlingImg,
    gallery: [pearlingImg, babImg],
    overviewAr: 'مسار تراثي بطول 3.5 كيلومترات مدرج على قائمة التراث العالمي لليونسكو، يروي القصة المتكاملة لاقتصاد الغوص على اللؤلؤ الذي شكل هوية وتاريخ البحرين والخليج العربي.',
    overviewEn: 'A 3.5-kilometer UNESCO World Heritage serial site depicting the complete narrative of the Arabian pearling economy that defined Bahrain for millennia.',
    storyAr: 'يضم المسار 16 موقعاً معمارياً تشمل بيوت تجار اللؤلؤ الكبار (الطواشين)، ومخازن العمارة، وبيوت الغواصين والنواخذة، بالإضافة إلى ساحل بوماهر وقلعته التاريخية.',
    storyEn: 'Includes 16 architectural complexes spanning merchant residences, historic storerooms, divers’ quarters, and the historic Bu Maher Fort shoreline.',
    historyAr: 'كانت لآلئ البحرين تُعد الأجود عالمياً بفضل العيون العذبة المنبثقة في قاع البحر (الهيرات)، واستمرت مهنة صيد اللؤلؤ عصب الاقتصاد حتى ثلاثينيات القرن العشرين.',
    historyEn: 'Bahraini pearls were renowned worldwide for their peerless luster, sustained until the 1930s when cultured pearls disrupted the international market.',
    coordinates: [26.2483, 50.6095],
    nearbyPlaces: [
      { nameAr: 'قلعة بوماهر', nameEn: 'Bu Maher Fort', distance: '800 م' },
      { nameAr: 'مركز الشيخ إبراهيم للثقافة', nameEn: 'Shaikh Ebrahim Centre', distance: '400 م' },
      { nameAr: 'سوق القيصرية التاريخي', nameEn: 'Souq Al Qaisariya', distance: '600 م' }
    ],
    source: {
      nameAr: 'هيئة البحرين للثقافة والآثار & اليونسكو',
      nameEn: 'BACA & UNESCO World Heritage',
      url: 'https://pearlingpath.bh',
      verifiedOrganization: 'BACA'
    },
    isFeatured: true,
    status: 'published'
  },
  {
    id: 'bab-al-bahrain',
    nameAr: 'باب البحرين وسوق المنامة',
    nameEn: 'Bab Al Bahrain & Manama Souq',
    category: 'history',
    cityId: 'manama',
    cityNameAr: 'المنامة',
    cityNameEn: 'Manama',
    image: babImg,
    gallery: [babImg, heroSkyline],
    overviewAr: 'البوابة المعمارية التاريخية التي شيدت عام 1949، وكانت في الأصل تطل مباشرة على مياه البحر قبل عمليات الردم والتوسع، وتعد المدخل الأيقوني لسوق المنامة القديم.',
    overviewEn: 'The iconic monumental gate built in 1949, originally standing on the water’s edge, welcoming travelers into the historic Manama Souq.',
    storyAr: 'صممه السير تشارلز بيلغريف ليكون مقراً للمكاتب الحكومية والجمارك، وتطور ليصبح الرمز الأبرز لترحيب البحرين بزوّارها من شتى أصقاع الأرض.',
    storyEn: 'Designed in 1949 to house government and customs offices, evolving into the central landmark welcoming visitors into the vibrant traditional bazaar.',
    historyAr: 'أعيد تجديد الواجهة المعمارية على يد وزارة الثقافة مع الحفاظ على روح العمارة العربية الإسلامية الأصيلة والأقواس البديعة.',
    historyEn: 'Meticulously refurbished by cultural authorities preserving authentic Arab-Islamic arched facades and its pedestrian promenade.',
    coordinates: [26.2346, 50.5756],
    nearbyPlaces: [
      { nameAr: 'سوق المنامة القديم', nameEn: 'Old Manama Souq', distance: '50 م' },
      { nameAr: 'كنيس البحرين التاريخي', nameEn: 'Historic Synagogue', distance: '450 م' },
      { nameAr: 'مرفأ البحرين المالي', nameEn: 'Bahrain Financial Harbour', distance: '900 م' }
    ],
    source: {
      nameAr: 'هيئة البحرين للثقافة والآثار',
      nameEn: 'Bahrain Authority for Culture and Antiquities',
      url: 'https://culture.gov.bh',
      verifiedOrganization: 'BACA'
    },
    isFeatured: true,
    status: 'published'
  },
  {
    id: 'dilmun-mounds',
    nameAr: 'تلال مدافن دلمون (اليونسكو)',
    nameEn: 'Dilmun Burial Mounds',
    category: 'archaeological',
    cityId: 'aali',
    cityNameAr: 'عالي / سار',
    cityNameEn: 'Aali / Saar',
    image: qalatImg,
    gallery: [qalatImg],
    overviewAr: 'مجموعة أثرية تضم 21 موقعاً تغطي آلاف التلال المدفنية الاستثنائية التي شيدت بين عامي 2050 و1750 قبل الميلاد خلال ازدهار حضارة دلمون المبكرة.',
    overviewEn: 'A serial UNESCO property spanning thousands of unique Bronze Age burial mounds constructed between 2050 and 1750 BCE during Early Dilmun civilization.',
    storyAr: 'تشهد هذه المدافن على ظهور طبقات مجتمعية ملكية متقدمة في دلمون، وتعتبر أكبر مقبرة أثرية مكشوفة من العصر البرونزي في العالم القديم بأسره.',
    storyEn: 'Demonstrates the rise of complex royal and social hierarchies in Dilmun, forming the largest prehistoric burial field known in human history.',
    historyAr: 'أُدرجت رسمياً على لائحة التراث العالمي في عام 2019 كدليل استثنائي على معتقدات الموت والخلود وتجارة العصر البرونزي.',
    historyEn: 'Inscribed on the UNESCO World Heritage list in 2019 as unmatched testimony to Bronze Age funerary customs and international trade.',
    coordinates: [26.1517, 50.5258],
    nearbyPlaces: [
      { nameAr: 'ورش فخار عالي التاريخية', nameEn: 'Aali Pottery Kilns', distance: '600 م' },
      { nameAr: 'مستوطنة سار الأثرية', nameEn: 'Saar Settlement', distance: '5 كم' }
    ],
    source: {
      nameAr: 'مركز التراث العالمي لليونسكو',
      nameEn: 'UNESCO World Heritage Centre',
      url: 'https://whc.unesco.org/en/list/1542',
      verifiedOrganization: 'UNESCO'
    },
    isFeatured: true,
    status: 'published'
  },
  {
    id: 'tree-of-life',
    nameAr: 'شجرة الحياة (الشجرة المعجزة)',
    nameEn: 'The Tree of Life (Shajarat al-Hayah)',
    category: 'nature',
    cityId: 'zallaq',
    cityNameAr: 'الصخير / الزلاق',
    cityNameEn: 'Sakhir / Zallaq',
    image: heroSkyline,
    gallery: [heroSkyline],
    overviewAr: 'شجرة غاف قديمة (Prosopis cineraria) وحيدة وارفة الظلال تقف شامخة في قلب صحراء الصخير منذ ما يزيد على 400 عام دون مصدر مياه سطحي ظاهر.',
    overviewEn: 'A solitary 400-year-old Prosopis cineraria tree thriving in the arid heart of the Sakhir desert without any visible surface water source.',
    storyAr: 'نسجت حولها أساطير شعبية عن جنات عدن الدلمونية ومياه الخلود العميقة، وأظهرت الدراسات النباتية قدرة جذورها المدهشة على النفاذ لعمق 50 متراً تحت سطح الأرض.',
    storyEn: 'Encircled by folklore linking it to the Garden of Eden and eternal spring waters; botanical studies reveal its root systems reaching 50 meters into aquifer sands.',
    historyAr: 'تستقبل الشجرة آلاف الزوار سنوياً وقد جهزت هيئة الثقافة مركز زوار محيط بها يحمي محيطها الطبيعي من الآليات ويشرح طبيعتها الجيولوجية.',
    historyEn: 'Attracting thousands of global visitors annually, safeguarded by a bespoke visitor center engineered by BACA to preserve its ecosystem.',
    coordinates: [25.9942, 50.5831],
    nearbyPlaces: [
      { nameAr: 'جبل الدخان (أعلى قمة في البحرين)', nameEn: 'Jabal ad Dukhan', distance: '3 كم' },
      { nameAr: 'حلبة البحرين الدولية للفورمولا 1', nameEn: 'Bahrain International Circuit', distance: '12 كم' }
    ],
    source: {
      nameAr: 'هيئة البحرين للثقافة والآثار',
      nameEn: 'Bahrain Authority for Culture and Antiquities',
      url: 'https://culture.gov.bh',
      verifiedOrganization: 'BACA'
    },
    status: 'published'
  },
  {
    id: 'al-fateh-mosque',
    nameAr: 'جامع أحمد الفاتح الكبير',
    nameEn: 'Al Fateh Grand Mosque',
    category: 'religious',
    cityId: 'manama',
    cityNameAr: 'الجفير / المنامة',
    cityNameEn: 'Juffair / Manama',
    image: museumImg,
    gallery: [museumImg],
    overviewAr: 'أحد أكبر المساجد في العالم وأبرز المعالم الإسلامية في المملكة، يتسع لأكثر من 7,000 مصلٍ وتتوسطه قبة ضخمة مصنوعة بالكامل من الألياف الزجاجية النقية.',
    overviewEn: 'One of the largest mosques in the world and an architectural masterpiece accommodating over 7,000 worshippers under a massive fiberglass dome.',
    storyAr: 'بني بتكليف من المغفور له بإذن الله الشيخ عيسى بن سلمان آل خليفة في عام 1987 وسمي تيمناً بالقائد أحمد الفاتح محرر البحرين.',
    storyEn: 'Commissioned in 1987 by the late Amir Sheikh Isa bin Salman Al Khalifa and named in honor of Ahmed Al Fateh, liberator of Bahrain.',
    historyAr: 'يضم مركز عيسى الثقافي والمكتبة الوطنية ومكتبة إسلامية تحتوي على مخطوطات ومجلدات نادرة تعود لعدة قرون خلت.',
    historyEn: 'Houses a rich Islamic library and the Isa Cultural Centre featuring manuscripts dating back several centuries.',
    coordinates: [26.2189, 50.5982],
    nearbyPlaces: [
      { nameAr: 'مركز عيسى الثقافي', nameEn: 'Isa Cultural Centre', distance: '50 م' },
      { nameAr: 'المتحف الوطني', nameEn: 'National Museum', distance: '2.5 كم' }
    ],
    source: {
      nameAr: 'وزارة العدل والشؤون الإسلامية والأوقاف',
      nameEn: 'Ministry of Justice and Islamic Affairs',
      url: 'https://islam.gov.bh',
      verifiedOrganization: 'Ministry'
    },
    status: 'published'
  },
  {
    id: 'khamis-mosque',
    nameAr: 'مسجد الخميس التاريخي',
    nameEn: 'Khamis Mosque (Al Khamis)',
    category: 'religious',
    cityId: 'manama',
    cityNameAr: 'الخميس / طاشان',
    cityNameEn: 'Khamis / Tashan',
    image: qalatImg,
    gallery: [qalatImg],
    overviewAr: 'أقدم مبنى إسلامي باقٍ في البحرين والمنطقة الشرقية للجزيرة العربية، وتتميز عمارته بمنارتيه التوأمتين التين بنيتا في القرن الخامس عشر الميلادي.',
    overviewEn: 'The oldest surviving Islamic monument in Bahrain and Eastern Arabia, universally recognized for its iconic twin minarets erected in the 15th century.',
    storyAr: 'تأسس المسجد في عهد الخليفة الأموي عمر بن عبد العزيز، وظل عبر التاريخ مركزاً دينياً وتعليمياً ومقصداً لأسواق الخميس الشعبية الشهيرة.',
    storyEn: 'Founded during the era of Umayyad Caliph Umar bin Abd al-Aziz, serving as a primary spiritual academy and the hub of the ancient Thursday market.',
    historyAr: 'يحتوي على محراب صخري نقشت عليه آيات قرآنية بالخط الكوفي العريق وعمود رخامي تاريخي نادر.',
    historyEn: 'Houses a limestone mihrab carved with archaic Kufic calligraphy and commemorative foundation columns of historical significance.',
    coordinates: [26.2081, 50.5487],
    nearbyPlaces: [
      { nameAr: 'مركز زوار مسجد الخميس', nameEn: 'Visitor Centre', distance: '50 م' },
      { nameAr: 'مستوطنة بلاد القديم', nameEn: 'Bilad Al Qadeem', distance: '1 كم' }
    ],
    source: {
      nameAr: 'هيئة البحرين للثقافة والآثار',
      nameEn: 'Bahrain Authority for Culture and Antiquities',
      url: 'https://culture.gov.bh',
      verifiedOrganization: 'BACA'
    },
    status: 'published'
  },
  {
    id: 'bahrain-national-theatre',
    nameAr: 'مسرح البحرين الوطني',
    nameEn: 'Bahrain National Theatre',
    category: 'culture',
    cityId: 'manama',
    cityNameAr: 'المنامة',
    cityNameEn: 'Manama',
    image: museumImg,
    gallery: [museumImg],
    overviewAr: 'تحفة معمارية معاصرة مستوحاة من حكايات ألف ليلة وليلة، يطل مباشرة على بحيرة مائية بجوار المتحف الوطني ويتسع لنحو 1,001 مقعد.',
    overviewEn: 'A modern architectural jewel inspired by the Thousand and One Nights, seated along a tranquil lagoon next to the National Museum with 1,001 seats.',
    storyAr: 'افتتح عام 2012 كأحد أضخم المشاريع الثقافية في العالم العربي، ونفذ سقفه الخشبي الداخلي بحرفية عالية تشبه جوف السفن الخشبية التراثية.',
    storyEn: 'Inaugurated in 2012 as one of the Arab world’s grand cultural venues, featuring acoustic wooden ceiling ribs reminiscent of traditional dhow boat hulls.',
    historyAr: 'استضاف عروضاً موسيقية ومسرحية وفيلهارمونية عالمية، ويعد منارة للفنون الأدائية في المنطقة.',
    historyEn: 'Host to world-class operatic, philharmonic, and theatrical productions, elevating performing arts in the Gulf.',
    coordinates: [26.2415, 50.5975],
    nearbyPlaces: [
      { nameAr: 'متحف البحرين الوطني', nameEn: 'Bahrain National Museum', distance: '100 م' },
      { nameAr: 'متحف الفن الحديث', nameEn: 'Modern Art Museum', distance: '300 م' }
    ],
    source: {
      nameAr: 'هيئة البحرين للثقافة والآثار',
      nameEn: 'Bahrain Authority for Culture and Antiquities',
      url: 'https://culture.gov.bh',
      verifiedOrganization: 'BACA'
    },
    status: 'published'
  }
];

export const MUSEUMS_DATA: Museum[] = [
  {
    id: 'bahrain-national-museum',
    nameAr: 'متحف البحرين الوطني',
    nameEn: 'Bahrain National Museum',
    cityId: 'manama',
    cityNameAr: 'المنامة',
    cityNameEn: 'Manama',
    image: museumImg,
    gallery: [museumImg, heroSkyline],
    descriptionAr: 'المتحف الوطني الأم وأول وأكبر متحف عام في الخليج العربي (افتتح عام 1988). يحتضن قاعات دلمون وتايلوس والعادات والتقاليد والمخطوطات والحرف التراثية في صرح حجري أبيض بديع.',
    descriptionEn: 'The flagship national museum and first of its kind in the Arabian Gulf (opened 1988), exhibiting Dilmun, Tylos, Islamic halls, manuscripts, and living customs.',
    hoursAr: 'يومياً: 09:00 صباحاً – 08:00 مساءً (يغلق أيام الثلاثاء للصيانة الدورية)',
    hoursEn: 'Daily: 09:00 AM – 08:00 PM (Closed on Tuesdays for maintenance)',
    officialUrl: 'https://culture.gov.bh/en/authority/cultural_sites/BahrainNationalMuseum/',
    source: {
      nameAr: 'هيئة البحرين للثقافة والآثار (الموقع الرسمي)',
      nameEn: 'Bahrain Authority for Culture and Antiquities',
      url: 'https://culture.gov.bh',
      verifiedOrganization: 'BACA Official'
    },
    coordinates: [26.2408, 50.5979],
    admissionAr: '1 دينار بحريني للمواطنين والمقيمين / 2 دينار للزوار الدوليين',
    admissionEn: '1 BHD for residents / 2 BHD for international visitors',
    status: 'published'
  },
  {
    id: 'qalat-site-museum',
    nameAr: 'متحف موقع قلعة البحرين',
    nameEn: 'Qal’at al-Bahrain Site Museum',
    cityId: 'manama',
    cityNameAr: 'كرباباد',
    cityNameEn: 'Karbabad',
    image: qalatImg,
    gallery: [qalatImg],
    descriptionAr: 'يقع بمحاذاة السور الشمالي لقلعة البحرين، ويعرض تسلسلاً استثنائياً للقطع الأثرية المكتشفة في الموقع وجداراً أثرياً يحاكي الطبقات الجيولوجية والتاريخية.',
    descriptionEn: 'Bordering the north wall of Bahrain Fort, displaying chronological artifacts uncovered from excavation trenches and an architectural stratigraphy wall.',
    hoursAr: 'يومياً: 08:00 صباحاً – 08:00 مساءً (يغلق يوم الاثنين)',
    hoursEn: 'Daily: 08:00 AM – 08:00 PM (Closed on Mondays)',
    officialUrl: 'https://culture.gov.bh',
    source: {
      nameAr: 'هيئة البحرين للثقافة والآثار',
      nameEn: 'Bahrain Authority for Culture and Antiquities',
      url: 'https://culture.gov.bh',
      verifiedOrganization: 'BACA'
    },
    coordinates: [26.2335, 50.5218],
    admissionAr: 'مجاني للجميع',
    admissionEn: 'Free admission for all',
    status: 'published'
  },
  {
    id: 'beit-al-quran',
    nameAr: 'بيت القرآن',
    nameEn: 'Beit Al Quran',
    cityId: 'manama',
    cityNameAr: 'المنامة',
    cityNameEn: 'Manama',
    image: babImg,
    gallery: [babImg],
    descriptionAr: 'مؤسسة إسلامية ومتحف تخصصي فريد يعرض مجموعات نادرة ونفيسة من المصاحف الشريفة والمخطوطات القرآنية المكتوبة على الرق والعظام والحرير من القرن الأول الهجري.',
    descriptionEn: 'A celebrated Islamic institute and specialized museum preserving rare Quranic manuscripts, illuminated codices, and parchments from the 1st Hijri century.',
    hoursAr: 'السبت إلى الأربعاء: 09:00 صباحاً – 12:00 ظهراً / 04:00 عصراً – 06:00 مساءً',
    hoursEn: 'Saturday to Wednesday: 09:00 AM – 12:00 PM / 04:00 PM – 06:00 PM',
    officialUrl: 'https://culture.gov.bh',
    source: {
      nameAr: 'مجلس أمناء بيت القرآن',
      nameEn: 'Beit Al Quran Board of Trustees',
      url: 'https://culture.gov.bh',
      verifiedOrganization: 'Beit Al Quran'
    },
    coordinates: [26.2389, 50.5898],
    admissionAr: 'دخول مجاني (تقبل التبرعات لدعم صيانة المخطوطات)',
    admissionEn: 'Free admission (donations welcomed)',
    status: 'published'
  },
  {
    id: 'postal-museum',
    nameAr: 'متحف البريد البحريني',
    nameEn: 'Bahrain Postal Museum',
    cityId: 'manama',
    cityNameAr: 'المنامة (باب البحرين)',
    cityNameEn: 'Manama (Bab Al Bahrain)',
    image: babImg,
    gallery: [babImg],
    descriptionAr: 'يقع في مبنى باب البحرين التاريخي، ويوثق التاريخ البريدي للبحرين منذ إصدار أول طابع بريدي عام 1884 مروراً بالمراسلات الجوية والبحرية.',
    descriptionEn: 'Housed within the historic Bab Al Bahrain building, documenting Bahrain’s postal history since the first stamp issuance in 1884.',
    hoursAr: 'الأحد إلى الخميس: 08:00 صباحاً – 02:00 ظهراً',
    hoursEn: 'Sunday to Thursday: 08:00 AM – 02:00 PM',
    officialUrl: 'https://mtt.gov.bh',
    source: {
      nameAr: 'وزارة المواصلات والاتصالات',
      nameEn: 'Ministry of Transportation and Telecommunications',
      url: 'https://mtt.gov.bh',
      verifiedOrganization: 'MTT'
    },
    coordinates: [26.2344, 50.5758],
    admissionAr: 'مجاني',
    admissionEn: 'Free admission',
    status: 'published'
  }
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    id: 'dilmun-era',
    eraAr: 'حضارة دلمون العريقة',
    eraEn: 'Dilmun Civilization',
    dateLabelAr: 'حوالي 2500 – 500 قبل الميلاد',
    dateLabelEn: 'c. 2500 – 500 BCE',
    yearSort: -2500,
    titleAr: 'أرض الفردوس والخلود ومركز التجارة البحرية',
    titleEn: 'Land of Immortality & Maritime Trade Hub',
    descriptionAr: 'ذُكرت دلمون في ملحمة جلجامش السومرية كأرض طاهرة مقدسة تشرق منها الشمس وتتفجر فيها عيون الماء العذب. كانت الميناء التجاري الوسيط الذي ربط حضارات بلاد الرافدين وحضارة وادي السند محملة بالنحاس واللؤلؤ والأحجار الكريمة.',
    descriptionEn: 'Celebrated in the Epic of Gilgamesh as a sacred paradise where the sun rises and freshwater springs flow. Dilmun served as the supreme trading nexus linking Mesopotamia with the Indus Valley.',
    image: qalatImg,
    source: {
      nameAr: 'متحف البحرين الوطني & اليونسكو',
      nameEn: 'Bahrain National Museum & UNESCO',
      url: 'https://culture.gov.bh',
      verifiedOrganization: 'UNESCO'
    },
    significanceAr: 'نشوء أول نظام تجاري ومدفني ملكي منظم في الخليج العربي.'
  },
  {
    id: 'tylos-era',
    eraAr: 'عصر تايلوس الهيلينستي',
    eraEn: 'Tylos Era',
    dateLabelAr: 'حوالي 330 قبل الميلاد – 250 ميلادي',
    dateLabelEn: 'c. 330 BCE – 250 CE',
    yearSort: -330,
    titleAr: 'تايلوس: مركز اللؤلؤ في العصر الهيلينستي',
    titleEn: 'Tylos: Capital of Natural Pearls',
    descriptionAr: 'أطلق القبطان نيارخوس، قائد أسطول الإسكندر الأكبر، اسم "تايلوس" على جزيرة البحرين أثناء استكشافه مياه الخليج. شهدت هذه الحقبة امتزاج الثقافة العربية المحلية بالفنون الإغريقية وازدهار تجارة اللؤلؤ الطبيعي والأقمشة القطنية.',
    descriptionEn: 'Named Tylos by Admiral Nearchus under Alexander the Great. Local Arabian customs blended with Hellenistic aesthetics as international pearl commerce flourished across the Mediterranean.',
    image: heroSkyline,
    source: {
      nameAr: 'هيئة البحرين للثقافة والآثار',
      nameEn: 'Bahrain Authority for Culture and Antiquities',
      url: 'https://culture.gov.bh',
      verifiedOrganization: 'BACA'
    },
    significanceAr: 'دخول اسم البحرين وسمعتها في تجارة اللؤلؤ إلى مصادر التاريخ الروماني والإغريقي.'
  },
  {
    id: 'islamic-era',
    eraAr: 'دخول الإسلام وعهد العباسيين',
    eraEn: 'The Islamic Arrival & Caliphate',
    dateLabelAr: '628 ميلادية (السنة 7 للهجرة)',
    dateLabelEn: '628 CE (7 AH)',
    yearSort: 628,
    titleAr: 'إسلام أهل البحرين طواعية وبناء مسجد الخميس',
    titleEn: 'Peaceful Embrace of Islam & Foundation of Khamis Mosque',
    descriptionAr: 'أرسل الرسول محمد ﷺ الصحابي العلاء بن الحضرمي بكتاب دعوة إلى حاكم البحرين المنذر بن ساوى التميمي، فأسلم وأهل البحرين طوعاً دون قتال. شُيد بعدها مسجد الخميس ليكون منارة دينية وفقهية للمنطقة الشرقية للجزيرة.',
    descriptionEn: 'Prophet Muhammad ﷺ dispatched Al-Ala’a Al-Hadrami with a letter to Munzir ibn Sawa, ruler of Bahrain, who voluntarily embraced Islam along with the people. Khamis Mosque arose as a beacon of scholarship.',
    image: qalatImg,
    source: {
      nameAr: 'تاريخ الطبري & هيئة الثقافة',
      nameEn: 'Tarikh al-Tabari & BACA',
      url: 'https://culture.gov.bh',
      verifiedOrganization: 'BACA'
    },
    significanceAr: 'ترسيخ الهوية الإسلامية العربية المستمرة في البحرين.'
  },
  {
    id: 'al-khalifa-era',
    eraAr: 'عهد آل خليفة الكرام وتأسيس الدولة الحديثة',
    eraEn: 'The Al Khalifa Dynasty & Modern State',
    dateLabelAr: '1783 ميلادية',
    dateLabelEn: '1783 CE',
    yearSort: 1783,
    titleAr: 'قيام الدولة الحديثة بقيادة أحمد الفاتح',
    titleEn: 'Establishment of the Modern State by Ahmed Al Fateh',
    descriptionAr: 'قاد الشيخ أحمد بن محمد آل خليفة (أحمد الفاتح) حركة وطنية أعادت الاستقرار والاستقلال للبحرين عام 1783، مؤذناً ببدء عصر جديد جعل البحرين مركزاً بحرياً وتجارياً واقتصادياً رائداً في المنطقة.',
    descriptionEn: 'Sheikh Ahmed bin Mohammed Al Khalifa (Ahmed Al Fateh) unified Bahrain in 1783, establishing a sovereign state that transformed the archipelago into a prosperous maritime commercial hub.',
    image: babImg,
    source: {
      nameAr: 'مركز عيسى الثقافي للوثائق التاريخية',
      nameEn: 'Isa Cultural Centre Historical Archives',
      url: 'https://icc.gov.bh',
      verifiedOrganization: 'Isa Cultural Centre'
    },
    significanceAr: 'تأسيس الحكم الرشيد والسيادة الوطنية لمملكة البحرين.'
  },
  {
    id: 'modern-kingdom',
    eraAr: 'ميثاق العمل الوطني والمملكة الدستورية',
    eraEn: 'National Action Charter & The Constitutional Kingdom',
    dateLabelAr: '2001 – 2002 ميلادية',
    dateLabelEn: '2001 – 2002 CE',
    yearSort: 2001,
    titleAr: 'مشروع جلالة الملك الإصلاحي وإعلان المملكة',
    titleEn: 'HM The King’s Reform Project & Kingdom Declaration',
    descriptionAr: 'صوّت شعب البحرين بإجماع تاريخي بنسبة 98.4% على ميثاق العمل الوطني الذي أطلقه حضرة صاحب الجلالة الملك حمد بن عيسى آل خليفة ملك البلاد المعظم، لتبدأ مرحلة دستورية ديمقراطية ومؤسسية رائدة وازدهار تنموي شامل.',
    descriptionEn: 'Bahrainis overwhelmingly voted (98.4%) in favor of the National Action Charter initiated by HM King Hamad bin Isa Al Khalifa, heralding modern constitutional democracy and sustainable human progress.',
    image: heroSkyline,
    source: {
      nameAr: 'ميثاق العمل الوطني - الجريدة الرسمية',
      nameEn: 'National Action Charter Official Gazette',
      url: 'https://mia.gov.bh',
      verifiedOrganization: 'Official Gazette'
    },
    significanceAr: 'تحول البحرين إلى مملكة دستورية رائدة بنهضة شاملة.'
  }
];

export const HERITAGE_DATA: HeritageTopic[] = [
  {
    id: 'pearling',
    category: 'pearling',
    titleAr: 'صيد واستخراج اللؤلؤ الطبيعي (الغوص)',
    titleEn: 'Natural Pearl Diving & Marine Heritage',
    summaryAr: 'شكل اللؤلؤ العمود الفقري لهوية واقتصاد البحرين لقرون طويلة، مستنداً إلى أسطول بحري ضخم وتقاليد بحرية راسخة ومصائد طبيعية فريدة (الهيرات).',
    summaryEn: 'Pearl diving served as Bahrain’s economic and cultural lifeblood, powered by massive fleets, seasoned mariners, and pristine seabed oyster beds (Hayrat).',
    fullContentAr: 'كان موسم "الغوص الكبير" يبدأ من شهر يونيو حتى أواخر سبتمبر. ينطلق الغواصون في سفن البانوش والسنبوك تحت قيادة "النوخذة"، حيث ينزل "الغواص" إلى قاع البحر بحبل ووزن حجري (الحصاة) ومشبك للأنف (الفطام) لجمع المحار في سلة (الديين)، بينما يسحبه "السيب" بحذر إلى السطح. وفي المساء، كان يتردد صدى نغمات "الفجري" التي تروي أشواق البحارة وصبرهم.',
    fullContentEn: 'During the Great Diving season, flotillas set sail under master captains (Nawakhidha). Divers descended holding stone weights and clip-nostril fitams, gathering oysters into woven dayeen baskets while hauled back by seabond pullers (Seeb). Nightly communal Nahma and Fjiri seafaring chants lifted spirits across open waters.',
    image: pearlingImg,
    elements: [
      { titleAr: 'النوخذة', titleEn: 'Al Nokhetha', descAr: 'ربان السفينة وقائد رحلة الغوص وصاحب القرار في الملاحة.', descEn: 'The ship master and commander of the maritime expedition.' },
      { titleAr: 'الغواص والسيب', titleEn: 'Al Ghawas & Al Seeb', descAr: 'ثنائي الثقة: الغواص ينزل للأعماق والسيب يؤمّن حياته بسحب الحبل.', descEn: 'The symbiotic pair: diver plunges deep while rope-puller protects his lifeline.' },
      { titleAr: 'الطواش', titleEn: 'Al Tawwash', descAr: 'تاجر اللؤلؤ الذي يتنقل بين السفن لفرز اللآلئ وتثمينها بالمثقال والغربال.', descEn: 'The merchant who boarded dhows to grade and purchase pearls with brass sieves.' },
      { titleAr: 'أغاني الفجري', titleEn: 'Fjiri Chants', descAr: 'التراث الغنائي البحري المصنف عالمياً، يصف كفاح الغواصين وأشواقهم.', descEn: 'Intangible heritage musical anthems chronicling resilience and longing.' }
    ],
    source: {
      nameAr: 'مركز التراث العالمي لليونسكو - طريق اللؤلؤ',
      nameEn: 'UNESCO World Heritage - Pearling Path',
      url: 'https://pearlingpath.bh',
      verifiedOrganization: 'UNESCO'
    },
    status: 'published'
  },
  {
    id: 'crafts',
    category: 'crafts',
    titleAr: 'الحرف والصناعات التقليدية',
    titleEn: 'Traditional Crafts & Artisanship',
    summaryAr: 'توارث أهل البحرين مهارات يدوية دقيقة عبر آلاف السنين، أبرزها صناعة الفخار في عالي، والنسيج في بني جمرة، وصناعة السلال من سعف النخيل (الخوص).',
    summaryEn: 'Bahrainis inherited master artisan traditions passed down through millennia: pottery in Aali, weaving in Bani Jamrah, and date palm frond weaving (Khoos).',
    fullContentAr: 'تتميز قرية عالي بأقدم ورش فخار مستمرة في الشرق الأوسط، حيث يُستخرج الطين من ترسبات المياه العذبة ويُعجن بالأقدام ثم يُشكل على الدوار ويُحرق في أفران مبنية داخل تلال دلمون. وفي بني جمرة، استمر النساجون في إنتاج البشوت والأردية المذهبة باستخدام أنوال خشبية مدمجة في الأرض. كما يشكل سعف النخيل أساس صناعة السلال والحصر والسفر بألوان ونقوش زاهية.',
    fullContentEn: 'Aali village sustains the Middle East’s most storied potteries, firing clay within traditional kilns built right into ancient mound topography. In Bani Jamrah, master weavers create golden trimmed royal bishts on sunken pit looms. Date palm fronds yield vibrant hand-woven rugs, food covers, and decorative basketry.',
    image: qalatImg,
    elements: [
      { titleAr: 'فخار عالي', titleEn: 'Aali Pottery', descAr: 'جرار ومباخر ومزهريات تُصنع على عجلات خشبية تقليدية.', descEn: 'Vessels and censers shaped on traditional foot-pedal wheels.' },
      { titleAr: 'نسيج بني جمرة', titleEn: 'Bani Jamrah Weaving', descAr: 'حياكة يدوية للبشوت الرجالية والأقمشة القطنية الراقية.', descEn: 'Pit-loom weaving of ceremonial golden embroidered bishts.' },
      { titleAr: 'سف الخوص', titleEn: 'Palm Frond Weaving', descAr: 'تجديل سعف النخيل لصنع السلال (الزبيل) والمهاف اليدوية.', descEn: 'Braiding dried palm fronds into durable household mats and fans.' },
      { titleAr: 'صناعة القلافة', titleEn: 'Dhow Boat Building', descAr: 'بناء السفن الخشبية (البوانيش) دون مخططات مسبقة وبدقة مذهلة.', descEn: 'Handcrafting sea dhows from teakwood with intuitive precision.' }
    ],
    source: {
      nameAr: 'مركز الجسرة للحرف اليدوية (هيئة الثقافة)',
      nameEn: 'Al Jasra Handicrafts Centre (BACA)',
      url: 'https://culture.gov.bh',
      verifiedOrganization: 'BACA'
    },
    status: 'published'
  },
  {
    id: 'architecture',
    category: 'architecture',
    titleAr: 'العمارة التقليدية وملاقف الهواء (البادغير)',
    titleEn: 'Vernacular Architecture & Wind Towers',
    summaryAr: 'ابتكر المعمار البحريني حلولاً هندسية بيئية ذكية لمواجهة المناخ الحار عبر استخدام حجر الفروش البحري والملاقف الهوائية (البادغير) والنقوش الجصية.',
    summaryEn: 'Bahraini master builders engineered ingenious ecological designs for the maritime climate using coral sea-stone, natural wind towers (Badgir), and gypsum reliefs.',
    fullContentAr: 'تتميز البيوت التاريخية في المحرق والمنامة والرفاع بأفنية داخلية مظللة توفر الخصوصية والتهوية الطبيعية. يُبنى الجدار بحجر الفروش المستخرج من البحر مع الجص الطبيعي الذي يسمح للمبنى بالتنفس. وتعتبر أبراج الرياح (البادغير) أعظم ابتكار تكييف هوائي طبيعي، حيث تلتقط نسمات الهواء العلوية وتوجهها مباشرة إلى الغرف السفلية بعد تبريدها.',
    fullContentEn: 'Historic homes throughout Muharraq, Manama, and Riffa center around shaded internal courtyards ensuring seclusion and airflow. Porous coral stone walls mortared with lime plaster breathe naturally, while iconic Badgir wind catchers siphon cool high-altitude coastal currents down into living quarters.',
    image: pearlingImg,
    elements: [
      { titleAr: 'برج الرياح (البادغير)', titleEn: 'Badgir Wind Tower', descAr: 'أبراج تعلو المنازل تلتقط الرياح وتبرد الغرف طبيعياً.', descEn: 'Towering open shafts harnessing breezes for natural indoor cooling.' },
      { titleAr: 'حجر الفروش البحري', titleEn: 'Coral Faroush Stone', descAr: 'صخور بحرية مرجانية مسامية عازلة للحرارة والرطوبة.', descEn: 'Porous marine limestone offering natural thermal insulation.' },
      { titleAr: 'الزخارف الجصية', titleEn: 'Carved Gypsum', descAr: 'نقوش هندسية ونباتية دقيقة تزين الأقواس والشبابيك.', descEn: 'Hand-carved arabesque plaster friezes gracing lintels and archways.' },
      { titleAr: 'الأبواب الخشبية المنحوتة', titleEn: 'Carved Teak Doors', descAr: 'أبواب متينة من خشب الساج الهندي تعكس كرم وضيافة الدار.', descEn: 'Heavy teakwood portals carved with rosettes and maritime motifs.' }
    ],
    source: {
      nameAr: 'هيئة البحرين للثقافة والآثار',
      nameEn: 'Bahrain Authority for Culture and Antiquities',
      url: 'https://culture.gov.bh',
      verifiedOrganization: 'BACA'
    },
    status: 'published'
  },
  {
    id: 'cuisine',
    category: 'cuisine',
    titleAr: 'المطبخ والضيافة والمجالس البحرينية',
    titleEn: 'Culinary Traditions & Majlis Hospitality',
    summaryAr: 'يجسد المطبخ البحريني والمجالس الشعبية كرم الوفادة وأصالة التقاليد عبر أطباق بحرية عريقة والقهوة العربية والحلوى البحرينية الشهيرة عالمياً.',
    summaryEn: 'Bahraini gastronomy and community majalis embody warm Arabian hospitality, showcasing fresh Gulf seafood, cardamom coffee, and iconic Bahraini Halwa.',
    fullContentAr: 'تعتبر المجالس البحرينية برلماناً اجتماعياً مفتوحاً يلتقي فيه الأهل والأصدقاء والضيوف لمناقشة شؤون الحياة وتبادل الأخبار. تبدأ الضيافة بصب القهوة العربية المتبلة بالهيل والزعفران، يليها تقديم "الحلوى البحرينية" الساخنة المكسوة بالمكسرات والمعدة في قدور نحاسية تقليدية. وعلى مائدة الطعام، يتصدر "المجبوس" و"الصالونة" وسمك "الهامور" و"الكنعد" المشوي قائمة الأطباق التراثية الأصيلة.',
    fullContentEn: 'The Bahraini Majlis functions as an open civic forum where generations congregate in amity. Hospitality commences with fragrant Arabic coffee perfumed with cardamom and saffron, accompanied by warm artisanal Bahraini Halwa cooked in copper kettles. Communal feasts feature fragrant Machboos, spicy Saloona stews, and prime Gulf Hamour fish.',
    image: babImg,
    elements: [
      { titleAr: 'الحلوى البحرينية', titleEn: 'Bahraini Halwa', descAr: 'حلوى تراثية مطبوخة بالسمن والزعفران وماء الورد والمكسرات.', descEn: 'Legendary sweet cooked with rosewater, saffron, and roasted nuts.' },
      { titleAr: 'القهوة العربية المهيلة', titleEn: 'Arabic Coffee (Gahwa)', descAr: 'رمز الكرم وحسن الاستقبال في الدلة النحاسية التقليدية.', descEn: 'The universal symbol of generosity poured from graceful dallah pots.' },
      { titleAr: 'المجبوس البحريني', titleEn: 'Bahraini Machboos', descAr: 'أرز بسمتي متبل باللومي والبهارات البحرينية مع اللحم أو السمك.', descEn: 'Fragrant spiced rice dish infused with black dried lime (loomi).' },
      { titleAr: 'المجالس الشعبية', titleEn: 'Community Majlis', descAr: 'فضاء اجتماعي وثقافي يعزز الترابط الإنساني وأصالة العادات.', descEn: 'The traditional living gathering hall anchoring societal solidarity.' }
    ],
    source: {
      nameAr: 'هيئة البحرين للسياحة والمعارض',
      nameEn: 'Bahrain Tourism and Exhibitions Authority',
      url: 'https://btea.bh',
      verifiedOrganization: 'BTEA'
    },
    status: 'published'
  }
];

export const DAILY_DISCOVERY_DATA: DailyDiscovery = {
  id: 'daily-dilmun-pearls',
  date: '2026-09-25',
  titleAr: 'لؤلؤ البحرين: هبة ينابيع الماء العذب في قلب الخليج المالح',
  titleEn: 'Bahrain’s Pearls: Gift of Freshwater Springs in a Salty Sea',
  factAr: 'تتميز لآلئ البحرين ببريق وصفاء فريد لا مثيل له في العالم، ويعود السر العلمي إلى تفجر ينابيع مياه جوفية عذبة في قاع البحر المالح، مما يمنح المحار بيئة بيولوجية استثنائية!',
  factEn: 'Bahraini natural pearls possess an unmatched luster worldwide because sub-marine freshwater springs bubble directly up through seabed oyster colonies!',
  fullStoryAr: 'على عكس معظم بحار العالم، تحتوي مياه البحرين الإقليمية على ظاهرة طبيعية نادرة تُعرف بـ "الفشوت" و"الهيرات"، حيث تنفجر ينابيع مياه عذبة باردة من جوف الأرض مباشرة في أعماق قاع الخليج العربي المالح. هذا التمازج النادر بين الماء العذب والملح يُكسب محار اللؤلؤ تغذية فريدة تجعله يفرز طبقات ناصعة البياض وعالية الانعكاس للضوء، وهو ما جعل ملوك وأباطرة العالم عبر آلاف السنين - من فراعنة مصر وأباطرة روما إلى مهراجات الهند وملوك بريطانيا - يتنافسون على اقتناء عقد من لآلئ البحرين الطبيعية.',
  fullStoryEn: 'Unlike ordinary ocean waters, Bahrain’s marine beds feature an astonishing geological phenomenon: sub-sea freshwater artesian springs erupting directly into the saline Arabian Gulf. This exquisite hydrological equilibrium provides pristine biological conditions for Pinctada radiata oysters, resulting in pearls with an unmatched iridescent nacre. From Roman emperors to Indian maharajas and European royalty, Bahraini natural pearls were coveted as the highest symbol of opulence and distinction.',
  image: pearlingImg,
  categoryAr: 'عجائب الطبيعة والتراث',
  categoryEn: 'Nature & Heritage Marvels',
  source: {
    nameAr: 'معهد البحرين للؤلؤ والأحجار الكريمة (دانات) & اليونسكو',
    nameEn: 'Bahrain Institute for Pearls and Gemstones (DANAT) & UNESCO',
    url: 'https://danat.bh',
    verifiedOrganization: 'DANAT'
  },
  relatedLandmarkId: 'pearling-path'
};

export const HOSPITALITY_DATA = [
  // --- الفنادق والإقامة ---
  {
    id: 'four-seasons-bahrain-bay',
    type: 'hotel' as const,
    nameAr: 'فندق فورسيزونز خليج البحرين',
    nameEn: 'Four Seasons Hotel Bahrain Bay',
    cityNameAr: 'المنامة',
    cityNameEn: 'Manama',
    categoryLabelAr: 'فنادق ومنتجعات فاخرة',
    categoryLabelEn: 'Luxury Hotel & Resort',
    descriptionAr: 'أيقونة معمارية بارزة ترتفع على جزيرتها الخاصة في قلب خليج البحرين، يوفر إطلالات بانورامية خلابة على أفق المنامة ومياه الخليج العربي، مع شاطئ خاص ومرافق سبا عالمية.',
    descriptionEn: 'A soaring architectural icon situated on its own private island in Bahrain Bay, offering panoramic city skyline views, private white-sand beach, and world-class culinary dining.',
    featuresAr: ['شاطئ رملي خاص', 'أحواض سباحة إنفينيتي', 'مطاعم الشيف وولفغانغ بوك', 'مركز سبا وعافية'],
    featuresEn: ['Private White-Sand Beach', 'Infinity Pools', 'Wolfgang Puck Dining', 'World-Class Spa'],
    image: heroSkyline,
    rating: 4.9,
    locationAr: 'جزيرة خليج البحرين، المنامة',
    locationEn: 'Bahrain Bay Island, Manama',
    officialUrl: 'https://www.fourseasons.com/bahrain/',
    source: {
      nameAr: 'هيئة البحرين للسياحة والمعارض',
      nameEn: 'Bahrain Tourism and Exhibitions Authority',
      url: 'https://btea.bh',
      verifiedOrganization: 'BTEA'
    }
  },
  {
    id: 'ritz-carlton-bahrain',
    type: 'hotel' as const,
    nameAr: 'فندق ذا ريتز-كارلتون البحرين',
    nameEn: 'The Ritz-Carlton, Bahrain',
    cityNameAr: 'المنامة (السيف)',
    cityNameEn: 'Manama (Seef)',
    categoryLabelAr: 'منتجعات شاطئية راقية',
    categoryLabelEn: 'Beachfront Luxury Resort',
    descriptionAr: 'منتجع شاطئي فخم يقع في ضاحية السيف، يضم بحيرة شاطئية خاصة ومارينا يخوت وفيلات فاخرة محاطة بحدائق استوائية خضراء تجمع بين الفخامة والخصوصية المطلقة.',
    descriptionEn: 'An opulent coastal resort in the Seef district featuring a secluded private lagoon, yacht marina, lavish villas, and tranquil landscaped gardens.',
    featuresAr: ['بحيرة شاطئية خاصة', 'مارينا لليخوت', '14 مطعماً وردهة عالمية', 'فيلات ملكية خاصة'],
    featuresEn: ['Private Lagoon & Beach', 'Yacht Marina', '14 Dining Venues', 'Royal Secluded Villas'],
    image: sitraSceneImg,
    rating: 4.8,
    locationAr: 'ضاحية السيف، المنامة',
    locationEn: 'Seef District, Manama',
    officialUrl: 'https://www.ritzcarlton.com/en/hotels/middle-east/bahrain',
    source: {
      nameAr: 'هيئة البحرين للسياحة والمعارض',
      nameEn: 'Bahrain Tourism and Exhibitions Authority',
      url: 'https://btea.bh',
      verifiedOrganization: 'BTEA'
    }
  },
  {
    id: 'al-areen-palace-spa',
    type: 'hotel' as const,
    nameAr: 'منتجع وسبا قصر العرين',
    nameEn: 'Al Areen Palace & Spa',
    cityNameAr: 'الزلاق / الصخير',
    cityNameEn: 'Zallaq / Sakhir',
    categoryLabelAr: 'منتجعات وفيلات صحراوية خاصة',
    categoryLabelEn: 'Desert Villa Resort & Spa',
    descriptionAr: 'ملاذ صحراوي استثنائي يقدم فيلات خاصة مستقلة مع أحواض سباحة مدفأة وجاكوزي، بالقرب من محمية العرين الطبيعية وحلبة البحرين الدولية وشجرة الحياة.',
    descriptionEn: 'An exceptional desert sanctuary boasting standalone private villas with temperature-controlled private pools, adjacent to Al Areen Wildlife Park and BIC.',
    featuresAr: ['فلل خاصة بأحواض سباحة مستقلة', 'أكبر مجمع سبا حراري في الشرق الأوسط', 'قريب من حلبة الفورمولا 1'],
    featuresEn: ['Private Pool Villas', 'Largest Hydrothermal Spa', 'Proximity to Formula 1 Circuit'],
    image: zallaqSceneImg,
    rating: 4.7,
    locationAr: 'الصخير بالقرب من الزلاق',
    locationEn: 'Sakhir near Zallaq',
    officialUrl: 'https://all.accor.com/',
    source: {
      nameAr: 'هيئة البحرين للسياحة والمعارض',
      nameEn: 'BTEA',
      url: 'https://btea.bh',
      verifiedOrganization: 'BTEA'
    }
  },

  // --- المطاعم والضيافة والمأكولات ---
  {
    id: 'haji-cafe-naseef',
    type: 'restaurant' as const,
    nameAr: 'مطعم ومقهى نصيف التاريخي (1920)',
    nameEn: 'Naseef Restaurant & Haji Cafe',
    cityNameAr: 'المنامة',
    cityNameEn: 'Manama',
    categoryLabelAr: 'مطاعم المطبخ البحريني الأصيل',
    categoryLabelEn: 'Authentic Bahraini Heritage Dining',
    descriptionAr: 'أقدم وأعرق محطات الطعام الشعبي في سوق المنامة، يقدم الفطور البحريني الشهير (البلاليط، الباقلاء، البيض بالطماطم، والخبز الساخن) والآيس كريم البحريني التاريخي بالمانجو والزعفران منذ عام 1920.',
    descriptionEn: 'Historic cornerstone of traditional Bahraini cuisine in Manama Souq since 1920, renowned for traditional breakfast dishes (Balaleet, Shakshouka) and legendary mango saffron ice cream.',
    featuresAr: ['فطور بحريني تقليدي أصيل', 'آيس كريم نصيف الشهير منذ 1920', 'أجواء سوق المنامة القديم'],
    featuresEn: ['Authentic Bahraini Breakfast', 'Historic 1920 Artisanal Ice Cream', 'Atmospheric Old Souq Setting'],
    image: babImg,
    rating: 4.8,
    locationAr: 'سوق باب البحرين، المنامة',
    locationEn: 'Bab Al Bahrain Souq, Manama',
    officialUrl: 'https://culture.gov.bh',
    source: {
      nameAr: 'هيئة البحرين للثقافة والآثار',
      nameEn: 'Bahrain Authority for Culture and Antiquities',
      url: 'https://culture.gov.bh',
      verifiedOrganization: 'BACA'
    }
  },
  {
    id: 'villa-mamas',
    type: 'restaurant' as const,
    nameAr: 'مطعم فيلا ماماز (Villa Mamas)',
    nameEn: 'Villa Mamas Restaurant',
    cityNameAr: 'المرخ / سار',
    cityNameEn: 'Al Markh / Saar',
    categoryLabelAr: 'المطبخ الخليجي المعاصر الراقي',
    categoryLabelEn: 'Contemporary Fine Khaleeji Dining',
    descriptionAr: 'وجهة طعام عالمية بقيادة الشيف البحرينية الشهيرة رؤيا صالح، تقدم أطباقاً بحرينية وخليجية بلمسات متوسطية عصرية تعتمد على مكونات عضوية ومحلية طازجة.',
    descriptionEn: 'Celebrated restaurant founded by Bahraini Chef Roaya Saleh, elevating traditional Gulf flavors with contemporary culinary mastery using organic local produce.',
    featuresAr: ['أطباق بحرينية حديثة مبتكرة', 'مكونات عضوية محلية طازجة', 'جلسات حدائق أنيقة ومريحة'],
    featuresEn: ['Innovative Khaleeji Recipes', 'Fresh Local Organic Ingredients', 'Charming Courtyard Garden'],
    image: heroSkyline,
    rating: 4.9,
    locationAr: 'قرية المرخ، بالقرب من سار',
    locationEn: 'Al Markh, Saar Area',
    officialUrl: 'https://villamamas.com',
    source: {
      nameAr: 'هيئة البحرين للسياحة والمعارض',
      nameEn: 'BTEA',
      url: 'https://btea.bh',
      verifiedOrganization: 'BTEA'
    }
  },

  // --- الأسواق الشعبية والتسوق ---
  {
    id: 'manama-souq',
    type: 'souq' as const,
    nameAr: 'سوق المنامة القديم وباب البحرين',
    nameEn: 'Bab Al Bahrain & Old Manama Souq',
    cityNameAr: 'المنامة',
    cityNameEn: 'Manama',
    categoryLabelAr: 'الأسواق الشعبية والتاريخية',
    categoryLabelEn: 'Historic Traditional Souq',
    descriptionAr: 'القلب النابض للتجارة في البحرين منذ قرون؛ يضم أزقة مفعمة بروائح البهارات الخليجية، ومحلات بيع اللؤلؤ الطبيعي، والذهب البحريني عيار 21، والأقمشة والتحف التراثية.',
    descriptionEn: 'The historic marketplace of Bahrain, featuring atmospheric lanes laden with exotic spices, natural pearls, 21k Bahraini gold, and hand-embroidered textiles.',
    featuresAr: ['سوق الذهب واللؤلؤ الطبيعي', 'دكاكين التوابل والأعشاب النادرة', 'مقاهي ومطاعم شعبية'],
    featuresEn: ['Gold & Natural Pearl Bazaars', 'Aromatic Spice Stalls', 'Traditional Teahouses'],
    image: babImg,
    rating: 4.8,
    locationAr: 'خلف باب البحرين، قلب المنامة',
    locationEn: 'Behind Bab Al Bahrain, Manama',
    source: {
      nameAr: 'هيئة البحرين للثقافة والآثار',
      nameEn: 'BACA',
      url: 'https://culture.gov.bh',
      verifiedOrganization: 'BACA'
    }
  },
  {
    id: 'qaisariya-souq',
    type: 'souq' as const,
    nameAr: 'سوق القيصرية التاريخي بالمحرق',
    nameEn: 'Historic Souq Al Qaisariya',
    cityNameAr: 'المحرق',
    cityNameEn: 'Muharraq',
    categoryLabelAr: 'أسواق التراث العالمي لليونسكو',
    categoryLabelEn: 'UNESCO World Heritage Souq',
    descriptionAr: 'أحد أقدم أجزاء سوق المحرق وجزء أساسي من مسار طريق اللؤلؤ المدرج على قائمة اليونسكو؛ شُيد بدكاكين من حجر الفروش والأسقف الخشبية لبيع اللؤلؤ والقهوة والتمور.',
    descriptionEn: 'One of the oldest surviving markets in Muharraq and an integral component of the UNESCO Pearling Path, built with historic coral stone and mangrove wood roofs.',
    featuresAr: ['عمارة مرجانية وتراثية مسجلة باليونسكو', 'محلات بيع التمور والحلوى البحرينية', 'دكاكين اللؤلؤ والأنتيك'],
    featuresEn: ['UNESCO Preserved Coral Architecture', 'Traditional Bahraini Halwa Shops', 'Authentic Pearl Traders'],
    image: pearlingImg,
    rating: 4.9,
    locationAr: 'المحرق، مسار طريق اللؤلؤ',
    locationEn: 'Muharraq, Pearling Path',
    source: {
      nameAr: 'مركز التراث العالمي لليونسكو',
      nameEn: 'UNESCO World Heritage Centre',
      url: 'https://pearlingpath.bh',
      verifiedOrganization: 'UNESCO'
    }
  },

  // --- الشواطئ والأماكن البحرية ---
  {
    id: 'marassi-beach',
    type: 'beach' as const,
    nameAr: 'شاطئ مراسي ديار المحرق',
    nameEn: 'Marassi Beach',
    cityNameAr: 'ديار المحرق',
    cityNameEn: 'Diyar Al Muharraq',
    categoryLabelAr: 'الشواطئ الرملية الحديثة والرياضات المائية',
    categoryLabelEn: 'Modern Beach & Watersports',
    descriptionAr: 'واجهة بحرية عصرية برمال بيضاء ناعمة ومياه فيروزية صافية، توفر مرافق متكاملة ومطاعم شاطئية وأنشطة ترفيهية للأطفال، بالإضافة إلى ركوب الكاياك والزوارق السريعة.',
    descriptionEn: 'A prime contemporary coastal beachfront with soft white sands and crystal-clear waters, offering vibrant watersports, inflatable waterparks, and beach cafes.',
    featuresAr: ['رمال بيضاء مجهزة بكراسي ومظلات', 'ألعاب ورياضات مائية للأطفال والكبار', 'مطاعم ومقاهٍ مطلة على البحر'],
    featuresEn: ['Equipped Sunbeds & Umbrellas', 'Family Watersports & Kayaking', 'Beachfront Promenade Cafes'],
    image: sitraSceneImg,
    rating: 4.8,
    locationAr: 'ديار المحرق، شمال شرق البحرين',
    locationEn: 'Diyar Al Muharraq',
    source: {
      nameAr: 'هيئة البحرين للسياحة والمعارض',
      nameEn: 'BTEA',
      url: 'https://btea.bh',
      verifiedOrganization: 'BTEA'
    }
  },
  {
    id: 'bilaj-al-jazayer',
    type: 'beach' as const,
    nameAr: 'شاطئ بلاج الجزائر (ساحل الزلاق)',
    nameEn: 'Bilaj Al Jazayer (Zallaq Coast)',
    cityNameAr: 'الزلاق',
    cityNameEn: 'Zallaq',
    categoryLabelAr: 'شواطئ الغروب العامة',
    categoryLabelEn: 'Sunset Coastal Public Beach',
    descriptionAr: 'يمتد لأكثر من 3.5 كيلومترات على الساحل الجنوبي الغربي للبحرين، ويعد الوجهة الأولى لعشاق مشاهدة غروب الشمس في الخليج العربي وممارسة المشي والسباحة في مياه هادئة.',
    descriptionEn: 'A 3.5-kilometer coastline on the southwestern coast of Bahrain, renowned as the top vantage point for spectacular Arabian sunsets and serene coastal walks.',
    featuresAr: ['ممشى ساحلي واسع مع مسار للدراجات', 'أروع إطلالة لغروب الشمس في البحرين', 'قريب من حلبة الفورمولا 1 والعرين'],
    featuresEn: ['3.5km Promenade & Bike Trails', 'Best Sunset Views in the Kingdom', 'Close to BIC and Al Areen'],
    image: zallaqSceneImg,
    rating: 4.7,
    locationAr: 'الزلاق، الساحل الغربي',
    locationEn: 'Zallaq, Western Coast',
    source: {
      nameAr: 'هيئة البحرين للسياحة والمعارض',
      nameEn: 'BTEA',
      url: 'https://btea.bh',
      verifiedOrganization: 'BTEA'
    }
  },

  // --- الأنشطة والجولات السياحية ---
  {
    id: 'pearl-diving-tour',
    type: 'activity' as const,
    nameAr: 'رحلات غوص واستخراج اللؤلؤ الطبيعي',
    nameEn: 'Bahrain Natural Pearl Diving Experience',
    cityNameAr: 'المحرق / سواحل البحرين',
    cityNameEn: 'Muharraq / Offshore Reefs',
    categoryLabelAr: 'تجارب التراث البحري الأصيل',
    categoryLabelEn: 'Living Heritage Expedition',
    descriptionAr: 'تجربة فريدة تتيح للمشاركين الإبحار إلى "الهيرات" (المصائد الطبيعية لمزارع المحار في أعماق مياه البحرين) والغوص الحر أو بالأسطوانات لاستخراج المحار والاحتفاظ بجميع اللآلئ التي يتم العثور عليها مجاناً وفق الأنظمة الرسمية!',
    descriptionEn: 'An authentic maritime adventure allowing visitors to dive in protected historic oyster beds (Hayrat) and keep any natural pearls discovered without limit, under official licensing.',
    featuresAr: ['الغوص في مواقع التراث البحري الطبيعي', 'الاحتفاظ بجميع اللآلئ المكتشفة مجاناً', 'مرافقة غواصين ونواخذة محترفين'],
    featuresEn: ['Dive in Pristine Protected Oyster Beds', 'Keep 100% of Natural Pearls Found', 'Accompanied by Licensed Captains'],
    image: pearlingImg,
    rating: 5.0,
    locationAr: 'انطلاق الرحلات من شاطئ مراسي ورأس رية',
    locationEn: 'Departures from Ras Rayyah and Marassi',
    source: {
      nameAr: 'هيئة البحرين للثقافة ومعهد دانات',
      nameEn: 'BACA & DANAT Institute',
      url: 'https://pearlingpath.bh',
      verifiedOrganization: 'BACA'
    }
  },
  {
    id: 'bic-karting-circuit',
    type: 'activity' as const,
    nameAr: 'حلبة البحرين الدولية وسباقات الكارتينج',
    nameEn: 'Bahrain International Circuit (BIC)',
    cityNameAr: 'الصخير',
    cityNameEn: 'Sakhir',
    categoryLabelAr: 'رياضة السيارات والأنشطة الحماسية',
    categoryLabelEn: 'Motorsports & Karting Arena',
    descriptionAr: '"موطن رياضة السيارات في الشرق الأوسط"، حلبة سباقات الجائزة الكبرى للفورمولا 1 التي توفر جولات استكشافية وراء الكواليس ومضمار كارتينج احترافي مفتوح للجمهور على مدار العام.',
    descriptionEn: 'The Home of Motorsport in the Middle East; host of the annual Formula 1 Gulf Air Bahrain Grand Prix, featuring behind-the-scenes pit tours and world-class karting tracks.',
    featuresAr: ['مضمار كارتينج عالمي مضاء ليلاً', 'جولات تفقدية لبرج صخير وحلبة الـ F1', 'تجارب قيادة سيارات السباق الاحترافية'],
    featuresEn: ['Floodlit International Karting Track', 'Sakhir VIP Tower Tour', 'Pro Racing Car Driving Experiences'],
    image: heroSkyline,
    rating: 4.9,
    locationAr: 'صحراء الصخير',
    locationEn: 'Sakhir Desert',
    officialUrl: 'https://www.bahraingp.com',
    source: {
      nameAr: 'حلبة البحرين الدولية',
      nameEn: 'BIC Official',
      url: 'https://www.bahraingp.com',
      verifiedOrganization: 'BIC'
    }
  }
];

export const TRAVEL_GUIDE_FAQS: TravelGuideFAQ[] = [
  {
    id: 'what-to-do',
    category: 'general',
    questionAr: 'ماذا تفعل في البحرين خلال زيارتك السياحية؟',
    questionEn: 'What are the top things to do in Bahrain?',
    answerAr: 'يمكنك خوض تجربة غوص اللؤلؤ الطبيعي في مياه الخليج والاحتفاظ بما تجده، وزيارة موقع قلعة البحرين لليونسكو ومتحفها البحري، والتجول في مسار طريق اللؤلؤ بالمحرق، والاستمتاع بتذوق الحلوى البحرينية في سوق المنامة القديم، ومشاهدة شجرة الحياة المعمرة في الصخير، وقضاء أوقات شاطئية ممتعة في مراسي وجزر أمواج.',
    answerEn: 'You can experience natural pearl diving in offshore reefs and keep your found pearls, explore UNESCO sites like Bahrain Fort and the Pearling Path, stroll through historic Manama Souq, witness the 400-year-old Tree of Life, and enjoy pristine beaches at Marassi and Amwaj.'
  },
  {
    id: 'top-attractions',
    category: 'culture',
    questionAr: 'ما هي أفضل وأهم الأماكن السياحية في البحرين؟',
    questionEn: 'What are the most famous tourist attractions in Bahrain?',
    answerAr: 'أهم المعالم تشمل: 1) قلعة البحرين العريقة المطلة على البحر. 2) مسار طريق اللؤلؤ في المحرق. 3) متحف البحرين الوطني وبيت القرآن. 4) باب البحرين وسوق المنامة العتيق. 5) جامع أحمد الفاتح الكبير. 6) تلال مدافن دلمون في عالي. 7) حلبة البحرين الدولية للفورمولا 1.',
    answerEn: 'Top attractions include Qal\'at al-Bahrain (Bahrain Fort), the Pearling Path in Muharraq, Bahrain National Museum, Beit Al Quran, Bab Al Bahrain in Manama, Al Fateh Grand Mosque, Dilmun Burial Mounds in Aali, and the Bahrain International Circuit.'
  },
  {
    id: 'manama-highlights',
    category: 'general',
    questionAr: 'ما هي أهم المعالم السياحية في العاصمة المنامة؟',
    questionEn: 'What are the top landmarks to visit in Manama?',
    answerAr: 'تحتضن المنامة خليطاً ساحراً بين التاريخ والمعاصرة؛ من أبرز معالمها: بوابة باب البحرين وأسواقها، متحف البحرين الوطني، مسرح البحرين الوطني، جامع الفاتح، مرفأ البحرين المالي، مركز البحرين التجاري العالمي، ومجمع الأفنيوز على كورنيش المنامة.',
    answerEn: 'Manama combines heritage and futuristic architecture: Bab Al Bahrain and historic bazaars, Bahrain National Museum, National Theatre, Al Fateh Mosque, Bahrain Bay, and The Avenues coastal promenade.'
  },
  {
    id: 'family-places',
    category: 'family',
    questionAr: 'ما هي أفضل الأماكن المناسبة للعائلات والأطفال في البحرين؟',
    questionEn: 'What are the best family-friendly places in Bahrain?',
    answerAr: 'تناسب العائلات شواطئ مراسي وبلاج الجزائر المجهزة بألعاب مائية، حديقة ومحمية العرين للحياة الفطرية لمشاهدة المها والطيور النادرة، منتزه عذاري الترفيهي، مجمع الأفنيوز، ومتحف موقع قلعة البحرين التفاعلي.',
    answerEn: 'Great family destinations include Marassi Beach with inflatable parks, Al Areen Wildlife Park & Reserve, Adhari Amusement Park, The Avenues waterfront play spaces, and the interactive Bahrain Fort Site Museum.'
  },
  {
    id: 'bahrain-history-summary',
    category: 'culture',
    questionAr: 'ما هو تاريخ مملكة البحرين ولماذا سميت بأرض دلمون؟',
    questionEn: 'What is the history of Bahrain and the Dilmun civilization?',
    answerAr: 'تمتلك البحرين تاريخاً يتجاوز 5000 عام، حيث كانت تُعرف بحضارة دلمون (أرض الخلود والفردوس في الملاحم السومرية القديمة) بفضل ينابيع المياه العذبة التي تفجرت في برها وبحرها، ثم عرفت بتايلوس في العهد الهيلينستي، وتأسست الدولة الحديثة عام 1783 على يد أحمد الفاتح وصولاً إلى إعلان المملكة الدستورية وازدهارها الحديث.',
    answerEn: 'Bahrain boasts over 5,000 years of civilization as the core of Bronze Age Dilmun—famed in the Epic of Gilgamesh as the land of sweet springs and immortality—later named Tylos under Hellenistic influence, and unified as a modern sovereign state in 1783.'
  },
  {
    id: 'best-beaches',
    category: 'beaches',
    questionAr: 'ما هي أفضل الشواطئ والأماكن البحرية في البحرين؟',
    questionEn: 'What are the best public and resort beaches in Bahrain?',
    answerAr: 'يعد شاطئ مراسي في ديار المحرق الأفضل للأنشطة والرياضات المائية، وشاطئ بلاج الجزائر في الزلاق الأمثل لمشاهدة الغروب والاسترخاء، وساحل كرباباد المجاور للقلعة لعشاق التراث وركوب الخيل، بالإضافة إلى شواطئ جزر أمواج ودرة البحرين.',
    answerEn: 'Marassi Beach in Diyar Al Muharraq is premier for watersports, Bilaj Al Jazayer in Zallaq is ideal for sunset walks, Karbabad Beach is famed for horse riding by ancient ramparts, alongside Amwaj Islands and Durrat Al Bahrain.'
  },
  {
    id: 'traditional-souqs',
    category: 'culture',
    questionAr: 'أين تجد أفضل الأسواق الشعبية والحرف التراثية في البحرين؟',
    questionEn: 'Where can you experience traditional souqs and handicrafts?',
    answerAr: 'سوق المنامة القديم لشراء البهارات والعطور والذهب البحريني الأصيل، سوق القيصرية بالمحرق لشراء التمور والحلوى والتراثيات، قرية عالي لمشاهدة صناعة الفخار في أفران عمرها 4000 عام، وقرية بني جمرة لمشاهدة حياكة النسيج والبشوت اليدوية.',
    answerEn: 'Visit Old Manama Souq for spices and 21k gold, Souq Al Qaisariya in Muharraq for Bahraini Halwa, Aali village for 4,000-year-old pottery kiln workshops, and Bani Jamrah for handcrafted woven bishts.'
  }
];

