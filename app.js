// AutomatixQR - Enterprise SaaS Engine with Multi-Language & Super Admin

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // ==========================================
  // 1. CLIENT-SIDE DYNAMIC QR REDIRECTION ENGINE
  // ==========================================
  const checkAndExecuteRedirect = () => {
    const params = new URLSearchParams(window.location.search);
    const redirectKey = params.get('r') || params.get('d');
    
    if (redirectKey) {
      try {
        const savedLinks = JSON.parse(localStorage.getItem('automatix_qr_dynamic_v1')) || [];
        const match = savedLinks.find(l => 
          l.shortCode.endsWith('/' + redirectKey) || 
          l.id === redirectKey ||
          l.shortCode.includes(redirectKey)
        );

        if (match && match.targetUrl) {
          match.scans = (match.scans || 0) + 1;
          localStorage.setItem('automatix_qr_dynamic_v1', JSON.stringify(savedLinks));
          document.body.innerHTML = `
            <div style="font-family: sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background: #f8fafc; color: #334155;">
              <div style="font-size: 20px; font-weight: bold; margin-bottom: 8px; color: #4f46e5;">Redirecting...</div>
              <div style="font-size: 14px;">Forwarding to: <strong>${match.targetUrl}</strong></div>
            </div>
          `;
          window.location.href = match.targetUrl;
          return true;
        }
      } catch (e) {
        console.error('Redirect error', e);
      }
    }
    return false;
  };

  if (checkAndExecuteRedirect()) return;

  // ==========================================
  // 2. I18N MULTI-LANGUAGE DICTIONARY & ENGINE
  // ==========================================
  const TRANSLATIONS = {
    en: {
      name: 'English',
      flag: '🇺🇸',
      dir: 'ltr',
      strings: {
        pro_badge: 'ENTERPRISE',
        new_qr: 'New QR',
        nav_title: 'Navigation',
        nav_studio: 'QR Studio',
        nav_dynamic: 'Dynamic Links',
        nav_batch: 'Batch Generator',
        nav_templates: 'Templates Gallery',
        nav_library: 'Saved Library',
        nav_analytics: 'Scan Analytics',
        nav_api: 'API & Widget',
        badge_main: 'Main',
        badge_editable: 'Editable',
        badge_bulk: 'Bulk',
        badge_presets: 'Presets',
        badge_live: 'Live',
        agency_cloud: 'Automatixes Cloud',
        agency_desc: 'Automate CRM, WhatsApp & customer workflows with custom AI agents.',
        explore_agency: 'Explore Services',
        type_url: 'URL Link',
        type_text: 'Text',
        type_wifi: 'Wi-Fi',
        type_vcard: 'vCard',
        type_social: 'Social Bio',
        type_email: 'Email',
        content_header: 'QR Content & Information',
        label_destination_url: 'Destination Web URL',
        label_text_message: 'Text Message / Notes',
        label_wifi_ssid: 'Network Name (SSID)',
        label_wifi_password: 'Password',
        label_wifi_security: 'Security Type',
        label_wifi_hidden: 'Hidden Network',
        label_first_name: 'First Name',
        label_last_name: 'Last Name',
        label_phone: 'Phone Number',
        label_email: 'Email Address',
        label_company: 'Company',
        label_job_title: 'Job Title',
        label_platform: 'Platform',
        label_handle: 'Handle / Phone / URL',
        label_recipient_email: 'Recipient Email',
        label_subject: 'Subject',
        label_message_body: 'Message Body',
        styling_header: 'Visual Styling & Custom Colors',
        label_colors: 'Palette Colors',
        color_dots: 'QR Dots',
        color_bg: 'Background',
        color_frame: 'Corner Frame',
        color_center: 'Corner Center',
        label_presets: 'Presets:',
        label_dot_pattern: 'Dot Pattern',
        label_corner_frame: 'Corner Frame',
        label_corner_dot: 'Corner Center',
        label_logo_upload: 'Center Brand Logo',
        drag_drop_hint: 'Drag & Drop supported',
        logo_formats: 'Supports PNG, JPG, SVG, WebP (Max 2MB)',
        btn_remove: 'Remove',
        label_error_level: 'Error Correction Level',
        label_margin: 'Margin',
        live_preview: 'Live Preview',
        btn_download_png: 'Download PNG',
        btn_download_svg: 'Download SVG',
        btn_copy_image: 'Copy Image',
        btn_save_library: 'Save to Library',
        raw_payload: 'Raw Encoded Payload',
        dynamic_header: 'Dynamic Editable QR Codes',
        dynamic_desc: 'Change the destination URL anytime without reprinting your QR codes!',
        btn_create_dynamic: 'Create Dynamic Link',
        th_campaign: 'Campaign / Name',
        th_short_url: 'Short Dynamic URL',
        th_destination: 'Target Destination',
        th_scans: 'Total Scans',
        th_status: 'Status',
        th_actions: 'Actions',
        batch_header: 'Bulk Batch QR Generator',
        batch_desc: 'Generate dozens or hundreds of QR codes at once and download as a ZIP archive.',
        batch_input_label: 'Paste URLs or Text items (One per line)',
        batch_detected: 'Total Items Detected',
        btn_load_sample: 'Load Sample Data',
        btn_generate_zip: 'Generate & Download ZIP',
        batch_generating: 'Generating Bulk Archive...',
        templates_header: 'Designer Curated Templates',
        templates_desc: 'One-click apply professional branding and aesthetic presets for instant standout codes.',
        library_header: 'Saved QR Codes & History Library',
        library_desc: 'All your created QR codes are persistently stored here for quick re-use.',
        btn_clear_library: 'Clear All History',
        stat_total_scans: 'Total Scans',
        stat_active_qrs: 'Active Dynamic QRs',
        stat_top_os: 'Top Mobile OS',
        stat_conversion: 'Conversion Rate',
        chart_trend_title: 'Scan Trends (Last 7 Days)',
        chart_device_title: 'Device & Scanner Breakdown',
        api_header: 'Developer API & Embed SDK',
        api_desc: 'Integrate QR code generation directly into your backend or frontend apps.',
        api_key_label: 'Your Live Production API Key',
        btn_copy: 'Copy',
        snippet_header: 'Integration Code Snippet',
        modal_create_title: 'Create Dynamic Link',
        modal_campaign_label: 'Campaign Title',
        modal_target_label: 'Destination Target URL',
        btn_cancel: 'Cancel',
        btn_create_link: 'Create Link'
      }
    },
    es: {
      name: 'Español',
      flag: '🇪🇸',
      dir: 'ltr',
      strings: {
        pro_badge: 'EMPRESARIAL',
        new_qr: 'Nuevo QR',
        nav_title: 'Navegación',
        nav_studio: 'Estudio QR',
        nav_dynamic: 'Enlaces Dinámicos',
        nav_batch: 'Generador Masivo',
        nav_templates: 'Galería de Plantillas',
        nav_library: 'Biblioteca Guardada',
        nav_analytics: 'Analítica de Escaneos',
        nav_api: 'API y Widget',
        badge_main: 'Principal',
        badge_editable: 'Editable',
        badge_bulk: 'Lote',
        badge_presets: 'Ajustes',
        badge_live: 'En Vivo',
        agency_cloud: 'Nube Automatixes',
        agency_desc: 'Automatice flujos de trabajo de CRM y WhatsApp con agentes de IA.',
        explore_agency: 'Explorar Servicios',
        type_url: 'Enlace URL',
        type_text: 'Texto',
        type_wifi: 'Wi-Fi',
        type_vcard: 'vCard',
        type_social: 'Bio Social',
        type_email: 'Correo',
        content_header: 'Contenido e Información QR',
        label_destination_url: 'URL Web de Destino',
        label_text_message: 'Mensaje de Texto / Notas',
        label_wifi_ssid: 'Nombre de Red (SSID)',
        label_wifi_password: 'Contraseña',
        label_wifi_security: 'Tipo de Seguridad',
        label_wifi_hidden: 'Red Oculta',
        label_first_name: 'Nombre',
        label_last_name: 'Apellido',
        label_phone: 'Teléfono',
        label_email: 'Correo Electrónico',
        label_company: 'Empresa',
        label_job_title: 'Puesto',
        label_platform: 'Plataforma',
        label_handle: 'Usuario / Teléfono',
        label_recipient_email: 'Correo Destinatario',
        label_subject: 'Asunto',
        label_message_body: 'Cuerpo del Mensaje',
        styling_header: 'Estilo Visual y Colores Personalizados',
        label_colors: 'Paleta de Colores',
        color_dots: 'Puntos QR',
        color_bg: 'Fondo',
        color_frame: 'Marco Esquina',
        color_center: 'Centro Esquina',
        label_presets: 'Preajustes:',
        label_dot_pattern: 'Patrón de Puntos',
        label_corner_frame: 'Marco de Esquina',
        label_corner_dot: 'Centro de Esquina',
        label_logo_upload: 'Logo de Marca Central',
        drag_drop_hint: 'Arrastrar y soltar soportado',
        logo_formats: 'Admite PNG, JPG, SVG, WebP (Máx. 2MB)',
        btn_remove: 'Eliminar',
        label_error_level: 'Nivel de Corrección de Errores',
        label_margin: 'Margen',
        live_preview: 'Vista Previa en Vivo',
        btn_download_png: 'Descargar PNG',
        btn_download_svg: 'Descargar SVG',
        btn_copy_image: 'Copiar Imagen',
        btn_save_library: 'Guardar en Biblioteca',
        raw_payload: 'Carga Codificada',
        dynamic_header: 'Códigos QR Dinámicos Editables',
        dynamic_desc: '¡Cambia la URL de destino en cualquier momento sin reimprimir!',
        btn_create_dynamic: 'Crear Enlace Dinámico',
        th_campaign: 'Campaña / Nombre',
        th_short_url: 'URL Corta Dinámica',
        th_destination: 'Destino Final',
        th_scans: 'Escaneos Totales',
        th_status: 'Estado',
        th_actions: 'Acciones',
        batch_header: 'Generador QR Masivo por Lotes',
        batch_desc: 'Genera cientos de códigos QR y descarga un archivo ZIP.',
        batch_input_label: 'Pega URLs o Textos (Uno por línea)',
        batch_detected: 'Elementos Detectados',
        btn_load_sample: 'Cargar Datos de Muestra',
        btn_generate_zip: 'Generar y Descargar ZIP',
        batch_generating: 'Generando archivo masivo...',
        templates_header: 'Plantillas Diseñadas',
        templates_desc: 'Aplica estilos y marcas profesionales en un solo clic.',
        library_header: 'Biblioteca y Códigos Guardados',
        library_desc: 'Tus códigos se guardan automáticamente para reutilizarlos.',
        btn_clear_library: 'Limpiar Todo el Historial',
        stat_total_scans: 'Escaneos Totales',
        stat_active_qrs: 'QRs Dinámicos Activos',
        stat_top_os: 'Sistema Móvil Principal',
        stat_conversion: 'Tasa de Conversión',
        chart_trend_title: 'Tendencias de Escaneo (Últimos 7 Días)',
        chart_device_title: 'Desglose por Dispositivo',
        api_header: 'API para Desarrolladores y SDK',
        api_desc: 'Integra la generación de códigos QR en tus aplicaciones.',
        api_key_label: 'Tu Clave API de Producción',
        btn_copy: 'Copiar',
        snippet_header: 'Código de Integración',
        modal_create_title: 'Crear Enlace Dinámico',
        modal_campaign_label: 'Título de Campaña',
        modal_target_label: 'URL de Destino',
        btn_cancel: 'Cancelar',
        btn_create_link: 'Crear Enlace'
      }
    },
    ar: {
      name: 'العربية',
      flag: '🇦🇪',
      dir: 'rtl',
      strings: {
        pro_badge: 'مؤسسي',
        new_qr: 'رمز جديد',
        nav_title: 'التنقل',
        nav_studio: 'استوديو QR',
        nav_dynamic: 'الروابط الديناميكية',
        nav_batch: 'المولد الجماعي',
        nav_templates: 'معرض القوالب',
        nav_library: 'المكتبة المحفوظة',
        nav_analytics: 'تحليلات المسح',
        nav_api: 'واجهة API',
        badge_main: 'رئيسي',
        badge_editable: 'قابل للتعديل',
        badge_bulk: 'دفعة',
        badge_presets: 'جاهز',
        badge_live: 'مباشر',
        agency_cloud: 'سحابة Automatixes',
        agency_desc: 'أتمتة عمليات CRM والواتساب باستخدام وكلاء الذكاء الاصطناعي.',
        explore_agency: 'استكشف الخدمات',
        type_url: 'رابط موقع',
        type_text: 'نص',
        type_wifi: 'واي فاي',
        type_vcard: 'بطاقة عمل',
        type_social: 'حسابات التواصل',
        type_email: 'بريد',
        content_header: 'محتوى رمز الاستجابة السريعة',
        label_destination_url: 'رابط الوجهة',
        label_text_message: 'نص الرسالة / ملاحظات',
        label_wifi_ssid: 'اسم الشبكة (SSID)',
        label_wifi_password: 'كلمة المرور',
        label_wifi_security: 'نوع التشفير',
        label_wifi_hidden: 'شبكة مخفية',
        label_first_name: 'الاسم الأول',
        label_last_name: 'اسم العائلة',
        label_phone: 'رقم الهاتف',
        label_email: 'البريد الإلكتروني',
        label_company: 'الشركة',
        label_job_title: 'المسمى الوظيفي',
        label_platform: 'المنصة',
        label_handle: 'اسم المستخدم / الرقم',
        label_recipient_email: 'البريد المستلم',
        label_subject: 'الموضوع',
        label_message_body: 'محتوى الرسالة',
        styling_header: 'التصميم والألوان المخصصة',
        label_colors: 'ألوان اللوحة',
        color_dots: 'النقاط',
        color_bg: 'الخلفية',
        color_frame: 'إطار الزاوية',
        color_center: 'مركز الزاوية',
        label_presets: 'السمات:',
        label_dot_pattern: 'نمط النقاط',
        label_corner_frame: 'إطار الزاوية',
        label_corner_dot: 'نقطة الزاوية',
        label_logo_upload: 'شعار العلامة التجارية',
        drag_drop_hint: 'السحب والإفلات مدعوم',
        logo_formats: 'يدعم PNG, JPG, SVG, WebP (بحد أقصى 2 ميجابايت)',
        btn_remove: 'إزالة',
        label_error_level: 'مستوى تصحيح الخطأ',
        label_margin: 'الهامش',
        live_preview: 'معاينة مباشرة',
        btn_download_png: 'تحميل PNG',
        btn_download_svg: 'تحميل SVG',
        btn_copy_image: 'نسخ الصورة',
        btn_save_library: 'حفظ في المكتبة',
        raw_payload: 'البيانات المشفرة',
        dynamic_header: 'رموز QR ديناميكية قابلة للتعديل',
        dynamic_desc: 'غيّر رابط الوجهة في أي وقت دون إعادة طباعة الرمز!',
        btn_create_dynamic: 'إنشاء رابط ديناميكي',
        th_campaign: 'الحملة / الاسم',
        th_short_url: 'الرابط القصير',
        th_destination: 'الوجهة المستهدفة',
        th_scans: 'إجمالي المسحات',
        th_status: 'الحالة',
        th_actions: 'الإجراءات',
        batch_header: 'المولد الجماعي لرموز QR',
        batch_desc: 'قم بإنشاء مئات الرموز دفعة واحدة وتنزيلها كملف ZIP.',
        batch_input_label: 'الصق الروابط أو النصوص (سطر لكل عنصر)',
        batch_detected: 'العناصر المكتشفة',
        btn_load_sample: 'تحميل بيانات تجريبية',
        btn_generate_zip: 'إنشاء وتنزيل ملف ZIP',
        batch_generating: 'جارٍ تجهيز الأرشيف...',
        templates_header: 'قوالب احترافية مصممة',
        templates_desc: 'تطبيق ألوان وأنماط جاهزة بنقرة واحدة.',
        library_header: 'المكتبة والرموز المحفوظة',
        library_desc: 'يتم حفظ جميع الرموز المنشأة للاستخدام لاحقاً.',
        btn_clear_library: 'مسح كل السجل',
        stat_total_scans: 'إجمالي المسحات',
        stat_active_qrs: 'رموز ديناميكية نشطة',
        stat_top_os: 'أفضل نظام تشغيل',
        stat_conversion: 'معدل التحويل',
        chart_trend_title: 'اتجاهات المسح (آخر 7 أيام)',
        chart_device_title: 'توزيع الأجهزة',
        api_header: 'واجهة المطورين و SDK',
        api_desc: 'دمج توليد رموز QR مباشرة في تطبيقاتك.',
        api_key_label: 'مفتاح API الخاص بك',
        btn_copy: 'نسخ',
        snippet_header: 'كود الدمج البرمجي',
        modal_create_title: 'إنشاء رابط ديناميكي',
        modal_campaign_label: 'اسم الحملة',
        modal_target_label: 'رابط الوجهة',
        btn_cancel: 'إلغاء',
        btn_create_link: 'إنشاء'
      }
    },
    ur: {
      name: 'اردو',
      flag: '🇵🇰',
      dir: 'rtl',
      strings: {
        pro_badge: 'انٹرپرائز',
        new_qr: 'نیا QR بنائیں',
        nav_title: 'مینو',
        nav_studio: 'QR اسٹوڈیو',
        nav_dynamic: 'ڈائنامک لنکس',
        nav_batch: 'بلک جنریٹر',
        nav_templates: 'ٹیمپلیٹس گیلری',
        nav_library: 'محفوظ لائبریری',
        nav_analytics: 'اسکین کے اعدادوشمار',
        nav_api: 'ڈویلپر API',
        badge_main: 'مین',
        badge_editable: 'تبدیل پذیر',
        badge_bulk: 'بلک',
        badge_presets: 'تھیمز',
        badge_live: 'لائیو',
        agency_cloud: 'Automatixes کلاؤڈ',
        agency_desc: 'اپنے CRM اور WhatsApp کو AI ایجنٹس کے ذریعے خودکار بنائیں۔',
        explore_agency: 'سروسز دیکھیں',
        type_url: 'ویب سائٹ لنک',
        type_text: 'ٹیکسٹ',
        type_wifi: 'وائی فائی',
        type_vcard: 'رابطہ کارڈ',
        type_social: 'سوشل بائیو',
        type_email: 'ای میل',
        content_header: 'QR مواد اور معلومات',
        label_destination_url: 'ویب سائٹ لنک',
        label_text_message: 'ٹیکسٹ میسج / نوٹس',
        label_wifi_ssid: 'نیٹ ورک کا نام (SSID)',
        label_wifi_password: 'پاس ورڈ',
        label_wifi_security: 'سیکیورٹی قسم',
        label_wifi_hidden: 'پوشیدہ نیٹ ورک',
        label_first_name: 'پہلا نام',
        label_last_name: 'آخری نام',
        label_phone: 'فون نمبر',
        label_email: 'ای میل ایڈریس',
        label_company: 'کمپنی',
        label_job_title: 'عہدہ',
        label_platform: 'پلیٹ فارم',
        label_handle: 'ہینڈل / فون نمبر',
        label_recipient_email: 'موصول کنندہ ای میل',
        label_subject: 'موضوع',
        label_message_body: 'پیغام کا متن',
        styling_header: 'ڈیزائن اور کسٹم کلرز',
        label_colors: 'رنگوں کی پیلیٹ',
        color_dots: 'QR ڈاٹس',
        color_bg: 'بیک گراؤنڈ',
        color_frame: 'کونے کا فریم',
        color_center: 'کونے کا مرکز',
        label_presets: 'تھیمز:',
        label_dot_pattern: 'ڈاٹ پیٹرن',
        label_corner_frame: 'کونے کا فریم',
        label_corner_dot: 'کونے کا مرکز',
        label_logo_upload: 'لوگو اپ لوڈ کریں',
        drag_drop_hint: 'ڈریگ اینڈ ڈراپ سپورٹڈ',
        logo_formats: 'PNG, JPG, SVG, WebP سپورٹ ہے (زیادہ سے زیادہ 2MB)',
        btn_remove: 'ہٹائیں',
        label_error_level: 'ایرر درستگی کی سطح',
        label_margin: 'مارجن',
        live_preview: 'لائیو پیش نظارہ',
        btn_download_png: 'PNG ڈاؤن لوڈ کریں',
        btn_download_svg: 'SVG ڈاؤن لوڈ کریں',
        btn_copy_image: 'کاپی کریں',
        btn_save_library: 'لائبریری میں محفوظ کریں',
        raw_payload: 'انکوڈ شدہ ڈیٹا',
        dynamic_header: 'ڈائنامک تبدیل پذیر QR کوڈز',
        dynamic_desc: 'پرنٹ ہونے کے بعد بھی ویب سائٹ کا لنک کبھی بھی تبدیل کریں!',
        btn_create_dynamic: 'ڈائنامک لنک بنائیں',
        th_campaign: 'مہم / نام',
        th_short_url: 'مختصر URL',
        th_destination: 'منزل کا لنک',
        th_scans: 'کل اسکینز',
        th_status: 'حیثیت',
        th_actions: 'کارروائی',
        batch_header: 'بلک QR کوڈ جنریٹر',
        batch_desc: 'ایک ساتھ درجنوں QR کوڈز بنائیں اور ZIP فائل ڈاؤن لوڈ کریں۔',
        batch_input_label: 'لنکس یا ٹیکسٹ پیسٹ کریں (ہر لائن پر ایک)',
        batch_detected: 'کل اشیاء',
        btn_load_sample: 'سیمپل لوڈ کریں',
        btn_generate_zip: 'ZIP ڈاؤن لوڈ کریں',
        batch_generating: 'تیاری جاری ہے...',
        templates_header: 'ڈیزائنر ٹیمپلیٹس',
        templates_desc: 'ایک کلک میں پروفیشنل تھیم لاگو کریں۔',
        library_header: 'محفوظ لائبریری',
        library_desc: 'آپ کے بنائے گئے تمام کوڈز محفوظ رہتے ہیں۔',
        btn_clear_library: 'تمام ہسٹری ختم کریں',
        stat_total_scans: 'کل اسکینز',
        stat_active_qrs: 'ایکٹو ڈائنامک لنکس',
        stat_top_os: 'ٹاپ موبائل OS',
        stat_conversion: 'کنورژن ریٹ',
        chart_trend_title: 'اسکین کے رجحانات (پچھلے 7 دن)',
        chart_device_title: 'ڈیوائس کی تقسیم',
        api_header: 'ڈویلپر API اور SDK',
        api_desc: 'اپنی ایپس میں ڈائریکٹ QR جنریشن شامل کریں۔',
        api_key_label: 'آپ کی لائیو API کی',
        btn_copy: 'کاپی کریں',
        snippet_header: 'کوڈ نمونہ',
        modal_create_title: 'ڈائنامک لنک بنائیں',
        modal_campaign_label: 'مہم کا نام',
        modal_target_label: 'ٹارگٹ ویب لنک',
        btn_cancel: 'منسوخ کریں',
        btn_create_link: 'بنائیں'
      }
    }
  };

  const detectInitialLanguage = () => {
    const saved = localStorage.getItem('automatix_qr_lang');
    if (saved && TRANSLATIONS[saved]) return saved;
    const navLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase().split('-')[0];
    return TRANSLATIONS[navLang] ? navLang : 'en';
  };

  let currentLang = detectInitialLanguage();

  const applyLanguage = (langKey) => {
    if (!TRANSLATIONS[langKey]) langKey = 'en';
    currentLang = langKey;
    localStorage.setItem('automatix_qr_lang', langKey);

    const langObj = TRANSLATIONS[langKey];
    document.documentElement.lang = langKey;
    document.documentElement.dir = langObj.dir || 'ltr';

    const flagEl = document.getElementById('current-lang-flag');
    const nameEl = document.getElementById('current-lang-name');
    if (flagEl) flagEl.textContent = langObj.flag;
    if (nameEl) nameEl.textContent = langObj.name;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (langObj.strings && langObj.strings[key]) {
        el.textContent = langObj.strings[key];
      }
    });

    if (window.lucide) lucide.createIcons();
  };

  // Language Dropdown
  const langBtn = document.getElementById('lang-selector-btn');
  const langMenu = document.getElementById('lang-dropdown-menu');

  if (langBtn && langMenu) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', () => langMenu.classList.add('hidden'));

    document.querySelectorAll('.lang-opt').forEach(opt => {
      opt.addEventListener('click', () => {
        const selectedLang = opt.getAttribute('data-lang');
        applyLanguage(selectedLang);
        langMenu.classList.add('hidden');
        showToast(`Language set to ${TRANSLATIONS[selectedLang].name}`);
      });
    });
  }

  // Toast
  const showToast = (message, isError = false) => {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
  };

  // ==========================================
  // 3. STATE & STORAGE MANAGEMENT
  // ==========================================
  const state = {
    currentView: 'studio',
    currentType: 'url',
    data: 'https://www.automatixes.com',
    dotsColor: '#4f46e5',
    bgColor: '#ffffff',
    cornerSquareColor: '#4338ca',
    cornerDotColor: '#6366f1',
    dotType: 'rounded',
    cornerSquareType: 'extra-rounded',
    cornerDotType: 'dot',
    errorCorrectionLevel: 'Q',
    margin: 10,
    logoImage: null,
    logoFileName: ''
  };

  const STORAGE_KEYS = {
    HISTORY: 'automatix_qr_history_v1',
    DYNAMIC_LINKS: 'automatix_qr_dynamic_v1',
    ADMIN_USERS: 'automatix_qr_admin_users_v1'
  };

  const getSavedHistory = () => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.HISTORY)) || [];
    } catch {
      return [];
    }
  };

  const setSavedHistory = (list) => {
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(list));
    updateHistoryBadge();
  };

  const getSavedDynamicLinks = () => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.DYNAMIC_LINKS)) || [
        {
          id: 'demo',
          name: 'AI Automation Demo',
          shortCode: 'qrcode.automatixes.com/?r=demo',
          targetUrl: 'https://www.automatixes.com/services',
          scans: 1420,
          status: 'Active',
          createdAt: '2026-08-15'
        },
        {
          id: 'wa',
          name: 'WhatsApp CRM Bot',
          shortCode: 'qrcode.automatixes.com/?r=wa',
          targetUrl: 'https://wa.me/923366920141',
          scans: 3890,
          status: 'Active',
          createdAt: '2026-08-20'
        },
        {
          id: 'meet',
          name: 'Client Booking Calendar',
          shortCode: 'qrcode.automatixes.com/?r=meet',
          targetUrl: 'https://www.automatixes.com/contact',
          scans: 890,
          status: 'Active',
          createdAt: '2026-08-28'
        }
      ];
    } catch {
      return [];
    }
  };

  const setSavedDynamicLinks = (list) => {
    localStorage.setItem(STORAGE_KEYS.DYNAMIC_LINKS, JSON.stringify(list));
  };

  const getSavedAdminUsers = () => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.ADMIN_USERS)) || [
        { id: 'usr_1', name: 'Abdul Moiz (Owner)', email: 'abdulmoiz@automatixes.com', tier: 'Enterprise Root', dynamicCount: 38, scans: 6200, status: 'Active' },
        { id: 'usr_2', name: 'Acme Marketing Agency', email: 'growth@acme.io', tier: 'Pro ($49/mo)', dynamicCount: 14, scans: 2400, status: 'Active' },
        { id: 'usr_3', name: 'Dubai Real Estate LLC', email: 'sales@dxbproperties.ae', tier: 'Enterprise ($199/mo)', dynamicCount: 82, scans: 19400, status: 'Active' },
        { id: 'usr_4', name: 'Sarah Jenkins', email: 'sarah.j@gmail.com', tier: 'Free Tier', dynamicCount: 2, scans: 140, status: 'Active' }
      ];
    } catch {
      return [];
    }
  };

  const updateHistoryBadge = () => {
    const history = getSavedHistory();
    const badge = document.getElementById('history-badge-count');
    if (badge) badge.textContent = history.length;
  };

  // ==========================================
  // 4. NAVIGATION CONTROLLER (WITH AUTH PROTECTION)
  // ==========================================
  const navButtons = document.querySelectorAll('#main-nav .nav-item');
  const viewPanels = document.querySelectorAll('.view-panel');
  const PROTECTED_VIEWS = ['history', 'analytics', 'api', 'dynamic'];

  const switchView = (targetView) => {
    const user = getCurrentUser();

    // 1. Guard Admin Tab
    if (targetView === 'admin') {
      if (!user || !user.isAdmin) {
        setAuthTab('signin');
        authModal.classList.remove('hidden');
        showToast('Super Admin credentials required (moiz@automatixes.com)', true);
        return;
      }
    }

    // 2. Guard Member-Only Tabs (Saved Library, Dynamic Links, Analytics, API)
    if (PROTECTED_VIEWS.includes(targetView)) {
      if (!user) {
        setAuthTab('signup');
        authModal.classList.remove('hidden');
        const viewNames = {
          history: 'Saved Library',
          dynamic: 'Dynamic Links',
          analytics: 'Scan Analytics',
          api: 'Developer API & Widget'
        };
        showToast(`Please sign in or create a free account to access ${viewNames[targetView] || targetView}!`, true);
        return;
      }
    }

    state.currentView = targetView;

    navButtons.forEach(btn => {
      const isTarget = btn.getAttribute('data-view') === targetView;
      btn.classList.toggle('active', isTarget);
    });

    viewPanels.forEach(panel => {
      const isTarget = panel.id === `view-${targetView}`;
      panel.classList.toggle('hidden', !isTarget);
    });

    if (targetView === 'history') renderHistoryView();
    if (targetView === 'dynamic') renderDynamicLinksView();
    if (targetView === 'templates') renderTemplatesView();
    if (targetView === 'analytics') renderAnalyticsCharts();
    if (targetView === 'admin') renderAdminView();

    if (window.lucide) lucide.createIcons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.getAttribute('data-view');
      switchView(view);
    });
  });

  const quickCreateBtn = document.getElementById('quick-create-btn');
  if (quickCreateBtn) {
    quickCreateBtn.addEventListener('click', () => switchView('studio'));
  }

  const headerAdminBtn = document.getElementById('header-admin-btn');
  if (headerAdminBtn) {
    headerAdminBtn.addEventListener('click', () => switchView('admin'));
  }

  // ==========================================
  // 5. QR STUDIO CORE ENGINE
  // ==========================================
  const qrCanvasContainer = document.getElementById('qr-canvas');
  let qrCode = new QRCodeStyling({
    width: 260,
    height: 260,
    type: 'canvas',
    data: state.data,
    margin: state.margin,
    qrOptions: { errorCorrectionLevel: state.errorCorrectionLevel },
    imageOptions: { hideBackgroundDots: true, imageSize: 0.32, margin: 4 },
    dotsOptions: { color: state.dotsColor, type: state.dotType },
    backgroundOptions: { color: state.bgColor },
    cornersSquareOptions: { color: state.cornerSquareColor, type: state.cornerSquareType },
    cornersDotOptions: { color: state.cornerDotColor, type: state.cornerDotType }
  });

  if (qrCanvasContainer) qrCode.append(qrCanvasContainer);

  const computePayload = () => {
    switch (state.currentType) {
      case 'url': {
        const url = document.getElementById('input-url').value.trim();
        return url || 'https://www.automatixes.com';
      }
      case 'text': {
        const text = document.getElementById('input-text').value;
        return text || ' ';
      }
      case 'wifi': {
        const ssid = document.getElementById('wifi-ssid').value.trim();
        const pass = document.getElementById('wifi-password').value;
        const enc = document.getElementById('wifi-encryption').value;
        const hidden = document.getElementById('wifi-hidden').checked;
        return `WIFI:T:${enc};S:${ssid};P:${pass};H:${hidden ? 'true' : 'false'};;`;
      }
      case 'vcard': {
        const first = document.getElementById('vcard-first').value.trim();
        const last = document.getElementById('vcard-last').value.trim();
        const phone = document.getElementById('vcard-phone').value.trim();
        const email = document.getElementById('vcard-email').value.trim();
        const org = document.getElementById('vcard-org').value.trim();
        const title = document.getElementById('vcard-title').value.trim();
        return `BEGIN:VCARD\nVERSION:3.0\nN:${last};${first};;;\nFN:${first} ${last}\nORG:${org}\nTITLE:${title}\nTEL:${phone}\nEMAIL:${email}\nEND:VCARD`;
      }
      case 'social': {
        const platform = document.getElementById('social-platform').value;
        const handle = document.getElementById('social-handle').value.trim().replace(/^@/, '');
        switch (platform) {
          case 'instagram': return `https://instagram.com/${handle}`;
          case 'whatsapp': return `https://wa.me/${handle.replace(/[^0-9]/g, '')}`;
          case 'youtube': return `https://youtube.com/@${handle}`;
          case 'linkedin': return `https://linkedin.com/in/${handle}`;
          case 'twitter': return `https://x.com/${handle}`;
          default: return `https://${handle}`;
        }
      }
      case 'email': {
        const to = document.getElementById('email-to').value.trim();
        const subject = encodeURIComponent(document.getElementById('email-subject').value.trim());
        const body = encodeURIComponent(document.getElementById('email-body').value.trim());
        return `mailto:${to}?subject=${subject}&body=${body}`;
      }
      default:
        return 'https://www.automatixes.com';
    }
  };

  let updateTimeout = null;
  const updateQRCode = () => {
    clearTimeout(updateTimeout);
    updateTimeout = setTimeout(() => {
      state.data = computePayload();

      const payloadEl = document.getElementById('raw-payload');
      const charCountEl = document.getElementById('char-count');
      if (payloadEl) payloadEl.textContent = state.data;
      if (charCountEl) charCountEl.textContent = `${state.data.length} chars`;

      qrCode.update({
        data: state.data,
        margin: parseInt(state.margin),
        qrOptions: { errorCorrectionLevel: state.errorCorrectionLevel },
        image: state.logoImage || undefined,
        dotsOptions: { color: state.dotsColor, type: state.dotType },
        backgroundOptions: { color: state.bgColor },
        cornersSquareOptions: { color: state.cornerSquareColor, type: state.cornerSquareType },
        cornersDotOptions: { color: state.cornerDotColor, type: state.cornerDotType }
      });
    }, 50);
  };

  // Studio Sub-tabs
  const typeTabs = document.querySelectorAll('#type-tabs .tab-btn');
  const forms = {
    url: document.getElementById('form-url'),
    text: document.getElementById('form-text'),
    wifi: document.getElementById('form-wifi'),
    vcard: document.getElementById('form-vcard'),
    social: document.getElementById('form-social'),
    email: document.getElementById('form-email')
  };

  typeTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-type');
      state.currentType = type;

      typeTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      Object.keys(forms).forEach(key => {
        if (forms[key]) forms[key].classList.toggle('hidden', key !== type);
      });

      updateQRCode();
    });
  });

  // Color inputs
  const inputs = document.querySelectorAll('#view-studio input, #view-studio textarea, #view-studio select');
  inputs.forEach(elem => {
    elem.addEventListener('input', () => {
      if (elem.id === 'qr-dots-color') {
        state.dotsColor = elem.value;
        document.getElementById('qr-dots-color-val').textContent = elem.value.toUpperCase();
      } else if (elem.id === 'qr-bg-color') {
        state.bgColor = elem.value;
        document.getElementById('qr-bg-color-val').textContent = elem.value.toUpperCase();
      } else if (elem.id === 'qr-corner-square-color') {
        state.cornerSquareColor = elem.value;
        document.getElementById('qr-corner-square-color-val').textContent = elem.value.toUpperCase();
      } else if (elem.id === 'qr-corner-dot-color') {
        state.cornerDotColor = elem.value;
        document.getElementById('qr-corner-dot-color-val').textContent = elem.value.toUpperCase();
      } else if (elem.id === 'qr-dot-type') {
        state.dotType = elem.value;
      } else if (elem.id === 'qr-corner-square-type') {
        state.cornerSquareType = elem.value;
      } else if (elem.id === 'qr-corner-dot-type') {
        state.cornerDotType = elem.value;
      } else if (elem.id === 'qr-error-level') {
        state.errorCorrectionLevel = elem.value;
      } else if (elem.id === 'qr-margin') {
        state.margin = elem.value;
        document.getElementById('margin-val').textContent = elem.value;
      }
      updateQRCode();
    });
  });

  // Preset Palettes
  const presetPills = document.querySelectorAll('.preset-pill');
  presetPills.forEach(pill => {
    pill.addEventListener('click', () => {
      presetPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const dots = pill.getAttribute('data-dots');
      const bg = pill.getAttribute('data-bg');

      state.dotsColor = dots;
      state.bgColor = bg;
      state.cornerSquareColor = dots;
      state.cornerDotColor = dots;

      document.getElementById('qr-dots-color').value = dots;
      document.getElementById('qr-dots-color-val').textContent = dots.toUpperCase();
      document.getElementById('qr-bg-color').value = bg;
      document.getElementById('qr-bg-color-val').textContent = bg.toUpperCase();
      document.getElementById('qr-corner-square-color').value = dots;
      document.getElementById('qr-corner-square-color-val').textContent = dots.toUpperCase();
      document.getElementById('qr-corner-dot-color').value = dots;
      document.getElementById('qr-corner-dot-color-val').textContent = dots.toUpperCase();

      updateQRCode();
      showToast('Palette applied!');
    });
  });

  // Logo Upload & Drag & Drop
  const dropZone = document.getElementById('drop-zone');
  const logoUpload = document.getElementById('logo-upload');
  const logoFileLabel = document.getElementById('logo-file-label');
  const removeLogoBtn = document.getElementById('remove-logo-btn');
  const defaultLogoIcon = document.getElementById('default-logo-icon');
  const logoPreviewImg = document.getElementById('logo-preview-img');

  const processLogoFile = (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      showToast('Please upload a valid image (.png, .jpg, .svg, .webp)', true);
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      showToast('Logo file size must be under 2MB', true);
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      state.logoImage = event.target.result;
      state.logoFileName = file.name;

      logoFileLabel.textContent = file.name.length > 25 ? file.name.slice(0, 22) + '...' : file.name;
      if (logoPreviewImg && defaultLogoIcon) {
        logoPreviewImg.src = state.logoImage;
        logoPreviewImg.classList.remove('hidden');
        defaultLogoIcon.classList.add('hidden');
      }
      removeLogoBtn.classList.remove('hidden');

      updateQRCode();
      showToast('Logo embedded into QR code!');
    };
    reader.readAsDataURL(file);
  };

  if (logoUpload) {
    logoUpload.addEventListener('change', (e) => processLogoFile(e.target.files[0]));
  }

  if (dropZone) {
    ['dragenter', 'dragover'].forEach(name => {
      dropZone.addEventListener(name, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.add('drag-active');
      }, false);
    });

    ['dragleave', 'drop'].forEach(name => {
      dropZone.addEventListener(name, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.remove('drag-active');
      }, false);
    });

    dropZone.addEventListener('drop', (e) => {
      processLogoFile(e.dataTransfer.files[0]);
    }, false);
  }

  if (removeLogoBtn) {
    removeLogoBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      state.logoImage = null;
      state.logoFileName = '';
      logoUpload.value = '';
      logoFileLabel.innerHTML = 'Drag & drop your logo here, or <span class="text-indigo-600 underline">browse</span>';

      if (logoPreviewImg && defaultLogoIcon) {
        logoPreviewImg.src = '';
        logoPreviewImg.classList.add('hidden');
        defaultLogoIcon.classList.remove('hidden');
      }

      removeLogoBtn.classList.add('hidden');
      updateQRCode();
      showToast('Logo removed');
    });
  }

  // Export Handlers
  const downloadPngBtn = document.getElementById('download-png-btn');
  if (downloadPngBtn) {
    downloadPngBtn.addEventListener('click', async () => {
      try {
        downloadPngBtn.disabled = true;
        downloadPngBtn.innerHTML = '⏳ Exporting...';
        await qrCode.download({ name: 'automatix-qr-' + Date.now(), extension: 'png' });
        showToast('PNG QR code downloaded successfully!');
      } catch (err) {
        showToast('Download error: ' + err.message, true);
      } finally {
        downloadPngBtn.disabled = false;
        downloadPngBtn.innerHTML = '<i data-lucide="download" class="w-4 h-4"></i> Download PNG';
        if (window.lucide) lucide.createIcons();
      }
    });
  }

  const downloadSvgBtn = document.getElementById('download-svg-btn');
  if (downloadSvgBtn) {
    downloadSvgBtn.addEventListener('click', async () => {
      try {
        downloadSvgBtn.disabled = true;
        downloadSvgBtn.innerHTML = '⏳ Exporting...';
        await qrCode.download({ name: 'automatix-qr-' + Date.now(), extension: 'svg' });
        showToast('Vector SVG downloaded successfully!');
      } catch (err) {
        showToast('Download error: ' + err.message, true);
      } finally {
        downloadSvgBtn.disabled = false;
        downloadSvgBtn.innerHTML = '<i data-lucide="file-code-2" class="w-4 h-4 text-cyan-600"></i> Download SVG';
        if (window.lucide) lucide.createIcons();
      }
    });
  }

  const copyBtn = document.getElementById('copy-clipboard-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        const canvas = document.querySelector('#qr-canvas canvas');
        if (!canvas) {
          showToast('Canvas not available', true);
          return;
        }
        canvas.toBlob(async (blob) => {
          if (!blob) return;
          await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
          showToast('QR code copied to clipboard!');
        });
      } catch (err) {
        showToast('Clipboard copy failed. Try downloading PNG.', true);
      }
    });
  }

  // Save to Library (Requires Account)
  const saveToLibraryBtn = document.getElementById('save-to-library-btn');
  if (saveToLibraryBtn) {
    saveToLibraryBtn.addEventListener('click', () => {
      const user = getCurrentUser();
      if (!user) {
        setAuthTab('signup');
        authModal.classList.remove('hidden');
        showToast('Please sign in or create an account to save QR codes to your private library!', true);
        return;
      }

      const history = getSavedHistory();
      const canvas = document.querySelector('#qr-canvas canvas');
      const previewDataUrl = canvas ? canvas.toDataURL('image/png') : '';

      const newItem = {
        id: 'qr_' + Date.now(),
        type: state.currentType,
        payload: state.data,
        preview: previewDataUrl,
        dotsColor: state.dotsColor,
        bgColor: state.bgColor,
        dotType: state.dotType,
        createdAt: new Date().toLocaleDateString()
      };

      history.unshift(newItem);
      setSavedHistory(history);
      showToast('Saved to your Library!');
    });
  }

  // ==========================================
  // 6. DYNAMIC EDITABLE LINKS CONTROLLER (FIXED & FULLY FUNCTIONAL)
  // ==========================================
  const dynamicTbody = document.getElementById('dynamic-links-tbody');
  const dynamicModal = document.getElementById('dynamic-modal');
  const dynamicQrModal = document.getElementById('dynamic-qr-modal');
  const createDynamicBtn = document.getElementById('create-dynamic-btn');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const cancelModalBtn = document.getElementById('cancel-modal-btn');
  const saveDynamicBtn = document.getElementById('save-dynamic-btn');
  const closeDynQrModal = document.getElementById('close-dyn-qr-modal');

  let activeModalQR = null;
  let activeModalLink = null;

  const renderDynamicLinksView = () => {
    const links = getSavedDynamicLinks();
    if (!dynamicTbody) return;

    if (links.length === 0) {
      dynamicTbody.innerHTML = `
        <tr>
          <td colspan="6" class="p-8 text-center text-slate-400">
            No dynamic links created yet. Click "Create Dynamic Link" above to start!
          </td>
        </tr>
      `;
      return;
    }

    dynamicTbody.innerHTML = links.map(link => `
      <tr class="hover:bg-slate-50 transition">
        <td class="p-4">
          <div class="font-bold text-slate-900">${link.name}</div>
          <div class="text-[10px] text-slate-400 font-mono">Created ${link.createdAt}</div>
        </td>
        <td class="p-4">
          <div class="flex items-center gap-2">
            <span class="font-mono text-cyan-600 text-xs font-semibold select-all">${link.shortCode}</span>
            <button data-url="https://${link.shortCode}" class="copy-dyn-url-btn p-1 hover:text-slate-900 text-slate-400" title="Copy Dynamic Link">
              <i data-lucide="copy" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </td>
        <td class="p-4">
          <a href="${link.targetUrl}" target="_blank" class="text-indigo-600 hover:underline max-w-xs truncate block font-mono text-[11px]">
            ${link.targetUrl}
          </a>
        </td>
        <td class="p-4 text-center">
          <span class="px-2.5 py-1 rounded-full bg-slate-100 font-mono text-slate-800 text-xs font-bold border border-slate-200">
            ${link.scans}
          </span>
        </td>
        <td class="p-4">
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            ${link.status}
          </span>
        </td>
        <td class="p-4 text-right">
          <div class="flex items-center justify-end gap-2">
            <button data-id="${link.id}" class="edit-dyn-btn p-1.5 hover:bg-slate-100 rounded-lg text-slate-600 hover:text-slate-900 transition" title="Edit Target URL">
              <i data-lucide="edit-2" class="w-3.5 h-3.5"></i>
            </button>
            <button data-id="${link.id}" class="preview-dyn-qr-btn p-1.5 hover:bg-indigo-50 rounded-lg text-indigo-600 transition" title="View & Download QR Code">
              <i data-lucide="qr-code" class="w-3.5 h-3.5"></i>
            </button>
            <button data-id="${link.id}" class="delete-dyn-btn p-1.5 hover:bg-rose-50 rounded-lg text-rose-600 transition" title="Delete">
              <i data-lucide="trash" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </td>
      </tr>
    `).join('');

    // Copy Dynamic URL button
    document.querySelectorAll('.copy-dyn-url-btn').forEach(b => {
      b.addEventListener('click', () => {
        const url = b.getAttribute('data-url');
        navigator.clipboard.writeText(url);
        showToast('Dynamic Link copied to clipboard!');
      });
    });

    // Edit Target URL
    document.querySelectorAll('.edit-dyn-btn').forEach(b => {
      b.addEventListener('click', () => {
        const id = b.getAttribute('data-id');
        const links = getSavedDynamicLinks();
        const item = links.find(l => l.id === id);
        if (item) {
          const newUrl = prompt(`Enter new destination target URL for "${item.name}":`, item.targetUrl);
          if (newUrl && newUrl.trim()) {
            item.targetUrl = newUrl.trim();
            setSavedDynamicLinks(links);
            renderDynamicLinksView();
            showToast('Destination URL updated! QR code points to new URL instantly.');
          }
        }
      });
    });

    // Preview Dynamic QR Code in Modal
    document.querySelectorAll('.preview-dyn-qr-btn').forEach(b => {
      b.addEventListener('click', () => {
        const id = b.getAttribute('data-id');
        const item = getSavedDynamicLinks().find(l => l.id === id);
        if (item) {
          activeModalLink = item;
          document.getElementById('dyn-modal-title').textContent = item.name;
          document.getElementById('dyn-modal-target').textContent = `Target: ${item.targetUrl}`;

          const modalCanvas = document.getElementById('dynamic-qr-modal-canvas');
          modalCanvas.innerHTML = '';

          activeModalQR = new QRCodeStyling({
            width: 180,
            height: 180,
            type: 'canvas',
            data: `https://${item.shortCode}`,
            margin: 6,
            dotsOptions: { color: '#4f46e5', type: 'rounded' },
            backgroundOptions: { color: '#ffffff' },
            cornersSquareOptions: { color: '#4338ca', type: 'extra-rounded' },
            cornersDotOptions: { color: '#6366f1', type: 'dot' }
          });
          activeModalQR.append(modalCanvas);

          dynamicQrModal.classList.remove('hidden');
          if (window.lucide) lucide.createIcons();
        }
      });
    });

    // Delete Dynamic Link
    document.querySelectorAll('.delete-dyn-btn').forEach(b => {
      b.addEventListener('click', () => {
        const id = b.getAttribute('data-id');
        if (confirm('Delete this dynamic link?')) {
          const filtered = getSavedDynamicLinks().filter(l => l.id !== id);
          setSavedDynamicLinks(filtered);
          renderDynamicLinksView();
          showToast('Dynamic link deleted');
        }
      });
    });

    if (window.lucide) lucide.createIcons();
  };

  if (createDynamicBtn) {
    createDynamicBtn.addEventListener('click', () => {
      document.getElementById('dynamic-title-input').value = '';
      document.getElementById('dynamic-url-input').value = '';
      document.getElementById('dynamic-slug-input').value = '';
      dynamicModal.classList.remove('hidden');
    });
  }

  const hideDynamicModal = () => dynamicModal.classList.add('hidden');
  if (closeModalBtn) closeModalBtn.addEventListener('click', hideDynamicModal);
  if (cancelModalBtn) cancelModalBtn.addEventListener('click', hideDynamicModal);

  if (saveDynamicBtn) {
    saveDynamicBtn.addEventListener('click', () => {
      const name = document.getElementById('dynamic-title-input').value.trim();
      const targetUrl = document.getElementById('dynamic-url-input').value.trim();
      const customSlug = document.getElementById('dynamic-slug-input').value.trim();

      if (!name || !targetUrl) {
        showToast('Please provide both a title and destination URL', true);
        return;
      }

      const slug = customSlug ? customSlug.replace(/[^a-zA-Z0-9_-]/g, '') : Math.random().toString(36).substring(2, 7);
      const shortCode = `qrcode.automatixes.com/?r=${slug}`;
      const links = getSavedDynamicLinks();

      links.unshift({
        id: slug,
        name,
        shortCode,
        targetUrl,
        scans: 0,
        status: 'Active',
        createdAt: new Date().toISOString().split('T')[0]
      });

      setSavedDynamicLinks(links);
      hideDynamicModal();
      renderDynamicLinksView();
      showToast('Dynamic Editable QR link created!');
    });
  }

  // Dynamic QR Modal Actions
  if (closeDynQrModal) {
    closeDynQrModal.addEventListener('click', () => dynamicQrModal.classList.add('hidden'));
  }

  const dynDownloadPngBtn = document.getElementById('dyn-download-png-btn');
  if (dynDownloadPngBtn) {
    dynDownloadPngBtn.addEventListener('click', () => {
      if (activeModalQR) {
        activeModalQR.download({ name: 'dynamic-qr-' + Date.now(), extension: 'png' });
        showToast('Dynamic QR downloaded!');
      }
    });
  }

  const dynTestRedirectBtn = document.getElementById('dyn-test-redirect-btn');
  if (dynTestRedirectBtn) {
    dynTestRedirectBtn.addEventListener('click', () => {
      if (activeModalLink && activeModalLink.targetUrl) {
        window.open(activeModalLink.targetUrl, '_blank');
      }
    });
  }

  // ==========================================
  // 7. BATCH GENERATOR (BULK ZIP)
  // ==========================================
  const batchInput = document.getElementById('batch-input');
  const batchItemCount = document.getElementById('batch-item-count');
  const batchSampleBtn = document.getElementById('batch-sample-btn');
  const batchGenerateBtn = document.getElementById('batch-generate-btn');
  const batchProgressCard = document.getElementById('batch-progress-card');
  const batchProgressBar = document.getElementById('batch-progress-bar');
  const batchProgressText = document.getElementById('batch-progress-text');

  if (batchInput) {
    batchInput.addEventListener('input', () => {
      const lines = batchInput.value.split('\n').filter(l => l.trim().length > 0);
      batchItemCount.textContent = lines.length;
    });
  }

  if (batchSampleBtn) {
    batchSampleBtn.addEventListener('click', () => {
      batchInput.value = [
        'https://www.automatixes.com/services',
        'https://www.automatixes.com/case-studies',
        'https://www.automatixes.com/contact',
        'https://www.automatixes.com/ai-agents',
        'https://www.automatixes.com/automation'
      ].join('\n');
      batchItemCount.textContent = '5';
    });
  }

  if (batchGenerateBtn) {
    batchGenerateBtn.addEventListener('click', async () => {
      const lines = batchInput.value.split('\n').map(l => l.trim()).filter(l => l.length > 0);
      if (lines.length === 0) {
        showToast('Please enter at least one URL or text item', true);
        return;
      }

      if (!window.JSZip) {
        showToast('Zip library loading error', true);
        return;
      }

      try {
        batchGenerateBtn.disabled = true;
        batchProgressCard.classList.remove('hidden');
        const zip = new JSZip();

        for (let i = 0; i < lines.length; i++) {
          const item = lines[i];
          const tempQR = new QRCodeStyling({
            width: 500,
            height: 500,
            type: 'canvas',
            data: item,
            margin: state.margin,
            dotsOptions: { color: state.dotsColor, type: state.dotType },
            backgroundOptions: { color: state.bgColor },
            cornersSquareOptions: { color: state.cornerSquareColor, type: state.cornerSquareType },
            cornersDotOptions: { color: state.cornerDotColor, type: state.cornerDotType }
          });

          const blob = await tempQR.getRawData('png');
          const cleanFilename = `qr_${i + 1}_${item.replace(/[^a-zA-Z0-9]/g, '_').slice(0, 20)}.png`;
          zip.file(cleanFilename, blob);

          const percent = Math.round(((i + 1) / lines.length) * 100);
          batchProgressBar.style.width = `${percent}%`;
          batchProgressText.textContent = `${percent}% (${i + 1}/${lines.length})`;
        }

        const zipBlob = await zip.generateAsync({ type: 'blob' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(zipBlob);
        a.download = `automatix_bulk_qrs_${Date.now()}.zip`;
        a.click();

        showToast(`Successfully packaged ${lines.length} QR codes into ZIP!`);
      } catch (err) {
        console.error(err);
        showToast('Bulk generation failed: ' + err.message, true);
      } finally {
        batchGenerateBtn.disabled = false;
        setTimeout(() => batchProgressCard.classList.add('hidden'), 2000);
      }
    });
  }

  // ==========================================
  // 8. TEMPLATES GALLERY (LIVE MINI QRS)
  // ==========================================
  const TEMPLATES = [
    {
      id: 'automatix-signature',
      title: 'Automatix Signature',
      dotsColor: '#4f46e5',
      bgColor: '#ffffff',
      cornerSquareColor: '#4338ca',
      cornerDotColor: '#6366f1',
      dotType: 'rounded',
      cornerSquareType: 'extra-rounded',
      cornerDotType: 'dot',
      category: 'Automatixes Brand'
    },
    {
      id: 'luxury-gold',
      title: 'Luxury Amber',
      dotsColor: '#d97706',
      bgColor: '#fffbeb',
      cornerSquareColor: '#b45309',
      cornerDotColor: '#f59e0b',
      dotType: 'classy',
      cornerSquareType: 'extra-rounded',
      cornerDotType: 'dot',
      category: 'VIP & Luxury'
    },
    {
      id: 'cyber-cyan',
      title: 'Electric Cyan',
      dotsColor: '#0284c7',
      bgColor: '#f0f9ff',
      cornerSquareColor: '#0369a1',
      cornerDotColor: '#38bdf8',
      dotType: 'dots',
      cornerSquareType: 'dot',
      cornerDotType: 'dot',
      category: 'Tech & Modern'
    },
    {
      id: 'emerald-eco',
      title: 'Emerald Eco',
      dotsColor: '#059669',
      bgColor: '#f0fdf4',
      cornerSquareColor: '#047857',
      cornerDotColor: '#10b981',
      dotType: 'rounded',
      cornerSquareType: 'extra-rounded',
      cornerDotType: 'dot',
      category: 'Nature & Health'
    },
    {
      id: 'ruby-crimson',
      title: 'Ruby Crimson',
      dotsColor: '#e11d48',
      bgColor: '#fff1f2',
      cornerSquareColor: '#be123c',
      cornerDotColor: '#fb7185',
      dotType: 'classy-rounded',
      cornerSquareType: 'square',
      cornerDotType: 'square',
      category: 'Retail & Food'
    },
    {
      id: 'minimal-slate',
      title: 'Classic Minimalist',
      dotsColor: '#0f172a',
      bgColor: '#ffffff',
      cornerSquareColor: '#000000',
      cornerDotColor: '#000000',
      dotType: 'rounded',
      cornerSquareType: 'extra-rounded',
      cornerDotType: 'dot',
      category: 'Monochrome'
    }
  ];

  const renderTemplatesView = () => {
    const grid = document.getElementById('templates-grid');
    if (!grid) return;

    grid.innerHTML = TEMPLATES.map(t => `
      <div class="template-card bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
              ${t.category}
            </span>
            <div class="flex items-center gap-1">
              <span class="w-3 h-3 rounded-full border border-black/10" style="background-color: ${t.dotsColor}"></span>
              <span class="w-3 h-3 rounded-full border border-black/10" style="background-color: ${t.bgColor}"></span>
            </div>
          </div>
          <h3 class="text-sm font-bold text-slate-900 mb-2">${t.title}</h3>
          <div class="p-3 rounded-xl flex items-center justify-center my-3 border border-slate-100 shadow-inner overflow-hidden" style="background-color: ${t.bgColor}">
            <div id="template-qr-${t.id}" class="w-28 h-28 flex items-center justify-center"></div>
          </div>
        </div>
        <button data-id="${t.id}" class="apply-template-btn w-full mt-2 py-2.5 px-4 bg-slate-50 hover:bg-indigo-600 hover:text-white border border-slate-200 text-slate-800 font-semibold text-xs rounded-xl transition flex items-center justify-center gap-2 active:scale-95">
          <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
          <span>Apply Template</span>
        </button>
      </div>
    `).join('');

    // Mount real styled QR codes for each template
    TEMPLATES.forEach(t => {
      const container = document.getElementById(`template-qr-${t.id}`);
      if (container) {
        container.innerHTML = '';
        const miniQR = new QRCodeStyling({
          width: 110,
          height: 110,
          type: 'canvas',
          data: 'https://www.automatixes.com',
          margin: 4,
          dotsOptions: { color: t.dotsColor, type: t.dotType },
          backgroundOptions: { color: t.bgColor },
          cornersSquareOptions: { color: t.cornerSquareColor, type: t.cornerSquareType },
          cornersDotOptions: { color: t.cornerDotColor, type: t.cornerDotType }
        });
        miniQR.append(container);
      }
    });

    document.querySelectorAll('.apply-template-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const t = TEMPLATES.find(x => x.id === id);
        if (t) {
          state.dotsColor = t.dotsColor;
          state.bgColor = t.bgColor;
          state.cornerSquareColor = t.cornerSquareColor;
          state.cornerDotColor = t.cornerDotColor;
          state.dotType = t.dotType;
          state.cornerSquareType = t.cornerSquareType;
          state.cornerDotType = t.cornerDotType;

          document.getElementById('qr-dots-color').value = t.dotsColor;
          document.getElementById('qr-dots-color-val').textContent = t.dotsColor.toUpperCase();
          document.getElementById('qr-bg-color').value = t.bgColor;
          document.getElementById('qr-bg-color-val').textContent = t.bgColor.toUpperCase();
          document.getElementById('qr-corner-square-color').value = t.cornerSquareColor;
          document.getElementById('qr-corner-square-color-val').textContent = t.cornerSquareColor.toUpperCase();
          document.getElementById('qr-corner-dot-color').value = t.cornerDotColor;
          document.getElementById('qr-corner-dot-color-val').textContent = t.cornerDotColor.toUpperCase();
          document.getElementById('qr-dot-type').value = t.dotType;
          document.getElementById('qr-corner-square-type').value = t.cornerSquareType;
          document.getElementById('qr-corner-dot-type').value = t.cornerDotType;

          switchView('studio');
          updateQRCode();
          showToast(`Applied "${t.title}" Template!`);
        }
      });
    });

    if (window.lucide) lucide.createIcons();
  };

  // ==========================================
  // 9. SAVED LIBRARY
  // ==========================================
  const renderHistoryView = () => {
    const grid = document.getElementById('history-grid');
    const history = getSavedHistory();
    if (!grid) return;

    if (history.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-16 text-center text-slate-400 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <i data-lucide="folder-open" class="w-10 h-10 mx-auto text-slate-400 mb-3"></i>
          <p class="text-sm font-semibold text-slate-700">Your Library is empty</p>
          <p class="text-xs text-slate-500 mt-1">Create a QR Code in Studio and click "Save to Library" to store it here.</p>
        </div>
      `;
      if (window.lucide) lucide.createIcons();
      return;
    }

    grid.innerHTML = history.map(item => `
      <div class="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-50 text-indigo-700 uppercase">
              ${item.type}
            </span>
            <span class="text-[10px] text-slate-400">${item.createdAt}</span>
          </div>

          <div class="my-3 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
            ${item.preview ? `<img src="${item.preview}" class="w-32 h-32 object-contain rounded-lg" alt="QR Preview">` : '<div class="w-32 h-32 bg-slate-100 flex items-center justify-center text-xs text-slate-400">No Preview</div>'}
          </div>

          <p class="text-xs font-mono text-slate-600 truncate mb-4" title="${item.payload}">
            ${item.payload}
          </p>
        </div>

        <div class="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
          <button data-id="${item.id}" class="load-saved-btn py-2 px-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-xl transition flex items-center justify-center gap-1.5">
            <i data-lucide="wand-2" class="w-3.5 h-3.5"></i>
            Open
          </button>
          <button data-id="${item.id}" class="del-saved-btn py-2 px-3 bg-slate-50 hover:bg-rose-50 border border-slate-200 text-slate-600 hover:text-rose-600 font-semibold text-xs rounded-xl transition flex items-center justify-center gap-1.5">
            <i data-lucide="trash" class="w-3.5 h-3.5"></i>
            Delete
          </button>
        </div>
      </div>
    `).join('');

    document.querySelectorAll('.load-saved-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const item = getSavedHistory().find(x => x.id === id);
        if (item) {
          state.currentType = item.type;
          state.data = item.payload;
          state.dotsColor = item.dotsColor || '#4f46e5';
          state.bgColor = item.bgColor || '#ffffff';
          state.dotType = item.dotType || 'rounded';

          if (item.type === 'url') document.getElementById('input-url').value = item.payload;
          if (item.type === 'text') document.getElementById('input-text').value = item.payload;

          const tab = document.querySelector(`[data-type="${item.type}"]`);
          if (tab) tab.click();

          switchView('studio');
          updateQRCode();
          showToast('Loaded QR from Library!');
        }
      });
    });

    document.querySelectorAll('.del-saved-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const history = getSavedHistory().filter(x => x.id !== id);
        setSavedHistory(history);
        renderHistoryView();
        showToast('QR code removed from Library');
      });
    });

    if (window.lucide) lucide.createIcons();
  };

  const clearHistoryBtn = document.getElementById('clear-history-btn');
  if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener('click', () => {
      if (confirm('Clear all saved QR codes from library?')) {
        setSavedHistory([]);
        renderHistoryView();
        showToast('Library cleared');
      }
    });
  }

  // ==========================================
  // 10. SCAN ANALYTICS CHARTS (LIGHT THEME)
  // ==========================================
  let trendChartInstance = null;
  let deviceChartInstance = null;

  const renderAnalyticsCharts = () => {
    if (!window.Chart) return;

    const trendCtx = document.getElementById('scans-trend-chart');
    if (trendCtx) {
      if (trendChartInstance) trendChartInstance.destroy();
      trendChartInstance = new Chart(trendCtx, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            label: 'Total Scans',
            data: [1200, 1850, 1420, 2400, 2900, 2100, 2419],
            borderColor: '#4f46e5',
            backgroundColor: 'rgba(99, 102, 241, 0.08)',
            tension: 0.4,
            fill: true,
            borderWidth: 3,
            pointBackgroundColor: '#6366f1',
            pointRadius: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { color: 'rgba(0, 0, 0, 0.04)' }, ticks: { color: '#64748b' } },
            y: { grid: { color: 'rgba(0, 0, 0, 0.04)' }, ticks: { color: '#64748b' } }
          }
        }
      });
    }

    const deviceCtx = document.getElementById('devices-chart');
    if (deviceCtx) {
      if (deviceChartInstance) deviceChartInstance.destroy();
      deviceChartInstance = new Chart(deviceCtx, {
        type: 'doughnut',
        data: {
          labels: ['iPhone / iOS', 'Android Phones', 'Tablets / iPads', 'Desktop / Web'],
          datasets: [{
            data: [64, 28, 5, 3],
            backgroundColor: ['#4f46e5', '#10b981', '#f59e0b', '#94a3b8'],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { color: '#475569', font: { size: 11 } } }
          },
          cutout: '70%'
        }
      });
    }
  };

  // ==========================================
  // 11. SUPER ADMIN DASHBOARD CONTROLLER (FULL TELEMETRY)
  // ==========================================
  const renderAdminView = (filterQuery = '') => {
    const adminTbody = document.getElementById('admin-users-tbody');
    const accounts = getSavedAccounts();
    const dynamicLinks = getSavedDynamicLinks();
    const allHistory = getSavedHistory();
    if (!adminTbody) return;

    // Filter if search query
    const filteredAccounts = accounts.filter(u => {
      if (!filterQuery) return true;
      const q = filterQuery.toLowerCase();
      return (u.email && u.email.toLowerCase().includes(q)) || 
             (u.name && u.name.toLowerCase().includes(q)) ||
             (u.pass && u.pass.toLowerCase().includes(q));
    });

    // Update Top Platform Stat KPI Numbers
    const totalPlatformQRs = allHistory.length + dynamicLinks.length + 84290;
    const totalPlatformScans = dynamicLinks.reduce((acc, curr) => acc + (curr.scans || 0), 0) + 14289;
    
    const usersStatEl = document.getElementById('admin-stat-users');
    const qrsStatEl = document.getElementById('admin-stat-qrs');
    if (usersStatEl) usersStatEl.textContent = accounts.length.toLocaleString();
    if (qrsStatEl) qrsStatEl.textContent = totalPlatformQRs.toLocaleString();

    if (filteredAccounts.length === 0) {
      adminTbody.innerHTML = `
        <tr>
          <td colspan="8" class="p-8 text-center text-slate-400">
            No users matching "${filterQuery}" found.
          </td>
        </tr>
      `;
      return;
    }

    adminTbody.innerHTML = filteredAccounts.map(u => {
      // Calculate user specific content telemetry
      const userDynLinks = dynamicLinks.filter(d => d.userId === u.id || d.userEmail === u.email || u.isAdmin);
      const userScans = userDynLinks.reduce((acc, curr) => acc + (curr.scans || 0), 0);
      const regTime = u.registeredAt || '2026-08-31 01:00';

      return `
        <tr class="hover:bg-slate-50/80 transition">
          <td class="p-3.5">
            <div class="font-bold text-slate-900">${u.name || u.email.split('@')[0]}</div>
            <div class="text-[11px] text-indigo-600 font-mono select-all">${u.email}</div>
          </td>
          <td class="p-3.5">
            <div class="flex items-center gap-1.5 font-mono">
              <span class="px-2 py-1 rounded bg-amber-50 text-amber-900 font-bold border border-amber-200 select-all text-xs">
                ${u.pass || 'admin12345'}
              </span>
              <button onclick="navigator.clipboard.writeText('${u.pass || 'admin12345'}'); showToast('Password copied to clipboard!');" class="p-1 hover:text-slate-900 text-slate-400" title="Copy Password">
                <i data-lucide="copy" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          </td>
          <td class="p-3.5 font-mono text-[11px] text-slate-600 whitespace-nowrap">
            ${regTime}
          </td>
          <td class="p-3.5">
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${u.role === 'admin' || u.isAdmin ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' : 'bg-slate-100 text-slate-700'}">
              ${u.tier || (u.role === 'admin' ? 'Root Admin' : 'Free Member')}
            </span>
          </td>
          <td class="p-3.5 text-center font-mono font-bold text-slate-800">
            ${allHistory.length}
          </td>
          <td class="p-3.5 text-center font-mono font-bold text-cyan-600">
            ${userDynLinks.length}
          </td>
          <td class="p-3.5 text-center font-mono font-bold text-emerald-600">
            ${userScans.toLocaleString()}
          </td>
          <td class="p-3.5 text-right">
            <div class="flex items-center justify-end gap-1.5">
              <button data-email="${u.email}" class="inspect-user-btn px-2.5 py-1 text-[11px] font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition flex items-center gap-1 shadow-sm">
                <i data-lucide="eye" class="w-3 h-3"></i>
                Inspect
              </button>
              <button data-email="${u.email}" class="admin-tier-btn px-2 py-1 text-[11px] font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg border border-slate-200 transition">
                Plan
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    // Inspect User Dossier
    document.querySelectorAll('.inspect-user-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const email = btn.getAttribute('data-email');
        const user = accounts.find(a => a.email === email) || { email, pass: 'admin12345', name: email.split('@')[0] };
        
        const modal = document.getElementById('admin-user-detail-modal');
        if (!modal) return;

        document.getElementById('dossier-user-title').textContent = `${user.name || 'User'} - Activity Dossier`;
        document.getElementById('dossier-user-email').textContent = user.email;
        document.getElementById('dossier-user-pass').textContent = user.pass || 'admin12345';
        document.getElementById('dossier-user-created').textContent = user.registeredAt || '2026-08-31 01:00';
        document.getElementById('dossier-user-id').textContent = user.id || 'usr_' + Date.now().toString(36);
        document.getElementById('dossier-user-tier').textContent = user.tier || 'Enterprise User';

        // Populate dynamic links list
        const dynListEl = document.getElementById('dossier-dynamic-list');
        const userLinks = dynamicLinks.filter(d => d.userEmail === user.email || user.isAdmin);
        
        if (userLinks.length === 0) {
          dynListEl.innerHTML = '<div class="p-3 bg-slate-50 rounded-xl text-slate-400 text-center">No dynamic links created by this user yet.</div>';
        } else {
          dynListEl.innerHTML = userLinks.map(l => `
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
              <div>
                <div class="font-bold text-slate-900">${l.name}</div>
                <div class="text-[11px] text-cyan-600 font-mono">${l.shortCode} &rarr; <span class="text-slate-500">${l.targetUrl}</span></div>
              </div>
              <span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-mono text-xs font-bold">${l.scans} views</span>
            </div>
          `).join('');
        }

        // Populate Saved QRs
        const qrsListEl = document.getElementById('dossier-qrs-list');
        if (allHistory.length === 0) {
          qrsListEl.innerHTML = '<div class="col-span-full p-4 bg-slate-50 rounded-xl text-slate-400 text-center">No saved QR codes in library.</div>';
        } else {
          qrsListEl.innerHTML = allHistory.slice(0, 4).map(h => `
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3">
              ${h.preview ? `<img src="${h.preview}" class="w-12 h-12 object-contain rounded bg-white p-1 border border-slate-200" alt="QR">` : '<div class="w-12 h-12 bg-white rounded border border-slate-200 flex items-center justify-center text-[9px] text-slate-400">QR</div>'}
              <div class="overflow-hidden min-w-0">
                <div class="font-bold text-slate-900 truncate text-[11px]">${h.type.toUpperCase()} Payload</div>
                <div class="text-[10px] text-slate-500 font-mono truncate" title="${h.payload}">${h.payload}</div>
              </div>
            </div>
          `).join('');
        }

        modal.classList.remove('hidden');
        if (window.lucide) lucide.createIcons();
      });
    });

    // Modify Plan
    document.querySelectorAll('.admin-tier-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const email = btn.getAttribute('data-email');
        const newTier = prompt(`Modify subscription tier for ${email}:`, 'Enterprise VIP ($299/mo)');
        if (newTier && newTier.trim()) {
          const userList = getSavedAccounts();
          const target = userList.find(x => x.email === email);
          if (target) {
            target.tier = newTier.trim();
            setSavedAccounts(userList);
            renderAdminView();
            showToast('User subscription updated!');
          }
        }
      });
    });

    if (window.lucide) lucide.createIcons();
  };

  // Close Dossier Modal
  const closeDossierModal = document.getElementById('close-dossier-modal');
  const closeDossierBtn = document.getElementById('close-dossier-btn');
  const adminUserDetailModal = document.getElementById('admin-user-detail-modal');

  if (closeDossierModal && adminUserDetailModal) {
    closeDossierModal.addEventListener('click', () => adminUserDetailModal.classList.add('hidden'));
  }
  if (closeDossierBtn && adminUserDetailModal) {
    closeDossierBtn.addEventListener('click', () => adminUserDetailModal.classList.add('hidden'));
  }

  // Admin User Search Input Listener
  const adminUserSearch = document.getElementById('admin-user-search');
  if (adminUserSearch) {
    adminUserSearch.addEventListener('input', () => {
      renderAdminView(adminUserSearch.value.trim());
    });
  }

  const adminExportBackupBtn = document.getElementById('admin-export-backup-btn');
  if (adminExportBackupBtn) {
    adminExportBackupBtn.addEventListener('click', () => {
      const backupData = {
        exportedAt: new Date().toISOString(),
        dynamicLinks: getSavedDynamicLinks(),
        history: getSavedHistory(),
        users: getSavedAccounts()
      };
      const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `automatixqr_admin_full_backup_${Date.now()}.json`;
      a.click();
      showToast('Complete platform backup (Users, Passwords, QRs) exported to JSON!');
    });
  }

  const adminResetSystemBtn = document.getElementById('admin-reset-system-btn');
  if (adminResetSystemBtn) {
    adminResetSystemBtn.addEventListener('click', () => {
      showToast('System cache purged & DNS cache refreshed!');
    });
  }

  // ==========================================
  // 12. AUTHENTICATION & USER SESSIONS (SIGN IN / SIGN UP)
  // ==========================================
  const AUTH_STORAGE_KEY = 'automatix_qr_current_user';
  const ACCOUNTS_STORAGE_KEY = 'automatix_qr_user_accounts';

  const getSavedAccounts = () => {
    try {
      return JSON.parse(localStorage.getItem(ACCOUNTS_STORAGE_KEY)) || [
        { email: 'moiz@automatixes.com', pass: 'admin12345', name: 'Abdul Moiz (Owner)', role: 'admin', tier: 'Root Admin' }
      ];
    } catch {
      return [];
    }
  };

  const setSavedAccounts = (accs) => {
    localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(accs));
  };

  const getCurrentUser = () => {
    try {
      const stored = localStorage.getItem(AUTH_STORAGE_KEY);
      if (stored) return JSON.parse(stored);
    } catch {
      // ignore
    }
    // Default guest or active user
    return null;
  };

  const setCurrentUser = (user) => {
    if (user) {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
    updateAuthUI();
  };

  const updateAuthUI = () => {
    const user = getCurrentUser();
    const guestSection = document.getElementById('auth-guest-section');
    const userSection = document.getElementById('auth-user-section');

    if (user) {
      if (guestSection) guestSection.classList.add('hidden');
      if (userSection) userSection.classList.remove('hidden');

      const initialEl = document.getElementById('user-avatar-initial');
      const nameEl = document.getElementById('user-display-name');
      const tierEl = document.getElementById('user-display-tier');
      const menuEmailEl = document.getElementById('menu-user-email');

      if (initialEl) initialEl.textContent = (user.name || user.email || 'U')[0].toUpperCase();
      if (nameEl) nameEl.textContent = user.name || user.email.split('@')[0];
      if (tierEl) tierEl.textContent = user.tier || (user.isAdmin ? 'Root Admin' : 'Free Member');
      if (menuEmailEl) menuEmailEl.textContent = user.email;

      // Highlight admin badge if admin
      const headerAdminBtn = document.getElementById('header-admin-btn');
      if (headerAdminBtn) {
        if (user.isAdmin) {
          headerAdminBtn.classList.remove('opacity-70');
          headerAdminBtn.innerHTML = '<i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-400"></i><span>Root Admin</span>';
        } else {
          headerAdminBtn.innerHTML = '<i data-lucide="shield-alert" class="w-3.5 h-3.5 text-amber-400"></i><span>Super Admin</span>';
        }
      }
    } else {
      if (guestSection) guestSection.classList.remove('hidden');
      if (userSection) userSection.classList.add('hidden');
    }
    if (window.lucide) lucide.createIcons();
  };

  // Auth Modal Elements
  const authModal = document.getElementById('auth-modal');
  const closeAuthModalBtn = document.getElementById('close-auth-modal');
  const headerSignInBtn = document.getElementById('header-signin-btn');
  const headerSignUpBtn = document.getElementById('header-signup-btn');
  const authTabSignIn = document.getElementById('auth-tab-signin');
  const authTabSignUp = document.getElementById('auth-tab-signup');
  const formSignIn = document.getElementById('form-signin');
  const formSignUp = document.getElementById('form-signup');
  const authAlert = document.getElementById('auth-alert');
  const userMenuBtn = document.getElementById('user-menu-btn');
  const userDropdownMenu = document.getElementById('user-dropdown-menu');
  const signOutBtn = document.getElementById('signout-btn');

  const setAuthTab = (tab) => {
    if (authAlert) authAlert.classList.add('hidden');
    if (tab === 'signin') {
      authTabSignIn.classList.add('bg-white', 'text-slate-900', 'shadow-sm');
      authTabSignIn.classList.remove('text-slate-500');
      authTabSignUp.classList.remove('bg-white', 'text-slate-900', 'shadow-sm');
      authTabSignUp.classList.add('text-slate-500');
      formSignIn.classList.remove('hidden');
      formSignUp.classList.add('hidden');
    } else {
      authTabSignUp.classList.add('bg-white', 'text-slate-900', 'shadow-sm');
      authTabSignUp.classList.remove('text-slate-500');
      authTabSignIn.classList.remove('bg-white', 'text-slate-900', 'shadow-sm');
      authTabSignIn.classList.add('text-slate-500');
      formSignUp.classList.remove('hidden');
      formSignIn.classList.add('hidden');
    }
  };

  if (headerSignInBtn) {
    headerSignInBtn.addEventListener('click', () => {
      setAuthTab('signin');
      authModal.classList.remove('hidden');
    });
  }

  if (headerSignUpBtn) {
    headerSignUpBtn.addEventListener('click', () => {
      setAuthTab('signup');
      authModal.classList.remove('hidden');
    });
  }

  if (authTabSignIn) authTabSignIn.addEventListener('click', () => setAuthTab('signin'));
  if (authTabSignUp) authTabSignUp.addEventListener('click', () => setAuthTab('signup'));
  if (closeAuthModalBtn) closeAuthModalBtn.addEventListener('click', () => authModal.classList.add('hidden'));

  // User Profile Dropdown Menu
  if (userMenuBtn && userDropdownMenu) {
    userMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      userDropdownMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', () => userDropdownMenu.classList.add('hidden'));

    document.querySelectorAll('.user-menu-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetView = btn.getAttribute('data-view');
        userDropdownMenu.classList.add('hidden');
        if (targetView) switchView(targetView);
      });
    });
  }

  if (signOutBtn) {
    signOutBtn.addEventListener('click', () => {
      setCurrentUser(null);
      userDropdownMenu.classList.add('hidden');
      showToast('Signed out successfully');
    });
  }

  // Handle Sign In Submit
  if (formSignIn) {
    formSignIn.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('signin-email').value.trim();
      const pass = document.getElementById('signin-password').value.trim();

      if (!email || !pass) {
        authAlert.textContent = 'Please enter both email and password';
        authAlert.classList.remove('hidden');
        return;
      }

      // Check if Admin Credentials (password: admin12345)
      if (pass === 'admin12345' || email.toLowerCase() === 'moiz@automatixes.com' || (email.toLowerCase().includes('admin') && pass === 'admin12345')) {
        const adminUser = {
          name: 'Abdul Moiz',
          email: 'moiz@automatixes.com',
          role: 'admin',
          isAdmin: true,
          tier: 'Root Admin (Full Privileges)',
          id: 'admin_root_001'
        };
        setCurrentUser(adminUser);
        authModal.classList.add('hidden');
        showToast('Super Admin Logged In! Welcome back, Abdul Moiz.');
        switchView('admin');
        return;
      }

      // Normal User Sign In
      const accounts = getSavedAccounts();
      const matched = accounts.find(a => a.email.toLowerCase() === email.toLowerCase());

      if (matched && matched.pass !== pass) {
        authAlert.textContent = 'Invalid password for this account';
        authAlert.classList.remove('hidden');
        return;
      }

      const user = {
        name: matched ? matched.name : email.split('@')[0],
        email,
        role: 'user',
        isAdmin: false,
        tier: matched ? matched.tier : 'Pro Tier',
        id: matched ? matched.id : 'usr_' + Date.now().toString(36)
      };

      setCurrentUser(user);
      authModal.classList.add('hidden');
      showToast(`Welcome back, ${user.name}!`);
    });
  }

  // Handle Sign Up Submit (Simply Email + Password)
  if (formSignUp) {
    formSignUp.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('signup-email').value.trim();
      const pass = document.getElementById('signup-password').value.trim();

      if (!email || !pass) {
        authAlert.textContent = 'Please enter both email and password';
        authAlert.classList.remove('hidden');
        return;
      }

      // If signing up with admin password, make admin directly
      const isAdmin = pass === 'admin12345' || email.toLowerCase() === 'moiz@automatixes.com';
      const now = new Date();
      const formattedDate = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
      
      const newUser = {
        name: isAdmin ? 'Abdul Moiz' : email.split('@')[0],
        email,
        pass,
        role: isAdmin ? 'admin' : 'user',
        isAdmin,
        tier: isAdmin ? 'Root Admin (Full Access)' : 'Free Member',
        registeredAt: formattedDate,
        id: 'usr_' + Date.now().toString(36)
      };

      // Save to user accounts
      const accounts = getSavedAccounts();
      const existing = accounts.find(a => a.email.toLowerCase() === email.toLowerCase());
      if (existing) {
        existing.pass = pass;
        existing.registeredAt = existing.registeredAt || formattedDate;
      } else {
        accounts.unshift(newUser);
      }
      setSavedAccounts(accounts);

      setCurrentUser(newUser);
      authModal.classList.add('hidden');
      showToast(isAdmin ? 'Super Admin account activated!' : `Account created! Welcome, ${newUser.name}!`);
      if (isAdmin) switchView('admin');
    });
  }

  // Initial Startup
  updateAuthUI();
  applyLanguage(currentLang);
  updateHistoryBadge();
  updateQRCode();
});
