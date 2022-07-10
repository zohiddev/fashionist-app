"use strict";
exports.id = 737;
exports.ids = [737];
exports.modules = {

/***/ 5737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1929);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_themeColors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7308);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6883);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2278);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
const _excluded = ["options", "id", "label", "errorText"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const Select = _ref => {
  let {
    options,
    id,
    label,
    errorText
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  // extract spacing props
  let spacingProps = {};

  for (const key in props) {
    if (key.startsWith("m") || key.startsWith("p")) spacingProps[key] = props[key];
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, spacingProps), {}, {
    children: [label && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
      fontSize: "0.875rem",
      mb: "6px",
      children: label
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((react_select__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread({
      options: options,
      styles: customStyles,
      theme: theme => _objectSpread(_objectSpread({}, theme), {}, {
        colors: _objectSpread(_objectSpread({}, theme.colors), {}, {
          primary50: _utils_themeColors__WEBPACK_IMPORTED_MODULE_2__/* .colors.gray[100] */ .O.gray[100],
          primary: _utils_themeColors__WEBPACK_IMPORTED_MODULE_2__/* .colors.primary.main */ .O.primary.main,
          neutral20: _utils_themeColors__WEBPACK_IMPORTED_MODULE_2__/* .colors.text.disabled */ .O.text.disabled
        })
      })
    }, props)), errorText && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
      color: "error.main",
      ml: "0.25rem",
      mt: "0.25rem",
      as: "small",
      children: errorText
    })]
  }));
};

const customStyles = {
  input: styles => _objectSpread(_objectSpread({}, styles), {}, {
    height: 30
  }),
  option: (provided, state) => _objectSpread(_objectSpread({}, provided), {}, {
    color: "inherit",
    backgroundColor: state.isFocused ? "rgba(0,0,0, 0.015)" : "inherit",
    cursor: "pointer"
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);

/***/ })

};
;