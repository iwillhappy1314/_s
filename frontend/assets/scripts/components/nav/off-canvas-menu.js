function menuToggle() {
    $('body').append('<div class="f-body-cover hidden" />');
    $('.menu-toggle').click(function() {
        $('body').toggleClass('f-menu-toggled');
        $('.f-body-cover').toggleClass('hidden');
        $('#site-navigation').toggleClass('is-toggled');
        $(this).toggleClass('is-toggled');
    });

    /**
     * 移动端 Accordion 效果
     */
    $('#f-mobile-menu > ul > li > a').click(function() {

        var checkElement = $(this).next();

        $('#f-mobile-menu li').removeClass('active');
        $(this).closest('li').addClass('active');

        if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            $(this).closest('li').removeClass('active');
            checkElement.slideUp('fast');
        }

        if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('#f-mobile-menu ul ul:visible').slideUp('fast');
            checkElement.slideDown('fast');
        }

        return !checkElement.is('ul');
    });
}

export {menuToggle};
