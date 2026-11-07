// Shared page shell: applies the saved theme before first paint and fades the
// current page out before following a link to another page on this site.
(function () {
  var root = document.documentElement;
  try {
    var theme = localStorage.getItem('pf-theme');
    if (theme) root.setAttribute('data-theme', theme);
  } catch (e) {}

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var page = function (p) { return p.replace(/index\.html$/, '').replace(/Portfolio\.dc\.html$/, ''); };

  // Coming back with the Back button can restore a faded-out page from cache.
  window.addEventListener('pageshow', function () { root.classList.remove('pf-leaving'); });

  document.addEventListener('click', function (e) {
    if (reduce || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download')) return;
    var url;
    try { url = new URL(a.href, location.href); } catch (err) { return; }
    if (url.origin !== location.origin) return;
    if (page(url.pathname) === page(location.pathname)) return; // same page: let in-page links scroll
    if (/\.(pdf|png|jpe?g|webp|zip)$/i.test(url.pathname)) return;
    e.preventDefault();
    root.classList.add('pf-leaving');
    setTimeout(function () { location.href = url.href; }, 200);
  });
})();

// Phone layout helper for case studies drawn on desktop canvases (pages marked
// data-cs-mobile). Below 900px it tags wrappers whose desktop side padding or
// offsets would squeeze the text, and grid cells that need their dividers
// dropped; case-mobile.css styles the tags. Desktop is left untouched.
(function () {
  var timer;
  function px(v) { return parseFloat(v) || 0; }
  function boxed(s) {
    var bg = s.backgroundColor;
    return (bg && bg !== 'transparent' && !/rgba\(.*,\s*0\)$/.test(bg)) || s.backgroundImage !== 'none' ||
      px(s.borderTopWidth) + px(s.borderLeftWidth) > 0 || s.boxShadow !== 'none';
  }
  function tidy() {
    if (window.innerWidth >= 900) return;
    var roots = document.querySelectorAll('[data-cs-mobile]');
    var old = document.querySelectorAll('[data-csm-first]');
    for (var k = 0; k < old.length; k++) old[k].removeAttribute('data-csm-first');
    for (var i = 0; i < roots.length; i++) {
      var els = roots[i].querySelectorAll('*');
      for (var j = 0; j < els.length; j++) {
        var el = els[j];
        if (el.closest('[data-cs-keep], svg, header, nav') || el.tagName === 'SECTION') continue;
        var s = getComputedStyle(el);
        if (s.display === 'none' || s.position === 'fixed') continue;
        var pl = px(s.paddingLeft), pr = px(s.paddingRight);
        if ((pl > 32 || pr > 32) && !el.hasAttribute('data-csm-pad')) {
          // a wrapper that reaches the screen edge keeps a phone gutter; one already inset drops its own
          var r = el.getBoundingClientRect();
          el.setAttribute('data-csm-pad', boxed(s) || r.left < 12 || r.right > window.innerWidth - 12 ? 'box' : px(s.borderLeftWidth) > 0 ? 'divl' : 'flat');
        }
        var ml = px(s.marginLeft), mr = px(s.marginRight);
        if ((ml > 32 || mr > 32) && Math.abs(ml - mr) > 2) el.setAttribute('data-csm-mx', '');
        // grid cells: drop vertical dividers on the first column, keep rows apart
        var p = el.parentElement, ps = p && getComputedStyle(p);
        if (!ps) continue;
        var isGrid = ps.display.indexOf('grid') > -1, cols = isGrid ? ps.gridTemplateColumns.split(' ').length : 0;
        // a desktop column gap turned into a row gap once the grid became one column
        if (isGrid && cols === 1 && px(ps.rowGap) > 48) p.setAttribute('data-csm-gap', '');
        // cells with a left divider: the one starting a row loses the divider, rows get breathing room
        if (px(s.borderLeftWidth) > 0 && (cols > 1 || (ps.display.indexOf('flex') > -1 && ps.flexWrap === 'wrap'))) {
          var atStart = Math.abs(el.getBoundingClientRect().left - p.getBoundingClientRect().left - px(ps.paddingLeft) - px(ps.borderLeftWidth)) < 3;
          if (atStart) el.setAttribute('data-csm-first', '');
          if (px(ps.rowGap) < 16) p.setAttribute('data-csm-rows', '');
        }
      }
    }
  }
  // Diagrams marked data-cs-keep keep their desktop layout and scale to the phone width like a picture.
  // data-cs-keep="1240" gives the design width when the element has no fixed width of its own.
  function fitKeep() {
    var keep = document.querySelectorAll('[data-cs-mobile] [data-cs-keep]');
    for (var i = 0; i < keep.length; i++) {
      var el = keep[i], w = parseFloat(el.getAttribute('data-cs-keep'));
      if (window.innerWidth >= 900) { el.style.zoom = ''; if (w) el.style.width = ''; continue; }
      if (w) el.style.width = w + 'px'; else w = parseFloat(el.style.width) || el.scrollWidth;
      var p = el.parentElement, ps = getComputedStyle(p);
      var avail = p.clientWidth - (parseFloat(ps.paddingLeft) || 0) - (parseFloat(ps.paddingRight) || 0);
      el.style.zoom = Math.min(1, avail / w).toFixed(4);
    }
  }
  function run() { tidy(); fitKeep(); }
  function soon() { clearTimeout(timer); timer = setTimeout(run, 120); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', soon); else soon();
  window.addEventListener('load', function () { soon(); setTimeout(run, 1500); });
  window.addEventListener('resize', soon);
})();
