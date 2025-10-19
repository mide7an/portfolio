

$(document).ready(function(){

  var memo = ['이미지 내용1','이미지 내용2','이미지 내용3','이미지 내용4'];  
 
  $('.pop .pop_menu a').click(function(e){
      e.preventDefault();

      var ind = $(this).index('.pop .pop_menu a');  // 0 1 2 3

      $('.pop .modal_box').fadeIn('fast');
      $('.pop .popup').fadeIn('slow');

      $('.pop .popup img').attr('src','./images/big'+(ind+1)+'.jpg');
      $('.pop .popup p').text(memo[ind]);

  });

  $('.close_btn,.pop .modal_box').click(function(e){
      e.preventDefault();
      $('.pop .modal_box').hide();
      $('.pop .popup').hide();
  });
});
