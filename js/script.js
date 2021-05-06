// js 


// -----smooth scroll
$(window).scroll(function () {
    if ($(window).scrollTop() > 45) {
        $(".menu").addClass("fix_menu")
    } else {
        $(".menu").removeClass("fix_menu")
    }
})
// -----smooth scroll


// -----smooth scroll
AOS.init({
    duration: 600,
    once: true,
});
// -----smooth scroll


// -----smooth scroll
var scroll = new SmoothScroll('a[href*="#"]');
// -----smooth scroll


$('.servicer-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 350,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});