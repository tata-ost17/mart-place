$(function(){
   $('.rate-star').rateYo({
      rating: 5,
      starWidth: '17px',
      readOnly: true
   });

   $('.product-slider__inner').slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
   });


});