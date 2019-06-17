/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/images/avatar.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/avatar.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"dist/imgs/img_avatar.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/avatar.jpg?");

/***/ }),

/***/ "./src/avatar.js":
/*!***********************!*\
  !*** ./src/avatar.js ***!
  \***********************/
/*! exports provided: Avatar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Avatar\", function() { return Avatar; });\n/* harmony import */ var _assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/avatar.jpg */ \"./src/assets/images/avatar.jpg\");\n/* harmony import */ var _assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nfunction Avatar() {\r\n  let img = new Image();\r\n  let rootEle = document.getElementById('root');\r\n  img.src = _assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_0___default.a;\r\n  img.title = '头像';\r\n  img.style = 'width: 200px; height: auto; box-shadow: 2px 2px 2px #ccc';\r\n  rootEle.append(img);\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/avatar.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Content() {\r\n  let content = document.createElement('div');\r\n  let rootEle = document.getElementById('root');\r\n  content.id = 'content';\r\n  content.innerText = 'This is Content';\r\n  rootEle.append(content);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Content);\r\n\r\n//Common Js导出魔快\r\n//module.exports = Content;\n\n//# sourceURL=webpack:///./src/content.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Footer() {\r\n  let footer = document.createElement('div');\r\n  let rootEle = document.getElementById('root');\r\n  footer.id = 'footer';\r\n  footer.innerText = 'This is Footer';\r\n  rootEle.append(footer);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\r\n\r\n//Common Js导出魔快\r\n//module.exports = Footer;\n\n//# sourceURL=webpack:///./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Header() {\r\n  let header = document.createElement('div');\r\n  let rootEle = document.getElementById('root');\r\n  header.id = 'header';\r\n  header.innerText = 'This is Header';\r\n  rootEle.append(header);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\r\n\r\n//Common Js导出魔快\r\n//module.exports = Header;\n\n//# sourceURL=webpack:///./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root */ \"./src/root.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content */ \"./src/content.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./avatar */ \"./src/avatar.js\");\n//Es6 Moduleuo引入模块\r\n\r\n\r\n\r\n\r\n\r\n\r\n//Common Js规范引入模块\r\n//const Root = require('.root');\r\n//const Header = require('.header');\r\n//const Content = require('.content');\r\n//const Footer = require('.footer');\r\n\r\nnew _root__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nnew _header__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nnew _content__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nnew _footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\nnew _avatar__WEBPACK_IMPORTED_MODULE_4__[\"Avatar\"]();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/root.js":
/*!*********************!*\
  !*** ./src/root.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Root; });\nfunction Root() {\r\n  let root = document.createElement('div');\r\n  root.id = 'root';\r\n  document.body.append(root);\r\n}\r\n\r\n//Common Js导出魔快\r\n//module.exports = Root;\n\n//# sourceURL=webpack:///./src/root.js?");

/***/ })

/******/ });