'use strict';

var loadjs = require('loadjs');

//import {navTree} from './components/nav-tree';
//import Tooltip from './components/tooltip';
//import {mainSwiper} from './components/swiper';
import {isotope} from './components/isotope';
import footerNav from './components/footer';

const dropdownEl = document.querySelectorAll('.rs-dropdown-toggle');
const popoverEl = document.querySelectorAll('.rs-popover');
const youtubeEl = document.querySelectorAll('.js-lazyYT');
const navTreeEl = $('.widget_nav_menu, .widget_product_categories, .widget-nav_menu');
const sidebarEL = $('.js-sticky-left, .js-sticky-right');

if (dropdownEl.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'js/dropdown.js'], 'dropdown');
}

if (popoverEl.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'js/popover.js'], 'popover');
}

if (youtubeEl.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'js/lazy-youtube.js'], 'lazy-youtube');
}

if (navTreeEl.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'js/nav-tree.js'], 'nav-tree');
}

if (sidebarEL.length > 0 && $(document).width() > 1024) {
    loadjs([wenpriseSettings.staticPath + 'js/sticky-sidebar.js'], 'sticky-sidebar');
}

(function($) {

    const spaceName = {};

    spaceName.init = function() {
        this.ajaxLoading();
        footerNav();
        isotope();
    };

    /**
     * Ajax loading style
     */
    spaceName.ajaxLoading = function() {
        const $loading = $('#ajax-loading').hide();

        $(document).ajaxStart(function() {
            $loading.show();
        }).ajaxStop(function() {
            $loading.hide();
        });
    };


    /**
     * Play video in manigicPopup
     */
    spaceName.popup = function() {
        if ($.isFunction($.fn.magnificPopup)) {
            $('.js-popup-youtube').magnificPopup({
                disableOn      : 700,
                type           : 'iframe',
                mainClass      : 'mfp-fade',
                removalDelay   : 160,
                preloader      : false,
                fixedContentPos: false,
            });
        }
    };

    /**
     * Play video in manigicPopup
     */
    spaceName.wow = function() {
        if ($.isClass('WOW')) {
            new WOW().init();
        }
    };

    $(document).ready(function() {
        spaceName.init();
    });

})(jQuery);
