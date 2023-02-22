$(function() {
    $('.slider').slick({
        arrows: true,
        dots: false,
        fade: true,
        prevArrow: '<button type="button" class="slider__arrow slider__arrowleft"><img src="images/back.svg" alt="left"></button>',
        nextArrow: '<button type="button" class="slider__arrow slider__arrowright"><img src="images/next.svg" alt="right"></button>',
    });
});