/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/raw-loader/index.js!./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[4].use[0]!./assets/scripts/plugins/navigation.js":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/index.js!./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[4].use[0]!./assets/scripts/plugins/navigation.js ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "/**\n * File navigation.js.\n *\n * Handles toggling the navigation menu for small screens and enables TAB key\n * navigation support for dropdown menus.\n */\n(function () {\n  var container, button, menu, links, i, len;\n  container = document.getElementById('site-navigation');\n\n  if (!container) {\n    return;\n  }\n\n  button = container.getElementsByTagName('button')[0];\n\n  if ('undefined' === typeof button) {\n    return;\n  }\n\n  menu = container.getElementsByTagName('ul')[0]; // Hide menu toggle button if menu is empty and return early.\n\n  if ('undefined' === typeof menu) {\n    button.style.display = 'none';\n    return;\n  }\n\n  menu.setAttribute('aria-expanded', 'false');\n\n  if (-1 === menu.className.indexOf('nav-menu')) {\n    menu.className += ' nav-menu';\n  }\n\n  button.onclick = function () {\n    if (-1 !== container.className.indexOf('is-toggled')) {\n      container.className = container.className.replace(' is-toggled', '');\n      button.setAttribute('aria-expanded', 'false');\n      menu.setAttribute('aria-expanded', 'false');\n    } else {\n      container.className += ' is-toggled';\n      button.setAttribute('aria-expanded', 'true');\n      menu.setAttribute('aria-expanded', 'true');\n    }\n  };\n})();"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[4].use[0]!./assets/scripts/plugins/skip-link-focus-fix.js":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/index.js!./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[4].use[0]!./assets/scripts/plugins/skip-link-focus-fix.js ***!
  \***************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "/**\n * File skip-link-focus-fix.js.\n *\n * Helps with accessibility for keyboard only users.\n *\n * Learn more: https://git.io/vWdr2\n */\n(function () {\n  var isIe = /(trident|msie)/i.test(navigator.userAgent);\n\n  if (isIe && document.getElementById && window.addEventListener) {\n    window.addEventListener('hashchange', function () {\n      var id = location.hash.substring(1),\n          element;\n\n      if (!/^[A-z0-9_-]+$/.test(id)) {\n        return;\n      }\n\n      element = document.getElementById(id);\n\n      if (element) {\n        if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {\n          element.tabIndex = -1;\n        }\n\n        element.focus();\n      }\n    }, false);\n  }\n})();"

/***/ }),

/***/ "./node_modules/script-loader/addScript.js":
/*!*************************************************!*\
  !*** ./node_modules/script-loader/addScript.js ***!
  \*************************************************/
/***/ ((module) => {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	function log(error) {
		(typeof console !== "undefined")
		&& (console.error || console.log)("[Script Loader]", error);
	}

	// Check for IE =< 8
	function isIE() {
		return typeof attachEvent !== "undefined" && typeof addEventListener === "undefined";
	}

	try {
		if (typeof execScript !== "undefined" && isIE()) {
			execScript(src);
		} else if (typeof eval !== "undefined") {
			eval.call(null, src);
		} else {
			log("EvalError: No eval function available");
		}
	} catch (error) {
		log(error);
	}
}


/***/ }),

/***/ "./node_modules/script-loader/index.js!./assets/scripts/plugins/navigation.js":
/*!************************************************************************************!*\
  !*** ./node_modules/script-loader/index.js!./assets/scripts/plugins/navigation.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! !!./node_modules/script-loader/addScript.js */ "./node_modules/script-loader/addScript.js")(__webpack_require__(/*! !!./node_modules/raw-loader/index.js!./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[4].use[0]!./assets/scripts/plugins/navigation.js */ "./node_modules/raw-loader/index.js!./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[4].use[0]!./assets/scripts/plugins/navigation.js"))

/***/ }),

/***/ "./node_modules/script-loader/index.js!./assets/scripts/plugins/skip-link-focus-fix.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/script-loader/index.js!./assets/scripts/plugins/skip-link-focus-fix.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! !!./node_modules/script-loader/addScript.js */ "./node_modules/script-loader/addScript.js")(__webpack_require__(/*! !!./node_modules/raw-loader/index.js!./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[4].use[0]!./assets/scripts/plugins/skip-link-focus-fix.js */ "./node_modules/raw-loader/index.js!./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[4].use[0]!./assets/scripts/plugins/skip-link-focus-fix.js"))

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************!*\
  !*** ./assets/scripts/main.js ***!
  \********************************/


__webpack_require__(/*! script-loader!./plugins/navigation */ "./node_modules/script-loader/index.js!./assets/scripts/plugins/navigation.js");

__webpack_require__(/*! script-loader!./plugins/skip-link-focus-fix */ "./node_modules/script-loader/index.js!./assets/scripts/plugins/skip-link-focus-fix.js");

