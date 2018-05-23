$(function () {
    $(window).on('scroll',function () {
        if($(window).scrollTop() >= 220) {
            $('.logo-box').addClass('logo-box2');
        }else if ($(window).scrollTop() < 220) {
            $('.logo-box').removeClass('logo-box2');
        }
    });
});