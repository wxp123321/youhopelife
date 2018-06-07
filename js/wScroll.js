$(window).on('scroll', function () {
    if ($(window).scrollTop() >= 1300 && $('.jx-content')[0].style.display != 'block' && $('.tj-content')[0].style.display != 'block' && $('.jf-content')[0].style.display != 'block') {
        $('.right-floor').css('display', 'block');
    } else if ($(window).scrollTop() < 1300) {
        $('.right-floor').css('display', 'none');
    }
});