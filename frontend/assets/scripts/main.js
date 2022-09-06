'use strict';

var loadjs = require('loadjs');

//import Tooltip from './components/tooltip';
//import {mainSwiper} from './components/swiper';
import footerNav from './components/footer';

const dropdownEl = document.querySelectorAll('.rs-dropdown-toggle');
const popoverEl = document.querySelectorAll('.rs-popover');
const youtubeEl = document.querySelectorAll('.rs-lazyYT');
const navTreeEl = $('.widget_nav_menu, .widget_product_categories, .widget-nav_menu');
const sidebarEL = $('.rs-sticky-left, .rs-sticky-right');
const popupEL = $('.rs-popup');
const isotopeEL = $('.rs-gallery-items');
const meanMenuEL = $('.rs-mean-menu');
const accordionEL = $('.rs-accordion-container');
const swiperEL = $('.rs-swiper-container');

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

if (popupEL.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'js/magnific-popup.js'], 'magnific-popup');
}

if (isotopeEL.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'js/isotope.js'], 'isotope');
}

if (accordionEL.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'js/accordion.js'], 'accordion');
}

if (meanMenuEL.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'js/accordion.js'], 'meanmenu');
}

if (swiperEL.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'js/swiper.js'], 'swiper');
}


(function($) {

    const spaceName = {};

    spaceName.init = function() {
        this.ajaxLoading();
        footerNav();
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

    spaceName.wow = function() {
        if ($.isClass('WOW')) {
            new WOW().init();
        }
    };

    $(document).ready(function() {
        spaceName.init();
    });

})(jQuery);
