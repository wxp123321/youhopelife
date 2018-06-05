var flag = false;
var flag1 = false;
var x = {
    start: 0,
    end: 0
}

var json = {
    '火锅': [{
        'pname': '商品1',
        'sname': '商家1',
        'now_price': '888',
        'y_price': '999',
        'number': '654',
        'imgUrl': 'http://odho0ke5x.bkt.clouddn.com/goodsimg/1487535290891.jpg?imageMogr2/thumbnail/230x230!'
    }],
    '自助餐': [{
        'pname': '商品2',
        'sname': '商家2',
        'now_price': '777',
        'y_price': '888',
        'number': '654',
        'imgUrl': 'images/rj.jpg'
    }]
}


function cut(jsonArr) {
    var html = '';
    for (var i = 0; i < jsonArr.length; i++) {
        html += '<div class="jf-product-list">\n' +
            '                    <p class="s-name">' + jsonArr[i].sname + '</p>\n' +
            '                    <img class="sz-img" src="">\n' +
            '                    <p>' + jsonArr[i].pname + '</p>\n' +
            '                    <div class="tj">\n' +
            '                        <span>价格：￥' + jsonArr[i].now_price + '</span>\n' +
            '                        <span class="yj-p">原价：￥' + jsonArr[i].y_price + '</span>\n' +
            '                        <span class="xsl">销售量：' + jsonArr[i].number
        '</span>\n' +
        '                    </div>\n' +
        '                    <div>\n' +
        '                        <button>购买</button>\n' +
        '                    </div>\n' +
        '                </div>';
    }
    return html;
}

