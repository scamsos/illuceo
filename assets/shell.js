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
    { label:'News', href:'/',
      sub:[
        { label:'Today\'s Headlines',    href:'/' },
        { label:'AI Models',             href:'/?cat=Models' },
        { label:'AI Business',           href:'/?cat=Business' },
        { label:'AI Policy',             href:'/?cat=Policy' },
        { label:'AI Research',           href:'/?cat=Research' },
        { label:'AI Agents News',        href:'/?cat=Agents' },
      ]
    },
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

  /* ── INJECT MEGA NAV + MOBILE DRAWER + MOBILE NAV TICKER ── */
  function injectNav(){
    const el = document.getElementById('shell-nav');
    if(!el) return;

    // Desktop nav items
    const items = NAV.map(n => {
      const active = isActive(n.href) ? 'active' : '';
      const sub = n.sub ? `
        <ul class="nav-dropdown">
          ${n.sub.map(s=>`<li><a href="${s.href}">${s.label}</a></li>`).join('')}
        </ul>` : '';
      return `<li><a href="${n.href}" class="nav-item ${active}">${n.label}</a>${sub}</li>`;
    }).join('');

    // Mobile nav items (for drawer)
    const mobileItems = NAV.map(n => {
      const active = isActive(n.href) ? 'active' : '';
      const sub = n.sub ? `
        <ul class="nav-mobile-sub">
          ${n.sub.map(s=>`<li><a href="${s.href}">${s.label}</a></li>`).join('')}
        </ul>` : '';
      return `<li><a href="${n.href}" class="${active}">${n.label}</a>${sub}</li>`;
    }).join('');

    // Mobile ticker — all nav links in one scrolling strip
    const allLinks = [];
    NAV.forEach(n => {
      allLinks.push({ label: n.label, href: n.href });
      if(n.sub) n.sub.forEach(s => allLinks.push({ label: s.label, href: s.href }));
    });

    // Build ticker — duplicate for seamless loop
    const tickerLinks = [...allLinks, ...allLinks];
    const tickerItems = tickerLinks.map(l =>
      `<a class="nav-ticker-item" href="${l.href}" onclick="window.location.href='${l.href}';return false;">${l.label}</a>`
    ).join('');

    el.innerHTML = `
      <ul class="nav-primary">${items}</ul>
      <div class="nav-mobile-bar">
        <button class="nav-hamburger" id="nav-hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
        <div class="nav-ticker-wrap">
          <div class="nav-ticker-track" id="nav-ticker-track">${tickerItems}</div>
        </div>
      </div>`;

    // Wire touch — simple approach: pause on touchstart, navigate on touchend if no swipe
    const track = document.getElementById('nav-ticker-track');
    if(track) {
      let startX = 0, startY = 0, startT = 0;

      track.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        startT = Date.now();
        track.style.animationPlayState = 'paused';
      }, { passive: true });

      track.addEventListener('touchend', e => {
        const dx = Math.abs(e.changedTouches[0].clientX - startX);
        const dy = Math.abs(e.changedTouches[0].clientY - startY);
        const dt = Date.now() - startT;

        if(dx < 10 && dy < 10 && dt < 350) {
          // Tap — find link by walking up from target
          let el = e.target;
          while(el && el !== track) {
            if(el.tagName === 'A' && el.getAttribute('href')) {
              window.location.href = el.getAttribute('href');
              return;
            }
            el = el.parentElement;
          }
        }
        // Swipe — resume after delay
        setTimeout(() => { track.style.animationPlayState = 'running'; }, 600);
      }, { passive: true });
    }

    // Inject mobile drawer into body
    const drawer = document.createElement('div');
    drawer.className = 'nav-mobile-drawer';
    drawer.id = 'nav-mobile-drawer';
    drawer.innerHTML = `
      <div class="nav-mobile-panel">
        <div class="nav-mobile-header">
          <a href="/" class="nav-mobile-logo notranslate" translate="no"><span>I</span>LLUCEO</a>
          <div class="nav-mobile-close" id="nav-mobile-close">✕</div>
        </div>
        <ul class="nav-mobile-list">${mobileItems}</ul>
      </div>`;
    document.body.appendChild(drawer);

    // Wire hamburger
    const burger = document.getElementById('nav-hamburger');
    const closeBtn = document.getElementById('nav-mobile-close');

    function openDrawer(){
      drawer.classList.add('open');
      burger.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeDrawer(){
      drawer.classList.remove('open');
      burger.classList.remove('open');
      document.body.style.overflow = '';
    }

    burger.addEventListener('click', openDrawer);
    closeBtn.addEventListener('click', closeDrawer);
    drawer.addEventListener('click', e => { if(e.target === drawer) closeDrawer(); });
    document.addEventListener('keydown', e => { if(e.key === 'Escape') closeDrawer(); });
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

  /* ── ADSENSE ── */
  function injectAdSense(){
    if(document.getElementById('adsense-script')) return;
    const s = document.createElement('script');
    s.id = 'adsense-script';
    s.async = true;
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3306478541748582';
    s.setAttribute('crossorigin','anonymous');
    document.head.appendChild(s);
  }
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

  /* ── BOOKMARK / ADD TO HOME SCREEN PROMPT ── */
  function initBookmarkPrompt(){
    // Don't show if already installed or dismissed
    if(localStorage.getItem('illuceo_install') === 'done') return;
    const isInStandaloneMode = window.matchMedia('(display-mode: standalone)').matches
      || window.navigator.standalone;
    if(isInStandaloneMode) return;

    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const isMobile = /android|iphone|ipad|ipod/i.test(navigator.userAgent);
    let deferredPrompt = null;

    // Catch Android Chrome native install event
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      deferredPrompt = e;
    });

    function dismiss(){
      const el = document.getElementById('install-popup');
      if(el){ el.classList.remove('visible'); setTimeout(()=>el.remove(), 400); }
    }

    setTimeout(() => {
      const popup = document.createElement('div');
      popup.id = 'install-popup';
      popup.className = 'install-popup';

      // Different message per platform
      let actionHTML = '';
      if(isIOS){
        actionHTML = `
          <div class="install-steps">
            <div class="install-step"><span class="install-step-num">1</span>Tap the <strong>Share</strong> button ⎙ at the bottom of your browser</div>
            <div class="install-step"><span class="install-step-num">2</span>Scroll down and tap <strong>"Add to Home Screen"</strong></div>
            <div class="install-step"><span class="install-step-num">3</span>Tap <strong>"Add"</strong> — ILLUCEO will appear on your home screen</div>
          </div>
          <button class="install-btn-primary" id="install-got-it">Got it ✓</button>`;
      } else if(deferredPrompt || isMobile){
        actionHTML = `
          <p class="install-desc">Install ILLUCEO as an app for instant access to daily AI news — no app store needed.</p>
          <div class="install-btn-row">
            <button class="install-btn-primary" id="install-yes">Install App →</button>
            <button class="install-btn-secondary" id="install-no">Maybe later</button>
          </div>`;
      } else {
        // Desktop
        actionHTML = `
          <p class="install-desc">Add ILLUCEO to your browser for one-click access to daily AI intelligence.</p>
          <div class="install-btn-row">
            <button class="install-btn-primary" id="install-yes">Add to Browser →</button>
            <button class="install-btn-secondary" id="install-no">Maybe later</button>
          </div>`;
      }

      popup.innerHTML = `
        <div class="install-popup-inner">
          <button class="install-close" id="install-close">✕</button>
          <div class="install-header">
            <div class="install-app-icon">
              <img src="/favicon/android-chrome-192x192.png" alt="ILLUCEO" width="64" height="64">
            </div>
            <div class="install-header-text">
              <div class="install-app-name notranslate" translate="no">ILLUCEO</div>
              <div class="install-app-url notranslate" translate="no">illuceo.space</div>
              <div class="install-app-tag">Daily AI Intelligence</div>
            </div>
          </div>
          ${actionHTML}
        </div>`;

      document.body.appendChild(popup);
      setTimeout(() => popup.classList.add('visible'), 100);

      // Wire buttons
      document.getElementById('install-close')?.addEventListener('click', () => {
        localStorage.setItem('illuceo_install','done');
        dismiss();
      });
      document.getElementById('install-no')?.addEventListener('click', () => {
        localStorage.setItem('illuceo_install','done');
        dismiss();
      });
      document.getElementById('install-got-it')?.addEventListener('click', () => {
        localStorage.setItem('illuceo_install','done');
        dismiss();
      });
      document.getElementById('install-yes')?.addEventListener('click', async () => {
        if(deferredPrompt){
          deferredPrompt.prompt();
          const { outcome } = await deferredPrompt.userChoice;
          deferredPrompt = null;
          localStorage.setItem('illuceo_install','done');
          dismiss();
        } else {
          // Desktop — trigger browser install if available
          const el = document.querySelector('#install-yes');
          if(el) el.textContent = 'Use browser menu → Install…';
          setTimeout(() => { localStorage.setItem('illuceo_install','done'); dismiss(); }, 2000);
        }
      });

      // Close on backdrop click
      popup.addEventListener('click', e => {
        if(e.target === popup){ localStorage.setItem('illuceo_install','done'); dismiss(); }
      });

    }, 3000); // 3 seconds — quick enough to catch, not so fast it's jarring
  }

  /* ── NEW ARTICLE NOTIFICATION BAR ── */
  function initNewsChecker(){
    const SEEN_KEY       = 'illuceo_seen_articles';
    const NOTIF_KEY      = 'illuceo_last_notif_day';
    const BLOG_SEEN_KEY  = 'illuceo_seen_blog';
    const BLOG_NOTIF_KEY = 'illuceo_last_blog_notif_day';

    // Get today's date string e.g. "2026-04-17"
    function today(){ return new Date().toISOString().slice(0,10); }

    // Already notified today?
    function notifiedToday(){ return localStorage.getItem(NOTIF_KEY) === today(); }

    // Get set of article slugs already seen
    function getSeenSlugs(){
      try { return new Set(JSON.parse(localStorage.getItem(SEEN_KEY) || '[]')); }
      catch(e){ return new Set(); }
    }

    // Save seen slugs (keep last 100 to avoid unbounded growth)
    function saveSeenSlugs(set){
      const arr = Array.from(set).slice(-100);
      localStorage.setItem(SEEN_KEY, JSON.stringify(arr));
    }

    // Build a slug from article title
    function toSlug(str){ return (str||'').toLowerCase().replace(/[^a-z0-9]+/g,'-').slice(0,60); }

    async function checkForNewArticles(){
      if(notifiedToday()) return;

      try {
        // Check blog articles (articles.json)
        const res = await fetch('/articles.json?t=' + Date.now());
        if(!res.ok) return;
        const data = await res.json();
        const articles = data.articles || [];
        if(!articles.length) return;

        const seen = getSeenSlugs();
        // Use url as unique key for blog articles
        const newArticles = articles.filter(a => !seen.has(toSlug(a.url || a.title)));

        if(!newArticles.length){
          articles.forEach(a => seen.add(toSlug(a.url || a.title)));
          saveSeenSlugs(seen);
          return;
        }

        // First ever visit — save silently
        if(seen.size === 0){
          articles.forEach(a => seen.add(toSlug(a.url || a.title)));
          saveSeenSlugs(seen);
          return;
        }

        // New blog articles found — show notification with link
        showArticleBar(newArticles.length, newArticles[0], true);

        articles.forEach(a => seen.add(toSlug(a.url || a.title)));
        saveSeenSlugs(seen);
        localStorage.setItem(NOTIF_KEY, today());

      } catch(e){ /* silent */ }
    }

    // ── Blog article checker — uses separate storage keys ──
    async function checkForNewBlogArticles(){
      if(localStorage.getItem(BLOG_NOTIF_KEY) === today()) return;

      try {
        const res = await fetch('/articles.json?t=' + Date.now());
        if(!res.ok) return;
        const data = await res.json();
        const articles = data.articles || [];
        if(!articles.length) return;

        let seen;
        try { seen = new Set(JSON.parse(localStorage.getItem(BLOG_SEEN_KEY) || '[]')); }
        catch(e){ seen = new Set(); }

        const isFirstVisit = seen.size === 0;
        const newArticles = articles.filter(a => !seen.has(a.url));

        // Always save current state
        articles.forEach(a => seen.add(a.url));
        localStorage.setItem(BLOG_SEEN_KEY, JSON.stringify(Array.from(seen).slice(-200)));

        // First ever visit — save silently, no notification
        if(isFirstVisit) return;
        if(!newArticles.length) return;

        // New blog articles — show banner linking to the latest one
        const latest = newArticles[newArticles.length - 1];
        showArticleBar(newArticles.length, latest, true);
        localStorage.setItem(BLOG_NOTIF_KEY, today());

      } catch(e){ /* silent */ }
    }

    function showArticleBar(count, topArticle, isBlog){
      if(document.getElementById('news-update-bar')) return;

      const label = count === 1
        ? '1 new article published'
        : count + ' new articles published';

      // For blog articles use the url directly; for news use homepage
      const ctaUrl = (isBlog && topArticle && topArticle.url) ? topArticle.url : '/';
      const ctaLabel = isBlog ? 'Read it →' : 'See articles →';
      const title = isBlog
        ? (topArticle ? topArticle.title : '')
        : (topArticle ? topArticle.headline : '');

      const bar = document.createElement('div');
      bar.id = 'news-update-bar';
      bar.className = 'news-update-bar';
      bar.innerHTML = `
        <div class="news-update-inner">
          <span class="news-update-dot"></span>
          <span class="news-update-text">
            <strong>${label}</strong>
            ${title ? ' — ' + title.slice(0,55) + '…' : ''}
          </span>
          <button class="news-update-cta" onclick="window.location.href='${ctaUrl}';return false;">${ctaLabel}</button>
          <button class="news-update-close" id="news-update-close">✕</button>
        </div>`;

      document.body.appendChild(bar);
      setTimeout(() => bar.classList.add('visible'), 100);

      document.getElementById('news-update-close').addEventListener('click', () => {
        bar.classList.remove('visible');
        setTimeout(() => bar.remove(), 400);
      });

      // Bar stays until user dismisses it
    }

    // Check on page load after 4 seconds
    setTimeout(checkForNewArticles, 4000);
    // Check blog articles after 6 seconds (stagger so banners don't collide)
    setTimeout(checkForNewBlogArticles, 6000);
  }

  function init(){
    injectAdSense();
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
    initBookmarkPrompt();
    initNewsChecker();
    document.dispatchEvent(new CustomEvent('illuceo:ready'));
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
