"use strict";
exports.id = 483;
exports.ids = [483];
exports.modules = {

/***/ 3158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6170);



const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Container",
  componentId: "sc-6c5psi-0"
})(["max-width:", ";margin-left:auto;margin-right:auto;@media only screen and (max-width:1199px){margin-left:1rem;margin-right:1rem;}", " ", " ", " ", " ", ""], utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .layoutConstant.containerWidth */ .P.containerWidth, styled_system__WEBPACK_IMPORTED_MODULE_1__.color, styled_system__WEBPACK_IMPORTED_MODULE_1__.position, styled_system__WEBPACK_IMPORTED_MODULE_1__.flexbox, styled_system__WEBPACK_IMPORTED_MODULE_1__.layout, styled_system__WEBPACK_IMPORTED_MODULE_1__.space);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

/***/ }),

/***/ 9678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AccordionStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7781);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const Accordion = ({
  expanded = false,
  children
}) => {
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(expanded);
  const {
    0: headerHeight,
    1: setHeaderHeight
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: parentHeight,
    1: setParentHeight
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const window = (0,_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const toggle = () => {
    setOpen(!open);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let parent = ref.current;

    if (parent) {
      setHeaderHeight(parent.children[0].scrollHeight);
      setParentHeight(parent.scrollHeight);
    }
  }, [ref.current]);
  const modifiedChildren = react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children, (child, ind) => {
    if (ind === 0) return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
      open,
      onClick: toggle
    });else return child;
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_AccordionStyle__WEBPACK_IMPORTED_MODULE_1__/* .AccordionWrapper */ .W, {
    ref: ref,
    height: open ? parentHeight : headerHeight,
    style: {
      marginBottom: "10px"
    },
    window: window,
    children: modifiedChildren
  });
};

Accordion.defaultProps = {
  expanded: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);

/***/ }),

/***/ 1478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export StyledAccordionHeader */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6883);
/* harmony import */ var _icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5937);
/* harmony import */ var _AccordionStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9297);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
const _excluded = ["children", "showIcon", "open"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const StyledAccordionHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
  displayName: "AccordionHeader__StyledAccordionHeader",
  componentId: "sc-1vusbic-0"
})([""]);

const AccordionHeader = _ref => {
  let {
    children,
    showIcon,
    open
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_AccordionStyle__WEBPACK_IMPORTED_MODULE_4__/* .AccordionHeaderWrapper */ .V, _objectSpread(_objectSpread({
    alignItems: "center",
    justifyContent: "space-between",
    open: open
  }, props), {}, {
    children: [children, showIcon && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      className: "caret-icon",
      variant: "small",
      color: "black",
      defaultcolor: "currentColor",
      children: "chevron-right"
    })]
  }));
};

AccordionHeader.defaultProps = {
  showIcon: true,
  py: "0.5rem",
  px: "0,5rem"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccordionHeader);

/***/ }),

/***/ 9297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ AccordionWrapper),
/* harmony export */   "V": () => (/* binding */ AccordionHeaderWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6883);
/* harmony import */ var _FlexBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2938);



const AccordionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Box__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
  displayName: "AccordionStyle__AccordionWrapper",
  componentId: "sc-1dg0i7m-0"
})(["overflow:hidden;cursor:", ";transition:height 250ms ease-in-out;"], ({
  window
}) => window < 768 ? 'unset' : 'pointer');
const AccordionHeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_FlexBox__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
  displayName: "AccordionStyle__AccordionHeaderWrapper",
  componentId: "sc-1dg0i7m-1"
})([".caret-icon{transform:", ";transition:transform 250ms ease-in-out;}"], ({
  open
}) => open ? "rotate(90deg)" : "rotate(0deg)");

/***/ }),

