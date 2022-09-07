'use strict';

var loadjs = require('loadjs');

import footerNav from './components/footer';

const dropdownEl = document.querySelectorAll('.rs-dropdown-toggle');
const popoverEl = document.querySelectorAll('.rs-popover');
const toolTipEL = $('[data-tippy-content]');
const youtubeEl = document.querySelectorAll('.rs-lazyYT');
const navTreeEl = $('.widget_nav_menu, .widget_product_categories, .widget-nav_menu');
const sidebarEL = $('.rs-sticky-left, .rs-sticky-right');
const popupEL = $('.rs-popup');
const isotopeEL = $('.rs-isotope__filter');
const meanMenuEL = $('.rs-mean-menu');
const accordionEL = $('.rs-accordion-container');
const swiperEL = $('.rs-swiper-container');
const wowEL = $('.wow');
const scrollSpyEL = $('.rs-scroll-nav');

if (dropdownEl.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'js/dropdown.js'], 'dropdown');
}

if (popoverEl.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'js/popover.js'], 'popover');
}

if (toolTipEL.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'js/tooltip.js'], 'tooltip');
}

if (wowEL.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'js/wow.js'], 'wow');
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
    loadjs([wenpriseSettings.staticPath + 'js/meanmenu.js'], 'meanmenu');
}

if (swiperEL.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'js/swiper.js'], 'swiper');
}

if (wowEL.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'js/wow.js'], 'wow');
}

if (scrollSpyEL.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'js/scrollspy.js'], 'scrollspy');
}

footerNav();
