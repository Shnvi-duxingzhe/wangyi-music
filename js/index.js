var swiper1 = new Swiper('.slide', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var swiper2 = new Swiper('.gimg', {
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var swiper3 = new Swiper('.stext', {
  direction: 'vertical',
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
