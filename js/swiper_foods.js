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

var swiper = new Swiper(".category-slider", {
    slidesPerView: 3,
    spaceBetween: 12,
    mousewheel: true,
    // grabCursor: true,
    centeredSlides: false,
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

var swiper = new Swiper(".trending-foods", {
    slidesPerView: 1,
    spaceBetween: 12,
    // mousewheel: true,
    // grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
});

var swiper = new Swiper(".featured-restaurant", {
    slidesPerView: 1,
    spaceBetween: 12,
    // mousewheel: true,
    // grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
});

var swiper = new Swiper(".top-rated-restaurants", {
    slidesPerView: 1,
    spaceBetween: 12,
    // mousewheel: true,
    // grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
});

var swiper = new Swiper(".great-value-money", {
    slidesPerView: 1,
    spaceBetween: 12,
    // mousewheel: true,
    // grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
});

var swiper = new Swiper(".scheduled-food", {
    slidesPerView: 1,
    spaceBetween: 12,
    mousewheel: true,
    // grabCursor: true,
    
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 14,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
    },
});

