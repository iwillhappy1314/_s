/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/scripts/components/helpers.js":
/*!**********************************************!*\
  !*** ./assets/scripts/components/helpers.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMobile": () => (/* binding */ isMobile)
/* harmony export */ });
/**
 *  判断是否为移动端
 * @param opts
 * @returns {boolean}
 */
function isMobile(opts) {
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
}



/***/ }),

/***/ "./assets/scripts/components/isotope.js":
/*!**********************************************!*\
  !*** ./assets/scripts/components/isotope.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isotope": () => (/* binding */ isotope)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
function isotope() {
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
}



/***/ }),

/***/ "./assets/scripts/components/lazy-youtube.js":
/*!***************************************************!*\
  !*** ./assets/scripts/components/lazy-youtube.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lazyYoutube": () => (/* binding */ lazyYoutube)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
__webpack_require__(/*! script-loader!../plugins/lazyYT */ "./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/index.js!./assets/scripts/plugins/lazyYT.js");

function lazyYoutube() {
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


  $('.type-docs iframe').wrap('<div class=\'rs-iframe-wrap\' />');
}



/***/ }),

/***/ "./assets/scripts/components/nav-tree.js":
/*!***********************************************!*\
  !*** ./assets/scripts/components/nav-tree.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navTree": () => (/* binding */ navTree)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
function navTree() {
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
}



/***/ }),

/***/ "./assets/scripts/components/nav/reveal-header.js":
/*!********************************************************!*\
  !*** ./assets/scripts/components/nav/reveal-header.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RevealHeader)
/* harmony export */ });
function RevealHeader() {
  var body = document.body;
  var scrollUp = 'scroll-up';
  var scrollDown = 'scroll-down';
  var lastScroll = 0;
  window.addEventListener('scroll', function () {
    var currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      body.classList.remove(scrollUp);
      return;
    }

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
      // down
      body.classList.remove(scrollUp);
      body.classList.add(scrollDown);
    } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
      // up
      body.classList.remove(scrollDown);
      body.classList.add(scrollUp);
    }

    lastScroll = currentScroll;
  });
}

/***/ }),

/***/ "./assets/scripts/components/nav/smart-menu.js":
/*!*****************************************************!*\
  !*** ./assets/scripts/components/nav/smart-menu.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "smartMenu": () => (/* binding */ smartMenu)
/* harmony export */ });
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");
function smartMenu() {
  //@see https://www.smartmenus.org/docs/
  jQuery('.sm, .product-categories').smartmenus({
    showFunction: function showFunction($ul, complete) {
      $ul.slideDown(100, complete);
    },
    hideFunction: function hideFunction($ul, complete) {
      $ul.hide();
    },
    showTimeout: 0,
    hideTimeout: 100
  });
}



/***/ }),

/***/ "./assets/scripts/components/nav/sticky.js":
/*!*************************************************!*\
  !*** ./assets/scripts/components/nav/sticky.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stickyNav": () => (/* binding */ stickyNav)
/* harmony export */ });
function stickyNav() {
  var header = document.getElementById('masthead');
  var body = document.getElementsByTagName('body')[0];
  var sticky = header.offsetTop + 0;

  if (body.classList.contains('rs-sticky')) {
    if (window.scrollY > sticky) {
      body.classList.add('is-sticky');
    } else {
      body.classList.remove('is-sticky');
    }
  }
}



/***/ }),

/***/ "./assets/scripts/components/sticky-sidebar.js":
/*!*****************************************************!*\
  !*** ./assets/scripts/components/sticky-sidebar.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stickySidebar": () => (/* binding */ stickySidebar)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
__webpack_require__(/*! script-loader!theia-sticky-sidebar */ "./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/index.js!./node_modules/.pnpm/theia-sticky-sidebar@1.7.0/node_modules/theia-sticky-sidebar/dist/theia-sticky-sidebar.js");

function stickySidebar() {
  if ($(document).width() > 1024 && $.isFunction($.fn.theiaStickySidebar)) {
    $('.js-sticky-left, .js-sticky-right').theiaStickySidebar({
      additionalMarginTop: 32
    });
  }
}



/***/ }),

