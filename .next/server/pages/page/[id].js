"use strict";
(() => {
var exports = {};
exports.id = 333;
exports.ids = [333];
exports.modules = {

/***/ 5058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3158);
/* harmony import */ var _grid_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7407);
/* harmony import */ var _navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8916);
/* harmony import */ var _AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2685);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







const CustomerDashboardLayout = ({
  children
}) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_AppLayout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
  navbar: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Container__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    my: "2rem",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_grid_Grid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      container: true,
      spacing: 6,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_grid_Grid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        item: true,
        lg: 9,
        xs: 12,
        children: children
      })
    })
  })
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomerDashboardLayout);

/***/ }),

/***/ 3755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var components_layout_CustomerDashboardLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5058);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2278);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3158);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);










const Page = ({
  data
}) => {
  var _data$page, _data$page2, _data$page3, _data$page4;

  const lang = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.lang.lang);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mt: "50px",
    mb: "50px",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_1__.H1, {
        children: lang === 'uz' ? data === null || data === void 0 ? void 0 : (_data$page = data.page) === null || _data$page === void 0 ? void 0 : _data$page.title_uz : data === null || data === void 0 ? void 0 : (_data$page2 = data.page) === null || _data$page2 === void 0 ? void 0 : _data$page2.title_ru
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      dangerouslySetInnerHTML: {
        __html: lang === 'uz' ? data === null || data === void 0 ? void 0 : (_data$page3 = data.page) === null || _data$page3 === void 0 ? void 0 : _data$page3.content_uz : data === null || data === void 0 ? void 0 : (_data$page4 = data.page) === null || _data$page4 === void 0 ? void 0 : _data$page4.content_ru
      }
    })]
  });
};

Page.layout = components_layout_CustomerDashboardLayout__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
async function getServerSideProps({
  params
}) {
  const res = await fetch(`https://api.sdb.uz/dev/v1/page/${params.id}`);
  const data = await res.json();

  if (data !== null && data !== void 0 && data.page) {
    return {
      props: {
        data: data
      }
    };
  } else {
    return {
      notFound: true
    };
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

/***/ }),

/***/ 2038:
/***/ ((module) => {

module.exports = require("@styled-system/css");

/***/ }),

/***/ 9099:
/***/ ((module) => {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 5429:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 916:
/***/ ((module) => {

module.exports = require("react-horizontal-scrolling-menu");

/***/ }),

/***/ 2765:
/***/ ((module) => {

module.exports = require("react-imask");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 3094:
/***/ ((module) => {

module.exports = require("react-scroll");

/***/ }),

/***/ 7128:
/***/ ((module) => {

module.exports = require("react-svg");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 5834:
/***/ ((module) => {

module.exports = require("styled-system");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [383,664,675,938,928,27,372,483,685,916], () => (__webpack_exec__(3755)));
module.exports = __webpack_exports__;

})();