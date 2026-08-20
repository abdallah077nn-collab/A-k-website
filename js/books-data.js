/**
 * مكتبة تعلّم - قاعدة بيانات كتب تطوير الواجهات الأمامية (Front-End)
 * جميع الأسعار تتراوح بدقة بين 100 و 450 جنيه مصري
 */

const BOOKS_DATA = [
  {
    id: 1,
    title: "جافاسكريبت: الأجزاء الجيدة",
    englishTitle: "JavaScript: The Good Parts",
    author: "دوغلاس كروكفورد (Douglas Crockford)",
    price: 180,
    originalPrice: 240,
    category: "javascript",
    categoryName: "جافاسكريبت",
    badge: "الأكثر مبيعاً",
    badgeType: "hot",
    rating: 4.9,
    reviewsCount: 142,
    level: "متوسط إلى متقدم",
    pages: 176,
    year: 2024,
    language: "مترجم للعربية + المصطلحات الأصلية",
    coverGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    icon: "fa-brands fa-js",
    description: "الكتاب الأسطوري الذي يعلمك كيفية استخراج القوة الحقيقية للغة جافاسكريبت وتجنب الأجزاء السيئة والشوائب البرمجية، مع شرح دقيق للـ Objects، Functions، و Prototypal Inheritance.",
    shortDesc: "الدليل الكلاسيكي المعتمد لفهم أسرار وقوة لغة جافاسكريبت وكتابة كود نقي وعالي الكفاءة.",
    tableOfContents: [
      "الفصل 1: الجيد، السيئ، والفظيع في جافاسكريبت",
      "الفصل 2: البنية النحوية والقيم والأنماط",
      "الفصل 3: الكائنات (Objects) والوراثة في البروتوتايب",
      "الفصل 4: الدوال (Functions) والإغلاقات (Closures)",
      "الفصل 5: المصفوفات والعمليات المتقدمة عليها",
      "الفصل 6: التعبيرات النمطية (RegEx) وأساليب التحسين"
    ],
    features: [
      "طباعة فاخرة ورق أصفر كريمي مريح للعين",
      "أمثلة برمجية مترجمة وشاملة",
      "ملحق خاص بأهم أسئلة المقابلات التقنية"
    ]
  },
  {
    id: 2,
    title: "جافاسكريبت البليغة (الطبعة الرابعة المحدثة)",
    englishTitle: "Eloquent JavaScript - 4th Edition",
    author: "ماريجن هافربيكي (Marijn Haverbeke)",
    price: 240,
    originalPrice: 320,
    category: "javascript",
    categoryName: "جافاسكريبت",
    badge: "شامل وتطبيقي",
    badgeType: "featured",
    rating: 4.8,
    reviewsCount: 218,
    level: "من الصفر للمحترفين",
    pages: 472,
    year: 2024,
    language: "مترجم للعربية بالكامل",
    coverGradient: "linear-gradient(135deg, #eab308 0%, #ca8a04 100%)",
    icon: "fa-solid fa-code",
    description: "رحلة متكاملة تبدأ معك من المفاهيم الأساسية في البرمجة حتى إتقان الـ Asynchronous JS والـ DOM والتفاعل مع المتصفح، مع مشاريع عملية كاملة تشمل لعبة ومنصة مصغرة.",
    shortDesc: "الكتاب الشامل لتعلم جافاسكريبت من الأساسيات إلى المتصفح و Node.js مع مشاريع برمجية حقيقية.",
    tableOfContents: [
      "القسم 1: لغة جافاسكريبت (القيم، الأنواع، التحكم بالتدفق، الدوال)",
      "القسم 2: هياكل البيانات والبرمجة كائنية التوجه (OOP)",
      "القسم 3: الأخطاء وتصحيحها (Debugging) والـ Regular Expressions",
      "القسم 4: جافاسكريبت والمتصفح (الـ DOM والأحداث Events)",
      "القسم 5: الرسم على Canvas والرسوميات التفاعلية",
      "القسم 6: البرمجة اللاتزامنية (Async/Await & Promises)"
    ],
    features: [
      "شرح أحدث معايير ES2024",
      "مشاريع تطبيقية خطوة بخطوة",
      "رمز QR لتحميل الأكواد والتمارين"
    ]
  },
  {
    id: 3,
    title: "أنت لا تعرف JS بعد: النطاقات والإغلاقات",
    englishTitle: "You Don't Know JS Yet: Scope & Closures",
    author: "كايل سيمبسون (Kyle Simpson)",
    price: 210,
    originalPrice: 280,
    category: "javascript",
    categoryName: "جافاسكريبت",
    badge: "الأعلى تقييماً",
    badgeType: "popular",
    rating: 5.0,
    reviewsCount: 310,
    level: "متقدم",
    pages: 285,
    year: 2024,
    language: "مترجم ومدعم بتوضيحات عربية دقيقة",
    coverGradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    icon: "fa-solid fa-brain",
    description: "إذا كنت تريد فهم ما يحدث في الكواليس داخل محرك جافاسكريبت (Lexical Scope, Hoisting, Global Scope, Shadowing, Closures)، فهذا الكتاب لا غنى عنه لكل مطور يسعى لاحتراف المقابلات.",
    shortDesc: "المرجع العميق لاكتشاف خفايا محرك جافاسكريبت وإتقان مفاهيم Scope و Closures والمصاعد (Hoisting).",
    tableOfContents: [
      "الفصل 1: ما هو النطاق (Scope) وكيف يعمل المحرك؟",
      "الفصل 2: النطاق اللغوي (Lexical Scope) والظلال البرمجية",
      "الفصل 3: نطاق الدوال والكتل (Function vs Block Scope)",
      "الفصل 4: الرفع البرمجي (Hoisting) ودورة حياة المتغيرات",
      "الفصل 5: الإغلاقات البرمجية (Closures) وقوتها الحقيقية",
      "الفصل 6: أنماط الموديلات البرمجية (Module Pattern) الحديثة"
    ],
    features: [
      "شرح تفصيلي عميق لكل كلمة كود",
      "إيضاحات رسومية لمخطط الذاكرة ومحرك V8",
      "تدريبات عملية لحل الألغاز البرمجية"
    ]
  },
  {
    id: 4,
    title: "تعلم ريآكت: الأنماط الحديثة للواجهات",
    englishTitle: "Learning React: Modern Patterns for Developing React Apps",
    author: "أليكس بانكس وإيف بورسيلو (Alex Banks & Eve Porcello)",
    price: 290,
    originalPrice: 380,
    category: "react",
    categoryName: "ريآكت",
    badge: "الأكثر طلباً",
    badgeType: "hot",
    rating: 4.9,
    reviewsCount: 195,
    level: "مبتدئ إلى متوسط",
    pages: 340,
    year: 2025,
    language: "مترجم للعربية بالكامل مع مصطلحات JSX والـ Hooks",
    coverGradient: "linear-gradient(135deg, #06b6d4 0%, #0284c7 100%)",
    icon: "fa-brands fa-react",
    description: "كتاب شامل يبدأ بأسس البرمجة الوظيفية (Functional Programming) في جافاسكريبت، ثم ينتقل مباشرة لتطبيق أحدث أنماط ريآكت المبنية على الـ Functional Components والـ Custom Hooks و Context API.",
    shortDesc: "تعلم بناء تطبيقات ريآكت سريعة وقابلة للتوسع باستخدام أحدث أنماط الـ Functional Components والـ Hooks.",
    tableOfContents: [
      "الفصل 1: جافاسكريبت الحديثة لمطوري ريآكت (ESNext)",
      "الفصل 2: أسس البرمجة الوظيفية (Functional JavaScript)",
      "الفصل 3: كيف يعمل ريآكت؟ الـ Virtual DOM و JSX",
      "الفصل 4: إدارة الحالة ومكونات الـ State والـ Props",
      "الفصل 5: الخطافات المتقدمة (useState, useEffect, useReducer, useMemo)",
      "الفصل 6: بناء Custom Hooks وإدارة الـ Global State بـ Context",
      "الفصل 7: جلب البيانات والتفاعل مع الـ REST APIs"
    ],
    features: [
      "أمثلة كود حديثة متوافقة مع React 18 & 19",
      "تطبيق عملي لبناء متجر وتطبيق مهام",
      "دليل شامل لأفضل ممارسات الأداء (Performance)"
    ]
  },
  {
    id: 5,
    title: "طريقك لاحتراف ريآكت واجتياز المقابلات",
    englishTitle: "The Road to React: Your journey to master React.js",
    author: "روبن فيروخ (Robin Wieruch)",
    price: 270,
    originalPrice: 350,
    category: "react",
    categoryName: "ريآكت",
    badge: "دليل عملي",
    badgeType: "popular",
    rating: 4.8,
    reviewsCount: 167,
    level: "متوسط",
    pages: 310,
    year: 2024,
    language: "عربي مبسط مع توثيق تقني ممتاز",
    coverGradient: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",
    icon: "fa-solid fa-road",
    description: "دليل عملي وتطبيقي يبني معك تطبيق بحث وإدارة بيانات متكامل في ريآكت من الصفر خطوة بخطوة، مع تغطية اختبار المكونات (Testing) وربط الـ TypeScript وتحسين الـ SEO.",
    shortDesc: "منهج عملي لبناء تطبيق ريآكت تجاري مع إدارة الحالة، التعامل مع واجهات البرمجة واختبار الكود.",
    tableOfContents: [
      "الوحدة 1: تهيئة البيئة وبناء أول مكوّن في React",
      "الوحدة 2: التفاعل والـ Event Handlers ونماذج الإدخال",
      "الوحدة 3: الاتصال بالـ APIs وجلب البيانات مع معالجة أخطاء الشبكة",
      "الوحدة 4: تحسين الأداء باستخدام React.memo و useCallback",
      "الوحدة 5: كتابة اختبارات الوحدة باستخدام Vitest و React Testing Library",
      "الوحدة 6: التحول إلى TypeScript في مشاريع ريآكت"
    ],
    features: [
      "مبني على تجارب شركات عالمية",
      "تدريبات عملية بنهاية كل فصل",
      "نصائح لاجتياز المقابلات الوظيفية لمطوري React"
    ]
  },
  {
    id: 6,
    title: "ريآكت عملياً: بناء تطبيقات الويب الكبرى",
    englishTitle: "React Up & Running: Building Web Applications",
    author: "ستاسيان ألكسندروف (Stoyan Stefanov)",
    price: 320,
    originalPrice: 420,
    category: "react",
    categoryName: "ريآكت",
    badge: "مستوى متقدم",
    badgeType: "featured",
    rating: 4.7,
    reviewsCount: 112,
    level: "متوسط إلى متقدم",
    pages: 360,
    year: 2024,
    language: "مترجم للعربية بالكامل",
    coverGradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    icon: "fa-solid fa-cubes",
    description: "يركز هذا الكتاب الصادر عن O'Reilly على كيفية بناء تطبيقات واجهات أمامية ضخمة ومعقدة، من معالجة الجداول الضخمة وتصميم الـ Data Grids حتى تحسين كفاءة التحميل والـ Bundle Size.",
    shortDesc: "دليل بناء الواجهات الضخمة، المكونات القابلة لإعادة الاستخدام، وتحسين الأداء لتطبيقات الشركات.",
    tableOfContents: [
      "الفصل 1: مكونات الواجهة المتقدمة وأنماط التصميم",
      "الفصل 2: الجداول التفاعلية ومعالجة ملايين السجلات في الواجهة",
      "الفصل 3: دورة حياة المكونات وتفادي الـ Re-renders غير الضرورية",
      "الفصل 4: التوجيه وبناء الـ SPA بواسطة React Router 6",
      "الفصل 5: الأمان وحماية تطبيقات ريآكت من ثغرات XSS",
      "الفصل 6: النشر وتجهيز الـ Production Build"
    ],
    features: [
      "أمثلة من أنظمة شركات حقيقية",
      "مقارنات معمارية للواجهات الضخمة",
      "كود نظيف معتمد على أفضل الممارسات"
    ]
  },
  {
    id: 7,
    title: "ريآكت المتقدم مع تايب سكريبت",
    englishTitle: "React & TypeScript Mastery (Fullstack Frontend)",
    author: "نايت موراي وفريق Newline (Nate Murray)",
    price: 450,
    originalPrice: 580,
    category: "react",
    categoryName: "ريآكت وتايب سكريبت",
    badge: "الأقوى والأشمل",
    badgeType: "hot",
    rating: 5.0,
    reviewsCount: 285,
    level: "متقدم ومحترف",
    pages: 520,
    year: 2025,
    language: "مترجم باحترافية للمطورين المحترفين",
    coverGradient: "linear-gradient(135deg, #3178c6 0%, #1e40af 100%)",
    icon: "fa-solid fa-shield-halved",
    description: "الكتاب الأقوى والأشمل على الإطلاق لدمج قوة TypeScript الصارمة للأنواع مع سرعة ومرونة React. يغطي بناء أنظمة تصميم كاملة (Design Systems) وتطبيقات بنية المؤسسات الكبرى.",
    shortDesc: "المرجع الاحترافي الأقوى لدمج TypeScript مع React لبناء تطبيقات عملاقة خالية من الأخطاء.",
    tableOfContents: [
      "الباب 1: أساسيات TypeScript للمطورين المتقدمين (Generics, Utility Types)",
      "الباب 2: كتابة الـ Props و State بأنواع صارمة ومحمية",
      "الباب 3: كتابة Custom Hooks مع Generic Types المعقدة",
      "الباب 4: بناء مكتبة مكونات UI متكاملة ونظام تصميم Component Library",
      "الباب 5: إدارة الحالة المتقدمة بـ Zustand و Redux Toolkit مع TS",
      "الباب 6: التعامل مع خوادم GraphQL و REST بأمان كامل للأنواع (Type-Safety)"
    ],
    features: [
      "أعلى مستوى جودة طباعة وتجليد فاخر",
      "مشاريع Enterprise كاملة جاهزة للاستخدام",
      "ملحق خاص لتهيئة مشاريع Vite مع TypeScript"
    ]
  },
  {
    id: 8,
    title: "إتقان Next.js 14 وتطبيقات الويب الحديثة",
    englishTitle: "Mastering Next.js 14 & Fullstack React",
    author: "نخبة من كبار مهندسي الويب (Next.js Team Experts)",
    price: 420,
    originalPrice: 520,
    category: "react",
    categoryName: "ريآكت و Next.js",
    badge: "إصدار حديث 2025",
    badgeType: "featured",
    rating: 4.9,
    reviewsCount: 174,
    level: "متوسط إلى متقدم",
    pages: 460,
    year: 2025,
    language: "عربي حديث مع شرح الـ App Router",
    coverGradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    icon: "fa-solid fa-bolt",
    description: "الدليل الشامل لفهم واحتراف معمارية الـ App Router و React Server Components (RSC) و Server Actions، وكيفية بناء مواقع سريعة جداً تحقق أعلى درجات الـ SEO ومقاييس Core Web Vitals.",
    shortDesc: "تعلم Next.js 14 و React Server Components و Server Actions والـ SEO لبناء منصات ويب متكاملة.",
    tableOfContents: [
      "الفصل 1: بنية Next.js والفرق بين SSR و SSG و ISR و RSC",
      "الفصل 2: الـ App Router والمسارات الديناميكية والمشتركة (Layouts)",
      "الفصل 3: مكونات الخادم مقابل مكونات العميل (Server vs Client Components)",
      "الفصل 4: تنفيذ الـ Server Actions والتعامل مع قواعد البيانات",
      "الفصل 5: المصادقة وحماية المسارات (Auth.js / NextAuth)",
      "الفصل 6: تحسين الأداء ومقاييس LCP, CLS والـ Metadata للـ SEO"
    ],
    features: [
      "شرح كامل لأحدث ميزات Vercel و Next.js",
      "مشروع منصة تجارة إلكترونية كاملة مع لوحة تحكم",
      "دليل استضافة ونشر التطبيقات"
    ]
  },
  {
    id: 9,
    title: "الكود النظيف في جافاسكريبت",
    englishTitle: "Clean Code in JavaScript",
    author: "جيمس بادوك (James Padolsey)",
    price: 360,
    originalPrice: 460,
    category: "javascript",
    categoryName: "جافاسكريبت وتطوير البرمجيات",
    badge: "أساسي لكل مطور",
    badgeType: "popular",
    rating: 4.9,
    reviewsCount: 153,
    level: "متوسط إلى متقدم",
    pages: 390,
    year: 2024,
    language: "مترجم للعربية بالكامل",
    coverGradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
    icon: "fa-solid fa-wand-magic-sparkles",
    description: "دليلك لتحويل الكود الفوضوي إلى كود مقروء، قابل للصيانة، وسهل الاختبار. يغطي مبادئ SOLID، أنماط التصميم (Design Patterns)، وكيفية إجراء مراجعات الكود الفعالة.",
    shortDesc: "تعلم مبادئ الكود النظيف، مبادئ SOLID وأنماط التصميم في جافاسكريبت لتصبح مطوراً محترفاً ومطلوباً.",
    tableOfContents: [
      "الفصل 1: معنى الكود النظيف وأهميته لفرق العمل",
      "الفصل 2: تسمية المتغيرات والدوال بأسلوب معبر وبسيط",
      "الفصل 3: كتابة دوال صغيرة تؤدي غرضاً واحداً فقط (Single Responsibility)",
      "الفصل 4: تطبيق مبادئ SOLID البرمجية في جافاسكريبت",
      "الفصل 5: أنماط التصميم المشهورة (Factory, Singleton, Observer, Strategy)",
      "الفصل 6: إعادة هيكلة الكود القديم (Refactoring) بأمان"
    ],
    features: [
      "مقارنات قبل وبعد (Before & After) لكل مفهوم",
      "نصائح لتحسين مراجعة الكود في فرق العمل",
      "أدوات الفحص التلقائي ESLint و Prettier"
    ]
  },
  {
    id: 10,
    title: "أسرار وحيل CSS المتقدمة",
    englishTitle: "CSS Secrets: Better Solutions to Everyday Web Projects",
    author: "ليا فيرو (Lea Verou - خبيرة W3C)",
    price: 250,
    originalPrice: 340,
    category: "htmlcss",
    categoryName: "HTML & CSS",
    badge: "تصميم واجهات احترافي",
    badgeType: "featured",
    rating: 4.9,
    reviewsCount: 204,
    level: "متوسط إلى متقدم",
    pages: 350,
    year: 2024,
    language: "مترجم ومدعم بأكثر من 200 رسم توضيحي ملون",
    coverGradient: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
    icon: "fa-brands fa-css3-alt",
    description: "47 حيلة برمجية مذهلة لحل أصعب مشاكل التصميم والواجهات باستخدام CSS النقي دون الحاجة لمكتبات ثقيلة أو جافاسكريبت، بما في ذلك التدرجات، الظلال، التحريك والتجاوب.",
    shortDesc: "اكتشف 47 حيلة عبقرية لحل أعقد مشاكل التنسيق والتصميم بـ CSS النقي بدون مكتبات إضافية.",
    tableOfContents: [
      "السر 1-8: الحدود والخلفيات والتدرجات الزجاجية (Glassmorphism)",
      "السر 9-16: الأشكال الهندسية والقصاصات المتقدمة (Clip-path)",
      "السر 17-24: التأثيرات البصرية والظلال ثلاثية الأبعاد",
      "السر 25-32: أسرار الخطوط والطباعة العربية والإنجليزية",
      "السر 33-40: التخطيطات الحديثة بـ CSS Grid و Flexbox",
      "السر 41-47: التحريك المتقدم (Animations & Transitions)"
    ],
    features: [
      "مليء بالألوان والرسومات التوضيحية",
      "حلول متوافقة مع جميع المتصفحات الحديثة",
      "أكواد جاهزة للنسخ والتطبيق في مشاريعك"
    ]
  },
  {
    id: 11,
    title: "تصميم وبناء المواقع بلغة HTML و CSS",
    englishTitle: "HTML & CSS: Design and Build Websites",
    author: "جون دوكيت (Jon Duckett)",
    price: 190,
    originalPrice: 260,
    category: "htmlcss",
    categoryName: "HTML & CSS",
    badge: "الأفضل للمبتدئين",
    badgeType: "popular",
    rating: 4.8,
    reviewsCount: 340,
    level: "مبتدئ تماماً",
    pages: 490,
    year: 2024,
    language: "مترجم للعربية بالكامل بتصميم جرافيكي ساحر",
    coverGradient: "linear-gradient(135deg, #f97316 0%, #c2410c 100%)",
    icon: "fa-brands fa-html5",
    description: "الكتاب الأجمل عالمياً لتعلم أساسيات بناء صفحات الويب. يتميز بطريقة عرض بصرية جذابة تجعل مفاهيم الـ Semantic HTML والـ Box Model والتصميم المتجاوب سهلة الفهم للجميع.",
    shortDesc: "المدخل البصري الرائع لتعلم أساسيات تصميم وبناء صفحات الويب المتجاوبة من الصفر للمبتدئين.",
    tableOfContents: [
      "الوحدة 1: هيكل صفحات الويب والوسوم الدلالية (Semantic HTML5)",
      "الوحدة 2: النصوص، العناوين، الروابط والقوائم",
      "الوحدة 3: الصور والوسائط المتعددة (Audio & Video)",
      "الوحدة 4: الجداول ونماذج الإدخال التفاعلية (Forms)",
      "الوحدة 5: أسس الألوان والخطوط وصندوق العناصر (Box Model)",
      "الوحدة 6: التصميم المتجاوب مع الهواتف الذكية (Responsive Layouts)"
    ],
    features: [
      "تصميم ملون فائق الجمال ومناسب للمبتدئين",
      "خطوة بخطوة لبناء أول موقع ويب لك",
      "دليل شامل لأكواد الألوان والخطوط"
    ]
  },
  {
    id: 12,
    title: "تصميم واجهات المستخدم للمطورين (Refactoring UI)",
    englishTitle: "Refactoring UI: Practical UI/UX for Frontend Devs",
    author: "ستيف شوجر وآدم ويثان (Steve Schoger & Adam Wathan)",
    price: 380,
    originalPrice: 490,
    category: "uiux",
    categoryName: "تصميم الواجهات وتجربة المستخدم UI/UX",
    badge: "نصائح عملية مذهلة",
    badgeType: "hot",
    rating: 5.0,
    reviewsCount: 228,
    level: "لجميع المستويات",
    pages: 250,
    year: 2024,
    language: "مترجم مع أمثلة بصرية شاملة",
    coverGradient: "linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)",
    icon: "fa-solid fa-palette",
    description: "كتبه مطورو Tailwind CSS ليعلموا مبرمجي الواجهات الأمامية أسرار جعل الواجهات تبدو احترافية وجذابة دون الحاجة لأن تكون مصمم جرافيك، مع قواعد حاسمة لاختيار الخطوط والألوان والمسافات.",
    shortDesc: "تعلم أسرار تصميم واجهات مستخدم مذهلة واحترافية كمطور فرونت إند بدون مهارات تصميم سابقة.",
    tableOfContents: [
      "الفصل 1: البدء بالوظائف بدلاً من الألوان وتفاصيل التصميم",
      "الفصل 2: إنشاء تسلسل هرمي بصري واضح (Visual Hierarchy)",
      "الفصل 3: إتقان المسافات البيضاء والمحاذاة والشبكات (Grids)",
      "الفصل 4: هندسة الألوان وكيفية بناء باليتة ألوان مريحة للمستخدم",
      "الفصل 5: اختيار أحجام وأوزان الخطوط والتباين",
      "الفصل 6: تصميم الجداول والنماذج والأزرار الاحترافية"
    ],
    features: [
      "مئات المقارنات البصرية (صح وخطأ)",
      "قواعد ذهبية قابلة للتطبيق الفوري في أي مشروع",
      "دليل اختيار باليتة الألوان والخطوط"
    ]
  },
  {
    id: 13,
    title: "هياكل البيانات والخوارزميات في جافاسكريبت",
    englishTitle: "Data Structures & Algorithms with JavaScript",
    author: "مايكل مكميلان (Michael McMillan)",
    price: 310,
    originalPrice: 410,
    category: "javascript",
    categoryName: "جافاسكريبت متقدم",
    badge: "لاختبارات التوظيف",
    badgeType: "popular",
    rating: 4.8,
    reviewsCount: 135,
    level: "متوسط إلى متقدم",
    pages: 330,
    year: 2024,
    language: "مترجم مع كود جافاسكريبت كامل",
    coverGradient: "linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)",
    icon: "fa-solid fa-network-wired",
    description: "الكتاب المثالي للتحضير لمقابلات كبرى الشركات التكنولوجية (FAANG) باستخدام لغة جافاسكريبت. يشرح المصفوفات، القوائم المترابطة، الأشجار الثنائية، خوارزميات البحث والترتيب، وحساب تعقيد الوقت والمساحة (Big-O).",
    shortDesc: "دليلك لاجتياز المقابلات التقنية الصعبة وفهم هياكل البيانات والخوارزميات في JavaScript.",
    tableOfContents: [
      "الفصل 1: المصفوفات والعمليات عليها في JS",
      "الفصل 2: القوائم (Lists) والمكدسات (Stacks) والطوابير (Queues)",
      "الفصل 3: القوائم المتصلة (Linked Lists)",
      "الفصل 4: القواميس وجداول الهاش (Hash Tables)",
      "الفصل 5: الأشجار الثنائية (Binary Trees) والرسوم البيانية (Graphs)",
      "الفصل 6: خوارزميات الترتيب والبحث وحساب Big-O Notation"
    ],
    features: [
      "حلول جافاسكريبت لكافة المسائل المعقدة",
      "تجهيز كامل للمقابلات التقنية (Problem Solving)",
      "شرح بسيط لمعادلات Big-O الرياضية"
    ]
  },
  {
    id: 14,
    title: "أساسيات وتطبيق مشاريع الويب الحديثة",
    englishTitle: "Modern Frontend Web Projects Blueprint",
    author: "مهندسو أكاديمية تعلّم",
    price: 120,
    originalPrice: 180,
    category: "htmlcss",
    categoryName: "أساسيات الويب ومشاريع",
    badge: "سعر اقتصادي",
    badgeType: "budget",
    rating: 4.7,
    reviewsCount: 188,
    level: "مبتدئ",
    pages: 210,
    year: 2025,
    language: "عربي مبسط 100%",
    coverGradient: "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)",
    icon: "fa-solid fa-laptop-code",
    description: "كتاب تطبيقي اقتصادي وممتع يبني معك 10 مشاريع حقيقية متدرجة في الصعوبة باستخدام HTML5 و CSS3 و JavaScript النقي، ويشرح كيفية استضافة موقعك مجاناً على GitHub Pages و Vercel.",
    shortDesc: "10 مشاريع عملية متدرجة تبنيها خطوة بخطوة بالـ HTML و CSS و JS مع نصائح الاستضافة المجانية.",
    tableOfContents: [
      "المشروع 1: صفحة هبوط شخصية بورتفوليو احترافية (Portfolio)",
      "المشروع 2: تطبيق حاسبة تفاعلية مع مؤثرات صوتية",
      "المشروع 3: تطبيق قائمة مهام تفاعلي (Todo App) مع حفظ البيانات",
      "المشروع 4: متجر إلكتروني مصغر مع سلة مشتريات ديناميكية",
      "المشروع 5: تطبيق طقس متصل بـ Weather API الحقيقي",
      "المشروع 6: كيفية نشر مشاريعك على GitHub Pages و Netlify مجاناً"
    ],
    features: [
      "أنسب خيار للطلاب والمبتدئين بسعر 120 ج.م فقط",
      "أكواد المشاريع العشرة كاملة مع شروحات واضحة",
      "نصائح لكتابة بورتفوليو يجلب أول فرصة عمل"
    ]
  }
];

