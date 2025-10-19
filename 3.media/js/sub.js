 var swiper = new Swiper('.bridges', {
      effect: 'slide',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: '3.5',
      autoHeight: true,
      spaceBetween: 20,
      loop: true,
      speed:1000,
     
      autoplay: {
    delay: 2000, // 슬라이드가 전환되는 시간 (밀리초)
    disableOnInteraction: false, // 사용자가 슬라이드를 조작한 후에도 오토플레이를 멈추지 않음
    pauseOnMouseEnter: true, // 마우스가 슬라이드 위에 있을 때 오토플레이를 일시 정지
    },
      
      pagination: {
        el: '.swiper-pagination',
        
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        // 1025px 이상일 때 적용될 설정
        1025: {
            slidesPerView: 3.7,
        },
        
        769: {
            slidesPerView: 3.2,
        },
         641: {
            slidesPerView: 2.2,
        },
         0: {
            slidesPerView: 1.2,
        },

        
    },
    });


// gastronomy

     $(document).ready(function () {
            var ind =0;
             $('.gastronomybox ul li .btn').hover(function(){
             
                    ind = $(this).index('.gastronomybox ul li .btn');  // 0 1 2
                    $('.box'+(ind+1)).css({
                        'left':0,
                        'width':'100%',
                        'opacity':1,
                        'z-index':10
                    });
                    $(this).css('background','rgba(0,0,0,.3)');
                    $(this).css('color','#75B240');
             },function(){
                  $('.box'+(ind+1)).css({
                        'left':25*ind+'%',
                        'width':'25%',
                        'opacity':0,
                        'z-index':1
                    }); 
                    $(this).css('background','rgba(0,0,0,0)');
                    $(this).css('color','#fff');
            });




              $(".gastronomybox ul li .btn").click(function(e){
              e.preventDefault();
      
             });

            

        });



      var swiper = new Swiper('.cuisine_box', {
      effect: 'slide',
      grabCursor: true,
      centeredSlides: false,
      slidesPerView: '4',
      autoHeight: true,
      spaceBetween: 20,
      loop: true,
      speed:1000,
     
      autoplay: {
    delay: 2000, // 슬라이드가 전환되는 시간 (밀리초)
    disableOnInteraction: false, // 사용자가 슬라이드를 조작한 후에도 오토플레이를 멈추지 않음
    pauseOnMouseEnter: true, // 마우스가 슬라이드 위에 있을 때 오토플레이를 일시 정지
    },
      
      pagination: {
        el: '.swiper-pagination',
        clickable: true, 
        
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

       breakpoints: {
        // 1025px 이상일 때 적용될 설정
        1024: {
            slidesPerView: 4,
        },
        
        768: {
            slidesPerView: 3,
            
        },
         640: {
            slidesPerView: 2,
            spaceBetween: 10
            
        },
         0: {
            slidesPerView: 2,
            /* centeredSlides: true, */
            
        },

        
    }, 
    });


 

    

   
$(document).ready(function(){

 
    $('.productsbox .charbox img').attr('src','./images/sub2/sub2_char01.jpg');
     $('.productsbox .charbox img').addClass('animate-in');
   
    $('.productsbox .gallery-thumbs ul li:eq(0) a').css('filter','grayscale(0)');
      
    $('.productsbox .gallery-thumbs a').click(function(e){
        e.preventDefault();
        var ind = $(this).index('.productsbox .gallery-thumbs a');
        
        $('.productsbox .charbox img').removeClass('animate-in');
        $('.productsbox .charbox img')[0].offsetWidth;   //이전애니메이션지우고 다시 시작하라는 트릭

        // 4. 애니메이션 클래스 다시 추가
        $('.productsbox .charbox img').addClass('animate-in'); // 🌟 애니메이션이 재실행됩니다.

          
        $('.productsbox .charbox img').attr('src','./images/sub2/sub2_char0'+(ind+1)+'.jpg');
               
        $('.productsbox .gallery-thumbs ul li a').css('filter','grayscale(100%)');
        $('.productsbox .gallery-thumbs ul li:eq('+ind+') a').css('filter','grayscale(0)');
    });
  });
  
  


   var swiper = new Swiper('.wine', {
      effect: 'fade',
      grabCursor: true,
      centeredSlides: false,
      slidesPerView: '1',
      autoHeight: true,
      spaceBetween: 0,
      loop: true,
     
      /* autoplay: {
     delay: 3000, // 슬라이드가 전환되는 시간 (밀리초)
    disableOnInteraction: false, // 사용자가 슬라이드를 조작한 후에도 오토플레이를 멈추지 않음
     pauseOnMouseEnter: true, // 마우스가 슬라이드 위에 있을 때 오토플레이를 일시 정지
    }, */
      
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

     /*  breakpoints: {
        // 1025px 이상일 때 적용될 설정
        1025: {
            slidesPerView: 3.7,
        },
        
        769: {
            slidesPerView: 3.2,
        },
         641: {
            slidesPerView: 2.2,
        },
         0: {
            slidesPerView: 1.2,
        },

        
    }, */
    });



      var swiper = new Swiper('.mountain', {
      effect: 'slide',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: '1',
      autoHeight: true,
      spaceBetween: 10,
      loop: true,
          
      pagination: {
        el: '.swiper-pagination',
       
        
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
    });

        var swiper = new Swiper('.forest', {
      effect: 'fade',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: '1',
      autoHeight: true,
      spaceBetween: 20,
      loop: true,
          
      pagination: {
        el: '.swiper-pagination',
       
        
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
    });


    var swiper = new Swiper('.lake', {
      effect: 'cube',
      grabCursor: true,
      loop: true,
      speed:1000,

      cubeEffect: {
        shadow: true,
        /* slideShadows: true, */
        shadowOffset: 20,
        shadowScale: 0.94,
      
      },

         autoplay: {
    delay: 2000, // 슬라이드가 전환되는 시간 (밀리초)
    disableOnInteraction: false, // 사용자가 슬라이드를 조작한 후에도 오토플레이를 멈추지 않음
    pauseOnMouseEnter: true, // 마우스가 슬라이드 위에 있을 때 오토플레이를 일시 정지
    },
      


      pagination: {
        el: '.swiper-pagination',
      },
    });


    var swiper = new Swiper('.cave', {
      effect: 'slide',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: '1',
      autoHeight: true,
      spaceBetween: 20,
      loop: true,
      
          
    //   autoplay: {
    // delay: 3000, // 슬라이드가 전환되는 시간 (밀리초)
    // disableOnInteraction: false, // 사용자가 슬라이드를 조작한 후에도 오토플레이를 멈추지 않음
    // pauseOnMouseEnter: true, // 마우스가 슬라이드 위에 있을 때 오토플레이를 일시 정지
    // },
      
    
      navigation: {
        nextEl: '.caves .swiper-button-next',
        prevEl: '.caves .swiper-button-prev',
      },
      
    });




