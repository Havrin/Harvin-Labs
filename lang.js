/* ==========================================================================
   Harvin Labs — Static DE / EN Language Switch
   Priority: ?lang=de|en -> saved preference -> browser language -> default EN
   ========================================================================== */
(function () {
  "use strict";

  var STORAGE_KEY = "harvin_labs_lang";

  var COPY = {
    en: {
      page_title_home: "The Midnight Pharmacy — Harvin Labs",
      page_desc_home:
        "The Midnight Pharmacy by Harvin Labs: a first-person pharmacy management and urban tycoon simulator for PC (Steam), playable solo or in 1–4 player co-op.",
      page_title_impressum: "Legal Notice (Impressum) — Harvin Labs",
      page_title_datenschutz: "Privacy Policy (Datenschutz) — Harvin Labs",

      nav_game: "The Midnight Pharmacy",
      nav_studio: "Studio",
      nav_back: "← Back to Homepage",

      mp_band_label: "HARVIN LABS · RELEASE 01",
      mp_band_meta: "PC (STEAM) · SOLO & CO-OP (1–4)",
      mp_kicker: "First-Person Pharmacy Management Simulator",
      mp_lead:
        "Run a struggling pharmacy in a volatile urban district. Fill prescriptions at the counter by day, compound batches in the backroom lab, and decide how far you will bend the law when rent comes due.",
      mp_cta_primary: "Wishlist on Steam",
      mp_cta_note_prefix: "Steam Store Page:",
      mp_cta_note_status: "Launching soon — Playable Demo in development",

      bon_head: "THE MIDNIGHT PHARMACY",
      bon_sub: "PRODUCT SPECIFICATION",
      bon_genre_k: "Genre",
      bon_genre_v: "First-Person Management Sim",
      bon_mode_k: "Players",
      bon_mode_v: "Solo & Co-op (1–4)",
      bon_platform_k: "Platform",
      bon_platform_v: "PC (Steam)",
      bon_status_k: "Status",
      bon_status_v: "Demo in Development",
      bon_code: "REF HL-TMP-01",

      media_slot_title: "Key Art / Gameplay Screenshot (16:9)",
      media_slot_desc_1: "Placeholder for your first in-game screenshot or Steam Capsule Art.",
      media_slot_desc_2: "Drop your image at",

      ledger_heading: "Counter, Lab & One Living Street",
      ledger_meta: "01 — 04",

      p1_title: "Counter & Prescriptions",
      p1_body:
        "Stock shelves, consult walk-in customers with conflicting complaints, and inspect printed prescriptions for forged stamps or expired dates.",
      p2_title: "Backroom Lab",
      p2_body:
        "Weigh, mix, and press preparations from raw ingredients. Track batch purity and shelf life — or stretch stock at the cost of district health.",
      p3_title: "One Living Street",
      p3_body:
        "Walk the block between your dispensary, the local clinic, the pub, and the back-alley fence where illicit supply meets rising police pressure.",
      p4_title: "Real Consequences",
      p4_body:
        "Play solo or divide roles with up to four friends. Unannounced health inspections, outbreaks, raids, and missed rent can close your doors for good.",

      mp_disclaimer:
        "All preparations, active ingredients, and medical conditions in The Midnight Pharmacy are entirely fictional. Nothing depicted is medical advice.",

      studio_eyebrow: "Harvin Labs · Germany",
      studio_heading: "Independent Solo Studio",
      studio_p1:
        "Harvin Labs is an independent game studio based in Germany. Focused on tactile, systems-driven first-person simulations where physical shop work, economics, and risk reinforce each other.",
      studio_p2:
        "Currently in full focus: building the playable Steam demo and full release of The Midnight Pharmacy.",

      channels_heading: "Official Channels",
      ch_steam: "Steam Developer Page",
      ch_steam_meta: "Coming Soon",
      ch_youtube: "YouTube",
      ch_youtube_meta: "Devlogs · Coming Soon",
      ch_tiktok: "TikTok",
      ch_tiktok_meta: "Short Clips · Coming Soon",

      footer_impressum: "Legal Notice (Impressum)",
      footer_datenschutz: "Privacy Policy (Datenschutz)"
    },
    de: {
      page_title_home: "The Midnight Pharmacy — Harvin Labs",
      page_desc_home:
        "The Midnight Pharmacy von Harvin Labs: First-Person-Apotheken-Management-Simulator für PC (Steam), spielbar solo oder im 1–4-Spieler-Koop.",
      page_title_impressum: "Impressum — Harvin Labs",
      page_title_datenschutz: "Datenschutzerklärung — Harvin Labs",

      nav_game: "The Midnight Pharmacy",
      nav_studio: "Studio",
      nav_back: "← Zurück zur Startseite",

      mp_band_label: "HARVIN LABS · PRÄPARAT NR. 01",
      mp_band_meta: "PC (STEAM) · SOLO & KOOP (1–4)",
      mp_kicker: "First-Person-Apotheken-Management-Simulator",
      mp_lead:
        "Führe eine Apotheke in einem unruhigen Stadtviertel. Bediene tagsüber Rezepte am Tresen, stelle Chargen im Hinterzimmer-Labor her und entscheide nachts, wie weit du das Gesetz dehnst, wenn die Miete fällig ist.",
      mp_cta_primary: "Auf Steam wishlisten",
      mp_cta_note_prefix: "Steam-Shopseite:",
      mp_cta_note_status: "Startet bald — Spielbare Demo in Entwicklung",

      bon_head: "THE MIDNIGHT PHARMACY",
      bon_sub: "BEIPACKZETTEL / ECKDATEN",
      bon_genre_k: "Genre",
      bon_genre_v: "First-Person-Management-Sim",
      bon_mode_k: "Spieler",
      bon_mode_v: "Solo & Koop (1–4)",
      bon_platform_k: "Plattform",
      bon_platform_v: "PC (Steam)",
      bon_status_k: "Status",
      bon_status_v: "Demo in Entwicklung",
      bon_code: "REF HL-TMP-01",

      media_slot_title: "Key Art / Gameplay-Screenshot (16:9)",
      media_slot_desc_1: "Platzhalter für deinen ersten In-Game-Screenshot oder die Steam Capsule Art.",
      media_slot_desc_2: "Datei einfach ablegen unter",

      ledger_heading: "Tresen, Labor & Ein ganzer Straßenzug",
      ledger_meta: "01 — 04",

      p1_title: "Tresen & Rezepte",
      p1_body:
        "Räume Regale ein, berate Laufkundschaft mit widersprüchlichen Beschwerden und prüfe gedruckte Rezepte auf gefälschte Stempel oder abgelaufene Daten.",
      p2_title: "Hinterzimmer-Labor",
      p2_body:
        "Wiege, mische und verarbeite Präparate aus Rohstoffen. Behalte Reinheit und Haltbarkeit im Blick – oder strecke Ware auf Kosten der Gesundheit im Viertel.",
      p3_title: "Ein lebendiger Straßenzug",
      p3_body:
        "Bewege dich frei zwischen deiner Apotheke, der Praxis nebenan, dem Pub und der Hintergasse, wo Schwarzmarkt-Nachschub auf steigenden Ermittlungsdruck trifft.",
      p4_title: "Echte Konsequenzen",
      p4_body:
        "Spiele allein oder teilt euch Schichten mit bis zu vier Spielern. Unangekündigte Prüfungen des Gesundheitsamts, Seuchen, Razzien und offene Mieten können den Laden endgültig schließen.",

      mp_disclaimer:
        "Alle Präparate, Wirkstoffe und Beschwerdebilder in The Midnight Pharmacy sind frei erfunden. Nichts davon ist medizinischer Rat.",

      studio_eyebrow: "Harvin Labs · Deutschland",
      studio_heading: "Unabhängiges Solo-Studio",
      studio_p1:
        "Harvin Labs ist ein unabhängiges Indie-Studio aus Deutschland. Im Mittelpunkt stehen haptische, systemgetriebene First-Person-Simulationen, bei denen Ladenarbeit, Wirtschaft und Risiko direkt ineinandergreifen.",
      studio_p2:
        "Aktuell gilt der volle Fokus der spielbaren Steam-Demo und dem Release von The Midnight Pharmacy.",

      channels_heading: "Offizielle Kanäle",
      ch_steam: "Steam Developer Page",
      ch_steam_meta: "Demnächst",
      ch_youtube: "YouTube",
      ch_youtube_meta: "Devlogs · Demnächst",
      ch_tiktok: "TikTok",
      ch_tiktok_meta: "Kurze Einblicke · Demnächst",

      footer_impressum: "Impressum",
      footer_datenschutz: "Datenschutz"
    }
  };

  function detectInitialLang() {
    try {
      var params = new URLSearchParams(window.location.search);
      var queryLang = params.get("lang");
      if (queryLang === "de" || queryLang === "en") {
        return queryLang;
      }
    } catch (_) {}

    try {
      var saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "de" || saved === "en") {
        return saved;
      }
    } catch (_) {}

    var browserLangs = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || "en"];

    for (var i = 0; i < browserLangs.length; i++) {
      var code = String(browserLangs[i] || "").toLowerCase();
      if (code === "de" || code.indexOf("de-") === 0) {
        return "de";
      }
      if (code === "en" || code.indexOf("en-") === 0) {
        return "en";
      }
    }

    return "en";
  }

  function applyLang(lang, persist) {
    var dict = COPY[lang] || COPY.en;
    var page = document.documentElement.getAttribute("data-page") || "home";

    // Keep legal pages' <html lang="de"> accurate for German legal body copy,
    // while updating UI chrome & home page lang cleanly.
    if (page === "home") {
      document.documentElement.lang = lang;
    }
    document.documentElement.setAttribute("data-ui-lang", lang);

    var titleKey = "page_title_" + page;
    if (dict[titleKey]) {
      document.title = dict[titleKey];
    }

    if (page === "home") {
      var metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && dict.page_desc_home) {
        metaDesc.setAttribute("content", dict.page_desc_home);
      }
    }

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        nodes[i].textContent = dict[key];
      }
    }

    var legalNotes = document.querySelectorAll("[data-legal-en-note]");
    for (var j = 0; j < legalNotes.length; j++) {
      legalNotes[j].hidden = lang !== "en";
    }

    var buttons = document.querySelectorAll("[data-lang-switch]");
    for (var k = 0; k < buttons.length; k++) {
      var btnLang = buttons[k].getAttribute("data-lang-switch");
      buttons[k].setAttribute("aria-pressed", btnLang === lang ? "true" : "false");
    }

    if (persist) {
      try {
        window.localStorage.setItem(STORAGE_KEY, lang);
      } catch (_) {}
    }
  }

  var currentLang = detectInitialLang();
  applyLang(currentLang, false);

  var buttons = document.querySelectorAll("[data-lang-switch]");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      var nextLang = this.getAttribute("data-lang-switch");
      if (nextLang === "de" || nextLang === "en") {
        applyLang(nextLang, true);
      }
    });
  }
})();
