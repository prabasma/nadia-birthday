document.addEventListener('DOMContentLoaded', function() {

    // Inisialisasi Slider untuk HEADER
    const headerSwiper = new Swiper('.header-swiper', {
      loop: true,
      navigation: {
        nextEl: '.header-swiper .swiper-button-next',
        prevEl: '.header-swiper .swiper-button-prev',
      },
    });

    // Inisialisasi Slider untuk section "Perfect for me" (JANARI)
    const janariSwiper = new Swiper('.janari-swiper', {
      loop: true,
      pagination: {
        el: '.janari-swiper .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.janari-swiper .swiper-button-next',
        prevEl: '.janari-swiper .swiper-button-prev',
      },
    });


    // Animasi fade-in saat scroll
    const sections = document.querySelectorAll('section, .hero');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

});