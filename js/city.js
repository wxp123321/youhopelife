$(function () {
    var city = getUrlParam('city');
    console.log(city);
    $('.y-city').html(city);

    $('.city-ul li').on('mouseover',function () {
        $('.city-ul li').css('background','#fff');
        $('.first-span').css('color','#666');
        $('.first-span').css('background','#fff');
        $(this).css('background','rgb(240,240,240)');
        $($(this).children()[0]).css('color','#fff');
        $($(this).children()[0]).css('background','rgb(0,140,225)');
    });

    $('.city-ul span').on('click',function () {
       window.location = './index.html?city='+$(this).html();
    });

    $('.hot-city a').on('click',function () {
        window.location = './index.html?city='+$(this).html();
    });
})

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return decodeURI(r[2]); return null; //返回参数值
}