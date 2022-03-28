/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/scripts/plugins/navigation.js":
/*!**********************************************!*\
  !*** ./assets/scripts/plugins/navigation.js ***!
  \**********************************************/
/***/ (() => {

/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
(function () {
  var container, button, menu, links, i, len;
  container = document.getElementById('site-navigation');

  if (!container) {
    return;
  }

  button = container.getElementsByTagName('button')[0];

  if ('undefined' === typeof button) {
    return;
  }

  menu = container.getElementsByTagName('ul')[0]; // Hide menu toggle button if menu is empty and return early.

  if ('undefined' === typeof menu) {
    button.style.display = 'none';
    return;
  }

  menu.setAttribute('aria-expanded', 'false');

  if (-1 === menu.className.indexOf('nav-menu')) {
    menu.className += ' nav-menu';
  }

  button.onclick = function () {
    if (-1 !== container.className.indexOf('is-toggled')) {
      container.className = container.className.replace(' is-toggled', '');
      button.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-expanded', 'false');
    } else {
      container.className += ' is-toggled';
      button.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-expanded', 'true');
    }
  };
})();

/***/ }),

/***/ "./assets/scripts/plugins/skip-link-focus-fix.js":
/*!*******************************************************!*\
  !*** ./assets/scripts/plugins/skip-link-focus-fix.js ***!
  \*******************************************************/
/***/ (() => {

/**
 * File skip-link-focus-fix.js.
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://git.io/vWdr2
 */
(function () {
  var isIe = /(trident|msie)/i.test(navigator.userAgent);

  if (isIe && document.getElementById && window.addEventListener) {
    window.addEventListener('hashchange', function () {
      var id = location.hash.substring(1),
          element;

      if (!/^[A-z0-9_-]+$/.test(id)) {
        return;
      }

      element = document.getElementById(id);

      if (element) {
        if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
          element.tabIndex = -1;
        }

        element.focus();
      }
    }, false);
  }
})();

/***/ }),

/***/ "./assets/scripts/vendors.js":
/*!***********************************!*\
  !*** ./assets/scripts/vendors.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugins/navigation */ "./assets/scripts/plugins/navigation.js");
/* harmony import */ var _plugins_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plugins_navigation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plugins_skip_link_focus_fix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins/skip-link-focus-fix */ "./assets/scripts/plugins/skip-link-focus-fix.js");
/* harmony import */ var _plugins_skip_link_focus_fix__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_plugins_skip_link_focus_fix__WEBPACK_IMPORTED_MODULE_1__);





/***/ }),

/***/ "./assets/styles/iconfont.scss":
/*!*************************************!*\
  !*** ./assets/styles/iconfont.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/post.scss":
/*!*********************************!*\
  !*** ./assets/styles/post.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/products.scss":
/*!*************************************!*\
  !*** ./assets/styles/products.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/review.scss":
/*!***********************************!*\
  !*** ./assets/styles/review.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/woocommerce.scss":
/*!****************************************!*\
  !*** ./assets/styles/woocommerce.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/main.scss":
/*!*********************************!*\
  !*** ./assets/styles/main.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/account.scss":
/*!************************************!*\
  !*** ./assets/styles/account.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/cart.scss":
/*!*********************************!*\
  !*** ./assets/styles/cart.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/checkout.scss":
/*!*************************************!*\
  !*** ./assets/styles/checkout.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/editor.scss":
/*!***********************************!*\
  !*** ./assets/styles/editor.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/scripts/vendors": 0,
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
/******/ 	__webpack_require__.O(undefined, ["dist/styles/editor","dist/styles/checkout","dist/styles/cart","dist/styles/account","dist/styles/main","dist/styles/woocommerce","dist/styles/review","dist/styles/products","dist/styles/post","dist/styles/iconfont"], () => (__webpack_require__("./assets/scripts/vendors.js")))
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
//# sourceMappingURL=vendors.js.map