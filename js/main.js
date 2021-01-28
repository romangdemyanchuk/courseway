$(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: ['<', '>'],
        dots:false,
        responsive:{
            600:{
                items:2
            },
            880:{
                items:3
            },
            1150:{
                items:4
            }
        }

    });
    $('.menu-btn').on('click', function() {
        $('.header-menu').slideToggle();
    });
});

