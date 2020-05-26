$(function(){
   $(".category-down").on("click", function () {
      $(".category__list").slideToggle();;
   });
   $(".filter-down").on("click", function () {
      $(".filter-products__list").slideToggle();;
   });
   

   $('.rate-star').rateYo({
      rating: 4.5,
      starWidth: '17px',
      readOnly: true,
      ratedFill: "#ffc000"
   });

   $('.rate-stars').rateYo({
      rating: 4.5,
      starWidth: '15px',
      readOnly: true,
      ratedFill: "#ffc000"
   });

   $('.product-slider__inner').slick({
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev slick-arrow"><span class="lnr lnr-chevron-left"></span></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow"><span class="lnr lnr-chevron-right"></span></button>',
      appendArrows: '.product__heading-arrows',
   });

   $('.followers-slider__inner').slick({
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: '<button type="button" class="slick-prev slick-arrow"><span class="lnr lnr-chevron-left"></span></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow"><span class="lnr lnr-chevron-right"></span></button>',
      appendArrows: '.followers__heading-arrows',
   });
   // jQuery Form Styler
   $('input[type="file"],input[type="checkbox"],input[type="radio"],select').styler();
   //  $('input[type="radio"], select').styler({
       
   //  });
   $(".js-range-slider").ionRangeSlider({
      type: "double",
      min: 0,
      max: 350,
      from: 30,
      to: 300,
      grid: true
   });
   $('.icon-list').on('click', function () {
      $('.product-page__item').addClass('list');
      $('.icon-list').addClass('active');
      $('.icon-grid').removeClass('active');
   });
   $('.icon-grid').on('click', function () {
      $('.product-page__item').removeClass('list');
      $('.icon-grid').addClass('active');
      $('.icon-list').removeClass('active');
   });

   $('.template__tabs .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.template__tabs').find('.tab-item').removeClass('active-tab').hide();
      $('.template__tabs .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });
   
   
   var mixer = mixitup('.products__inner-box');

});
