/*
 ////////////////////////////////////////////////////////
 // Bao Nguyen Apps
 // @version v1.0
 // @link https://baonguyenyam.github.io
 // @license MIT
 // @Coding by Bao Nguyen - 0969689893 - 0933112900
 // @baonguyenyam@gmail.com
 ////////////////////////////////////////////////////////
*/"use strict";

var DOMAIN_URL = 'http://domain.com';
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

    $('.datepicker').datepicker({
        format: 'dd/mm/yyyy'
    });

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
        scrollName: 'scrollUp', 
        topDistance: '300', 
        topSpeed: 300, 
        animation: 'fade', 
        animationInSpeed: 200, 
        animationOutSpeed: 200, 
        scrollText: 'Scroll to top', 
        activeOverlay: false 
    });
});
