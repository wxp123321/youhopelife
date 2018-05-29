var flag = false;
var flag1 = false;
var x = {
    start: 0,
    end: 0
}
$(function () {
    $('.item').on('mouseover', function (e) {
        var width = parseInt($(this).width() / 2 - 15);
        $(this).parent().children(':last-child').css('left', this.offsetLeft + width);
    });

    $('.nav-item').on('mouseenter', function (e) {
        flag1 = false;
        x.start = e.clientX;
        $('.nav-item').css('background', '#404040');
        $('.many-lists').css('display','block');
        $(this).css('background', 'rgb(236,105,23)');
    });

    $('.nav-list').on('mouseleave', function (e) {
        x.end = e.clientX;
        if(x.end - x.start < 0) {
            flag1 = true;
            if (!flag) {
                $('.icon-xuanzhuan').css('transform', 'rotate(180deg)');
                $('.nav-list').css('display', 'none');
                $('.nav-item').css('background', '#404040');
                $('.many-lists').css('display','none');
                flag = false;
                flag1 = false;
            }
        }
    });

    $('.type-content').on('mouseenter', function () {
        flag = true;
        $('.icon-xuanzhuan').css('transform', 'rotate(-180deg)');
        $('.nav-list').css('display', 'block');
    });

    $('.type-content').on('mouseleave', function () {
        flag = false;
        if(flag1) {
            $('.icon-xuanzhuan').css('transform', 'rotate(180deg)');
            $('.nav-list').css('display', 'none');
            $('.many-lists').css('display','none');
            flag = false;
            flag1 = false;
        }
    });

    $('.head-nav').on('mouseleave',function () {
        $('.icon-xuanzhuan').css('transform', 'rotate(180deg)');
        $('.nav-list').css('display', 'none');
        $('.many-lists').css('display','none');
        flag = false;
        flag1 = false;
    });

    $('#eat').on('mouseover',function () {
        $('.ul-item').css('display','none');
        $('.ul-eat').css('display','block');
    });

    $('#clothes').on('mouseover',function () {
        $('.ul-item').css('display','none');
        $('.ul-clothes').css('display','block');
    });

    $('#entertainment').on('mouseover',function () {
        $('.ul-item').css('display','none');
        $('.ul-entertainment').css('display','block');
    });

    $('#furniture').on('mouseover',function () {
        $('.ul-item').css('display','none');
        $('.ul-furniture').css('display','block');
    });

    $('#retail').on('mouseover',function () {
        $('.ul-item').css('display','none');
        $('.ul-retail').css('display','block');
    });

    $('#cosmetic').on('mouseover',function () {
        $('.ul-item').css('display','none');
        $('.ul-cosmetic').css('display','block');
    });

    $('#building').on('mouseover',function () {
        $('.ul-item').css('display','none');
        $('.ul-building').css('display','block');
    });

    $('#tourism').on('mouseover',function () {
        $('.ul-item').css('display','none');
        $('.ul-tourism').css('display','block');
    });

    $('.right-li').on('mouseover',function () {
        $(this).children().css('color','#fff');
        $($(this).children().children()[0]).css('color','#fff');
    });

    $('.right-li').on('mouseout',function () {
        $(this).children().css('color','#666');
        $($(this).children().children()[0]).css('color','#018CDF');
    });

    $('#jy').on('click',function () {
        window.location = './join.html'
    });


    $(window).on('scroll',function () {
        if($(window).scrollTop() >= 1300) {
            $('.right-floor').css('display','block');
        } else if ($(window).scrollTop() < 1300) {
            $('.right-floor').css('display','none');
        }
    });

    $('#jump-eat').on('click',function () {
        $(window).scrollTop(1300);
    });

    $('#jump-clothes').on('click',function () {
        $(window).scrollTop(2030);
    });

    $('#jump-entertainment').on('click',function () {
        $(window).scrollTop(2770);
    });

    $('#jump-furniture').on('click',function () {
        $(window).scrollTop(3500);
    });

    $('#jump-retail').on('click',function () {
        $(window).scrollTop(4250);
    });

    $('#jump-cosmetic').on('click',function () {
        $(window).scrollTop(4980);
    });

    $('#jump-building').on('click',function () {
        $(window).scrollTop(5720);
    });


    $('#jump-hotel').on('click',function () {
        $(window).scrollTop(6300);
    });

    $('#jump-tourism').on('click',function () {
        $(window).scrollTop(7045);
    });

    $('#jump-top').on('click',function () {
        $(window).scrollTop(0);
    });

    $('#jx').on('click',function () {
        $('.sec .row').css('display','none');
        $('.logo-box').css('display','block');
        $('.head-nav').css('display','block');

        $('#slider_main_block').children().remove();
        $('#slider_ctrl').children().remove();
        var img = $('<div class="slider-main-img"><a href="#"><img src="http://odho0ke5x.bkt.clouddn.com/goodsimg/1474080582159.jpg?imageMogr2/thumbnail/2000x500!" alt=""/></a></div>')
        $('#slider_main_block').append(img);
    });

    $('#tj').on('click',function () {
        $('.sec .row').css('display','none');
        $('.logo-box').css('display','block');
        $('.head-nav').css('display','block');

        $('#slider_main_block').children().remove();
        $('#slider_ctrl').children().remove();
        var img = $('<div class="slider-main-img"><a href="#"><img src="http://odho0ke5x.bkt.clouddn.com/goodsimg/1474080661768.jpg?imageMogr2/thumbnail/2000x500!" alt=""/></a></div>')
        $('#slider_main_block').append(img);
    });

    $('#jf').on('click',function () {
        $('.sec .row').css('display','none');
        $('.logo-box').css('display','block');
        $('.head-nav').css('display','block');

        $('#slider_main_block').children().remove();
        $('#slider_ctrl').children().remove();
        var img = $('<div class="slider-main-img"><a href="#"><img src="http://odho0ke5x.bkt.clouddn.com/goodsimg/1474080641402.jpg?imageMogr2/thumbnail/2000x500!" alt=""/></a></div>')
        $('#slider_main_block').append(img);
    });

    $('#sy').on('click',function () {
        window.location = './index.html';
    });
})