/***/ "./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./node_modules/.pnpm/babel-loader@8.2.5_xc6oct4hcywdrbo4ned6ytbybm/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[4].use[0]!./assets/scripts/plugins/lazyYT.js":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./node_modules/.pnpm/babel-loader@8.2.5_xc6oct4hcywdrbo4ned6ytbybm/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[4].use[0]!./assets/scripts/plugins/lazyYT.js ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "/*!\n* lazyYT (lazy load YouTube videos)\n* v1.0.1 - 2014-12-30\n* (CC) This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.\n* http://creativecommons.org/licenses/by-sa/4.0/\n* Contributors: https://github.com/tylerpearson/lazyYT/graphs/contributors || https://github.com/daugilas/lazyYT/graphs/contributors\n* \n* Usage: <div class=\"lazyYT\" data-youtube-id=\"laknj093n\" data-parameters=\"rel=0\">loading...</div>\n*/\n;\n\n(function ($) {\n  'use strict';\n\n  function setUp($el, settings) {\n    var width = $el.data('width'),\n        height = $el.data('height'),\n        ratio = $el.data('ratio') ? $el.data('ratio') : settings.default_ratio,\n        id = $el.data('youtube-id'),\n        padding_bottom,\n        innerHtml = [],\n        $thumb,\n        thumb_img,\n        loading_text = $el.text() ? $el.text() : settings.loading_text,\n        youtube_parameters = $el.data('parameters') || '';\n    ratio = ratio.split(\":\"); // width and height might override default_ratio value\n\n    if (typeof width === 'number' && typeof height === 'number') {\n      $el.width(width);\n      padding_bottom = height + 'px';\n    } else if (typeof width === 'number') {\n      $el.width(width);\n      padding_bottom = width * ratio[1] / ratio[0] + 'px';\n    } else {\n      width = $el.width(); // no width means that container is fluid and will be the size of its parent\n\n      if (width == 0) {\n        width = $el.parent().width();\n      }\n\n      padding_bottom = ratio[1] / ratio[0] * 100 + '%';\n    } //\n    // This HTML will be placed inside 'lazyYT' container\n\n\n    innerHtml.push('<div class=\"ytp-thumbnail\">'); // Play button from YouTube (exactly as it is in YouTube)\n\n    innerHtml.push('<div class=\"ytp-large-play-button\"');\n    if (width <= 640) innerHtml.push(' style=\"transform: scale(0.563888888888889);\"');\n    innerHtml.push('>');\n    innerHtml.push('<svg>');\n    innerHtml.push('<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#1F1F1F\" class=\"ytp-large-play-button-svg\" d=\"M84.15,26.4v6.35c0,2.833-0.15,5.967-0.45,9.4c-0.133,1.7-0.267,3.117-0.4,4.25l-0.15,0.95c-0.167,0.767-0.367,1.517-0.6,2.25c-0.667,2.367-1.533,4.083-2.6,5.15c-1.367,1.4-2.967,2.383-4.8,2.95c-0.633,0.2-1.316,0.333-2.05,0.4c-0.767,0.1-1.3,0.167-1.6,0.2c-4.9,0.367-11.283,0.617-19.15,0.75c-2.434,0.034-4.883,0.067-7.35,0.1h-2.95C38.417,59.117,34.5,59.067,30.3,59c-8.433-0.167-14.05-0.383-16.85-0.65c-0.067-0.033-0.667-0.117-1.8-0.25c-0.9-0.133-1.683-0.283-2.35-0.45c-2.066-0.533-3.783-1.5-5.15-2.9c-1.033-1.067-1.9-2.783-2.6-5.15C1.317,48.867,1.133,48.117,1,47.35L0.8,46.4c-0.133-1.133-0.267-2.55-0.4-4.25C0.133,38.717,0,35.583,0,32.75V26.4c0-2.833,0.133-5.95,0.4-9.35l0.4-4.25c0.167-0.966,0.417-2.05,0.75-3.25c0.7-2.333,1.567-4.033,2.6-5.1c1.367-1.434,2.967-2.434,4.8-3c0.633-0.167,1.333-0.3,2.1-0.4c0.4-0.066,0.917-0.133,1.55-0.2c4.9-0.333,11.283-0.567,19.15-0.7C35.65,0.05,39.083,0,42.05,0L45,0.05c2.467,0,4.933,0.034,7.4,0.1c7.833,0.133,14.2,0.367,19.1,0.7c0.3,0.033,0.833,0.1,1.6,0.2c0.733,0.1,1.417,0.233,2.05,0.4c1.833,0.566,3.434,1.566,4.8,3c1.066,1.066,1.933,2.767,2.6,5.1c0.367,1.2,0.617,2.284,0.75,3.25l0.4,4.25C84,20.45,84.15,23.567,84.15,26.4z M33.3,41.4L56,29.6L33.3,17.75V41.4z\"></path>');\n    innerHtml.push('<polygon fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#FFFFFF\" points=\"33.3,41.4 33.3,17.75 56,29.6\"></polygon>');\n    innerHtml.push('</svg>');\n    innerHtml.push('</div>'); // end of .ytp-large-play-button\n\n    innerHtml.push('</div>'); // end of .ytp-thumbnail\n    // Video title (info bar)\n\n    innerHtml.push('<div class=\"html5-info-bar\">');\n    innerHtml.push('<div class=\"html5-title\">');\n    innerHtml.push('<div class=\"html5-title-text-wrapper\">');\n    innerHtml.push('<a id=\"lazyYT-title-', id, '\" class=\"html5-title-text\" target=\"_blank\" tabindex=\"3100\" href=\"//www.youtube.com/watch?v=', id, '\">');\n    innerHtml.push(loading_text);\n    innerHtml.push('</a>');\n    innerHtml.push('</div>'); // .html5-title\n\n    innerHtml.push('</div>'); // .html5-title-text-wrapper\n\n    innerHtml.push('</div>'); // end of Video title .html5-info-bar\n\n    $el.css({\n      'padding-bottom': padding_bottom\n    }).html(innerHtml.join(''));\n\n    if (width > 640) {\n      thumb_img = 'maxresdefault.jpg';\n    } else if (width > 480) {\n      thumb_img = 'sddefault.jpg';\n    } else if (width > 320) {\n      thumb_img = 'hqdefault.jpg';\n    } else if (width > 120) {\n      thumb_img = 'mqdefault.jpg';\n    } else if (width == 0) {\n      // sometimes it fails on fluid layout\n      thumb_img = 'hqdefault.jpg';\n    } else {\n      thumb_img = 'default.jpg';\n    }\n\n    $thumb = $el.find('.ytp-thumbnail').css({\n      'background-image': ['url(//img.youtube.com/vi/', id, '/', thumb_img, ')'].join('')\n    }).addClass('lazyYT-image-loaded').on('click', function (e) {\n      e.preventDefault();\n\n      if (!$el.hasClass('lazyYT-video-loaded') && $thumb.hasClass('lazyYT-image-loaded')) {\n        $el.html('<iframe src=\"//www.youtube.com/embed/' + id + '?autoplay=1&' + youtube_parameters + '\" frameborder=\"0\" allowfullscreen></iframe>').addClass('lazyYT-video-loaded');\n      }\n    });\n    $.getJSON('//gdata.youtube.com/feeds/api/videos/' + id + '?v=2&alt=json', function (data) {\n      $el.find('#lazyYT-title-' + id).text(data.entry.title.$t);\n    });\n  }\n\n  $.fn.lazyYT = function (newSettings) {\n    var defaultSettings = {\n      loading_text: 'Loading...',\n      default_ratio: '16:9',\n      callback: null,\n      // ToDO execute callback if given\n      container_class: 'lazyYT-container'\n    };\n    var settings = $.extend(defaultSettings, newSettings);\n    return this.each(function () {\n      var $el = $(this).addClass(settings.container_class);\n      setUp($el, settings);\n    });\n  };\n})(jQuery);"

