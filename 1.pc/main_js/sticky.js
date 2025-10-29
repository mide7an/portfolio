$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();

    //var aaa = $('.box').height()-$('.box .box5').height();
    if (scroll >= $('.watch').offset().top) {  //박스가 상단에 정확하게 위치하면
        var bbb = scroll - $('.watch').offset().top;

        console.log(bbb);  // 0~1000(부모박스-스티키박스)

        if (bbb <= 750) { /* 최종박스 긴 높이와 이 높이를 조절해서 스크롤 범위 찾기 */
            $('.watch .watch_box .move_div').css('top', 50 - bbb);  // 500~100(0~400)   50은 .move_div의top
        }
    }
});