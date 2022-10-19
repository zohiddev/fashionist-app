"use strict";
exports.id = 329;
exports.ids = [329];
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
/* harmony import */ var _AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5348);
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

/***/ 7074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7781);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6883);
/* harmony import */ var _FlexBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2938);
/* harmony import */ var _icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5937);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2278);
/* harmony import */ var components_buttons_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8027);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var utils_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1643);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);













const DashboardPageHeader = ({
  iconName,
  title,
  button,
  exitBtn
}) => {
  const width = (0,_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
  const lang = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.lang.lang);
  const isTablet = width < 1025;

  const handleLogOutBtn = async () => {
    let res = await utils_http__WEBPACK_IMPORTED_MODULE_8__/* .api.logout */ .hi.logout(localStorage.getItem('refreshToken'));

    if (!res.data.error) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
      router.push('/');
    } else {
      alert(res.data.error);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mt: "1.5rem",
    mb: "1.5rem",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_FlexBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      justifyContent: "space-between",
      alignItems: "center",
      mt: "1rem",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_FlexBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_icon_Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          color: "primary",
          children: iconName
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_5__.H2, {
          ml: "12px",
          my: "0px",
          lineHeight: "1",
          whitespace: "pre",
          children: title
        })]
      }), exitBtn ? !isTablet && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_FlexBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_buttons_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          color: "primary",
          bg: "primary.light",
          px: "2rem",
          mr: "10px",
          onClick: () => handleLogOutBtn(),
          children: lang === 'uz' ? 'Chiqish' : 'Выход'
        }), button]
      }) : !isTablet && button]
    }), exitBtn ? isTablet && !!button && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      mt: "1rem",
      children: [" ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_buttons_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        color: "primary",
        bg: "primary.light",
        px: "2rem",
        mb: "10px",
        onClick: () => handleLogOutBtn(),
        children: lang === 'uz' ? 'Chiqish' : 'Выход'
      }), button]
    }) : isTablet && !!button && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      mt: "1rem",
      children: button
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardPageHeader);

/***/ })

};
;