/***/ }),

/***/ "./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./node_modules/.pnpm/babel-loader@8.2.5_xc6oct4hcywdrbo4ned6ytbybm/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[4].use[0]!./assets/scripts/plugins/navigation.js":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./node_modules/.pnpm/babel-loader@8.2.5_xc6oct4hcywdrbo4ned6ytbybm/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[4].use[0]!./assets/scripts/plugins/navigation.js ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "/**\n * File navigation.js.\n *\n * Handles toggling the navigation menu for small screens and enables TAB key\n * navigation support for dropdown menus.\n */\n(function () {\n  var container, button, menu, links, i, len;\n  container = document.getElementById('site-navigation');\n\n  if (!container) {\n    return;\n  }\n\n  button = container.getElementsByTagName('button')[0];\n\n  if ('undefined' === typeof button) {\n    return;\n  }\n\n  menu = container.getElementsByTagName('ul')[0]; // Hide menu toggle button if menu is empty and return early.\n\n  if ('undefined' === typeof menu) {\n    button.style.display = 'none';\n    return;\n  }\n\n  menu.setAttribute('aria-expanded', 'false');\n\n  if (-1 === menu.className.indexOf('nav-menu')) {\n    menu.className += ' nav-menu';\n  }\n\n  button.onclick = function () {\n    if (-1 !== container.className.indexOf('is-toggled')) {\n      container.className = container.className.replace(' is-toggled', '');\n      button.setAttribute('aria-expanded', 'false');\n      menu.setAttribute('aria-expanded', 'false');\n    } else {\n      container.className += ' is-toggled';\n      button.setAttribute('aria-expanded', 'true');\n      menu.setAttribute('aria-expanded', 'true');\n    }\n  };\n})();"

