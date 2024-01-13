var swiper = new Swiper(".foods-first-slide", {
    //   spaceBetween: 24,
      loop: true,
      centeredSlides: false,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});

var swiper = new Swiper(".categoriesSlider", {
    slidesPerView: 3,
    spaceBetween: 12,
    mousewheel: true,
    // grabCursor: true,
    centeredSlides: false,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    breakpoints: {
      640: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 6,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 8,
        spaceBetween: 24,
      },
    },
});

var swiper = new Swiper(".featuredRestaurant", {
    slidesPerView: 1,
    spaceBetween: 12,
    // mousewheel: true,
    // grabCursor: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
});