// تصنيفات الكتب
const CATEGORIES_DATA = [
  { id: "all", name: "جميع الكتب", icon: "fa-solid fa-layer-group", count: 14 },
  { id: "javascript", name: "جافاسكريبت (JavaScript)", icon: "fa-brands fa-js", count: 5 },
  { id: "react", name: "ريآكت (React)", icon: "fa-brands fa-react", count: 4 },
  { id: "htmlcss", name: "لغات الويب (HTML & CSS)", icon: "fa-brands fa-html5", count: 3 },
  { id: "uiux", name: "تصميم الواجهات (UI/UX)", icon: "fa-solid fa-palette", count: 2 }
];

// كوبونات الخصم المتوفرة في المتجر
const PROMO_CODES = {
  "TAALAM10": { discountPercent: 10, label: "خصم 10% بمناسبة انطلاق المتجر" },
  "FRONTEND": { discountPercent: 15, label: "خصم خاص 15% لمطوري الفرونت إند" },
  "REACT2025": { discountPercent: 12, label: "خصم 12% على كتب ريآكت وجافاسكريبت" }
};

// رقم الواتساب المعتمد للمتجر وتكوينات المتجر
const STORE_CONFIG = {
  name: "مكتبة تَعلّم",
  slogan: "بوابتك لاحتراف تطوير الواجهات الأمامية والـ Front-End",
  whatsappNumber: "01018923524",
  whatsappInternational: "201018923524",
  currency: "ج.م",
  shippingFlatRate: 35,
  freeShippingThreshold: 600,
  supportEmail: "contact@taalam-books.com",
  workingHours: "يومياً من 9:00 صباحاً حتى 11:00 مساءً"
};