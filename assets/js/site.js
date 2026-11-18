/* BSPMR main site prototype — shared header, footer and helpers.
   Each page sets <body data-page="..."> and includes
   <div id="site-header"></div> ... <div id="site-footer"></div>. */
(function () {
  'use strict';

  var CON_URL = 'https://mkrashed.github.io/bspmr-prototype/';
  var CONTACT = {
    address: 'Room 130, Block C, Bangladesh Medical University, Shahbag, Dhaka-1000',
    phone: '01958-060780', phoneHref: 'tel:+8801958060780',
    helpline: '01714-109492', helplineHref: 'tel:+8801714109492',
    email: 'bspmrcon@gmail.com',
    whatsapp: 'https://wa.me/8801958060780',
    facebook: 'https://www.facebook.com/groups/1585757698700992/'
  };

  /* ---------- icons (stroke, 24x24) ---------- */
  var P = {
    cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
    pin: '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    ext: '<path d="M7 17 17 7M8 7h9v9"/>',
    down: '<path d="m6 9 6 6 6-6"/>',
    up: '<path d="m6 15 6-6 6 6"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    award: '<circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 8 5-3 5 3-1.5-8"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5M8 7h7"/>',
    journal: '<path d="M6 3h11a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6z"/><path d="M6 3v18M10 8h5M10 12h5"/>',
    flask: '<path d="M9 3h6M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3"/><path d="M7 15h10"/>',
    bell: '<path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 21h4"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
    image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5-9 9"/>',
    steth: '<path d="M6 3v6a5 5 0 0 0 10 0V3"/><path d="M11 14v2a5 5 0 0 0 10 0v-2"/><circle cx="21" cy="12" r="2"/>',
    pulse: '<path d="M3 12h4l3-7 4 14 3-7h4"/>',
    shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    mega: '<path d="M3 11v2a1 1 0 0 0 1 1h3l6 5V5L7 10H4a1 1 0 0 0-1 1z"/><path d="M17 8a5 5 0 0 1 0 8"/>',
    doc: '<path d="M14 3H6v18h12V7z"/><path d="M14 3v4h4M9 13h6M9 17h6"/>',
    download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    gavel: '<path d="m14 5 5 5M11 8l5 5M4 20l7-7M12.5 3.5l8 8-3 3-8-8z"/>',
    heart: '<path d="M12 20s-7-4.4-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.6-9 9-9 9z"/>',
    login: '<path d="M10 17l5-5-5-5M15 12H3M14 4h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-5"/>',
    play: '<circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4z"/>',
    fb: '<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v7h4v-7h3l1-4h-4V8z"/>',
    yt: '<rect x="2.5" y="6" width="19" height="12" rx="4"/><path d="m10 9.5 5 2.5-5 2.5z"/>',
    wa: '<path d="M4 20l1.3-4A8 8 0 1 1 8 19z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1a4 4 0 0 1-2-2l1-1-1-2z"/>',
    building: '<path d="M4 21V5l8-2v18M12 7h8v14M8 8v.01M8 12v.01M8 16v.01M16 11v.01M16 15v.01M2 21h20"/>',
    tag: '<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8" r="1.3"/>'
  };
  function icon(name, extra) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"' + (extra || '') + '>' + (P[name] || '') + '</svg>';
  }

  /* ---------- helpers ---------- */
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var MONTHS_L = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  function parseD(s) { var p = String(s).slice(0, 10).split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function fmtDate(s, long) { if (!s) return ''; var d = parseD(s); return d.getDate() + ' ' + (long ? MONTHS_L : MONTHS)[d.getMonth()] + ' ' + d.getFullYear(); }
  function initials(name) {
    var n = String(name || '').replace(/\b(Late|Prof(essor)?|Dr|Md|Mohammad|Muhammad|Mst|Brig|Gen|Col|Lt|Maj)\b\.?/gi, ' ').replace(/[^A-Za-z\s]/g, ' ').trim().split(/\s+/);
    return ((n[0] || '?')[0] + (n.length > 1 ? n[n.length - 1][0] : '')).toUpperCase();
  }
  function avatar(name, photo, cls) {
    return '<span class="av ' + (cls || '') + '">' + (photo
      ? '<img src="' + esc(photo) + '" alt="" loading="lazy" onerror="this.parentNode.textContent=\'' + initials(name) + '\'">'
      : initials(name)) + '</span>';
  }
  function today() { var d = new Date(); return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
  function qs(name) { return new URLSearchParams(location.search).get(name) || ''; }
  /* Available seats are snapshotted from bspmr.org/events into data.js. */
  function seatsLeft(ev) { if (!ev.cap) return null; return ev.avail != null ? ev.avail : ev.cap; }

  function toast(msg) {
    var t = document.querySelector('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('show');
    clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove('show'); }, 3200);
  }

  /* ---------- navigation model ---------- */
  var NAV = [
    { id: 'home', label: 'Home', href: 'index.html' },
    { label: 'About', ids: ['about', 'committee', 'gallery'], items: [
      { id: 'about', label: 'About BSPMR', desc: 'History, mission and what we do', href: 'about.html', ic: 'info' },
      { id: 'committee', label: 'Executive Committee', desc: 'Leadership & EC Election 2026', href: 'committee.html', ic: 'gavel' },
      { id: 'gallery', label: 'Gallery', desc: 'Moments from our programmes', href: 'gallery.html', ic: 'image' }
    ] },
    { label: 'Members', ids: ['membership', 'members', 'find'], items: [
      { id: 'membership', label: 'Become a Member', desc: 'Benefits, categories & how to apply', href: 'membership.html', ic: 'award' },
      { id: 'members', label: 'Member Directory', desc: 'Life & general members', href: 'members.html', ic: 'users' },
      { id: 'find', label: 'Find a Physiatrist', desc: 'Search PM&R specialists near you', href: 'find-physiatrist.html', ic: 'steth' }
    ] },
    { label: 'Academic', ids: ['research', 'journal', 'publications', 'events'], items: [
      { id: 'events', label: 'Events & Workshops', desc: 'CMEs, hands-on workshops, conferences', href: 'events.html', ic: 'cal' },
      { id: 'research', label: 'Published Research', desc: 'Peer-reviewed work by our members', href: 'research.html', ic: 'flask' },
      { id: 'journal', label: 'BJPMR Journal', desc: 'Official open-access journal', href: 'journal.html', ic: 'journal' },
      { id: 'publications', label: 'Publications', desc: 'Souvenirs & special issues', href: 'publications.html', ic: 'book' }
    ] },
    { id: 'notices', label: 'Notices', href: 'notices.html' },
    { id: 'contact', label: 'Contact', href: 'contact.html' }
  ];

  function renderHeader(page) {
    var desk = NAV.map(function (n) {
      if (!n.items) return '<div class="nav-item"><a class="nav-link' + (n.id === page ? ' active' : '') + '" href="' + n.href + '"' + (n.id === page ? ' aria-current="page"' : '') + '>' + n.label + '</a></div>';
      var act = n.ids.indexOf(page) > -1;
      return '<div class="nav-item"><button class="nav-link' + (act ? ' active' : '') + '" type="button" aria-expanded="false" aria-haspopup="true">' + n.label + icon('down') + '</button><div class="dropdown">' +
        n.items.map(function (i) {
          return '<a href="' + i.href + '"' + (i.id === page ? ' aria-current="page"' : '') + '><span class="dd-ic">' + icon(i.ic) + '</span><span><span class="dd-t">' + i.label + '</span><span class="dd-d">' + i.desc + '</span></span></a>';
        }).join('') + '</div></div>';
    }).join('');

    var mob = '<div class="mnav-group"><a href="index.html"' + (page === 'home' ? ' class="active"' : '') + '>Home</a></div>' + NAV.filter(function (n) { return n.items; }).map(function (n) {
      return '<div class="mnav-group"><div class="mnav-h">' + n.label + '</div>' + n.items.map(function (i) { return '<a href="' + i.href + '"' + (i.id === page ? ' class="active"' : '') + '>' + i.label + '</a>'; }).join('') + '</div>';
    }).join('') + '<div class="mnav-group"><a href="notices.html"' + (page === 'notices' ? ' class="active"' : '') + '>Notices</a><a href="contact.html"' + (page === 'contact' ? ' class="active"' : '') + '>Contact</a><a href="' + CON_URL + '" target="_blank" rel="noopener" style="color:var(--red)">BSPMRCON 2026 website ↗</a></div>' +
      '<div class="mnav-cta"><a class="btn btn-ghost" href="login.html">' + icon('login') + 'Member Login</a><a class="btn btn-red" href="membership.html">Join BSPMR</a></div>';

    return '<a class="skip" href="#main">Skip to content</a>' +
      '<div class="topbar"><div class="wrap"><div class="topbar-info">' +
      '<span class="hide-sm">' + icon('pin') + 'BMU, Shahbag, Dhaka-1000</span>' +
      '<a href="' + CONTACT.phoneHref + '">' + icon('phone') + CONTACT.phone + '</a>' +
      '<a class="hide-sm" href="mailto:' + CONTACT.email + '">' + icon('mail') + CONTACT.email + '</a></div>' +
      '<a class="topbar-con" href="' + CON_URL + '" target="_blank" rel="noopener"><span class="ping-dot"></span>BSPMRCON 2026 · 5–6 Dec' + icon('ext') + '</a></div></div>' +
      '<header class="site-header" id="hdr"><div class="wrap hdr">' +
      '<a class="brand" href="index.html" aria-label="BSPMR home"><img src="assets/img/bspmr-logo.png" alt="BSPMR logo" width="52" height="52"><span><span class="brand-name">BSPMR</span><span class="brand-sub">Bangladesh Society of Physical Medicine &amp; Rehabilitation</span></span></a>' +
      '<nav class="nav" aria-label="Main">' + desk + '</nav>' +
      '<div class="hdr-cta"><a class="btn btn-ghost btn-sm" href="login.html">' + icon('login') + 'Login</a><a class="btn btn-red btn-sm shine" href="membership.html">Join BSPMR</a>' +
      '<button class="menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mnav">' + icon('menu') + '</button></div></div>' +
      '<nav class="mnav" id="mnav" aria-label="Mobile"><div class="wrap">' + mob + '</div></nav></header>';
  }

  function renderFooter() {
    return '<footer class="site-footer"><div class="wrap ft">' +
      '<div><div class="ft-brand"><img src="assets/img/bspmr-logo.png" alt="" width="58" height="58"><span><b>BSPMR</b><small>Est. 1995 · Dhaka, Bangladesh</small></span></div>' +
      '<p>The national professional body of Physical Medicine &amp; Rehabilitation physicians in Bangladesh — advancing evidence-based, patient-centred rehabilitation care.</p>' +
      '<div class="socials"><a href="' + CONTACT.facebook + '" target="_blank" rel="noopener" aria-label="BSPMR on Facebook">' + icon('fb') + '</a><a href="https://www.youtube.com" target="_blank" rel="noopener" aria-label="BSPMR on YouTube">' + icon('yt') + '</a><a href="' + CONTACT.whatsapp + '" target="_blank" rel="noopener" aria-label="WhatsApp BSPMR">' + icon('wa') + '</a></div></div>' +
      '<div><h4>Society</h4><ul><li><a href="about.html">About BSPMR</a></li><li><a href="committee.html">Executive Committee</a></li><li><a href="membership.html">Membership</a></li><li><a href="members.html">Member Directory</a></li><li><a href="gallery.html">Gallery</a></li></ul></div>' +
      '<div><h4>Academic</h4><ul><li><a href="events.html">Events &amp; Workshops</a></li><li><a href="research.html">Published Research</a></li><li><a href="journal.html">BJPMR Journal</a></li><li><a href="publications.html">Publications</a></li><li><a href="notices.html">Notices</a></li><li><a href="' + CON_URL + '" target="_blank" rel="noopener">BSPMRCON 2026 ↗</a></li></ul></div>' +
      '<div><h4>Get in touch</h4>' +
      '<div class="ft-c">' + icon('pin') + '<span>' + CONTACT.address + '</span></div>' +
      '<div class="ft-c">' + icon('phone') + '<span><a href="' + CONTACT.phoneHref + '">' + CONTACT.phone + '</a> · Helpline <a href="' + CONTACT.helplineHref + '">' + CONTACT.helpline + '</a></span></div>' +
      '<div class="ft-c">' + icon('mail') + '<a href="mailto:' + CONTACT.email + '">' + CONTACT.email + '</a></div>' +
      '<div class="pay">Secure payments via <span>SSLCommerz</span><span>bKash</span><span>Nagad</span><span>Cards</span></div></div>' +
      '</div><div class="fb"><div class="wrap"><span>© ' + new Date().getFullYear() + ' Bangladesh Society of Physical Medicine &amp; Rehabilitation. All rights reserved.</span>' +
      '<span class="fb-links"><a href="contact.html#policies">Privacy Policy</a><a href="contact.html#policies">Terms &amp; Conditions</a><a href="contact.html#policies">Refund Policy</a></span></div></div></footer>' +
      '<button class="totop" type="button" aria-label="Back to top">' + icon('up') + '</button>';
  }

  /* ---------- lightbox ---------- */
  function lightbox(items, start) {
    var lb = document.querySelector('.lightbox');
    if (!lb) {
      lb = document.createElement('div'); lb.className = 'lightbox'; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true'); lb.setAttribute('aria-label', 'Photo viewer');
      lb.innerHTML = '<button class="lb-btn lb-close" aria-label="Close">' + icon('x') + '</button><button class="lb-btn lb-prev" aria-label="Previous">' + icon('arrow', ' style="transform:rotate(180deg)"') + '</button><figure><img alt=""><figcaption></figcaption></figure><button class="lb-btn lb-next" aria-label="Next">' + icon('arrow') + '</button>';
      document.body.appendChild(lb);
    }
    var i = start;
    function show() { lb.querySelector('img').src = items[i].src; lb.querySelector('img').alt = items[i].cap; lb.querySelector('figcaption').textContent = items[i].cap; }
    function close() { lb.classList.remove('open'); document.removeEventListener('keydown', key); document.body.style.overflow = ''; }
    function key(e) { if (e.key === 'Escape') close(); if (e.key === 'ArrowRight') { i = (i + 1) % items.length; show(); } if (e.key === 'ArrowLeft') { i = (i - 1 + items.length) % items.length; show(); } }
    lb.querySelector('.lb-close').onclick = close;
    lb.querySelector('.lb-next').onclick = function () { i = (i + 1) % items.length; show(); };
    lb.querySelector('.lb-prev').onclick = function () { i = (i - 1 + items.length) % items.length; show(); };
    lb.onclick = function (e) { if (e.target === lb) close(); };
    document.addEventListener('keydown', key);
    show(); lb.classList.add('open'); document.body.style.overflow = 'hidden'; lb.querySelector('.lb-close').focus();
  }

  /* ---------- modal ---------- */
  function modal(html) {
    var m = document.querySelector('.modal');
    if (!m) { m = document.createElement('div'); m.className = 'modal'; m.setAttribute('role', 'dialog'); m.setAttribute('aria-modal', 'true'); document.body.appendChild(m); }
    m.innerHTML = '<div class="modal-box"><button class="modal-x" aria-label="Close">' + icon('x') + '</button>' + html + '</div>';
    var prev = document.activeElement;
    function close() { m.classList.remove('open'); document.body.style.overflow = ''; document.removeEventListener('keydown', key); if (prev) prev.focus(); }
    function key(e) { if (e.key === 'Escape') close(); }
    m.querySelector('.modal-x').onclick = close;
    m.onclick = function (e) { if (e.target === m) close(); };
    document.addEventListener('keydown', key);
    m.classList.add('open'); document.body.style.overflow = 'hidden'; m.querySelector('.modal-x').focus();
    return { el: m, close: close };
  }

  var GALLERY = [
    { src: 'assets/img/gallery/g1.jpg', cap: 'BSPMRCON — national scientific conference' },
    { src: 'assets/img/gallery/g8.jpg', cap: 'Hands-on workshop: Cancer & Lymphedema Rehabilitation' },
    { src: 'assets/img/gallery/g7.jpg', cap: 'Annual General Meeting & scientific seminar 2026' },
    { src: 'assets/img/gallery/g4.jpg', cap: 'Doctors’ Run — promoting physical activity' },
    { src: 'assets/img/gallery/g2.jpg', cap: 'Press conference on rehabilitation services' },
    { src: 'assets/img/gallery/g5.jpg', cap: 'International collaboration & partners meeting' },
    { src: 'assets/img/gallery/g3.jpg', cap: 'Round-table policy discussion' },
    { src: 'assets/img/gallery/g6.jpg', cap: 'BSPMRCON 2026 — call for registration' }
  ];

  /* ---------- init ---------- */
  function init() {
    var page = document.body.getAttribute('data-page') || '';
    var h = document.getElementById('site-header'); if (h) h.outerHTML = renderHeader(page);
    var f = document.getElementById('site-footer'); if (f) f.outerHTML = renderFooter();

    var hdr = document.getElementById('hdr');
    var btn = document.querySelector('.menu-btn'), mnav = document.getElementById('mnav');
    if (btn) btn.addEventListener('click', function () {
      var open = mnav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open); btn.innerHTML = icon(open ? 'x' : 'menu');
    });
    document.querySelectorAll('.nav-item > button.nav-link').forEach(function (b) {
      b.addEventListener('click', function () {
        var it = b.parentNode, open = !it.classList.contains('open');
        document.querySelectorAll('.nav-item.open').forEach(function (o) { o.classList.remove('open'); o.firstChild.setAttribute('aria-expanded', 'false'); });
        it.classList.toggle('open', open); b.setAttribute('aria-expanded', open);
      });
    });
    document.addEventListener('click', function (e) { if (!e.target.closest('.nav-item')) document.querySelectorAll('.nav-item.open').forEach(function (o) { o.classList.remove('open'); }); });

    var top = document.querySelector('.totop');
    if (top) top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    function onScroll() { var y = window.scrollY; if (hdr) hdr.classList.toggle('scrolled', y > 40); if (top) top.classList.toggle('show', y > 600); }
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

    BSPMR.reveal();
  }

  function reveal(root) {
    var els = (root || document).querySelectorAll('.rv:not(.on)');
    if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('on'); }); return; }
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('on'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- shared card renderers ---------- */
  function isConf(ev) { return /BSPMRCON/i.test(ev.name); }
  function evPast(ev) { var end = parseD(ev.date); end.setDate(end.getDate() + (ev.days || 1) - 1); return end < today(); }
  function eventCard(ev, i) {
    var d = parseD(ev.date), conf = isConf(ev), left = seatsLeft(ev), past = evPast(ev);
    var desc = ev.desc.split('\n')[0];
    var seats = ev.cap ? '<div class="seats"><div class="seats-bar"><i style="width:' + Math.round((ev.cap - left) / ev.cap * 100) + '%"></i></div><div class="seats-t"><span>' + left + ' seats left</span><span>of ' + ev.cap + '</span></div></div>' : '';
    var cta = past ? '<span class="tag">Completed</span>'
      : conf ? '<a class="btn btn-red btn-sm" href="' + CON_URL + '" target="_blank" rel="noopener">Conference site' + icon('ext') + '</a>'
      : '<a class="btn btn-red btn-sm" href="login.html?next=event-' + ev.id + '">Register</a>';
    return '<article class="ev lift rv' + (conf ? ' ev-feat' : '') + '" style="transition-delay:' + ((i || 0) * 60) + 'ms">' +
      '<div class="ev-top"><div class="ev-date"><b>' + d.getDate() + '</b><span>' + MONTHS[d.getMonth()].toUpperCase() + '</span><small>' + DAYS[d.getDay()].slice(0, 3) + '</small></div>' +
      '<div><div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px">' + (conf ? '<span class="tag tag-red">National Conference</span>' : '<span class="tag">Workshop</span>') + '<span class="tag tag-amber">' + (ev.days > 1 ? ev.days + ' days' : '1 day') + '</span></div><h3>' + esc(ev.name) + '</h3></div></div>' +
      '<div class="ev-body">' + esc(desc.length > 150 ? desc.slice(0, 150).replace(/\s+\S*$/, '') + '…' : desc) +
      '<div class="ev-loc">' + icon('pin') + '<span>' + esc(ev.loc || 'Shaheed Dr. Milon Hall & Extension, BMU, Shahbag') + '</span></div>' + seats + '</div>' +
      '<div class="ev-foot"><button class="link-arrow" style="background:none;border:0;cursor:pointer;padding:0;font-size:14.5px' + (conf ? ';color:#FFB4AC' : '') + '" data-ev="' + ev.id + '">Details' + icon('arrow') + '</button>' + cta + '</div></article>';
  }
  function eventModal(ev) {
    var d = parseD(ev.date), conf = isConf(ev), left = seatsLeft(ev), past = evPast(ev);
    modal('<span class="tag ' + (conf ? 'tag-red' : '') + '">' + (conf ? 'National Conference' : 'Workshop') + '</span>' +
      '<h2 style="font-size:26px;margin:14px 40px 14px 0">' + esc(ev.name) + '</h2>' +
      '<div class="rl-meta" style="margin-bottom:18px"><span>' + icon('cal') + DAYS[d.getDay()] + ', ' + fmtDate(ev.date, true) + '</span><span>' + icon('pin') + esc(ev.loc || 'Shaheed Dr. Milon Hall & Extension, BMU') + '</span>' + (ev.cap ? '<span>' + icon('users') + left + ' of ' + ev.cap + ' seats left</span>' : '') + '</div>' +
      '<p class="muted" style="white-space:pre-line">' + esc(ev.desc) + '</p>' +
      '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:24px">' + (past ? '<span class="tag">This event has ended</span>' : conf
        ? '<a class="btn btn-red" href="' + CON_URL + '" target="_blank" rel="noopener">Open conference website' + icon('ext') + '</a>'
        : '<a class="btn btn-red" href="login.html?next=event-' + ev.id + '">Register with member login' + icon('arrow') + '</a>') +
      '<a class="btn btn-ghost" href="contact.html">Ask a question</a></div>');
  }
  function bindEventDetails(root) {
    (root || document).addEventListener('click', function (e) {
      var b = e.target.closest('[data-ev]'); if (!b) return;
      var ev = (window.BSPMR_DATA.events || []).filter(function (x) { return String(x.id) === b.getAttribute('data-ev'); })[0];
      if (ev) eventModal(ev);
    });
  }
  function noticeItem(n) {
    var d = parseD(n.date);
    var href = n.file || 'notices.html#n' + n.id;
    return '<a class="ni" href="' + esc(href) + '"' + (n.file ? ' target="_blank" rel="noopener"' : '') + '><span class="ni-d"><b>' + d.getDate() + '</b><small>' + MONTHS[d.getMonth()] + '</small></span><span style="min-width:0"><span class="ni-t">' + esc(n.title) + '</span><span class="ni-m"><span class="tag ' + (n.type === 'Official Notice' ? 'tag-red' : n.type === 'Training Programs' ? 'tag-green' : '') + '">' + esc(n.type) + '</span>' + d.getFullYear() + (n.file ? ' · PDF' : '') + '</span></span></a>';
  }
  function researchCard(r, i) {
    return '<article class="rc lift rv" style="transition-delay:' + ((i || 0) * 60) + 'ms"><div class="rc-top"><span class="tag tag-red">' + esc(r.cat) + '</span>' + (r.where ? '<span class="tag">' + esc(r.where) + '</span>' : '') + '</div>' +
      '<h3>' + esc(r.title) + '</h3><p>' + esc(r.abs.replace(/^(Background|Abstract)\s*:\s*/i, '')) + '</p>' +
      '<div class="rc-au">' + avatar(r.author) + '<span style="flex:1;min-width:0"><b>' + esc(r.author) + '</b><small>' + esc(r.role) + (r.date ? ' · ' + fmtDate(r.date) : '') + '</small></span>' +
      '<a class="link-arrow" href="research.html#r' + r.id + '" aria-label="Read more about ' + esc(r.title) + '">' + icon('arrow') + '</a></div></article>';
  }
  function memberCard(m, i) {
    return '<article class="mc lift rv" style="transition-delay:' + ((i || 0) % 8 * 40) + 'ms">' + (m.lm ? '<span class="lm">LM-' + m.lm + '</span>' : '<span class="lm">General</span>') +
      avatar(m.n, m.p) + '<h3>' + esc(m.n) + '</h3>' + (m.d ? '<div class="d">' + esc(m.d) + '</div>' : '') + (m.i ? '<div class="i">' + esc(m.i) + '</div>' : '') +
      (m.v ? '<span class="loc">' + icon('pin') + esc(m.v) + ' Division</span>' : '') + '</article>';
  }

  window.BSPMR = {
    icon: icon, esc: esc, fmtDate: fmtDate, parseD: parseD, initials: initials, avatar: avatar, today: today, qs: qs,
    seatsLeft: seatsLeft, toast: toast, lightbox: lightbox, modal: modal, reveal: reveal,
    isConf: isConf, evPast: evPast, eventCard: eventCard, eventModal: eventModal, bindEventDetails: bindEventDetails,
    noticeItem: noticeItem, researchCard: researchCard, memberCard: memberCard,
    MONTHS: MONTHS, DAYS: DAYS, CON_URL: CON_URL, CONTACT: CONTACT, GALLERY: GALLERY,
    data: window.BSPMR_DATA || {}
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
