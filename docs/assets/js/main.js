/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger.js */ \"./src/assets/js/modules/burger.js\");\n/* harmony import */ var _modules_header_sticky_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header-sticky.js */ \"./src/assets/js/modules/header-sticky.js\");\n/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider.js */ \"./src/assets/js/modules/slider.js\");\n\r\n\r\n;\r\n\r\n\r\n\r\n(0,_modules_header_sticky_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_burger_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_slider_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\n\n//# sourceURL=webpack://max/./src/assets/js/main.js?");

/***/ }),

/***/ "./src/assets/js/modules/burger.js":
/*!*****************************************!*\
  !*** ./src/assets/js/modules/burger.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst burgerMenu = () => {\r\n   const burger = document.querySelector('.burger__menu'),\r\n      nav = document.querySelector('.nav'),\r\n      navLinks = nav.querySelectorAll('.nav__link');\r\n\r\n   burger.addEventListener('click', () => {\r\n      nav.classList.toggle('active');\r\n      burger.classList.toggle('active')\r\n   });\r\n\r\n   navLinks.forEach((navLink) => {\r\n      navLink.addEventListener('click', () => {\r\n         nav.classList.remove('active')\r\n         burger.classList.remove('active')\r\n      })\r\n   });\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (burgerMenu);\n\n//# sourceURL=webpack://max/./src/assets/js/modules/burger.js?");

/***/ }),

/***/ "./src/assets/js/modules/header-sticky.js":
/*!************************************************!*\
  !*** ./src/assets/js/modules/header-sticky.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst headerSticky = () => {\r\n   const header = document.querySelector('header'),\r\n      bodyRect = document.body.getBoundingClientRect();\r\n\r\n   if (bodyRect.top < 0) header.classList.add('fixed');\r\n   window.addEventListener('scroll', () => header.classList.toggle('fixed', window.scrollY > 0));\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (headerSticky);\n\n//# sourceURL=webpack://max/./src/assets/js/modules/header-sticky.js?");

/***/ }),

/***/ "./src/assets/js/modules/slider.js":
/*!*****************************************!*\
  !*** ./src/assets/js/modules/slider.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst mainSlider = () => {\r\n   const slider = new Swiper('.slider', {\r\n      slidesPerView: 4,\r\n      spaceBetween: 40,\r\n      grabCursor: true,\r\n      followFinger: false,\r\n      speed: 1000,\r\n      navigation: {\r\n         nextEl: '.swiper-button-next',\r\n         prevEl: '.swiper-button-prev',\r\n      },\r\n      pagination: {\r\n         el: '.swiper-pagination',\r\n         type: 'bullets',\r\n         clickable: true,\r\n      },\r\n      breakpoints: {\r\n         320: {\r\n            spaceBetween: 10\r\n         },\r\n         375: {\r\n            slidesPerView: 1,\r\n         },\r\n         480: {\r\n            slidesPerView: 2,\r\n         },\r\n         767: {\r\n            slidesPerView: 3,\r\n         },\r\n         991: {\r\n            slidesPerView: 3,\r\n         }\r\n      }\r\n   });\r\n\r\n   const streamSlider = new Swiper('.stream__slider', {\r\n      slidesPerView: 4,\r\n      spaceBetween: 40,\r\n      grabCursor: true,\r\n      followFinger: false,\r\n      speed: 1000,\r\n      navigation: {\r\n         nextEl: '.swiper-button-next',\r\n         prevEl: '.swiper-button-prev',\r\n      },\r\n      pagination: {\r\n         el: '.swiper-pagination',\r\n         type: 'bullets',\r\n         clickable: true,\r\n      },\r\n      breakpoints: {\r\n         320: {\r\n            spaceBetween: 10\r\n         },\r\n         375: {\r\n            slidesPerView: 1,\r\n         },\r\n         480: {\r\n            slidesPerView: 3,\r\n         },\r\n         767: {\r\n            slidesPerView: 3,\r\n         },\r\n         991: {\r\n            slidesPerView: 4,\r\n         }\r\n      }\r\n   });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (mainSlider);\n\n//# sourceURL=webpack://max/./src/assets/js/modules/slider.js?");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/main.js");
/******/ 	
/******/ })()
;