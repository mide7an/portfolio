//비주얼 스와이퍼 영역
var swiper1 = new Swiper('.swiper1', {
  autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
  slidesPerView: 1,  //단수
  spaceBetween: 0,  //단사이 여백
  loop: true,  //무한 loop
  //freeMode: true,  //터치 만큼 자유롭게 이동
  //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
  //effect: 'fade',   //페이드효과(단수가 1단이 된다)
  //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
  navigation: {    //이전/다음 버튼
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {   //페이지 네이션
    el: '.swiper-pagination',
    //dynamicBullets: true,
    clickable: true,
    //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
  },
  autoplay: {  //자동
    delay: 4000,
    disableOnInteraction: false
  },
  // scrollbar: {  //하단 스크롤바
  //   el: '.swiper-scrollbar',
  //   hide: true
  // }
});


// 이용안내

var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 7,
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});


// 전시안내
var swiper = new Swiper('.cubeswiper', {
  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

// 공연안내
var swiper = new Swiper('.poster', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  autoHeight: true,
  // spaceBetween: 20,
  loop: true,
  coverflowEffect: {
    rotate: -20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  // pagination: {
  //   el: '.swiper-pagination',
  // },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

var gdata = [
  { 'title': '오리지널 어린이 캣', 'desc': '2025-011-18 ~ 2025-12-06' },
  { 'title': '몰입형 과학연극 기묘한모험', 'desc': '2025-10-31 ~ 2025-11-16' },
  { 'title': '베베핀 우당탕탕 패밀리', 'desc': '2025-09-12 ~ 2025-010-26' },
  { 'title': '핑크퐁과 아기상어의 무지개 구출작전', 'desc': '2025-09-02 ~ 2025-10-01' },
  { 'title': '프렌쥬 신비의 손전등', 'desc': '2025-08-10 ~ 2025-09-20' },
  { 'title': '오리지널 과학마술콘서트', 'desc': '2025-07-11 ~ 2025-08-06' },
  { 'title': '그리스로마신화 신들의 왕 제우스', 'desc': '2025-06-03 ~ 2025-07-06' },
  { 'title': '원더매직의 마술콘서트', 'desc': '2025-05-13 ~ 2025-06-06' },
  { 'title': '뮤지컬 알사탕', 'desc': '2025-04-10 ~ 2025-05-15' },

];
var text = document.getElementById('text');
var output = '';

output += '<dl>';
output += '<dt>' + gdata[0].title + '</dt>';
output += '<dd>' + gdata[0].desc + '</dd>';
output += '</dl>';
text.innerHTML = output;

swiper.on('slideChangeTransitionEnd', function () {
  //console.log(swiper.realIndex);
  var sind = swiper.realIndex;  // 0~9

  output = '<dl>';
  output += '<dt>' + gdata[sind].title + '</dt>';
  output += '<dd>' + gdata[sind].desc + '</dd>';
  output += '</dt>';
  text.innerHTML = output;
});