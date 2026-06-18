// PioNotes Interactive Presentation Logic & Translations (Chrome Extension compliant - CSP safe)

// 1. Language Translation Dictionary
const translations = {
  tr: {
    logo_title: "Pio<span>Notes</span>",
    logo_badge: "PRO",
    back_btn: "Yan Panele Dön",
    footer_credit: "NOT_IZM_90220 tarafından Dünya'da sevgiyle üretildi 2026",
    
    slide1_cat: "Giriş & Vizyon",
    slide1_title: "MX Chat İçin Akıllı Not ve Hızlı Mesajlaşma Asistanı",
    slide1_desc: "PioNotes, Chrome yan panelinde çalışan ve müşteri destek temsilcilerinin en sık kullandığı mesaj şablonlarını anında kopyalamasını sağlayan, gelişmiş bir not alma ve organizasyon aracıdır. MX Chat süreçlerinizde zamandan tasarruf etmeniz ve müşterilere en kaliteli yanıtları iletmeniz için özel olarak tasarlandı.",
    slide1_feat1: "<strong>Maksimum Hız:</strong> Şablonları aramakla uğraşmadan tek tıkla kopyalayın.",
    slide1_feat2: "<strong>Kolay Erişim:</strong> Tarayıcınızın sağ panelinde, ekranı kaplamadan her an elinizin altında.",
    slide1_feat3: "<strong>Zengin İçerik:</strong> Biçimlendirilmiş metinleri (Rich Text) koruyarak kopyalama yeteneği.",
    
    slide2_cat: "Dil Bariyeri Çözümü",
    slide2_title: "Almanca İletişimde Kusursuzluğu Yakalayın",
    slide2_desc1: "Müşteri destek süreçlerimizde anadili Almanca olmayan temsilciler olarak, her konuşmada sıfırdan hatasız ve profesyonel bir üslupla Almanca yazmak yorucudur ve zaman kaybına yol açar.",
    slide2_desc2: "<strong>PioNotes ile Dil Engeli Tarih Oluyor:</strong> Önceden onaylanmış, hatasız Almanca şablon mesajları kategorize edin. Müşterilerinizle tıpkı bir anadil konuşucusu gibi hızlı, kibar ve profesyonelce iletişim kurun.",
    slide2_feat1: "Doğru ve doğrulanmış kurumsal dil kullanımı.",
    slide2_feat2: "Yazım hatalarının ve yanlış çevirilerin önüne geçilmesi.",
    slide2_feat3: "Düşünme ve formüle etme sürelerinin sıfıra indirilmesi.",
    
    slide3_cat: "Verimlilik Analizi",
    slide3_title: "İnanılmaz Verimlilik Artışı: %60 ve %50 Daha Hızlı!",
    slide3_desc: "PioNotes, temsilcilerin günlük operasyon sürelerini dramatik şekilde kısaltır. MX Chat destek süreçlerinde yapılan ölçümlere göre PioNotes'un gücü:",
    slide3_lbl1: "Normal Sistem (Notepad, Excel, Word vb.)",
    slide3_lbl2: "Sprinklr Şablon Sistemi",
    slide3_lbl3: "PioNotes Kopyalama",
    slide3_val1: "Yavaş (45 sn)",
    slide3_val2: "Orta (30 sn)",
    slide3_val3: "Ultra Hızlı (1.5 sn)",
    slide3_note: "* PioNotes, Normal sisteme kıyasla <strong>%60</strong>, Sprinklr entegre şablonlarına kıyasla ise <strong>%50</strong> daha yüksek iş verimliliği sağlamaktadır.",
    slide3_vtitle: "Anında Yanıt Döngüsü",
    slide3_vdesc: "Ortalama bir günde, PioNotes kullanan bir agent <strong>en az 45 dakika</strong> daha az kopyalama/arama süresi harcar.",
    
    slide4_cat: "Kategorizasyon",
    slide4_title: "Klasör Klasör Düzenleyin, Sürükleyip Sıralayın",
    slide4_desc: "Karışık şablon listelerinde kaybolmaya son! PioNotes ile tüm notlarınızı ve şablonlarınızı desteğin aşamalarına veya konularına göre klasörleyin.",
    slide4_feat1: "<strong>Emoji Desteği:</strong> Klasörlerinizi dilediğiniz emojiyle (📁, 💬, 🛠️, 🍑) özelleştirin.",
    slide4_feat2: "<strong>Sürükle ve Bırak:</strong> Notlarınızı ve klasörlerinizi mouse ile sürükleyerek dilediğiniz sıraya dizin veya notları klasörler arasında taşıyın.",
    slide4_feat3: "<strong>Akıllı Sayaçlar:</strong> Hangi klasörde kaç adet şablon bulunduğunu anında görün.",
    
    slide5_cat: "Kullanılabilirlik",
    slide5_title: "Tek Tıkla Kopyala & Agent Dostu Düzenleyici",
    slide5_desc: "Operasyonel hızı en üst düzeye çıkarmak için tasarlandı. Şablonu seçip kopyalamak sadece bir milisaniye sürer.",
    slide5_feat1: "<strong>Tek Tıkla Kopyala:</strong> Kartın herhangi bir yerine tıklamanız yeterlidir. İçerik panoya kopyalanır ve MX Chat'e doğrudan yapıştırılabilir.",
    slide5_feat2: "<strong>Zengin Metin Editörü (Rich Editor):</strong> Kalın, italik, altı çizili veya maddeli listeleri doğrudan eklenti içinden editleyin.",
    slide5_feat3: "<strong>Kart Renkleri:</strong> Notlarınızı 7 farklı renk seçeneğiyle önem derecesine göre gruplayın.",
    slide5_vtitle: "🎯 Tıkla ve Kopyala Simülatörü",
    slide5_card1_title: "🇩🇪 Karşılama Şablonu (Tıkla)",
    slide5_card1_text: "Merhaba, ben Samsung Almanya ekibinden Benjamin...",
    slide5_card2_title: "🇩🇪 Mesai Dışı Şablonu (Tıkla)",
    slide5_card2_text: "Bu konuyla ilgili uzman departmanımız şu anda kapalıdır...",
    slide5_badge: "Tıkla & Kopyala",
    slide5_toast: "Panoya Kopyalandı! 📋",
    
    slide6_cat: "Veri Güvenliği",
    slide6_title: "Yedekle, İçe Aktar ve Takım Arkadaşlarınla Paylaş",
    slide6_desc: "Tüm hazırladığınız not setlerini ve şablonlarınızı tek tuşla dışa aktarabilirsiniz. Bilgisayar değişimi veya tarayıcı sıfırlanmasında verileriniz asla kaybolmaz.",
    slide6_feat1: "<strong>Yedek İndir (Export):</strong> Tüm notlarınızı, klasör yapınızı ve ayarlarınızı tek tıkla <code>.json</code> dosyası olarak kaydedin.",
    slide6_feat2: "<strong>Yedek Yükle (Import):</strong> Yedek dosyasını yükleyerek saniyeler içinde tüm şablonlarınızı geri yükleyin.",
    slide6_feat3: "<strong>Kolay Paylaşım:</strong> Hazırladığınız şablon setlerini diğer temsilcilerle paylaşarak tüm ekibin aynı hıza ulaşmasını sağlayın.",
    slide6_vtitle: "%100 Taşınabilirlik",
    slide6_vdesc: "Ekibinizle yedek dosyalarını paylaşarak ortak bir kurumsal dil oluşturun, yeni başlayan temsilcilerin uyum sürecini sıfıra indirin.",
    slide6_cta: "PioNotes'u Şimdi Deneyin"
  },
  en: {
    logo_title: "Pio<span>Notes</span>",
    logo_badge: "PRO",
    back_btn: "Back to Side Panel",
    footer_credit: "Made with love on Earth by NOT_IZM_90220 2026",
    
    slide1_cat: "Intro & Vision",
    slide1_title: "Smart Note & Fast Messaging Assistant for MX Chat",
    slide1_desc: "PioNotes is an advanced note-taking and organization tool running in the Chrome side panel that allows customer support agents to instantly copy their most frequently used message templates. Specially designed to save time in your MX Chat workflows and deliver the highest quality responses to customers.",
    slide1_feat1: "<strong>Maximum Speed:</strong> Copy templates with a single click without the hassle of searching.",
    slide1_feat2: "<strong>Easy Access:</strong> Conveniently located in your browser's side panel, always at hand without blocking your screen.",
    slide1_feat3: "<strong>Rich Content:</strong> Ability to copy templates while fully preserving formatted rich text.",
    
    slide2_cat: "Language Barrier Solution",
    slide2_title: "Achieve Perfection in German Communication",
    slide2_desc1: "As customer support agents who are not native German speakers, writing error-free and professional German from scratch in every conversation is exhausting and leads to a loss of time.",
    slide2_desc2: "<strong>Language Barrier is History with PioNotes:</strong> Categorize pre-approved, flawless German template messages. Communicate with your customers quickly, politely, and professionally, just like a native speaker.",
    slide2_feat1: "Accurate and verified corporate language usage.",
    slide2_feat2: "Prevention of spelling mistakes and mistranslations.",
    slide2_feat3: "Reducing thinking and formulation times to zero.",
    
    slide3_cat: "Efficiency Analysis",
    slide3_title: "Incredible Efficiency Boost: 60% and 50% Faster!",
    slide3_desc: "PioNotes dramatically shortens the daily operational times of support agents. The power of PioNotes according to measurements in MX Chat support processes:",
    slide3_lbl1: "Normal System (Notepad, Excel, Word, etc.)",
    slide3_lbl2: "Sprinklr Template System",
    slide3_lbl3: "PioNotes Copying",
    slide3_val1: "Slow (45 sec)",
    slide3_val2: "Medium (30 sec)",
    slide3_val3: "Ultra Fast (1.5 sec)",
    slide3_note: "* PioNotes provides <strong>60%</strong> higher operational efficiency compared to Normal systems and <strong>50%</strong> compared to Sprinklr integrated templates.",
    slide3_vtitle: "Instant Response Loop",
    slide3_vdesc: "On an average day, an agent using PioNotes spends <strong>at least 45 minutes less</strong> on copy-paste and search tasks.",
    
    slide4_cat: "Categorization",
    slide4_title: "Organize Folder by Folder, Drag & Reorder",
    slide4_desc: "No more getting lost in cluttered template lists! Categorize all your notes and templates with PioNotes based on support stages or topics.",
    slide4_feat1: "<strong>Emoji Support:</strong> Customize your folders with any emoji of your choice (📁, 💬, 🛠️, 🍑).",
    slide4_feat2: "<strong>Drag and Drop:</strong> Reorder your notes and folders by dragging them with the mouse, or move notes between folders easily.",
    slide4_feat3: "<strong>Smart Counters:</strong> Instantly see exactly how many templates are in each folder.",
    
    slide5_cat: "Usability",
    slide5_title: "One-Click Copy & Agent-Friendly Editor",
    slide5_desc: "Designed to maximize operational speed. Selecting and copying a template takes only a millisecond.",
    slide5_feat1: "<strong>One-Click Copy:</strong> Simply click anywhere on the card. The content is copied to the clipboard, ready to paste directly into MX Chat.",
    slide5_feat2: "<strong>Rich Text Editor:</strong> Edit bold, italic, underlined, or bulleted lists directly from inside the extension panel.",
    slide5_feat3: "<strong>Card Colors:</strong> Categorize your notes visually by importance using 7 different pastel colors.",
    slide5_vtitle: "🎯 Click & Copy Simulator",
    slide5_card1_title: "🇩🇪 Greeting Template (Click)",
    slide5_card1_text: "Hello, I am Benjamin from the Samsung Germany team...",
    slide5_card2_title: "🇩🇪 After-Hours Template (Click)",
    slide5_card2_text: "Our specialized department regarding this matter is currently closed...",
    slide5_badge: "Click & Copy",
    slide5_toast: "Copied to Clipboard! 📋",
    
    slide6_cat: "Data Security",
    slide6_title: "Backup, Import & Share with Teammates",
    slide6_desc: "You can export all your prepared note sets and templates with a single button click. Your data will never be lost during device changes or browser resets.",
    slide6_feat1: "<strong>Backup Download (Export):</strong> Save all your notes, folder structures, and settings as a <code>.json</code> file with a single click.",
    slide6_feat2: "<strong>Backup Upload (Import):</strong> Upload your backup file and restore all your templates in seconds.",
    slide6_feat3: "<strong>Easy Sharing:</strong> Share your templates sets with other agents so the entire team operates at the same high speed.",
    slide6_vtitle: "100% Portability",
    slide6_vdesc: "Build a unified communication language by sharing backup files with your team, reducing onboarding time for new agents to zero.",
    slide6_cta: "Try PioNotes Now"
  },
  de: {
    logo_title: "Pio<span>Notes</span>",
    logo_badge: "PRO",
    back_btn: "Zurück zur Seitenleiste",
    footer_credit: "Mit Liebe auf der Erde hergestellt von NOT_IZM_90220 2026",
    
    slide1_cat: "Einführung & Vision",
    slide1_title: "Intelligenter Notiz- & Schnellnachrichten-Assistent für MX Chat",
    slide1_desc: "PioNotes ist ein fortschrittliches Tool zur Notizenverwaltung und -organisation in der Chrome-Seitenleiste, das Kundensupport-Mitarbeitern das sofortige Kopieren ihrer am häufigsten verwendeten Nachrichtenvorlagen ermöglicht. Es wurde speziell entwickelt, um in Ihren MX Chat-Workflows Zeit zu sparen und Kunden Antworten von höchster Qualität zu liefern.",
    slide1_feat1: "<strong>Maximale Geschwindigkeit:</strong> Kopieren Sie Vorlagen mit einem Klick, ohne mühsam suchen zu müssen.",
    slide1_feat2: "<strong>Einfacher Zugriff:</strong> Bequem in der Seitenleiste Ihres Browsers platziert, immer griffbereit, ohne Ihren Bildschirm zu blockieren.",
    slide1_feat3: "<strong>Rich-Text-Inhalte:</strong> Fähigkeit zum Kopieren unter vollständiger Beibehaltung der Textformatierung.",
    
    slide2_cat: "Lösung für die Sprachbarriere",
    slide2_title: "Perfektion in der deutschen Kommunikation erzielen",
    slide2_desc1: "Als Support-Mitarbeiter, deren Muttersprache nicht Deutsch ist, ist es anstrengend und zeitraubend, in jedem Gespräch von Grund auf fehlerfreies und professionelles Deutsch zu formulieren.",
    slide2_desc2: "<strong>Die Sprachbarriere gehört mit PioNotes der Vergangenheit an:</strong> Kategorisieren Sie vorab genehmigte, fehlerfreie deutsche Vorlagen. Kommunizieren Sie schnell, höflich und professionell mit Ihren Kunden – genau wie ein Muttersprachler.",
    slide2_feat1: "Präzise und verifizierte Verwendung der Unternehmenssprache.",
    slide2_feat2: "Vermeidung von Rechtschreibfehlern und Übersetzungsfehlern.",
    slide2_feat3: "Reduzierung der Denk- und Formulierungszeit auf ein Minimum.",
    
    slide3_cat: "Effizienzanalyse",
    slide3_title: "Unglaubliche Effizienzsteigerung: 60 % und 50 % schneller!",
    slide3_desc: "PioNotes verkürzt die täglichen Betriebszeiten von Support-Mitarbeitern drastisch. Die Leistung von PioNotes basierend auf Messungen in MX Chat-Supportprozessen:",
    slide3_lbl1: "Normales System (Notepad, Excel, Word usw.)",
    slide3_lbl2: "Sprinklr-Vorlagensystem",
    slide3_lbl3: "PioNotes Kopieren",
    slide3_val1: "Langsam (45 Sek.)",
    slide3_val2: "Mittel (30 Sek.)",
    slide3_val3: "Ultraschnell (1.5 Sek.)",
    slide3_note: "* PioNotes bietet eine um <strong>60 %</strong> höhere betriebliche Effizienz im Vergleich zu Standard-Methoden und <strong>50 %</strong> im Vergleich zu in Sprinklr integrierten Vorlagen.",
    slide3_vtitle: "Sofortige Antwortschleife",
    slide3_vdesc: "An einem durchschnittlichen Tag spart ein Mitarbeiter mit PioNotes <strong>mindestens 45 Minuten</strong> reine Such- und Kopierzeit.",
    
    slide4_cat: "Kategorisierung",
    slide4_title: "Ordner für Ordner organisieren, ziehen und neu ordnen",
    slide4_desc: "Kein Verlieren mehr in unordentlichen Vorlagenlisten! Kategorisieren Sie alle Ihre Notizen und Vorlagen mit PioNotes nach Support-Phasen oder Themen.",
    slide4_feat1: "<strong>Emoji-Unterstützung:</strong> Personalisieren Sie Ihre Ordner mit einem beliebigen Emoji Ihrer Wahl (📁, 💬, 🛠️, 🍑).",
    slide4_feat2: "<strong>Drag and Drop:</strong> Ordnen Sie Ihre Notizen und Ordner per Drag-and-Drop in einer beliebigen Reihenfolge an oder verschieben Sie Notizen zwischen Ordnern.",
    slide4_feat3: "<strong>Intelligente Zähler:</strong> Sehen Sie sofort, wie viele Vorlagen sich in jedem einzelnen Ordner befinden.",
    
    slide5_cat: "Benutzerfreundlichkeit",
    slide5_title: "Ein-Klick-Kopieren & Agentenfreundlicher Editor",
    slide5_desc: "Entwickelt zur Maximierung der Betriebsgeschwindigkeit. Das Auswählen und Kopieren einer Vorlage dauert nur eine Millisekunde.",
    slide5_feat1: "<strong>Ein-Klick-Kopieren:</strong> Klicken Sie einfach auf eine beliebige Stelle der Karte. Der Inhalt wird in die Zwischenablage kopiert und kann direkt in MX Chat eingefügt werden.",
    slide5_feat2: "<strong>Rich-Text-Editor:</strong> Bearbeiten Sie fett gedruckte, kursive, unterstrichene oder Aufzählungslisten direkt im Erweiterungs-Panel.",
    slide5_feat3: "<strong>Kartenfarben:</strong> Gruppieren Sie Ihre Notizen visuell nach Wichtigkeit mit 7 verschiedenen Farboptionen.",
    slide5_vtitle: "🎯 Klick- & Kopier-Simulator",
    slide5_card1_title: "🇩🇪 Begrüßungsvorlage (Klick)",
    slide5_card1_text: "Hallo, ich bin Benjamin vom Samsung Deutschland Team...",
    slide5_card2_title: "🇩🇪 Außerhalb-der-Geschäftszeiten-Vorlage (Klick)",
    slide5_card2_text: "Unsere Fachabteilung für diese Angelegenheit ist derzeit geschlossen...",
    slide5_badge: "Klicken & Kopieren",
    slide5_toast: "In die Zwischenablage kopiert! 📋",
    
    slide6_cat: "Datensicherheit",
    slide6_title: "Sichern, importieren und mit Teamkollegen teilen",
    slide6_desc: "Sie können alle Ihre vorbereiteten Notizsätze und Vorlagen mit einem Klick exportieren. Ihre Daten gehen bei einem Gerätewechsel oder Browser-Reset nie verloren.",
    slide6_feat1: "<strong>Backup herunterladen (Export):</strong> Sie können alle Ihre Notizen, die Ordnerstruktur und Einstellungen mit einem Klick als <code>.json</code>-Datei speichern.",
    slide6_feat2: "<strong>Backup hochladen (Import):</strong> Laden Sie Ihre Backup-Datei hoch und stellen Sie alle Ihre Vorlagen in Sekundenschnelle wieder her.",
    slide6_feat3: "<strong>Einfaches Teilen:</strong> Teilen Sie Ihre Vorlagensätze mit anderen Agenten, damit das gesamte Team mit der gleichen Effizienz arbeitet.",
    slide6_vtitle: "100 % Portabilität",
    slide6_vdesc: "Erstellen Sie eine einheitliche Kommunikationskultur, indem Sie Backup-Dateien teilen. Das reduziert die Einarbeitungszeit neuer Agenten auf Null.",
    slide6_cta: "Probieren Sie PioNotes jetzt aus"
  }
};

