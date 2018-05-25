window.onresize = function () {
    var slider_ctrl = document.getElementById('slider_ctrl');
    var lastLi = document.getElementsByClassName('lastLi');
    var many_lists = document.getElementsByClassName('many-lists');
    var nav_list = document.getElementsByClassName('nav-list');
    for(var i = 0;i<lastLi.length;i++){
        lastLi[i].style.left = '40px';
    }
    many_lists[0].style.left = (parseInt(document.body.clientWidth*0.0837)+175)+'px';
    slider_ctrl.style.marginLeft = (document.body.clientWidth/2-(15*imgs.length+10*imgs.length)/2)+'px';
}