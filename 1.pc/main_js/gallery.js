$(document).ready(function () {
  //  var cnt = $('.title').size(); 탭메뉴갯수
  $('.scitizen .img_all .img:eq(0)').show();
  $('.scitizen .title_all .title1 strong').addClass('current')
  $('.scitizen .title_all .title:eq(0) p').slideDown()
})

//  우선 다 display none

$('.scitizen .title_all .title ').click(function (e) {

  e.preventDefault();
  var ind = $(this).index('.scitizen .title_all .title');

  $('.scitizen .img_all .img').hide(); //모든 탭내용을 안보이게...

  $(".scitizen .img_all .img:eq(" + ind + ")").fadeIn('slow'); //클릭한 해당 탭내용만 보여라

  $('.scitizen .title_all .title strong').removeClass('current'); //모든 탭메뉴를 비활성화

  $('.scitizen .title_all .title:eq(' + ind + ') strong').addClass('current'); // 클릭한 해당 탭메뉴만 활성화

  $('.scitizen .title_all .title p').slideUp()

  $('.scitizen .title_all .title:eq(' + ind + ') p').slideDown()




  // this는 바로 아래 자식

})









