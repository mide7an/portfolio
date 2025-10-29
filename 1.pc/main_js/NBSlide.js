// JavaScript Document
$(document).ready(function () {
    var position = 0;  //최초위치
    //var movesize=150; //이미지 하나의 너비
    movesize = 350
    //console.log(movesize);
    var timeonoff;
    var cnt = 0;
    //$('.perform_list ul').after($('.perform_list ul').clone());
    $('.perform_list ul li:eq(' + cnt + ')').animate({ top: -30 }, 'slow');
    function moveG() {


        position -= movesize;  // 150씩 감소
        $('.perform_list').animate({ left: position }, 'fast',
            function () {
                if (position <= -1750) {
                    position = 0;
                    $('.perform_list').css('left', 0);
                    cnt = 0;
                    $('.perform_list ul li').css('top', 0);
                    $('.perform_list ul li:eq(' + cnt + ')').animate({ top: -30 }, 'fast').clearQueue();;
                } else {
                    cnt++;
                    $('.perform_list ul li').css('top', 0);
                    $('.perform_list ul li:eq(' + cnt + ')').animate({ top: -30 }, 'fast').clearQueue();;
                }
            }).clearQueue();
    }

    timeonoff = setInterval(moveG, 3000);


    //슬라이드 겔러리를 한번 복제

    $('.button').click(function (e) {
        e.preventDefault();

        clearInterval(timeonoff);

        if ($(this).is('.m1')) {  //이전버튼 클릭



            position -= movesize;  // 150씩 감소
            $('.perform_list').animate({ left: position }, 'fast', function () {
                if (position <= -1750) {
                    position = 0;
                    $('.perform_list').css('left', 0);
                    cnt = 0;
                    $('.perform_list ul li').css('top', 0);
                    $('.perform_list ul li:eq(' + cnt + ')').animate({ top: -30 }, 'fast').clearQueue();;
                } else {
                    cnt++;
                    $('.perform_list ul li').css('top', 0);
                    $('.perform_list ul li:eq(' + cnt + ')').animate({ top: -30 }, 'fast').clearQueue();
                }
            }).clearQueue();


        } else if ($(this).is('.m2')) {  //다음버튼 클릭
            if (position >= 0) {
                $('.perform_list').css('left', -1750);
                position = -1750;
                cnt = 5;
                $('.perform_list ul li').css('top', 0);
                $('.perform_list ul li:eq(' + cnt + ')').animate({ top: -30 }, 'fast').clearQueue();
                //$('.perform_list ul li:eq('+ cnt +')').css('top',-30);
            }



            position += movesize; // 150씩 증가
            $('.perform_list').animate({ left: position }, 'fast',
                function () {
                    if (position >= 0) {
                        $('.perform_list').css('left', -1750);
                        position = -1750;

                        cnt = 5;
                        $('.perform_list ul li').css('top', 0);
                        $('.perform_list ul li:eq(' + cnt + ')').animate({ top: -30 }, 'fast').clearQueue();
                    } else {
                        cnt--;
                        $('.perform_list ul li').css('top', 0);
                        $('.perform_list ul li:eq(' + cnt + ')').animate({ top: -30 }, 'fast').clearQueue();
                    }
                }).clearQueue();

        }
    });
});

