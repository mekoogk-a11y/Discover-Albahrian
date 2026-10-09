import { InvestmentOpportunity, InvestmentAdvantage } from '../types';

export const investmentAdvantages: InvestmentAdvantage[] = [
  {
    id: 'foreign-ownership',
    icon: 'Globe',
    titleAr: 'تملك أجنبي حر بنسبة 100%',
    titleEn: '100% Foreign Ownership',
    descriptionAr: 'تسمح البحرين بالملكية الكاملة للأجانب في الغالبية العظمى من الأنشطة التجارية والصناعية دون الحاجة لشريك محلي.',
    descriptionEn: 'Bahrain permits 100% full foreign ownership across most commercial and industrial activities without requiring a local sponsor.',
    statNumber: '100%',
    statLabelAr: 'ملكية حرة كاملة',
    statLabelEn: 'Foreign Ownership'
  },
  {
    id: 'zero-tax',
    icon: 'Percent',
    titleAr: 'بيئة ضريبية تنافسية للغاية (0% ضرائب)',
    titleEn: 'Zero Corporate & Income Taxes',
    descriptionAr: 'لا توجد ضرائب على الدخل الشخصي أو أرباح الشركات (باستثناء قطاع استخراج النفط والغاز)، مع حرية كاملة لتحويل الأرباح ورؤوس الأموال.',
    descriptionEn: 'No personal income tax and 0% corporate tax for non-oil businesses, with unrestricted repatriation of capital and dividends.',
    statNumber: '0%',
    statLabelAr: 'ضريبة دخل وشركات',
    statLabelEn: 'Corporate Tax'
  },
  {
    id: 'operating-costs',
    icon: 'TrendingDown',
    titleAr: 'أقل تكاليف تشغيلية في دول مجلس التعاون',
    titleEn: 'Lowest Operating Costs in GCC',
    descriptionAr: 'تكاليف استئجار المكاتب، وتأسيس الشركات، وسكن الموظفين، والخدمات اللوجستية أقل بنسبة تصل إلى 30% مقارنة بالمراكز المالية الإقليمية.',
    descriptionEn: 'Operating, commercial leasing, and living costs are up to 30% lower than neighboring regional business hubs.',
    statNumber: '30%',
    statLabelAr: 'توفير في تكاليف التشغيل',
    statLabelEn: 'Lower Operating Cost'
  },
  {
    id: 'market-access',
    icon: 'Truck',
    titleAr: 'بوابة مباشرة لسوق خليجي بقيمة 2 تريليون دولار',
    titleEn: 'Direct Gateway to $2T GCC Market',
    descriptionAr: 'اتصال بري استراتيجي فوري مع المملكة العربية السعودية عبر جسر الملك فهد (أقل من ساعة)، مع تسهيلات جمركية سريعة.',
    descriptionEn: 'Direct terrestrial causeway connection to Saudi Arabia in under an hour, providing frictionless logistics to the $2T GCC market.',
    statNumber: '$2.1T',
    statLabelAr: 'حجم السوق الخليجي المتصل',
    statLabelEn: 'Connected GCC Market'
  },
  {
    id: 'golden-visa',
    icon: 'Award',
    titleAr: 'الإقامة الذهبية للمستثمرين وأصحاب المواهب',
    titleEn: 'Golden Residency for Investors',
    descriptionAr: 'إقامة طويلة الأمد قابلة للتجديد للمستثمرين، وأصحاب العقارات، ورواد الأعمال، والمهنيين ذوي المهارات العالية وعائلاتهم.',
    descriptionEn: 'Long-term renewable residency for entrepreneurs, property owners, global investors, and high-skilled talent with family sponsorship.',
    statNumber: '10 سنوات',
    statLabelAr: 'إقامة ذهبية قابلة للتجديد',
    statLabelEn: 'Renewable Golden Visa'
  },
  {
    id: 'tamkeen-support',
    icon: 'HandCoins',
    titleAr: 'دعم وتمويل حكومي عبر صندوق "تمكين"',
    titleEn: 'Government Subsidies via Tamkeen',
    descriptionAr: 'يقدم صندوق العمل "تمكين" منحاً وحوافز لتغطية أجور الكوادر الوطنية، وشراء المعدات والبرمجيات، وتوسيع الأعمال.',
    descriptionEn: 'Labor Fund Tamkeen provides robust grants covering employee salaries, training programs, digital transformation, and capital assets.',
    statNumber: '50%+',
    statLabelAr: 'دعم تمويل الأجور والتدريب',
    statLabelEn: 'Co-funding Grants'
  }
];

