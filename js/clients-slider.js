$('.clients-slider').slick({
  nextArrow: '<a href="#" class="clients__next">Next slide <svg class="clients__icon"><use xlink:href="#icon-arrow-right"></use></svg></a>',
  prevArrow: '<a href="#" class="clients__prev">Previous slide <svg class="clients__icon"><use xlink:href="#icon-arrow-left"></use></svg></a>',
  centerPadding: '60px',
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 1230,
      settings: {
        arrows: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 767,
      settings: {
        dots: true,
        arrows: false,
        centerPadding: '20px',
        slidesToShow: 1
      }
    }
  ]
});