// 2. State Variables
let currentSlideIndex = 0;
let slides = [];
let dots = [];
let prevBtn = null;
let nextBtn = null;

// 3. Language Controller
function setLanguage(lang) {
  if (!translations[lang]) lang = 'tr';
  
  // Update all elements containing data-translate attribute
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update active state on language switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Save user language preference
  localStorage.setItem('presentation_lang', lang);
}

// 4. Background Particle System
function createParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';
  const isPeach = Math.random() > 0.5;
  particle.innerText = isPeach ? '🍑' : '⭐';
  
  const startX = Math.random() * window.innerWidth;
  const startY = window.innerHeight - 20;
  
  particle.style.left = startX + 'px';
  particle.style.top = startY + 'px';
  
  const duration = 4 + Math.random() * 4;
  particle.style.animationDuration = duration + 's';
  
  document.body.appendChild(particle);
  
  setTimeout(() => {
    particle.remove();
  }, duration * 1000);
}

// 5. Stat Animation Control (Slide 3)
function animateStats(slide) {
  const fills = slide.querySelectorAll('.stat-bar-fill');
  fills.forEach(fill => {
    const targetWidth = fill.getAttribute('data-width');
    fill.style.width = targetWidth;
  });
}

function resetStats(slide) {
  const fills = slide.querySelectorAll('.stat-bar-fill');
  fills.forEach(fill => {
    fill.style.width = '0%';
  });
}

