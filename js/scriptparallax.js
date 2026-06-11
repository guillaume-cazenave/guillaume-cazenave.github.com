var isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

document.querySelectorAll('.card-wrap').forEach(function(wrap) {
  var card = wrap.querySelector('.card');
  var bg   = wrap.querySelector('.card-bg');
  var w, h;

  function getSize() {
    w = wrap.offsetWidth;
    h = wrap.offsetHeight;
  }
  getSize();
  window.addEventListener('resize', getSize);

  if (isTouchDevice) return; // safe ici — on est dans le callback forEach

  wrap.addEventListener('mousemove', function(e) {
    var rect = wrap.getBoundingClientRect();
    var x = e.clientX - rect.left - w / 2;
    var y = e.clientY - rect.top  - h / 2;
    card.style.transform = 'rotateY(' + (x/w*30) + 'deg) rotateX(' + (y/h*-30) + 'deg)';
    bg.style.transform   = 'translateX(' + (x/w*-40) + 'px) translateY(' + (y/h*-40) + 'px)';
  });

  wrap.addEventListener('mouseleave', function() {
    setTimeout(function() {
      card.style.transform = '';
      bg.style.transform   = '';
    }, 1000);
  });
});
