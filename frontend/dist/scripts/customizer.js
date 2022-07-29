/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./assets/scripts/customizer.js ***!
  \**************************************/
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");
/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */
(function ($) {
  // Site title and description.
  wp.customize('blogname', function (value) {
    value.bind(function (to) {
      $('.site-title a').text(to);
    });
  });
  wp.customize('blogdescription', function (value) {
    value.bind(function (to) {
      $('.site-description').text(to);
    });
  }); // Header text color.

  wp.customize('header_textcolor', function (value) {
    value.bind(function (to) {
      if ('blank' === to) {
        $('.site-title, .site-description').css({
          'clip': 'rect(1px, 1px, 1px, 1px)',
          'position': 'absolute'
        });
      } else {
        $('.site-title, .site-description').css({
          'clip': 'auto',
          'position': 'relative'
        });
        $('.site-title a, .site-description').css({
          'color': to
        });
      }
    });
  });
  wp.customize('rs_container_width', function (value) {
    value.bind(function (to) {
      $('.container').css({
        'max-width': to + 'px'
      });
    });
  });
  wp.customize('rs_container_focus_width', function (value) {
    value.bind(function (to) {
      $('.container--focus, .single-post.sidebar-none .site__main, .category.sidebar-none .site__main').css({
        'max-width': to + 'px'
      });
    });
  });
  wp.customize('rswc_single_product_content_width', function (value) {
    value.bind(function (to) {
      $('.rswc-product-body').css({
        'max-width': to + 'px'
      });
    });
  });
  wp.customize('rswc_single_product_gallery_columns', function (value) {
    value.bind(function (to) {
      $('.woocommerce-product-gallery').removeClass('woocommerce-product-gallery--columns-3').removeClass('woocommerce-product-gallery--columns-4').removeClass('woocommerce-product-gallery--columns-5').removeClass('woocommerce-product-gallery--columns-6').addClass('woocommerce-product-gallery--columns-' + to);
    });
  });
})(jQuery);
})();

/******/ })()
;
//# sourceMappingURL=customizer.js.map