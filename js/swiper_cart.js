
var swiper = new Swiper(".people-like", {
    slidesPerView: 2,
    spaceBetween: 12,
    mousewheel: true,
    // grabCursor: true,
    
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 14,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 16,
      },
    },
});