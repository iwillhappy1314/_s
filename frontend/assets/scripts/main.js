jQuery(document).ready(function($) {

    window.onscroll = function() {navSticky();};

    var header = document.getElementById('masthead');
    var body = document.getElementsByTagName('body')[0];
    var sticky = header.offsetTop + 100;

    function navSticky() {
        if (window.pageYOffset > sticky) {
            header.classList.add('is-sticky');
            body.classList.add('is-sticky');
        } else {
            header.classList.remove('is-sticky');
            body.classList.remove('is-sticky');
        }
    }

    //@see https://www.smartmenus.org/docs/
    $('#primary-menu').smartmenus({
        showFunction: function($ul, complete) {
            $ul.slideDown(100, complete);
        },
        hideFunction: function($ul, complete) {
            $ul.hide(50, complete);
        },
        showTimeout : 0,
        hideTimeout : 0,
    });
});