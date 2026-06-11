(function() {
  // Créer l'overlay IMMÉDIATEMENT, opaque, avant tout rendu
  var overlay = document.createElement('div');
  overlay.style.cssText = [
    'position:fixed',
    'top:0','left:0','right:0','bottom:0',
    'background:#000',
    'z-index:99999',
    'pointer-events:none',
    'opacity:1',
    'will-change:opacity'
  ].join(';');
  // Injecter dans <head> pour être sûr qu'il existe avant <body>
  (document.head || document.documentElement).appendChild(overlay);

  // Fade in après chargement — transition seulement au moment du fade
  function fadeIn() {
    requestAnimationFrame(function() {
      overlay.style.transition = 'opacity 0.45s ease';
      overlay.style.opacity = '0';
      // Supprimer après la transition pour ne pas bloquer les clics
      setTimeout(function() {
        overlay.style.pointerEvents = 'none';
      }, 500);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fadeIn);
  } else {
    fadeIn();
  }

  // Fade out au clic sur lien interne
  document.addEventListener('click', function(e) {
    var link = e.target.closest('a');
    if (!link) return;
    var href = link.getAttribute('href');
    if (!href
      || href.startsWith('#')
      || href.startsWith('http')
      || href.startsWith('mailto')
      || href.startsWith('tel')
      || link.target === '_blank'
    ) return;
    e.preventDefault();
    overlay.style.transition = 'opacity 0.3s ease';
    overlay.style.opacity = '1';
    setTimeout(function() { window.location.href = href; }, 320);
  });
})();
