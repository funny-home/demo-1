$(document).ready(function(){
  $(function(){
      var toggleSlide = function(el, cl) {
          $(el).on('click', function() {
              if (!$(this).next().is(':animated')) {
                  $(this).toggleClass('opened');
                  $(cl).slideToggle(500);
              } return false;
          });
      }
  
      toggleSlide('.kategor-title', '.kategor');
      toggleSlide('.shop-cart-title', '.shop-cart-body');
      toggleSlide('.block-title', '.block-body');
      toggleSlide('.block-title2', '.block-body2');
      toggleSlide('.shop2-filter-title', '.shop2-filter-body');
  });
});
