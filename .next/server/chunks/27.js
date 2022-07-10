"use strict";
exports.id = 27;
exports.ids = [27];
exports.modules = {

/***/ 8027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2038);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);



const Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default().button.withConfig({
  displayName: "Button",
  componentId: "sc-1d6jd2w-0"
})(({
  color,
  fullwidth
}) => _styled_system_css__WEBPACK_IMPORTED_MODULE_0___default()({
  display: "flex",
  width: fullwidth ? "100%" : "unset",
  justifyContent: "center",
  alignItems: "center",
  outline: "none",
  border: "none",
  cursor: "pointer",
  padding: "11px 1.5rem",
  fontSize: "1rem",
  fontWeight: 600,
  color: color ? `${color}.main` : "body.text",
  background: "transparent",
  transition: "all 150ms ease-in-out",
  lineHeight: 1,
  "&:focus": {
    boxShadow: 3 //shadows[3]

  },
  "&:disabled": {
    bg: "text.disabled",
    color: "text.hint",
    borderColor: "text.disabled",
    cursor: "unset",
    "svg path": {
      fill: "text.hint"
    },
    "svg polyline, svg polygon": {
      color: "text.hint"
    }
  }
}), ({
  theme,
  color
}) => {
  var _theme$colors$color, _theme$colors$color2, _theme$colors$color3, _theme$colors$color4, _theme$colors$color5, _theme$colors$color6;

  return (0,styled_system__WEBPACK_IMPORTED_MODULE_2__.variant)({
    prop: "variant",
    variants: {
      text: {
        border: "none",
        color: `${color}.main`,
        "&:hover": {
          bg: color ? `${color}.light` : "gray.100"
        }
      },
      outlined: {
        padding: "10px 16px",
        color: `${color}.main`,
        border: "1px solid",
        borderColor: color ? `${color}.main` : "text.disabled",
        // "&:enabled svg path": {
        // 	fill: color
        // 		? `${theme.colors[color]?.main} !important`
        // 		: "text.primary",
        // },
        // "&:enabled svg polyline, svg polygon": {
        // 	color: color
        // 		? `${theme.colors[color]?.main} !important`
        // 		: "text.primary",
        // },
        "&:focus": {
          boxShadow: `0px 1px 4px 0px ${(_theme$colors$color = theme.colors[color]) === null || _theme$colors$color === void 0 ? void 0 : _theme$colors$color.light}`
        },
        "&:hover:enabled": {
          bg: color && `${color}.main`,
          borderColor: color && `${color}.main`,
          color: color && `${color}.text`,
          "svg path": {
            fill: color ? `${(_theme$colors$color2 = theme.colors[color]) === null || _theme$colors$color2 === void 0 ? void 0 : _theme$colors$color2.text} !important` : "text.primary"
          },
          "svg polyline, svg polygon": {
            color: color ? `${(_theme$colors$color3 = theme.colors[color]) === null || _theme$colors$color3 === void 0 ? void 0 : _theme$colors$color3.text} !important` : "text.primary"
          }
        }
      },
      contained: {
        border: "none",
        color: `${color}.text`,
        bg: `${color}.main`,
        "&:focus": {
          boxShadow: `0px 1px 4px 0px ${(_theme$colors$color4 = theme.colors[color]) === null || _theme$colors$color4 === void 0 ? void 0 : _theme$colors$color4.light}`
        },
        "&:enabled svg path": {
          fill: color ? `${(_theme$colors$color5 = theme.colors[color]) === null || _theme$colors$color5 === void 0 ? void 0 : _theme$colors$color5.text} !important` : "text.primary"
        },
        "&:enabled svg polyline, svg polygon": {
          color: color ? `${(_theme$colors$color6 = theme.colors[color]) === null || _theme$colors$color6 === void 0 ? void 0 : _theme$colors$color6.text} !important` : "text.primary"
        }
      }
    }
  });
}, (0,styled_system__WEBPACK_IMPORTED_MODULE_2__.variant)({
  prop: "size",
  variants: {
    large: {
      height: "56px",
      px: 30
    },
    medium: {
      height: "48px",
      px: 30
    },
    small: {
      height: "40px",
      fontSize: 14
    }
  }
}), (0,styled_system__WEBPACK_IMPORTED_MODULE_2__.compose)(styled_system__WEBPACK_IMPORTED_MODULE_2__.color, styled_system__WEBPACK_IMPORTED_MODULE_2__.layout, styled_system__WEBPACK_IMPORTED_MODULE_2__.space, styled_system__WEBPACK_IMPORTED_MODULE_2__.border, styled_system__WEBPACK_IMPORTED_MODULE_2__.shadow));
Button.defaultProps = {
  size: "small",
  borderRadius: 5
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ })

};
;