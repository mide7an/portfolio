//해당 연도로 부드럽게 이동 코드

$('.history_menu li a').click(function (e) { //각각의 연도 버튼을 클릭하면
    e.preventDefault();

    var target_value = 0; //각각의 목적지

    if ($(this).hasClass('link1')) { //첫번째 버튼 클릭 시
        target_value = 1000;
    } else if ($(this).hasClass('link2')) {
        target_value = 2150;
    } else if ($(this).hasClass('link3')) {
        target_value = 3640;
    } else if ($(this).hasClass('link4')) {
        target_value = 4600;
    }

    $("html,body").stop().animate({ "scrollTop": target_value }, 1000);
});

$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    //console.log(scroll);
    // 1000
    // 2150
    // 3640
    // 4600
});