/***/ 7407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ grid_Grid)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__(5834);
;// CONCATENATED MODULE: ./src/components/grid/GridStyle.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const StyledGrid = external_styled_components_default().div.withConfig({
  displayName: "GridStyle__StyledGrid",
  componentId: "sc-1lhi5lz-0"
})(({
  container,
  item,
  spacing,
  horizontal_spacing,
  vertical_spacing,
  xl,
  lg,
  md,
  sm,
  xs,
  containerHeight
}) => {
  let mediaProps = {
    xl,
    lg,
    md,
    sm,
    xs
  };
  let style = {};

  if (container) {
    style = {
      display: "flex",
      flexWrap: "wrap",
      height: containerHeight,
      margin: spacing ? `-${spacing / 2 * 0.25}rem` : "unset"
    };

    if (horizontal_spacing) {
      style.marginLeft = `-${horizontal_spacing / 2 * 0.25}rem`;
      style.marginRight = `-${horizontal_spacing / 2 * 0.25}rem`;
    }

    if (vertical_spacing) {
      style.marginTop = `-${vertical_spacing / 2 * 0.25}rem`;
      style.marginBottom = `-${vertical_spacing / 2 * 0.25}rem`;
    }
  } else if (item) {
    if (spacing) style.padding = `${spacing / 2 * 0.25}rem`;

    if (horizontal_spacing) {
      style.paddingLeft = `${horizontal_spacing / 2 * 0.25}rem`;
      style.paddingRight = `${horizontal_spacing / 2 * 0.25}rem`;
    }

    if (vertical_spacing) {
      style.paddingTop = `${vertical_spacing / 2 * 0.25}rem`;
      style.paddingBottom = `${vertical_spacing / 2 * 0.25}rem`;
    }

    for (const key in mediaSize) {
      if (mediaProps[key]) {
        style = _objectSpread(_objectSpread({}, style), {}, {
          [`@media only screen and (min-width: ${mediaSize[key]}px)`]: {
            width: `${mediaProps[key] / 12 * 100}%`
          }
        });
      }
    }
  }

  return style;
}, (0,external_styled_system_.compose)(external_styled_system_.flexbox));
const mediaSize = {
  xs: 0,
  sm: 426,
  md: 769,
  lg: 1025,
  xl: 1441
};
/* harmony default export */ const GridStyle = (StyledGrid);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/grid/Grid.js
const _excluded = ["children"];

function Grid_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Grid_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Grid_ownKeys(Object(source), true).forEach(function (key) { Grid_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Grid_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Grid_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Grid = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  let childList = children;

  if (props.container) {
    childList = external_react_.Children.map(children, child => {
      return /*#__PURE__*/(0,external_react_.cloneElement)(child, {
        spacing: props.spacing,
        horizontal_spacing: props.horizontal_spacing,
        vertical_spacing: props.vertical_spacing
      });
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(GridStyle, Grid_objectSpread(Grid_objectSpread({}, props), {}, {
    children: childList
  }));
};

Grid.defaultProps = {
  spacing: 0,
  containerHeight: "unset"
};
/* harmony default export */ const grid_Grid = (Grid);

/***/ }),

/***/ 5937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ icon_Icon)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@styled-system/css"
var css_ = __webpack_require__(2038);
var css_default = /*#__PURE__*/__webpack_require__.n(css_);
// EXTERNAL MODULE: external "react-svg"
var external_react_svg_ = __webpack_require__(7128);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__(5834);
;// CONCATENATED MODULE: ./src/components/icon/IconStyle.js





const StyledIcon = external_styled_components_default()(external_react_svg_.ReactSVG).withConfig({
  displayName: "IconStyle__StyledIcon",
  componentId: "sc-1vxys63-0"
})(({
  color,
  size,
  transform,
  defaultcolor
}) => css_default()({
  svg: {
    width: "100%",
    height: "100%",
    transform,
    path: {
      fill: color ? `${color}.main` : defaultcolor
    },
    polyline: {
      color: color ? `${color}.main` : defaultcolor
    },
    polygon: {
      color: color ? `${color}.main` : defaultcolor
    }
  },
  div: {
    display: "flex",
    width: size,
    height: size
  }
}), ({
  size
}) => (0,external_styled_system_.variant)({
  prop: "variant",
  variants: {
    small: {
      div: {
        width: size || "1.25rem",
        height: size || "1.25rem"
      }
    },
    medium: {
      div: {
        width: size || "1.5rem",
        height: size || "1.5rem"
      }
    },
    large: {
      div: {
        width: size || "2rem",
        height: size || "2rem"
      }
    }
  }
}), (0,external_styled_system_.compose)(external_styled_system_.color, external_styled_system_.space));
/* harmony default export */ const IconStyle = (StyledIcon);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/icon/Icon.js
const _excluded = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Icon = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx(IconStyle, _objectSpread({
    src: `/assets/images/icons/${children}.svg`,
    fallback: () => /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: children === null || children === void 0 ? void 0 : children.trim()
    })
  }, props));
};

Icon.defaultProps = {
  variant: "medium",
  defaultcolor: "currentColor"
};
/* harmony default export */ const icon_Icon = (Icon);

/***/ }),

/***/ 7781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);




const useWindowSize = () => {
  const {
    0: width,
    1: setWidth
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const windowListener = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(() => {
    if (window) setWidth(window.innerWidth);
  }, 250), []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (window) {
      setWidth(window.innerWidth);
      window.addEventListener("resize", windowListener);
    }

    return () => window.removeEventListener("resize", windowListener);
  }, []);
  return width;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useWindowSize);

/***/ }),

/***/ 6170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ deviceSize),
/* harmony export */   "P": () => (/* binding */ layoutConstant)
/* harmony export */ });
const deviceSize = {
  xs: 425,
  sm: 768,
  md: 1024,
  lg: 1440
};
const layoutConstant = {
  grocerySidenavWidth: "280px",
  containerWidth: "1200px",
  mobileNavHeight: "64px",
  headerHeight: "95px",
  mobileHeaderHeight: "64px"
};

/***/ })

};
;