/***/ }),

/***/ "./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./node_modules/.pnpm/babel-loader@8.2.5_xc6oct4hcywdrbo4ned6ytbybm/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[4].use[0]!./assets/scripts/plugins/skip-link-focus-fix.js":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./node_modules/.pnpm/babel-loader@8.2.5_xc6oct4hcywdrbo4ned6ytbybm/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[4].use[0]!./assets/scripts/plugins/skip-link-focus-fix.js ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "/**\n * File skip-link-focus-fix.js.\n *\n * Helps with accessibility for keyboard only users.\n *\n * Learn more: https://git.io/vWdr2\n */\n(function () {\n  var isIe = /(trident|msie)/i.test(navigator.userAgent);\n\n  if (isIe && document.getElementById && window.addEventListener) {\n    window.addEventListener('hashchange', function () {\n      var id = location.hash.substring(1),\n          element;\n\n      if (!/^[A-z0-9_-]+$/.test(id)) {\n        return;\n      }\n\n      element = document.getElementById(id);\n\n      if (element) {\n        if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {\n          element.tabIndex = -1;\n        }\n\n        element.focus();\n      }\n    }, false);\n  }\n})();"

/***/ }),

/***/ "./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./node_modules/.pnpm/theia-sticky-sidebar@1.7.0/node_modules/theia-sticky-sidebar/dist/theia-sticky-sidebar.js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./node_modules/.pnpm/theia-sticky-sidebar@1.7.0/node_modules/theia-sticky-sidebar/dist/theia-sticky-sidebar.js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "/*!\n * Theia Sticky Sidebar v1.7.0\n * https://github.com/WeCodePixels/theia-sticky-sidebar\n *\n * Glues your website's sidebars, making them permanently visible while scrolling.\n *\n * Copyright 2013-2016 WeCodePixels and other contributors\n * Released under the MIT license\n */\n\n(function ($) {\n    $.fn.theiaStickySidebar = function (options) {\n        var defaults = {\n            'containerSelector': '',\n            'additionalMarginTop': 0,\n            'additionalMarginBottom': 0,\n            'updateSidebarHeight': true,\n            'minWidth': 0,\n            'disableOnResponsiveLayouts': true,\n            'sidebarBehavior': 'modern',\n            'defaultPosition': 'relative',\n            'namespace': 'TSS'\n        };\n        options = $.extend(defaults, options);\n\n        // Validate options\n        options.additionalMarginTop = parseInt(options.additionalMarginTop) || 0;\n        options.additionalMarginBottom = parseInt(options.additionalMarginBottom) || 0;\n\n        tryInitOrHookIntoEvents(options, this);\n\n        // Try doing init, otherwise hook into window.resize and document.scroll and try again then.\n        function tryInitOrHookIntoEvents(options, $that) {\n            var success = tryInit(options, $that);\n\n            if (!success) {\n                console.log('TSS: Body width smaller than options.minWidth. Init is delayed.');\n\n                $(document).on('scroll.' + options.namespace, function (options, $that) {\n                    return function (evt) {\n                        var success = tryInit(options, $that);\n\n                        if (success) {\n                            $(this).unbind(evt);\n                        }\n                    };\n                }(options, $that));\n                $(window).on('resize.' + options.namespace, function (options, $that) {\n                    return function (evt) {\n                        var success = tryInit(options, $that);\n\n                        if (success) {\n                            $(this).unbind(evt);\n                        }\n                    };\n                }(options, $that))\n            }\n        }\n\n        // Try doing init if proper conditions are met.\n        function tryInit(options, $that) {\n            if (options.initialized === true) {\n                return true;\n            }\n\n            if ($('body').width() < options.minWidth) {\n                return false;\n            }\n\n            init(options, $that);\n\n            return true;\n        }\n\n        // Init the sticky sidebar(s).\n        function init(options, $that) {\n            options.initialized = true;\n\n            // Add CSS\n            var existingStylesheet = $('#theia-sticky-sidebar-stylesheet-' + options.namespace);\n            if (existingStylesheet.length === 0) {\n                $('head').append($('<style id=\"theia-sticky-sidebar-stylesheet-' + options.namespace + '\">.theiaStickySidebar:after {content: \"\"; display: table; clear: both;}</style>'));\n            }\n\n            $that.each(function () {\n                var o = {};\n\n                o.sidebar = $(this);\n\n                // Save options\n                o.options = options || {};\n\n                // Get container\n                o.container = $(o.options.containerSelector);\n                if (o.container.length == 0) {\n                    o.container = o.sidebar.parent();\n                }\n\n                // Create sticky sidebar\n                o.sidebar.parents().css('-webkit-transform', 'none'); // Fix for WebKit bug - https://code.google.com/p/chromium/issues/detail?id=20574\n                o.sidebar.css({\n                    'position': o.options.defaultPosition,\n                    'overflow': 'visible',\n                    // The \"box-sizing\" must be set to \"content-box\" because we set a fixed height to this element when the sticky sidebar has a fixed position.\n                    '-webkit-box-sizing': 'border-box',\n                    '-moz-box-sizing': 'border-box',\n                    'box-sizing': 'border-box'\n                });\n\n                // Get the sticky sidebar element. If none has been found, then create one.\n                o.stickySidebar = o.sidebar.find('.theiaStickySidebar');\n                if (o.stickySidebar.length == 0) {\n                    // Remove <script> tags, otherwise they will be run again when added to the stickySidebar.\n                    var javaScriptMIMETypes = /(?:text|application)\\/(?:x-)?(?:javascript|ecmascript)/i;\n                    o.sidebar.find('script').filter(function (index, script) {\n                        return script.type.length === 0 || script.type.match(javaScriptMIMETypes);\n                    }).remove();\n\n                    o.stickySidebar = $('<div>').addClass('theiaStickySidebar').append(o.sidebar.children());\n                    o.sidebar.append(o.stickySidebar);\n                }\n\n                // Get existing top and bottom margins and paddings\n                o.marginBottom = parseInt(o.sidebar.css('margin-bottom'));\n                o.paddingTop = parseInt(o.sidebar.css('padding-top'));\n                o.paddingBottom = parseInt(o.sidebar.css('padding-bottom'));\n\n                // Add a temporary padding rule to check for collapsable margins.\n                var collapsedTopHeight = o.stickySidebar.offset().top;\n                var collapsedBottomHeight = o.stickySidebar.outerHeight();\n                o.stickySidebar.css('padding-top', 1);\n                o.stickySidebar.css('padding-bottom', 1);\n                collapsedTopHeight -= o.stickySidebar.offset().top;\n                collapsedBottomHeight = o.stickySidebar.outerHeight() - collapsedBottomHeight - collapsedTopHeight;\n                if (collapsedTopHeight == 0) {\n                    o.stickySidebar.css('padding-top', 0);\n                    o.stickySidebarPaddingTop = 0;\n                }\n                else {\n                    o.stickySidebarPaddingTop = 1;\n                }\n\n                if (collapsedBottomHeight == 0) {\n                    o.stickySidebar.css('padding-bottom', 0);\n                    o.stickySidebarPaddingBottom = 0;\n                }\n                else {\n                    o.stickySidebarPaddingBottom = 1;\n                }\n\n                // We use this to know whether the user is scrolling up or down.\n                o.previousScrollTop = null;\n\n                // Scroll top (value) when the sidebar has fixed position.\n                o.fixedScrollTop = 0;\n\n                // Set sidebar to default values.\n                resetSidebar();\n\n                o.onScroll = function (o) {\n                    // Stop if the sidebar isn't visible.\n                    if (!o.stickySidebar.is(\":visible\")) {\n                        return;\n                    }\n\n                    // Stop if the window is too small.\n                    if ($('body').width() < o.options.minWidth) {\n                        resetSidebar();\n                        return;\n                    }\n\n                    // Stop if the sidebar width is larger than the container width (e.g. the theme is responsive and the sidebar is now below the content)\n                    if (o.options.disableOnResponsiveLayouts) {\n                        var sidebarWidth = o.sidebar.outerWidth(o.sidebar.css('float') == 'none');\n\n                        if (sidebarWidth + 50 > o.container.width()) {\n                            resetSidebar();\n                            return;\n                        }\n                    }\n\n                    var scrollTop = $(document).scrollTop();\n                    var position = 'static';\n\n                    // If the user has scrolled down enough for the sidebar to be clipped at the top, then we can consider changing its position.\n                    if (scrollTop >= o.sidebar.offset().top + (o.paddingTop - o.options.additionalMarginTop)) {\n                        // The top and bottom offsets, used in various calculations.\n                        var offsetTop = o.paddingTop + options.additionalMarginTop;\n                        var offsetBottom = o.paddingBottom + o.marginBottom + options.additionalMarginBottom;\n\n                        // All top and bottom positions are relative to the window, not to the parent elemnts.\n                        var containerTop = o.sidebar.offset().top;\n                        var containerBottom = o.sidebar.offset().top + getClearedHeight(o.container);\n\n                        // The top and bottom offsets relative to the window screen top (zero) and bottom (window height).\n                        var windowOffsetTop = 0 + options.additionalMarginTop;\n                        var windowOffsetBottom;\n\n                        var sidebarSmallerThanWindow = (o.stickySidebar.outerHeight() + offsetTop + offsetBottom) < $(window).height();\n                        if (sidebarSmallerThanWindow) {\n                            windowOffsetBottom = windowOffsetTop + o.stickySidebar.outerHeight();\n                        }\n                        else {\n                            windowOffsetBottom = $(window).height() - o.marginBottom - o.paddingBottom - options.additionalMarginBottom;\n                        }\n\n                        var staticLimitTop = containerTop - scrollTop + o.paddingTop;\n                        var staticLimitBottom = containerBottom - scrollTop - o.paddingBottom - o.marginBottom;\n\n                        var top = o.stickySidebar.offset().top - scrollTop;\n                        var scrollTopDiff = o.previousScrollTop - scrollTop;\n\n                        // If the sidebar position is fixed, then it won't move up or down by itself. So, we manually adjust the top coordinate.\n                        if (o.stickySidebar.css('position') == 'fixed') {\n                            if (o.options.sidebarBehavior == 'modern') {\n                                top += scrollTopDiff;\n                            }\n                        }\n\n                        if (o.options.sidebarBehavior == 'stick-to-top') {\n                            top = options.additionalMarginTop;\n                        }\n\n                        if (o.options.sidebarBehavior == 'stick-to-bottom') {\n                            top = windowOffsetBottom - o.stickySidebar.outerHeight();\n                        }\n\n                        if (scrollTopDiff > 0) { // If the user is scrolling up.\n                            top = Math.min(top, windowOffsetTop);\n                        }\n                        else { // If the user is scrolling down.\n                            top = Math.max(top, windowOffsetBottom - o.stickySidebar.outerHeight());\n                        }\n\n                        top = Math.max(top, staticLimitTop);\n\n                        top = Math.min(top, staticLimitBottom - o.stickySidebar.outerHeight());\n\n                        // If the sidebar is the same height as the container, we won't use fixed positioning.\n                        var sidebarSameHeightAsContainer = o.container.height() == o.stickySidebar.outerHeight();\n\n                        if (!sidebarSameHeightAsContainer && top == windowOffsetTop) {\n                            position = 'fixed';\n                        }\n                        else if (!sidebarSameHeightAsContainer && top == windowOffsetBottom - o.stickySidebar.outerHeight()) {\n                            position = 'fixed';\n                        }\n                        else if (scrollTop + top - o.sidebar.offset().top - o.paddingTop <= options.additionalMarginTop) {\n                            // Stuck to the top of the page. No special behavior.\n                            position = 'static';\n                        }\n                        else {\n                            // Stuck to the bottom of the page.\n                            position = 'absolute';\n                        }\n                    }\n\n                    /*\n                     * Performance notice: It's OK to set these CSS values at each resize/scroll, even if they don't change.\n                     * It's way slower to first check if the values have changed.\n                     */\n                    if (position == 'fixed') {\n                        var scrollLeft = $(document).scrollLeft();\n\n                        o.stickySidebar.css({\n                            'position': 'fixed',\n                            'width': getWidthForObject(o.stickySidebar) + 'px',\n                            'transform': 'translateY(' + top + 'px)',\n                            'left': (o.sidebar.offset().left + parseInt(o.sidebar.css('padding-left')) - scrollLeft) + 'px',\n                            'top': '0px'\n                        });\n                    }\n                    else if (position == 'absolute') {\n                        var css = {};\n\n                        if (o.stickySidebar.css('position') != 'absolute') {\n                            css.position = 'absolute';\n                            css.transform = 'translateY(' + (scrollTop + top - o.sidebar.offset().top - o.stickySidebarPaddingTop - o.stickySidebarPaddingBottom) + 'px)';\n                            css.top = '0px';\n                        }\n\n                        css.width = getWidthForObject(o.stickySidebar) + 'px';\n                        css.left = '';\n\n                        o.stickySidebar.css(css);\n                    }\n                    else if (position == 'static') {\n                        resetSidebar();\n                    }\n\n                    if (position != 'static') {\n                        if (o.options.updateSidebarHeight == true) {\n                            o.sidebar.css({\n                                'min-height': o.stickySidebar.outerHeight() + o.stickySidebar.offset().top - o.sidebar.offset().top + o.paddingBottom\n                            });\n                        }\n                    }\n\n                    o.previousScrollTop = scrollTop;\n                };\n\n                // Initialize the sidebar's position.\n                o.onScroll(o);\n\n                // Recalculate the sidebar's position on every scroll and resize.\n                $(document).on('scroll.' + o.options.namespace, function (o) {\n                    return function () {\n                        o.onScroll(o);\n                    };\n                }(o));\n                $(window).on('resize.' + o.options.namespace, function (o) {\n                    return function () {\n                        o.stickySidebar.css({'position': 'static'});\n                        o.onScroll(o);\n                    };\n                }(o));\n\n                // Recalculate the sidebar's position every time the sidebar changes its size.\n                if (typeof ResizeSensor !== 'undefined') {\n                    new ResizeSensor(o.stickySidebar[0], function (o) {\n                        return function () {\n                            o.onScroll(o);\n                        };\n                    }(o));\n                }\n\n                // Reset the sidebar to its default state\n                function resetSidebar() {\n                    o.fixedScrollTop = 0;\n                    o.sidebar.css({\n                        'min-height': '1px'\n                    });\n                    o.stickySidebar.css({\n                        'position': 'static',\n                        'width': '',\n                        'transform': 'none'\n                    });\n                }\n\n                // Get the height of a div as if its floated children were cleared. Note that this function fails if the floats are more than one level deep.\n                function getClearedHeight(e) {\n                    var height = e.height();\n\n                    e.children().each(function () {\n                        height = Math.max(height, $(this).height());\n                    });\n\n                    return height;\n                }\n            });\n        }\n\n        function getWidthForObject(object) {\n            var width;\n\n            try {\n                width = object[0].getBoundingClientRect().width;\n            }\n            catch (err) {\n            }\n\n            if (typeof width === \"undefined\") {\n                width = object.width();\n            }\n\n            return width;\n        }\n\n        return this;\n    }\n})(jQuery);\n\n//# sourceMappingURL=maps/theia-sticky-sidebar.js.map\n"

/***/ }),

/***/ "./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/addScript.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/addScript.js ***!
  \****************************************************************************************/
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

/***/ "./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/index.js!./assets/scripts/plugins/lazyYT.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/index.js!./assets/scripts/plugins/lazyYT.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! !!./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/addScript.js */ "./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/addScript.js")(__webpack_require__(/*! !!./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./node_modules/.pnpm/babel-loader@8.2.5_xc6oct4hcywdrbo4ned6ytbybm/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[4].use[0]!./assets/scripts/plugins/lazyYT.js */ "./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./node_modules/.pnpm/babel-loader@8.2.5_xc6oct4hcywdrbo4ned6ytbybm/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[4].use[0]!./assets/scripts/plugins/lazyYT.js"))

/***/ }),

