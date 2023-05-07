/* eslint-disable no-unused-vars */
// import Swiper JS
import Swiper from '../../js/vendor/swiper';


// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.coach__slider', {

  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  maxBackfaceHiddenSlides: 0,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 40,
    },
  },
});

const review = new Swiper('.review__slider', {

  // Optional parameters
  direction: 'horizontal',
  loop: false,
  // Navigation arrows
  navigation: {
    nextEl: '.review__next',
    prevEl: '.review__previous',
  },
  maxBackfaceHiddenSlides: 0,
  breakpoints: {
    slidesPerView: 1,
  },
});
