"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 6073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _document)
});

// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(6859);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/pages/_document.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/* harmony default export */ const _document = (class extends next_document["default"] {
  static async getInitialProps(ctx) {
    const sheet = new external_styled_components_.ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles( /*#__PURE__*/jsx_runtime_.jsx(App, _objectSpread({}, props)))
      });

      const initialProps = await next_document["default"].getInitialProps(ctx);
      return _objectSpread(_objectSpread({}, initialProps), {}, {
        styles: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [initialProps.styles, sheet.getStyleElement()]
        })
      });
    } finally {
      sheet.seal();
    }
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(next_document.Html, {
      lang: "en",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(next_document.Head, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("link", {
          href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;900&display=swap",
          rel: "preload",
          as: "style",
          onload: "this.onload=null;this.rel='stylesheet'"
        }), /*#__PURE__*/jsx_runtime_.jsx("noscript", {
          children: /*#__PURE__*/jsx_runtime_.jsx("link", {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;900&display=swap"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          rel: "manifest",
          href: "/site.webmanifest"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          rel: "mask-icon",
          href: "/safari-pinned-tab.svg",
          color: "#5bbad5"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "apple-mobile-web-app-title",
          content: "sdb"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "application-name",
          content: "sdb"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "msapplication-TileColor",
          content: "#da532c"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "theme-color",
          content: "#ffffff"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "robots",
          content: "all"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "googlebot",
          content: "noindex,nofollow"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "google",
          content: "nositelinkssearchbox"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "google",
          content: "notranslate"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("body", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_document.Main, {}), /*#__PURE__*/jsx_runtime_.jsx(next_document.NextScript, {}), /*#__PURE__*/jsx_runtime_.jsx((script_default()), {
          src: "https://www.googletagmanager.com/gtag/js?id=G-MF5K6P5DGG",
          strategy: "afterInteractive"
        }), /*#__PURE__*/jsx_runtime_.jsx((script_default()), {
          id: "google-analytics",
          strategy: "afterInteractive",
          children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-MF5K6P5DGG');
        `
        })]
      })]
    });
  }

});

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [400,859], () => (__webpack_exec__(6073)));
module.exports = __webpack_exports__;

})();