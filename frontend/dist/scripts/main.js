/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/scripts/main.js":
/*!********************************!*\
  !*** ./assets/scripts/main.js ***!
  \********************************/
/***/ (() => {



(function ($) {
  var header = document.getElementById('masthead');
  var body = document.getElementsByTagName('body')[0];
  var spaceName = {};

  spaceName.init = function () {
    this.ajaxLoading();
    this.smartMenu();
    this.closeCartDrawer();
    this.navTree();
    this.stickySidebar();
    this.accordion();
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
  /**
   * Sticky Sidebar
   *
   * div.js-sticky-left>div.theiaStickySidebar | div.js-sticky-right>div
   */


  spaceName.stickySidebar = function () {
    if ($(document).width() > 1024) {
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
    var $navTreeEl = $('.widget_nav_menu, .widget_product_categories111, .widget-nav_menu');

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

  $(document).ready(function () {
    spaceName.init();
  });

  window.onscroll = function () {
    spaceName.navSticky();
  };
})(jQuery);

/***/ }),

/***/ "./assets/styles/iconfont.scss":
/*!*************************************!*\
  !*** ./assets/styles/iconfont.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/post.scss":
/*!*********************************!*\
  !*** ./assets/styles/post.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/products.scss":
/*!*************************************!*\
  !*** ./assets/styles/products.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/review.scss":
/*!***********************************!*\
  !*** ./assets/styles/review.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/woocommerce.scss":
/*!****************************************!*\
  !*** ./assets/styles/woocommerce.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/main.scss":
/*!*********************************!*\
  !*** ./assets/styles/main.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/account.scss":
/*!************************************!*\
  !*** ./assets/styles/account.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/cart.scss":
/*!*********************************!*\
  !*** ./assets/styles/cart.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/checkout.scss":
/*!*************************************!*\
  !*** ./assets/styles/checkout.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/editor.scss":
/*!***********************************!*\
  !*** ./assets/styles/editor.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/scripts/main": 0,
/******/ 			"dist/styles/editor": 0,
/******/ 			"dist/styles/checkout": 0,
/******/ 			"dist/styles/cart": 0,
/******/ 			"dist/styles/account": 0,
/******/ 			"dist/styles/main": 0,
/******/ 			"dist/styles/woocommerce": 0,
/******/ 			"dist/styles/review": 0,
/******/ 			"dist/styles/products": 0,
/******/ 			"dist/styles/post": 0,
/******/ 			"dist/styles/iconfont": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwenprise_storyfm"] = self["webpackChunkwenprise_storyfm"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/styles/editor","dist/styles/checkout","dist/styles/cart","dist/styles/account","dist/styles/main","dist/styles/woocommerce","dist/styles/review","dist/styles/products","dist/styles/post","dist/styles/iconfont"], () => (__webpack_require__("./assets/scripts/main.js")))
/******/ 	__webpack_require__.O(undefined, ["dist/styles/editor","dist/styles/checkout","dist/styles/cart","dist/styles/account","dist/styles/main","dist/styles/woocommerce","dist/styles/review","dist/styles/products","dist/styles/post","dist/styles/iconfont"], () => (__webpack_require__("./assets/styles/main.scss")))
/******/ 	__webpack_require__.O(undefined, ["dist/styles/editor","dist/styles/checkout","dist/styles/cart","dist/styles/account","dist/styles/main","dist/styles/woocommerce","dist/styles/review","dist/styles/products","dist/styles/post","dist/styles/iconfont"], () => (__webpack_require__("./assets/styles/account.scss")))
/******/ 	__webpack_require__.O(undefined, ["dist/styles/editor","dist/styles/checkout","dist/styles/cart","dist/styles/account","dist/styles/main","dist/styles/woocommerce","dist/styles/review","dist/styles/products","dist/styles/post","dist/styles/iconfont"], () => (__webpack_require__("./assets/styles/cart.scss")))
/******/ 	__webpack_require__.O(undefined, ["dist/styles/editor","dist/styles/checkout","dist/styles/cart","dist/styles/account","dist/styles/main","dist/styles/woocommerce","dist/styles/review","dist/styles/products","dist/styles/post","dist/styles/iconfont"], () => (__webpack_require__("./assets/styles/checkout.scss")))
/******/ 	__webpack_require__.O(undefined, ["dist/styles/editor","dist/styles/checkout","dist/styles/cart","dist/styles/account","dist/styles/main","dist/styles/woocommerce","dist/styles/review","dist/styles/products","dist/styles/post","dist/styles/iconfont"], () => (__webpack_require__("./assets/styles/editor.scss")))
/******/ 	__webpack_require__.O(undefined, ["dist/styles/editor","dist/styles/checkout","dist/styles/cart","dist/styles/account","dist/styles/main","dist/styles/woocommerce","dist/styles/review","dist/styles/products","dist/styles/post","dist/styles/iconfont"], () => (__webpack_require__("./assets/styles/iconfont.scss")))
/******/ 	__webpack_require__.O(undefined, ["dist/styles/editor","dist/styles/checkout","dist/styles/cart","dist/styles/account","dist/styles/main","dist/styles/woocommerce","dist/styles/review","dist/styles/products","dist/styles/post","dist/styles/iconfont"], () => (__webpack_require__("./assets/styles/post.scss")))
/******/ 	__webpack_require__.O(undefined, ["dist/styles/editor","dist/styles/checkout","dist/styles/cart","dist/styles/account","dist/styles/main","dist/styles/woocommerce","dist/styles/review","dist/styles/products","dist/styles/post","dist/styles/iconfont"], () => (__webpack_require__("./assets/styles/products.scss")))
/******/ 	__webpack_require__.O(undefined, ["dist/styles/editor","dist/styles/checkout","dist/styles/cart","dist/styles/account","dist/styles/main","dist/styles/woocommerce","dist/styles/review","dist/styles/products","dist/styles/post","dist/styles/iconfont"], () => (__webpack_require__("./assets/styles/review.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/styles/editor","dist/styles/checkout","dist/styles/cart","dist/styles/account","dist/styles/main","dist/styles/woocommerce","dist/styles/review","dist/styles/products","dist/styles/post","dist/styles/iconfont"], () => (__webpack_require__("./assets/styles/woocommerce.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;