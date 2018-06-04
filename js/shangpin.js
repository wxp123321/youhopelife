
window.onresize = function (ev) {
    var wWidth = document.body.clientWidth;
    var tj_content = document.getElementsByClassName('tj-content');
    var tjlen = Math.floor(tj_content[0].clientWidth / 290);
    tj_content[0].style.width = 290 * tjlen + 10 + 'px';
    var tjleft = wWidth - tj_content[0].clientWidth;
    tj_content[0].style.marginLeft = tjleft / 2 + 'px';
}
window.onresize();