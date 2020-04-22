$(function(){
   $('.rate-star').rateYo({
      rating: 4.5,
      starWidth: '17px',
      readOnly: true
   });

   $('.rate-stars').rateYo({
      rating: 4.5,
      starWidth: '15px',
      readOnly: true
   });

   $('.product-slider__inner').slick({
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
   });

   $('.followers-slider__inner').slick({
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 3,
   });

   


   var mixer = mixitup('.products__inner-box');

});
