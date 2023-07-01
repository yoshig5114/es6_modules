/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Car)\n/* harmony export */ });\nclass Car{\r\n    constructor(id, make, model, year){\r\n        this.id = id\r\n        this.make = make\r\n        this.model = model\r\n        this.year = year\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist */ \"./src/wishlist.js\");\n\r\n\r\n\r\nlet form = document.querySelector(\"#submitForm\");\r\nlet inputMake = document.querySelector(\"#makeInput\");\r\nlet inputModel = document.querySelector(\"#modelInput\");\r\nlet inputYear = document.querySelector(\"#yearInput\");\r\nlet paraMake = document.querySelector(\"#car-make\");\r\nlet paraModel = document.querySelector(\"#car-model\");\r\nlet paraYear = document.querySelector(\"#car-year\");\r\nlet btnRemove = document.querySelector(\".removeBtn\");\r\nlet wishlistUl = document.querySelector(\"#wishlistUl\");\r\n\r\nlet newWishlist = new _wishlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nform.addEventListener(\"submit\", addCar);\r\n\r\nfunction showCarDetails(car){\r\n  paraMake.textContent = car.make;\r\n  paraModel.textContent = car.model;\r\n  paraYear.textContent = car.year;\r\n  btnRemove.disabled = false;\r\n  btnRemove.setAttribute(\"data-carId\", car.id);\r\n}\r\nfunction updateDOMList() {\r\n  wishlistUl.innerHTML = \"\";\r\n  // for (let i = 0; i < newWishlist.list.length; i++) {\r\n  newWishlist.list.forEach((car) => {\r\n    let carLi = document.createElement(\"li\");\r\n    carLi.textContent = `${car.make}, ${car.model}`;\r\n    carLi.addEventListener(\"click\", () => showCarDetails(car));\r\n    wishlistUl.appendChild(carLi);\r\n    })\r\n}\r\nfunction addCar(event) {\r\n  event.preventDefault();\r\n  let make = inputMake.value;\r\n  let model = inputModel.value;\r\n  let year = inputYear.value;\r\n  newWishlist.add(make, model, year);\r\n  updateDOMList();\r\n}\r\n\r\nfunction removeCar() {\r\n  let carId = Number(btnRemove.getAttribute(\"data-carId\"));\r\n  newWishlist.remove(carId);\r\n  updateDOMList();\r\n  paraMake.textContent = \"\";\r\n  paraModel.textContent = \"\";\r\n  paraYear.textContent = \"\";\r\n  btnRemove.disabled = true;\r\n}\r\nbtnRemove.addEventListener(\"click\", removeCar);\r\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Wishlist)\n/* harmony export */ });\n/* harmony import */ var _car_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car.js */ \"./src/car.js\");\n\r\nclass Wishlist {\r\n  constructor() {\r\n    this.list = [];\r\n    this.nextId = 0;\r\n  }\r\n  add(make, model, year) {\r\n    let car = new _car_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.nextId++, make, model, year);\r\n    this.list.push(car);\r\n  }\r\n  remove(carId) {\r\n    // for (let i = 0; i < this.list.length; i++) {\r\n      // if (this.list[i] === carId) {\r\n      //   this.list.splice(i, 1);\r\n      //   return;\r\n      // }\r\n      this.list = this.list.filter(car => car.id !== carId);\r\n    //}\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;