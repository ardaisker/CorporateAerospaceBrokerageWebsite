import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.spareparts': 'Spare Parts',
    'nav.standards': 'Standards & Compliance',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.partsrequest': 'Parts Request',
    
    // Homepage
    'hero.title': 'Aviation Parts Brokerage & Commercial Consultancy',
    'hero.subtitle': 'Connecting manufacturers and buyers directly through Right Part, Right Supplier, Right Commercial Structure with risk-reducing solutions',
    'hero.cta': 'Learn More',
    
    'value.trust.title': 'Trust & Transparency',
    'value.trust.desc': 'Operating as a transparent intermediary with integrity at the core of every transaction',
    'value.international.title': 'International Expertise',
    'value.international.desc': 'Global operations connecting aerospace, aviation, and defense industry partners worldwide',
    'value.compliance.title': 'Safety & Compliance',
    'value.compliance.desc': 'Full compliance with international aviation safety standards and regulatory requirements',
    
    'principles.title': 'Our Operating Principles',
    'principles.part': 'Right Part',
    'principles.part.desc': 'Precise matching of requirements to certified components',
    'principles.supplier': 'Right Supplier',
    'principles.supplier.desc': 'Vetted, compliant manufacturers and distributors',
    'principles.structure': 'Right Commercial Structure',
    'principles.structure.desc': 'Transparent terms that reduce risk and optimize value',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Professional brokerage and consultancy solutions for the aerospace industry',
    
    'services.brokerage.title': 'Spare Parts Brokerage',
    'services.brokerage.desc': 'We provide direct connections between manufacturers and buyers of aircraft spare parts, enabling transparent and reliable transactions. Our network delivers certified aviation components for commercial aviation, defense programs, and specialized aerospace applications, ensuring compliance, traceability, and operational continuity.',
    
    'services.consultancy.title': 'Commercial Consultancy',
    'services.consultancy.desc': 'We deliver strategic advisory services for aerospace procurement and aviation supply chain optimization. Our experts provide guidance on commercial structures, regulatory compliance, and procurement strategy, helping aerospace organizations improve efficiency, reduce risk, and meet industry standards.',
    
    'services.matching.title': 'Manufacturer–Buyer Matching',
    'services.matching.desc': 'Connecting qualified global suppliers with buyers seeking certified aerospace components. Risk-reduced and compliant procurement for international aviation programs.',
    
    // Spare Parts
    'spareparts.title': 'Spare Parts Categories',
    'spareparts.subtitle': 'Certified components for commercial aircraft',
    
    'spareparts.narrowwide.title': 'Narrow Body & Wide Body Aircraft',
    'spareparts.narrowwide.desc': 'Comprehensive spare parts for all narrow body and wide body commercial aircraft platforms',
    
    'spareparts.boeing.title': 'Boeing Spare Parts',
    'spareparts.boeing.desc': 'Complete range of spare parts for all Boeing commercial aircraft models, including narrow body (737 series) and wide body (747, 767, 777, 787) platforms',
    
    'spareparts.airbus.title': 'Airbus Spare Parts',
    'spareparts.airbus.desc': 'Full inventory access for Airbus commercial aircraft spare parts, covering narrow body (A320 family) and wide body (A330, A340, A350, A380) aircraft',
    
    // Standards & Compliance
    'standards.title': 'International Standards & Compliance',
    'standards.subtitle': 'Safety-critical operations with full regulatory compliance',
    
    'standards.certified.title': 'Certified Components',
    'standards.certified.desc': 'All parts comply with international aviation safety standards including FAA, EASA, and manufacturer specifications',
    
    'standards.safety.title': 'Flight Safety Priority',
    'standards.safety.desc': 'Rigorous quality assurance processes ensuring every component meets safety-critical requirements for commercial aviation',
    
    'standards.regulatory.title': 'Regulatory Compliance',
    'standards.regulatory.desc': 'Full adherence to global aviation regulations, export controls, and industry standards',
    
    'standards.traceability.title': 'Complete Traceability',
    'standards.traceability.desc': 'Comprehensive documentation and chain of custody for all transactions ensuring transparency and accountability',
    
    // About
    'about.title': 'About Our Company',
    'about.subtitle': 'International aerospace parts brokerage and consultancy',
    
    'about.intro': 'We are an international aerospace, aviation, and defense parts brokerage and commercial consultancy specializing in aircraft parts procurement and global supply chain solutions. Our mission is to connect manufacturers and buyers directly through transparent, risk-reducing brokerage services that improve efficiency and trust in the aerospace supply chain.',
    
    'about.approach': 'We provide direct access to certified aircraft parts suppliers, transparent commercial structures, and compliant procurement processes. Serving global aerospace, aviation, and defense organizations, we deliver reliable intermediary and consulting solutions that support secure transactions, supplier verification, and optimized parts sourcing.',
    
    'about.expertise.title': 'International Focus',
    'about.expertise.desc': 'Global operations connecting industry partners across continents with local expertise and international standards',
    
    'about.integrity.title': 'Trust-Based Operations',
    'about.integrity.desc': 'Transparent intermediary model built on integrity, compliance, and long-term client relationships',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Connect with our international team',
    
    'contact.form.name': 'Full Name',
    'contact.form.company': 'Company Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    
    'contact.info.title': 'Business Inquiries',
    'contact.info.email': 'Email',
    'contact.info.international': 'International Operations',
    'contact.info.response': 'We respond to all inquiries within 24 business hours',
    
    // Parts Request
    'partsrequest.title': 'Parts Request',
    'partsrequest.subtitle': 'Submit your aerospace parts requirements',
    
    'partsrequest.form.fullname': 'Full Name',
    'partsrequest.form.companyname': 'Company Name',
    'partsrequest.form.country': 'Company Country',
    'partsrequest.form.website': 'Company Website',
    'partsrequest.form.contactperson': 'Contact Person Full Name',
    'partsrequest.form.jobtitle': 'Job Title / Position',
    'partsrequest.form.corporateemail': 'Corporate Email Address',
    'partsrequest.form.phone': 'Phone Number (incl. country code)',
    'partsrequest.form.partnumber': 'Part Number (P/N)',
    'partsrequest.form.partdescription': 'Part Description',
    'partsrequest.form.quantity': 'Quantity Required',
    'partsrequest.form.submit': 'Submit Parts Request',
    'partsrequest.form.success': 'Thank you for your parts request. We will review your requirements and contact you within 24 hours at info@guleraero.com.',
    'partsrequest.form.error': 'There was an error submitting your request. Please try again or contact us directly at info@guleraero.com.',
    'partsrequest.form.disclaimer': 'Submission of this form does not constitute an offer, representation, or agency relationship. All quotations are subject to availability, prior sale, and final confirmation.',

    // Not found
    'notfound.title': 'Page Not Found',
    'notfound.subtitle': 'The page you are looking for does not exist or has been moved.',
    'notfound.home': 'Back to Home',
    'notfound.services': 'Our Services',
    'notfound.contact': 'Contact Us',
  },
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.services': 'Hizmetler',
    'nav.spareparts': 'Yedek Parça',
    'nav.standards': 'Standartlar & Uyumluluk',
    'nav.about': 'Hakkımızda',
    'nav.contact': 'İletişim',
    'nav.partsrequest': 'Parça Talebi',
    
    // Homepage
    'hero.title': 'Havacılık Parça Aracılığı & Ticari Danışmanlık',
    'hero.subtitle': 'Doğru Parça, Doğru Tedarikçi, Doğru Ticari Yapı prensipleriyle üreticileri ve alıcıları risk azaltıcı çözümlerle doğrudan bağlıyoruz',
    'hero.cta': 'Daha Fazla Bilgi',
    
    'value.trust.title': 'Güven & Şeffaflık',
    'value.trust.desc': 'Her işlemin merkezinde dürüstlük ile şeffaf bir aracı olarak faaliyet gösteriyoruz',
    'value.international.title': 'Uluslararası Uzmanlık',
    'value.international.desc': 'Dünya çapında havacılık, uzay ve savunma sanayi ortaklarını birbirine bağlayan küresel operasyonlar',
    'value.compliance.title': 'Güvenlik & Uyumluluk',
    'value.compliance.desc': 'Uluslararası havacılık güvenlik standartları ve düzenleyici gereksinimlere tam uyumluluk',
    
    'principles.title': 'Operasyon İlkelerimiz',
    'principles.part': 'Doğru Parça',
    'principles.part.desc': 'Gereksinimlerin sertifikalı bileşenlerle hassas eşleşmesi',
    'principles.supplier': 'Doğru Tedarikçi',
    'principles.supplier.desc': 'Doğrulanmış, uyumlu üreticiler ve distribütörler',
    'principles.structure': 'Doğru Ticari Yapı',
    'principles.structure.desc': 'Riski azaltan ve değeri optimize eden şeffaf koşullar',
    
    // Services
    'services.title': 'Hizmetlerimiz',
    'services.subtitle': 'Havacılık sektörü için profesyonel aracılık ve danışmanlık çözümleri',
    
    'services.brokerage.title': 'Yedek Parça Aracılığı',
    'services.brokerage.desc': 'Uçak yedek parçaları üreticileri ve alıcıları arasında doğrudan bağlantılar sağlıyoruz, şeffaf ve güvenilir işlemleri mümkün kılıyoruz. Ağımız, ticari havacılık, savunma programları ve özel havacılık uygulamaları için sertifikalı havacılık bileşenleri sunarak uyumluluk, izlenebilirlik ve operasyonel süreklilik sağlar.',
    
    'services.consultancy.title': 'Ticari Danışmanlık',
    'services.consultancy.desc': 'Havacılık tedariki ve havayolu tedarik zinciri optimizasyonu için stratejik danışmanlık hizmetleri sunuyoruz. Uzmanlarımız ticari yapılar, düzenleyici uyumluluk ve tedarik stratejisi konusunda rehberlik sağlayarak havacılık kuruluşlarının verimliliği artırmasına, riski azaltmasına ve endüstri standartlarını karşılamasına yardımcı olur.',
    
    'services.matching.title': 'Üretici–Alıcı Eşleştirmesi',
    'services.matching.desc': 'Nitelikli küresel tedarikçileri sertifikalı havacılık bileşenleri arayan alıcılarla birbirine bağlıyoruz. Uluslararası havacılık programları için risk azaltılmış ve uyumlu tedarik.',
    
    // Spare Parts
    'spareparts.title': 'Yedek Parça Kategorileri',
    'spareparts.subtitle': 'Ticari uçaklar için sertifikalı bileşenler',
    
    'spareparts.narrowwide.title': 'Dar Gövde & Geniş Gövde Uçaklar',
    'spareparts.narrowwide.desc': 'Tüm dar gövde ve geniş gövde ticari uçak platformları için kapsamlı yedek parçalar',
    
    'spareparts.boeing.title': 'Boeing Yedek Parçaları',
    'spareparts.boeing.desc': 'Dar gövde (737 serisi) ve geniş gövde (747, 767, 777, 787) platformlar dahil olmak üzere tüm Boeing ticari uçak modelleri için eksiksiz yedek parça yelpazesi',
    
    'spareparts.airbus.title': 'Airbus Yedek Parçaları',
    'spareparts.airbus.desc': 'Dar gövde (A320 ailesi) ve geniş gövde (A330, A340, A350, A380) uçakları kapsayan Airbus ticari uçak yedek parçaları için tam envanter erişimi',
    
    // Standards & Compliance
    'standards.title': 'Uluslararası Standartlar & Uyumluluk',
    'standards.subtitle': 'Güvenlik öncelikli operasyonlar, tam mevzuat uyumluluğu',
    
    'standards.certified.title': 'Sertifikalı Parçalar',
    'standards.certified.desc': 'Tüm parçalar FAA, EASA ve üretici standartlarına uygun',
    
    'standards.safety.title': 'Uçuş Güvenliği Önceliği',
    'standards.safety.desc': 'Her parça için katı kalite güvence süreçleri, güvenlik standartları eksiksiz karşılanıyor',
    
    'standards.regulatory.title': 'Regulatory Compliance',
    'standards.regulatory.desc': 'Full adherence to global aviation regulations, export controls, and industry standards',
    
    'standards.traceability.title': 'Tam İzlenebilirlik',
    'standards.traceability.desc': 'Her işlem için kapsamlı dokümantasyon ve gözetim zinciri, şeffaflık garantisi',
    
    // About
    'about.title': 'Şirketimiz Hakkında',
    'about.subtitle': 'Uluslararası havacılık parça aracılığı ve danışmanlık',
    
    'about.intro': 'Uluslararası bir havacılık, uzay ve savunma sanayi parça aracılığı ve ticari danışmanlık şirketiyiz. Misyonumuz, üreticileri ve alıcıları şeffaf, risk azaltıcı çözümler aracılığıyla doğrudan birbirine bağlamaktır.',
    
    'about.approach': 'Güvene dayalı yaklaşımımız, parça tedariğindeki geleneksel opaklaşmayı ortadan kaldırarak müşterilere sertifikalı tedarikçilere doğrudan erişim ve şeffaf ticari yapılar sağlar. Küresel olarak faaliyet göstererek, güvenilir aracı çözümler arayan havacılık, uzay ve savunma şirketlerine hizmet veriyoruz.',
    
    'about.expertise.title': 'Uluslararası Odak',
    'about.expertise.desc': 'Yerel uzmanlık ve uluslararası standartlarla kıtalardaki sektör ortaklarını birbirine bağlayan küresel operasyonlar',
    
    'about.integrity.title': 'Güvene Dayalı Operasyonlar',
    'about.integrity.desc': 'Dürüstlük, uyumluluk ve uzun vadeli müşteri ilişkileri üzerine inşa edilmiş şeffaf aracı modeli',
    
    // Contact
    'contact.title': 'İletişim',
    'contact.subtitle': 'Uluslararası ekibimizle iletişime geçin',
    
    'contact.form.name': 'Ad Soyad',
    'contact.form.company': 'Şirket Adı',
    'contact.form.email': 'E-posta Adresi',
    'contact.form.phone': 'Telefon Numarası',
    'contact.form.message': 'Mesaj',
    'contact.form.submit': 'Mesaj Gönder',
    
    'contact.info.title': 'İş Talepleri',
    'contact.info.email': 'E-posta',
    'contact.info.international': 'Uluslararası Operasyonlar',
    'contact.info.response': 'Tüm taleplere 24 iş saati içinde yanıt veriyoruz',
    
    // Parts Request
    'partsrequest.title': 'Parça Talebi',
    'partsrequest.subtitle': 'Havacılık parçalarınızın taleplerini gönderin',
    
    'partsrequest.form.fullname': 'Ad Soyad',
    'partsrequest.form.companyname': 'Şirket Adı',
    'partsrequest.form.country': 'Şirket Ülkesi',
    'partsrequest.form.website': 'Şirket Web Sitesi',
    'partsrequest.form.contactperson': 'İletişim Kişisi Ad Soyad',
    'partsrequest.form.jobtitle': 'İş Unvanı / Pozisyon',
    'partsrequest.form.corporateemail': 'Kurumsal E-posta Adresi',
    'partsrequest.form.phone': 'Telefon Numarası (ülke kodu dahil)',
    'partsrequest.form.partnumber': 'Parça Numarası (P/N)',
    'partsrequest.form.partdescription': 'Parça Açıklaması',
    'partsrequest.form.quantity': 'Gerekli Miktar',
    'partsrequest.form.submit': 'Parça Talebi Gönder',
    'partsrequest.form.success': 'Parça talebiniz için teşekkür ederiz. Taleplerinizi inceleyeceğiz ve 24 saat içinde info@guleraero.com adresinden size ulaşacağız.',
    'partsrequest.form.error': 'Talebinizi gönderirken bir hata oluştu. Lütfen tekrar deneyin veya doğrudan info@guleraero.com adresinden bize ulaşın.',
    'partsrequest.form.disclaimer': 'Bu formun gönderilmesi, teklif, temsil veya ajans ilişkisi oluşturmaz. Tüm teklifler, mevcutluk, önceden satma ve son onay koşullarına tabidir.',

    // Not found
    'notfound.title': 'Sayfa Bulunamadı',
    'notfound.subtitle': 'Aradığınız sayfa mevcut değil veya taşınmış olabilir.',
    'notfound.home': 'Ana Sayfaya Dön',
    'notfound.services': 'Hizmetlerimiz',
    'notfound.contact': 'İletişim',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};