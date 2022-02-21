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
        startPosition: "zero",
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

var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

var navbar = document.getElementById("Navbar");
window.addEventListener("scroll", function() {
    var y = window.scrollY;
    if (y >= 200) {
        navbar.classList.add("navbar-bg-purple");
        navbar.classList.add("fixedNav");
        navbar.classList.remove("scrollyNav");
        navbar.classList.remove("bg-transparent");
        navbar.classList.remove("p-4");
        navbar.classList.add("p-2");
    } else if (y < 200) {
        navbar.classList.remove("navbar-bg-purple");
        navbar.classList.remove("fixedNav");
        navbar.classList.add("scrollyNav");
        navbar.classList.add("bg-transparent");
        navbar.classList.remove("p-2");
        navbar.classList.add("p-4");
    }
});

var myHome = document.getElementById("homeItem");
var myFeature = document.getElementById("featureItem");
var myVideo = document.getElementById("videoItem");
var myPricing = document.getElementById("pricingItem");
var myScreen = document.getElementById("screenItem");
var myTest = document.getElementById("testItem");
var myDownload = document.getElementById("downloadItem");
var myNews = document.getElementById("newsItem");