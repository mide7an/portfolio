

$(document).ready(function () {

  var smh = $('.videoBox').height();  //비주얼 이미지의 높이를 리턴한다   900px
  var on_off = false;  //false(안오버)  true(오버)


  $(window).on('scroll', function () {//스크롤의 거리가 발생하면
    var scroll = $(window).scrollTop();
    a = smh - 5
    //스크롤의 거리를 리턴하는 함수
    //console.log(scroll);

    if (scroll > a) {//스크롤이 비주얼의 높이-header높이 까지 내리면
      $('#headerArea').css('background', 'rgba(0, 0, 0, .7) ').css('border-bottom', '1px solid #ccc');
      //$('.dropdownmenu li a.depth1').css('color','rgba(5, 56, 99, 1)');
    } else {//스크롤 내리기 전 디폴트(마우스올리지않음)
      if (on_off == false) {
        $('#headerArea').css('background', 'none').css('border-bottom', 'none');
        // $('.dropdownmenu li a.depth1').css('color','#fff');
      }
    };

  });



  //오픈네비

  var onoff = false; //false(메뉴열림) true(메뉴닫힘)
  $(".menuOpen").click(function (e) {
    e.preventDefault();
    if (onoff == false) {
      $("#gnb").slideDown('slow');
      $('#headerArea').addClass('mn_open');//메뉴모양변경

      onoff = true;
    } else {
      $("#gnb").slideUp('fast');
      $('#headerArea').removeClass('mn_open');
      onoff = false;
    }
  });


  //  네비높이 맞추기(페이지 로딩시 1회)
  var screenSize = $(window).width();
  var winh = $(document).height();

  if (screenSize > 768) {
    $("#gnb").height('auto');
  } else {
    $("#gnb").height(winh);
  }

  var current = 0; // 0(해상도가 모바일), 1(소형테블릿이상)

  $(window).resize(function () {
    var screenSize = $(window).width();  //가로 해상도
    if (screenSize > 768) {  //소형테블릿 이상이면
      $("#gnb").show();
      $("#gnb").height('auto');
      current = 1; //소형테블릿이상
    }
    if (current == 1 && screenSize <= 768) {
      $("#gnb").hide();
      $("#gnb").height(winh);
      $('#headerArea').removeClass('mn_open');
      current = 0; //모바일
    }
  });



});


































$('.top_move').click(function (e) {
  e.preventDefault();

  $('html,body').stop().animate({ 'scrollTop': 0 }, 1000)
})



$(window).on('load', function () {

  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    var visual_height = $('.videoBox').height();
    if (scroll > visual_height) {
      $('.top_move').fadeIn('slow');
    } else {
      $('.top_move').fadeOut('fast');

    } 1
  })
})