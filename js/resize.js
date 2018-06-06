window.onresize = function () {
    var slider_ctrl = document.getElementById('slider_ctrl');
    var lastLi = document.getElementsByClassName('lastLi');
    var many_lists = document.getElementsByClassName('many-lists');
    var nav_list = document.getElementsByClassName('nav-list');
    var jx_content = document.getElementsByClassName('jx-content');
    var jf_content = document.getElementsByClassName('jf-content');
    var tj_content = document.getElementsByClassName('tj-content');
    var imgs = document.getElementsByClassName('slider-main-img');

    var wWidth = document.body.clientWidth;
    jx_content[0].style.width = wWidth * 0.85 + 'px';
    jf_content[0].style.width = wWidth * 0.85 + 'px';
    tj_content[0].style.width = wWidth * 0.85 + 'px';
    if (jx_content[0].style.display == 'block') {
        var jxlen = Math.floor(jx_content[0].clientWidth / 330);
        jx_content[0].style.width = 330 * jxlen + 10 + 'px';
        var jxleft = wWidth - jx_content[0].clientWidth;
        jx_content[0].style.marginLeft = jxleft / 2 + 'px';
    }
    if (jf_content[0].style.display == 'block') {
        var jflen = Math.floor(jf_content[0].clientWidth / 290);
        jf_content[0].style.width = 290 * jflen + 'px';
        var jfleft = wWidth - jf_content[0].clientWidth;
        jf_content[0].style.marginLeft = jfleft / 2 + 'px';
    }

    if (tj_content[0].style.display == 'block') {
        var tjlen = Math.floor(tj_content[0].clientWidth / 290);
        tj_content[0].style.width = 290 * tjlen + 10 + 'px';
        var tjleft = wWidth - tj_content[0].clientWidth;
        tj_content[0].style.marginLeft = tjleft / 2 + 'px';
    }
    for (var i = 0; i < lastLi.length; i++) {
        lastLi[i].style.left = '0';
    }
    many_lists[0].style.left = (parseInt(document.body.clientWidth * 0.0837) + 175) + 'px';
    slider_ctrl.style.marginLeft = (document.body.clientWidth / 2 - (15 * imgs.length + 10 * imgs.length) / 2) + 'px';
}