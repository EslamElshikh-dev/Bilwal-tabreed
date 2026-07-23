const phoneDisplay = "0563837128";
const phoneHref = "tel:+966563837128";
const whatsappHref =
  "https://wa.me/966563837128?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%A8%D9%8A%D9%84%D8%A7%D9%88%D8%A7%D9%84%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%B7%D9%84%D8%A8%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%AA%D8%A8%D8%B1%D9%8A%D8%AF%20%D9%88%D8%AA%D9%83%D9%8A%D9%8A%D9%81%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6";

const services = [
  {
    title: "صيانة وإصلاح مكيفات سبليت",
    description:
      "فحص أعطال مكيفات السبليت وتحديد سبب ضعف التبريد أو توقف الوحدة، ثم تنفيذ الصيانة المناسبة لاستعادة الأداء بكفاءة.",
    icon: "snow",
  },
  {
    title: "تنظيف وغسيل المكيفات",
    description:
      "تنظيف الفلاتر والمبخر والوحدة الخارجية وإزالة الغبار المتراكم للمساعدة على تحسين تدفق الهواء وجودة التبريد.",
    icon: "sparkles",
  },
  {
    title: "تعبئة فريون وكشف تسرب",
    description:
      "قياس ضغط دورة التبريد وفحص مواضع التسرب قبل تعبئة الفريون بالكمية المناسبة وفق حالة ونوع المكيف.",
    icon: "drop",
  },
  {
    title: "فك وتركيب ونقل المكيفات",
    description:
      "فك المكيف ونقله وتركيبه بعناية مع مراجعة التوصيلات والعزل والتصريف لضمان تشغيل مستقر في الموقع الجديد.",
    icon: "tools",
  },
  {
    title: "صيانة مكيفات شباك",
    description:
      "فحص مكيفات الشباك ومعالجة الضوضاء وضعف دفع الهواء ومشكلات التبريد، مع تنظيف الأجزاء المؤثرة في كفاءة التشغيل.",
    icon: "fan",
  },
  {
    title: "صيانة أنظمة التكييف المركزي",
    description:
      "فحص مكونات التكييف المركزي ومتابعة تدفق الهواء والتبريد والتوصيلات للمساعدة على تحديد مصدر الخلل بدقة.",
    icon: "duct",
  },
  {
    title: "إصلاح أعطال الكهرباء والتحكم",
    description:
      "تشخيص أعطال التشغيل المرتبطة بالقواطع والأسلاك والحساسات ولوحات التحكم والثرموستات وفق حالة النظام.",
    icon: "bolt",
  },
  {
    title: "تغيير الكمبروسر وقطع الغيار",
    description:
      "فحص الضاغط والمكونات المتضررة وتوضيح القطعة المطلوبة قبل الاستبدال، بما يناسب نوع المكيف ومواصفاته.",
    icon: "gear",
  },
  {
    title: "صيانة دورية للمنازل والمنشآت",
    description:
      "تنظيم فحص وتنظيف دوري للمكيفات للمساعدة على اكتشاف الأعطال مبكرًا والحفاظ على أداء التبريد خلال موسم الصيف.",
    icon: "calendar",
  },
  {
    title: "فحص وتحسين كفاءة التبريد",
    description:
      "مراجعة نظافة الفلاتر وتدفق الهواء والضغط والعزل والتصريف لتحديد أسباب ضعف التبريد واقتراح الحل الأنسب.",
    icon: "gauge",
  },
];

const allServiceNames = [
  "صيانة وإصلاح مكيفات سبليت",
  "تنظيف وغسيل المكيفات",
  "تعبئة فريون وكشف تسرب",
  "فك وتركيب ونقل المكيفات",
  "صيانة مكيفات شباك",
  "صيانة أنظمة التكييف المركزي",
  "إصلاح أعطال الكهرباء والتحكم",
  "تغيير الكمبروسر وقطع الغيار",
  "صيانة دورية للمنازل والمنشآت",
  "فحص وتحسين كفاءة التبريد",
];

