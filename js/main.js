const swiper = new Swiper(".projects__slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1024: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

  //   autoplay: {
  //     delay: 5000,
  //   },

  // Navigation arrows
  navigation: {
    nextEl: ".projects__arrow-next",
    prevEl: ".projects__arrow-prev",
  },
});
