document.addEventListener('DOMContentLoaded', function () {
  // Before & After slider
  const slider = document.getElementById('slider');
  const afterImage = document.querySelector('.after');

  if (slider && afterImage) {
    slider.addEventListener('input', function () {
      const value = this.value;
      afterImage.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
    });
  }

  // Slideshow
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    const slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.opacity = "0";
    }

    // Move to next slide
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    // Show current slide
    slides[slideIndex - 1].style.opacity = "1";

    // Change image every 5 seconds
    setTimeout(showSlides, 5000);
  }

  // ✅ Mobile Menu Toggle
  const toggleBtn = document.getElementById("mobileToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
    });
  }
});
