// @ts-nocheck

const organizationsSwiper = new Swiper(".organizationsSlider", {
  loop: true,
  speed: 500,
  slidesPerView: 4,
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    580: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1350: {
      slidesPerView: 4,
    },
  },
});

const customersReviewSwiper = new Swiper(".customersReviewSlider", {
  loop: true,
  speed: 4000,
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 1000, 
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',   
    prevEl: '.swiper-button-prev',   
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
    1440: {
      slidesPerView: 1,
    },
  },
});