const whyItems = [
  {
    number: "01",
    title: "تشخيص الحالة أولًا",
    description:
      "نراجع أعراض العطل ونفحص الأجزاء المرتبطة به حتى تكون الخدمة موجهة إلى السبب الفعلي قدر الإمكان.",
  },
  {
    number: "02",
    title: "توضيح الخدمة المطلوبة",
    description:
      "نشرح نوع الصيانة أو القطعة المطلوبة بصورة مباشرة قبل الانتقال إلى خطوات الإصلاح.",
  },
  {
    number: "03",
    title: "تواصل سهل وسريع",
    description:
      "يمكنك إرسال تفاصيل المشكلة عبر واتساب أو الاتصال مباشرة لحجز الخدمة داخل مدينة الرياض.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "تواصل معنا",
    description: "اتصل أو أرسل رسالة واتساب واشرح نوع المكيف والعطل الظاهر.",
  },
  {
    number: "02",
    title: "تحديد الموعد",
    description: "ننسق معك وقت الخدمة وموقعها داخل نطاق مدينة الرياض.",
  },
  {
    number: "03",
    title: "الفحص والتشخيص",
    description: "تتم مراجعة المكيف وتحديد سبب المشكلة والخدمة المناسبة.",
  },
  {
    number: "04",
    title: "تنفيذ الصيانة",
    description: "ننفذ الإجراء المتفق عليه ثم نراجع تشغيل المكيف والتبريد.",
  },
];

const areas = [
  "شمال الرياض",
  "شرق الرياض",
  "غرب الرياض",
  "جنوب الرياض",
  "وسط الرياض",
  "وأحياء الرياض المختلفة",
];

