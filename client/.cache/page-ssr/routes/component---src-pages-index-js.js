exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./src/components/Container.jsx":
/*!**************************************!*\
  !*** ./src/components/Container.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Container__Wrapper"
})(["max-width:375px;margin-left:auto;margin-right:auto;background-color:white;padding:0 16px;@media (min-width:", "){max-width:1600px;}"], _constants__WEBPACK_IMPORTED_MODULE_1__.breakpoints.mobile);
function Container({
  children
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, null, children);
}

/***/ }),

/***/ "./src/components/Nav.jsx":
/*!********************************!*\
  !*** ./src/components/Nav.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Text */ "./src/components/Text.jsx");
/* harmony import */ var _images_home_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/home.png */ "./src/images/home.png");
/* harmony import */ var _images_ham_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/ham.png */ "./src/images/ham.png");






const Root = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Nav__Root"
})(["width:100%;border-bottom:2px solid ", ";"], _constants__WEBPACK_IMPORTED_MODULE_1__.pallette.orange);
const UtilNav = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Nav__UtilNav"
})(["background-color:", ";color:", ";font-size:14px;display:flex;justify-content:space-between;padding:8px 12px;font-family:sans-serif;@media (min-width:", "){padding:4px 18px;}.desktop-util-item{cursor:pointer;display:none;&:hover{text-decoration:underline;}@media (min-width:", "){display:block;}}.mobile-menu{display:flex;align-items:center;img{height:18px;width:18px;margin-right:12px;cursor:pointer;}@media (min-width:", "){display:none;}}"], _constants__WEBPACK_IMPORTED_MODULE_1__.pallette.defaultTextBlack, _constants__WEBPACK_IMPORTED_MODULE_1__.pallette.white, _constants__WEBPACK_IMPORTED_MODULE_1__.breakpoints.mobile, _constants__WEBPACK_IMPORTED_MODULE_1__.breakpoints.mobile, _constants__WEBPACK_IMPORTED_MODULE_1__.breakpoints.mobile);
const Banner = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Nav__Banner"
})(["padding:16px 0;margin:0 auto;@media (min-width:", "){padding:18px 0 24px 0;}img{display:none;@media (min-width:", "){display:block;}}"], _constants__WEBPACK_IMPORTED_MODULE_1__.breakpoints.mobile, _constants__WEBPACK_IMPORTED_MODULE_1__.breakpoints.mobile);
function Nav() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Root, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(UtilNav, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "desktop-util-item"
  }, "U.S. FULL PRESCRIBING INFORMATION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "desktop-util-item"
  }, "MEDICATION GUIDE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "desktop-util-item"
  }, "INDICATIONS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "desktop-util-item"
  }, "HEALTHCARE PROFESSIONALS SITE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "desktop-util-item"
  }, "EN ESPA\xD1OL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mobile-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "U.S. FULL PRESCRIBING INFORMATION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_ham_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Text__WEBPACK_IMPORTED_MODULE_2__.TextHeadline, null, "MENU"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Banner, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_home_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: ""
  })));
}

/***/ }),

/***/ "./src/components/Text.jsx":
/*!*********************************!*\
  !*** ./src/components/Text.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Colorize: () => (/* binding */ Colorize),
/* harmony export */   HeaderXL: () => (/* binding */ HeaderXL),
/* harmony export */   Text: () => (/* binding */ Text),
/* harmony export */   TextHeadline: () => (/* binding */ TextHeadline)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");



const HeaderXLStyles = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Text__HeaderXLStyles"
})(["font-weight:900;font-size:25px;line-height:29px;@media (min-width:", "){font-size:36px;line-height:40px;}"], _constants__WEBPACK_IMPORTED_MODULE_1__.breakpoints.mobile);
function HeaderXL({
  children
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeaderXLStyles, null, children);
}
const TextHeadlineStyles = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Text__TextHeadlineStyles"
})(["font-weight:800;font-size:24px;line-height:28px;@media (min-width:", "){font-size:28px;line-height:32px;}"], _constants__WEBPACK_IMPORTED_MODULE_1__.breakpoints.mobile);
function TextHeadline({
  children
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TextHeadlineStyles, null, children);
}
const TextStyles = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Text__TextStyles"
})(["font-size:16px;line-height:24px;"]);
function Text({
  children
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TextStyles, null, children);
}
const ColorizeStyles = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "Text__ColorizeStyles"
})(["color:", ";"], _constants__WEBPACK_IMPORTED_MODULE_1__.pallette.orange);
function Colorize({
  children
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ColorizeStyles, null, children);
}

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   breakpoints: () => (/* binding */ breakpoints),
/* harmony export */   pallette: () => (/* binding */ pallette)
/* harmony export */ });
const breakpoints = {
  mobile: '1000px',
  hideNavBanner: '1035px'
};
const pallette = {
  orange: '#ff9031',
  defaultTextBlack: '#444444',
  white: '#ffffff'
};

/***/ }),

/***/ "./src/pages/index.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/index.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ "./src/styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Container */ "./src/components/Container.jsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.jsx");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Text */ "./src/components/Text.jsx");





function index() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Text__WEBPACK_IMPORTED_MODULE_4__.HeaderXL, null, "Header XL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Text__WEBPACK_IMPORTED_MODULE_4__.HeaderXL, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Text__WEBPACK_IMPORTED_MODULE_4__.Colorize, null, "Header XL with Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Text__WEBPACK_IMPORTED_MODULE_4__.TextHeadline, null, "Text Headline"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Text__WEBPACK_IMPORTED_MODULE_4__.Text, null, "Text Text Text ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Text"))));
}

/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "./src/images/ham.png":
/*!****************************!*\
  !*** ./src/images/ham.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/home.png":
/*!*****************************!*\
  !*** ./src/images/home.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/home-673a566bc89c0e5d8ec790631d473e70.png");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map