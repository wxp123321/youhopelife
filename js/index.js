$(function () {
    $('.item').on('mouseover',function (e) {
       console.log(this.offsetLeft);
       // var eWidth = $('.eat').width();
       // var tWidth = $('.titles').width();
       var width = parseInt($(this).width()/2-15);
       $('#lastLi').css('left',this.offsetLeft+width);
    });
})