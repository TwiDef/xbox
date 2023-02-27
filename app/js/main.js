$(function() {
    $('.slider').slick({
        arrows: true,
        dots: false,
        fade: true,
        prevArrow: '<button type="button" class="slider__arrow slider__arrowleft"><img src="images/back.svg" alt="left"></button>',
        nextArrow: '<button type="button" class="slider__arrow slider__arrowright"><img src="images/next.svg" alt="right"></button>',
    });

    $('.slider-cards').slick({
        slidesToShow: 4,
        variableWidth: true,
        infinite: true,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500
    });
});