const text = "행운을 디자인하고, 행복을 퍼블리싱하는 민보련 입니다."; // 타이핑할 문구
let index = 0;
let speed = 100; // 글자 타이핑 속도 (밀리초 단위)

function typeWriter() {
    if (index < text.length) {
        document.getElementById("text").textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();





$(document).ready(function () {

    // ----------------------------------------------------
    // 1. 섹션 높이 설정 및 리사이즈 대응
    // ----------------------------------------------------
    var ht = $(window).height();
    $("section").height(ht);

    $(window).on("resize", function () {
        ht = $(window).height();
        $("section").height(ht);
    });

    // ----------------------------------------------------
    // 2. [핵심 함수] 이름 및 사진 애니메이션 실행/초기화
    // ----------------------------------------------------
    function setupAndAnimateCurrentSection(sectionIndex) {
        var $section = $("section").eq(sectionIndex);
        var $nameElement = $section.find('.name-reveal'); // 이름 요소
        var $photoElement = $section.find('.photo-reveal'); // 사진 요소

        // **********************************************
        // A. 사진 애니메이션 로직 (Clip-Path Reveal)
        // **********************************************
        if ($photoElement.length) {
            if ($photoElement.hasClass('is-loaded')) {
                $photoElement.removeClass('is-loaded'); // 초기화
                setTimeout(function () {
                    $photoElement.addClass('is-loaded'); // 재실행
                }, 10);
            } else {
                $photoElement.addClass('is-loaded'); // 첫 실행
            }
        }

        // **********************************************
        // B. 이름 애니메이션 로직 (단어 단위 슬라이드 업)
        // **********************************************
        if ($nameElement.length) {
            // 초기 텍스트 저장 (단 한 번만 실행)
            if (!$nameElement.data('original-text')) {
                $nameElement.data('original-text', $nameElement.text().trim());
            }

            var originalText = $nameElement.data('original-text');

            // 초기화
            $nameElement.removeClass('is-animated');
            $nameElement.data('is-running', false);
            $nameElement.html(originalText);

            // 애니메이션 재실행
            setTimeout(function () {
                if ($nameElement.data('is-running')) return;

                var words = originalText.split(' ');
                var newHTML = '';

                $.each(words, function (index, word) {
                    var delay = (index * 0.15) + 's';
                    newHTML += '<span class="word-clip"><span style="animation-delay:' + delay + ';">' + word + '</span></span>' + ' ';
                });

                $nameElement.html(newHTML.trim());
                $nameElement.addClass('is-animated');
                $nameElement.data('is-running', true);
            }, 10);
        }
    }


    // ----------------------------------------------------
    // 3. 메뉴 버튼 클릭시 (애니메이션 실행 로직 통합)
    // ----------------------------------------------------
    $("#menu li").on("click", function (e) {
        e.preventDefault();

        var ht = $(window).height();
        var i = $(this).index(); // 현재 섹션 인덱스
        var nowTop = i * ht;

        // 스크롤 애니메이션 완료 후 애니메이션 실행
        $("html,body").stop().animate({ "scrollTop": nowTop }, 1400, function () {
            setupAndAnimateCurrentSection(i);
        });
    });

    // ----------------------------------------------------
    // 4. 마우스 휠 이동시 (애니메이션 실행 로직 통합)
    // ----------------------------------------------------
    var isScrolling = false;

    $("section").on("mousewheel", function (event, delta) {

        if (isScrolling) { return false; }

        var ind = $(this).index();
        var cnt = $("section").size() - 1;
        var targetPos = null;

        if (delta == 1 && ind !== 0) {
            targetPos = $(this).prev().offset().top;
        } else if (delta == -1 && ind !== cnt) {
            targetPos = $(this).next().offset().top;
        }

        if (targetPos !== null) {
            isScrolling = true;

            $("html,body").stop().animate({ "scrollTop": targetPos },
                'slow',
                function () {
                    isScrolling = false;
                    // 이동이 완료된 새 섹션의 인덱스 계산
                    var newIndex = Math.round($(window).scrollTop() / $(window).height());
                    // 완료 후, 새 섹션의 애니메이션 실행
                    setupAndAnimateCurrentSection(newIndex);
                }
            );

            return false;
        }
    });

    // ----------------------------------------------------
    // 5. 페이지 로드 시 첫 섹션 애니메이션 즉시 실행
    // ----------------------------------------------------
    setupAndAnimateCurrentSection(0);

    // ----------------------------------------------------
    // 6. 윈도우 스크롤 메뉴 활성화 (기존 코드 유지)
    // ----------------------------------------------------
    $(window).on("scroll", function () {
        var ht = $(window).height();
        var scroll = $(window).scrollTop();

        for (var i = 0; i < 5; i++) {
            if (scroll >= ht * i && scroll < ht * (i + 1)) {
                $("#menu li").removeClass();
                $("#menu li").eq(i).addClass("on");
            };
        }
    });

});