function updateNavButtons() {
  if (prevBtn) prevBtn.disabled = currentSlideIndex === 0;
  if (nextBtn) nextBtn.disabled = currentSlideIndex === slides.length - 1;
}

// 6. Navigation Logic
function goToSlide(index) {
  if (index < 0 || index >= slides.length) return;
  
  // Reset stats if leaving slide 3 (index 2)
  if (currentSlideIndex === 2 && index !== 2) {
    resetStats(slides[2]);
  }

  // Manage classes
  slides[currentSlideIndex].classList.remove('active');
  slides[currentSlideIndex].classList.add('prev');
  
  if (dots[currentSlideIndex]) {
    dots[currentSlideIndex].classList.remove('active');
  }

  currentSlideIndex = index;
  
  slides[currentSlideIndex].classList.remove('prev');
  slides[currentSlideIndex].classList.add('active');
  
  if (dots[currentSlideIndex]) {
    dots[currentSlideIndex].classList.add('active');
  }

  // Trigger stats bar growth on slide 3 (index 2)
  if (currentSlideIndex === 2) {
    setTimeout(() => animateStats(slides[2]), 350);
  }

  updateNavButtons();
}

function changeSlide(direction) {
  goToSlide(currentSlideIndex + direction);
}

// 7. Interactive Copy Simulator (Slide 5)
function runSimulatorClick(cardNumber) {
  const currentLang = localStorage.getItem('presentation_lang') || 'tr';
  let text = '';
  
  if (cardNumber === 1) {
    if (currentLang === 'tr') {
      text = 'Merhaba, ben Samsung Almanya ekibinden Benjamin. Size nasıl yardımcı olabilirim?';
    } else if (currentLang === 'en') {
      text = 'Hello, I am Benjamin from the Samsung Germany team. How can I help you?';
    } else {
      text = 'Hallo, ich bin Benjamin vom Samsung Deutschland Team. Wie kann ich Ihnen helfen?';
    }
    animateCardClick(document.getElementById('sim-card-1'));
  } else {
    if (currentLang === 'tr') {
      text = 'Bu konuyla ilgili uzman departmanımız şu anda kapalıdır.';
    } else if (currentLang === 'en') {
      text = 'Our specialized department regarding this matter is currently closed.';
    } else {
      text = 'Unsere Fachabteilung für diese Angelegenheit ist derzeit geschlossen.';
    }
    animateCardClick(document.getElementById('sim-card-2'));
  }

  navigator.clipboard.writeText(text).then(() => {
    const toast = document.getElementById('demo-copy-toast');
    const langData = translations[currentLang] || translations.tr;
    const translatedToast = langData.slide5_toast || 'Kopyalandı!';
    toast.innerText = translatedToast + ' "' + text.substring(0, 30) + '..."';
    toast.style.opacity = '1';
    setTimeout(() => {
      toast.style.opacity = '0';
    }, 2500);
  }).catch(err => {
    console.error('Failed to copy simulator text: ', err);
  });
}

