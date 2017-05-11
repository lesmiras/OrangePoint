$(function(){
    $(".page").removeClass("preload");

    $('#toggle-contacts-panel').click(function(){
        $(this).toggleClass('panel-open');
        $('.contacts-panel').toggleClass('open');
    });

    // main menu toggle
    // ============================================
    $('.nav .nav-toggle').click(function(){
        $(this).toggleClass('active');
        $('.nav').toggleClass('nav-open');
        $('.nav .nav-list').slideToggle();
    });

    // Main Banner sliders
    // ============================================
    $('.banner-sliders_item .slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        items: 1,
        onInitialized: function(){
            $('.slider').addClass('owl-carousel');
            $('.banner-sliders_item .slider_content').css({'height': 'auto', 'visibility':'visible'});
        },
    });

    // Fancybox
    // ============================================
    $("[data-fancybox]").fancybox({
        padding: 0,
        margin: 0,
        helpers : {
            overlay: {
                locked: false
            }
        }
    });

    // Owl Carosel
    // ============================================
    $('.clients-slider').owlCarousel({
        loop: true,
        margin: 35,
        nav: true,
        dots: false,
        navText: ['',''],
        responsive: {
            0:{
                items: 2,
                dots: true,
                nav: false,
                margin: 20,
            },
            481: {
                items: 3,
                dots: true,
                nav: false,
                margin: 15,
            },
            768:{
                items: 4,
                dots: false,
                nav: true,
            },
            992:{
                items: 5,
            },
            1200: {
                items: 7,
            }
        },
        onInitialized: function(){
            $('.clients-slider').addClass('owl-carousel').css({'height': 'auto', 'visibility':'visible'});
        }
    });

    // Owl Carosel
    // ============================================
    // $('.owl-carousel').owlCarousel({
    //     loop: true,
    //     margin: 30,
    //     nav: true,
    //     dots: false,
    //     navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    //     responsive: {
    //         0:{
    //             items: 2,
    //             dots: true,
    //             nav: false,
    //             margin: 10,
    //         },
    //         768:{
    //             items: 3,
    //             dots: false,
    //             nav: true,
    //         },
    //         992:{
    //             items: 4,
    //         }
    //     }
    // });

});


function isBreakpoint( alias ) {
    return $('.device-' + alias).is(':visible');
}
