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


// -----servicer scroll
$('.servicer-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 350,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
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
// -----servicer scroll



// ----mixit up
// var mixer = mixitup(containerEl, {
//     selectors: {
//         target: '.mix-it'
//     },
//     animation: {
//         duration: 300
//     }
// });

var mixer = mixitup('.mix_deta');
// -----mixit up