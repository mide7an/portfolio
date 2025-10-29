// 전체 공통 js
// 네비 열고 닫기
$(document).ready(function () {
  var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)

  $(".menu_ham").click(function () { //메뉴버튼 클릭시

    var documentHeight = $(document).height(); //전체 페이지의 높이
    $("#gnb").css('height', documentHeight); //gnb의 높이를 전체 페이지 높이와 동일...

    if (op == false) {
      $("#gnb").animate({ left: 0 }, 'fast');
      // $('#headerArea').addClass('mn_open');
      $('.menu_ham').addClass({ opacity: 0 });
      op = true;
    } else {
      $("#gnb").animate({ left: '-100%' }, 'fast');
      // $('#headerArea').removeClass('mn_open');
      op = false;
    }

  });


  $(".close_gnb").click(function () { //메뉴버튼 클릭시

    if (op == false) {
      $("#gnb").animate({ left: 0 }, 'fast');
      // $('#headerArea').addClass('mn_open');
      $('.menu_ham').css('display', 'none');
      op = true;
    } else {
      $("#gnb").animate({ left: '-100%' }, 'fast');
      $('.menu_ham').css('display', 'block');
      op = false;
    }

  });



  //2depth 메뉴 교대로 열기 처리 
  var onoff = [false, false, false, false];
  //각각의 1depth메뉴의 열림(true)/닫힘(false) 변수
  var arrcount = onoff.length; //4개

  //console.log(arrcount);

  $('#gnb .depth1 h3 a').click(function () {
    var ind = $(this).parents('.depth1').index(); //0~5
    //var ind=$(this).index('#gnb .depth1 h3 a');

    //console.log(ind);

    if (onoff[ind] == false) {  //클릭한 1depth메뉴가 닫혀있냐??
      //$('#gnb .depth1 ul').hide();
      $(this).parents('.depth1').find('ul').slideDown('slow');
      //해당 서브메뉴는 열어라
      $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast');
      //나머지 모든 서브메뉴를 닫아라
      for (var i = 0; i < arrcount; i++) onoff[i] = false; //모든 상태를 false
      onoff[ind] = true; //해당메뉴 상태만 true

      $('.depth1 span').text('expand_more'); //모두 +   
      $(this).find('span').text('expand_less');   // 해당메뉴만 -

    } else {  //클릭한 1depth메뉴가 열려있냐??
      $(this).parents('.depth1').find('ul').slideUp('fast');
      //자신의 메뉴만 닫아라
      onoff[ind] = false; //해당메뉴 false   

      $(this).find('span').text('expand_more');     // 해당메뉴만 +
    }
  });

});





//top메뉴 처리 및 헤더 배경처리(스크롤처리)
var smh = $('.visual').height();

$(window).on('scroll', function () {//스크롤의 거리가 발생하면
  var scroll = $(window).scrollTop();

  //top버튼 나타나고 사라지기
  if (scroll >= smh) {
    $('.top_move').fadeIn('slow');
  } else {
    $('.top_move').fadeOut('fast');
  }

  //헤더 배경처리
  if (scroll > smh - 50) {//스크롤이 비주얼의 높이-header높이 까지 내리면
    $('#headerArea').css('background', '#fff').css('border-bottom', '1px solid #ccc');

  } else {//스크롤 내리기 전 디폴트(마우스올리지않음)
    $('#headerArea').css('background', 'rgba(255,255,255,.7)').css('border-bottom', 'none');

  };
});

$('.top_move').click(function (e) {
  e.preventDefault();
  $('html,body').stop().animate({ 'scrollTop': 0 }, 1000); //상단으로 부드럽게 스크롤을 이동
});


//패밀리사이트 이동 코드
$('.family .arrow').toggle(function (e) { //홀수번째 -> 리스트가 보인다.
  e.preventDefault();
  $('.family .aList').fadeIn('fast');
  $(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>');
}, function (e) { //짝수번째 -> 리스트가 안보인다.
  e.preventDefault();
  $('.family .aList').fadeOut('fast');
  $(this).children('span').html('<i class="fa-solid fa-chevron-up"></i>');
});