export const investmentOpportunities: InvestmentOpportunity[] = [
  {
    id: 'fintech-crypto-hub',
    titleAr: 'منصة التكنولوجيا المالية والأصول الرقمية والخدمات المصرفية المفتوحة',
    titleEn: 'FinTech, Open Banking & Digital Assets Platform',
    sectorAr: 'التكنولوجيا المالية والخدمات المصرفية',
    sectorEn: 'FinTech & Banking',
    sectorKey: 'fintech',
    descriptionAr: 'فرصة إطلاق وتوسيع حلول المدفوعات الرقمية، ومنصات ترميز الأصول، والخدمات المصرفية المفتوحة داخل أكبر حاضنة تكنولوجيا مالية بالمنطقة، تحت إشراف البيئة الرقابية التجريبية لمصرف البحرين المركزي (Regulatory Sandbox).',
    descriptionEn: 'Establish next-generation payment gateways, tokenized asset platforms, and open banking solutions at Bahrain FinTech Bay, regulated by the Central Bank of Bahrain Regulatory Sandbox.',
    investmentRangeAr: '200,000 - 5,000,000 دينار بحريني',
    investmentRangeEn: 'BHD 200,000 - 5,000,000',
    locationAr: 'خليج البحرين للتكنولوجيا المالية (Bahrain FinTech Bay) / خليج البحرين',
    locationEn: 'Bahrain FinTech Bay / Bahrain Bay',
    highlightsAr: [
      'بيئة تنظيمية تجريبية رائدة للمدفوعات والعملات الرقمية',
      'بحرين باي كمركز مصرفي يضم مقرات أكثر من 400 مؤسسة مالية',
      'حوافز مخصصة لشركات التقنية المالية الناشئة والدولية'
    ],
    highlightsEn: [
      'Pioneering regulatory sandbox for fintech and digital assets',
      'Banking cluster hosting 400+ leading financial institutions',
      'Dedicated scaling subsidies and incubation programs'
    ],
    incentivesAr: [
      'ترخيص سريع من مصرف البحرين المركزي',
      'دعم تمكين لرواتب المطورين والمحللين',
      'مساحات عمل مجهزة داخل خليج البحرين'
    ],
    incentivesEn: [
      'Expedited Sandbox licensing by Central Bank of Bahrain',
      'Tamkeen wage subsidies for tech talent',
      'Turnkey office spaces in Bahrain Bay'
    ],
    facilitatorAr: 'مجلس التنمية الاقتصادية ومصرف البحرين المركزي',
    facilitatorEn: 'Bahrain EDB & Central Bank of Bahrain',
    officialUrl: 'https://www.bahrainfintechbay.com',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true
  },
  {
    id: 'hyperscale-ai-cloud',
    titleAr: 'مراكز بيانات الحوسبة السحابية وبنية الذكاء الاصطناعي التحتية',
    titleEn: 'Hyperscale Cloud Data Centers & AI Infrastructure',
    sectorAr: 'تكنولوجيا المعلومات والاتصالات والذكاء الاصطناعي',
    sectorEn: 'ICT, Cloud & AI',
    sectorKey: 'tech',
    descriptionAr: 'الاستثمار في بناء مراكز بيانات خضراء ومرافق حوسبة الذكاء الاصطناعي مستفيدة من سياسة البحرين الحكومية "السحابة أولاً" (Cloud-First Policy) وشبكات الألياف البصرية المترابطة مع كابلات الاتصالات الدولية.',
    descriptionEn: 'Develop ultra-efficient green data centers and high-performance AI computing facilities leveraging Bahrain\'s national Cloud-First policy and multiple undersea fiber optic cables.',
    investmentRangeAr: '2,000,000 - 50,000,000 دينار بحريني',
    investmentRangeEn: 'BHD 2,000,000 - 50,000,000',
    locationAr: 'منطقة سترة الصناعية / منطقة البحرين للاستثمار (BIIP) بالحد',
    locationEn: 'Sitra Industrial Area / Bahrain International Investment Park (BIIP), Hidd',
    highlightsAr: [
      'مركز المنطقة الإقليمية لشركة أمازون ويب سيرفيسز AWS في الشرق الأوسط',
      'تعرفة طاقة صناعية تنافسية وأطر حماية البيانات السيبرانية',
      'تشريعات بيانات سحابية متقدمة تضمن حصانة البيانات الأجنبية'
    ],
    highlightsEn: [
      'Host to AWS Middle East Region infrastructure',
      'Competitive industrial power tariffs and data privacy laws',
      'Pioneering Cloud Jurisdiction law protecting overseas data'
    ],
    incentivesAr: [
      'إعفاءات جمركية على استيراد أجهزة الخوادم والمعدات التقنية',
      'عقود إيجار أراضٍ طويلة الأجل في المناطق الصناعية',
      'دعم بنسبة 100% في ربط شبكات الاتصالات عالية السرعة'
    ],
    incentivesEn: [
      'Customs duty exemptions on server hardware & tech imports',
      'Long-term land leases in state-of-the-art industrial parks',
      'Fast-track fiber connectivity approval'
    ],
    facilitatorAr: 'وزارة المواصلات والاتصالات وهيئة المعلومات والحكومة الإلكترونية',
    facilitatorEn: 'Ministry of Transportation & Telecommunications & iGA',
    officialUrl: 'https://www.bahrain.com/sectors/ict',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true
  },
  {
    id: 'logistics-fulfillment-hub',
    titleAr: 'مركز الخدمات اللوجستية والتجارة الإلكترونية العابرة للحدود',
    titleEn: 'Cross-Border Logistics & E-Commerce Fulfillment Hub',
    sectorAr: 'الخدمات اللوجستية وسلاسل الإمداد',
    sectorEn: 'Logistics & Supply Chain',
    sectorKey: 'logistics',
    descriptionAr: 'إنشاء مستودعات ذكية ومراكز توزيع إقليمية في منطقة البحرين اللوجستية (BLZ) المرتبطة بميناء خليفة بن سلمان ومطار البحرين الدولي، مع تصدير بري فوري للسوق السعودي في أقل من ساعتين.',
    descriptionEn: 'Establish smart fulfillment centers and automated distribution hubs in Bahrain Logistics Zone (BLZ) adjacent to Khalifa Bin Salman Port, serving Saudi Arabia and GCC markets in under 2 hours.',
    investmentRangeAr: '500,000 - 15,000,000 دينار بحريني',
    investmentRangeEn: 'BHD 500,000 - 15,000,000',
    locationAr: 'منطقة البحرين اللوجستية (BLZ) / ميناء خليفة بن سلمان، الحد',
    locationEn: 'Bahrain Logistics Zone (BLZ) / Khalifa Bin Salman Port, Hidd',
    highlightsAr: [
      'تخليص جمركي ذكي فائق السرعة عبر نظام أفق الرقمي',
      'مستودعات مخصصة للشحن الجوي والبحري والبري المتكامل',
      'أسرع زمن عبور بري للمنطقة الشرقية بالمملكة العربية السعودية'
    ],
    highlightsEn: [
      'Rapid customs clearance via OFOQ automated digital system',
      'Seamless multi-modal sea-air-land logistics ecosystem',
      'Fastest transit turnaround to Saudi Eastern Province'
    ],
    incentivesAr: [
      'إعفاء كامل من الرسوم الجمركية للبضائع المعاد تصديرها',
      'أجور تشغيلية وتخزينية منافسة بنسبة 25% عن موانئ المنطقة',
      'دعم تدريب الكفاءات اللوجستية الوطنية عبر تمكين'
    ],
    incentivesEn: [
      '100% duty suspension on re-exported transit cargo',
      'Competitive container handling & warehousing charges',
      'Tamkeen subsidized logistics workforce training'
    ],
    facilitatorAr: 'شؤون الموانئ والملاحة البحرية ومجلس التنمية الاقتصادية',
    facilitatorEn: 'Ports & Maritime Affairs & Bahrain EDB',
    officialUrl: 'https://www.bahrain.com/sectors/logistics',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true
  },
  {
    id: 'luxury-tourism-resorts',
    titleAr: 'منتجعات سياحية فاخرة ومشاريع الترفيه والضيافة البحرية',
    titleEn: 'Luxury Waterfront Resorts & Experiential Hospitality',
    sectorAr: 'السياحة والضيافة والترفيه',
    sectorEn: 'Tourism & Hospitality',
    sectorKey: 'tourism',
    descriptionAr: 'تطوير فنادق بوتيك شاطئية ومراسي يخوت ومجمعات ترفيه عائلية في الواجهات البحرية الحديثة (مراسي البحرين، خليج البحرين، جزر حوار، ساحل بلاج الجزائر).',
    descriptionEn: 'Develop upscale beachfront resorts, boutique island retreats, and experiential entertainment destinations across Marasi Bahrain, Bahrain Bay, and Hawar Islands.',
    investmentRangeAr: '3,000,000 - 40,000,000 دينار بحريني',
    investmentRangeEn: 'BHD 3,000,000 - 40,000,000',
    locationAr: 'مراسي البحرين (ديار المحرق) / شاطئ بلاج الجزائر / جزر حوار',
    locationEn: 'Marasi Bahrain / Bilaj Al Jazayer Coast / Hawar Islands',
    highlightsAr: [
      'نمو متسارع في تدفق الزوار الخليجيين والدوليين يتجاوز 12 مليون زائر سنوياً',
      'تكامل استثماري مع مركز البحرين العالمي للمعارض في الصخير (الأكبر بالشرق الأوسط)',
      'مبادرات استراتيجية السياحة لمملكة البحرين (2022 - 2026)'
    ],
    highlightsEn: [
      'Surging inbound tourist arrivals surpassing 12M visitors annually',
      'Synergy with Exhibition World Bahrain, the region\'s largest venue',
      'Backed by Bahrain National Tourism Strategy 2022-2026'
    ],
    incentivesAr: [
      'تسهيلات التراخيص السياحية الموحدة عبر هيئة البحرين للسياحة والمعارض',
      'مرونة التملك الحر للأراضي والمشاريع في المناطق السياحية المعتمدة',
      'حملات ترويجية ودعم تسويقي عبر الفعاليات والمهرجانات الوطنية'
    ],
    incentivesEn: [
      'Single-window tourism licensing by BTEA',
      'Designated freehold investment plots for international developers',
      'Co-marketing and destination promotion campaigns'
    ],
    facilitatorAr: 'هيئة البحرين للسياحة والمعارض (BTEA) وشركة إدامة',
    facilitatorEn: 'Bahrain Tourism & Exhibitions Authority & Edamah',
    officialUrl: 'https://btea.bh',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true
  },
  {
    id: 'aluminum-downstream-manufacturing',
    titleAr: 'الصناعات التحويلية المتقدمة القائمة على الألمنيوم والمعادن',
    titleEn: 'Advanced Aluminum Downstream & Clean Manufacturing',
    sectorAr: 'الصناعات التحويلية المتقدمة',
    sectorEn: 'Advanced Manufacturing',
    sectorKey: 'manufacturing',
    descriptionAr: 'إقامة مصانع للأجزاء الهندسية والسيارات ومواد البناء بالاستفادة من إنتاج مصهر شركة ألمنيوم البحرين (ألبا - أكبر مصهر ألمنيوم بموقع واحد في العالم) وتوريد المعدن المصهور عالي الجودة مباشرة.',
    descriptionEn: 'Establish downstream precision manufacturing, automotive parts, and specialized engineering facilities directly fed by Aluminium Bahrain (Alba), the world\'s largest single-site smelter.',
    investmentRangeAr: '1,500,000 - 25,000,000 دينار بحريني',
    investmentRangeEn: 'BHD 1,500,000 - 25,000,000',
    locationAr: 'منطقة البحرين العالمية للاستثمار (BIIP) / منطقة عسكر الصناعية',
    locationEn: 'Bahrain International Investment Park (BIIP) / Askar Industrial Area',
    highlightsAr: [
      'توريد فوري لمعدن الألمنيوم السائل الساخن مباشرة من مصهر ألبا',
      'اتفاقيات تجارة حرة (FTA) مع الولايات المتحدة الأمريكية بدون رسوم جمركية',
      'بنية تحتية متكاملة لخطوط الغاز والكهرباء الصناعية'
    ],
    highlightsEn: [
      'Direct liquid molten aluminum delivery pipeline from Alba',
      'US-Bahrain Free Trade Agreement (zero tariff export to USA)',
      'Heavy industrial infrastructure with dedicated power and gas grids'
    ],
    incentivesAr: [
      'إعفاء بنسبة 100% من الرسوم الجمركية على المعدات الصناعية والمواد الخام',
      'تصدير معفى من الرسوم إلى الأسواق الخليجية والعالمية',
      'فترة سماح إيجارية للأراضي في مدينة سلمان الصناعية'
    ],
    incentivesEn: [
      '100% duty exemptions on imported industrial machinery & raw materials',
      'Duty-free export to GCC and US markets under FTA',
      'Rent holiday incentives for long-term industrial projects'
    ],
    facilitatorAr: 'وزارة الصناعة والتجارة ومجلس التنمية الاقتصادية',
    facilitatorEn: 'Ministry of Industry and Commerce & EDB',
    officialUrl: 'https://www.moic.gov.bh',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    isFeatured: false
  },
  {
    id: 'specialized-healthcare-medtech',
    titleAr: 'المراكز الطبية التخصصية وتصنيع المستلزمات الدوائية',
    titleEn: 'Specialized Healthcare Centers & Pharma Manufacturing',
    sectorAr: 'الرعاية الصحية وعلوم الحياة',
    sectorEn: 'Healthcare & Life Sciences',
    sectorKey: 'healthcare',
    descriptionAr: 'تطوير مراكز علاجية وجراحية متقدمة في مجالات القلب والأورام والتأهيل، أو مصانع أدوية ومستلزمات طبية لتلبية احتياجات السوق الخليجي والشرق الأوسط وفق معايير هيئة NHRA.',
    descriptionEn: 'Establish advanced surgical clinics, rehabilitation hospitals, and pharmaceutical formulation facilities serving GCC markets regulated by the National Health Regulatory Authority (NHRA).',
    investmentRangeAr: '1,000,000 - 20,000,000 دينار بحريني',
    investmentRangeEn: 'BHD 1,000,000 - 20,000,000',
    locationAr: 'مدينة عيسى / خليج البحرين / الجفير',
    locationEn: 'Isa Town / Bahrain Bay / Juffair',
    highlightsAr: [
      'تطبيق نظام الضمان الصحي الوطني الشامل (صحتي)',
      'مركز إقليمي جاذب للسياحة العلاجية والاستشفائية',
      'إجراءات تسجيل دوائي سريعة بالتنسيق مع مجلس الصحة الخليجي'
    ],
    highlightsEn: [
      'Universal national health insurance rollout (Sehati)',
      'Growing regional hub for medical tourism and rehabilitation',
      'Expedited drug registration via Gulf Health Council accreditation'
    ],
    incentivesAr: [
      'دعم تمكين لتدريب وتوظيف الكوادر الطبية والتمريضية الوطنية',
      'إعفاءات على الأجهزة والمعدات الطبية الاستشفائية',
      'تسهيلات الاستيراد السريع للمستحضرات الصيدلانية'
    ],
    incentivesEn: [
      'Tamkeen wage subsidies for specialized healthcare professionals',
      'Customs duty relief on medical diagnostic equipment',
      'Fast-track clinical licensing through NHRA'
    ],
    facilitatorAr: 'الهيئة الوطنية لتنظيم المهن والخدمات الصحية (NHRA) والمجلس الأعلى للصحة',
    facilitatorEn: 'National Health Regulatory Authority (NHRA) & Supreme Council of Health',
    officialUrl: 'https://www.nhra.bh',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    isFeatured: false
  },
  {
    id: 'freehold-realestate-towers',
    titleAr: 'مشاريع التطوير العقاري والأبراج التجارية والسكنية في مناطق التملك الحر',
    titleEn: 'Freehold Real Estate, Commercial Towers & Mixed-Use Hubs',
    sectorAr: 'العقارات والتطوير الحضري',
    sectorEn: 'Real Estate & Urban Development',
    sectorKey: 'realestate',
    descriptionAr: 'تطوير وامتلاك مجمعات سكنية فاخرة، وأبراج مكتبية ذكية، ومساحات تجارية في مناطق التملك الحر المعتمدة دولياً، والتي تمنح المشترين والمستثمرين حق الحصول على الإقامة العقارية والذهبية.',
    descriptionEn: 'Acquire and build Grade-A commercial towers, luxury waterfront residential communities, and retail hubs in designated freehold zones offering Golden Residency qualification.',
    investmentRangeAr: '2,000,000 - 30,000,000 دينار بحريني',
    investmentRangeEn: 'BHD 2,000,000 - 30,000,000',
    locationAr: 'جزر أمواج / جزيرة الريف / خليج البحرين / درة البحرين',
    locationEn: 'Amwaj Islands / Reef Island / Bahrain Bay / Durrat Al Bahrain',
    highlightsAr: [
      'تنظيم عقاري شفاف بإشراف مؤسسة التنظيم العقاري (RERA)',
      'عائد استثماري إيجاري يعد من بين الأعلى في المنطقة (7% - 9%)',
      'أهلية الملاك والمستثمرين للحصول على الإقامة الذهبية'
    ],
    highlightsEn: [
      'World-class regulatory oversight by Real Estate Regulatory Authority (RERA)',
      'Attractive rental yields among the highest in GCC (7% - 9%)',
      'Qualifies property investors directly for Bahrain Golden Visa'
    ],
    incentivesAr: [
      'تسجيل عقاري سلس وضمان حقوق المشترين عبر حسابات الضمان المصرفي (Escrow)',
      'رسوم نقل ملكية منخفضة للغاية (1.7% - 2%)',
      'إعفاء من الضرائب العقارية الدورية ورسوم الأرباح الرأسمالية'
    ],
    incentivesEn: [
      'Escrow account protection for off-plan development projects',
      'Ultra-low property title transfer fee (1.7% - 2%)',
      'Zero annual property taxes and no capital gains taxes'
    ],
    facilitatorAr: 'مؤسسة التنظيم العقاري (RERA) وجهاز المساحة والتسجيل العقاري (SLRB)',
    facilitatorEn: 'Real Estate Regulatory Authority (RERA) & SLRB',
    officialUrl: 'https://www.rera.gov.bh',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    isFeatured: false
  },
  {
    id: 'solar-renewable-energy',
    titleAr: 'محطات الطاقة الشمسية وتقنيات الاستدامة وإعادة التدوير',
    titleEn: 'Utility-Scale Solar Energy & Clean Industrial Technologies',
    sectorAr: 'الطاقة النظيفة والاستدامة',
    sectorEn: 'Clean Energy & Sustainability',
    sectorKey: 'energy',
    descriptionAr: 'تطوير مشاريع الطاقة الشمسية الكهروضوئية الموزعة والمركزية، ومحطات تحلية المياه بالطاقة المتجددة، ومشاريع الاقتصاد الدائري لتحقيق التزام البحرين بالوصول إلى الحياد الكربوني بحلول 2060.',
    descriptionEn: 'Build distributed solar PV installations, renewable water desalination, and circular economy waste-to-energy projects aligned with Bahrain\'s Net-Zero Carbon 2060 pledge.',
    investmentRangeAr: '1,000,000 - 18,000,000 دينار بحريني',
    investmentRangeEn: 'BHD 1,000,000 - 18,000,000',
    locationAr: 'منطقة الدور / عسكر / أسطح المنشآت الصناعية والمجمعات الكبرى',
    locationEn: 'Al Dur / Askar / Commercial & Industrial Rooftops Nationwide',
    highlightsAr: [
      'الخطة الوطنية للطاقة المتجددة (NREP) الهادفة لتوليد 20% بحلول 2035',
      'نظام قياس صافي الطاقة (Net Metering) لربط المحطات بشبكة الكهرباء الحكومية',
      'شمس ساطعة ومعدلات إشعاع شمسي تتجاوز 300 يوم سنوياً'
    ],
    highlightsEn: [
      'National Renewable Energy Action Plan targeting 20% clean power by 2035',
      'Net Metering scheme allowing direct grid feed-in and tariff credits',
      'Abundant solar irradiance with over 300 days of sunshine annually'
    ],
    incentivesAr: [
      'عقود شراء طاقة طويلة الأجل مع هيئة الكهرباء والماء (EWA)',
      'إعفاءات ضريبية وجمركية لمعدات الطاقة المتجددة',
      'حوافز التمويل الأخضر من البنوك البحرينية والدولية'
    ],
    incentivesEn: [
      'Long-term Power Purchase Agreements (PPAs) with EWA',
      'Customs exemptions for solar panels and inverters',
      'Green financing subsidies from local and regional banking partners'
    ],
    facilitatorAr: 'هيئة الطاقة المستدامة (SEA) وهيئة الكهرباء والماء (EWA)',
    facilitatorEn: 'Sustainable Energy Authority (SEA) & EWA',
    officialUrl: 'https://www.ewa.bh',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    isFeatured: false
  }
];

