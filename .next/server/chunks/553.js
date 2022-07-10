"use strict";
exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 8277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2038);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
const _excluded = ["id", "label", "labelPlacement", "labelColor"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const SyledCheckBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default().input.withConfig({
  displayName: "CheckBox__SyledCheckBox",
  componentId: "sc-728eka-0"
})(({
  color,
  size
}) => _styled_system_css__WEBPACK_IMPORTED_MODULE_0___default()({
  /* remove standard background appearance */
  "-webkit-appearance": "none",
  "-moz-appearance": "none",
  "-webkit-user-select": "none",
  "-moz-user-select": "none",
  "-ms-user-select": "none",
  "user-select": "none",
  appearance: "none",
  outline: "none",
  cursor: "pointer",
  margin: 0,
  width: size,
  height: size,
  border: "2px solid",
  borderColor: "text.hint",
  borderRadius: 2,
  position: "relative",
  "&:checked": {
    borderColor: `${color}.main`
  },

  /* create custom radiobutton appearance */
  "&:after": {
    width: "calc(100% - 5px)",
    height: "calc(100% - 5px)",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    position: "absolute",
    bg: "transparent",
    content: '" "',
    visibility: "visible",
    borderRadius: 1,
    transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
  },

  /* appearance for checked radiobutton */
  "&:checked:after": {
    bg: `${color}.main`
  },
  "&:disabled": {
    borderColor: `text.disabled`
  },
  "&:checked:disabled:after": {
    bg: `text.disabled`
  }
}), (0,styled_system__WEBPACK_IMPORTED_MODULE_3__.compose)(styled_system__WEBPACK_IMPORTED_MODULE_3__.color));
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "CheckBox__Wrapper",
  componentId: "sc-728eka-1"
})(["display:flex;align-items:center;flex-direction:", ";input{", ";}label{cursor:pointer;}input[disabled] + label{color:text.disabled;cursor:unset;}", " ", ""], props => props.labelPlacement !== "end" ? "row" : "row-reverse", props => props.labelPlacement !== "end" ? "margin-right: 0.5rem" : "margin-left: 0.5rem", styled_system__WEBPACK_IMPORTED_MODULE_3__.color, styled_system__WEBPACK_IMPORTED_MODULE_3__.space);

const CheckBox = _ref => {
  let {
    id,
    label,
    labelPlacement,
    labelColor
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    0: checkboxId,
    1: setCheckboxId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(id); // extract spacing props

  let spacingProps = {};

  for (const key in props) {
    if (key.startsWith("m") || key.startsWith("p")) spacingProps[key] = props[key];
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setCheckboxId(Math.random());
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Wrapper, _objectSpread(_objectSpread({
    labelPlacement: labelPlacement,
    color: `${labelColor}.main`
  }, spacingProps), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(SyledCheckBox, _objectSpread({
      id: checkboxId,
      type: "checkbox"
    }, props)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("label", {
      htmlFor: checkboxId,
      children: label
    })]
  }));
};

CheckBox.defaultProps = {
  color: "secondary",
  size: 18
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckBox);

/***/ })

};
;