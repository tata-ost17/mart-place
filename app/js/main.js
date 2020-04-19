$(function(){
   $('.rate-star').rateYo({
      rating: 4.5,
      starWidth: '17px',
      readOnly: true
   });

   $('.product-slider__inner').slick({
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
   });
   


});