$(function () {
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
        autoplay: false,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    centerMode: true,
                    centerPadding: '230px',
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                    centerMode: true,
                    centerPadding: '230px',
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    centerMode: true,
                    centerPadding: '160px',
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                    centerMode: true,
                    centerPadding: '0px',
                },
            }
        ]
    });

    $('.menu-btn').on('click', () => {
        $('.menu-mobile').toggleClass('active');
        $('.menu-btn').toggleClass('active');
    });
});