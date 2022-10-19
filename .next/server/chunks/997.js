"use strict";
exports.id = 997;
exports.ids = [997];
exports.modules = {

/***/ 4945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ Card1)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2770);


const Card1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Card__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
  displayName: "Card1",
  componentId: "sc-15j9hv6-0"
})(["position:relative;padding:1.5rem 1.75rem;@media only screen and (max-width:678px){padding:1rem;}"]);

/***/ }),

/***/ 1451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_CheckoutNavLayout)
});

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Box.js
var Box = __webpack_require__(6883);
// EXTERNAL MODULE: ./src/components/Container.js
var Container = __webpack_require__(3158);
// EXTERNAL MODULE: ./src/components/grid/Grid.js + 1 modules
var Grid = __webpack_require__(7407);
// EXTERNAL MODULE: ./src/components/navbar/Navbar.js + 1 modules
var Navbar = __webpack_require__(8916);
// EXTERNAL MODULE: ./src/components/Chip.js
var Chip = __webpack_require__(1396);
// EXTERNAL MODULE: ./src/components/FlexBox.js
var FlexBox = __webpack_require__(2938);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/stepper/Stepper.js







const Stepper = ({
  selectedStep,
  stepperList,
  onChange
}) => {
  const {
    0: selected,
    1: setSelected
  } = (0,external_react_.useState)(selectedStep - 1);

  const handleStepClick = (step, ind) => () => {
    if (!step.disabled) {
      setSelected(ind);
      if (onChange) onChange(step, ind);
    }
  };

  (0,external_react_.useEffect)(() => {
    setSelected(selectedStep - 1);
  }, [selectedStep]);
  return /*#__PURE__*/jsx_runtime_.jsx(FlexBox/* default */.Z, {
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    my: "-4px",
    children: stepperList.map((step, ind) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Chip/* Chip */.A, {
        bg: ind <= selected ? "primary.main" : "primary.light",
        color: ind <= selected ? "white" : "primary.main",
        p: "0.5rem 1.5rem",
        fontSize: "14px",
        fontWeight: "600",
        my: "4px",
        cursor: step.disabled ? "not-allowed" : "pointer",
        onClick: handleStepClick(step, ind),
        children: [ind + 1, ". ", step.title]
      }), ind < stepperList.length - 1 && /*#__PURE__*/jsx_runtime_.jsx(Box/* default */.Z, {
        width: "50px",
        height: "4px",
        bg: ind < selected ? "primary.main" : "primary.light"
      })]
    }, step.title))
  });
};

Stepper.defaultProps = {
  selectedStep: 1
};
/* harmony default export */ const stepper_Stepper = (Stepper);
// EXTERNAL MODULE: ./src/components/layout/AppLayout.js + 20 modules
var AppLayout = __webpack_require__(5348);
;// CONCATENATED MODULE: ./src/components/layout/CheckoutNavLayout.js











const CheckoutNavLayout = ({
  children
}) => {
  const {
    0: selectedStep,
    1: setSelectedStep
  } = (0,external_react_.useState)(0);
  const router = (0,router_.useRouter)();
  const {
    pathname
  } = router;

  const handleStepChange = (_step, ind) => {
    const handlers = [() => router.push("/cart"), () => router.push("/checkout"), () => router.push("/payment"), () => router.push("/orders")];
    const handler = handlers[ind];
    handler?.();
  };

  (0,external_react_.useEffect)(() => {
    switch (pathname) {
      case "/cart":
        setSelectedStep(1);
        break;

      case "/checkout":
        setSelectedStep(2);
        break;

      case "/payment":
        setSelectedStep(3);
        break;

      default:
        break;
    }
  }, [pathname]);
  return /*#__PURE__*/jsx_runtime_.jsx(AppLayout/* default */.Z, {
    navbar: /*#__PURE__*/jsx_runtime_.jsx(Navbar/* default */.Z, {}),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
      my: "2rem",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Box/* default */.Z, {
        mb: "14px",
        children: /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          container: true,
          spacing: 6,
          children: /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
            item: true,
            lg: 8,
            md: 8,
            xs: 12,
            children: /*#__PURE__*/jsx_runtime_.jsx(stepper_Stepper, {
              stepperList: stepperList,
              selectedStep: selectedStep,
              onChange: handleStepChange
            })
          })
        })
      }), children]
    })
  });
};

const stepperList = [{
  title: "Cart",
  disabled: false
}, {
  title: "Details",
  disabled: false
}, {
  title: "Payment",
  disabled: false
}, {
  title: "Review",
  disabled: true
}];
/* harmony default export */ const layout_CheckoutNavLayout = (CheckoutNavLayout);

/***/ })

};
;