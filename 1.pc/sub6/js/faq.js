// JavaScript Document
$(document).ready(function () {
    var article = $('.faq .article');  //모든 질문 답변 리스트
    article.find('.a').slideUp(100); // 모든 답변 닫아라
    article.find('span').html('<i class="fas fa-chevron-down"></i>');
    article.find('span').css('color', '#333')



    // $('.faq .article:first').find('.a').slideDown(100);
    // $('.faq .article:first').find('span').html('<i class="fas fa-chevron-up"></i>');


    $('.faq .article .trigger').click(function (e) {  // 각각의 질문을 클릭하면
        e.preventDefault();  //<a href="#"> 태그 링크 처리
        // e.stopPropagation();
        var myArticle = $(this).parents('.article'); //클릭한 해당 list 

        if (myArticle.hasClass('hide')) {   //클릭한 해당 리스트의 상태가 hide냐?? 답변이 닫혀있냐??
            article.find('.a').slideUp(100); //모든 답변을 닫아라 
            article.removeClass('show').addClass('hide'); // 모든 리스트를 hide교체
            article.find('span').html('<i class="fas fa-chevron-down"></i>')
            article.find('span').css('color', '#333')
            article.find('trigger').css('color', '#333')
            myArticle.find('span').css('color', '#fff');
            myArticle.find('.trigger').css('color', '#fff')

            myArticle.removeClass('hide').addClass('show');  // show로 바꾼다 
            myArticle.find('.a').slideDown(100);  //해당 리스트의 답변을 열어라  
            myArticle.find('span').html('<i class="fas fa-chevron-up"></i>');
            article.find('span').css('color', '#333')
            myArticle.find('span').css('color', '#fff')
            article.find('.trigger').css('color', '#333')
            myArticle.find('.trigger').css('color', '#fff')

        } else {  // 'show' 답변이 열려있냐??
            myArticle.removeClass('show').addClass('hide');  // hide로 바꾼다 
            myArticle.find('.a').slideUp(100);  //해당 리스트의 답변을 닫아라  
            myArticle.find('span').html('<i class="fas fa-chevron-down"></i>')
            myArticle.find('span').css('color', '#fff');
            myArticle.find('.trigger').css('color', '#fff')






        }
    });
    $(document).click(function (e) {

        // 클릭이 trigger외부일때
        if (!$(e.target).closest('.faq .article .trigger').length) {
            // article.find('.a').slideUp(100); // 열려 있는 모든 답변 닫기
            // article.removeClass('show').addClass('hide'); // 모든 article을 'hide' 상태로 설정
            article.find('span').html('<i class="fas fa-chevron-down"></i>'); // 아이콘을 아래쪽 화살표로 변경
            article.find('span').css('color', '#333'); // 모든 span (화살표) 색상을 #333으로 초기화
            article.find('.trigger').css('color', '#333'); // 모든 질문 <a> 태그 (트리거) 텍스트 색상을 #333으로 초기화

        }
    });










    //모두 여닫기 처리
    $('.all').toggle(function (e) {
        e.preventDefault();
        article.find('.a').slideDown(100);
        article.removeClass('hide').addClass('show');
        article.find('span').html('<i class="fas fa-chevron-up"></i>');

        $(this).text('모두닫기▲');
    }, function (e) {
        e.preventDefault();
        article.find('.a').slideUp(100);
        article.removeClass('show').addClass('hide');
        article.find('span').html('<i class="fas fa-chevron-down"></i>');
        $(this).text('모두열기▼');
    });

}); 
