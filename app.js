// AutomatixQR - Enterprise SaaS Engine with Multi-Language i18n

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // ==========================================
  // 1. I18N MULTI-LANGUAGE DICTIONARY & ENGINE
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
    fr: {
      name: 'Français',
      flag: '🇫🇷',
      dir: 'ltr',
      strings: {
        pro_badge: 'ENTREPRISE',
        new_qr: 'Nouveau QR',
        nav_title: 'Navigation',
        nav_studio: 'Studio QR',
        nav_dynamic: 'Liens Dynamiques',
        nav_batch: 'Générateur en Masse',
        nav_templates: 'Modèles Créatifs',
        nav_library: 'Bibliothèque',
        nav_analytics: 'Analyses de Scans',
        nav_api: 'API & Widget',
        badge_main: 'Principal',
        badge_editable: 'Modifiable',
        badge_bulk: 'Masse',
        badge_presets: 'Styles',
        badge_live: 'En Direct',
        agency_cloud: 'Automatixes Cloud',
        agency_desc: 'Automatisez vos flux CRM et WhatsApp grâce à l’IA.',
        explore_agency: 'Découvrir',
        type_url: 'Lien URL',
        type_text: 'Texte',
        type_wifi: 'Wi-Fi',
        type_vcard: 'vCard',
        type_social: 'Bio Réseaux',
        type_email: 'E-mail',
        content_header: 'Contenu du Code QR',
        label_destination_url: 'URL de Destination',
        label_text_message: 'Message Texte',
        label_wifi_ssid: 'Nom du Réseau (SSID)',
        label_wifi_password: 'Mot de passe',
        label_wifi_security: 'Type de Sécurité',
        label_wifi_hidden: 'Réseau Masqué',
        label_first_name: 'Prénom',
        label_last_name: 'Nom',
        label_phone: 'Téléphone',
        label_email: 'Adresse E-mail',
        label_company: 'Société',
        label_job_title: 'Poste',
        label_platform: 'Plateforme',
        label_handle: 'Identifiant / Tél',
        label_recipient_email: 'Destinataire',
        label_subject: 'Sujet',
        label_message_body: 'Corps du Message',
        styling_header: 'Personnalisation & Couleurs',
        label_colors: 'Couleurs de la Palette',
        color_dots: 'Points QR',
        color_bg: 'Arrière-plan',
        color_frame: 'Cadre Coin',
        color_center: 'Centre Coin',
        label_presets: 'Préréglages:',
        label_dot_pattern: 'Motif des Points',
        label_corner_frame: 'Cadre de Coin',
        label_corner_dot: 'Point Central',
        label_logo_upload: 'Logo de Marque',
        drag_drop_hint: 'Glisser-déposer supporté',
        logo_formats: 'Prend en charge PNG, JPG, SVG, WebP (Max 2Mo)',
        btn_remove: 'Supprimer',
        label_error_level: 'Correction d\'erreur',
        label_margin: 'Marge',
        live_preview: 'Aperçu en Direct',
        btn_download_png: 'Télécharger PNG',
        btn_download_svg: 'Télécharger SVG',
        btn_copy_image: 'Copier l\'image',
        btn_save_library: 'Enregistrer',
        raw_payload: 'Données Encodées',
        dynamic_header: 'Codes QR Dynamiques & Modifiables',
        dynamic_desc: 'Modifiez l’URL de destination sans réimprimer vos QR codes!',
        btn_create_dynamic: 'Créer un Lien Dynamique',
        th_campaign: 'Campagne / Nom',
        th_short_url: 'URL Courte',
        th_destination: 'Destination Cible',
        th_scans: 'Scans Totaux',
        th_status: 'Statut',
        th_actions: 'Actions',
        batch_header: 'Générateur de QR Codes en Masse',
        batch_desc: 'Générez des centaines de QR codes et téléchargez une archive ZIP.',
        batch_input_label: 'Collez vos URL ou textes (Une par ligne)',
        batch_detected: 'Éléments Détectés',
        btn_load_sample: 'Charger Exemple',
        btn_generate_zip: 'Générer & Télécharger ZIP',
        batch_generating: 'Génération en cours...',
        templates_header: 'Modèles Conçus par des Designers',
        templates_desc: 'Appliquez un style en un clic pour un rendu professionnel.',
        library_header: 'Bibliothèque des Codes QR',
        library_desc: 'Tous vos codes sont sauvegardés pour être réutilisés.',
        btn_clear_library: 'Effacer l\'historique',
        stat_total_scans: 'Scans Totaux',
        stat_active_qrs: 'QRs Dynamiques Actifs',
        stat_top_os: 'OS Mobile Principal',
        stat_conversion: 'Taux de Conversion',
        chart_trend_title: 'Tendances de Scan (7 Derniers Jours)',
        chart_device_title: 'Répartition par Appareil',
        api_header: 'API Développeur & SDK',
        api_desc: 'Générez des QR codes directement depuis vos applications.',
        api_key_label: 'Clé API de Production',
        btn_copy: 'Copier',
        snippet_header: 'Extrait de Code',
        modal_create_title: 'Nouveau Lien Dynamique',
        modal_campaign_label: 'Nom de la Campagne',
        modal_target_label: 'URL de Destination',
        btn_cancel: 'Annuler',
        btn_create_link: 'Créer'
      }
    },
    de: {
      name: 'Deutsch',
      flag: '🇩🇪',
      dir: 'ltr',
      strings: {
        pro_badge: 'UNTERNEHMEN',
        new_qr: 'Neuer QR',
        nav_title: 'Navigation',
        nav_studio: 'QR Studio',
        nav_dynamic: 'Dynamische Links',
        nav_batch: 'Massen-Generator',
        nav_templates: 'Vorlagen',
        nav_library: 'Bibliothek',
        nav_analytics: 'Scan-Analysen',
        nav_api: 'API & Widget',
        badge_main: 'Haupt',
        badge_editable: 'Editierbar',
        badge_bulk: 'Masse',
        badge_presets: 'Stile',
        badge_live: 'Live',
        agency_cloud: 'Automatixes Cloud',
        agency_desc: 'Automatisieren Sie CRM und WhatsApp mit KI-Agenten.',
        explore_agency: 'Dienste ansehen',
        type_url: 'URL Link',
        type_text: 'Text',
        type_wifi: 'WLAN',
        type_vcard: 'vCard',
        type_social: 'Social Bio',
        type_email: 'E-Mail',
        content_header: 'QR-Inhalt & Daten',
        label_destination_url: 'Ziel-Web-URL',
        label_text_message: 'Textnachricht / Notizen',
        label_wifi_ssid: 'Netzwerkname (SSID)',
        label_wifi_password: 'Passwort',
        label_wifi_security: 'Sicherheitstyp',
        label_wifi_hidden: 'Verstecktes Netzwerk',
        label_first_name: 'Vorname',
        label_last_name: 'Nachname',
        label_phone: 'Telefonnummer',
        label_email: 'E-Mail-Adresse',
        label_company: 'Firma',
        label_job_title: 'Position',
        label_platform: 'Plattform',
        label_handle: 'Benutzername / Tel',
        label_recipient_email: 'Empfänger E-Mail',
        label_subject: 'Betreff',
        label_message_body: 'Nachrichtentext',
        styling_header: 'Design & Farben',
        label_colors: 'Farbpalette',
        color_dots: 'QR Punkte',
        color_bg: 'Hintergrund',
        color_frame: 'Eckenrahmen',
        color_center: 'Eckenpunkt',
        label_presets: 'Voreinstellungen:',
        label_dot_pattern: 'Punktmuster',
        label_corner_frame: 'Eckenrahmen',
        label_corner_dot: 'Eckenzentrum',
        label_logo_upload: 'Zentrales Markenlogo',
        drag_drop_hint: 'Drag & Drop unterstützt',
        logo_formats: 'Unterstützt PNG, JPG, SVG, WebP (Max. 2MB)',
        btn_remove: 'Entfernen',
        label_error_level: 'Fehlerkorrekturlevel',
        label_margin: 'Rand',
        live_preview: 'Live-Vorschau',
        btn_download_png: 'PNG Herunterladen',
        btn_download_svg: 'SVG Herunterladen',
        btn_copy_image: 'Bild Kopieren',
        btn_save_library: 'Speichern',
        raw_payload: 'Codierte Daten',
        dynamic_header: 'Dynamische Editierbare QR-Codes',
        dynamic_desc: 'Ändern Sie die Ziel-URL jederzeit ohne Neudruck!',
        btn_create_dynamic: 'Dynamischen Link Erstellen',
        th_campaign: 'Kampagne / Name',
        th_short_url: 'Kurze URL',
        th_destination: 'Zieladresse',
        th_scans: 'Scans Gesamt',
        th_status: 'Status',
        th_actions: 'Aktionen',
        batch_header: 'Massen-QR-Generator',
        batch_desc: 'Erstellen Sie hunderte QR-Codes und laden Sie ein ZIP-Archiv herunter.',
        batch_input_label: 'URLs oder Texte einfügen (Eine pro Zeile)',
        batch_detected: 'Erkannte Elemente',
        btn_load_sample: 'Beispieldaten laden',
        btn_generate_zip: 'ZIP Generieren & Laden',
        batch_generating: 'Archiv wird erstellt...',
        templates_header: 'Designer-Vorlagen',
        templates_desc: 'Wenden Sie mit einem Klick professionelle Farbwelten an.',
        library_header: 'Gespeicherte Bibliothek',
        library_desc: 'Alle erstellten QR-Codes werden dauerhaft gespeichert.',
        btn_clear_library: 'Verlauf Löschen',
        stat_total_scans: 'Scans Gesamt',
        stat_active_qrs: 'Aktive Dynamische QRs',
        stat_top_os: 'Top Mobil-OS',
        stat_conversion: 'Konversionsrate',
        chart_trend_title: 'Scan-Trends (Letzte 7 Tage)',
        chart_device_title: 'Geräteverteilung',
        api_header: 'Entwickler-API & SDK',
        api_desc: 'Integrieren Sie die QR-Generierung direkt in Ihre Apps.',
        api_key_label: 'Ihr Live-API-Schlüssel',
        btn_copy: 'Kopieren',
        snippet_header: 'Codebeispiel',
        modal_create_title: 'Dynamischen Link Erstellen',
        modal_campaign_label: 'Kampagnenname',
        modal_target_label: 'Ziel-URL',
        btn_cancel: 'Abbrechen',
        btn_create_link: 'Erstellen'
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
    },
    zh: {
      name: '中文',
      flag: '🇨🇳',
      dir: 'ltr',
      strings: {
        pro_badge: '企业版',
        new_qr: '新建二维码',
        nav_title: '导航',
        nav_studio: '二维码工作台',
        nav_dynamic: '动态链接',
        nav_batch: '批量生成',
        nav_templates: '模板库',
        nav_library: '已存图库',
        nav_analytics: '扫码数据',
        nav_api: 'API 与组件',
        badge_main: '核心',
        badge_editable: '可修改',
        badge_bulk: '批量',
        badge_presets: '预设',
        badge_live: '实时',
        agency_cloud: 'Automatixes 云平台',
        agency_desc: '通过定制 AI 智能体自动化您的 CRM 与客户流程。',
        explore_agency: '探索服务',
        type_url: '网页链接',
        type_text: '纯文本',
        type_wifi: '无线网络',
        type_vcard: '电子名片',
        type_social: '社交主页',
        type_email: '电子邮件',
        content_header: '二维码内容与信息',
        label_destination_url: '目标网址',
        label_text_message: '文本消息 / 备注',
        label_wifi_ssid: '网络名称 (SSID)',
        label_wifi_password: '密码',
        label_wifi_security: '安全类型',
        label_wifi_hidden: '隐藏网络',
        label_first_name: '名',
        label_last_name: '姓',
        label_phone: '电话号码',
        label_email: '电子邮箱',
        label_company: '公司',
        label_job_title: '职位',
        label_platform: '平台',
        label_handle: '账号 / 手机号',
        label_recipient_email: '收件人邮箱',
        label_subject: '邮件主题',
        label_message_body: '邮件正文',
        styling_header: '外观样式与自定义颜色',
        label_colors: '调色板',
        color_dots: '二维码点',
        color_bg: '背景颜色',
        color_frame: '定位边框',
        color_center: '定位中心',
        label_presets: '预设主题:',
        label_dot_pattern: '点阵图案',
        label_corner_frame: '边角样式',
        label_corner_dot: '角中心点',
        label_logo_upload: '中心品牌 Logo',
        drag_drop_hint: '支持拖放上传',
        logo_formats: '支持 PNG, JPG, SVG, WebP (最大 2MB)',
        btn_remove: '移除',
        label_error_level: '纠错级别',
        label_margin: '边距',
        live_preview: '实时预览',
        btn_download_png: '下载 PNG',
        btn_download_svg: '下载 SVG',
        btn_copy_image: '复制图片',
        btn_save_library: '保存到图库',
        raw_payload: '编码数据',
        dynamic_header: '动态可修改二维码',
        dynamic_desc: '随时更改跳转目标网址，无需重新打印！',
        btn_create_dynamic: '创建动态链接',
        th_campaign: '活动 / 名称',
        th_short_url: '短网址',
        th_destination: '目标地址',
        th_scans: '总扫码量',
        th_status: '状态',
        th_actions: '操作',
        batch_header: '批量二维码生成器',
        batch_desc: '一次生成成百上千个二维码并下载 ZIP 压缩包。',
        batch_input_label: '粘贴网址或文本（每行一条）',
        batch_detected: '检测到项目数',
        btn_load_sample: '加载示例数据',
        btn_generate_zip: '生成并下载 ZIP',
        batch_generating: '正在批量打包...',
        templates_header: '设计师精选模板',
        templates_desc: '一键应用专业配色与品牌设计。',
        library_header: '已存二维码与历史库',
        library_desc: '您创建的所有二维码都会持久保存以便再次使用。',
        btn_clear_library: '清空历史',
        stat_total_scans: '总扫码次数',
        stat_active_qrs: '活跃动态二维码',
        stat_top_os: '主要移动系统',
        stat_conversion: '转化率',
        chart_trend_title: '扫码趋势（最近 7 天）',
        chart_device_title: '扫码设备占比',
        api_header: '开发者 API 与 SDK',
        api_desc: '将二维码生成直接集成到您的前后端程序中。',
        api_key_label: '您的生产环境 API 密钥',
        btn_copy: '复制',
        snippet_header: '集成代码示例',
        modal_create_title: '创建动态链接',
        modal_campaign_label: '活动标题',
        modal_target_label: '目标网址',
        btn_cancel: '取消',
        btn_create_link: '立即创建'
      }
    },
    ja: {
      name: '日本語',
      flag: '🇯🇵',
      dir: 'ltr',
      strings: {
        pro_badge: 'エンタープライズ',
        new_qr: '新規QR作成',
        nav_title: 'ナビゲーション',
        nav_studio: 'QRスタジオ',
        nav_dynamic: '動的リンク',
        nav_batch: '一括生成',
        nav_templates: 'テンプレート',
        nav_library: '保存ライブラリ',
        nav_analytics: 'スキャン分析',
        nav_api: 'API & 連携',
        badge_main: 'メイン',
        badge_editable: '編集可能',
        badge_bulk: '一括',
        badge_presets: 'プリセット',
        badge_live: 'ライブ',
        agency_cloud: 'Automatixes クラウド',
        agency_desc: 'AIエージェントでCRMと業務フローを自動化。',
        explore_agency: 'サービスを見る',
        type_url: 'URLリンク',
        type_text: 'テキスト',
        type_wifi: 'Wi-Fi',
        type_vcard: '連絡先',
        type_social: 'SNSリンク',
        type_email: 'メール',
        content_header: 'QRコードの内容と情報',
        label_destination_url: '転送先Web URL',
        label_text_message: 'テキストメッセージ',
        label_wifi_ssid: 'ネットワーク名 (SSID)',
        label_wifi_password: 'パスワード',
        label_wifi_security: 'セキュリティ形式',
        label_wifi_hidden: '非公開ネットワーク',
        label_first_name: '名',
        label_last_name: '姓',
        label_phone: '電話番号',
        label_email: 'メールアドレス',
        label_company: '会社名',
        label_job_title: '役職',
        label_platform: 'プラットフォーム',
        label_handle: 'アカウント名 / 電話番号',
        label_recipient_email: '宛先メール',
        label_subject: '件名',
        label_message_body: '本文',
        styling_header: 'デザインとカスタムカラー',
        label_colors: 'パレットカラー',
        color_dots: 'QRドット',
        color_bg: '背景色',
        color_frame: '角フレーム',
        color_center: '角中心点',
        label_presets: 'プリセット:',
        label_dot_pattern: 'ドットパターン',
        label_corner_frame: '角フレーム形式',
        label_corner_dot: '角中心ドット',
        label_logo_upload: '中央ブランドロゴ',
        drag_drop_hint: 'ドラッグ＆ドロップ対応',
        logo_formats: 'PNG, JPG, SVG, WebP に対応（最大 2MB）',
        btn_remove: '削除',
        label_error_level: '誤り訂正レベル',
        label_margin: '余白',
        live_preview: 'ライブプレビュー',
        btn_download_png: 'PNG ダウンロード',
        btn_download_svg: 'SVG ダウンロード',
        btn_copy_image: '画像をコピー',
        btn_save_library: 'ライブラリに保存',
        raw_payload: 'エンコードデータ',
        dynamic_header: '動的・編集可能なQRコード',
        dynamic_desc: '印刷後でもいつでも転送先URLを変更できます！',
        btn_create_dynamic: '動的リンクを作成',
        th_campaign: 'キャンペーン / 名前',
        th_short_url: '短縮URL',
        th_destination: '転送先URL',
        th_scans: '総スキャン数',
        th_status: 'ステータス',
        th_actions: '操作',
        batch_header: '一括QRコード生成',
        batch_desc: '大量のQRコードを一度に生成してZIPでダウンロード。',
        batch_input_label: 'URLまたはテキストを貼り付け（1行に1件）',
        batch_detected: '検出件数',
        btn_load_sample: 'サンプルデータを読込',
        btn_generate_zip: 'ZIP生成＆ダウンロード',
        batch_generating: '生成中...',
        templates_header: 'デザインテンプレート',
        templates_desc: 'ワンクリックでプロのデザインを適用。',
        library_header: '保存済みライブラリ',
        library_desc: '作成したQRコードは自動で保存され再利用可能です。',
        btn_clear_library: '履歴を全消去',
        stat_total_scans: '総スキャン回数',
        stat_active_qrs: '有効な動的QR',
        stat_top_os: '主要モバイルOS',
        stat_conversion: 'コンバージョン率',
        chart_trend_title: 'スキャントレンド（過去7日間）',
        chart_device_title: 'スキャン端末割合',
        api_header: '開発者向け API & SDK',
        api_desc: 'アプリにQR生成機能を直接組み込み。',
        api_key_label: '本番用 API キー',
        btn_copy: 'コピー',
        snippet_header: 'コードサンプル',
        modal_create_title: '動的リンク作成',
        modal_campaign_label: 'キャンペーン名',
        modal_target_label: '転送先URL',
        btn_cancel: 'キャンセル',
        btn_create_link: '作成'
      }
    }
  };

  // Detect Country & Browser Language
  const detectInitialLanguage = () => {
    const saved = localStorage.getItem('automatix_qr_lang');
    if (saved && TRANSLATIONS[saved]) return saved;

    const navLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    const primaryCode = navLang.split('-')[0];

    if (TRANSLATIONS[primaryCode]) return primaryCode;
    return 'en';
  };

  let currentLang = detectInitialLanguage();

  const applyLanguage = (langKey) => {
    if (!TRANSLATIONS[langKey]) langKey = 'en';
    currentLang = langKey;
    localStorage.setItem('automatix_qr_lang', langKey);

    const langObj = TRANSLATIONS[langKey];
    document.documentElement.lang = langKey;
    document.documentElement.dir = langObj.dir || 'ltr';

    // Update Dropdown Button UI
    const flagEl = document.getElementById('current-lang-flag');
    const nameEl = document.getElementById('current-lang-name');
    if (flagEl) flagEl.textContent = langObj.flag;
    if (nameEl) nameEl.textContent = langObj.name;

    // Translate all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (langObj.strings[key]) {
        el.textContent = langObj.strings[key];
      }
    });

    if (window.lucide) lucide.createIcons();
  };

  // Language Dropdown Controller
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

  // ==========================================
  // 2. STATE & STORAGE MANAGEMENT
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
    DYNAMIC_LINKS: 'automatix_qr_dynamic_v1'
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
          id: 'dyn_1',
          name: 'AI Automation Demo',
          shortCode: 'qr.automatixes.com/demo',
          targetUrl: 'https://www.automatixes.com/services',
          scans: 1420,
          status: 'Active',
          createdAt: '2026-08-15'
        },
        {
          id: 'dyn_2',
          name: 'WhatsApp CRM Bot',
          shortCode: 'qr.automatixes.com/wa',
          targetUrl: 'https://wa.me/923366920141',
          scans: 3890,
          status: 'Active',
          createdAt: '2026-08-20'
        },
        {
          id: 'dyn_3',
          name: 'Client Booking Calendar',
          shortCode: 'qr.automatixes.com/meet',
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

  const updateHistoryBadge = () => {
    const history = getSavedHistory();
    const badge = document.getElementById('history-badge-count');
    if (badge) badge.textContent = history.length;
  };

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
  // 3. NAVIGATION CONTROLLER
  // ==========================================
  const navButtons = document.querySelectorAll('#main-nav .nav-item');
  const viewPanels = document.querySelectorAll('.view-panel');

  const switchView = (targetView) => {
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

    if (window.lucide) lucide.createIcons();
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

  // ==========================================
  // 4. QR STUDIO CORE ENGINE
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
        downloadPngBtn.innerHTML = `<i data-lucide="download" class="w-4 h-4"></i> ${TRANSLATIONS[currentLang]?.strings?.btn_download_png || 'Download PNG'}`;
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
        downloadSvgBtn.innerHTML = `<i data-lucide="file-code-2" class="w-4 h-4 text-cyan-600"></i> ${TRANSLATIONS[currentLang]?.strings?.btn_download_svg || 'Download SVG'}`;
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

  // Save to Library
  const saveToLibraryBtn = document.getElementById('save-to-library-btn');
  if (saveToLibraryBtn) {
    saveToLibraryBtn.addEventListener('click', () => {
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
  // 5. DYNAMIC EDITABLE LINKS CONTROLLER
  // ==========================================
  const dynamicTbody = document.getElementById('dynamic-links-tbody');
  const dynamicModal = document.getElementById('dynamic-modal');
  const createDynamicBtn = document.getElementById('create-dynamic-btn');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const cancelModalBtn = document.getElementById('cancel-modal-btn');
  const saveDynamicBtn = document.getElementById('save-dynamic-btn');

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
            <span class="font-mono text-cyan-600 text-xs font-semibold">${link.shortCode}</span>
            <button onclick="navigator.clipboard.writeText('https://${link.shortCode}'); alert('Link copied!');" class="p-1 hover:text-slate-900 text-slate-400">
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
            <button data-id="${link.id}" class="edit-dyn-btn p-1.5 hover:bg-slate-100 rounded-lg text-slate-600 hover:text-slate-900 transition" title="Edit Destination URL">
              <i data-lucide="edit-2" class="w-3.5 h-3.5"></i>
            </button>
            <button data-id="${link.id}" class="load-dyn-btn p-1.5 hover:bg-indigo-50 rounded-lg text-indigo-600 transition" title="Open QR in Studio">
              <i data-lucide="qr-code" class="w-3.5 h-3.5"></i>
            </button>
            <button data-id="${link.id}" class="delete-dyn-btn p-1.5 hover:bg-rose-50 rounded-lg text-rose-600 transition" title="Delete">
              <i data-lucide="trash" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </td>
      </tr>
    `).join('');

    document.querySelectorAll('.edit-dyn-btn').forEach(b => {
      b.addEventListener('click', () => {
        const id = b.getAttribute('data-id');
        const links = getSavedDynamicLinks();
        const item = links.find(l => l.id === id);
        if (item) {
          const newUrl = prompt(`Enter new destination for "${item.name}":`, item.targetUrl);
          if (newUrl && newUrl.trim()) {
            item.targetUrl = newUrl.trim();
            setSavedDynamicLinks(links);
            renderDynamicLinksView();
            showToast('Destination URL updated successfully!');
          }
        }
      });
    });

    document.querySelectorAll('.load-dyn-btn').forEach(b => {
      b.addEventListener('click', () => {
        const id = b.getAttribute('data-id');
        const item = getSavedDynamicLinks().find(l => l.id === id);
        if (item) {
          document.getElementById('input-url').value = `https://${item.shortCode}`;
          switchView('studio');
          const urlTab = document.querySelector('[data-type="url"]');
          if (urlTab) urlTab.click();
          showToast(`Loaded "${item.name}" into QR Studio!`);
        }
      });
    });

    document.querySelectorAll('.delete-dyn-btn').forEach(b => {
      b.addEventListener('click', () => {
        const id = b.getAttribute('data-id');
        if (confirm('Delete this dynamic link?')) {
          const filtered = getSavedDynamicLinks().filter(l => l.id !== id);
          setSavedDynamicLinks(filtered);
          renderDynamicLinksView();
          showToast('Dynamic link removed');
        }
      });
    });

    if (window.lucide) lucide.createIcons();
  };

  if (createDynamicBtn) {
    createDynamicBtn.addEventListener('click', () => {
      document.getElementById('dynamic-title-input').value = '';
      document.getElementById('dynamic-url-input').value = '';
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

      if (!name || !targetUrl) {
        showToast('Please provide both a title and destination URL', true);
        return;
      }

      const randomCode = 'qr.automatixes.com/' + Math.random().toString(36).substring(2, 8);
      const links = getSavedDynamicLinks();
      links.unshift({
        id: 'dyn_' + Date.now(),
        name,
        shortCode: randomCode,
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

  // ==========================================
  // 6. BATCH GENERATOR (BULK ZIP)
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
  // 7. TEMPLATES GALLERY
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
          dotsOptions: {
            color: t.dotsColor,
            type: t.dotType
          },
          backgroundOptions: {
            color: t.bgColor
          },
          cornersSquareOptions: {
            color: t.cornerSquareColor,
            type: t.cornerSquareType
          },
          cornersDotOptions: {
            color: t.cornerDotColor,
            type: t.cornerDotType
          }
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
  // 8. SAVED LIBRARY
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
  // 9. SCAN ANALYTICS CHARTS (LIGHT THEME)
  // ==========================================
  let trendChartInstance = null;
  let deviceChartInstance = null;

  const renderAnalyticsCharts = () => {
    if (!window.Chart) return;

    // Scan Trend Chart
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
          plugins: {
            legend: { display: false }
          },
          scales: {
            x: {
              grid: { color: 'rgba(0, 0, 0, 0.04)' },
              ticks: { color: '#64748b' }
            },
            y: {
              grid: { color: 'rgba(0, 0, 0, 0.04)' },
              ticks: { color: '#64748b' }
            }
          }
        }
      });
    }

    // Devices Breakdown Chart
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
            legend: {
              position: 'bottom',
              labels: { color: '#475569', font: { size: 11 } }
            }
          },
          cutout: '70%'
        }
      });
    }
  };

  // API Key Copy
  const copyApiKeyBtn = document.getElementById('copy-api-key-btn');
  if (copyApiKeyBtn) {
    copyApiKeyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('autoqr_live_99d445d93afa541f38b4f07794312b62f');
      showToast('API Key copied to clipboard!');
    });
  }

  // Initial Startup
  applyLanguage(currentLang);
  updateHistoryBadge();
  updateQRCode();
});
