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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/index.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/postcss-loader/src!./node_modules/sass-loader/lib/loader.js!./src/index.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body {\\n  padding: 20px;\\n  font-size: 16px; }\\n\\n/* #root {\\r\\n  background-color: antiquewhite; */\\n._3j5lzrhqYj1p0Dy18fdwPD {\\n  width: 200px;\\n  height: auto;\\n  -webkit-box-shadow: 2px 2px 2px #ccc;\\n          box-shadow: 2px 2px 2px #ccc;\\n  -webkit-transform: rotate(-3deg);\\n      -ms-transform: rotate(-3deg);\\n          transform: rotate(-3deg); }\\n\\n/* } */\\n@font-face {\\n  font-family: \\\"iconfont\\\";\\n  src: url(\\\"/src/assets/fonts/iconfont.eot?t=1560929484140\\\");\\n  /* IE9 */\\n  src: url(\\\"/src/assets/fonts/iconfont.eot?t=1560929484140#iefix\\\") format(\\\"embedded-opentype\\\"), url(\\\"data:application/x-font-woff2;charset=utf-8;base64,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\\\") format(\\\"woff2\\\"), url(\\\"/src/assets/fonts/iconfont.woff?t=1560929484140\\\") format(\\\"woff\\\"), url(\\\"/src/assets/fonts/iconfont.ttf?t=1560929484140\\\") format(\\\"truetype\\\"), url(\\\"/src/assets/fonts/iconfont.svg?t=1560929484140#iconfont\\\") format(\\\"svg\\\");\\n  /* iOS 4.1- */ }\\n\\n._2w-4vPYwMpLT18h7abTfvU {\\n  font-family: \\\"iconfont\\\" !important;\\n  font-size: 16px;\\n  font-style: normal;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale; }\\n\\n._3zMx6jDf9atSO9xsjw4RZr:before {\\n  content: \\\"\\\\e600\\\"; }\\n\\n._1OctDhggTqnFTk6Zdu-3uO:before {\\n  content: \\\"\\\\e605\\\"; }\\n\\n._2UeBWYcBjQ8Vur5ENletJn:before {\\n  content: \\\"\\\\e606\\\"; }\\n\\n._3pszPSQCf4qVxhlAkIwQqn:before {\\n  content: \\\"\\\\e601\\\"; }\\n\\n._2F_ZecrPTektsWIIxyytJs:before {\\n  content: \\\"\\\\e602\\\"; }\\n\\n._2zU26sUebimH5AyEhHIQo:before {\\n  content: \\\"\\\\e603\\\"; }\\n\\n._3e7ok_AAV7eenheEM0PcJj:before {\\n  content: \\\"\\\\e604\\\"; }\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"avatarStyle\": \"_3j5lzrhqYj1p0Dy18fdwPD\",\n\t\"iconfont\": \"_2w-4vPYwMpLT18h7abTfvU\",\n\t\"icon-hanbao\": \"_3zMx6jDf9atSO9xsjw4RZr\",\n\t\"icon-shouji\": \"_1OctDhggTqnFTk6Zdu-3uO\",\n\t\"icon-zuanshi\": \"_2UeBWYcBjQ8Vur5ENletJn\",\n\t\"icon-goumai\": \"_3pszPSQCf4qVxhlAkIwQqn\",\n\t\"icon-dianpu\": \"_2F_ZecrPTektsWIIxyytJs\",\n\t\"icon-huiyuanqia\": \"_2zU26sUebimH5AyEhHIQo\",\n\t\"icon-gongnengjianyi\": \"_3e7ok_AAV7eenheEM0PcJj\"\n};\n\n//# sourceURL=webpack:///./src/index.scss?./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/postcss-loader/src!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/assets/images/avatar.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/avatar.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"imgs/img_avatar.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/avatar.jpg?");

/***/ }),

/***/ "./src/avatar.js":
/*!***********************!*\
  !*** ./src/avatar.js ***!
  \***********************/
/*! exports provided: Avatar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Avatar\", function() { return Avatar; });\n/* harmony import */ var _assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/avatar.jpg */ \"./src/assets/images/avatar.jpg\");\n/* harmony import */ var _assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nfunction Avatar(title1, hasClassAvatarStyle) {\r\n  let img = new Image();\r\n  //let img = document.createElement('img');\r\n  let rootEle = document.getElementById('root');\r\n  //img.class = 'avatar'; //这种写法是无效的, img元素添加class可用下面三种方式\r\n  //img.className = 'avatar';\r\n  /* if (hasClassAvatar) {\r\n    img.className = 'avatar';\r\n  } */\r\n\r\n  if (hasClassAvatarStyle) {\r\n    img.classList.add(_index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatarStyle);\r\n  } else {\r\n    img.classList.add('avatarStyle');\r\n  }\r\n\r\n  //img.classList.add(style.avatar);\r\n  //img.setAttribute('class', 'avatar');\r\n  img.src = _assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_0___default.a;\r\n  img.title = title1;\r\n  //img.style = 'width: 200px; height: auto; box-shadow: 2px 2px 2px #ccc';\r\n  rootEle.append(img);\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/avatar.js?");

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

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AppendIcons; });\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n//import './assets/fonts/iconfont.css';\r\n\r\n\r\nfunction AppendIcons() {\r\n  let rootEle = document.getElementById('root');\r\n  let iconEle = document.createElement('div');\r\n\r\n  console.log(_index_scss__WEBPACK_IMPORTED_MODULE_0___default.a);\r\n  /* iconEle.innerHTML = `  \r\n  <span class=\"iconfont icon-shouji\"></span>\r\n  <span class=\"iconfont icon-hanbao\"></span>\r\n  `; */\r\n\r\n  iconEle.innerHTML = `  \r\n  <span class=\"${_index_scss__WEBPACK_IMPORTED_MODULE_0___default.a.iconfont} ${_index_scss__WEBPACK_IMPORTED_MODULE_0___default.a['icon-shouji']}\"></span>\r\n  <span class=\"${_index_scss__WEBPACK_IMPORTED_MODULE_0___default.a.iconfont} ${_index_scss__WEBPACK_IMPORTED_MODULE_0___default.a['icon-hanbao']}\"></span>\r\n  `;\r\n  rootEle.append(iconEle);\r\n}\n\n//# sourceURL=webpack:///./src/icon.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root */ \"./src/root.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content */ \"./src/content.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./avatar */ \"./src/avatar.js\");\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon */ \"./src/icon.js\");\n//Es6 Moduleuo引入模块\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//Common Js规范引入模块\r\n//const Root = require('.root');\r\n//const Header = require('.header');\r\n//const Content = require('.content');\r\n//const Footer = require('.footer');\r\n\r\nnew _root__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nnew _header__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nnew _content__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nnew _footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\nnew _avatar__WEBPACK_IMPORTED_MODULE_4__[\"Avatar\"]('头像啊');\r\nnew _avatar__WEBPACK_IMPORTED_MODULE_4__[\"Avatar\"]('你说啥', true);\r\nnew _icon__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--7-1!../node_modules/postcss-loader/src!../node_modules/sass-loader/lib/loader.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/index.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/index.scss?");

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