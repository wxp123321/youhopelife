$(function () {
    $('.item').on('mouseover',function (e) {
       var width = parseInt($(this).width()/2-15);
        $(this).parent().children(':last-child').css('left',this.offsetLeft+width);
    });

})