"use strict";

var DOMAIN_URL = 'http://domain.xyz';
var VIENSOI_APP = {
    "ACTIVE_FIXED_HEADER": false,
    "HEADER_TRANPARENT": false,
    "NAV_CHANGE_ON": "sm",
    "ACTIVE_HEADER_POSITION": 1,
    "ACTIVE_PADDING_MAIN": false,
    "ACTIVE_FIXED_FOOTER": false,
    "DISPLAY_FOOTER": 600,
    "ACTIVE_RESPONSIVE": true,
    "ACTIVE_OFFCANVAS": true,
    "ACTIVE_BACKTOTOP": true,
    "DISPLAY_BACKTOTOP": 100,
    "CHANGE_GRID": 991,
    "DEV_MODE": true,
    "DEV_MODE_GIRD_FULL": false,
    "MEGA_MENU": false,
    "MEGA_MENU_COL": 5
};
$(document).ready(function () {

    // JQUERY RATING
    $('#rating').barrating({
        theme: 'fontawesome-stars'
    });
    $('.br-widget a').click(function () {
        if ($('.br-widget a:nth-child(5)').hasClass('br-selected')) {
            $('.rating-form1').hide();
            $('.rating-form2').show();
        } else {
            $('.rating-form2').hide();
            $('.rating-form1').show();
        }
    });

    // DATETIME PICKER
    $('.datepicker').datepicker({
        format: 'dd/mm/yyyy'
    });

    // INSERT SCRIPT
    if ($(window).width() < 575) {
        $('.language').insertAfter('.menu-link');
    }

    // FAQ
    $('.faq .faq-title').click(function () {
        if ($(this).parent().hasClass('active') == true) {
            $(this).parent().removeClass('active');
            $(this).parent().find('.faq-content').slideUp(300);
        } else {
            $('.faq').removeClass('active');
            $('.faq').find('.faq-content').slideUp(300);
            $(this).parent().addClass('active');
            $(this).parent().find('.faq-content').slideDown(300);
        }
    });
    // POST REQUIREMENT
    $('.working-place .place-group .place-name').click(function () {
        var _parent = $(this).parent();
        if (_parent.hasClass('active')) {
            _parent.removeClass('active');
            _parent.find('.place-form').slideUp(300);
        } else {
            $('.working-place .place-group').removeClass('active');
            $('.working-place .place-group .place-form').slideUp();
            _parent.addClass('active');
            _parent.find('.place-form').slideDown(300);
        }
    });

    // SLIDE
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 1000,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false
    });
});

$(function () {
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: 'Scroll to top', // Text for element
        activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
});
//# sourceMappingURL=app.js.map
