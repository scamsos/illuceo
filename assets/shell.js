/* ============================================================
   ILLUCEO — shell.js
   Injects: topbar, nord strip, mega nav, footer, cookie banner
   Load once at bottom of every page body.
   ============================================================ */

(function(){
  'use strict';

  const NORDVPN = 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=145247&url_id=902';
  const YEAR    = new Date().getFullYear();

  /* ── NAV STRUCTURE ── */
  const NAV = [
    { label:'News',      href:'/index.html',   cat:'news' },
    { label:'AI Tools',  href:'/tools/',        cat:'tools',
      sub:[
        { label:'All Tools',            href:'/tools/' },
        { label:'Best Of Lists',        href:'/tools/best/' },
        { label:'Tool Comparisons',     href:'/tools/compare/' },
        { label:'Free Tools',           href:'/tools/free/' },
        { label:'Tools by Industry',    href:'/tools/industry/' },
      ]
    },
    { label:'Tutorials', href:'/tutorials/',    cat:'tutorials',
      sub:[
        { label:'ChatGPT Guides',       href:'/tutorials/chatgpt/' },
        { label:'Midjourney',           href:'/tutorials/midjourney/' },
        { label:'Claude AI',            href:'/tutorials/claude/' },
        { label:'AI Automation',        href:'/tutorials/automation/' },
        { label:'Prompt Engineering',   href:'/tutorials/prompts/' },
      ]
    },
    { label:'Professions', href:'/professions/',  cat:'professions',
      sub:[
        { label:'Healthcare',           href:'/professions/healthcare/' },
        { label:'Legal',                href:'/professions/legal/' },
        { label:'Education',            href:'/professions/education/' },
        { label:'Real Estate',          href:'/professions/real-estate/' },
        { label:'Marketing',            href:'/professions/marketing/' },
        { label:'All Professions',      href:'/professions/' },
      ]
    },
    { label:'Make Money',  href:'/make-money/',   cat:'money',
      sub:[
        { label:'AI Side Hustles',      href:'/make-money/side-hustles/' },
        { label:'Freelancing with AI',  href:'/make-money/freelancing/' },
        { label:'Sell AI Products',     href:'/make-money/sell/' },
        { label:'AI Passive Income',    href:'/make-money/passive/' },
      ]
    },
    { label:'Explained',   href:'/explained/',    cat:'explained',
      sub:[
        { label:'AI Glossary',          href:'/explained/glossary/' },
        { label:'How LLMs Work',        href:'/explained/llms/' },
        { label:'AI vs AI',             href:'/explained/comparisons/' },
        { label:'AI Agents',            href:'/explained/agents/' },
      ]
    },
    { label:'Industries',  href:'/industries/',   cat:'industries',
      sub:[
        { label:'Healthcare AI',        href:'/industries/healthcare/' },
        { label:'Finance AI',           href:'/industries/finance/' },
        { label:'Legal AI',             href:'/industries/legal/' },
        { label:'Retail AI',            href:'/industries/retail/' },
        { label:'All Industries',       href:'/industries/' },
      ]
    },
    { label:'Prompts',     href:'/prompts/',      cat:'prompts' },
    { label:'Courses',     href:'/courses/',      cat:'courses' },
    { label:'Agents',      href:'/agents/',       cat:'agents' },
  ];

  const FOOTER_LINKS = {
    'AI Tools':    [
      { l:'Best AI Writing Tools',    h:'/tools/best/ai-writing-tools/' },
      { l:'Best Free AI Tools',       h:'/tools/free/' },
      { l:'ChatGPT Alternatives',     h:'/tools/compare/chatgpt-alternatives/' },
      { l:'AI Image Generators',      h:'/tools/best/ai-image-generators/' },
      { l:'AI Coding Assistants',     h:'/tools/best/ai-coding-assistants/' },
    ],
    'Learn':       [
      { l:'Prompt Engineering Guide', h:'/tutorials/prompts/' },
      { l:'How to Use ChatGPT',       h:'/tutorials/chatgpt/' },
      { l:'What Is an AI Agent?',     h:'/explained/agents/' },
      { l:'AI Glossary',              h:'/explained/glossary/' },
      { l:'AI Courses 2026',          h:'/courses/' },
    ],
    'Company':     [
      { l:'About ILLUCEO',            h:'/about/' },
      { l:'Contact',                  h:'/contact/' },
      { l:'Privacy Policy',           h:'/privacy/' },
      { l:'Terms of Service',         h:'/terms/' },
      { l:'Advertise',                h:'/contact/#advertise' },
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
          <div class="live-pill"><div class="live-dot"></div><span>LIVE</span></div>
          <div class="topbar-date">${todayStr()}</div>
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
            <div class="footer-brand-name"><span>I</span>LLUCEO</div>
            <div class="footer-brand-latin">illuceo · latin · "to begin giving light"</div>
            <p class="footer-brand-desc">The sharpest AI intelligence on the planet — curated daily, delivered in your language, free forever.</p>
            <div class="footer-nord-widget" style="margin-top:20px;">
              <p>🔒 Every site you visit is tracked. NordVPN encrypts your connection and keeps your data private.</p>
              <a href="${NORDVPN}" target="_blank" rel="noopener sponsored">Try NordVPN Risk-Free →</a>
            </div>
          </div>
          ${cols}
        </div>
        <div class="footer-copy">
          <p>© ${YEAR} ILLUCEO · AI-Powered Daily Intelligence · illuceo.space</p>
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

  /* ── FAQ ACCORDION ── */
  function initFaq(){
    document.querySelectorAll('.faq-q').forEach(q=>{
      q.addEventListener('click',()=>{
        const item = q.closest('.faq-item');
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
        if(!wasOpen) item.classList.add('open');
      });
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
      "description": "The moment AI becomes clear — daily AI intelligence in 8 languages.",
      "sameAs": []
    });
    document.head.appendChild(s);
  }

  /* ── INIT ── */
  function init(){
    injectTopbar();
    injectNav();
    injectFooter();
    injectCookieBanner();
    initLang();
    initFaq();
    injectOrgSchema();
    // Signal to page scripts that shell is ready
    document.dispatchEvent(new CustomEvent('illuceo:ready'));
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
