$(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: ['<', '>'],
        dots:false,
        responsive:{
            320:{
                items:1
            },
            750:{
                items:2
            },
            940:{
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

