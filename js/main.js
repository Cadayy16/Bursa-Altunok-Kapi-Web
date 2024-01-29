$(function () {

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });

    $('.menu-trigger').on('click', function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
        $('body').toggleClass('hidden');
        $(window).scrollTop(0);
        return false;
    });

    $('.menu li .sub-menu').parent().append('<span class="sub-down"><i class="fa fa-angle-down"></i></span>');
    $('.sub-down').parent().find('a').on('click', function () {
        $(this).toggleClass('active');
        $(this).parent().find('.sub-menu').toggle();
    });
});