import React, { createContext, useState, useEffect, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
  ar: {
    // Header & Navigation
    'nav.home': 'الرئيسية',
    'nav.results': 'النتائج',
    'nav.challenge': 'التحدي',
    'nav.services': 'الخدمات',
    'nav.whyUs': 'لماذا نحن',
    'nav.purpose': 'هدفنا',
    'nav.bookConsultation': 'احجز استشارة مجانية',
    'nav.bookNow': 'احجز الآن',
    'nav.logo': 'الإحسان',

    // Hero Section
    'hero.eyebrow': 'شريك نمو الرعاية الصحية',
    'hero.static1': 'شريككم في',
    'hero.static2': 'للمنشآت الصحية',
    'hero.rotator.growth': 'النمو',
    'hero.rotator.profit': 'مضاعفة الأرباح',
    'hero.rotator.contracts': 'تحسين العقود',
    'hero.rotator.efficiency': 'الكفاءة التشغيلية',
    'hero.subtitle': 'نعمل على كشف التسربات التشغيلية الخفية، وتحسين عقود شركات التأمين، وتسريع التحصيل لتحويل التميز السريري إلى أقصى ربحية ممكنة.',
    'hero.cta.primary': 'احجز استشارة مجانية',
    'hero.cta.secondary': 'احصل على تحليل مجاني للإيرادات',

    // Results Bar
    'results.eyebrow': 'نتائج مثبتة',
    'results.title': 'تحقيق نمو قابل للقياس',
    'results.subtitle': 'تعتمد تدخلاتنا الاستشارية في مجال الرعاية الصحية على مقاييس واقعية، مع التركيز على العلاقات مع جهات الدفع، وتحصيل الإيرادات، والكفاءة التشغيلية.',
    'results.financialGrowth': 'النمو المالي',
    'results.avgRevenueGrowth': 'متوسط نمو الإيرادات المحقق عبر المنشآت',
    'results.corePerformanceFocus': 'التركيز الأساسي على الأداء',
    'results.eliminateLeakage': 'القضاء على تسرب تقديم المطالبات',
    'results.renegotiateContracts': 'إعادة تفاوض عقود جهات الدفع ومقدمي الخدمة',
    'results.speedUpCollections': 'تسريع عملية التحصيل وتقليص فترة تحصيل الديون (DSO)',
    'results.operationalVisibility': 'تأسيس رؤية تشغيلية كاملة',
    'results.contractsLabel': 'العقود',
    'results.contractsText': 'أكثر من 120 عقداً تجارياً تم إعادة التفاوض عليها وتحسينها',
    'results.efficiencyLabel': 'الكفاءة',
    'results.efficiencyText': 'متوسط خفض فترة تحصيل الديون (DSO)',

    // Problem Section
    'problem.eyebrow': 'المشكلة الخفية',
    'problem.title': 'المشكلة الحقيقية ليست نقصاً في المرضى.',
    'problem.subtitle': 'تعمل العديد من المنشآت بطاقة استيعابية عالية ومع ذلك تعاني من الربحية. السبب الحقيقي يكمن في العقبات الإدارية والتشغيلية التي تلتهم هوامش ربحكم.',
    'problem.leakage.title': 'تسرب الإيرادات',
    'problem.leakage.desc': 'عدم تصحيح رفض المطالبات وأخطاء إرسالها، مما يؤدي إلى خسارة إيرادات كبيرة.',
    'problem.contracts.title': 'العقود الضعيفة',
    'problem.contracts.desc': 'اتفاقيات جهات الدفع وشركات التأمين قديمة، مما يضيع فرصاً مالية مع كل مريض تتم معاينته.',
    'problem.collections.title': 'بطء التحصيلات',
    'problem.collections.desc': 'تأخر دورات تحصيل الحسابات المستحقة يعيق التدفقات النقدية التشغيلية الأساسية.',
    'problem.insurance.title': 'إدارة غير فعالة للتأمين',
    'problem.insurance.desc': 'ضعف تتبع موافقات التأمين وأهليتها يؤدي إلى تقديم خدمات رعاية صحية دون تعويض مالي.',
    'problem.partnerships.title': 'شراكات غير مستغلة',
    'problem.partnerships.desc': 'تبقى اتفاقيات الموردين والشركاء وشبكات مقدمي الخدمات دون تفاوض كافٍ يفيد المنشأة.',
    'problem.visibility.title': 'ضعف الرؤية المالية',
    'problem.visibility.desc': 'غياب التقارير التشغيلية المتكاملة يترك الإداريين يتخذون القرارات في غياب الرؤية الواضحة.',
    'problem.quote': 'قد تعمل المنشآت الصحية بكامل طاقتها السريرية ومع ذلك لا تحقق الجدوى المالية الكاملة. التسربات إدارية وليست طبية.',

    // Before & After
    'beforeAfter.eyebrow': 'التحول',
    'beforeAfter.title': 'من الفرص الضائعة إلى النمو القابل للقياس',
    'beforeAfter.subtitle': 'مواءمة التفاني السريري مع دقة الأعمال. نحول العمليات الضعيفة إلى محركات عالية الإنتاجية.',
    'beforeAfter.beforeTitle': 'قبل الإحسان',
    'beforeAfter.afterTitle': 'مع الإحسان',
    'beforeAfter.before1': 'تدفقات إيرادات غير مستقرة وبها تسربات',
    'beforeAfter.before2': 'عقود تأمين منخفضة العائد وغير محسّنة',
    'beforeAfter.before3': 'تحصيلات بطيئة ومتأخرة وفترة تحصيل ديون طويلة',
    'beforeAfter.before4': 'فرص ضائعة للنمو والتوسع',
    'beforeAfter.after1': 'تدفقات نقدية أقوى وقابلة للتنبؤ',
    'beforeAfter.after2': 'عقود مربحة للغاية تمت إعادة التفاوض عليها',
    'beforeAfter.after3': 'تحصيل أسرع وتقليص دورات تحصيل الديون',
    'beforeAfter.after4': 'نمو تشغيلي متسق ومنظم',

    // Services
    'services.eyebrow': 'كيف نساعدكم',
    'services.title': 'ثلاث ركائز استراتيجية لنمو الرعاية الصحية',
    'services.subtitle': 'نقوم بتنفيذ تدخلات مستهدفة عبر أنظمة الفوترة، والعلاقات مع شركات التأمين، ونظم العمل لبناء عمليات مستدامة وعالية الربحية.',
    'services.pillar1.title': 'نمو الإيرادات والتدفق النقدي',
    'services.pillar1.p1': 'تحليل هيكل الفواتير للمزودين وشركات التأمين',
    'services.pillar1.p2': 'تحديد نقاط تسرب المطالبات المرسلة',
    'services.pillar1.p3': 'تدقيق التدفقات المالية التشغيلية',
    'services.pillar1.p4': 'كشف فرص الإيرادات الخفية',
    'services.pillar1.p5': 'تحويل التحليلات إلى ربحية فورية',
    'services.pillar2.title': 'تطوير العقود والتأمين',
    'services.pillar2.p1': 'مراجعة شروط التأمين الحالية',
    'services.pillar2.p2': 'تحديد فرص إعادة التفاوض',
    'services.pillar2.p3': 'زيادة القيمة المالية للخدمات الطبية المقدمة',
    'services.pillar2.p4': 'التفاوض على شروط أفضل مع شركات التأمين',
    'services.pillar2.p5': 'جذب وتأمين اتفاقيات جهات دفع جديدة',
    'services.pillar3.title': 'الحوكمة والتميز التشغيلي',
    'services.pillar3.p1': 'تصميم الهياكل التنظيمية وتحسينها',
    'services.pillar3.p2': 'وضع سياسات تشغيلية واضحة وقوية',
    'services.pillar3.p3': 'تحسين الضوابط والرقابة الإدارية الداخلية',
    'services.pillar3.p4': 'تطوير تقارير الأداء المالي',
    'services.pillar3.p5': 'تقديم دعم اتخاذ القرار القائم على البيانات',
    'services.pillar3.p6': 'تبسيط سير العمل في العيادات والاستقبال',

    // Why Al Ihsan
    'why.eyebrow': 'لماذا الإحسان',
    'why.titleStatic': 'شريك النتائج.',
    'why.subtitle': 'نحن لا نكتفي بالإشارة إلى المشكلات أو تسليم التقارير. بل نوائم منهجياتنا الاستشارية مع التنفيذ التشغيلي النشط. من خلال الاندماج داخل عملياتكم، نضمن تأسيس الحلول وتدقيقها وتحسينها لدفع عجلة النمو الحقيقي.',
    'why.q1': 'من يدير أعمالكم؟',
    'why.t1': 'الرعاية الصحية القائمة على ريادة الأعمال',
    'why.d1': 'نحن نتخصص تحديداً في العمليات التجارية والمالية والإدارية للمنشآت الصحية، تاركين الرعاية السريرية لممارسيكم.',
    'why.q2': 'كيف نضمن النتائج؟',
    'why.t2': 'نتائج قابلة للقياس',
    'why.d2': 'نربط أدائنا مباشرة بمؤشرات مالية قابلة للقياس، من نمو الإيرادات إلى مقاييس استرداد المطالبات.',
    'why.q3': 'كيف ندقق في تسرب الأموال؟',
    'why.t3': 'الإيرادات + التشغيل',
    'why.d3': 'نغطي دورة العمل بأكملها، ونربط عمليات التسجيل والتوثيق في المكاتب الأمامية بأعمال الفوترة وتفاوض العقود في المكاتب الخلفية.',
    'why.q4': 'من يطبق الحلول؟',
    'why.t4': 'الشراكة الاستراتيجية',
    'why.d4': 'نعمل جنباً إلى جنب مع فريق القيادة لديكم لتطبيق الأنظمة ونقل القدرات، بدلاً من تقديم تقارير استشارية غير فعالة.',

    // Purpose (Vision & Mission)
    'purpose.eyebrow': 'هدفنا',
    'purpose.title': 'قيادة مستقبل تقديم الرعاية الصحية',
    'purpose.subtitle': 'نوائم الاستراتيجيات التجارية مع نماذج الدعم السريري لمساعدة مسؤولي الرعاية الصحية على تأمين المستقبل المالي لمنظماتهم.',
    'purpose.vision.title': 'رؤيتنا',
    'purpose.vision.text': 'أن نكون الشريك الرائد للنمو وإدارة المصاريف الطبية في قطاع الرعاية الصحية، واضعين معايير الكفاءة المالية والاستدامة الإدارية.',
    'purpose.mission.title': 'رسالتنا',
    'purpose.mission.text': 'تمكين المنشآت الصحية من التركيز على تقديم رعاية سريرية عالية الجودة، بينما تعمل الإحسان على تحسين الربحية، وتطوير أداء الأعمال، وإدارة المصاريف الطبية، وبناء نظم تشغيل مستدامة.',

    // Final CTA & Form
    'cta.eyebrow': 'البدء',
    'cta.title': 'يمكن لمنشأتكم الصحية تحقيق أكثر مما تحققه اليوم.',
    'cta.subtitle': 'الفرق يكمن في كيفية إدارة الفرص الإدارية. شارك مع الإحسان لاستعادة الهوامش الضائعة، وتحسين عقود شركات التأمين، وفرض سيطرة تشغيلية كاملة.',
    'cta.benefit1': 'مراجعة تشغيلية سرية بنسبة 100%',
    'cta.benefit2': 'يقودها أخصائيون كبار في الرعاية الصحية',
    'cta.benefit3': 'تقرير شامل عن نقاط التسرب',
    'cta.benefit4': 'دون أي التزام أو تعهد مالي',
    'cta.form.title': 'طلب فحص تشغيلي مجاني',
    'cta.form.subtitle': 'أدخل تفاصيلك أدناه لجدولة استشارتك التشغيلية السرية.',
    'form.name.label': 'الاسم الكامل *',
    'form.name.placeholder': 'أحمد محمد',
    'form.facility.label': 'اسم المنشأة *',
    'form.facility.placeholder': 'مستشفى المدينة العام',
    'form.title.label': 'المسمى الوظيفي *',
    'form.title.placeholder': 'الرئيس التنفيذي',
    'form.phone.label': 'رقم الهاتف *',
    'form.email.label': 'البريد الإلكتروني *',
    'form.email.placeholder': 'name@facility.com',
    'form.challenge.label': 'التحدي التشغيلي الرئيسي (اختياري)',
    'form.challenge.placeholder': 'صف بإيجاز تحدي الإيرادات أو الإدارة الحالي الخاص بك...',
    'form.submit': 'احجز استشارتي المجانية',
    'form.promise': 'تقييم تشخيصي مجاني وآمن خلال 24 ساعة.',
    'form.success.title': 'شكراً لك!',
    'form.success.text': 'تم استلام طلبك للحصول على استشارة مجانية. سيتواصل معك أحد مستشارينا الرئيسيين في الرعاية الصحية خلال 24 ساعة.',
    'form.err.name': 'الاسم الكامل مطلوب',
    'form.err.facility': 'اسم المنشأة مطلوب',
    'form.err.title': 'المسمى الوظيفي مطلوب',
    'form.err.phone.req': 'رقم الهاتف مطلوب',
    'form.err.phone.val': 'يرجى إدخال رقم هاتف صالح',
    'form.err.email.req': 'البريد الإلكتروني مطلوب',
    'form.err.email.val': 'يرجى إدخال عنوان بريد إلكتروني صالح',

    // Footer
    'footer.tagline': 'شريك استشارات الرعاية الصحية الموجهة للشركات (B2B) المتخصص في مضاعفة الإيرادات، وتدقيق تسرب المطالبات، وتصميم السياسات التشغيلية.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.contactInfo': 'معلومات الاتصال',
    'footer.location': 'طرابلس، ليبيا',
    'footer.copyright': 'الإحسان. جميع الحقوق محفوظة.',
    'footer.credits': 'استشارات الرعاية الصحية المستوحاة من النموذج السويسري'
  },
  en: {
    // Header & Navigation
    'nav.home': 'Home',
    'nav.results': 'Results',
    'nav.challenge': 'Challenge',
    'nav.services': 'Services',
    'nav.whyUs': 'Why Us',
    'nav.purpose': 'Purpose',
    'nav.bookConsultation': 'Book a Free Consultation',
    'nav.bookNow': 'Book Now',
    'nav.logo': 'Al Ihsan',

    // Hero Section
    'hero.eyebrow': 'Healthcare Growth Partner',
    'hero.static1': 'Your Partner in',
    'hero.static2': 'for Healthcare Facilities',
    'hero.rotator.growth': 'Growth',
    'hero.rotator.profit': 'Profit Maximization',
    'hero.rotator.contracts': 'Contract Optimization',
    'hero.rotator.efficiency': 'Operational Efficiency',
    'hero.subtitle': 'We uncover hidden operational leaks, optimize payer contracts, and accelerate collections to turn clinical excellence into maximum profitability.',
    'hero.cta.primary': 'Book a Free Consultation',
    'hero.cta.secondary': 'Get a Free Revenue Analysis',

    // Results Bar
    'results.eyebrow': 'Proven Outcomes',
    'results.title': 'Delivering Quantifiable Growth',
    'results.subtitle': 'Our healthcare consulting interventions are driven by real-world metrics, focusing on payer relations, revenue collections, and operational efficiency.',
    'results.financialGrowth': 'FINANCIAL GROWTH',
    'results.avgRevenueGrowth': 'Average revenue growth supported across facilities',
    'results.corePerformanceFocus': 'Core Performance Focus',
    'results.eliminateLeakage': 'Eliminate claim submission leakage',
    'results.renegotiateContracts': 'Renegotiate payer & provider contracts',
    'results.speedUpCollections': 'Speed up collections and reduce DSO',
    'results.operationalVisibility': 'Establish full operational visibility',
    'results.contractsLabel': 'CONTRACTS',
    'results.contractsText': 'Commercial contracts renegotiated & optimized',
    'results.efficiencyLabel': 'EFFICIENCY',
    'results.efficiencyText': 'Average reduction in Days Sales Outstanding (DSO)',

    // Problem Section
    'problem.eyebrow': 'The Hidden Problem',
    'problem.title': 'The real problem is not a lack of patients.',
    'problem.subtitle': 'Many facilities operate at high capacity yet struggle with profitability. The true culprit is administrative and operational friction swallowing your margins.',
    'problem.leakage.title': 'Revenue Leakage',
    'problem.leakage.desc': 'Claim denials and submission errors go uncorrected, leading to substantial lost revenue.',
    'problem.contracts.title': 'Weak Contracts',
    'problem.contracts.desc': 'Payer and insurer agreements are outdated, leaving money on the table for every patient seen.',
    'problem.collections.title': 'Slow Collections',
    'problem.collections.desc': 'Long cycles in outstanding accounts receivable delay essential operating cash flow.',
    'problem.insurance.title': 'Ineffective Insurance Management',
    'problem.insurance.desc': 'Poor tracking of insurance approvals and eligibilities leads to uncompensated care.',
    'problem.partnerships.title': 'Unused Partnerships',
    'problem.partnerships.desc': 'Valuable vendor, supplier, and provider network agreements remain under-negotiated.',
    'problem.visibility.title': 'Weak Financial Visibility',
    'problem.visibility.desc': 'Lack of integrated operational reporting leaves executives making decisions in the dark.',
    'problem.quote': '"Healthcare facilities may operate at full clinical capacity and still miss full financial viability. The leaks are administrative, not medical."',

    // Before & After
    'beforeAfter.eyebrow': 'The Transformation',
    'beforeAfter.title': 'From Missed Opportunities to Measurable Growth',
    'beforeAfter.subtitle': 'Aligning clinical dedication with business precision. We transform loose operations into high-yielding engines.',
    'beforeAfter.beforeTitle': 'Before Al Ihsan',
    'beforeAfter.afterTitle': 'After Al Ihsan',
    'beforeAfter.before1': 'Unstable and leaky revenue streams',
    'beforeAfter.before2': 'Low-yield, unoptimized payer contracts',
    'beforeAfter.before3': 'Slow, delayed collections and high DSO',
    'beforeAfter.before4': 'Missed opportunities for growth and scale',
    'beforeAfter.after1': 'Stronger, predictable cash flows',
    'beforeAfter.after2': 'Highly profitable, renegotiated contracts',
    'beforeAfter.after3': 'Faster collections and reduced DSO cycles',
    'beforeAfter.after4': 'Consistent, structured operational growth',

    // Services
    'services.eyebrow': 'How We Help',
    'services.title': 'Three Strategic Pillars for Healthcare Growth',
    'services.subtitle': 'We deploy targeted interventions across billing, payer relations, and workflow systems to build highly profitable, sustainable operations.',
    'services.pillar1.title': 'Revenue Growth & Cash Flow',
    'services.pillar1.p1': 'Analyze provider & payer billing structures',
    'services.pillar1.p2': 'Identify claim submission leakage points',
    'services.pillar1.p3': 'Audit operational financial flows',
    'services.pillar1.p4': 'Uncover hidden revenue opportunities',
    'services.pillar1.p5': 'Turn analytics into immediate profitability',
    'services.pillar2.title': 'Contracts & Insurance Expansion',
    'services.pillar2.p1': 'Review existing insurance terms',
    'services.pillar2.p2': 'Identify renegotiation opportunities',
    'services.pillar2.p3': 'Increase value of medical services',
    'services.pillar2.p4': 'Negotiate favorable terms with insurers',
    'services.pillar2.p5': 'Attract and secure new payer agreements',
    'services.pillar3.title': 'Governance & Operational Excellence',
    'services.pillar3.p1': 'Design and optimize organizational structures',
    'services.pillar3.p2': 'Establish clear, robust operational policies',
    'services.pillar3.p3': 'Improve administrative internal controls',
    'services.pillar3.p4': 'Enhance financial performance reporting',
    'services.pillar3.p5': 'Provide data-driven decision support',
    'services.pillar3.p6': 'Streamline clinical & front-desk workflows',

    // Why Al Ihsan
    'why.eyebrow': 'Why Al Ihsan',
    'why.titleStatic': 'A Results Partner.',
    'why.subtitle': 'We do not just point out problems or hand over reports. We align our consulting methodologies with active operational implementation. By embedding inside your operations, we ensure solutions are established, audited, and optimized to drive real growth.',
    'why.q1': 'Who manages your business?',
    'why.t1': 'Business-First Healthcare',
    'why.d1': 'We specialize specifically in the business, financial, and administrative operations of healthcare facilities, leaving clinical care to your practitioners.',
    'why.q2': 'How do we guarantee outcomes?',
    'why.t2': 'Measurable Outcomes',
    'why.d2': 'We tie our performance directly to quantifiable financial milestones, from revenue growth to claim recovery metrics.',
    'why.q3': 'How do we audit leakages?',
    'why.t3': 'Revenue + Operations',
    'why.d3': 'We cover the entire lifecycle, connecting front-office check-ins and documentation to back-office billing and contract negotiation.',
    'why.q4': 'Who implements the solutions?',
    'why.t4': 'Strategic Partnership',
    'why.d4': 'We work side-by-side with your leadership team to implement systems and transfer capabilities, rather than delivering passive consulting reports.',

    // Purpose (Vision & Mission)
    'purpose.eyebrow': 'Our Purpose',
    'purpose.title': 'Driving the Future of Healthcare Delivery',
    'purpose.subtitle': 'We align business strategies with clinical support models to help healthcare executives secure their organizations\' financial future.',
    'purpose.vision.title': 'Our Vision',
    'purpose.vision.text': 'To become the leading partner for growth and medical expense management in the healthcare sector, establishing the standards for financial efficiency and administrative sustainability.',
    'purpose.mission.title': 'Our Mission',
    'purpose.mission.text': 'To enable healthcare facilities to focus on delivering high-quality clinical care while Al Ihsan improves profitability, develops business performance, manages medical expenses, and builds sustainable operating systems.',

    // Final CTA & Form
    'cta.eyebrow': 'Get Started',
    'cta.title': 'Your healthcare facility can achieve more than it does today.',
    'cta.subtitle': 'The difference is how administrative opportunities are managed. Partner with Al Ihsan to recover lost margins, optimize payer contracts, and establish full operational control.',
    'cta.benefit1': '100% confidential operational review',
    'cta.benefit2': 'Led by senior healthcare specialists',
    'cta.benefit3': 'Comprehensive leakage-points report',
    'cta.benefit4': 'Zero financial obligation or commitment',
    'cta.form.title': 'Request a Free Diagnostic',
    'cta.form.subtitle': 'Enter your details below to schedule your confidential operational consultation.',
    'form.name.label': 'Full Name *',
    'form.name.placeholder': 'John Doe',
    'form.facility.label': 'Facility Name *',
    'form.facility.placeholder': 'City General Hospital',
    'form.title.label': 'Job Title *',
    'form.title.placeholder': 'Chief Executive Officer',
    'form.phone.label': 'Phone Number *',
    'form.email.label': 'Email Address *',
    'form.email.placeholder': 'johndoe@facility.com',
    'form.challenge.label': 'Main Operational Challenge (Optional)',
    'form.challenge.placeholder': 'Briefly describe your current revenue or administrative challenge...',
    'form.submit': 'Book My Free Consultation',
    'form.promise': 'Free, secure diagnostic assessment within 24 hours.',
    'form.success.title': 'Thank You!',
    'form.success.text': 'Your request for a free consultation has been received. One of our senior healthcare consultants will reach out to you within 24 hours.',
    'form.err.name': 'Full Name is required',
    'form.err.facility': 'Facility name is required',
    'form.err.title': 'Job title is required',
    'form.err.phone.req': 'Phone number is required',
    'form.err.phone.val': 'Please enter a valid phone number',
    'form.err.email.req': 'Email address is required',
    'form.err.email.val': 'Please enter a valid email address',

    // Footer
    'footer.tagline': 'B2B healthcare consulting partner specializing in revenue maximization, claim leak audits, and operational policy design.',
    'footer.quickLinks': 'Quick Links',
    'footer.contactInfo': 'Contact Info',
    'footer.location': 'Tripoli, Libya',
    'footer.copyright': 'Al Ihsan. All rights reserved.',
    'footer.credits': 'Swiss-inspired Healthcare Consulting'
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('alihsan-lang') || 'ar'; // Arabic is default
  });

  useEffect(() => {
    localStorage.setItem('alihsan-lang', lang);
    const isRtl = lang === 'ar';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // SEO Meta updates
    if (lang === 'ar') {
      document.title = 'الإحسان — شريك استشارات نمو إيرادات الرعاية الصحية';
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', 'كشف تسربات الإيرادات، تحسين عقود شركات التأمين، وتسريع التحصيل. احجز استشارة مجانية مع الإحسان.');
      
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', 'الإحسان — شريك استشارات نمو إيرادات الرعاية الصحية');
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', 'كشف تسربات الإيرادات، تحسين عقود شركات التأمين، وتسريع التحصيل. احجز استشارة مجانية مع الإحسان.');
      
      const twTitle = document.querySelector('meta[name="twitter:title"]');
      if (twTitle) twTitle.setAttribute('content', 'الإحسان — شريك استشارات نمو إيرادات الرعاية الصحية');
      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) twDesc.setAttribute('content', 'كشف تسربات الإيرادات، تحسين عقود شركات التأمين، وتسريع التحصيل. احجز استشارة مجانية مع الإحسان.');
    } else {
      document.title = 'Al Ihsan — Healthcare Revenue Growth & Consulting Partner';
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', 'Uncover hidden revenue, optimize contracts, and accelerate collections. Book a free consultation with Al Ihsan.');
      
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', 'Al Ihsan — Healthcare Revenue Growth & Consulting Partner');
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', 'Uncover hidden revenue, optimize contracts, and accelerate collections. Book a free consultation with Al Ihsan.');
      
      const twTitle = document.querySelector('meta[name="twitter:title"]');
      if (twTitle) twTitle.setAttribute('content', 'Al Ihsan — Healthcare Revenue Growth & Consulting Partner');
      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) twDesc.setAttribute('content', 'Uncover hidden revenue, optimize contracts, and accelerate collections. Book a free consultation with Al Ihsan.');
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const t = (key) => {
    return translations[lang]?.[key] || translations['ar']?.[key] || key;
  };

  const isRtl = lang === 'ar';

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
