$(function () {
    $('.city-ul li').on('mouseover',function () {
        $('.city-ul li').css('background','#fff');
        $('.first-span').css('color','#666');
        $('.first-span').css('background','#fff');
        $(this).css('background','rgb(240,240,240)');
        $($(this).children()[0]).css('color','#fff');
        $($(this).children()[0]).css('background','rgb(0,140,225)');
    });
})