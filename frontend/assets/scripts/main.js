'use strict';

require('script-loader!./plugins/navigation');
require('script-loader!./plugins/skip-link-focus-fix');

import {isMobile} from './components/helpers';
import {navTree} from './components/nav-tree';
import {smartMenu} from './components/nav/smart-menu';
//import {mainSwiper} from './components/swiper';
import {isotope} from './components/isotope';

(function($) {

    const header = document.getElementById('masthead');
    const body = document.getElementsByTagName('body')[0];

    const spaceName = {};

    spaceName.init = function() {
        this.ajaxLoading();
        //mainSwiper();
        smartMenu();
        //menuToggle();
        //meanMenu();
        this.closeCartDrawer();
        navTree();
        this.stickySidebar();
        this.accordion();
        this.tab();
        this.lazyYoutube();
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
     * Sticky Sidebar
     *
     * div.js-sticky-left>div.theiaStickySidebar | div.js-sticky-right>div
     */
    spaceName.stickySidebar = function() {
        if ($(document).width() > 1024 && $.isFunction($.fn.theiaStickySidebar)) {
            $('.js-sticky-left, .js-sticky-right').theiaStickySidebar({
                additionalMarginTop: 32,
            });
        }
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
     * Lazy Load Youtube Video
     */
    spaceName.lazyYoutube = function() {

        if ($.isFunction($.fn.lazyYT)) {
            $('.js-lazyYT').lazyYT({
                youtube_parameters: 'rel=0',
                loading_text      : 'Loading...',
                display_title     : false,
                default_ratio     : '16:9',
                display_duration  : false,
                video_loaded_class: 'lazyYT-video-loaded',
                container_class   : 'lazyYT-container',
            });
        }


        // 给 iframe 添加 wrap, 以实现自适应
         $('.type-docs iframe').wrap("<div class='rs-iframe-wrap' />");

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
     * Header sticky
     */
    spaceName.navSticky = function() {
        const sticky = header.offsetTop + 100;

        if (window.scrollY > sticky) {
            header.classList.add('is-sticky');
            body.classList.add('is-sticky');
        } else {
            header.classList.remove('is-sticky');
            body.classList.remove('is-sticky');
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
        spaceName.navSticky();
    };

})(jQuery);
