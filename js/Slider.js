document.addEventListener('DOMContentLoaded', () => {

  function initSlider(sliderEl, prevBtn, nextBtn, onChangeKey) {
    if (!sliderEl) return null;
    const slides = sliderEl.querySelectorAll("img, .slide-item");
    if (!slides.length) return null;
    let index = 0;

    function updateSlide() {
      const w = slides[0].clientWidth || sliderEl.clientWidth;
      sliderEl.style.transform = `translateX(-${index * w}px)`;
      if (typeof window[onChangeKey] === 'function') window[onChangeKey](index);
    }

    function goTo(idx) {
      index = Math.max(0, Math.min(idx, slides.length - 1));
      updateSlide();
    }

    if (nextBtn) nextBtn.addEventListener("click", () => { index = (index + 1) % slides.length; updateSlide(); });
    if (prevBtn) prevBtn.addEventListener("click", () => { index = (index - 1 + slides.length) % slides.length; updateSlide(); });
    window.addEventListener("resize", updateSlide);

    let tx = 0;
    sliderEl.addEventListener("touchstart", e => { tx = e.touches[0].clientX; }, { passive: true });
    sliderEl.addEventListener("touchend", e => {
      const d = tx - e.changedTouches[0].clientX;
      if (Math.abs(d) < 30) return;
      index = d > 0 ? (index + 1) % slides.length : (index - 1 + slides.length) % slides.length;
      updateSlide();
    });

    return goTo;
  }

  // Slider principal
  const mainSlider = document.getElementById("slider");
  const mainPrev = document.querySelector('.arrow.left[data-slider="main"]');
  const mainNext = document.querySelector('.arrow.right[data-slider="main"]');
  const goToMain = initSlider(mainSlider, mainPrev, mainNext, '_onSlideChange');
  if (goToMain) window._sliderGoTo = goToMain;

  // Second slider (collection 2 par exemple)
  const secondSlider = document.getElementById("slider-second");
  const secondPrev = document.querySelector('.arrow.left[data-slider="second"]');
  const secondNext = document.querySelector('.arrow.right[data-slider="second"]');
  const goToSecond = initSlider(secondSlider, secondPrev, secondNext, '_onSlideChangeSecond');
  if (goToSecond) window._sliderGoToSecond = goToSecond;

});
