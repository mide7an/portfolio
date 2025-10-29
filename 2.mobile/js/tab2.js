// JavaScript Document


var cnt = 3;  //탭메뉴 개수 ***
$('#contentArea .content_area .contlist').css('display', 'none'); // 첫번째 탭 내용만 열어라
$('#contentArea .content_area .contlist:eq(0)').css('display', 'block'); // 첫번째 탭 내용만 열어라
$('#contentArea .content_area .tab1').addClass('current'); //첫번째 탭메뉴 활성화
//자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***

$('#contentArea .content_area .tab').each(function (index) {  // index=0 1 2
  $(this).click(function (e) {
    e.preventDefault();   // <a> href="#" 값을 강제로 막는다    

    $("#contentArea .content_area .contlist").hide(); //모든 탭내용을 안보이게...
    $("#contentArea .content_area .contlist:eq(" + index + ")").show(); //클릭한 해당 탭내용만 보여라
    $('#contentArea .content_area .tab').removeClass('current')
    $(this).addClass('current')

  });
});



