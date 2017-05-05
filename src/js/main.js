$(function(){
    $(".page").removeClass("preload");

    $('#toggle-contacts-panel').click(function(){
        $(this).toggleClass('panel-open');
        $('.contacts-panel').toggleClass('open');
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
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
            0:{
                items: 2,
                dots: true,
                nav: false,
                margin: 10,
            },
            768:{
                items: 3,
                dots: false,
                nav: true,
            },
            992:{
                items: 4,
            }
        }
    });


});


function isBreakpoint( alias ) {
    return $('.device-' + alias).is(':visible');
}
