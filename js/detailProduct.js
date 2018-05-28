$(function () {
    $('.detail-specifications a').on('click',function () {
       $('.detail-specifications a').removeClass('detail-active');
       $(this).addClass('detail-active');
    });

    $('.detail-img-li').on('mouseenter',function () {
        $('.detail-img-li').removeClass('detail-img-li-active')
        $(this).addClass('detail-img-li-active');
        $('.detail-big-img img').attr('src',$(this).attr('data-url'));
    });
});