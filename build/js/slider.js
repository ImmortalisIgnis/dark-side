$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        nextArrow: '<a href="#" class="slider__next">Next slide <svg class="slider__icon"><use xlink:href="#icon-arrow-right"></use></svg></a>',
        prevArrow: '<a href="#" class="slider__prev">Previous slide <svg class="slider__icon"><use xlink:href="#icon-arrow-left"></use></svg></a>',
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                arrows: false
                }
            }
        ]
    });
});