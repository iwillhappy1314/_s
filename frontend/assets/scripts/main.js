'use strict';

require('script-loader!./plugins/navigation');
require('script-loader!./plugins/skip-link-focus-fix');

import {isMobile} from './components/helpers';
import {navTree} from './components/nav-tree';
import RevealHeader from './components/nav/reveal-header';
import {smartMenu} from './components/nav/smart-menu';
import {stickyNav} from './components/nav/sticky';
//import {mainSwiper} from './components/swiper';
import {isotope} from './components/isotope';
import {stickySidebar} from './components/sticky-sidebar';
import {lazyYoutube} from './components/lazy-youtube';

(function($) {

    const spaceName = {};

    spaceName.init = function() {
        this.ajaxLoading();
        //mainSwiper();
        smartMenu();
        //menuToggle();
        //meanMenu();
        this.closeCartDrawer();
        navTree();
        RevealHeader();
        stickySidebar();
        this.accordion();
        this.tab();
        lazyYoutube();
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
     * Accordion
     *
     * ul.rs-accordion>li>h3+div.rs-accordion__content
     */
    spaceName.accordion = function() {
        $('.rs-accordion > li > .rs-accordion__content').hide();

        $('.rs-accordion > li').click(function() {
            if ($(this).hasClass('active')) {
                $(this).
                    removeClass('active').
                    find('.rs-accordion__content').
                    slideUp();
            } else {
                $('.rs-accordion > li.active .rs-accordion__content').slideUp();
                $('.rs-accordion > li.active').removeClass('active');
                $(this).
                    addClass('active').
                    find('.rs-accordion__content').
                    slideDown();
            }
            return false;
        });
    };

    /**
     * Simple tab
     *
     * ul.rs-tab__nav>li*3>a[href=#rs-$]>{Nav-$}
     * div.rs-tab__contents>div.rs-tab__content#rs-$*3>{Content-$}
     */
    spaceName.tab = function() {
        // Show the first tab and hide the rest
        $('.rs-tab__nav li:first-child').addClass('active');
        $('.rs-tab__content').hide();
        $('.rs-tab__contents').find('.rs-tab__content:first').show();

        // Click function
        $('.rs-tab__nav li').click(function() {
            $('.rs-tab__nav li').removeClass('active');
            $(this).addClass('active');
            $('.rs-tab__content').hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });
    };

    /**
     * Play video in manigicPopup
     */
    spaceName.popup = function() {
        if ($.isFunction($.fn.magnificPopup)) {
            $('.js-popup-youtube').magnificPopup({
                disableOn   : 700,
                type        : 'iframe',
                mainClass   : 'mfp-fade',
                removalDelay: 160,
                preloader   : false,

                fixedContentPos: false,
            });
        }
    };

    /**
     * Close cart drawer
     */
    spaceName.closeCartDrawer = function() {
        $('.close-drawer').on('click', function() {
            $('body').removeClass('mobile-toggled').removeClass('drawer-open');
        });
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

    window.onscroll = function() {
        stickyNav();
    };

})(jQuery);
