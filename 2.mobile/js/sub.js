//상설전시관
var swiper = new Swiper('.tab-1-swiper', {
  effect: 'fade',
  // spaceBetween: 10,

  autoplay: {
    delay: 3000, // 3초마다 슬라이드 변경 (원하는 시간으로 조정 가능)
    disableOnInteraction: false
  }, // 사용자가 상호작용 후에도 자동 재생 계속

  pagination: {
    el: '.swiper-pagination',
  },
});


var swiper = new Swiper('.educate', {
  effect: 'slide',
  loop: 'true',

  autoplay: {
    delay: 3000, // 3초마다 슬라이드 변경 (원하는 시간으로 조정 가능)
    disableOnInteraction: false
  }, // 사용자가 상호작용 후에도 자동 재생 계속

  pagination: {
    el: '.swiper-pagination',
  },
});