export const investorSetupSteps = [
  {
    step: 1,
    titleAr: 'تحديد النشاط والشكل القانوني',
    titleEn: 'Define Activity & Legal Structure',
    descAr: 'اختر نوع النشاط التجاري (شركة ذات مسؤولية محدودة W.L.L، فرع شركة أجنبية، مؤسسة فردية) مع الاستفادة من ميزة التملك الأجنبي بنسبة 100%.',
    descEn: 'Select your commercial activity and corporate form (W.L.L, foreign branch, sole proprietorship) taking advantage of 100% foreign ownership.'
  },
  {
    step: 2,
    titleAr: 'إصدار السجل التجاري عبر "سجلات"',
    titleEn: 'Commercial Registration via Sijilat.bh',
    descAr: 'قدّم طلبك إلكترونياً بالكامل عبر بوابة وزارة الصناعة والتجارة (Sijilat.bh) مع حجز الاسم التجاري والحصول على الموافقة المبدئية خلال 24-48 ساعة.',
    descEn: 'Submit your application digitally through MOIC portal (Sijilat.bh), reserve your trade name, and obtain instant preliminary approval in 24-48h.'
  },
  {
    step: 3,
    titleAr: 'فتح الحساب المصرفي للشركات',
    titleEn: 'Corporate Bank Account Opening',
    descAr: 'افتح حسابك المصرفي التجاري لدى أحد البنوك الوطنية أو الدولية في البحرين، مع خيارات مصرفية رقمية سريعة وخالية من التعقيد.',
    descEn: 'Open a corporate bank account with leading international or local Bahraini banks with streamlined digital onboarding.'
  },
  {
    step: 4,
    titleAr: 'التقديم على دعم صندوق "تمكين"',
    titleEn: 'Apply for Tamkeen Support Grants',
    descAr: 'استفد من برامج تمكين لتغطية تكاليف تدريب وتوظيف الكفاءات، ودعم الأصول الرأسمالية والتحول الرقمي، والاستشارات التسويقية.',
    descEn: 'Leverage Tamkeen enterprise programs co-funding employee wages, capital assets, digital equipment, and advisory services.'
  },
  {
    step: 5,
    titleAr: 'إصدار تصاريح العمل والإقامة الذهبية',
    titleEn: 'Work Permits & Golden Residency',
    descAr: 'أصدر تصاريح العمل للموظفين عبر هيئة تنظيم سوق العمل (LMRA)، والتقديم على الإقامة الذهبية للمستثمر وعائلته بسهولة.',
    descEn: 'Issue employee residency via LMRA single window and apply for investor Golden Residency for yourself and family members.'
  }
];

