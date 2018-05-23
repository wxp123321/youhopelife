$(function () {
    $('.i').on('click',function () {
       $('.i').removeClass('span-active');
       $(this).addClass('span-active');
    });

    $('#modify-btn').on('click',function () {
        $('#modify-img').trigger('click');
    });
});