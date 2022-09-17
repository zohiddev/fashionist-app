"use strict";
(() => {
var exports = {};
exports.id = 360;
exports.ids = [360];
exports.modules = {

/***/ 7103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3158);
/* harmony import */ var _navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8916);
/* harmony import */ var _AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2685);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






const NavbarLayout = ({
  children
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_AppLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    navbar: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Container__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      my: "2rem",
      children: children
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavbarLayout);

/***/ }),

/***/ 1287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./src/components/Box.js
var Box = __webpack_require__(6883);
// EXTERNAL MODULE: ./src/components/FlexBox.js
var FlexBox = __webpack_require__(2938);
// EXTERNAL MODULE: ./src/components/layout/NavbarLayout.js
var NavbarLayout = __webpack_require__(7103);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Typography.js
var Typography = __webpack_require__(2278);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/components/Divider.js
var Divider = __webpack_require__(1177);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/products/ProductDescription.js









const ProductDescription = ({
  desc,
  attributes
}) => {
  const lang = (0,external_react_redux_.useSelector)(state => state.lang.lang);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: desc === undefined ? /*#__PURE__*/jsx_runtime_.jsx(Box/* default */.Z, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.ZP, {
        children: attributes?.map((item, index) => {
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "product_attr",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: "attribute",
              children: [lang === 'uz' ? item?.attribute_uz : item?.attribute_ru, " :"]
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "product_line"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "value",
              children: lang === 'uz' ? item?.value_uz : item?.value_ru
            })]
          });
        })
      })
    }) : /*#__PURE__*/jsx_runtime_.jsx(Box/* default */.Z, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.ZP, {
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "product_desc",
          dangerouslySetInnerHTML: {
            __html: desc
          }
        })
      })
    })
  });
};

/* harmony default export */ const products_ProductDescription = (ProductDescription);
// EXTERNAL MODULE: ./src/components/products/ProductIntro.js
var ProductIntro = __webpack_require__(8198);
// EXTERNAL MODULE: ./src/components/grid/Grid.js + 1 modules
var Grid = __webpack_require__(7407);
// EXTERNAL MODULE: ./src/components/product-cards/ProductCard1.js
var ProductCard1 = __webpack_require__(9741);
;// CONCATENATED MODULE: ./src/components/products/RelatedProducts.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const RelatedProducts = ({
  recommendedProducts
}) => {
  const lang = (0,external_react_redux_.useSelector)(state => state.lang.lang);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Box/* default */.Z, {
    mb: "3.75rem",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Typography.H3, {
      mb: "1.5rem",
      children: lang === 'uz' ? "O'xshash mahsulotlar" : 'Похожие продукты'
    }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
      container: true,
      spacing: 8,
      children: recommendedProducts?.map((item, ind) => /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
        item: true,
        lg: 3,
        md: 4,
        sm: 6,
        xs: 12,
        children: /*#__PURE__*/jsx_runtime_.jsx(ProductCard1/* default */.Z, _objectSpread(_objectSpread({}, item), {}, {
          hoverEffect: true,
          product: item
        }))
      }, ind))
    })]
  });
};

/* harmony default export */ const products_RelatedProducts = (RelatedProducts);
// EXTERNAL MODULE: ./src/components/Container.js
var Container = __webpack_require__(3158);
;// CONCATENATED MODULE: ./src/pages/product/[id].js













const ProductDetails = ({
  data
}) => {
  const {
    0: selectedOption,
    1: setSelectedOption
  } = (0,external_react_.useState)("attributes");
  const lang = (0,external_react_redux_.useSelector)(state => state.lang.lang);

  const handleOptionClick = opt => () => {
    setSelectedOption(opt);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
      mb: "70px",
      mt: "50px",
      children: [/*#__PURE__*/jsx_runtime_.jsx(ProductIntro/* default */.Z, {
        product: data.product
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FlexBox/* default */.Z, {
        borderBottom: "1px solid",
        borderColor: "gray.400",
        mt: "80px",
        mb: "26px",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Typography.H5, {
          className: "cursor-pointer",
          mr: "25px",
          p: "4px 10px",
          color: selectedOption === "attributes" ? "primary.main" : "text.muted",
          borderBottom: selectedOption === "attributes" && "2px solid",
          borderColor: "primary.main",
          onClick: handleOptionClick("attributes"),
          children: lang === 'uz' ? "Xususiyatlar" : 'Функции'
        }), /*#__PURE__*/jsx_runtime_.jsx(Typography.H5, {
          className: "cursor-pointer",
          mr: "25px",
          p: "4px 10px",
          color: selectedOption === "description" ? "primary.main" : "text.muted",
          borderBottom: selectedOption === "description" && "2px solid",
          borderColor: "primary.main",
          onClick: handleOptionClick("description"),
          children: lang === 'uz' ? "Ma'lumotlar" : 'Информация'
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Box/* default */.Z, {
        mb: "50px",
        children: [selectedOption === "description" && /*#__PURE__*/jsx_runtime_.jsx(products_ProductDescription, {
          desc: lang === 'uz' ? data?.product?.description_uz : data?.product?.description_ru
        }), selectedOption === "attributes" && /*#__PURE__*/jsx_runtime_.jsx(products_ProductDescription, {
          attributes: data?.product?.attributes
        })]
      }), data?.recommendedProducts?.length === 0 ? null : /*#__PURE__*/jsx_runtime_.jsx(products_RelatedProducts, {
        recommendedProducts: data?.recommendedProducts
      })]
    })
  });
};

ProductDetails.layout = NavbarLayout/* default */.Z;
async function getServerSideProps({
  params
}) {
  const res = await fetch(`https://api.sdb.uz/dev/v1/product/${params.id}`);
  const data = await res.json();
  return {
    props: {
      data: data,
      query: params
    }
  };
}
/* harmony default export */ const _id_ = (ProductDetails);

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

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

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

/***/ 9180:
/***/ ((module) => {

module.exports = require("react-toast");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675,938,928,27,372,483,685,916,545,741], () => (__webpack_exec__(1287)));
module.exports = __webpack_exports__;

})();