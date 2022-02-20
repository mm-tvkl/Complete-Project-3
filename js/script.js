$(document).ready(function() {
    $("#owl-carousel1").owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        autoplayHoverPause: true,
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
            900: {
                items: 2,
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
        dotsEach: 2,
        dotsSpeed: 200
    });
});

$(document).ready(function() {
    $("#owl-carousel2").owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: true
            },
            991: {
                items: 2,
                nav: false,
                loop: true
            }
        },
        stagePadding: 50,
        autoplay: true,
        autoplay: 2000,
        dotsEach: 1,
        dotsSpeed: 200
    });
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})