function animateCardClick(element) {
  if (!element) return;
  element.style.transform = 'scale(0.98)';
  setTimeout(() => {
    element.style.transform = '';
  }, 150);
}

// 8. Initialization on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Query Elements
  slides = document.querySelectorAll('.slide');
  dots = document.querySelectorAll('.indicator-dot');
  prevBtn = document.getElementById('prev-btn');
  nextBtn = document.getElementById('next-btn');

  // Load language settings
  const initialLang = localStorage.getItem('presentation_lang') || 'tr';
  setLanguage(initialLang);

  // Set up particle float intervals
  setInterval(createParticle, 1500);

  // Attach language buttons click event listeners
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  // Attach dots click event listeners
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
    });
  });

  // Attach nav buttons click event listeners
  if (prevBtn) {
    prevBtn.addEventListener('click', () => changeSlide(-1));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => changeSlide(1));
  }

  // Touch Swipe Support
  let touchStartX = 0;
  let touchEndX = 0;
  const slidesWrapper = document.querySelector('.slides-wrapper');
  
  if (slidesWrapper) {
    slidesWrapper.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    });

    slidesWrapper.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      
      // Handle Swipe left/right
      if (touchStartX - touchEndX > 50) {
        changeSlide(1); // Swipe left, load next slide
      }
      if (touchEndX - touchStartX > 50) {
        changeSlide(-1); // Swipe right, load prev slide
      }
    });
  }

  // Keyboard navigation support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      changeSlide(1);
    } else if (e.key === 'ArrowLeft') {
      changeSlide(-1);
    }
  });

  // Copy simulator card listeners
  const simCard1 = document.getElementById('sim-card-1');
  const simCard2 = document.getElementById('sim-card-2');
  
  if (simCard1) {
    simCard1.addEventListener('click', () => runSimulatorClick(1));
  }
  if (simCard2) {
    simCard2.addEventListener('click', () => runSimulatorClick(2));
  }
});
