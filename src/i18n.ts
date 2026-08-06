import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      // Brand
      brand_name: "Accentio",

      // Navbar
      nav_product: "Product",
      nav_matrix: "Matrix",
      nav_use_cases: "Use cases",
      nav_pricing: "Pricing",
      nav_docs: "Docs",
      nav_get_api_key: "Get API key",

      // Hero
      hero_badge: "Accented speech on demand",
      hero_headline_1: "Accented speech,",
      hero_headline_2: "indistinguishable",
      hero_headline_3: "from real speakers.",
      hero_sub:
        "Statistically indistinguishable from real speakers. German verified today, English on the roadmap.",
      hero_cta_demo: "Live demo ↓",
      hero_cta_api: "Get API key",
      hero_code_label: "Try it now",
      hero_code_command:
        'curl -X POST https://api.accentio.ai/api/v1/tts -H "X-API-Key: $KEY" -d \'{"text":"Bitte überwachen Sie den Patienten alle fünf Minuten.","native_accent":"ZH","eval":true}\'',

      // Audio Comparison
      audio_badge: "Hear the difference",
      audio_title: "Four ways to say the same sentence",
      audio_sub:
        'Same medical phrase: "Bitte überwachen Sie den Patienten alle fünf Minuten." Four systems, one real speaker.',
      audio_real_label: "Real speaker (same sentence)",
      audio_accentio_label: "Accentio",
      audio_gemini_label: "Gemini 3.1 Flash TTS",
      audio_elevenlabs_label: "ElevenLabs v3",
      audio_verified_badge: "VERIFIED — matches the real speaker",
      audio_play: "Play",
      audio_pause: "Pause",

      // StatBand
      stat_p_accent: "Accent match",
      stat_p_accent_real: "vs real speakers",
      stat_intelligibility: "Intelligibility",
      stat_competitor_dp: "Competitor accent shift",
      stat_cells: "Accent cells",
      stat_stress: "Stress levels",

      // Compare
      compare_badge: "Prove",
      compare_title: "Accent on demand — a capability they don't have.",
      compare_sub:
        "We don't claim to be more natural than competitors. We claim to produce an accent they cannot.",
      compare_header_system: "System",
      compare_header_accent: "Accent match",
      compare_header_shift: "Accent shift",
      compare_header_intel: "Intelligibility",
      compare_row_real: "Real speaker",
      compare_row_accentio: "Accentio",
      compare_row_gemini: "Gemini 3.1 Flash",
      compare_row_elevenlabs: "ElevenLabs v3",
      compare_footnote:
        "Evaluation artifact: Chinese-accented German medical phrase, same voice control. Accentio shifts the output toward the requested accent; competitors' output stays within their own plain-German baseline. Scores normalized 0–100 for readability.",
      compare_shift_accentio: "strong",
      compare_shift_none: "none",
      compare_chart_title: "Reality check — accent vs shift",
      compare_chart_sub:
        "Accentio shifts the output to the requested accent. Competitors stay where they started.",
      compare_chart_aria:
        "Scatter chart: Accent match on the x axis, accent shift on the y axis. Real speaker and Accentio top right; Gemini and ElevenLabs at the bottom.",
      compare_chart_x: "Accent match (0–100)",
      compare_chart_y: "Accent shift (0–100)",
      compare_chart_note:
        "Shift = how far the output moved toward the requested accent vs the same voice's plain-German baseline. Real speakers are the reference; Accentio is indistinguishable.",

      // Matrix
      matrix_badge: "Product",
      matrix_title: "The Cross-Lingual Accent Matrix",
      matrix_sub:
        "18 accent cells — verified, feasible, and in development. One API, any accent.",
      matrix_tier_a: "Tier A — Verified",
      matrix_tier_a_desc: "Production-ready, evaluated against real speakers",
      matrix_tier_a_zh: "ZH → German",
      matrix_tier_a_ar: "AR → German",
      matrix_tier_b: "Tier B — Feasible",
      matrix_tier_b_desc: "Demonstrated via L2-Arctic, evaluation in progress",
      matrix_tier_b_cells: "AR/ZH/RU/ES/HI → English",
      matrix_tier_c: "Tier C — Needs reference audio",
      matrix_tier_c_desc: "Customer-provided reference speakers required",
      matrix_tier_c_cells: "FR→Arabic, DE→Chinese",
      matrix_example_label: "API request",
      matrix_example:
        '{"text":"...","target_language":"de","native_accent":"zh-CN","accent_intensity":0.45}',

      // Use Cases
      use_cases_badge: "Use cases",
      use_cases_title: "Where accent accuracy matters",
      use_cases_sub:
        "Any domain where speech needs to sound like a real human with a specific background.",

      uc_1_problem:
        "ASR training data must reflect real-world accents to avoid bias — synthetic speech without accent diversity fails.",
      uc_1_solution:
        "Generate ICU-grade training data with verified accent accuracy, medical-grade intelligibility, and controllable accent intensity.",
      uc_1_title: "ASR training data",
      uc_1_sub: "ICU-grade medical safety",
      uc_1_diff: "Verified accent fidelity · medical-grade intelligibility",

      uc_2_problem:
        "Language learners need to hear and practice authentic accents — generic TTS sounds robotic and fails to teach accent recognition.",
      uc_2_solution:
        "Generate exam-prep audio with precise accent control and 0–5 stress levels, matching real pronunciation patterns.",
      uc_2_title: "EdTech & exam prep",
      uc_2_sub: "Authentic accent practice",
      uc_2_diff: "Controllable stress · accent intensity · deterministic",

      uc_3_problem:
        "Aviation and maritime simulations require accented speech for realistic radio communications — untinted TTS breaks immersion.",
      uc_3_solution:
        "Produce radio-style accented speech with adjustable intensity for realistic cockpit and bridge simulations.",
      uc_3_title: "Aviation / maritime simulation",
      uc_3_sub: "Realistic radio communications",
      uc_3_diff: "Adjustable accent intensity · deterministic output",

      uc_4_problem:
        "Enterprise L&D requires brand-consistent voice with global audience appeal — one accent alienates non-native speakers.",
      uc_4_solution:
        "Generate brand voice with multiple verified accents for global L&D content, all from the same base voice.",
      uc_4_title: "Enterprise L&D & brand voice",
      uc_4_sub: "Global audience, local accent",
      uc_4_diff: "One base voice · multiple verified accents",

      uc_5_problem:
        "Game NPCs and media localization need diverse accent voices — hiring voice actors for every accent is prohibitively expensive.",
      uc_5_solution:
        "Generate character voices with specific accents and controllable intensity at scale.",
      uc_5_title: "Gaming NPCs & media localization",
      uc_5_sub: "Diverse character voices",
      uc_5_diff: "Scale · cost-efficient · accent diversity",

      usecase_1_sample_label: "Hear a Turkish accent demo",
      usecase_2_sample_label: "Hear a French accent demo",
      usecase_3_sample_label: "Hear an English accent demo",
      usecase_4_sample_label: "Hear a Spanish accent demo",
      usecase_5_sample_label: "Hear a Russian accent demo",
      usecase_vocab_title: "Vocabulary in the sample",
      usecase_problem_label: "Problem",
      usecase_solution_label: "Solution",
      usecase_prev: "Previous",
      usecase_next: "Next",
      usecases_dots_label: "Use case",

      // Agents & API
      agents_badge: "Agents & API",
      agents_title: "Built for developers and AI agents",
      agents_sub:
        "REST API, MCP tools, and OpenAPI 3.1 spec. Deterministic output, ~4.4 s latency, agent-ready.",
      agents_api_title: "REST API",
      agents_api_desc:
        "OpenAPI 3.1 spec. Deterministic: same seed produces byte-identical audio. Steady-state latency ~4.4 s for 6.9 s audio.",
      agents_mcp_title: "MCP Tools",
      agents_mcp_desc:
        "Connect from any MCP-enabled agent: OpenCode, Claude, or custom.",
      agents_mcp_tools: "tts_synthesize · tts_evaluate · tts_list_cells · tts_matrix",
      agents_rapidapi_title: "RapidAPI",
      agents_rapidapi_desc:
        "Available on RapidAPI for quick integration without infrastructure setup.",
      agents_code_label: "MCP config",
      agents_code_command:
        '{\n  "mcpServers": {\n    "accentio": {\n      "url": "https://api.accentio.ai/mcp/jsonrpc",\n      "headers": { "X-API-Key": "$KEY" }\n    }\n  }\n}',

      // Pricing
      pricing_badge: "Pricing",
      pricing_title: "Start free, scale with confidence",
      pricing_sub:
        "All plans include verified accent evaluation. Custom cells priced on engagement.",
      pricing_free: "Free",
      pricing_free_desc: "Entry cell — evaluate Accentio",
      pricing_free_price: "$0",
      pricing_free_unit: "/mo",
      pricing_free_feature_1: "ZH accent cell",
      pricing_free_feature_2: "100 requests/month",
      pricing_free_feature_3: "Standard latency",
      pricing_free_feature_4: "Community support",
      pricing_free_cta: "Get started",
      pricing_pro: "Pro",
      pricing_pro_desc: "Per-cell, verified + eval",
      pricing_pro_price: "$XX",
      pricing_pro_unit: "/mo per cell",
      pricing_pro_note: "Draft pricing — contact for current rates",
      pricing_pro_feature_1: "Verified accent cells",
      pricing_pro_feature_2: "Evaluation on every request",
      pricing_pro_feature_3: "Deterministic output",
      pricing_pro_feature_4: "Priority support",
      pricing_pro_cta: "Contact sales",
      pricing_matrix: "Matrix",
      pricing_matrix_desc: "All cells + custom Tier C",
      pricing_matrix_price: "Custom",
      pricing_matrix_unit: "engagement",
      pricing_matrix_feature_1: "All 18+ accent cells",
      pricing_matrix_feature_2: "Tier C custom data engagements",
      pricing_matrix_feature_3: "Dedicated support",
      pricing_matrix_feature_4: "SLA guarantees",
      pricing_matrix_cta: "Contact sales",
      pricing_custom_note: "Custom cells: pricing on engagement",

      // FAQ
      faq_badge: "FAQ",
      faq_title: "Frequently asked questions",
      faq_q1: "What accents are verified?",
      faq_a1:
        "Tier A: Chinese-accented German (ZH→DE) and Arabic-accented German (AR→DE) are verified against real speakers — statistically indistinguishable on accent.",
      faq_q2: "Do you support English?",
      faq_a2:
        "English is Tier B (feasible) — demonstrated via L2-Arctic with AR/ZH/RU/ES/HI accents. German is the only verified target language today.",
      faq_q3: "How is the accent measured?",
      faq_a3:
        "Blind comparison against real speakers and competitor systems, scored on a normalized accent-match scale. Our evaluation protocol keeps the same voice as control so the accent shift is the only variable.",
      faq_q4: "Is this safe for medical use?",
      faq_a4:
        "Intelligibility is perfect (8/8 content recall) and medical accuracy is perfect on our benchmark. The evaluation was conducted on ICU-grade medical phrases. Always validate in your specific clinical context.",
      faq_q5: "Is the output deterministic?",
      faq_a5:
        "Yes. Same seed produces byte-identical audio, verified in our evaluation pipeline.",
      faq_q6: "How do you compare to competitors?",
      faq_a6:
        "We don't claim to be more natural. We claim to produce an accent they cannot. When asked for Chinese-accented German, Gemini and ElevenLabs output stays within their own plain-German baseline — no measurable accent shift.",
      faq_q7: "What is the latency?",
      faq_a7:
        "Steady-state ~4.4 s for 6.9 s audio. Agent-ready for real-time applications.",

      // CTA
      cta_title: "Ready to add accents to your voice?",
      cta_desc:
        "Start with the free tier. 100 requests/month, no credit card required.",
      cta_button: "Get API key",
      cta_demo: "Try the demo",

      // Footer
      footer_product: "Product",
      footer_company: "Company",
      footer_legal: "Legal",
      footer_imprint: "Imprint",
      footer_privacy: "Privacy",
      footer_terms: "Terms",
      footer_settings: "Settings",
      footer_theme: "Theme",
      footer_language: "Language",
      footer_copyright: "© {{year}} Accentio. All rights reserved.",
      footer_built: "Built by Aimino Tech GmbH",

      // Imprint
      imprint_title: "Imprint",
      imprint_company: "Company",
      imprint_company_name: "[Company]",
      imprint_address: "[Company Address]",
      imprint_contact: "Contact",
      imprint_email: "Email: [contact@accentio.ai]",
      imprint_represented: "Represented by",
      imprint_represented_by: "[Managing Director]",
      imprint_register: "Commercial Register",
      imprint_register_entry: "[Register Court / Register Number]",
      imprint_vat: "VAT ID",
      imprint_vat_id: "[VAT ID]",
      imprint_dispute: "Dispute Resolution",
      imprint_dispute_text:
        "The European Commission provides a platform for online dispute resolution (OS): https://ec.europa.eu/consumers/odr. We are not obliged or willing to participate in dispute resolution proceedings before a consumer arbitration board.",
      imprint_liability: "Liability for Content",
      imprint_liability_text:
        "As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to § 7 Abs.1 TMG. However, according to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.",
      imprint_liability_links: "Liability for Links",
      imprint_liability_links_text:
        "Our site contains links to external websites of third parties over whose content we have no influence. We cannot assume any liability for these third-party contents. The respective provider or operator of the pages is always responsible for the content of the linked pages.",
      imprint_copyright: "Copyright",
      imprint_copyright_text:
        "The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, or any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator.",

      // Privacy
      privacy_title: "Privacy Policy",
      privacy_last_updated: "Last updated: [Date]",
      privacy_intro:
        "We take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.",
      privacy收集_title: "Collection of General Data",
      privacy收集_text:
        "When you access our website, information of a general nature is automatically collected (server log files). This includes the type of web browser, the operating system used, the domain name of your internet service provider, the IP address, the website from which you came, the pages you visit, and the date and time of your visit. This data is not traceable to a specific person.",
      privacy_cookies_title: "Cookies",
      privacy_cookies_text:
        "Our website uses cookies. Cookies are text files that are stored in your internet browser or by your internet browser on your computer system. When you access a website, a cookie may be stored on your operating system. This cookie contains a characteristic string of characters that enables unique identification of your browser when the website is accessed again.",
      privacy_google_title: "Google Analytics",
      privacy_google_text:
        "This website does not use Google Analytics or similar analytics services.",
      privacy_rights_title: "Your Rights",
      privacy_rights_text:
        "You have the right to access, correct, delete, and restrict processing of your personal data. You also have the right to data portability and to lodge a complaint with a supervisory authority.",
      privacy_contact_title: "Contact for Data Protection",
      privacy_contact_text:
        "If you have any questions about data protection, please contact us at [privacy@accentio.ai].",

      // Terms
      terms_title: "Terms of Service",
      terms_last_updated: "Last updated: [Date]",
      terms_intro:
        "These Terms of Service govern your use of the Accentio API and related services. By accessing or using our services, you agree to be bound by these terms.",
      terms_service_title: "Description of Service",
      terms_service_text:
        "Accentio provides an API for generating accented speech synthesis. The service includes REST API access, MCP tools integration, and evaluation capabilities.",
      terms_api_title: "API Usage",
      terms_api_text:
        "You may use the Accentio API in accordance with these Terms and the applicable pricing plan. API keys are non-transferable and must be kept confidential. You are responsible for all activity that occurs under your API key.",
      terms_acceptable_title: "Acceptable Use",
      terms_acceptable_text:
        "You agree not to use the service to generate speech that is harmful, deceptive, fraudulent, or violates applicable law. You will not attempt to circumvent rate limits or security measures.",
      terms_payment_title: "Payment Terms",
      terms_payment_text:
        "Free tier usage is subject to the limits specified in the pricing section. Paid plans are billed monthly in advance. All fees are non-refundable except as required by law.",
      terms_ip_title: "Intellectual Property",
      terms_ip_text:
        "All content, trademarks, and technology on the Accentio platform are the property of [Company] or its licensors. You receive a limited, non-exclusive license to use the generated audio in accordance with your subscription plan.",
      terms_disclaimer_title: "Disclaimer",
      terms_disclaimer_text:
        "The service is provided 'as is' without warranties of any kind. We do not warrant that the service will be uninterrupted or error-free. In no event shall we be liable for any indirect, incidental, or consequential damages.",
      terms_governing_title: "Governing Law",
      terms_governing_text:
        "These Terms are governed by the laws of the Federal Republic of Germany. The place of jurisdiction is [City, Germany].",
      terms_changes_title: "Changes to Terms",
      terms_changes_text:
        "We reserve the right to modify these Terms at any time. Changes will be effective upon posting on this page. Your continued use of the service constitutes acceptance of the modified Terms.",
    },
  },
  de: {
    translation: {
      // Brand
      brand_name: "Accentio",

      // Navbar
      nav_product: "Produkt",
      nav_matrix: "Matrix",
      nav_use_cases: "Anwendungsfälle",
      nav_pricing: "Preise",
      nav_docs: "Doku",
      nav_get_api_key: "API-Key erhalten",

      // Hero
      hero_badge: "Akzentierte Sprache auf Abruf",
      hero_headline_1: "Akzentierte Sprache,",
      hero_headline_2: "unterscheidbar",
      hero_headline_3: "von echten Sprechern.",
      hero_sub:
        "Statistisch ununterscheidbar von echten Sprechern. Deutsch heute verifiziert, Englisch auf der Roadmap.",
      hero_cta_demo: "Live-Demo ↓",
      hero_cta_api: "API-Key erhalten",
      hero_code_label: "Jetzt ausprobieren",
      hero_code_command:
        'curl -X POST https://api.accentio.ai/api/v1/tts -H "X-API-Key: $KEY" -d \'{"text":"Bitte überwachen Sie den Patienten alle fünf Minuten.","native_accent":"ZH","eval":true}\'',

      // Audio Comparison
      audio_badge: "Hören Sie den Unterschied",
      audio_title: "Vier Wege, denselben Satz zu sagen",
      audio_sub:
        'Derselbe medizinische Satz: "Bitte überwachen Sie den Patienten alle fünf Minuten." Vier Systeme, ein echter Sprecher.',
      audio_real_label: "Echter Sprecher (gleicher Satz)",
      audio_accentio_label: "Accentio",
      audio_gemini_label: "Gemini 3.1 Flash TTS",
      audio_elevenlabs_label: "ElevenLabs v3",
      audio_verified_badge: "VERIFIZIERT — entspricht dem echten Sprecher",
      audio_play: "Abspielen",
      audio_pause: "Pause",

      // StatBand
      stat_p_accent: "Akzent-Treffer",
      stat_p_accent_real: "vs. echte Sprecher",
      stat_intelligibility: "Verständlichkeit",
      stat_competitor_dp: "Akzent-Verschiebung Wettbewerber",
      stat_cells: "Akzent-Zellen",
      stat_stress: "Betonungsniveaus",

      // Compare
      compare_badge: "Beweis",
      compare_title:
        "Akzent auf Abruf — eine Fähigkeit, die sie nicht haben.",
      compare_sub:
        "Wir behaupten nicht, natürlicher zu sein als Wettbewerber. Wir behaupten, einen Akzent zu erzeugen, den sie nicht können.",
      compare_header_system: "System",
      compare_header_accent: "Akzent-Treffer",
      compare_header_shift: "Akzent-Verschiebung",
      compare_header_intel: "Verständlichkeit",
      compare_row_real: "Echter Sprecher",
      compare_row_accentio: "Accentio",
      compare_row_gemini: "Gemini 3.1 Flash",
      compare_row_elevenlabs: "ElevenLabs v3",
      compare_footnote:
        "Evaluierungsartefakt: Chinesischer Akzent auf Deutsch, medizinischer Satz, gleiche Stimme als Kontrolle. Accentio verschiebt die Ausgabe zum gewünschten Akzent; Wettbewerber bleiben in ihrer eigenen Kontrolle. Werte für Lesbarkeit auf 0–100 normalisiert.",
      compare_shift_accentio: "stark",
      compare_shift_none: "keine",
      compare_chart_title: "Realitäts-Check — Akzent vs. Verschiebung",
      compare_chart_sub:
        "Accentio verschiebt die Ausgabe zum gewünschten Akzent. Wettbewerber bleiben, wo sie angefangen haben.",
      compare_chart_aria:
        "Punktdiagramm: Akzent-Treffer auf der X-Achse, Akzent-Verschiebung auf der Y-Achse. Echter Sprecher und Accentio oben rechts; Gemini und ElevenLabs am unteren Rand.",
      compare_chart_x: "Akzent-Treffer (0–100)",
      compare_chart_y: "Akzent-Verschiebung (0–100)",
      compare_chart_note:
        "Verschiebung = wie weit sich die Ausgabe zum gewünschten Akzent bewegt hat, verglichen mit der eigenen Kontrolle. Echte Sprecher sind die Referenz; Accentio ist nicht unterscheidbar.",

      // Matrix
      matrix_badge: "Produkt",
      matrix_title: "Die Cross-Linguale Akzent-Matrix",
      matrix_sub:
        "18 Akzent-Zellen — verifiziert, machbar und in Entwicklung. Eine API, jeder Akzent.",
      matrix_tier_a: "Stufe A — Verifiziert",
      matrix_tier_a_desc:
        "Produktionsreif, evaluiert gegen echte Sprecher",
      matrix_tier_a_zh: "ZH → Deutsch",
      matrix_tier_a_ar: "AR → Deutsch",
      matrix_tier_b: "Stufe B — Machbar",
      matrix_tier_b_desc:
        "Nachgewiesen über L2-Arctic, Evaluation läuft",
      matrix_tier_b_cells: "AR/ZH/RU/ES/HI → Englisch",
      matrix_tier_c: "Stufe C — Referenz-Audio erforderlich",
      matrix_tier_c_desc:
        "Referenzsprecher vom Kunden bereitzustellen",
      matrix_tier_c_cells: "FR→Arabisch, DE→Chinesisch",
      matrix_example_label: "API-Anfrage",
      matrix_example:
        '{"text":"...","target_language":"de","native_accent":"zh-CN","accent_intensity":0.45}',

      // Use Cases
      use_cases_badge: "Anwendungsfälle",
      use_cases_title: "Wo Akzentgenauigkeit wichtig ist",
      use_cases_sub:
        "Jeder Bereich, in dem Sprache wie ein echter Mensch mit spezifischem Hintergrund klingen muss.",

      uc_1_problem:
        "ASR-Trainingsdaten müssen reale Akzente widerspiegeln, um Verzerrungen zu vermeiden — synthetische Sprache ohne Akzentvielfalt versagt.",
      uc_1_solution:
        "Generieren Sie ICU-Grade-Trainingsdaten mit verifizierter Akzentgenauigkeit, medizinischer Verständlichkeit und kontrollierbarer Akzentintensität.",
      uc_1_title: "ASR-Trainingsdaten",
      uc_1_sub: "ICU-Grade medizinische Sicherheit",
      uc_1_diff:
        "Verifizierte Akzenttreue · medizinische Verständlichkeit",

      uc_2_problem:
        "Sprachlernende müssen authentische Akzente hören und üben — generische TTS klingt roboterhaft und leert keine Akzenterkennung.",
      uc_2_solution:
        "Generieren Sie Prüfungsmaterial mit präziser Akzentkontrolle und 0–5 Betonungsniveaus, passend zu realen Ausschemustern.",
      uc_2_title: "EdTech & Prüfungsvorbereitung",
      uc_2_sub: "Authentische Akzentpraxis",
      uc_2_diff:
        "Kontrollierbare Betonung · Akzentintensität · deterministisch",

      uc_3_problem:
        "Aviations- und Maritime-Simulationen erfordern akzentierte Sprache für realistische Funkkommunikation — ungetönte TTS bricht die Immersion.",
      uc_3_solution:
        "Erzeugen Sie Funk-Stil akzentierte Sprache mit anpassbarer Intensität für realistische Cockpit- und Brückensimulationen.",
      uc_3_title: "Aviation / Maritime-Simulation",
      uc_3_sub: "Realistische Funkkommunikation",
      uc_3_diff:
        "Anpassbare Akzentintensität · deterministische Ausgabe",

      uc_4_problem:
        "Enterprise-L&D erfordert markenkonforme Stimme mit globalem Publikumsappell — ein Akzentalieniert nicht-muttersprachliche Sprecher.",
      uc_4_solution:
        "Generieren Sie Markenstimme mit mehreren verifizierten Akzenten für globale L&D-Inhalte, alle von derselben Basisstimme.",
      uc_4_title: "Enterprise-L&D & Markenstimme",
      uc_4_sub: "Globales Publikum, lokaler Akzent",
      uc_4_diff:
        "Eine Basisstimme · mehrere verifizierte Akzente",

      uc_5_problem:
        "Spiel-NPCs und Medienlokalisierung brauchen vielfältige Akzentstimmen — Voice-Aktoren für jeden Akzent einzustellen ist prohibitiv teuer.",
      uc_5_solution:
        "Generieren Sie Charakterstimmen mit spezifischen Akzenten und kontrollierbarer Intensität im großen Maßstab.",
      uc_5_title: "Gaming-NPCs & Medienlokalisierung",
      uc_5_sub: "Vielfältige Charakterstimmen",
      uc_5_diff: "Maßstab · kosteneffizient · Akzentvielfalt",

      usecase_1_sample_label: "Türkischer Akzent — Demo anhören",
      usecase_2_sample_label: "Französischer Akzent — Demo anhören",
      usecase_3_sample_label: "Englischer Akzent — Demo anhören",
      usecase_4_sample_label: "Spanischer Akzent — Demo anhören",
      usecase_5_sample_label: "Russischer Akzent — Demo anhören",
      usecase_vocab_title: "Wortschatz in der Probe",
      usecase_problem_label: "Problem",
      usecase_solution_label: "Lösung",
      usecase_prev: "Zurück",
      usecase_next: "Weiter",
      usecases_dots_label: "Anwendungsfall",

      // Agents & API
      agents_badge: "Agenten & API",
      agents_title: "Für Entwickler und KI-Agenten gebaut",
      agents_sub:
        "REST-API, MCP-Tools und OpenAPI-3.1-Spezifikation. Deterministische Ausgabe, ~4,4 s Latenz, agentenbereit.",
      agents_api_title: "REST-API",
      agents_api_desc:
        "OpenAPI-3.1-Spezifikation. Deterministisch: derselbe Seed erzeugt byte-identische Audio. Latenz ~4,4 s für 6,9 s Audio.",
      agents_mcp_title: "MCP-Tools",
      agents_mcp_desc:
        "Verbinden Sie sich von jedem MCP-fähigen Agenten: OpenCode, Claude oder benutzerdefiniert.",
      agents_mcp_tools:
        "tts_synthesize · tts_evaluate · tts_list_cells · tts_matrix",
      agents_rapidapi_title: "RapidAPI",
      agents_rapidapi_desc:
        "Verfügbar auf RapidAPI für schnelle Integration ohne Infrastrukturaufwand.",
      agents_code_label: "MCP-Konfiguration",
      agents_code_command:
        '{\n  "mcpServers": {\n    "accentio": {\n      "url": "https://api.accentio.ai/mcp/jsonrpc",\n      "headers": { "X-API-Key": "$KEY" }\n    }\n  }\n}',

      // Pricing
      pricing_badge: "Preise",
      pricing_title: "Kostenlos beginnen, sicher skalieren",
      pricing_sub:
        "Alle Pläne beinhalten verifizierte Akzent-Evaluation. Individuelle Zellen nach Angebot.",
      pricing_free: "Kostenlos",
      pricing_free_desc: "Einstiegszelle — Accentio evaluieren",
      pricing_free_price: "$0",
      pricing_free_unit: "/Monat",
      pricing_free_feature_1: "ZH Akzent-Zelle",
      pricing_free_feature_2: "100 Anfragen/Monat",
      pricing_free_feature_3: "Standard-Latenz",
      pricing_free_feature_4: "Community-Support",
      pricing_free_cta: "Loslegen",
      pricing_pro: "Pro",
      pricing_pro_desc: "Pro Zelle, verifiziert + Eval",
      pricing_pro_price: "$XX",
      pricing_pro_unit: "/Monat pro Zelle",
      pricing_pro_note:
        "Entwurfspreis — kontaktieren Sie uns für aktuelle Tarife",
      pricing_pro_feature_1: "Verifizierte Akzent-Zellen",
      pricing_pro_feature_2: "Evaluation bei jeder Anfrage",
      pricing_pro_feature_3: "Deterministische Ausgabe",
      pricing_pro_feature_4: "Prioritäts-Support",
      pricing_pro_cta: "Vertrieb kontaktieren",
      pricing_matrix: "Matrix",
      pricing_matrix_desc: "Alle Zellen + individuelle Stufe C",
      pricing_matrix_price: "Individuell",
      pricing_matrix_unit: "Engagement",
      pricing_matrix_feature_1: "Alle 18+ Akzent-Zellen",
      pricing_matrix_feature_2: "Stufe C individuelle Datenaufträge",
      pricing_matrix_feature_3: "Dedizierter Support",
      pricing_matrix_feature_4: "SLA-Garantien",
      pricing_matrix_cta: "Vertrieb kontaktieren",
      pricing_custom_note:
        "Individuelle Zellen: Preis nach Angebot",

      // FAQ
      faq_badge: "FAQ",
      faq_title: "Häufig gestellte Fragen",
      faq_q1: "Welche Akzente sind verifiziert?",
      faq_a1:
        "Stufe A: Chinesischer Akzent auf Deutsch (ZH→DE) und arabischer Akzent auf Deutsch (AR→DE) sind gegen echte Sprecher verifiziert — statistisch ununterscheidbar beim Akzent.",
      faq_q2: "Unterstützen Sie Englisch?",
      faq_a2:
        "Englisch ist Stufe B (machbar) — nachgewiesen über L2-Arctic mit AR/ZH/RU/ES/HI-Akzenten. Deutsch ist heute die einzige verifizierte Zielsprache.",
      faq_q3: "Wie wird der Akzent gemessen?",
      faq_a3:
        "Blindvergleich gegen echte Sprecher und Wettbewerbssysteme, bewertet auf einer normalisierten Akzent-Treffer-Skala. Unser Evaluierungsprotokoll hält dieselbe Stimme als Kontrolle, sodass die Akzent-Verschiebung die einzige Variable ist.",
      faq_q4: "Ist dies für den medizinischen Einsatz sicher?",
      faq_a4:
        "Verständlichkeit ist perfekt (8/8 Inhaltsrückruf) und medizinische Genauigkeit ist perfekt in unserem Benchmark. Die Evaluation wurde mit ICU-Grade medizinischen Sätzen durchgeführt. Validieren Sie dies immer in Ihrem spezifischen klinischen Kontext.",
      faq_q5: "Ist die Ausgabe deterministisch?",
      faq_a5:
        "Ja. Derselbe Seed erzeugt byte-identische Audio, verifiziert in unserem Evaluierungs-Pipeline.",
      faq_q6: "Wie vergleichen Sie sich mit Wettbewerbern?",
      faq_a6:
        "Wir behaupten nicht, natürlicher zu sein. Wir behaupten, einen Akzent zu erzeugen, den sie nicht können. Als sie um chinesischen Akzent auf Deutsch gebeten wurden, blieb die Ausgabe von Gemini und ElevenLabs innerhalb ihrer eigenen Kontrolle — keine messbare Akzent-Verschiebung.",
      faq_q7: "Wie hoch ist die Latenz?",
      faq_a7:
        "Latenz ~4,4 s für 6,9 s Audio. Agentenbereit für Echtzeitanwendungen.",

      // CTA
      cta_title: "Bereit, Akzente zu Ihrer Stimme hinzuzufügen?",
      cta_desc:
        "Starten Sie mit dem kostenlosen Plan. 100 Anfragen/Monat, keine Kreditkarte erforderlich.",
      cta_button: "API-Key erhalten",
      cta_demo: "Demo ausprobieren",

      // Footer
      footer_product: "Produkt",
      footer_company: "Unternehmen",
      footer_legal: "Rechtliches",
      footer_imprint: "Impressum",
      footer_privacy: "Datenschutz",
      footer_terms: "AGB",
      footer_settings: "Einstellungen",
      footer_theme: "Design",
      footer_language: "Sprache",
      footer_copyright: "© {{year}} Accentio. Alle Rechte vorbehalten.",
      footer_built: "Gebaut von Aimino Tech GmbH",

      // Imprint
      imprint_title: "Impressum",
      imprint_company: "Unternehmen",
      imprint_company_name: "[Unternehmen]",
      imprint_address: "[Unternehmensadresse]",
      imprint_contact: "Kontakt",
      imprint_email: "E-Mail: [contact@accentio.ai]",
      imprint_represented: "Vertreten durch",
      imprint_represented_by: "[Geschäftsführer]",
      imprint_register: "Handelsregister",
      imprint_register_entry: "[Registergericht / Registernummer]",
      imprint_vat: "USt-IdNr.",
      imprint_vat_id: "[USt-IdNr.]",
      imprint_dispute: "Streitschlichtung",
      imprint_dispute_text:
        "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
      imprint_liability: "Haftung für Inhalte",
      imprint_liability_text:
        "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
      imprint_liability_links: "Haftung für Links",
      imprint_liability_links_text:
        "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
      imprint_copyright: "Urheberrecht",
      imprint_copyright_text:
        "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",

      // Privacy
      privacy_title: "Datenschutzerklärung",
      privacy_last_updated: "Zuletzt aktualisiert: [Datum]",
      privacy_intro:
        "Der Schutz Ihrer persönlichen Daten ist uns sehr wichtig. Wir behandeln Ihre persönlichen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.",
      privacy收集_title: "Allgemeine Daten",
      privacy收集_text:
        "Beim Aufruf unserer Website werden automatisch allgemeiner Art Informationen erhoben (Server-Logfiles). Dies umfasst den Browsertyp, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Providers, Ihre IP-Adresse, die Website, von der Sie kommen, die Seiten, die Sie besuchen, und das Datum und die Uhrzeit Ihres Besuchs. Diese Daten sind nicht einer bestimmten Person zuordenbar.",
      privacy_cookies_title: "Cookies",
      privacy_cookies_text:
        "Unsere Website verwendet Cookies. Cookies sind Textdateien, die in Ihrem Internetbrowser oder durch Ihren Internetbrowser auf Ihrem Computersystem gespeichert werden. Wenn Sie eine Website aufrufen, kann ein Cookie auf Ihrem Betriebssystem gespeichert werden.",
      privacy_google_title: "Google Analytics",
      privacy_google_text:
        "Diese Website verwendet kein Google Analytics oder ähnliche Analysedienste.",
      privacy_rights_title: "Ihre Rechte",
      privacy_rights_text:
        "Sie haben das Recht auf Auskorrigierung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit Ihrer persönlichen Daten. Sie haben auch das Recht, sich bei einer Aufsichtsbehörde zu beschweren.",
      privacy_contact_title: "Kontakt für Datenschutz",
      privacy_contact_text:
        "Bei Fragen zum Datenschutz kontaktieren Sie uns bitte unter [privacy@accentio.ai].",

      // Terms
      terms_title: "Nutzungsbedingungen",
      terms_last_updated: "Zuletzt aktualisiert: [Datum]",
      terms_intro:
        "Diese Nutzungsbedingungen regeln die Nutzung der Accentio-API und zugehörigen Dienste. Durch den Zugriff auf oder die Nutzung unserer Dienste stimmen Sie diesen Bedingungen zu.",
      terms_service_title: "Beschreibung des Dienstes",
      terms_service_text:
        "Accentio stellt eine API für die Generierung akzentierter Sprachsynthese bereit. Der Dienst umfasst REST-API-Zugang, MCP-Tools-Integration und Evaluierungsfunktionen.",
      terms_api_title: "API-Nutzung",
      terms_api_text:
        "Sie dürfen die Accentio-API in Übereinstimmung mit diesen Bedingungen und dem geltenden Preisplan nutzen. API-Schlüssel sind nicht übertragbar und vertraulich zu behandeln. Sie sind verantwortlich für alle Aktivitäten unter Ihrem API-Schlüssel.",
      terms_acceptable_title: "Zulässige Nutzung",
      terms_acceptable_text:
        "Sie dürfen den Dienst nicht verwenden, um Sprache zu generieren, die schädlich, täuschend, betrügerisch ist oder geltendes Recht verletzt. Sie werden keine Ratenbegrenzungen oder Sicherheitsmaßnahmen umgehen.",
      terms_payment_title: "Zahlungsbedingungen",
      terms_payment_text:
        "Die Nutzung des kostenlosen Tarifs unterliegt den in der Preisübersicht angegebenen Limits. Bezahlte Pläne werden monatlich im Voraus abgerechnet. Alle Gebühren sind nicht erstattungsfähig, soweit gesetzlich nicht vorgeschrieben.",
      terms_ip_title: "Geistiges Eigentum",
      terms_ip_text:
        "Alle Inhalte, Marken und Technologien auf der Accentio-Plattform sind Eigentum von [Company] oder deren Lizenzgebern. Sie erhalten eine begrenzte, nicht-exklusive Lizenz zur Nutzung der generierten Audio in Übereinstimmung mit Ihrem Abonnementplan.",
      terms_disclaimer_title: "Haftungsausschluss",
      terms_disclaimer_text:
          "Der Dienst wird wie besehen ohne jegliche Gewährleistungen bereitgestellt. Wir gewährleisten nicht, dass der Dienst unterbrechungsfehlerfrei sein wird. In keinem Fall haften wir für indirekte, zufällige oder Folgeschäden.",
      terms_governing_title: "Anwendbares Recht",
      terms_governing_text:
        "Diese Bedingungen unterliegen den Gesetzen der Bundesrepublik Deutschland. Gerichtsstand ist [Stadt, Deutschland].",
      terms_changes_title: "Änderungen an den Bedingungen",
      terms_changes_text:
        "Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern. Änderungen werden mit Veröffentlichung auf dieser Seite wirksam. Ihre fortgesetzte Nutzung des Dienstes stellt die Annahme der geänderten Bedingungen dar.",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
