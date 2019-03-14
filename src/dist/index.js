// { "framework": "Vue"}

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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _index = __webpack_require__(1);\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_index2.default.el = '#root';\nnew Vue(_index2.default);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi8udGVtcC9pbmRleC5qcz8yYTNhIl0sIm5hbWVzIjpbIkFwcCIsImVsIiwiVnVlIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7QUFDQUEsZ0JBQUlDLEVBQUosR0FBUyxPQUFUO0FBQ0EsSUFBSUMsR0FBSixDQUFRRixlQUFSIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJy4uL2luZGV4LnZ1ZSdcbkFwcC5lbCA9ICcjcm9vdCdcbm5ldyBWdWUoQXBwKVxuICAgIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLy50ZW1wL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: \\n\\nVue packages version mismatch:\\n\\n- vue@2.5.21\\n- vue-template-compiler@2.6.8\\n\\nThis may cause things to work incorrectly. Make sure to use the same version for both.\\nIf you are using vue-loader@>=10.0, simply update vue-template-compiler.\\nIf you are using vue-loader@<10.0 or vueify, re-installing vue-loader/vueify should bump vue-template-compiler to the latest.\\n\\n    at Object.<anonymous> (/Users/chenzhidong/.wx/modules/node_modules/_vue-template-compiler@2.6.8@vue-template-compiler/index.js:8:9)\\n    at Module._compile (internal/modules/cjs/loader.js:738:30)\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:749:10)\\n    at Module.load (internal/modules/cjs/loader.js:630:32)\\n    at tryModuleLoad (internal/modules/cjs/loader.js:570:12)\\n    at Function.Module._load (internal/modules/cjs/loader.js:562:3)\\n    at Module.require (internal/modules/cjs/loader.js:667:17)\\n    at require (internal/modules/cjs/helpers.js:20:18)\\n    at Object.<anonymous> (/Users/chenzhidong/.wx/modules/node_modules/_weex-vue-loader@0.7.0@weex-vue-loader/lib/parser.js:2:16)\\n    at Module._compile (internal/modules/cjs/loader.js:738:30)\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:749:10)\\n    at Module.load (internal/modules/cjs/loader.js:630:32)\\n    at tryModuleLoad (internal/modules/cjs/loader.js:570:12)\\n    at Function.Module._load (internal/modules/cjs/loader.js:562:3)\\n    at Module.require (internal/modules/cjs/loader.js:667:17)\\n    at require (internal/modules/cjs/helpers.js:20:18)\\n    at Object.<anonymous> (/Users/chenzhidong/.wx/modules/node_modules/_weex-vue-loader@0.7.0@weex-vue-loader/lib/loader.js:10:13)\\n    at Module._compile (internal/modules/cjs/loader.js:738:30)\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:749:10)\\n    at Module.load (internal/modules/cjs/loader.js:630:32)\\n    at tryModuleLoad (internal/modules/cjs/loader.js:570:12)\\n    at Function.Module._load (internal/modules/cjs/loader.js:562:3)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIxLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);