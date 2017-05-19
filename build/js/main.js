$(function(){
    $(".page").removeClass("preload");
    
    setTimeout(function(){
        $('.banner-sliders_item').addClass('on-show');
    }, 1000)

    // toggle contacts panel in header
    // ============================================
    $('#toggle-contacts-panel').click(function(){
        $(this).toggleClass('panel-open');
        $('.contacts-panel').toggleClass('open');
    });

    // equal height calc
    // ============================================
    if( !isBreakpoint('xs')){
        $('.advantage_item').equalHeights();
        $('.info-block_content').equalHeights();
    }
    
    // main menu toggle
    // ============================================
    $('.nav .nav-toggle').click(function(){
        $(this).toggleClass('active');
        $('.nav').toggleClass('nav-open');
        $('.nav .nav-list').slideToggle();
    });

    // copy human icons in TEAM ITEM
    // ============================================
    $.when(
        $('.team_item-members').each(function(){
            var count = parseInt($(this).parentsUntil('.team_item-count').text());
            for (var i = 0; i < count; i++) {
                $(this).append($('<span class="member"></span>'));
            }
        })
    ).then(
        function(){
            if( !isBreakpoint('xs')){
                $('.team_item .team_item-members').equalHeights();
            }
        }
    );

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
    $("[data-fancybox]").fancybox();

    // Clients Carosel
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
            $('.clients-slider').css({'height': 'auto', 'visibility':'visible'});
        }
    });

     // Portfolio Carosel
    // ============================================
    $('.portfolios-slider').owlCarousel({
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
                margin: 10,
            },
            481: {
                items: 2,
                dots: true,
                nav: false,
                margin: 15,
            },
            768:{
                items: 3,
                dots: false,
                nav: true,
            },
            992:{
                items: 4,
            }
        },
        onInitialized: function(){
            $('.portfolios-slider').css({'height': 'auto', 'visibility':'visible'});
        }
    });

    // Sertificates Carosel
    // ============================================
    $('.sertificates-slider').owlCarousel({
        loop: true,
        margin: 50,
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
                items: 2,
                dots: true,
                nav: false,
                margin: 15,
            },
            768:{
                items: 3,
                dots: false,
                nav: true,
            },
            992:{
                items: 4,
                margin: 35,
            },
            1200: {
                items: 5,
            }
        },
        onInitialized: function(){
            $('.sertificates-slider').css({'height': 'auto', 'visibility':'visible'});
        }
    });

    // Reviews Carosel
    // ============================================
    $('.reviews-slider').owlCarousel({
        loop: true,
        margin: 40,
        nav: true,
        dots: false,
        navText: ['',''],
        responsive: {
            0:{
                items: 1,
                dots: true,
                nav: false,
                margin: 20,
            },
            481: {
                items: 1,
                dots: true,
                nav: false,
                margin: 15,
            },
            768:{
                items: 2,
                dots: false,
                nav: true,
            },
            992:{
                items: 3
            }
        },
        onInitialized: function(){
            $('.reviews-slider').css({'height': 'auto', 'visibility':'visible'});
        }
    });

});


function isBreakpoint( alias ) {
    return $('.device-' + alias).is(':visible');
}

/*!
 * Simple jQuery Equal Heights
 *
 * Copyright (c) 2013 Matt Banks
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://docs.jquery.com/License
 *
 * @version 1.5.1
 */
(function($) {

    $.fn.equalHeights = function() {
        var maxHeight = 0,
            $this = $(this);

        $this.each( function() {
            var height = $(this).innerHeight();

            if ( height > maxHeight ) { maxHeight = height; }
        });

        return $this.css('height', maxHeight);
    };

    // auto-initialize plugin
    $('[data-equal]').each(function(){
        var $this = $(this),
            target = $this.data('equal');
        $this.find(target).equalHeights();
    });

})(jQuery);