$(function () {

    var data = json['火锅'];
    var html = cut(data);
    $('.eat-f')[0].innerHTML = html;
    for(var i = 0;i<data.length;i++){
        $($('.sz-img')[i]).attr('src',data[i].imgUrl);
    }

    $('.item').on('mouseover', function (e) {
        var width = parseInt($(this).width() / 2 - 15);
        $(this).parent().children(':last-child').css('left', this.offsetLeft + width);
        var data = json[$(this).html()];
        console.log($(this).html());
        var html = cut(data);
        $(this).parent().parent().parent().next().children().remove();
        $(this).parent().parent().parent().next().html(html);
        for(var i = 0;i<data.length;i++){
            $($('.sz-img')[i]).attr('src',data[i].imgUrl);
        }
    });

    $('.nav-item').on('mouseenter', function (e) {
        flag1 = false;
        x.start = e.clientX;
        $('.nav-item').css('background', '#404040');
        $('.many-lists').css('display', 'block');
        $(this).css('background', 'rgb(236,105,23)');
    });

    $('.nav-list').on('mouseleave', function (e) {
        x.end = e.clientX;
        if (x.end - x.start < 0) {
            flag1 = true;
            if (!flag) {
                $('.icon-xuanzhuan').css('transform', 'rotate(180deg)');
                $('.nav-list').css('display', 'none');
                $('.nav-item').css('background', '#404040');
                $('.many-lists').css('display', 'none');
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
        if (flag1) {
            $('.icon-xuanzhuan').css('transform', 'rotate(180deg)');
            $('.nav-list').css('display', 'none');
            $('.many-lists').css('display', 'none');
            flag = false;
            flag1 = false;
        }
    });

    $('.head-nav').on('mouseleave', function () {
        $('.icon-xuanzhuan').css('transform', 'rotate(180deg)');
        $('.nav-list').css('display', 'none');
        $('.many-lists').css('display', 'none');
        flag = false;
        flag1 = false;
    });

    $('#eat').on('mouseover', function () {
        $('.ul-item').css('display', 'none');
        $('.ul-eat').css('display', 'block');
    });

    $('#clothes').on('mouseover', function () {
        $('.ul-item').css('display', 'none');
        $('.ul-clothes').css('display', 'block');
    });

    $('#entertainment').on('mouseover', function () {
        $('.ul-item').css('display', 'none');
        $('.ul-entertainment').css('display', 'block');
    });

    $('#furniture').on('mouseover', function () {
        $('.ul-item').css('display', 'none');
        $('.ul-furniture').css('display', 'block');
    });

    $('#retail').on('mouseover', function () {
        $('.ul-item').css('display', 'none');
        $('.ul-retail').css('display', 'block');
    });

    $('#cosmetic').on('mouseover', function () {
        $('.ul-item').css('display', 'none');
        $('.ul-cosmetic').css('display', 'block');
    });

    $('#building').on('mouseover', function () {
        $('.ul-item').css('display', 'none');
        $('.ul-building').css('display', 'block');
    });

    $('#tourism').on('mouseover', function () {
        $('.ul-item').css('display', 'none');
        $('.ul-tourism').css('display', 'block');
    });

    $('.right-li').on('mouseover', function () {
        $(this).children().css('color', '#fff');
        $($(this).children().children()[0]).css('color', '#fff');
    });

    $('.right-li').on('mouseout', function () {
        $(this).children().css('color', '#666');
        $($(this).children().children()[0]).css('color', '#018CDF');
    });

    $('#jy').on('click', function () {
        window.location = './join.html'
    });


    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 1300 && $('.jx-content')[0].style.display != 'block' && $('.tj-content')[0].style.display != 'block' && $('.jf-content')[0].style.display != 'block') {
            $('.right-floor').css('display', 'block');
        } else if ($(window).scrollTop() < 1300) {
            $('.right-floor').css('display', 'none');
        }
    });

    $('#jump-eat').on('click', function () {
        $(window).scrollTop(1300);
    });

    $('#jump-clothes').on('click', function () {
        $(window).scrollTop(2030);
    });

    $('#jump-entertainment').on('click', function () {
        $(window).scrollTop(2770);
    });

    $('#jump-furniture').on('click', function () {
        $(window).scrollTop(3500);
    });

    $('#jump-retail').on('click', function () {
        $(window).scrollTop(4250);
    });

    $('#jump-cosmetic').on('click', function () {
        $(window).scrollTop(4980);
    });

    $('#jump-building').on('click', function () {
        $(window).scrollTop(5720);
    });


    $('#jump-hotel').on('click', function () {
        $(window).scrollTop(6300);
    });

    $('#jump-tourism').on('click', function () {
        $(window).scrollTop(7045);
    });

    $('#jump-top').on('click', function () {
        $(window).scrollTop(0);
    });

    $('#jx').on('click', function () {
        $('.sec .row').css('display', 'none');
        $('.logo-box').css('display', 'block');
        $('.head-nav').css('display', 'block');
        $('.jf-content').css('display', 'none');
        $('.jx-content').css('display', 'block');
        $('.tj-content').css('display', 'none');

        $('#slider_main_block').children().remove();
        $('#slider_ctrl').children().remove();
        var img = $('<div class="slider-main-img"><a href="#"><img src="http://odho0ke5x.bkt.clouddn.com/goodsimg/1474080582159.jpg?imageMogr2/thumbnail/2000x500!" alt=""/></a></div>')
        $('#slider_main_block').append(img);
        window.onresize();
    });

    $('#tj').on('click', function () {
        $('.sec .row').css('display', 'none');
        $('.logo-box').css('display', 'block');
        $('.head-nav').css('display', 'block');
        $('.jf-content').css('display', 'none');
        $('.jx-content').css('display', 'none');
        $('.tj-content').css('display', 'block');

        $('#slider_main_block > div').remove();
        $('#slider_ctrl').children().remove();
        var img = $('<div class="slider-main-img"><a href="#"><img src="http://odho0ke5x.bkt.clouddn.com/goodsimg/1474080661768.jpg?imageMogr2/thumbnail/2000x500!" alt=""/></a></div>')
        $('#slider_main_block').append(img);
        window.onresize();
    });

    $('#jf').on('click', function () {
        $('.sec .row').css('display', 'none');
        $('.logo-box').css('display', 'block');
        $('.head-nav').css('display', 'block');
        $('.jf-content').css('display', 'block');
        $('.jx-content').css('display', 'none');
        $('.tj-content').css('display', 'none');

        $('#slider_main_block').children().remove();
        $('#slider_ctrl').children().remove();
        var img = $('<div class="slider-main-img"><a href="#"><img src="http://odho0ke5x.bkt.clouddn.com/goodsimg/1474080641402.jpg?imageMogr2/thumbnail/2000x500!" alt=""/></a></div>')
        $('#slider_main_block').append(img);
        window.onresize();
    });

    $('#sy').on('click', function () {
        window.location = './index.html';
    });

    $('.my-city').on('click', function () {
        window.location = 'city.html?city=' + $('.my-city').html();
    });


    var city = getUrlParam('city');
    $('.my-city').html(city);

    var tiao = getUrlParam('tiao');
    $('#' + tiao).trigger('click');
})

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return decodeURI(r[2]);
    return null; //返回参数值
}
