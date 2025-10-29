$(document).ready(function() {
  // .con1의 높이를 가져옵니다.
  var con1Height = $('.con1').height();

  // .con2의 높이를 .con1의 높이와 동일하게 설정합니다.
  $('.con2').css('height', con1Height);

  // 창 크기가 변경될 때 높이를 다시 설정합니다.
  $(window).resize(function() {
    con1Height = $('.con1').height();
    $('.con2').css('height', con1Height);
  });
});


///하이드 이미지

$(window).on('scroll', function() {
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // 모든 .hideimg 요소를 순회합니다.
    $('.hideimg').each(function() {
        var item = $(this);
        var itemTop = item.offset().top;
        var itemBottom = itemTop + item.outerHeight();

        // 현재 아이템이 뷰포트에 들어왔는지 확인합니다.
        if (itemBottom > viewportTop && itemTop < viewportBottom) {
            // 현재 아이템의 자식 요소에만 .is-active 클래스를 추가합니다.
            $(this).find('.hideimg1, .hideimg2').addClass('is-active');
        } else {
            // 뷰포트를 벗어나면 클래스를 제거합니다.
            $(this).find('.hideimg1, .hideimg2').removeClass('is-active');
        }
    });
});







//그리드조각

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.grid-container');
    const imageWidth = 800; // CSS의 .grid-container 너비와 동일
    const imageHeight = 600; // CSS의 .grid-container 높이와 동일
    const rows = 5; // 행의 개수
    const cols = 7; // 열의 개수
    const totalTiles = rows * cols;
    const tileWidth = imageWidth / cols;
    const tileHeight = imageHeight / rows;
    const tiles = [];
    let animationStarted = false; // 애니메이션 실행 여부 플래그

    // 그리드 템플릿 설정 (CSS Grid)
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    // 그리드 조각 생성 및 배열에 저장
    for (let i = 0; i < totalTiles; i++) {
        const row = Math.floor(i / cols);
        const col = i % cols;

        const tile = document.createElement('div');
        tile.classList.add('grid-item');
        
        // 각 그리드 조각의 배경 이미지 위치 설정
        tile.style.backgroundPosition = `-${col * tileWidth}px -${row * tileHeight}px`;
        
        container.appendChild(tile);
        tiles.push(tile);
    }

    // 순차적으로 애니메이션 실행 함수
    const showNextTile = () => {
        // 애니메이션 실행 전에 그리드 조각들을 무작위로 섞습니다.
        tiles.sort(() => Math.random() - 0.5);

        let index = 0;
        const animate = () => {
            if (index < totalTiles) {
                tiles[index].classList.add('active');
                index++;
                setTimeout(animate, 30); // 30ms 간격으로 다음 조각을 보여줌
            }
        };
        animate();
    };

    // 모든 그리드 조각에서 'active' 클래스를 제거하여 애니메이션 상태를 초기화합니다.
    const resetTiles = () => {
        tiles.forEach(tile => tile.classList.remove('active'));
    };

    // IntersectionObserver 설정
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // entry.isIntersecting: 요소가 뷰포트에 들어왔는지 여부
            if (entry.isIntersecting) {
                // 뷰포트에 들어왔고, 애니메이션이 아직 시작되지 않았다면
                if (!animationStarted) {
                    showNextTile();
                    animationStarted = true; // 애니메이션 실행 플래그를 true로 변경
                }
            } else {
                // 뷰포트를 벗어났을 때, 애니메이션 상태를 초기화합니다.
                animationStarted = false;
                resetTiles();
            }
        });
    }, {
        threshold: 0.5 // 50% 정도 보일 때 감지
    });

    // 그리드 컨테이너 관찰 시작
    observer.observe(container);
});



 var swiper = new Swiper('.food', {
      effect: 'slide',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      autoHeight: true,
      spaceBetween: 5,
      loop: true,
     
      autoplay: {
    delay: 3000, // 슬라이드가 전환되는 시간 (밀리초)
    disableOnInteraction: false, // 사용자가 슬라이드를 조작한 후에도 오토플레이를 멈추지 않음
    pauseOnMouseEnter: true, // 마우스가 슬라이드 위에 있을 때 오토플레이를 일시 정지
    },
      
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });


    
    var gdata = [
      {'title':'Traditional Cuisine', 'desc':'The Cuisine of Kozani'},
      {'title':'Traditional Cuisine', 'desc':'The cuisine of Skiathos'},
      {'title':'Traditional Products', 'desc':'Local Products of Grevena'},
      {'title':'Traditional Products', 'desc':'Local Products of Kozani'},
      {'title':'Greek Wines', 'desc':'The wines of Grevena'},
      {'title':'Greek Wines', 'desc':'Attica of Vineyards'},
      {'title':'Greek Beverages', 'desc':'Souma from Rhodes'},
      {'title':'Greek Beverages', 'desc':'Kitro of Naxos'},
     
    ];
    var text = document.getElementById('text');
    var output ='';

    output +='<dl>';
    output +='<dt>'+ gdata[0].title +'</dt>';
    output +='<dd>'+ gdata[0].desc +'</dd>';
    output +='</dl>';  
    text.innerHTML = output;

    swiper.on('slideChangeTransitionEnd', function() {
        //console.log(swiper.realIndex);
        var sind = swiper.realIndex;  // 0~9
        
        output ='<dl>';
        output +='<dt>'+ gdata[sind].title +'</dt>';
        output +='<dd>'+ gdata[sind].desc +'</dd>';
        output +='</dt>';  
        text.innerHTML = output;

        text.classList.remove('animate');
      void text.offsetWidth; // DOM 강제 리플로우
      text.classList.add('animate');
    });





// 네아쳐 탭메뉴


    var cnt=5;  //탭메뉴 개수 ***
    $('.contlist').css('display','none'); //  탭 닫아라
    $('.contlist:eq(0)').css('display','block'); // 첫번째 탭 내용만 열어라
    $('.tab1').addClass('current'); //첫번째 탭메뉴 활성화
               //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
    
    $('.tab').each(function (index) {  // index=0 1 2
      $(this).click(function(e){
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다    

          $(".contlist").hide(); //모든 탭내용을 안보이게...
          $(".contlist:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
          $('.tab').removeClass('current')
          $(this).addClass('current')

     });
    });



  






// 스와이퍼 해상도 1024 내  slidesPerView:'2',



    var swiper = new Swiper('.youtube', {
      slidesPerView:' 3',
      spaceBetween: 10,
      scrollbar: {
        el: '.swiper-scrollbar',
       draggable: true,
       hide: false,
      },
      loop: true,
      autoplay: {
    delay: 3000, // 슬라이드가 전환되는 시간 (밀리초)
    disableOnInteraction: false, // 사용자가 슬라이드를 조작한 후에도 오토플레이를 멈추지 않음
    pauseOnMouseEnter: true, // 마우스가 슬라이드 위에 있을 때 오토플레이를 일시 정지
    },
    breakpoints: {
        // 1025px 이상일 때 적용될 설정
        1025: {
            slidesPerView: 3,
        },
        // 1024px 이하일 때 적용될 설정 (모바일)
        0: {
            slidesPerView: 2,
        },
    },
    });




    // breakpoints:{
    //     640 : {   //브라우저가 640이상
    //       slidesPerView: 2
    //     },
    //     768 : {   //브라우저가 768이상
    //       slidesPerView: 2
    //     },
    //     1024 : {  //브라우저가 1024이상
    //       slidesPerView: 3
    //     },
    //     1280 : {  //브라우저가 1280이상
    //       slidesPerView: 3 
    //     }
    //   }

    