/***/ "./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/index.js!./assets/scripts/plugins/navigation.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/index.js!./assets/scripts/plugins/navigation.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! !!./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/addScript.js */ "./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/addScript.js")(__webpack_require__(/*! !!./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./node_modules/.pnpm/babel-loader@8.2.5_xc6oct4hcywdrbo4ned6ytbybm/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[4].use[0]!./assets/scripts/plugins/navigation.js */ "./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./node_modules/.pnpm/babel-loader@8.2.5_xc6oct4hcywdrbo4ned6ytbybm/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[4].use[0]!./assets/scripts/plugins/navigation.js"))

/***/ }),

/***/ "./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/index.js!./assets/scripts/plugins/skip-link-focus-fix.js":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/index.js!./assets/scripts/plugins/skip-link-focus-fix.js ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! !!./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/addScript.js */ "./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/addScript.js")(__webpack_require__(/*! !!./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./node_modules/.pnpm/babel-loader@8.2.5_xc6oct4hcywdrbo4ned6ytbybm/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[4].use[0]!./assets/scripts/plugins/skip-link-focus-fix.js */ "./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./node_modules/.pnpm/babel-loader@8.2.5_xc6oct4hcywdrbo4ned6ytbybm/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[4].use[0]!./assets/scripts/plugins/skip-link-focus-fix.js"))

