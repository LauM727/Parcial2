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

/***/ "./src/components/card/card.ts":
/*!*************************************!*\
  !*** ./src/components/card/card.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeCard\": () => (/* binding */ AttributeCard),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar AttributeCard;\n(function (AttributeCard) {\n    AttributeCard[\"animal\"] = \"animal\";\n    AttributeCard[\"celebrity\"] = \"celebrity\";\n    AttributeCard[\"carrer\"] = \"carrer\";\n    AttributeCard[\"movie\"] = \"movie\";\n    AttributeCard[\"music\"] = \"music\";\n})(AttributeCard || (AttributeCard = {}));\nclass Card extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            animal: null,\n            celebrity: null,\n            carrer: null,\n            movie: null,\n            music: null,\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    constructor() {\n        super();\n        this.animal = \"\";\n        this.celebrity = \"\";\n        this.carrer = \"\";\n        this.movie = \"\";\n        this.music = \"\";\n        this.attachShadow({ mode: `open` });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n        <section class= \"card\">\r\n        <section class= \"info\">\r\n        <p>animal:${this.animal}</p>\r\n        <p>celebrity:${this.celebrity}</p>\r\n        <p>carrer:${this.carrer}</p>\r\n        <p>movie:${this.movie}</p>\r\n        <p>music:${this.music}</p>\r\n        </section>\r\n        </section>\r\n        `;\n        const container = this.ownerDocument.createElement(`section`);\n        const button = this.ownerDocument.createElement('button');\n        container.appendChild(button);\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(container);\n    }\n}\ncustomElements.define('app-card', Card);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/card/card.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* reexport safe */ _card_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card/card */ \"./src/components/card/card.ts\");\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/components/screens/dashboard.ts":
/*!*********************************************!*\
  !*** ./src/components/screens/dashboard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../card/card */ \"./src/components/card/card.ts\");\n/* harmony import */ var _services_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data */ \"./src/components/services/data.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nclass Dashboard extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const urljokes = yield (0,_services_data__WEBPACK_IMPORTED_MODULE_1__.get_api)();\n            this.render(urljokes);\n            console.log({ urljokes });\n        });\n    }\n    render(urljokes) {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        urljokes === null || urljokes === void 0 ? void 0 : urljokes.forEach((e) => {\n            var _a;\n            const card = this.ownerDocument.createElement(`app-card`);\n            card.setAttribute(_card_card__WEBPACK_IMPORTED_MODULE_0__.AttributeCard.animal, e.animal);\n            card.setAttribute(_card_card__WEBPACK_IMPORTED_MODULE_0__.AttributeCard.carrer, e.carrer);\n            card.setAttribute(_card_card__WEBPACK_IMPORTED_MODULE_0__.AttributeCard.celebrity, e.celebrity);\n            card.setAttribute(_card_card__WEBPACK_IMPORTED_MODULE_0__.AttributeCard.movie, e.movie);\n            card.setAttribute(_card_card__WEBPACK_IMPORTED_MODULE_0__.AttributeCard.music, e.music);\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(card);\n        });\n    }\n}\ncustomElements.define(\"app-dashboard\", Dashboard);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/screens/dashboard.ts?");

/***/ }),

/***/ "./src/components/services/data.ts":
/*!*****************************************!*\
  !*** ./src/components/services/data.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"get_api\": () => (/* binding */ get_api)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction get_api() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const arr = [];\n            for (let i = 1; i < 5; i++) {\n                const urljokes = yield fetch(\"https://api.chucknorris.io/jokes/random?category={category}\");\n                const def = yield urljokes.json();\n                console.log(def);\n                arr.push(def);\n            }\n            ;\n            return arr;\n        }\n        catch (error) {\n            console.log(error);\n        }\n    });\n}\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/services/data.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _components_screens_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/screens/dashboard */ \"./src/components/screens/dashboard.ts\");\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const something = this.ownerDocument.createElement('div');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(something);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;