(function ($) {
  var header = document.getElementById('masthead');
  var body = document.getElementsByTagName('body')[0];
  var spaceName = {};

  spaceName.init = function () {
    this.ajaxLoading();
    this.slider();
    this.smartMenu();
    this.closeCartDrawer();
    this.navTree();
    this.stickySidebar();
    this.accordion();
    this.tab();
    this.lazyYoutube();
    this.initIsotope();
  };
  /**
   * 判断是否为移动端
   */


  spaceName.isMobile = function (opts) {
    var mobileRE = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;
    var notMobileRE = /CrOS/;
    var tabletRE = /android|ipad|playbook|silk/i;
    if (!opts) opts = {};
    var ua = opts.ua;
    if (!ua && typeof navigator !== 'undefined') ua = navigator.userAgent;

    if (ua && ua.headers && typeof ua.headers['user-agent'] === 'string') {
      ua = ua.headers['user-agent'];
    }

    if (typeof ua !== 'string') return false;
    var result = mobileRE.test(ua) && !notMobileRE.test(ua) || !!opts.tablet && tabletRE.test(ua);

    if (!result && opts.tablet && opts.featureDetect && navigator && navigator.maxTouchPoints > 1 && ua.indexOf('Macintosh') !== -1 && ua.indexOf('Safari') !== -1) {
      result = true;
    }

    return result;
  };
  /**
   * Ajax loading style
   */


  spaceName.ajaxLoading = function () {
    var $loading = $('#ajax-loading').hide();
    $(document).ajaxStart(function () {
      $loading.show();
    }).ajaxStop(function () {
      $loading.hide();
    });
  };
  /**
   * Smart dropdown menu
   */


  spaceName.smartMenu = function () {
    //@see https://www.smartmenus.org/docs/
    $('.sm, .product-categories').smartmenus({
      showFunction: function showFunction($ul, complete) {
        $ul.slideDown(100, complete);
      },
      hideFunction: function hideFunction($ul, complete) {
        $ul.hide();
      },
      showTimeout: 0,
      hideTimeout: 100
    });
  };

  spaceName.slider = function () {
    /*------------------------------------
    3. Slider
    --------------------------------------*/

    /*---------------------
    Main Slider
    -----------------------*/
    if ($(".swiper-main-slider").length !== 0) {
      //Slider Animated Caption
      var swiper = new Swiper('.wprs-swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 0,
        loop: true,
        simulateTouch: true,
        autoplay: 5000,
        speed: 1000,
        onSlideChangeEnd: function onSlideChangeEnd(swiper) {}
      });
      swiper.on('slideChange', function () {
        $('.swiper-slide').each(function () {
          if ($(this).index() === swiper.activeIndex) {
            // Fadein in active slide
            $(this).find('.slider-content').fadeIn(300);
          } else {
            // Fadeout in inactive slides
            $(this).find('.slider-content').fadeOut(300);
          }
        });
      });
    }
    /*---------------------
    Main Slider Fade Effect
    -----------------------*/


    if ($(".swiper-main-slider-fade").length !== 0) {
      //Slider Animated Caption
      var swiper = new Swiper('.wprs-swiper-container', {
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 0,
        loop: true,
        simulateTouch: true,
        autoplay: 5000,
        speed: 1000
      });
      swiper.on('slideChange', function () {
        $('.swiper-slide').each(function () {
          if ($(this).index() === swiper.activeIndex) {
            // Fadein in active slide
            $(this).find('.slider-content').fadeIn(300);
          } else {
            // Fadeout in inactive slides
            $(this).find('.slider-content').fadeOut(300);
          }
        });
      });
    }
    /*---------------------
    Parallax Slider
    -----------------------*/


    if ($("#swiper-parallax").length !== 0) {
      var swiper = new Swiper('.wprs-swiper-container', {
        parallax: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 0,
        loop: false,
        simulateTouch: true,
        autoplay: false,
        speed: 1000
      });
    }
  };

  spaceName.initIsotope = function () {
    if ($(".js-gallery-items").length > 0) {
      var jQuerygrid = $(".gallery-items").isotope({
        singleMode: true,
        columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
        itemSelector: ".gallery-item, .gallery-item-second, .gallery-item-three",
        resizable: true,
        transformsEnabled: true,
        transitionDuration: "700ms"
      });
      jQuerygrid.imagesLoaded(function () {
        jQuerygrid.isotope("layout");
      });
      $(".gallery-filters").on("click", "a.gallery-filter", function (b) {
        b.preventDefault();
        var c = $(this).attr("data-filter");
        jQuerygrid.isotope({
          filter: c
        });
        $(".gallery-filters a").removeClass("gallery-filter-active");
        $(this).addClass("gallery-filter-active");
      });
    }
  };
  /**
   * Sticky Sidebar
   *
   * div.js-sticky-left>div.theiaStickySidebar | div.js-sticky-right>div
   */


  spaceName.stickySidebar = function () {
    if ($(document).width() > 1024 && $.isFunction($.fn.theiaStickySidebar)) {
      $('.js-sticky-left, .js-sticky-right').theiaStickySidebar({
        additionalMarginTop: 32
      });
    }
  };
  /**
   * Accordion
   *
   * ul.rs-accordion>li>h3+div.rs-accordion__content
   */


  spaceName.accordion = function () {
    $('.rs-accordion > li > .rs-accordion__content').hide();
    $('.rs-accordion > li').click(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active').find('.rs-accordion__content').slideUp();
      } else {
        $('.rs-accordion > li.active .rs-accordion__content').slideUp();
        $('.rs-accordion > li.active').removeClass('active');
        $(this).addClass('active').find('.rs-accordion__content').slideDown();
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


  spaceName.tab = function () {
    // Show the first tab and hide the rest
    $('.rs-tab__nav li:first-child').addClass('active');
    $('.rs-tab__content').hide();
    $('.rs-tab__contents').find('.rs-tab__content:first').show(); // Click function

    $('.rs-tab__nav li').click(function () {
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


  spaceName.lazyYoutube = function () {
    if ($.isFunction($.fn.lazyYT)) {
      $('.js-lazyYT').lazyYT({
        youtube_parameters: 'rel=0',
        loading_text: 'Loading...',
        display_title: false,
        default_ratio: '16:9',
        display_duration: false,
        video_loaded_class: 'lazyYT-video-loaded',
        container_class: 'lazyYT-container'
      });
    } // 给 iframe 添加 wrap, 以实现自适应


    $('.type-docs iframe').wrap("<div class='rs-iframe-wrap' />");
  };
  /**
   * Play video in manigicPopup
   */


  spaceName.popup = function () {
    if ($.isFunction($.fn.magnificPopup)) {
      $('.js-popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
      });
    }
  };
  /**
   * Header sticky
   */


  spaceName.navSticky = function () {
    var sticky = header.offsetTop + 100;

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


  spaceName.closeCartDrawer = function () {
    $('.close-drawer').on('click', function () {
      $('body').removeClass('mobile-toggled').removeClass('drawer-open');
    });
  };
  /**
   * Nav accordion
   */


  spaceName.navTree = function () {
    var $navTreeEl = $('.widget_nav_menu, .widget_product_categories, .widget-nav_menu');

    if ($navTreeEl.length > 0) {
      $navTreeEl.each(function () {
        var element = $(this),
            elementSpeed = element.attr('data-speed'),
            elementEasing = element.attr('data-easing'),
            currentChild = element.find('ul li.current_page_parent .children, ul > li.current_page_item .children, ul > li.current-menu-item .children,  ul > li.current-menu-parent .children, ul > li.current-cat-parent .children, ul > li.current-cat.cat-parent .children'),
            currentSubmenu = element.find('ul li.current_page_parent .sub-menu, ul > li.current_page_item .sub-menu, ul > li.current-menu-item .sub-menu, ul > li.current-menu-parent .sub-menu, ul > li.current-cat-parent .sub-menu, ul > li.current-cat.cat-parent .sub-menu'); // 动画速度

        if (!elementSpeed) {
          elementSpeed = 250;
        } // 动画效果


        if (!elementEasing) {
          elementEasing = 'swing';
        } // 添加 sub-menu 类，添加箭头


        element.find('ul li:has(ul)').addClass('sub-menu');
        element.find('ul li:has(ul) > a').append('<span class="icon"><i class="wpion-angle-down"></i></span>'); // 打开当前菜单的父级

        element.find('ul li.current_page_ancestor, ul li.current_page_parent, ul > li.current_page_item, ul > li.current-menu-parent, ul > li.current-cat-parent').addClass('active');
        currentChild.slideDown(Number(elementSpeed), elementEasing);
        currentSubmenu.slideDown(Number(elementSpeed), elementEasing);
        element.find('ul > li.current-menu-item').parent().parent().slideDown(Number(elementSpeed), elementEasing);
        element.find('ul > li.current-menu-item').parent().parent('li').addClass('active');
        element.find('ul > li.current-cat').parent().parent('li').addClass('active'); // 鼠标划过还是点击显示子菜单

        if (element.hasClass('on-hover')) {
          element.find('ul li:has(ul):not(.active)').hover(function () {
            $(this).children('ul').stop(true, true).slideDown(Number(elementSpeed), elementEasing);
          }, function () {
            $(this).children('ul').delay(250).slideUp(Number(elementSpeed), elementEasing);
          });
        } else {
          // 如果需要父级菜单不能点击，把点击元素设置为 a
          element.find('ul li:has(ul) > a .icon').click(function (e) {
            var childElement = $(this).parent();
            element.find('ul li').not(childElement.parents()).removeClass('active');
            childElement.parent().children('ul').slideToggle(Number(elementSpeed), elementEasing, function () {
              $(this).find('ul').hide();
              $(this).find('li.active').removeClass('active');
            });
            element.find('ul li > ul').not(childElement.parent().children('ul')).not(childElement.parents('ul')).slideUp(Number(elementSpeed), elementEasing);
            childElement.parent('li:has(ul)').toggleClass('active');
            e.preventDefault();
          });
        }
      });
    }
  };
  /**
   * Play video in manigicPopup
   */


  spaceName.wow = function () {
    if ($.isClass('WOW')) {
      new WOW().init();
    }
  };

  $(document).ready(function () {
    spaceName.init();
  });

  window.onscroll = function () {
    spaceName.navSticky();
  };
})(jQuery);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map