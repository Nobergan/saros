import Swiper from 'swiper/bundle';
// import 'swiper/scss/bundle';

new Swiper('.swiper', {
  speed: 2000,
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },

  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
});