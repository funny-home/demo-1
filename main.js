$(document).ready(function(){
  /*  открывает блок по клику */
  $(function(){
      var toggleSlide = function(el, cl) {
          $(el).on('click', function() {
              if (!$(this).next().is(':animated')) {
                  $(this).toggleClass('opened');
                  $(cl).slideToggle(500);
              } return false;
          });
      }
      /*  добавляем нужные классы */
      toggleSlide('.class-title1', '.class-body1');
      toggleSlide('.class-title2', '.class-body2');
      toggleSlide('.class-title3', '.class-body3');
      toggleSlide('.class-title4', '.class-body4');
      toggleSlide('.class-title5', '.class-body5');
  });
  
  /* суда класс для кнопки вверх */
  $('.link_top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
});