const faqs = [
  {
    question: "ما أنواع المكيفات التي تشملها خدمات بيلاوال؟",
    answer:
      "تشمل الخدمات صيانة وتنظيف وفحص مكيفات السبليت والشباك، إضافة إلى فحص أنظمة التكييف المركزي وأعمال الفك والتركيب ونقل الوحدات حسب حالة الموقع.",
  },
  {
    question: "هل تتوفر خدمة إصلاح المكيفات في جميع أحياء الرياض؟",
    answer:
      "النشاط يعمل في نطاق خدمة داخل مدينة الرياض. تواصل عبر الاتصال أو واتساب وأرسل موقع الحي للتأكد من تنسيق الموعد المتاح.",
  },
  {
    question: "متى يحتاج المكيف إلى تنظيف؟",
    answer:
      "يُنصح بفحص النظافة عند ملاحظة ضعف اندفاع الهواء أو الروائح أو تراكم الغبار على الفلاتر. تختلف الحاجة بحسب الاستخدام والبيئة المحيطة بالمكيف.",
  },
  {
    question: "هل ضعف التبريد يعني أن المكيف يحتاج فريون؟",
    answer:
      "ليس دائمًا. قد ينتج ضعف التبريد عن اتساخ الفلاتر أو ضعف تدفق الهواء أو عطل كهربائي أو تسرب. لذلك يبدأ الحل الصحيح بالفحص قبل تعبئة الفريون.",
  },
  {
    question: "هل تقدمون فك وتركيب ونقل المكيفات؟",
    answer:
      "نعم، تتوفر خدمة فك ونقل وتركيب المكيفات مع مراجعة التوصيلات والعزل ومسار التصريف بما يتناسب مع الوحدة والموقع الجديد.",
  },
  {
    question: "كيف أحجز خدمة صيانة تكييف؟",
    answer:
      "يمكنك الاتصال مباشرة على 0563837128 أو الضغط على زر واتساب وإرسال نوع المكيف ووصف مختصر للمشكلة وموقعك داخل الرياض.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HVACBusiness",
      name: "بيلاوال لخدمات التبريد والتكييف",
      description:
        "خدمة إصلاح وصيانة وتنظيف وتركيب مكيفات الهواء في نطاق مدينة الرياض.",
      telephone: "+966563837128",
      areaServed: {
        "@type": "City",
        name: "الرياض",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "الرياض",
        addressRegion: "منطقة الرياض",
        addressCountry: "SA",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+966563837128",
        contactType: "customer service",
        areaServed: "SA",
        availableLanguage: ["Arabic"],
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "خدمات التبريد والتكييف",
        itemListElement: allServiceNames.map((name) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
            areaServed: "الرياض",
          },
        })),
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand ${compact ? "brand--compact" : ""}`}>
      <span className="brand__mark" aria-hidden="true">
        <svg viewBox="0 0 64 64" role="img">
          <circle cx="32" cy="32" r="27" />
          <path d="M32 12v40M15 22l34 20M15 42l34-20" />
          <circle cx="32" cy="32" r="7" />
          <path d="m28 15 4-4 4 4M28 49l4 4 4-4M18 20l-5 1 1 5M46 44l5-1-1-5M14 38l-1 5 5 1M50 26l1-5-5-1" />
        </svg>
      </span>
      <span className="brand__copy">
        <strong>بيلاوال</strong>
        <small>لخدمات التبريد والتكييف</small>
      </span>
    </span>
  );
}

function ServiceIcon({ name }: { name: string }) {
  if (name === "drop") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 5C19 13 12 20 12 29a12 12 0 0 0 24 0c0-9-7-16-12-24Z" />
        <path d="M18 30a6 6 0 0 0 6 6" />
      </svg>
    );
  }
  if (name === "tools") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="m29 9 10 10-20 20H9v-10L29 9Z" />
        <path d="m25 13 10 10M13 30l5 5M8 12h12M14 6v12" />
      </svg>
    );
  }
  if (name === "sparkles") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 7c1 9 5 13 14 14-9 1-13 5-14 14-1-9-5-13-14-14 9-1 13-5 14-14Z" />
        <path d="M38 5c.5 4 2.5 6 6 6.5-3.5.5-5.5 2.5-6 6.5-.5-4-2.5-6-6-6.5 3.5-.5 5.5-2.5 6-6.5ZM9 32c.5 4 2.5 6 6 6.5-3.5.5-5.5 2.5-6 6.5-.5-4-2.5-6-6-6.5 3.5-.5 5.5-2.5 6-6.5Z" />
      </svg>
    );
  }
  if (name === "fan") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="4" />
        <circle cx="24" cy="24" r="18" />
        <path d="M24 20c-2-5-1-10 3-12 4-1 7 2 6 6-1 4-5 7-9 10M28 24c5-2 10-1 12 3 1 4-2 7-6 6-4-1-7-5-10-9M24 28c2 5 1 10-3 12-4 1-7-2-6-6 1-4 5-7 9-10M20 24c-5 2-10 1-12-3-1-4 2-7 6-6 4 1 7 5 10 9" />
      </svg>
    );
  }
  if (name === "bolt") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M28 4 12 27h12l-4 17 16-25H24l4-15Z" />
      </svg>
    );
  }
  if (name === "gear") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="7" />
        <path d="m19 6-1 5-4 2-5-2-4 7 4 3v5l-4 3 4 7 5-2 4 2 1 5h10l1-5 4-2 5 2 4-7-4-3v-5l4-3-4-7-5 2-4-2-1-5H19Z" />
      </svg>
    );
  }
  if (name === "calendar") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="7" y="10" width="34" height="31" rx="5" />
        <path d="M15 6v9M33 6v9M7 19h34M15 27h5M28 27h5M15 34h5" />
      </svg>
    );
  }
  if (name === "gauge") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M8 37a19 19 0 1 1 32 0H8Z" />
        <path d="m24 29 9-10M14 34h20M13 25l4 2M35 25l-4 2M24 16v4" />
        <circle cx="24" cy="30" r="3" />
      </svg>
    );
  }
  if (name === "duct") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="5" y="12" width="20" height="24" rx="4" />
        <path d="M25 18h7c6 0 11 5 11 11v7M11 18h8M11 24h8M11 30h8M36 33l7 3-3 7" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="5" />
      <path d="M24 5v38M8 14l32 20M8 34l32-20M19 8l5-3 5 3M19 40l5 3 5-3M10 19l-2-5 5-1M38 29l2 5-5 1M10 29l-2 5 5 1M38 19l2-5-5-1" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.4.7 3.7.7.6 0 1 .4 1 1v3.5c0 .6-.4 1-1 1A17.2 17.2 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.7 3.7.1.4 0 .8-.2 1.1l-2.4 2Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M27.3 4.6A15.7 15.7 0 0 0 2.6 23.5L.5 31.2l7.9-2.1a15.7 15.7 0 0 0 18.9-24.5Zm-11 23.1c-2.4 0-4.8-.7-6.8-1.9l-.5-.3-4.7 1.2 1.3-4.6-.3-.5A12.7 12.7 0 1 1 16.3 27.7Zm7-9.5c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.3-.5.3-.8.1-2.3-1.1-3.8-2-5.3-4.6-.4-.7.4-.7 1.1-2.2.1-.3 0-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.5 1.5-1.5 3.6s1.5 4.1 1.7 4.4c.2.3 3 4.6 7.3 6.4 2.7 1.2 3.8 1.3 5.2 1.1.8-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.2-.2-.5-.3-.9-.5Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />

      <a className="skip-link" href="#main">
        الانتقال إلى المحتوى
      </a>

      <div className="topbar">
        <div className="container topbar__inner">
          <p>
            <span className="topbar__dot" />
            خدمة إصلاح تكييف الهواء داخل مدينة الرياض
          </p>
          <a href={phoneHref} aria-label={`اتصل على ${phoneDisplay}`}>
            <span dir="ltr">{phoneDisplay}</span>
            <PhoneIcon />
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="container header__inner">
          <a href="#" className="brand-link" aria-label="بيلاوال - الصفحة الرئيسية">
            <Brand />
          </a>
          <nav className="main-nav" aria-label="التنقل الرئيسي">
            <a href="#services">خدماتنا</a>
            <a href="#why">لماذا بيلاوال؟</a>
            <a href="#areas">نطاق الخدمة</a>
            <a href="#faq">الأسئلة الشائعة</a>
          </nav>
          <a className="header-call" href={phoneHref}>
            <PhoneIcon />
            <span>
              <small>اتصل الآن</small>
              <b dir="ltr">{phoneDisplay}</b>
            </span>
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero">
          <div className="hero__glow hero__glow--one" />
          <div className="hero__glow hero__glow--two" />
          <div className="container hero__grid">
            <div className="hero__content">
              <div className="eyebrow">
                <span className="eyebrow__icon">❄</span>
                خدمة تكييف في نطاق مدينة الرياض
              </div>
              <h1>
                تبريد أفضل يبدأ من
                <span> فحصٍ أدق</span>
              </h1>
              <p className="hero__lead">
                بيلاوال لخدمات التبريد والتكييف يقدم حلول فحص وصيانة وتنظيف
                وإصلاح المكيفات للمنازل والمنشآت داخل الرياض، مع تواصل مباشر
                وسهل لحجز الخدمة.
              </p>
              <div className="hero__actions">
                <a className="button button--primary" href={phoneHref}>
                  <PhoneIcon />
                  اتصل لطلب الخدمة
                </a>
                <a
                  className="button button--whatsapp"
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon />
                  تواصل عبر واتساب
                </a>
              </div>
              <div className="hero__trust" aria-label="مزايا الخدمة">
                <span>
                  <i>✓</i> خدمة داخل الرياض
                </span>
                <span>
                  <i>✓</i> فحص قبل الصيانة
                </span>
                <span>
                  <i>✓</i> تواصل مباشر
                </span>
              </div>
            </div>

            <div className="hero__visual" aria-label="هوية بيلاوال للتبريد والتكييف">
              <div className="visual-card">
                <div className="visual-card__label">
                  <span>حلول تبريد</span>
                  <b>الرياض</b>
                </div>
                <div className="cooling-orbit">
                  <span className="orbit orbit--one" />
                  <span className="orbit orbit--two" />
                  <span className="orbit orbit--three" />
                  <div className="cooling-orbit__center">
                    <span className="brand__mark brand__mark--large">
                      <svg viewBox="0 0 64 64" aria-hidden="true">
                        <circle cx="32" cy="32" r="27" />
                        <path d="M32 12v40M15 22l34 20M15 42l34-20" />
                        <circle cx="32" cy="32" r="7" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="temperature-card">
                  <span className="temperature-card__icon">❄</span>
                  <span>
                    <small>خدمة متخصصة</small>
                    <b>تبريد • صيانة • تنظيف</b>
                  </span>
                </div>
              </div>
              <div className="mini-card mini-card--top">
                <span>✦</span>
                <div>
                  <small>نطاق الخدمة</small>
                  <b>مدينة الرياض</b>
                </div>
              </div>
              <div className="mini-card mini-card--bottom">
                <span>✓</span>
                <div>
                  <small>ابدأ بخطوة</small>
                  <b>احجز الفحص</b>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="quick-strip" aria-label="بيانات النشاط">
          <div className="container quick-strip__grid">
            <div>
              <span>01</span>
              <p>
                <small>الفئة</small>
                <b>إصلاح تكييف الهواء</b>
              </p>
            </div>
            <div>
              <span>02</span>
              <p>
                <small>المدينة</small>
                <b>الرياض</b>
              </p>
            </div>
            <div>
              <span>03</span>
              <p>
                <small>التواصل</small>
                <b>اتصال وواتساب</b>
              </p>
            </div>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-kicker">خدمات التكييف في الرياض</span>
                <h2>حلول عملية لأعطال التبريد الشائعة</h2>
              </div>
              <p>
                نبدأ بفهم حالة المكيف ثم نحدد الخدمة المناسبة، من التنظيف
                والصيانة إلى معالجة ضعف التبريد ونقل الوحدات.
              </p>
            </div>
            <div className="services__grid">
              {services.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <div className="service-card__top">
                    <span className="service-card__icon">
                      <ServiceIcon name={service.icon} />
                    </span>
                    <span className="service-card__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                    اطلب الخدمة
                    <span aria-hidden="true">←</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section why" id="why">
          <div className="container why__grid">
            <div className="why__intro">
              <span className="section-kicker section-kicker--light">
                لماذا تختار بيلاوال؟
              </span>
              <h2>خدمة تبدأ بالفهم وتصل إلى الحل المناسب</h2>
              <p>
                لأن أعطال المكيفات قد تتشابه في ظاهرها وتختلف في أسبابها، نضع
                الفحص والتشخيص في بداية كل طلب صيانة، ثم نوضح الإجراء المناسب
                لحالة المكيف.
              </p>
              <a className="button button--ice" href={phoneHref}>
                <PhoneIcon />
                تحدث معنا الآن
              </a>
              <div className="why__visual" aria-hidden="true">
                <span className="why__snowflake">❄</span>
                <div>
                  <small>بيلاوال للتبريد والتكييف</small>
                  <b>راحة تبدأ من هواءٍ أبرد</b>
                </div>
              </div>
            </div>
            <div className="why__list">
              {whyItems.map((item) => (
                <article key={item.number}>
                  <span>{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process">
          <div className="container">
            <div className="section-heading section-heading--center">
              <div>
                <span className="section-kicker">كيف تطلب الخدمة؟</span>
                <h2>أربع خطوات واضحة من التواصل إلى التشغيل</h2>
              </div>
              <p>
                عملية بسيطة تساعدنا على فهم الطلب وتنسيق الخدمة المناسبة داخل
                الرياض.
              </p>
            </div>
            <div className="process__grid">
              {processSteps.map((step, index) => (
                <article className="process-card" key={step.number}>
                  <div className="process-card__number">{step.number}</div>
                  <div className="process-card__line" aria-hidden="true">
                    <span />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <span className="process-card__arrow" aria-hidden="true">
                      ←
                    </span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section areas" id="areas">
          <div className="container areas__grid">
            <div className="areas__content">
              <span className="section-kicker">نطاق الخدمة في الرياض</span>
              <h2>نصل إليك داخل مدينة الرياض</h2>
              <p>
                بيلاوال لخدمات التبريد والتكييف نشاط تجاري في نطاق خدمة بمدينة
                الرياض. يمكنك التواصل وتحديد الحي ونوع المكيف والمشكلة الظاهرة
                لتنسيق موعد الفحص أو الصيانة.
              </p>
              <div className="areas__tags" aria-label="مناطق الخدمة">
                {areas.map((area) => (
                  <span key={area}>
                    <i>✓</i>
                    {area}
                  </span>
                ))}
              </div>
              <a
                className="button button--whatsapp"
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                أرسل موقعك عبر واتساب
              </a>
            </div>
            <div className="areas__visual" aria-hidden="true">
              <div className="riyadh-map">
                <div className="riyadh-map__rings">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="riyadh-map__pin">
                  <span>⌖</span>
                  <b>الرياض</b>
                </div>
                <div className="riyadh-map__label riyadh-map__label--north">
                  شمال الرياض
                </div>
                <div className="riyadh-map__label riyadh-map__label--east">
                  شرق الرياض
                </div>
                <div className="riyadh-map__label riyadh-map__label--west">
                  غرب الرياض
                </div>
                <div className="riyadh-map__label riyadh-map__label--south">
                  جنوب الرياض
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-kicker">بيلاوال على الخريطة</span>
                <h2>خدمة تكييف ضمن نطاق مدينة الرياض</h2>
              </div>
              <p>
                الخريطة توضح نطاق النشاط داخل الرياض. للحجز، تواصل وأرسل موقعك
                ونوع المكيف ووصفًا مختصرًا للمشكلة.
              </p>
            </div>
            <div className="contact__grid">
              <div className="map-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d927867.2329103705!2d46.6911232!3d24.7103488!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89cf98f15ea465a1%3A0xf4c9b61eea4758f7!2z2KjZitmE2KfZiNin2YQg2YTYrtiv2YXYp9iqINin2YTYqtio2LHZitivINmI2KfZhNiq2YPZitmK2YE!5e0!3m2!1sar!2ssa!4v1784837613915!5m2!1sar!2ssa"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="خريطة نطاق خدمة بيلاوال لخدمات التبريد والتكييف في الرياض"
                />
              </div>
              <aside className="contact-card">
                <div className="contact-card__brand">
                  <Brand />
                </div>
                <span className="contact-card__badge">
                  خدمة إصلاح تكييف الهواء
                </span>
                <h3>هل المكيف لا يبرد بالشكل المطلوب؟</h3>
                <p>
                  تواصل معنا وحدد نوع المكيف والعطل وموقعك داخل الرياض لبدء
                  تنسيق الخدمة.
                </p>
                <div className="contact-card__info">
                  <a href={phoneHref}>
                    <span className="contact-card__icon">
                      <PhoneIcon />
                    </span>
                    <span>
                      <small>رقم الاتصال</small>
                      <b dir="ltr">{phoneDisplay}</b>
                    </span>
                  </a>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="contact-card__icon contact-card__icon--wa">
                      <WhatsAppIcon />
                    </span>
                    <span>
                      <small>محادثة مباشرة</small>
                      <b>واتساب بيلاوال</b>
                    </span>
                  </a>
                </div>
                <div className="contact-card__actions">
                  <a className="button button--primary" href={phoneHref}>
                    اتصل لطلب الخدمة
                  </a>
                  <a
                    className="button button--whatsapp"
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    واتساب
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="container faq__grid">
            <div className="faq__intro">
              <span className="section-kicker">الأسئلة الشائعة</span>
              <h2>إجابات سريعة قبل طلب صيانة المكيف</h2>
              <p>
                أهم ما يحتاج العميل معرفته عن خدمات إصلاح وتنظيف وتركيب
                المكيفات في الرياض.
              </p>
              <div className="faq__help">
                <span>لم تجد إجابتك؟</span>
                <a href={phoneHref}>اتصل بنا على {phoneDisplay}</a>
              </div>
            </div>
            <div className="faq__items">
              {faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary>
                    <span>{faq.question}</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-cta__inner">
            <div>
              <span>خدمة تبريد وتكييف في الرياض</span>
              <h2>ابدأ بحجز الفحص الآن</h2>
              <p>
                اتصال واحد أو رسالة واتساب تكفي لبدء تنسيق الخدمة ومعرفة
                تفاصيل العطل.
              </p>
            </div>
            <div className="final-cta__actions">
              <a className="button button--light" href={phoneHref}>
                <PhoneIcon />
                <span dir="ltr">{phoneDisplay}</span>
              </a>
              <a
                className="button button--whatsapp-solid"
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                راسلنا على واتساب
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__top">
          <div className="footer__about">
            <Brand />
            <p>
              خدمة إصلاح وصيانة وتنظيف وتركيب المكيفات داخل نطاق مدينة
              الرياض، مع اتصال وواتساب مباشر لحجز الخدمة.
            </p>
          </div>
          <div className="footer__links">
            <h3>روابط سريعة</h3>
            <a href="#services">خدماتنا</a>
            <a href="#why">لماذا بيلاوال؟</a>
            <a href="#areas">نطاق الخدمة</a>
            <a href="#faq">الأسئلة الشائعة</a>
          </div>
          <div className="footer__links">
            <h3>أبرز الخدمات</h3>
            <a href="#services">إصلاح مكيفات سبليت</a>
            <a href="#services">تنظيف وغسيل المكيفات</a>
            <a href="#services">تعبئة فريون وكشف تسرب</a>
            <a href="#services">فك وتركيب المكيفات</a>
          </div>
          <div className="footer__contact">
            <h3>تواصل مع بيلاوال</h3>
            <p>نطاق الخدمة: مدينة الرياض</p>
            <a href={phoneHref} dir="ltr">
              {phoneDisplay}
            </a>
            <a
              className="footer__whatsapp"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              واتساب
            </a>
          </div>
        </div>

        <div className="container developer-card">
          <div className="developer-card__icon" aria-hidden="true">
            <span>&lt;/&gt;</span>
          </div>
          <div className="developer-card__content">
            <p>
              تم التصميم والتطوير بواسطة{" "}
              <a
                href="https://eslam-elshikh.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                المهندس إسلام الشيخ
              </a>
            </p>
            <p lang="en" dir="ltr">
              Developed By{" "}
              <a
                href="https://eslam-elshikh.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Eng. Eslam Elshikh
              </a>
            </p>
            <small lang="en" dir="ltr">
              Cybersecurity Engineer | Web Developer | Google Product Expert
            </small>
          </div>
          <a
            className="developer-card__whatsapp"
            href="https://wa.me/966547194788"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تواصل مع المطور عبر واتساب"
          >
            <WhatsAppIcon />
            <span>تواصل مع المطور</span>
          </a>
        </div>

        <div className="footer__bottom">
          <div className="container">
            <p>
              © 2026 بيلاوال لخدمات التبريد والتكييف. جميع الحقوق محفوظة.
            </p>
            <p>خدمة إصلاح تكييف الهواء في الرياض</p>
          </div>
        </div>
      </footer>

      <div className="floating-actions" aria-label="تواصل سريع">
        <a
          className="float-button float-button--whatsapp"
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="تواصل مع بيلاوال عبر واتساب"
        >
          <WhatsAppIcon />
          <span>واتساب</span>
        </a>
        <a
          className="float-button float-button--call"
          href={phoneHref}
          aria-label={`اتصل ببيلاوال على ${phoneDisplay}`}
        >
          <PhoneIcon />
          <span>اتصال</span>
        </a>
      </div>

      <div className="mobile-contact-bar">
        <a href={phoneHref}>
          <PhoneIcon />
          <span>اتصل الآن</span>
        </a>
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon />
          <span>واتساب</span>
        </a>
      </div>
    </>
  );
}
