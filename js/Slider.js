document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById("slider");
  if (!slider) return;
  // Sélectionner images ET slides vidéo
  const slides = slider.querySelectorAll("img, .slide-item");
  if (!slides.length) return;
  const prev = document.querySelector(".arrow.left");
  const next = document.querySelector(".arrow.right");
  let index = 0;

  function updateSlide() {
    const w = slides[0].clientWidth || slider.clientWidth;
    slider.style.transform = `translateX(-${index * w}px)`;
    if (typeof window._onSlideChange === 'function') window._onSlideChange(index);
  }

  window._sliderGoTo = idx => { index = Math.max(0, Math.min(idx, slides.length-1)); updateSlide(); };
  if (next) next.addEventListener("click", () => { index = (index+1) % slides.length; updateSlide(); });
  if (prev) prev.addEventListener("click", () => { index = (index-1+slides.length) % slides.length; updateSlide(); });
  window.addEventListener("resize", updateSlide);

  let tx = 0;
  slider.addEventListener("touchstart", e => { tx = e.touches[0].clientX; }, { passive: true });
  slider.addEventListener("touchend", e => {
    const d = tx - e.changedTouches[0].clientX;
    if (Math.abs(d) < 30) return;
    index = d > 0 ? (index+1)%slides.length : (index-1+slides.length)%slides.length;
    updateSlide();
  });
});
