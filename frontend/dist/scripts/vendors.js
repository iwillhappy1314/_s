/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/scripts/vendors.js":
/*!***********************************!*\
  !*** ./assets/scripts/vendors.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! script-loader!smartmenus */ "./node_modules/script-loader/index.js!./node_modules/smartmenus/dist/jquery.smartmenus.js"); //require('script-loader!theia-sticky-sidebar');
//require('script-loader!./plugins/lazyYT');

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


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/smartmenus/dist/jquery.smartmenus.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/index.js!./node_modules/smartmenus/dist/jquery.smartmenus.js ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "/*!\n * SmartMenus jQuery Plugin - v1.1.1 - July 23, 2020\n * http://www.smartmenus.org/\n *\n * Copyright Vasil Dinkov, Vadikom Web Ltd.\n * http://vadikom.com\n *\n * Licensed MIT\n */\n\n(function(factory) {\n\tif (typeof define === 'function' && define.amd) {\n\t\t// AMD\n\t\tdefine(['jquery'], factory);\n\t} else if (typeof module === 'object' && typeof module.exports === 'object') {\n\t\t// CommonJS\n\t\tmodule.exports = factory(require('jquery'));\n\t} else {\n\t\t// Global jQuery\n\t\tfactory(jQuery);\n\t}\n} (function($) {\n\n\tvar menuTrees = [],\n\t\tmouse = false, // optimize for touch by default - we will detect for mouse input\n\t\ttouchEvents = 'ontouchstart' in window, // we use this just to choose between toucn and pointer events, not for touch screen detection\n\t\tmouseDetectionEnabled = false,\n\t\trequestAnimationFrame = window.requestAnimationFrame || function(callback) { return setTimeout(callback, 1000 / 60); },\n\t\tcancelAnimationFrame = window.cancelAnimationFrame || function(id) { clearTimeout(id); },\n\t\tcanAnimate = !!$.fn.animate;\n\n\t// Handle detection for mouse input (i.e. desktop browsers, tablets with a mouse, etc.)\n\tfunction initMouseDetection(disable) {\n\t\tvar eNS = '.smartmenus_mouse';\n\t\tif (!mouseDetectionEnabled && !disable) {\n\t\t\t// if we get two consecutive mousemoves within 2 pixels from each other and within 300ms, we assume a real mouse/cursor is present\n\t\t\t// in practice, this seems like impossible to trick unintentianally with a real mouse and a pretty safe detection on touch devices (even with older browsers that do not support touch events)\n\t\t\tvar firstTime = true,\n\t\t\t\tlastMove = null,\n\t\t\t\tevents = {\n\t\t\t\t\t'mousemove': function(e) {\n\t\t\t\t\t\tvar thisMove = { x: e.pageX, y: e.pageY, timeStamp: new Date().getTime() };\n\t\t\t\t\t\tif (lastMove) {\n\t\t\t\t\t\t\tvar deltaX = Math.abs(lastMove.x - thisMove.x),\n\t\t\t\t\t\t\t\tdeltaY = Math.abs(lastMove.y - thisMove.y);\n\t\t \t\t\t\t\tif ((deltaX > 0 || deltaY > 0) && deltaX <= 4 && deltaY <= 4 && thisMove.timeStamp - lastMove.timeStamp <= 300) {\n\t\t\t\t\t\t\t\tmouse = true;\n\t\t\t\t\t\t\t\t// if this is the first check after page load, check if we are not over some item by chance and call the mouseenter handler if yes\n\t\t\t\t\t\t\t\tif (firstTime) {\n\t\t\t\t\t\t\t\t\tvar $a = $(e.target).closest('a');\n\t\t\t\t\t\t\t\t\tif ($a.is('a')) {\n\t\t\t\t\t\t\t\t\t\t$.each(menuTrees, function() {\n\t\t\t\t\t\t\t\t\t\t\tif ($.contains(this.$root[0], $a[0])) {\n\t\t\t\t\t\t\t\t\t\t\t\tthis.itemEnter({ currentTarget: $a[0] });\n\t\t\t\t\t\t\t\t\t\t\t\treturn false;\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tfirstTime = false;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tlastMove = thisMove;\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\tevents[touchEvents ? 'touchstart' : 'pointerover pointermove pointerout MSPointerOver MSPointerMove MSPointerOut'] = function(e) {\n\t\t\t\tif (isTouchEvent(e.originalEvent)) {\n\t\t\t\t\tmouse = false;\n\t\t\t\t}\n\t\t\t};\n\t\t\t$(document).on(getEventsNS(events, eNS));\n\t\t\tmouseDetectionEnabled = true;\n\t\t} else if (mouseDetectionEnabled && disable) {\n\t\t\t$(document).off(eNS);\n\t\t\tmouseDetectionEnabled = false;\n\t\t}\n\t}\n\n\tfunction isTouchEvent(e) {\n\t\treturn !/^(4|mouse)$/.test(e.pointerType);\n\t}\n\n\t// returns a jQuery on() ready object\n\tfunction getEventsNS(events, eNS) {\n\t\tif (!eNS) {\n\t\t\teNS = '';\n\t\t}\n\t\tvar eventsNS = {};\n\t\tfor (var i in events) {\n\t\t\teventsNS[i.split(' ').join(eNS + ' ') + eNS] = events[i];\n\t\t}\n\t\treturn eventsNS;\n\t}\n\n\t$.SmartMenus = function(elm, options) {\n\t\tthis.$root = $(elm);\n\t\tthis.opts = options;\n\t\tthis.rootId = ''; // internal\n\t\tthis.accessIdPrefix = '';\n\t\tthis.$subArrow = null;\n\t\tthis.activatedItems = []; // stores last activated A's for each level\n\t\tthis.visibleSubMenus = []; // stores visible sub menus UL's (might be in no particular order)\n\t\tthis.showTimeout = 0;\n\t\tthis.hideTimeout = 0;\n\t\tthis.scrollTimeout = 0;\n\t\tthis.clickActivated = false;\n\t\tthis.focusActivated = false;\n\t\tthis.zIndexInc = 0;\n\t\tthis.idInc = 0;\n\t\tthis.$firstLink = null; // we'll use these for some tests\n\t\tthis.$firstSub = null; // at runtime so we'll cache them\n\t\tthis.disabled = false;\n\t\tthis.$disableOverlay = null;\n\t\tthis.$touchScrollingSub = null;\n\t\tthis.cssTransforms3d = 'perspective' in elm.style || 'webkitPerspective' in elm.style;\n\t\tthis.wasCollapsible = false;\n\t\tthis.init();\n\t};\n\n\t$.extend($.SmartMenus, {\n\t\thideAll: function() {\n\t\t\t$.each(menuTrees, function() {\n\t\t\t\tthis.menuHideAll();\n\t\t\t});\n\t\t},\n\t\tdestroy: function() {\n\t\t\twhile (menuTrees.length) {\n\t\t\t\tmenuTrees[0].destroy();\n\t\t\t}\n\t\t\tinitMouseDetection(true);\n\t\t},\n\t\tprototype: {\n\t\t\tinit: function(refresh) {\n\t\t\t\tvar self = this;\n\n\t\t\t\tif (!refresh) {\n\t\t\t\t\tmenuTrees.push(this);\n\n\t\t\t\t\tthis.rootId = (new Date().getTime() + Math.random() + '').replace(/\\D/g, '');\n\t\t\t\t\tthis.accessIdPrefix = 'sm-' + this.rootId + '-';\n\n\t\t\t\t\tif (this.$root.hasClass('sm-rtl')) {\n\t\t\t\t\t\tthis.opts.rightToLeftSubMenus = true;\n\t\t\t\t\t}\n\n\t\t\t\t\t// init root (main menu)\n\t\t\t\t\tvar eNS = '.smartmenus';\n\t\t\t\t\tthis.$root\n\t\t\t\t\t\t.data('smartmenus', this)\n\t\t\t\t\t\t.attr('data-smartmenus-id', this.rootId)\n\t\t\t\t\t\t.dataSM('level', 1)\n\t\t\t\t\t\t.on(getEventsNS({\n\t\t\t\t\t\t\t'mouseover focusin': $.proxy(this.rootOver, this),\n\t\t\t\t\t\t\t'mouseout focusout': $.proxy(this.rootOut, this),\n\t\t\t\t\t\t\t'keydown': $.proxy(this.rootKeyDown, this)\n\t\t\t\t\t\t}, eNS))\n\t\t\t\t\t\t.on(getEventsNS({\n\t\t\t\t\t\t\t'mouseenter': $.proxy(this.itemEnter, this),\n\t\t\t\t\t\t\t'mouseleave': $.proxy(this.itemLeave, this),\n\t\t\t\t\t\t\t'mousedown': $.proxy(this.itemDown, this),\n\t\t\t\t\t\t\t'focus': $.proxy(this.itemFocus, this),\n\t\t\t\t\t\t\t'blur': $.proxy(this.itemBlur, this),\n\t\t\t\t\t\t\t'click': $.proxy(this.itemClick, this)\n\t\t\t\t\t\t}, eNS), 'a');\n\n\t\t\t\t\t// hide menus on tap or click outside the root UL\n\t\t\t\t\teNS += this.rootId;\n\t\t\t\t\tif (this.opts.hideOnClick) {\n\t\t\t\t\t\t$(document).on(getEventsNS({\n\t\t\t\t\t\t\t'touchstart': $.proxy(this.docTouchStart, this),\n\t\t\t\t\t\t\t'touchmove': $.proxy(this.docTouchMove, this),\n\t\t\t\t\t\t\t'touchend': $.proxy(this.docTouchEnd, this),\n\t\t\t\t\t\t\t// for Opera Mobile < 11.5, webOS browser, etc. we'll check click too\n\t\t\t\t\t\t\t'click': $.proxy(this.docClick, this)\n\t\t\t\t\t\t}, eNS));\n\t\t\t\t\t}\n\t\t\t\t\t// hide sub menus on resize\n\t\t\t\t\t$(window).on(getEventsNS({ 'resize orientationchange': $.proxy(this.winResize, this) }, eNS));\n\n\t\t\t\t\tif (this.opts.subIndicators) {\n\t\t\t\t\t\tthis.$subArrow = $('<span/>').addClass('sub-arrow');\n\t\t\t\t\t\tif (this.opts.subIndicatorsText) {\n\t\t\t\t\t\t\tthis.$subArrow.html(this.opts.subIndicatorsText);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t// make sure mouse detection is enabled\n\t\t\t\t\tinitMouseDetection();\n\t\t\t\t}\n\n\t\t\t\t// init sub menus\n\t\t\t\tthis.$firstSub = this.$root.find('ul').each(function() { self.menuInit($(this)); }).eq(0);\n\n\t\t\t\tthis.$firstLink = this.$root.find('a').eq(0);\n\n\t\t\t\t// find current item\n\t\t\t\tif (this.opts.markCurrentItem) {\n\t\t\t\t\tvar reDefaultDoc = /(index|default)\\.[^#\\?\\/]*/i,\n\t\t\t\t\t\treHash = /#.*/,\n\t\t\t\t\t\tlocHref = window.location.href.replace(reDefaultDoc, ''),\n\t\t\t\t\t\tlocHrefNoHash = locHref.replace(reHash, '');\n\t\t\t\t\tthis.$root.find('a:not(.mega-menu a)').each(function() {\n\t\t\t\t\t\tvar href = this.href.replace(reDefaultDoc, ''),\n\t\t\t\t\t\t\t$this = $(this);\n\t\t\t\t\t\tif (href == locHref || href == locHrefNoHash) {\n\t\t\t\t\t\t\t$this.addClass('current');\n\t\t\t\t\t\t\tif (self.opts.markCurrentTree) {\n\t\t\t\t\t\t\t\t$this.parentsUntil('[data-smartmenus-id]', 'ul').each(function() {\n\t\t\t\t\t\t\t\t\t$(this).dataSM('parent-a').addClass('current');\n\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t}\n\n\t\t\t\t// save initial state\n\t\t\t\tthis.wasCollapsible = this.isCollapsible();\n\t\t\t},\n\t\t\tdestroy: function(refresh) {\n\t\t\t\tif (!refresh) {\n\t\t\t\t\tvar eNS = '.smartmenus';\n\t\t\t\t\tthis.$root\n\t\t\t\t\t\t.removeData('smartmenus')\n\t\t\t\t\t\t.removeAttr('data-smartmenus-id')\n\t\t\t\t\t\t.removeDataSM('level')\n\t\t\t\t\t\t.off(eNS);\n\t\t\t\t\teNS += this.rootId;\n\t\t\t\t\t$(document).off(eNS);\n\t\t\t\t\t$(window).off(eNS);\n\t\t\t\t\tif (this.opts.subIndicators) {\n\t\t\t\t\t\tthis.$subArrow = null;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tthis.menuHideAll();\n\t\t\t\tvar self = this;\n\t\t\t\tthis.$root.find('ul').each(function() {\n\t\t\t\t\t\tvar $this = $(this);\n\t\t\t\t\t\tif ($this.dataSM('scroll-arrows')) {\n\t\t\t\t\t\t\t$this.dataSM('scroll-arrows').remove();\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif ($this.dataSM('shown-before')) {\n\t\t\t\t\t\t\tif (self.opts.subMenusMinWidth || self.opts.subMenusMaxWidth) {\n\t\t\t\t\t\t\t\t$this.css({ width: '', minWidth: '', maxWidth: '' }).removeClass('sm-nowrap');\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tif ($this.dataSM('scroll-arrows')) {\n\t\t\t\t\t\t\t\t$this.dataSM('scroll-arrows').remove();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t$this.css({ zIndex: '', top: '', left: '', marginLeft: '', marginTop: '', display: '' });\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif (($this.attr('id') || '').indexOf(self.accessIdPrefix) == 0) {\n\t\t\t\t\t\t\t$this.removeAttr('id');\n\t\t\t\t\t\t}\n\t\t\t\t\t})\n\t\t\t\t\t.removeDataSM('in-mega')\n\t\t\t\t\t.removeDataSM('shown-before')\n\t\t\t\t\t.removeDataSM('scroll-arrows')\n\t\t\t\t\t.removeDataSM('parent-a')\n\t\t\t\t\t.removeDataSM('level')\n\t\t\t\t\t.removeDataSM('beforefirstshowfired')\n\t\t\t\t\t.removeAttr('role')\n\t\t\t\t\t.removeAttr('aria-hidden')\n\t\t\t\t\t.removeAttr('aria-labelledby')\n\t\t\t\t\t.removeAttr('aria-expanded');\n\t\t\t\tthis.$root.find('a.has-submenu').each(function() {\n\t\t\t\t\t\tvar $this = $(this);\n\t\t\t\t\t\tif ($this.attr('id').indexOf(self.accessIdPrefix) == 0) {\n\t\t\t\t\t\t\t$this.removeAttr('id');\n\t\t\t\t\t\t}\n\t\t\t\t\t})\n\t\t\t\t\t.removeClass('has-submenu')\n\t\t\t\t\t.removeDataSM('sub')\n\t\t\t\t\t.removeAttr('aria-haspopup')\n\t\t\t\t\t.removeAttr('aria-controls')\n\t\t\t\t\t.removeAttr('aria-expanded')\n\t\t\t\t\t.closest('li').removeDataSM('sub');\n\t\t\t\tif (this.opts.subIndicators) {\n\t\t\t\t\tthis.$root.find('span.sub-arrow').remove();\n\t\t\t\t}\n\t\t\t\tif (this.opts.markCurrentItem) {\n\t\t\t\t\tthis.$root.find('a.current').removeClass('current');\n\t\t\t\t}\n\t\t\t\tif (!refresh) {\n\t\t\t\t\tthis.$root = null;\n\t\t\t\t\tthis.$firstLink = null;\n\t\t\t\t\tthis.$firstSub = null;\n\t\t\t\t\tif (this.$disableOverlay) {\n\t\t\t\t\t\tthis.$disableOverlay.remove();\n\t\t\t\t\t\tthis.$disableOverlay = null;\n\t\t\t\t\t}\n\t\t\t\t\tmenuTrees.splice($.inArray(this, menuTrees), 1);\n\t\t\t\t}\n\t\t\t},\n\t\t\tdisable: function(noOverlay) {\n\t\t\t\tif (!this.disabled) {\n\t\t\t\t\tthis.menuHideAll();\n\t\t\t\t\t// display overlay over the menu to prevent interaction\n\t\t\t\t\tif (!noOverlay && !this.opts.isPopup && this.$root.is(':visible')) {\n\t\t\t\t\t\tvar pos = this.$root.offset();\n\t\t\t\t\t\tthis.$disableOverlay = $('<div class=\"sm-jquery-disable-overlay\"/>').css({\n\t\t\t\t\t\t\tposition: 'absolute',\n\t\t\t\t\t\t\ttop: pos.top,\n\t\t\t\t\t\t\tleft: pos.left,\n\t\t\t\t\t\t\twidth: this.$root.outerWidth(),\n\t\t\t\t\t\t\theight: this.$root.outerHeight(),\n\t\t\t\t\t\t\tzIndex: this.getStartZIndex(true),\n\t\t\t\t\t\t\topacity: 0\n\t\t\t\t\t\t}).appendTo(document.body);\n\t\t\t\t\t}\n\t\t\t\t\tthis.disabled = true;\n\t\t\t\t}\n\t\t\t},\n\t\t\tdocClick: function(e) {\n\t\t\t\tif (this.$touchScrollingSub) {\n\t\t\t\t\tthis.$touchScrollingSub = null;\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\t// hide on any click outside the menu or on a menu link\n\t\t\t\tif (this.visibleSubMenus.length && !$.contains(this.$root[0], e.target) || $(e.target).closest('a').length) {\n\t\t\t\t\tthis.menuHideAll();\n\t\t\t\t}\n\t\t\t},\n\t\t\tdocTouchEnd: function(e) {\n\t\t\t\tif (!this.lastTouch) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\tif (this.visibleSubMenus.length && (this.lastTouch.x2 === undefined || this.lastTouch.x1 == this.lastTouch.x2) && (this.lastTouch.y2 === undefined || this.lastTouch.y1 == this.lastTouch.y2) && (!this.lastTouch.target || !$.contains(this.$root[0], this.lastTouch.target))) {\n\t\t\t\t\tif (this.hideTimeout) {\n\t\t\t\t\t\tclearTimeout(this.hideTimeout);\n\t\t\t\t\t\tthis.hideTimeout = 0;\n\t\t\t\t\t}\n\t\t\t\t\t// hide with a delay to prevent triggering accidental unwanted click on some page element\n\t\t\t\t\tvar self = this;\n\t\t\t\t\tthis.hideTimeout = setTimeout(function() { self.menuHideAll(); }, 350);\n\t\t\t\t}\n\t\t\t\tthis.lastTouch = null;\n\t\t\t},\n\t\t\tdocTouchMove: function(e) {\n\t\t\t\tif (!this.lastTouch) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\tvar touchPoint = e.originalEvent.touches[0];\n\t\t\t\tthis.lastTouch.x2 = touchPoint.pageX;\n\t\t\t\tthis.lastTouch.y2 = touchPoint.pageY;\n\t\t\t},\n\t\t\tdocTouchStart: function(e) {\n\t\t\t\tvar touchPoint = e.originalEvent.touches[0];\n\t\t\t\tthis.lastTouch = { x1: touchPoint.pageX, y1: touchPoint.pageY, target: touchPoint.target };\n\t\t\t},\n\t\t\tenable: function() {\n\t\t\t\tif (this.disabled) {\n\t\t\t\t\tif (this.$disableOverlay) {\n\t\t\t\t\t\tthis.$disableOverlay.remove();\n\t\t\t\t\t\tthis.$disableOverlay = null;\n\t\t\t\t\t}\n\t\t\t\t\tthis.disabled = false;\n\t\t\t\t}\n\t\t\t},\n\t\t\tgetClosestMenu: function(elm) {\n\t\t\t\tvar $closestMenu = $(elm).closest('ul');\n\t\t\t\twhile ($closestMenu.dataSM('in-mega')) {\n\t\t\t\t\t$closestMenu = $closestMenu.parent().closest('ul');\n\t\t\t\t}\n\t\t\t\treturn $closestMenu[0] || null;\n\t\t\t},\n\t\t\tgetHeight: function($elm) {\n\t\t\t\treturn this.getOffset($elm, true);\n\t\t\t},\n\t\t\t// returns precise width/height float values\n\t\t\tgetOffset: function($elm, height) {\n\t\t\t\tvar old;\n\t\t\t\tif ($elm.css('display') == 'none') {\n\t\t\t\t\told = { position: $elm[0].style.position, visibility: $elm[0].style.visibility };\n\t\t\t\t\t$elm.css({ position: 'absolute', visibility: 'hidden' }).show();\n\t\t\t\t}\n\t\t\t\tvar box = $elm[0].getBoundingClientRect && $elm[0].getBoundingClientRect(),\n\t\t\t\t\tval = box && (height ? box.height || box.bottom - box.top : box.width || box.right - box.left);\n\t\t\t\tif (!val && val !== 0) {\n\t\t\t\t\tval = height ? $elm[0].offsetHeight : $elm[0].offsetWidth;\n\t\t\t\t}\n\t\t\t\tif (old) {\n\t\t\t\t\t$elm.hide().css(old);\n\t\t\t\t}\n\t\t\t\treturn val;\n\t\t\t},\n\t\t\tgetStartZIndex: function(root) {\n\t\t\t\tvar zIndex = parseInt(this[root ? '$root' : '$firstSub'].css('z-index'));\n\t\t\t\tif (!root && isNaN(zIndex)) {\n\t\t\t\t\tzIndex = parseInt(this.$root.css('z-index'));\n\t\t\t\t}\n\t\t\t\treturn !isNaN(zIndex) ? zIndex : 1;\n\t\t\t},\n\t\t\tgetTouchPoint: function(e) {\n\t\t\t\treturn e.touches && e.touches[0] || e.changedTouches && e.changedTouches[0] || e;\n\t\t\t},\n\t\t\tgetViewport: function(height) {\n\t\t\t\tvar name = height ? 'Height' : 'Width',\n\t\t\t\t\tval = document.documentElement['client' + name],\n\t\t\t\t\tval2 = window['inner' + name];\n\t\t\t\tif (val2) {\n\t\t\t\t\tval = Math.min(val, val2);\n\t\t\t\t}\n\t\t\t\treturn val;\n\t\t\t},\n\t\t\tgetViewportHeight: function() {\n\t\t\t\treturn this.getViewport(true);\n\t\t\t},\n\t\t\tgetViewportWidth: function() {\n\t\t\t\treturn this.getViewport();\n\t\t\t},\n\t\t\tgetWidth: function($elm) {\n\t\t\t\treturn this.getOffset($elm);\n\t\t\t},\n\t\t\thandleEvents: function() {\n\t\t\t\treturn !this.disabled && this.isCSSOn();\n\t\t\t},\n\t\t\thandleItemEvents: function($a) {\n\t\t\t\treturn this.handleEvents() && !this.isLinkInMegaMenu($a);\n\t\t\t},\n\t\t\tisCollapsible: function() {\n\t\t\t\treturn this.$firstSub.css('position') == 'static';\n\t\t\t},\n\t\t\tisCSSOn: function() {\n\t\t\t\treturn this.$firstLink.css('display') != 'inline';\n\t\t\t},\n\t\t\tisFixed: function() {\n\t\t\t\tvar isFixed = this.$root.css('position') == 'fixed';\n\t\t\t\tif (!isFixed) {\n\t\t\t\t\tthis.$root.parentsUntil('body').each(function() {\n\t\t\t\t\t\tif ($(this).css('position') == 'fixed') {\n\t\t\t\t\t\t\tisFixed = true;\n\t\t\t\t\t\t\treturn false;\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t\treturn isFixed;\n\t\t\t},\n\t\t\tisLinkInMegaMenu: function($a) {\n\t\t\t\treturn $(this.getClosestMenu($a[0])).hasClass('mega-menu');\n\t\t\t},\n\t\t\tisTouchMode: function() {\n\t\t\t\treturn !mouse || this.opts.noMouseOver || this.isCollapsible();\n\t\t\t},\n\t\t\titemActivate: function($a, hideDeeperSubs) {\n\t\t\t\tvar $ul = $a.closest('ul'),\n\t\t\t\t\tlevel = $ul.dataSM('level');\n\t\t\t\t// if for some reason the parent item is not activated (e.g. this is an API call to activate the item), activate all parent items first\n\t\t\t\tif (level > 1 && (!this.activatedItems[level - 2] || this.activatedItems[level - 2][0] != $ul.dataSM('parent-a')[0])) {\n\t\t\t\t\tvar self = this;\n\t\t\t\t\t$($ul.parentsUntil('[data-smartmenus-id]', 'ul').get().reverse()).add($ul).each(function() {\n\t\t\t\t\t\tself.itemActivate($(this).dataSM('parent-a'));\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t\t// hide any visible deeper level sub menus\n\t\t\t\tif (!this.isCollapsible() || hideDeeperSubs) {\n\t\t\t\t\tthis.menuHideSubMenus(!this.activatedItems[level - 1] || this.activatedItems[level - 1][0] != $a[0] ? level - 1 : level);\n\t\t\t\t}\n\t\t\t\t// save new active item for this level\n\t\t\t\tthis.activatedItems[level - 1] = $a;\n\t\t\t\tif (this.$root.triggerHandler('activate.smapi', $a[0]) === false) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\t// show the sub menu if this item has one\n\t\t\t\tvar $sub = $a.dataSM('sub');\n\t\t\t\tif ($sub && (this.isTouchMode() || (!this.opts.showOnClick || this.clickActivated))) {\n\t\t\t\t\tthis.menuShow($sub);\n\t\t\t\t}\n\t\t\t},\n\t\t\titemBlur: function(e) {\n\t\t\t\tvar $a = $(e.currentTarget);\n\t\t\t\tif (!this.handleItemEvents($a)) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\tthis.$root.triggerHandler('blur.smapi', $a[0]);\n\t\t\t},\n\t\t\titemClick: function(e) {\n\t\t\t\tvar $a = $(e.currentTarget);\n\t\t\t\tif (!this.handleItemEvents($a)) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\tif (this.$touchScrollingSub && this.$touchScrollingSub[0] == $a.closest('ul')[0]) {\n\t\t\t\t\tthis.$touchScrollingSub = null;\n\t\t\t\t\te.stopPropagation();\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\t\t\t\tif (this.$root.triggerHandler('click.smapi', $a[0]) === false) {\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\t\t\t\tvar $sub = $a.dataSM('sub'),\n\t\t\t\t\tfirstLevelSub = $sub ? $sub.dataSM('level') == 2 : false;\n\t\t\t\tif ($sub) {\n\t\t\t\t\tvar subArrowClicked = $(e.target).is('.sub-arrow'),\n\t\t\t\t\t\tcollapsible = this.isCollapsible(),\n\t\t\t\t\t\tbehaviorToggle = /toggle$/.test(this.opts.collapsibleBehavior),\n\t\t\t\t\t\tbehaviorLink = /link$/.test(this.opts.collapsibleBehavior),\n\t\t\t\t\t\tbehaviorAccordion = /^accordion/.test(this.opts.collapsibleBehavior);\n\t\t\t\t\t// if the sub is hidden, try to show it\n\t\t\t\t\tif (!$sub.is(':visible')) {\n\t\t\t\t\t\tif (!behaviorLink || !collapsible || subArrowClicked) {\n\t\t\t\t\t\t\tif (!collapsible && this.opts.showOnClick && firstLevelSub) {\n\t\t\t\t\t\t\t\tthis.clickActivated = true;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t// try to activate the item and show the sub\n\t\t\t\t\t\t\tthis.itemActivate($a, behaviorAccordion);\n\t\t\t\t\t\t\t// if \"itemActivate\" showed the sub, prevent the click so that the link is not loaded\n\t\t\t\t\t\t\t// if it couldn't show it, then the sub menus are disabled with an !important declaration (e.g. via mobile styles) so let the link get loaded\n\t\t\t\t\t\t\tif ($sub.is(':visible')) {\n\t\t\t\t\t\t\t\tthis.focusActivated = true;\n\t\t\t\t\t\t\t\treturn false;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t// if the sub is visible and showOnClick: true, hide the sub\n\t\t\t\t\t} else if (!collapsible && this.opts.showOnClick && firstLevelSub) {\n\t\t\t\t\t\tthis.menuHide($sub);\n\t\t\t\t\t\tthis.clickActivated = false;\n\t\t\t\t\t\tthis.focusActivated = false;\n\t\t\t\t\t\treturn false;\n\t\t\t\t\t// if the sub is visible and we are in collapsible mode\n\t\t\t\t\t} else if (collapsible && (behaviorToggle || subArrowClicked)) {\n\t\t\t\t\t\tthis.itemActivate($a, behaviorAccordion);\n\t\t\t\t\t\tthis.menuHide($sub);\n\t\t\t\t\t\treturn false;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif (!collapsible && this.opts.showOnClick && firstLevelSub || $a.hasClass('disabled') || this.$root.triggerHandler('select.smapi', $a[0]) === false) {\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\t\t\t},\n\t\t\titemDown: function(e) {\n\t\t\t\tvar $a = $(e.currentTarget);\n\t\t\t\tif (!this.handleItemEvents($a)) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\t$a.dataSM('mousedown', true);\n\t\t\t},\n\t\t\titemEnter: function(e) {\n\t\t\t\tvar $a = $(e.currentTarget);\n\t\t\t\tif (!this.handleItemEvents($a)) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\tif (!this.isTouchMode()) {\n\t\t\t\t\tif (this.showTimeout) {\n\t\t\t\t\t\tclearTimeout(this.showTimeout);\n\t\t\t\t\t\tthis.showTimeout = 0;\n\t\t\t\t\t}\n\t\t\t\t\tvar self = this;\n\t\t\t\t\tthis.showTimeout = setTimeout(function() { self.itemActivate($a); }, this.opts.showOnClick && $a.closest('ul').dataSM('level') == 1 ? 1 : this.opts.showTimeout);\n\t\t\t\t}\n\t\t\t\tthis.$root.triggerHandler('mouseenter.smapi', $a[0]);\n\t\t\t},\n\t\t\titemFocus: function(e) {\n\t\t\t\tvar $a = $(e.currentTarget);\n\t\t\t\tif (!this.handleItemEvents($a)) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\t// fix (the mousedown check): in some browsers a tap/click produces consecutive focus + click events so we don't need to activate the item on focus\n\t\t\t\tif (this.focusActivated && (!this.isTouchMode() || !$a.dataSM('mousedown')) && (!this.activatedItems.length || this.activatedItems[this.activatedItems.length - 1][0] != $a[0])) {\n\t\t\t\t\tthis.itemActivate($a, true);\n\t\t\t\t}\n\t\t\t\tthis.$root.triggerHandler('focus.smapi', $a[0]);\n\t\t\t},\n\t\t\titemLeave: function(e) {\n\t\t\t\tvar $a = $(e.currentTarget);\n\t\t\t\tif (!this.handleItemEvents($a)) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\tif (!this.isTouchMode()) {\n\t\t\t\t\t$a[0].blur();\n\t\t\t\t\tif (this.showTimeout) {\n\t\t\t\t\t\tclearTimeout(this.showTimeout);\n\t\t\t\t\t\tthis.showTimeout = 0;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t$a.removeDataSM('mousedown');\n\t\t\t\tthis.$root.triggerHandler('mouseleave.smapi', $a[0]);\n\t\t\t},\n\t\t\tmenuHide: function($sub) {\n\t\t\t\tif (this.$root.triggerHandler('beforehide.smapi', $sub[0]) === false) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\tif (canAnimate) {\n\t\t\t\t\t$sub.stop(true, true);\n\t\t\t\t}\n\t\t\t\tif ($sub.css('display') != 'none') {\n\t\t\t\t\tvar complete = function() {\n\t\t\t\t\t\t// unset z-index\n\t\t\t\t\t\t$sub.css('z-index', '');\n\t\t\t\t\t};\n\t\t\t\t\t// if sub is collapsible (mobile view)\n\t\t\t\t\tif (this.isCollapsible()) {\n\t\t\t\t\t\tif (canAnimate && this.opts.collapsibleHideFunction) {\n\t\t\t\t\t\t\tthis.opts.collapsibleHideFunction.call(this, $sub, complete);\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t$sub.hide(this.opts.collapsibleHideDuration, complete);\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\tif (canAnimate && this.opts.hideFunction) {\n\t\t\t\t\t\t\tthis.opts.hideFunction.call(this, $sub, complete);\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t$sub.hide(this.opts.hideDuration, complete);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\t// deactivate scrolling if it is activated for this sub\n\t\t\t\t\tif ($sub.dataSM('scroll')) {\n\t\t\t\t\t\tthis.menuScrollStop($sub);\n\t\t\t\t\t\t$sub.css({ 'touch-action': '', '-ms-touch-action': '', '-webkit-transform': '', transform: '' })\n\t\t\t\t\t\t\t.off('.smartmenus_scroll').removeDataSM('scroll').dataSM('scroll-arrows').hide();\n\t\t\t\t\t}\n\t\t\t\t\t// unhighlight parent item + accessibility\n\t\t\t\t\t$sub.dataSM('parent-a').removeClass('highlighted').attr('aria-expanded', 'false');\n\t\t\t\t\t$sub.attr({\n\t\t\t\t\t\t'aria-expanded': 'false',\n\t\t\t\t\t\t'aria-hidden': 'true'\n\t\t\t\t\t});\n\t\t\t\t\tvar level = $sub.dataSM('level');\n\t\t\t\t\tthis.activatedItems.splice(level - 1, 1);\n\t\t\t\t\tthis.visibleSubMenus.splice($.inArray($sub, this.visibleSubMenus), 1);\n\t\t\t\t\tthis.$root.triggerHandler('hide.smapi', $sub[0]);\n\t\t\t\t}\n\t\t\t},\n\t\t\tmenuHideAll: function() {\n\t\t\t\tif (this.showTimeout) {\n\t\t\t\t\tclearTimeout(this.showTimeout);\n\t\t\t\t\tthis.showTimeout = 0;\n\t\t\t\t}\n\t\t\t\t// hide all subs\n\t\t\t\t// if it's a popup, this.visibleSubMenus[0] is the root UL\n\t\t\t\tvar level = this.opts.isPopup ? 1 : 0;\n\t\t\t\tfor (var i = this.visibleSubMenus.length - 1; i >= level; i--) {\n\t\t\t\t\tthis.menuHide(this.visibleSubMenus[i]);\n\t\t\t\t}\n\t\t\t\t// hide root if it's popup\n\t\t\t\tif (this.opts.isPopup) {\n\t\t\t\t\tif (canAnimate) {\n\t\t\t\t\t\tthis.$root.stop(true, true);\n\t\t\t\t\t}\n\t\t\t\t\tif (this.$root.is(':visible')) {\n\t\t\t\t\t\tif (canAnimate && this.opts.hideFunction) {\n\t\t\t\t\t\t\tthis.opts.hideFunction.call(this, this.$root);\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tthis.$root.hide(this.opts.hideDuration);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tthis.activatedItems = [];\n\t\t\t\tthis.visibleSubMenus = [];\n\t\t\t\tthis.clickActivated = false;\n\t\t\t\tthis.focusActivated = false;\n\t\t\t\t// reset z-index increment\n\t\t\t\tthis.zIndexInc = 0;\n\t\t\t\tthis.$root.triggerHandler('hideAll.smapi');\n\t\t\t},\n\t\t\tmenuHideSubMenus: function(level) {\n\t\t\t\tfor (var i = this.activatedItems.length - 1; i >= level; i--) {\n\t\t\t\t\tvar $sub = this.activatedItems[i].dataSM('sub');\n\t\t\t\t\tif ($sub) {\n\t\t\t\t\t\tthis.menuHide($sub);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\t\t\tmenuInit: function($ul) {\n\t\t\t\tif (!$ul.dataSM('in-mega')) {\n\t\t\t\t\t// mark UL's in mega drop downs (if any) so we can neglect them\n\t\t\t\t\tif ($ul.hasClass('mega-menu')) {\n\t\t\t\t\t\t$ul.find('ul').dataSM('in-mega', true);\n\t\t\t\t\t}\n\t\t\t\t\t// get level (much faster than, for example, using parentsUntil)\n\t\t\t\t\tvar level = 2,\n\t\t\t\t\t\tpar = $ul[0];\n\t\t\t\t\twhile ((par = par.parentNode.parentNode) != this.$root[0]) {\n\t\t\t\t\t\tlevel++;\n\t\t\t\t\t}\n\t\t\t\t\t// cache stuff for quick access\n\t\t\t\t\tvar $a = $ul.prevAll('a').eq(-1);\n\t\t\t\t\t// if the link is nested (e.g. in a heading)\n\t\t\t\t\tif (!$a.length) {\n\t\t\t\t\t\t$a = $ul.prevAll().find('a').eq(-1);\n\t\t\t\t\t}\n\t\t\t\t\t$a.addClass('has-submenu').dataSM('sub', $ul);\n\t\t\t\t\t$ul.dataSM('parent-a', $a)\n\t\t\t\t\t\t.dataSM('level', level)\n\t\t\t\t\t\t.parent().dataSM('sub', $ul);\n\t\t\t\t\t// accessibility\n\t\t\t\t\tvar aId = $a.attr('id') || this.accessIdPrefix + (++this.idInc),\n\t\t\t\t\t\tulId = $ul.attr('id') || this.accessIdPrefix + (++this.idInc);\n\t\t\t\t\t$a.attr({\n\t\t\t\t\t\tid: aId,\n\t\t\t\t\t\t'aria-haspopup': 'true',\n\t\t\t\t\t\t'aria-controls': ulId,\n\t\t\t\t\t\t'aria-expanded': 'false'\n\t\t\t\t\t});\n\t\t\t\t\t$ul.attr({\n\t\t\t\t\t\tid: ulId,\n\t\t\t\t\t\t'role': 'group',\n\t\t\t\t\t\t'aria-hidden': 'true',\n\t\t\t\t\t\t'aria-labelledby': aId,\n\t\t\t\t\t\t'aria-expanded': 'false'\n\t\t\t\t\t});\n\t\t\t\t\t// add sub indicator to parent item\n\t\t\t\t\tif (this.opts.subIndicators) {\n\t\t\t\t\t\t$a[this.opts.subIndicatorsPos](this.$subArrow.clone());\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\t\t\tmenuPosition: function($sub) {\n\t\t\t\tvar $a = $sub.dataSM('parent-a'),\n\t\t\t\t\t$li = $a.closest('li'),\n\t\t\t\t\t$ul = $li.parent(),\n\t\t\t\t\tlevel = $sub.dataSM('level'),\n\t\t\t\t\tsubW = this.getWidth($sub),\n\t\t\t\t\tsubH = this.getHeight($sub),\n\t\t\t\t\titemOffset = $a.offset(),\n\t\t\t\t\titemX = itemOffset.left,\n\t\t\t\t\titemY = itemOffset.top,\n\t\t\t\t\titemW = this.getWidth($a),\n\t\t\t\t\titemH = this.getHeight($a),\n\t\t\t\t\t$win = $(window),\n\t\t\t\t\twinX = $win.scrollLeft(),\n\t\t\t\t\twinY = $win.scrollTop(),\n\t\t\t\t\twinW = this.getViewportWidth(),\n\t\t\t\t\twinH = this.getViewportHeight(),\n\t\t\t\t\thorizontalParent = $ul.parent().is('[data-sm-horizontal-sub]') || level == 2 && !$ul.hasClass('sm-vertical'),\n\t\t\t\t\trightToLeft = this.opts.rightToLeftSubMenus && !$li.is('[data-sm-reverse]') || !this.opts.rightToLeftSubMenus && $li.is('[data-sm-reverse]'),\n\t\t\t\t\tsubOffsetX = level == 2 ? this.opts.mainMenuSubOffsetX : this.opts.subMenusSubOffsetX,\n\t\t\t\t\tsubOffsetY = level == 2 ? this.opts.mainMenuSubOffsetY : this.opts.subMenusSubOffsetY,\n\t\t\t\t\tx, y;\n\t\t\t\tif (horizontalParent) {\n\t\t\t\t\tx = rightToLeft ? itemW - subW - subOffsetX : subOffsetX;\n\t\t\t\t\ty = this.opts.bottomToTopSubMenus ? -subH - subOffsetY : itemH + subOffsetY;\n\t\t\t\t} else {\n\t\t\t\t\tx = rightToLeft ? subOffsetX - subW : itemW - subOffsetX;\n\t\t\t\t\ty = this.opts.bottomToTopSubMenus ? itemH - subOffsetY - subH : subOffsetY;\n\t\t\t\t}\n\t\t\t\tif (this.opts.keepInViewport) {\n\t\t\t\t\tvar absX = itemX + x,\n\t\t\t\t\t\tabsY = itemY + y;\n\t\t\t\t\tif (rightToLeft && absX < winX) {\n\t\t\t\t\t\tx = horizontalParent ? winX - absX + x : itemW - subOffsetX;\n\t\t\t\t\t} else if (!rightToLeft && absX + subW > winX + winW) {\n\t\t\t\t\t\tx = horizontalParent ? winX + winW - subW - absX + x : subOffsetX - subW;\n\t\t\t\t\t}\n\t\t\t\t\tif (!horizontalParent) {\n\t\t\t\t\t\tif (subH < winH && absY + subH > winY + winH) {\n\t\t\t\t\t\t\ty += winY + winH - subH - absY;\n\t\t\t\t\t\t} else if (subH >= winH || absY < winY) {\n\t\t\t\t\t\t\ty += winY - absY;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\t// do we need scrolling?\n\t\t\t\t\t// 0.49 used for better precision when dealing with float values\n\t\t\t\t\tif (horizontalParent && (absY + subH > winY + winH + 0.49 || absY < winY) || !horizontalParent && subH > winH + 0.49) {\n\t\t\t\t\t\tvar self = this;\n\t\t\t\t\t\tif (!$sub.dataSM('scroll-arrows')) {\n\t\t\t\t\t\t\t$sub.dataSM('scroll-arrows', $([$('<span class=\"scroll-up\"><span class=\"scroll-up-arrow\"></span></span>')[0], $('<span class=\"scroll-down\"><span class=\"scroll-down-arrow\"></span></span>')[0]])\n\t\t\t\t\t\t\t\t.on({\n\t\t\t\t\t\t\t\t\tmouseenter: function() {\n\t\t\t\t\t\t\t\t\t\t$sub.dataSM('scroll').up = $(this).hasClass('scroll-up');\n\t\t\t\t\t\t\t\t\t\tself.menuScroll($sub);\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\tmouseleave: function(e) {\n\t\t\t\t\t\t\t\t\t\tself.menuScrollStop($sub);\n\t\t\t\t\t\t\t\t\t\tself.menuScrollOut($sub, e);\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t'mousewheel DOMMouseScroll': function(e) { e.preventDefault(); }\n\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t.insertAfter($sub)\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t}\n\t\t\t\t\t\t// bind scroll events and save scroll data for this sub\n\t\t\t\t\t\tvar eNS = '.smartmenus_scroll';\n\t\t\t\t\t\t$sub.dataSM('scroll', {\n\t\t\t\t\t\t\t\ty: this.cssTransforms3d ? 0 : y - itemH,\n\t\t\t\t\t\t\t\tstep: 1,\n\t\t\t\t\t\t\t\t// cache stuff for faster recalcs later\n\t\t\t\t\t\t\t\titemH: itemH,\n\t\t\t\t\t\t\t\tsubH: subH,\n\t\t\t\t\t\t\t\tarrowDownH: this.getHeight($sub.dataSM('scroll-arrows').eq(1))\n\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t.on(getEventsNS({\n\t\t\t\t\t\t\t\t'mouseover': function(e) { self.menuScrollOver($sub, e); },\n\t\t\t\t\t\t\t\t'mouseout': function(e) { self.menuScrollOut($sub, e); },\n\t\t\t\t\t\t\t\t'mousewheel DOMMouseScroll': function(e) { self.menuScrollMousewheel($sub, e); }\n\t\t\t\t\t\t\t}, eNS))\n\t\t\t\t\t\t\t.dataSM('scroll-arrows').css({ top: 'auto', left: '0', marginLeft: x + (parseInt($sub.css('border-left-width')) || 0), width: subW - (parseInt($sub.css('border-left-width')) || 0) - (parseInt($sub.css('border-right-width')) || 0), zIndex: $sub.css('z-index') })\n\t\t\t\t\t\t\t\t.eq(horizontalParent && this.opts.bottomToTopSubMenus ? 0 : 1).show();\n\t\t\t\t\t\t// when a menu tree is fixed positioned we allow scrolling via touch too\n\t\t\t\t\t\t// since there is no other way to access such long sub menus if no mouse is present\n\t\t\t\t\t\tif (this.isFixed()) {\n\t\t\t\t\t\t\tvar events = {};\n\t\t\t\t\t\t\tevents[touchEvents ? 'touchstart touchmove touchend' : 'pointerdown pointermove pointerup MSPointerDown MSPointerMove MSPointerUp'] = function(e) {\n\t\t\t\t\t\t\t\tself.menuScrollTouch($sub, e);\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\t$sub.css({ 'touch-action': 'none', '-ms-touch-action': 'none' }).on(getEventsNS(events, eNS));\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t$sub.css({ top: 'auto', left: '0', marginLeft: x, marginTop: y - itemH });\n\t\t\t},\n\t\t\tmenuScroll: function($sub, once, step) {\n\t\t\t\tvar data = $sub.dataSM('scroll'),\n\t\t\t\t\t$arrows = $sub.dataSM('scroll-arrows'),\n\t\t\t\t\tend = data.up ? data.upEnd : data.downEnd,\n\t\t\t\t\tdiff;\n\t\t\t\tif (!once && data.momentum) {\n\t\t\t\t\tdata.momentum *= 0.92;\n\t\t\t\t\tdiff = data.momentum;\n\t\t\t\t\tif (diff < 0.5) {\n\t\t\t\t\t\tthis.menuScrollStop($sub);\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t} else {\n\t\t\t\t\tdiff = step || (once || !this.opts.scrollAccelerate ? this.opts.scrollStep : Math.floor(data.step));\n\t\t\t\t}\n\t\t\t\t// hide any visible deeper level sub menus\n\t\t\t\tvar level = $sub.dataSM('level');\n\t\t\t\tif (this.activatedItems[level - 1] && this.activatedItems[level - 1].dataSM('sub') && this.activatedItems[level - 1].dataSM('sub').is(':visible')) {\n\t\t\t\t\tthis.menuHideSubMenus(level - 1);\n\t\t\t\t}\n\t\t\t\tdata.y = data.up && end <= data.y || !data.up && end >= data.y ? data.y : (Math.abs(end - data.y) > diff ? data.y + (data.up ? diff : -diff) : end);\n\t\t\t\t$sub.css(this.cssTransforms3d ? { '-webkit-transform': 'translate3d(0, ' + data.y + 'px, 0)', transform: 'translate3d(0, ' + data.y + 'px, 0)' } : { marginTop: data.y });\n\t\t\t\t// show opposite arrow if appropriate\n\t\t\t\tif (mouse && (data.up && data.y > data.downEnd || !data.up && data.y < data.upEnd)) {\n\t\t\t\t\t$arrows.eq(data.up ? 1 : 0).show();\n\t\t\t\t}\n\t\t\t\t// if we've reached the end\n\t\t\t\tif (data.y == end) {\n\t\t\t\t\tif (mouse) {\n\t\t\t\t\t\t$arrows.eq(data.up ? 0 : 1).hide();\n\t\t\t\t\t}\n\t\t\t\t\tthis.menuScrollStop($sub);\n\t\t\t\t} else if (!once) {\n\t\t\t\t\tif (this.opts.scrollAccelerate && data.step < this.opts.scrollStep) {\n\t\t\t\t\t\tdata.step += 0.2;\n\t\t\t\t\t}\n\t\t\t\t\tvar self = this;\n\t\t\t\t\tthis.scrollTimeout = requestAnimationFrame(function() { self.menuScroll($sub); });\n\t\t\t\t}\n\t\t\t},\n\t\t\tmenuScrollMousewheel: function($sub, e) {\n\t\t\t\tif (this.getClosestMenu(e.target) == $sub[0]) {\n\t\t\t\t\te = e.originalEvent;\n\t\t\t\t\tvar up = (e.wheelDelta || -e.detail) > 0;\n\t\t\t\t\tif ($sub.dataSM('scroll-arrows').eq(up ? 0 : 1).is(':visible')) {\n\t\t\t\t\t\t$sub.dataSM('scroll').up = up;\n\t\t\t\t\t\tthis.menuScroll($sub, true);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\te.preventDefault();\n\t\t\t},\n\t\t\tmenuScrollOut: function($sub, e) {\n\t\t\t\tif (mouse) {\n\t\t\t\t\tif (!/^scroll-(up|down)/.test((e.relatedTarget || '').className) && ($sub[0] != e.relatedTarget && !$.contains($sub[0], e.relatedTarget) || this.getClosestMenu(e.relatedTarget) != $sub[0])) {\n\t\t\t\t\t\t$sub.dataSM('scroll-arrows').css('visibility', 'hidden');\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\t\t\tmenuScrollOver: function($sub, e) {\n\t\t\t\tif (mouse) {\n\t\t\t\t\tif (!/^scroll-(up|down)/.test(e.target.className) && this.getClosestMenu(e.target) == $sub[0]) {\n\t\t\t\t\t\tthis.menuScrollRefreshData($sub);\n\t\t\t\t\t\tvar data = $sub.dataSM('scroll'),\n\t\t\t\t\t\t\tupEnd = $(window).scrollTop() - $sub.dataSM('parent-a').offset().top - data.itemH;\n\t\t\t\t\t\t$sub.dataSM('scroll-arrows').eq(0).css('margin-top', upEnd).end()\n\t\t\t\t\t\t\t.eq(1).css('margin-top', upEnd + this.getViewportHeight() - data.arrowDownH).end()\n\t\t\t\t\t\t\t.css('visibility', 'visible');\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\t\t\tmenuScrollRefreshData: function($sub) {\n\t\t\t\tvar data = $sub.dataSM('scroll'),\n\t\t\t\t\tupEnd = $(window).scrollTop() - $sub.dataSM('parent-a').offset().top - data.itemH;\n\t\t\t\tif (this.cssTransforms3d) {\n\t\t\t\t\tupEnd = -(parseFloat($sub.css('margin-top')) - upEnd);\n\t\t\t\t}\n\t\t\t\t$.extend(data, {\n\t\t\t\t\tupEnd: upEnd,\n\t\t\t\t\tdownEnd: upEnd + this.getViewportHeight() - data.subH\n\t\t\t\t});\n\t\t\t},\n\t\t\tmenuScrollStop: function($sub) {\n\t\t\t\tif (this.scrollTimeout) {\n\t\t\t\t\tcancelAnimationFrame(this.scrollTimeout);\n\t\t\t\t\tthis.scrollTimeout = 0;\n\t\t\t\t\t$sub.dataSM('scroll').step = 1;\n\t\t\t\t\treturn true;\n\t\t\t\t}\n\t\t\t},\n\t\t\tmenuScrollTouch: function($sub, e) {\n\t\t\t\te = e.originalEvent;\n\t\t\t\tif (isTouchEvent(e)) {\n\t\t\t\t\tvar touchPoint = this.getTouchPoint(e);\n\t\t\t\t\t// neglect event if we touched a visible deeper level sub menu\n\t\t\t\t\tif (this.getClosestMenu(touchPoint.target) == $sub[0]) {\n\t\t\t\t\t\tvar data = $sub.dataSM('scroll');\n\t\t\t\t\t\tif (/(start|down)$/i.test(e.type)) {\n\t\t\t\t\t\t\tif (this.menuScrollStop($sub)) {\n\t\t\t\t\t\t\t\t// if we were scrolling, just stop and don't activate any link on the first touch\n\t\t\t\t\t\t\t\te.preventDefault();\n\t\t\t\t\t\t\t\tthis.$touchScrollingSub = $sub;\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\tthis.$touchScrollingSub = null;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t// update scroll data since the user might have zoomed, etc.\n\t\t\t\t\t\t\tthis.menuScrollRefreshData($sub);\n\t\t\t\t\t\t\t// extend it with the touch properties\n\t\t\t\t\t\t\t$.extend(data, {\n\t\t\t\t\t\t\t\ttouchStartY: touchPoint.pageY,\n\t\t\t\t\t\t\t\ttouchStartTime: e.timeStamp\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t} else if (/move$/i.test(e.type)) {\n\t\t\t\t\t\t\tvar prevY = data.touchY !== undefined ? data.touchY : data.touchStartY;\n\t\t\t\t\t\t\tif (prevY !== undefined && prevY != touchPoint.pageY) {\n\t\t\t\t\t\t\t\tthis.$touchScrollingSub = $sub;\n\t\t\t\t\t\t\t\tvar up = prevY < touchPoint.pageY;\n\t\t\t\t\t\t\t\t// changed direction? reset...\n\t\t\t\t\t\t\t\tif (data.up !== undefined && data.up != up) {\n\t\t\t\t\t\t\t\t\t$.extend(data, {\n\t\t\t\t\t\t\t\t\t\ttouchStartY: touchPoint.pageY,\n\t\t\t\t\t\t\t\t\t\ttouchStartTime: e.timeStamp\n\t\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t$.extend(data, {\n\t\t\t\t\t\t\t\t\tup: up,\n\t\t\t\t\t\t\t\t\ttouchY: touchPoint.pageY\n\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t\tthis.menuScroll($sub, true, Math.abs(touchPoint.pageY - prevY));\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\te.preventDefault();\n\t\t\t\t\t\t} else { // touchend/pointerup\n\t\t\t\t\t\t\tif (data.touchY !== undefined) {\n\t\t\t\t\t\t\t\tif (data.momentum = Math.pow(Math.abs(touchPoint.pageY - data.touchStartY) / (e.timeStamp - data.touchStartTime), 2) * 15) {\n\t\t\t\t\t\t\t\t\tthis.menuScrollStop($sub);\n\t\t\t\t\t\t\t\t\tthis.menuScroll($sub);\n\t\t\t\t\t\t\t\t\te.preventDefault();\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tdelete data.touchY;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\t\t\tmenuShow: function($sub) {\n\t\t\t\tif (!$sub.dataSM('beforefirstshowfired')) {\n\t\t\t\t\t$sub.dataSM('beforefirstshowfired', true);\n\t\t\t\t\tif (this.$root.triggerHandler('beforefirstshow.smapi', $sub[0]) === false) {\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif (this.$root.triggerHandler('beforeshow.smapi', $sub[0]) === false) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\t$sub.dataSM('shown-before', true);\n\t\t\t\tif (canAnimate) {\n\t\t\t\t\t$sub.stop(true, true);\n\t\t\t\t}\n\t\t\t\tif (!$sub.is(':visible')) {\n\t\t\t\t\t// highlight parent item\n\t\t\t\t\tvar $a = $sub.dataSM('parent-a'),\n\t\t\t\t\t\tcollapsible = this.isCollapsible();\n\t\t\t\t\tif (this.opts.keepHighlighted || collapsible) {\n\t\t\t\t\t\t$a.addClass('highlighted');\n\t\t\t\t\t}\n\t\t\t\t\tif (collapsible) {\n\t\t\t\t\t\t$sub.removeClass('sm-nowrap').css({ zIndex: '', width: 'auto', minWidth: '', maxWidth: '', top: '', left: '', marginLeft: '', marginTop: '' });\n\t\t\t\t\t} else {\n\t\t\t\t\t\t// set z-index\n\t\t\t\t\t\t$sub.css('z-index', this.zIndexInc = (this.zIndexInc || this.getStartZIndex()) + 1);\n\t\t\t\t\t\t// min/max-width fix - no way to rely purely on CSS as all UL's are nested\n\t\t\t\t\t\tif (this.opts.subMenusMinWidth || this.opts.subMenusMaxWidth) {\n\t\t\t\t\t\t\t$sub.css({ width: 'auto', minWidth: '', maxWidth: '' }).addClass('sm-nowrap');\n\t\t\t\t\t\t\tif (this.opts.subMenusMinWidth) {\n\t\t\t\t\t\t\t \t$sub.css('min-width', this.opts.subMenusMinWidth);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tif (this.opts.subMenusMaxWidth) {\n\t\t\t\t\t\t\t \tvar noMaxWidth = this.getWidth($sub);\n\t\t\t\t\t\t\t \t$sub.css('max-width', this.opts.subMenusMaxWidth);\n\t\t\t\t\t\t\t\tif (noMaxWidth > this.getWidth($sub)) {\n\t\t\t\t\t\t\t\t\t$sub.removeClass('sm-nowrap').css('width', this.opts.subMenusMaxWidth);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tthis.menuPosition($sub);\n\t\t\t\t\t}\n\t\t\t\t\tvar complete = function() {\n\t\t\t\t\t\t// fix: \"overflow: hidden;\" is not reset on animation complete in jQuery < 1.9.0 in Chrome when global \"box-sizing: border-box;\" is used\n\t\t\t\t\t\t$sub.css('overflow', '');\n\t\t\t\t\t};\n\t\t\t\t\t// if sub is collapsible (mobile view)\n\t\t\t\t\tif (collapsible) {\n\t\t\t\t\t\tif (canAnimate && this.opts.collapsibleShowFunction) {\n\t\t\t\t\t\t\tthis.opts.collapsibleShowFunction.call(this, $sub, complete);\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t$sub.show(this.opts.collapsibleShowDuration, complete);\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\tif (canAnimate && this.opts.showFunction) {\n\t\t\t\t\t\t\tthis.opts.showFunction.call(this, $sub, complete);\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t$sub.show(this.opts.showDuration, complete);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\t// accessibility\n\t\t\t\t\t$a.attr('aria-expanded', 'true');\n\t\t\t\t\t$sub.attr({\n\t\t\t\t\t\t'aria-expanded': 'true',\n\t\t\t\t\t\t'aria-hidden': 'false'\n\t\t\t\t\t});\n\t\t\t\t\t// store sub menu in visible array\n\t\t\t\t\tthis.visibleSubMenus.push($sub);\n\t\t\t\t\tthis.$root.triggerHandler('show.smapi', $sub[0]);\n\t\t\t\t}\n\t\t\t},\n\t\t\tpopupHide: function(noHideTimeout) {\n\t\t\t\tif (this.hideTimeout) {\n\t\t\t\t\tclearTimeout(this.hideTimeout);\n\t\t\t\t\tthis.hideTimeout = 0;\n\t\t\t\t}\n\t\t\t\tvar self = this;\n\t\t\t\tthis.hideTimeout = setTimeout(function() {\n\t\t\t\t\tself.menuHideAll();\n\t\t\t\t}, noHideTimeout ? 1 : this.opts.hideTimeout);\n\t\t\t},\n\t\t\tpopupShow: function(left, top) {\n\t\t\t\tif (!this.opts.isPopup) {\n\t\t\t\t\talert('SmartMenus jQuery Error:\\n\\nIf you want to show this menu via the \"popupShow\" method, set the isPopup:true option.');\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\tif (this.hideTimeout) {\n\t\t\t\t\tclearTimeout(this.hideTimeout);\n\t\t\t\t\tthis.hideTimeout = 0;\n\t\t\t\t}\n\t\t\t\tthis.$root.dataSM('shown-before', true);\n\t\t\t\tif (canAnimate) {\n\t\t\t\t\tthis.$root.stop(true, true);\n\t\t\t\t}\n\t\t\t\tif (!this.$root.is(':visible')) {\n\t\t\t\t\tthis.$root.css({ left: left, top: top });\n\t\t\t\t\t// show menu\n\t\t\t\t\tvar self = this,\n\t\t\t\t\t\tcomplete = function() {\n\t\t\t\t\t\t\tself.$root.css('overflow', '');\n\t\t\t\t\t\t};\n\t\t\t\t\tif (canAnimate && this.opts.showFunction) {\n\t\t\t\t\t\tthis.opts.showFunction.call(this, this.$root, complete);\n\t\t\t\t\t} else {\n\t\t\t\t\t\tthis.$root.show(this.opts.showDuration, complete);\n\t\t\t\t\t}\n\t\t\t\t\tthis.visibleSubMenus[0] = this.$root;\n\t\t\t\t}\n\t\t\t},\n\t\t\trefresh: function() {\n\t\t\t\tthis.destroy(true);\n\t\t\t\tthis.init(true);\n\t\t\t},\n\t\t\trootKeyDown: function(e) {\n\t\t\t\tif (!this.handleEvents()) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\tswitch (e.keyCode) {\n\t\t\t\t\tcase 27: // reset on Esc\n\t\t\t\t\t\tvar $activeTopItem = this.activatedItems[0];\n\t\t\t\t\t\tif ($activeTopItem) {\n\t\t\t\t\t\t\tthis.menuHideAll();\n\t\t\t\t\t\t\t$activeTopItem[0].focus();\n\t\t\t\t\t\t\tvar $sub = $activeTopItem.dataSM('sub');\n\t\t\t\t\t\t\tif ($sub) {\n\t\t\t\t\t\t\t\tthis.menuHide($sub);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase 32: // activate item's sub on Space\n\t\t\t\t\t\tvar $target = $(e.target);\n\t\t\t\t\t\tif ($target.is('a') && this.handleItemEvents($target)) {\n\t\t\t\t\t\t\tvar $sub = $target.dataSM('sub');\n\t\t\t\t\t\t\tif ($sub && !$sub.is(':visible')) {\n\t\t\t\t\t\t\t\tthis.itemClick({ currentTarget: e.target });\n\t\t\t\t\t\t\t\te.preventDefault();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t},\n\t\t\trootOut: function(e) {\n\t\t\t\tif (!this.handleEvents() || this.isTouchMode() || e.target == this.$root[0]) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\tif (this.hideTimeout) {\n\t\t\t\t\tclearTimeout(this.hideTimeout);\n\t\t\t\t\tthis.hideTimeout = 0;\n\t\t\t\t}\n\t\t\t\tif (!this.opts.showOnClick || !this.opts.hideOnClick) {\n\t\t\t\t\tvar self = this;\n\t\t\t\t\tthis.hideTimeout = setTimeout(function() { self.menuHideAll(); }, this.opts.hideTimeout);\n\t\t\t\t}\n\t\t\t},\n\t\t\trootOver: function(e) {\n\t\t\t\tif (!this.handleEvents() || this.isTouchMode() || e.target == this.$root[0]) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\tif (this.hideTimeout) {\n\t\t\t\t\tclearTimeout(this.hideTimeout);\n\t\t\t\t\tthis.hideTimeout = 0;\n\t\t\t\t}\n\t\t\t},\n\t\t\twinResize: function(e) {\n\t\t\t\tif (!this.handleEvents()) {\n\t\t\t\t\t// we still need to resize the disable overlay if it's visible\n\t\t\t\t\tif (this.$disableOverlay) {\n\t\t\t\t\t\tvar pos = this.$root.offset();\n\t \t\t\t\t\tthis.$disableOverlay.css({\n\t\t\t\t\t\t\ttop: pos.top,\n\t\t\t\t\t\t\tleft: pos.left,\n\t\t\t\t\t\t\twidth: this.$root.outerWidth(),\n\t\t\t\t\t\t\theight: this.$root.outerHeight()\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\t// hide sub menus on resize - on mobile do it only on orientation change\n\t\t\t\tif (!('onorientationchange' in window) || e.type == 'orientationchange') {\n\t\t\t\t\tvar collapsible = this.isCollapsible();\n\t\t\t\t\t// if it was collapsible before resize and still is, don't do it\n\t\t\t\t\tif (!(this.wasCollapsible && collapsible)) { \n\t\t\t\t\t\tif (this.activatedItems.length) {\n\t\t\t\t\t\t\tthis.activatedItems[this.activatedItems.length - 1][0].blur();\n\t\t\t\t\t\t}\n\t\t\t\t\t\tthis.menuHideAll();\n\t\t\t\t\t}\n\t\t\t\t\tthis.wasCollapsible = collapsible;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t});\n\n\t$.fn.dataSM = function(key, val) {\n\t\tif (val) {\n\t\t\treturn this.data(key + '_smartmenus', val);\n\t\t}\n\t\treturn this.data(key + '_smartmenus');\n\t};\n\n\t$.fn.removeDataSM = function(key) {\n\t\treturn this.removeData(key + '_smartmenus');\n\t};\n\n\t$.fn.smartmenus = function(options) {\n\t\tif (typeof options == 'string') {\n\t\t\tvar args = arguments,\n\t\t\t\tmethod = options;\n\t\t\tArray.prototype.shift.call(args);\n\t\t\treturn this.each(function() {\n\t\t\t\tvar smartmenus = $(this).data('smartmenus');\n\t\t\t\tif (smartmenus && smartmenus[method]) {\n\t\t\t\t\tsmartmenus[method].apply(smartmenus, args);\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t\treturn this.each(function() {\n\t\t\t// [data-sm-options] attribute on the root UL\n\t\t\tvar dataOpts = $(this).data('sm-options') || null;\n\t\t\tif (dataOpts && typeof dataOpts !== 'object') {\n\t\t\t\ttry {\n\t\t\t\t\tdataOpts = eval('(' + dataOpts + ')');\n\t\t\t\t} catch(e) {\n\t\t\t\t\tdataOpts = null;\n\t\t\t\t\talert('ERROR\\n\\nSmartMenus jQuery init:\\nInvalid \"data-sm-options\" attribute value syntax.');\n\t\t\t\t};\n\t\t\t}\n\t\t\tnew $.SmartMenus(this, $.extend({}, $.fn.smartmenus.defaults, options, dataOpts));\n\t\t});\n\t};\n\n\t// default settings\n\t$.fn.smartmenus.defaults = {\n\t\tisPopup:\t\tfalse,\t\t// is this a popup menu (can be shown via the popupShow/popupHide methods) or a permanent menu bar\n\t\tmainMenuSubOffsetX:\t0,\t\t// pixels offset from default position\n\t\tmainMenuSubOffsetY:\t0,\t\t// pixels offset from default position\n\t\tsubMenusSubOffsetX:\t0,\t\t// pixels offset from default position\n\t\tsubMenusSubOffsetY:\t0,\t\t// pixels offset from default position\n\t\tsubMenusMinWidth:\t'10em',\t\t// min-width for the sub menus (any CSS unit) - if set, the fixed width set in CSS will be ignored\n\t\tsubMenusMaxWidth:\t'20em',\t\t// max-width for the sub menus (any CSS unit) - if set, the fixed width set in CSS will be ignored\n\t\tsubIndicators: \t\ttrue,\t\t// create sub menu indicators - creates a SPAN and inserts it in the A\n\t\tsubIndicatorsPos: \t'append',\t// position of the SPAN relative to the menu item content ('append', 'prepend')\n\t\tsubIndicatorsText:\t'',\t\t// [optionally] add text in the SPAN (e.g. '+') (you may want to check the CSS for the sub indicators too)\n\t\tscrollStep: \t\t30,\t\t// pixels step when scrolling long sub menus that do not fit in the viewport height\n\t\tscrollAccelerate:\ttrue,\t\t// accelerate scrolling or use a fixed step\n\t\tshowTimeout:\t\t250,\t\t// timeout before showing the sub menus\n\t\thideTimeout:\t\t500,\t\t// timeout before hiding the sub menus\n\t\tshowDuration:\t\t0,\t\t// duration for show animation - set to 0 for no animation - matters only if showFunction:null\n\t\tshowFunction:\t\tnull,\t\t// custom function to use when showing a sub menu (the default is the jQuery 'show')\n\t\t\t\t\t\t\t// don't forget to call complete() at the end of whatever you do\n\t\t\t\t\t\t\t// e.g.: function($ul, complete) { $ul.fadeIn(250, complete); }\n\t\thideDuration:\t\t0,\t\t// duration for hide animation - set to 0 for no animation - matters only if hideFunction:null\n\t\thideFunction:\t\tfunction($ul, complete) { $ul.fadeOut(200, complete); },\t// custom function to use when hiding a sub menu (the default is the jQuery 'hide')\n\t\t\t\t\t\t\t// don't forget to call complete() at the end of whatever you do\n\t\t\t\t\t\t\t// e.g.: function($ul, complete) { $ul.fadeOut(250, complete); }\n\t\tcollapsibleShowDuration:0,\t\t// duration for show animation for collapsible sub menus - matters only if collapsibleShowFunction:null\n\t\tcollapsibleShowFunction:function($ul, complete) { $ul.slideDown(200, complete); },\t// custom function to use when showing a collapsible sub menu\n\t\t\t\t\t\t\t// (i.e. when mobile styles are used to make the sub menus collapsible)\n\t\tcollapsibleHideDuration:0,\t\t// duration for hide animation for collapsible sub menus - matters only if collapsibleHideFunction:null\n\t\tcollapsibleHideFunction:function($ul, complete) { $ul.slideUp(200, complete); },\t// custom function to use when hiding a collapsible sub menu\n\t\t\t\t\t\t\t// (i.e. when mobile styles are used to make the sub menus collapsible)\n\t\tshowOnClick:\t\tfalse,\t\t// show the first-level sub menus onclick instead of onmouseover (i.e. mimic desktop app menus) (matters only for mouse input)\n\t\thideOnClick:\t\ttrue,\t\t// hide the sub menus on click/tap anywhere on the page\n\t\tnoMouseOver:\t\tfalse,\t\t// disable sub menus activation onmouseover (i.e. behave like in touch mode - use just mouse clicks) (matters only for mouse input)\n\t\tkeepInViewport:\t\ttrue,\t\t// reposition the sub menus if needed to make sure they always appear inside the viewport\n\t\tkeepHighlighted:\ttrue,\t\t// keep all ancestor items of the current sub menu highlighted (adds the 'highlighted' class to the A's)\n\t\tmarkCurrentItem:\tfalse,\t\t// automatically add the 'current' class to the A element of the item linking to the current URL\n\t\tmarkCurrentTree:\ttrue,\t\t// add the 'current' class also to the A elements of all ancestor items of the current item\n\t\trightToLeftSubMenus:\tfalse,\t\t// right to left display of the sub menus (check the CSS for the sub indicators' position)\n\t\tbottomToTopSubMenus:\tfalse,\t\t// bottom to top display of the sub menus\n\t\tcollapsibleBehavior:\t'default'\t// parent items behavior in collapsible (mobile) view ('default', 'toggle', 'link', 'accordion', 'accordion-toggle', 'accordion-link')\n\t\t\t\t\t\t\t// 'default' - first tap on parent item expands sub, second tap loads its link\n\t\t\t\t\t\t\t// 'toggle' - the whole parent item acts just as a toggle button for its sub menu (expands/collapses on each tap)\n\t\t\t\t\t\t\t// 'link' - the parent item acts as a regular item (first tap loads its link), the sub menu can be expanded only via the +/- button\n\t\t\t\t\t\t\t// 'accordion' - like 'default' but on expand also resets any visible sub menus from deeper levels or other branches\n\t\t\t\t\t\t\t// 'accordion-toggle' - like 'toggle' but on expand also resets any visible sub menus from deeper levels or other branches\n\t\t\t\t\t\t\t// 'accordion-link' - like 'link' but on expand also resets any visible sub menus from deeper levels or other branches\n\t};\n\n\treturn $;\n}));"

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

/***/ "./node_modules/script-loader/index.js!./node_modules/smartmenus/dist/jquery.smartmenus.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/script-loader/index.js!./node_modules/smartmenus/dist/jquery.smartmenus.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! !!./node_modules/script-loader/addScript.js */ "./node_modules/script-loader/addScript.js")(__webpack_require__(/*! !!./node_modules/raw-loader/index.js!./node_modules/smartmenus/dist/jquery.smartmenus.js */ "./node_modules/raw-loader/index.js!./node_modules/smartmenus/dist/jquery.smartmenus.js"))

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
/******/ 		var chunkLoadingGlobal = self["webpackChunkwenprise_frontend_tool"] = self["webpackChunkwenprise_frontend_tool"] || [];
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