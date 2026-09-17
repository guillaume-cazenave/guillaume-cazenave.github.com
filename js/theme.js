/* ============================================================
   THÈME — bascule jour/nuit, mémorisé en localStorage
   Le thème est appliqué AVANT le rendu pour éviter tout flash
   ============================================================ */
(function() {
  var STORAGE_KEY = 'psiir-theme';

  // 1. Appliquer le thème sauvegardé immédiatement
  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  // 2. Injecter le bouton une fois le body prêt
  function initToggle() {
    if (document.querySelector('.theme-toggle')) return;

    var btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.setAttribute('aria-label', 'Changer de thème');
    btn.innerHTML = '<span class="icon-moon">☾</span><span class="icon-sun">☀</span>';

    btn.addEventListener('click', function() {
      var isLight = document.documentElement.getAttribute('data-theme') === 'light';
      if (isLight) {
        document.documentElement.removeAttribute('data-theme');
        try { localStorage.setItem(STORAGE_KEY, 'dark'); } catch (e) {}
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        try { localStorage.setItem(STORAGE_KEY, 'light'); } catch (e) {}
      }
      // Prévenir le canvas de particules du changement
      if (typeof window._onThemeChange === 'function') {
        window._onThemeChange(!isLight);
      }
    });

    document.body.appendChild(btn);
  }

  if (document.body) {
    initToggle();
  } else {
    document.addEventListener('DOMContentLoaded', initToggle);
  }
})();
