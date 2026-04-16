/* ============================================================
   ILLUCEO — shell.js
   Injects: topbar, nord strip, mega nav, footer, cookie banner
   Load once at bottom of every page body.
   ============================================================ */

(function(){
  'use strict';

  const NORDVPN = 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=145247&url_id=902';
  const YEAR    = new Date().getFullYear();

  /* ── NAV STRUCTURE — only links to pages that exist ── */
  const NAV = [
    { label:'News', href:'/' },
    { label:'AI Tools', href:'/tools/',
      sub:[
        { label:'All AI Tools',               href:'/tools/' },
        { label:'Best AI Writing Tools',      href:'/tools/best/ai-writing-tools/' },
        { label:'ChatGPT vs Claude vs Gemini',href:'/tools/compare/chatgpt-vs-claude-vs-gemini/' },
        { label:'Best Free AI Tools',         href:'/tools/free/' },
        { label:'AI Tools for Small Business',href:'/tools/best/ai-tools-small-business/' },
        { label:'Best AI Coding Assistants',  href:'/tools/best/ai-coding-assistants/' },
      ]
    },
    { label:'Tutorials', href:'/tutorials/',
      sub:[
        { label:'All Tutorials',        href:'/tutorials/' },
        { label:'How to Use ChatGPT',   href:'/tutorials/chatgpt/' },
        { label:'Midjourney Prompts',   href:'/tutorials/midjourney/' },
        { label:'Prompt Engineering',   href:'/tutorials/prompts/' },
        { label:'AI Automation',        href:'/tutorials/automation/' },
        { label:'How to Use Claude',    href:'/tutorials/claude/' },
      ]
    },
    { label:'Professions', href:'/professions/',
      sub:[
        { label:'All Professions',      href:'/professions/' },
        { label:'Real Estate',          href:'/professions/real-estate/' },
        { label:'Education',            href:'/professions/education/' },
        { label:'Legal',                href:'/professions/legal/' },
        { label:'Healthcare',           href:'/professions/healthcare/' },
        { label:'Marketing',            href:'/professions/marketing/' },
      ]
    },
    { label:'Make Money', href:'/make-money/',
      sub:[
        { label:'15 Proven Methods',     href:'/make-money/15-methods/' },
        { label:'AI Side Hustles',      href:'/make-money/side-hustles/' },
        { label:'AI Freelancing',       href:'/make-money/freelancing/' },
        { label:'Sell AI Products',     href:'/make-money/sell/' },
        { label:'AI Passive Income',    href:'/make-money/passive/' },
      ]
    },
    { label:'Explained', href:'/explained/',
      sub:[
        { label:'All Explainers',         href:'/explained/' },
        { label:'What is AI?',            href:'/explained/what-is-ai/' },
        { label:'What is an LLM?',        href:'/explained/what-is-llm/' },
        { label:'What is an AI Agent?',   href:'/explained/what-is-ai-agent/' },
        { label:'AI Hallucinations',      href:'/explained/ai-hallucinations/' },
        { label:'Prompt Engineering',     href:'/explained/prompt-engineering/' },
      ]
    },
    { label:'AI Agents', href:'/agents/',
      sub:[
        { label:'All Agent Guides',       href:'/agents/' },
        { label:'What Are AI Agents?',    href:'/agents/what-are-agents/' },
        { label:'Build an AI Agent',      href:'/agents/build-ai-agent/' },
        { label:'AI Workflow Automation', href:'/agents/ai-workflow-automation/' },
        { label:'MCP Protocol',           href:'/agents/mcp-protocol/' },
        { label:'Best AI Agents 2026',    href:'/agents/best-ai-agents/' },
      ]
    },
  ];

  const FOOTER_LINKS = {
    'AI Tools': [
      { l:'Best AI Writing Tools',      h:'/tools/best/ai-writing-tools/' },
      { l:'Best Free AI Tools',         h:'/tools/free/' },
      { l:'ChatGPT vs Claude vs Gemini',h:'/tools/compare/chatgpt-vs-claude-vs-gemini/' },
      { l:'AI Tools for Small Business',h:'/tools/best/ai-tools-small-business/' },
      { l:'Best AI Coding Assistants',  h:'/tools/best/ai-coding-assistants/' },
    ],
    'Learn': [
      { l:'Prompt Engineering Guide',   h:'/tutorials/prompts/' },
      { l:'How to Use ChatGPT',         h:'/tutorials/chatgpt/' },
      { l:'What Is an AI Agent?',       h:'/explained/what-is-ai-agent/' },
      { l:'What Is an LLM?',            h:'/explained/what-is-llm/' },
      { l:'AI Hallucinations Explained',h:'/explained/ai-hallucinations/' },
    ],
    'Company': [
      { l:'About ILLUCEO',  h:'/about/' },
      { l:'Contact',        h:'/contact/' },
      { l:'Privacy Policy', h:'/privacy/' },
      { l:'Terms of Service',h:'/terms/' },
      { l:'Advertise',      h:'/contact/#advertise' },
    ],
  };

  /* ── DATE ── */
  function todayStr(){
    return new Date().toLocaleDateString('en-US',{
      weekday:'short', year:'numeric', month:'short', day:'numeric'
    }).toUpperCase();
  }

  /* ── ACTIVE NAV DETECTION ── */
  function isActive(href){
    const p = window.location.pathname;
    if(href === '/index.html') return p === '/' || p === '/index.html';
    return p.startsWith(href) && href !== '/';
  }

  /* ── INJECT TOPBAR ── */
  function injectTopbar(){
    const el = document.getElementById('shell-top');
    if(!el) return;
    el.innerHTML = `
      <div class="illuceo-topbar">
        <div class="topbar-left">
          <a href="/" class="live-pill notranslate" translate="no" style="text-decoration:none;"><div class="live-dot"></div><span>ILLUCEO</span></a>
          <div class="topbar-date notranslate" translate="no">${todayStr()}</div>
        </div>
        <div class="lang-switcher" id="lang-switcher">
          <button class="lang-btn active" data-lang="en">EN</button>
          <button class="lang-btn" data-lang="es">ES</button>
          <button class="lang-btn" data-lang="fr">FR</button>
          <button class="lang-btn" data-lang="de">DE</button>
          <button class="lang-btn" data-lang="pt">PT</button>
          <button class="lang-btn" data-lang="zh">中文</button>
          <button class="lang-btn" data-lang="ar">AR</button>
          <button class="lang-btn" data-lang="ru">RU</button>
        </div>
      </div>
      <div class="nord-strip">
        <div class="nord-strip-text">🛡️ <strong>Stay private while browsing AI content.</strong> NordVPN encrypts your connection — trusted by 14M+ worldwide.</div>
        <a href="${NORDVPN}" target="_blank" rel="noopener sponsored" class="nord-strip-cta">Get 73% OFF →</a>
      </div>`;
  }

  /* ── INJECT MEGA NAV ── */
  function injectNav(){
    const el = document.getElementById('shell-nav');
    if(!el) return;
    const items = NAV.map(n => {
      const active = isActive(n.href) ? 'active' : '';
      const sub = n.sub ? `
        <ul class="nav-dropdown">
          ${n.sub.map(s=>`<li><a href="${s.href}">${s.label}</a></li>`).join('')}
        </ul>` : '';
      return `<li><a href="${n.href}" class="nav-item ${active}">${n.label}</a>${sub}</li>`;
    }).join('');
    el.innerHTML = `<ul class="nav-primary">${items}</ul>`;
  }

  /* ── INJECT FOOTER ── */
  function injectFooter(){
    const el = document.getElementById('shell-bottom');
    if(!el) return;

    const cols = Object.entries(FOOTER_LINKS).map(([title, links])=>`
      <div class="footer-col">
        <h4>${title}</h4>
        <ul>${links.map(l=>`<li><a href="${l.h}">${l.l}</a></li>`).join('')}</ul>
      </div>`).join('');

    el.innerHTML = `
      <footer class="illuceo-footer">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="/" class="footer-brand-name notranslate" translate="no"><span>I</span>LLUCEO</a>
            <div class="footer-brand-latin notranslate" translate="no">illuceo · latin · "to begin giving light"</div>
            <p class="footer-brand-desc">The sharpest AI intelligence on the planet — curated daily, delivered in your language, free forever.</p>
            <div class="footer-nord-widget" style="margin-top:20px;">
              <p>🔒 Every site you visit is tracked. NordVPN encrypts your connection and keeps your data private.</p>
              <a href="${NORDVPN}" target="_blank" rel="noopener sponsored">Try NordVPN Risk-Free →</a>
            </div>
          </div>
          ${cols}
        </div>
        <div class="footer-copy">
          <p>© ${YEAR} <span class="notranslate" translate="no">ILLUCEO</span> · AI-Powered Daily Intelligence · <span class="notranslate" translate="no">illuceo.space</span></p>
          <p>Contains affiliate links · <a href="${NORDVPN}" target="_blank" rel="noopener sponsored">NordVPN Partner</a> · <a href="/privacy/">Privacy</a> · <a href="/terms/">Terms</a></p>
        </div>
      </footer>`;
  }

  /* ── COOKIE BANNER ── */
  function injectCookieBanner(){
    if(localStorage.getItem('illuceo_cookie') === 'accepted') return;
    if(localStorage.getItem('illuceo_cookie') === 'declined') return;

    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.id = 'cookie-banner';
    banner.innerHTML = `
      <p>We use cookies to improve your experience and show relevant content. By continuing you agree to our <a href="/privacy/">Privacy Policy</a>.</p>
      <button class="cookie-btn cookie-decline" id="cookie-decline">Decline</button>
      <button class="cookie-btn cookie-accept" id="cookie-accept">Accept</button>`;
    document.body.appendChild(banner);

    setTimeout(()=> banner.classList.add('visible'), 800);

    document.getElementById('cookie-accept').addEventListener('click',()=>{
      localStorage.setItem('illuceo_cookie','accepted');
      banner.classList.remove('visible');
      setTimeout(()=> banner.remove(), 400);
    });
    document.getElementById('cookie-decline').addEventListener('click',()=>{
      localStorage.setItem('illuceo_cookie','declined');
      banner.classList.remove('visible');
      setTimeout(()=> banner.remove(), 400);
    });
  }

  /* ── FAQ ACCORDION — event delegation, cannot double-fire ── */
  function initFaq(){
    // Use event delegation on document so it works regardless of load order
    // and cannot be duplicated no matter how many times initFaq() is called
    if(document._illuceoFaqBound) return;
    document._illuceoFaqBound = true;
    document.addEventListener('click', function(e){
      const q = e.target.closest('.faq-q');
      if(!q) return;
      const item = q.closest('.faq-item');
      if(!item) return;
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i=>i.classList.remove('open'));
      if(!wasOpen) item.classList.add('open');
    });
  }

  /* ── LANG SWITCHER ── */
  function initLang(){
    document.querySelectorAll('.lang-btn').forEach(btn=>{
      btn.addEventListener('click',()=>{
        document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        document.documentElement.lang = btn.dataset.lang;
        document.documentElement.dir = btn.dataset.lang === 'ar' ? 'rtl' : 'ltr';
        // Pages handle their own translation if needed
        document.dispatchEvent(new CustomEvent('illuceo:lang', { detail: btn.dataset.lang }));
      });
    });
  }

  /* ── SCHEMA: ORGANIZATION (sitewide) ── */
  function injectOrgSchema(){
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "ILLUCEO",
      "url": "https://illuceo.space",
      "logo": "https://illuceo.space/favicon/android-chrome-512x512.png",
      "description": "The moment AI becomes clear — daily AI intelligence in 8 languages.",
      "sameAs": []
    });
    document.head.appendChild(s);
  }

  /* ── FAVICON (injected into <head> so Google picks it up) ── */
  function injectFavicon(){
    const tags = [
      { rel:'icon', type:'image/x-icon',      href:'/favicon/favicon.ico' },
      { rel:'icon', type:'image/svg+xml',      href:'/favicon/favicon.svg' },
      { rel:'icon', type:'image/png', sizes:'32x32', href:'/favicon/favicon-32.png' },
      { rel:'apple-touch-icon', sizes:'180x180', href:'/favicon/apple-touch-icon.png' },
      { rel:'manifest', href:'/favicon/site.webmanifest' },
    ];
    tags.forEach(t => {
      // Don't duplicate if already in <head>
      if(document.querySelector(`link[href="${t.href}"]`)) return;
      const el = document.createElement('link');
      Object.entries(t).forEach(([k,v]) => el.setAttribute(k,v));
      document.head.appendChild(el);
    });
    // Theme color meta
    if(!document.querySelector('meta[name="theme-color"]')){
      const m = document.createElement('meta');
      m.name = 'theme-color'; m.content = '#00e5b0';
      document.head.appendChild(m);
    }
  }

  /* ── GOOGLE TRANSLATE ── */
  // Maps our lang codes to Google Translate language codes
  const GT_LANGS = {
    en:'en', es:'es', fr:'fr', de:'de',
    pt:'pt', zh:'zh-CN', ar:'ar', ru:'ru'
  };

  function initGoogleTranslate(){
    // Inject Google Translate script once
    if(document.getElementById('gt-script')) return;

    // Create hidden element Google Translate needs
    const el = document.createElement('div');
    el.id = 'google_translate_element';
    el.style.display = 'none';
    document.body.insertBefore(el, document.body.firstChild);

    // Define callback before loading script
    window.googleTranslateElementInit = function(){
      new window.google.translate.TranslateElement(
        { pageLanguage:'en', autoDisplay:false },
        'google_translate_element'
      );
    };

    const s = document.createElement('script');
    s.id = 'gt-script';
    s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    s.async = true;
    document.body.appendChild(s);
  }

  function translatePage(langCode){
    const gtCode = GT_LANGS[langCode] || langCode;
    if(gtCode === 'en'){
      // Restore original — reload without cookie
      const frame = document.querySelector('.goog-te-banner-frame');
      if(frame){
        const restoreBtn = frame.contentDocument?.querySelector('.goog-te-banner-content .goog-close-link');
        if(restoreBtn) restoreBtn.click();
      }
      // Clear Google Translate cookie and reload
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + location.hostname;
      location.reload();
      return;
    }
    // Set Google Translate cookie — this triggers translation
    const cookieVal = `/en/${gtCode}`;
    document.cookie = `googtrans=${cookieVal}; path=/`;
    document.cookie = `googtrans=${cookieVal}; path=/; domain=${location.hostname}`;

    // Trigger via select element Google Translate creates
    const tryTranslate = () => {
      const sel = document.querySelector('.goog-te-combo');
      if(sel){
        sel.value = gtCode;
        sel.dispatchEvent(new Event('change'));
      } else {
        setTimeout(tryTranslate, 300);
      }
    };
    setTimeout(tryTranslate, 500);
  }

  /* ── LANG SWITCHER (updated to use Google Translate) ── */
  function initLang(){
    // Detect current translation from cookie
    const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
    const activeLang = match ? Object.entries(GT_LANGS).find(([k,v])=>v===match[1])?.[0] || 'en' : 'en';

    document.querySelectorAll('.lang-btn').forEach(btn => {
      // Set active state
      if(btn.dataset.lang === activeLang){
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }

      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        translatePage(lang);
        document.dispatchEvent(new CustomEvent('illuceo:lang', { detail: lang }));
      });
    });
  }

  /* ── HIDE GOOGLE TOOLBAR (optional aesthetic fix) ── */
  function hideGoogleBar(){
    const style = document.createElement('style');
    style.textContent = `
      .goog-te-banner-frame { display:none !important; }
      body { top: 0 !important; }
      .skiptranslate { display:none !important; }
      /* Protect ILLUCEO brand from translation */
      .notranslate { font-family: inherit !important; }
      /* Footer brand name as link */
      a.footer-brand-name {
        text-decoration: none;
        display: block;
        transition: opacity .18s;
      }
      a.footer-brand-name:hover { opacity: .75; }
    `;
    document.head.appendChild(style);
  }

  /* ── PROTECT BRAND NAME from Google Translate ── */
  function protectBrandName(){
    // Mark all ILLUCEO text nodes so Google Translate skips them
    document.querySelectorAll('.notranslate').forEach(el => {
      el.setAttribute('translate', 'no');
      el.classList.add('notranslate');
    });
    // Also set on <html> to hint translators about brand
    document.documentElement.setAttribute('data-notranslate-brand', 'ILLUCEO');
  }

  /* ── INIT ── */
  function init(){
    injectFavicon();
    injectTopbar();
    injectNav();
    injectFooter();
    injectCookieBanner();
    initGoogleTranslate();
    initLang();
    initFaq();
    injectOrgSchema();
    hideGoogleBar();
    protectBrandName();
    document.dispatchEvent(new CustomEvent('illuceo:ready'));
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
