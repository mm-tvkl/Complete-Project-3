$(document).ready(function () {
    $("#owl-carousel1").owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: true
            },
            600: {
                items: 3,
                nav: false,
                loop: true
            },
            1000: {
                items: 4,
                nav: false,
                loop: true
            }
        },
        URLhashListener: true,
        startPosition: 'zero',
        stagePadding: 50,
        autoplay: true,
        autoplay: 2000,
        dotsEach:2,
        dotsSpeed:200
    });
});