/***/ }),

/***/ "./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/index.js!./node_modules/.pnpm/theia-sticky-sidebar@1.7.0/node_modules/theia-sticky-sidebar/dist/theia-sticky-sidebar.js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/index.js!./node_modules/.pnpm/theia-sticky-sidebar@1.7.0/node_modules/theia-sticky-sidebar/dist/theia-sticky-sidebar.js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! !!./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/addScript.js */ "./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/addScript.js")(__webpack_require__(/*! !!./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./node_modules/.pnpm/theia-sticky-sidebar@1.7.0/node_modules/theia-sticky-sidebar/dist/theia-sticky-sidebar.js */ "./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./node_modules/.pnpm/theia-sticky-sidebar@1.7.0/node_modules/theia-sticky-sidebar/dist/theia-sticky-sidebar.js"))

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = jQuery;

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************!*\
  !*** ./assets/scripts/main.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/helpers */ "./assets/scripts/components/helpers.js");
/* harmony import */ var _components_nav_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nav-tree */ "./assets/scripts/components/nav-tree.js");
/* harmony import */ var _components_nav_reveal_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nav/reveal-header */ "./assets/scripts/components/nav/reveal-header.js");
/* harmony import */ var _components_nav_smart_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/nav/smart-menu */ "./assets/scripts/components/nav/smart-menu.js");
/* harmony import */ var _components_nav_sticky__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/nav/sticky */ "./assets/scripts/components/nav/sticky.js");
/* harmony import */ var _components_isotope__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/isotope */ "./assets/scripts/components/isotope.js");
/* harmony import */ var _components_sticky_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sticky-sidebar */ "./assets/scripts/components/sticky-sidebar.js");
/* harmony import */ var _components_lazy_youtube__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/lazy-youtube */ "./assets/scripts/components/lazy-youtube.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");


