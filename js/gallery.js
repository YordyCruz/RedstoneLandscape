document.querySelectorAll('.before-after-container').forEach(container => {
    const afterImage = container.querySelector('.after-image');
    const slider = container.querySelector('.ba-slider');
  
    slider.addEventListener('input', (e) => {
      const value = e.target.value;
      afterImage.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
    });
  });
  