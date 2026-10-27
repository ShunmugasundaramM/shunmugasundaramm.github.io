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