export const officialInvestmentPortals = [
  {
    nameAr: 'مجلس التنمية الاقتصادية (EDB)',
    nameEn: 'Bahrain Economic Development Board',
    roleAr: 'الجهة الحكومية المعنية باستقطاب الاستثمارات وتسهيل دخول الشركات الدولية',
    roleEn: 'Lead investment promotion agency facilitating overseas business setup',
    url: 'https://www.bahrain.com'
  },
  {
    nameAr: 'وزارة الصناعة والتجارة (بوابة سجلات)',
    nameEn: 'Ministry of Industry & Commerce (Sijilat)',
    roleAr: 'البوابة الوطنية لإصدار السجلات والتراخيص التجارية إلكترونياً بالكامل',
    roleEn: 'National portal for commercial registration and electronic business licensing',
    url: 'https://www.sijilat.bh'
  },
  {
    nameAr: 'صندوق العمل "تمكين"',
    nameEn: 'Labour Fund Tamkeen',
    roleAr: 'صندوق الدعم المالي والتشغيلي لتمويل نمو وتدريب وتطوير المؤسسات',
    roleEn: 'Government fund co-financing enterprise growth, salaries, and technology',
    url: 'https://www.tamkeen.bh'
  },
  {
    nameAr: 'خليج البحرين للتكنولوجيا المالية (BFB)',
    nameEn: 'Bahrain FinTech Bay',
    roleAr: 'أكبر حاضنة تكنولوجيا مالية بالشرق الأوسط بالشراكة مع مصرف البحرين المركزي',
    roleEn: 'Leading FinTech hub in MENA partnering with Central Bank of Bahrain',
    url: 'https://www.bahrainfintechbay.com'
  },
  {
    nameAr: 'غرفة تجارة وصناعة البحرين (BCCI)',
    nameEn: 'Bahrain Chamber of Commerce & Industry',
    roleAr: 'تمثيل مجتمع الأعمال وتوفير شراكات استثمارية محلية ودولية',
    roleEn: 'Voice of the business community fostering local and international partnerships',
    url: 'https://www.bahrainchamber.bh'
  },
  {
    nameAr: 'مؤسسة التنظيم العقاري (RERA)',
    nameEn: 'Real Estate Regulatory Authority',
    roleAr: 'تنظيم وحماية الاستثمارات العقارية ومشاريع التملك الحر والتطوير الحضري',
    roleEn: 'Regulating and protecting real estate investments and freehold masterplans',
    url: 'https://www.rera.gov.bh'
  }
];