__webpack_require__(/*! script-loader!./plugins/navigation */ "./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/index.js!./assets/scripts/plugins/navigation.js");

__webpack_require__(/*! script-loader!./plugins/skip-link-focus-fix */ "./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/index.js!./assets/scripts/plugins/skip-link-focus-fix.js");





 //import {mainSwiper} from './components/swiper';





(function ($) {
  var spaceName = {};

  spaceName.init = function () {
    this.ajaxLoading(); //mainSwiper();

    (0,_components_nav_smart_menu__WEBPACK_IMPORTED_MODULE_3__.smartMenu)(); //menuToggle();
    //meanMenu();

    this.closeCartDrawer();
    (0,_components_nav_tree__WEBPACK_IMPORTED_MODULE_1__.navTree)();
    (0,_components_nav_reveal_header__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_components_sticky_sidebar__WEBPACK_IMPORTED_MODULE_6__.stickySidebar)();
    this.accordion();
    this.tab();
    (0,_components_lazy_youtube__WEBPACK_IMPORTED_MODULE_7__.lazyYoutube)();
    (0,_components_isotope__WEBPACK_IMPORTED_MODULE_5__.isotope)();
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
   * Close cart drawer
   */


  spaceName.closeCartDrawer = function () {
    $('.close-drawer').on('click', function () {
      $('body').removeClass('mobile-toggled').removeClass('drawer-open');
    });
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
    (0,_components_nav_sticky__WEBPACK_IMPORTED_MODULE_4__.stickyNav)();
  };
})(jQuery);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map