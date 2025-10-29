// JavaScript Document

$(document).ready(function () {
	var position = 0;  //최초위치
	var movesize = 3; //이동 크기 /속도
	var timeonoff;

	$('.contlist .gallery .gallery_box ul').after($('.contlist .gallery .gallery_box ul').clone()); //복재
	// $('가져다 놓을 태그').after('기준태그'); 애프터 뒤를 복제해서 맨위태그 뒤에 놓기

	function partnerMove() {
		position -= movesize;  // 2씩 감소  포지션-무브사이즈=
		$('.contlist .gallery .gallery_box').css('left', position);

		if (position < -1830) {
			$('.contlist .gallery .gallery_box').css('left', 0); //레프트값의 초기화
			position = 0; //증가된 포지션 값 초기화
		}
	};

	timeonoff = setInterval(partnerMove, 100); //0.1초마다 2씩

	$('.contlist .gallery .gallery_box').hover(function () {
		clearInterval(timeonoff);
	}, function () {
		timeonoff = setInterval(partnerMove, 100);

	});




	var ind = $('.contlist .gallery .gallery_box img ').hover(function (e) {
		e.preventDefault();
		var ind = $('.contlist .gallery .gallery_box img')
		$(this).css('filter', 'brightness(70%)')
	},
		function () {
			$(this).css('filter', 'brightness(100%)')
		}
	)

})






