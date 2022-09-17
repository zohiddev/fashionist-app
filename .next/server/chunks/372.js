"use strict";
exports.id = 372;
exports.ids = [372];
exports.modules = {

/***/ 1177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8967);



const Divider = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Divider",
  componentId: "sc-1okww8x-0"
})(["height:1px;background-color:", ";", " ", " ", ""], (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__/* .getTheme */ .gh)("colors.gray.200"), styled_system__WEBPACK_IMPORTED_MODULE_1__.color, styled_system__WEBPACK_IMPORTED_MODULE_1__.space, styled_system__WEBPACK_IMPORTED_MODULE_1__.layout);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Divider);

/***/ }),

/***/ 7395:
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



const IconButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default().button.withConfig({
  displayName: "IconButton",
  componentId: "sc-1j2wge4-0"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_0___default()({
  outline: "none",
  border: "none",
  cursor: "pointer",
  fontSize: "1rem",
  borderRadius: 500,
  padding: "1rem",
  fontWeight: 600,
  color: "inherit",
  transition: "all 150ms ease-in-out",
  bg: "body.paper",
  "&:hover": {
    bg: "gray.200"
  },
  "&:disabled": {
    bg: "text.disabled",
    color: "text.muted"
  }
}), props => (0,styled_system__WEBPACK_IMPORTED_MODULE_2__.variant)({
  prop: "variant",
  variants: {
    text: {
      border: "none",
      color: `${props.color}.main`
    },
    outlined: {
      color: `${props.color}.main`,
      border: "2px solid",
      borderColor: `${props.color}.main`,
      "&:focus": {
        boxShadow: `0px 1px 4px 0px ${props.theme.colors[props.color]?.main}`
      }
    },
    contained: {
      border: "none",
      color: `${props.color}.text`,
      bg: `${props.color}.main`,
      "&:hover": {
        bg: `${props.color}.main`
      },
      "&:focus": {
        boxShadow: `0px 1px 4px 0px ${props.theme.colors[props.color]?.main}`
      }
    }
  }
}), (0,styled_system__WEBPACK_IMPORTED_MODULE_2__.variant)({
  prop: "size",
  variants: {
    large: {
      padding: "1.25rem"
    },
    medium: {
      padding: "1rem"
    },
    small: {
      padding: "0.75rem",
      fontSize: 14
    }
  }
}), (0,styled_system__WEBPACK_IMPORTED_MODULE_2__.compose)(styled_system__WEBPACK_IMPORTED_MODULE_2__.color, styled_system__WEBPACK_IMPORTED_MODULE_2__.layout, styled_system__WEBPACK_IMPORTED_MODULE_2__.space, styled_system__WEBPACK_IMPORTED_MODULE_2__.border, styled_system__WEBPACK_IMPORTED_MODULE_2__.shadow));
IconButton.defaultProps = {
  size: "small"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconButton);

/***/ }),

/***/ 4372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sessions_Login)
});

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/utils/http.js
var http = __webpack_require__(1643);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(5609);
// EXTERNAL MODULE: ./src/components/Box.js
var Box = __webpack_require__(6883);
// EXTERNAL MODULE: ./src/components/buttons/Button.js
var Button = __webpack_require__(8027);
// EXTERNAL MODULE: ./src/components/buttons/IconButton.js
var IconButton = __webpack_require__(7395);
// EXTERNAL MODULE: ./src/components/Divider.js
var Divider = __webpack_require__(1177);
// EXTERNAL MODULE: ./src/components/FlexBox.js
var FlexBox = __webpack_require__(2938);
// EXTERNAL MODULE: ./src/components/icon/Icon.js + 1 modules
var Icon = __webpack_require__(5937);
// EXTERNAL MODULE: ./src/components/text-field/TextField.js + 1 modules
var TextField = __webpack_require__(1306);
// EXTERNAL MODULE: ./src/components/Typography.js
var Typography = __webpack_require__(2278);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/components/Card.js
var Card = __webpack_require__(2770);
;// CONCATENATED MODULE: ./src/components/sessions/SessionStyle.js


const StyledSessionCard = external_styled_components_default()(Card/* default */.Z).withConfig({
  displayName: "SessionStyle__StyledSessionCard",
  componentId: "sc-4460dg-0"
})(["width:500px;overflow:hidden;.content{padding:3rem 3.75rem 0px;}@media screen and (max-width:500px){width:100%;.content{padding:1.5rem 1rem 0px;}}"]);
// EXTERNAL MODULE: external "react-imask"
var external_react_imask_ = __webpack_require__(2765);
// EXTERNAL MODULE: ./src/reducers/userReducer.js
var userReducer = __webpack_require__(8221);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/sessions/Login.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















const Login = () => {
  const {
    0: passwordVisibility,
    1: setPasswordVisibility
  } = (0,external_react_.useState)(false);
  const router = (0,router_.useRouter)();
  const {
    0: isVerify,
    1: setIsVerify
  } = (0,external_react_.useState)(false);
  const {
    0: isValidate,
    1: setIsValidate
  } = (0,external_react_.useState)({
    phone: false,
    code: false
  });
  const {
    0: phone,
    1: setPhone
  } = (0,external_react_.useState)('');
  const {
    0: code,
    1: setPassword
  } = (0,external_react_.useState)('');
  const state = (0,external_react_redux_.useSelector)(state => state);
  const lang = state?.lang?.lang;
  const dispatch = (0,external_react_redux_.useDispatch)();

  const loginBtn = async e => {
    e.preventDefault();

    if (phone.length < 9) {
      setIsValidate(_objectSpread(_objectSpread({}, isValidate), {}, {
        phone: true
      }));
    } else {
      try {
        let res;
        res = await http/* api.login */.hi.login({
          phone
        });

        if (!res.data.error) {
          setIsVerify(true);
          setIsValidate(_objectSpread(_objectSpread({}, isValidate), {}, {
            phone: false
          }));
        } else {
          alert(res.data.error);
        }
      } catch (error) {
        console.error(error);
        alert(error.response?.data?.error || "Error");
      }
    }
  };

  const verifyBtn = async e => {
    e.preventDefault();

    if (code === '') {
      setIsValidate(_objectSpread(_objectSpread({}, isValidate), {}, {
        code: true
      }));
    } else {
      try {
        let res;
        res = await http/* api.verify */.hi.verify({
          phone,
          code
        });

        if (!res.data.error) {
          setIsVerify(false);
          let {
            accessToken,
            refreshToken
          } = res.data;
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          dispatch((0,userReducer/* setIsActive */.WA)(!state?.user?.isActive));
          (0,userReducer/* getUser */.PR)()(dispatch);
          setIsValidate(_objectSpread(_objectSpread({}, isValidate), {}, {
            code: false
          }));
          router.push('/profile');
        } else {
          alert(res.data.error);
          setPhone('');
          setPassword('');
          setIsVerify(false);
        }
      } catch (error) {
        console.error(error);
        alert(error.response?.data?.error || "Error");
      }
    }
  }; // const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  // 	useFormik({
  // 		// onSubmit: loginBtn,
  // 		initialValues,
  // 		validationSchema: formSchema,
  // 	})


  return /*#__PURE__*/jsx_runtime_.jsx(StyledSessionCard, {
    mx: "auto",
    my: "2rem",
    boxShadow: "large",
    children: isVerify ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      className: "content",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Typography.H3, {
        textAlign: "center",
        mb: "0.5rem",
        children: lang === 'uz' ? 'Kirish' : 'Вход'
      }), /*#__PURE__*/jsx_runtime_.jsx(TextField/* default */.Z, {
        mb: "0.75rem",
        name: "number" // placeholder="+998 99 999 99 99"
        ,
        label: "Maxfiy kodni kiriting",
        type: "number",
        fullwidth: true // onBlur={handleBlur}
        ,
        onChange: e => setPassword(e.target.value),
        style: {
          borderColor: isValidate.code ? 'red' : '#AEB4BE'
        },
        value: code // errorText={touched.number && errors.number}

      }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        mb: "1.65rem",
        variant: "contained",
        color: "primary",
        type: "submit",
        fullwidth: true,
        onClick: e => verifyBtn(e),
        children: lang === 'uz' ? 'Kirish' : 'Вход'
      })]
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      className: "content",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Typography.H3, {
        textAlign: "center",
        mb: "0.5rem",
        children: lang === 'uz' ? 'Kirish' : 'Вход'
      }), /*#__PURE__*/jsx_runtime_.jsx(FlexBox/* default */.Z, {
        children: /*#__PURE__*/jsx_runtime_.jsx(TextField/* default */.Z, {
          mb: "0.75rem",
          name: "number",
          placeholder: "99 999 99 99",
          label: lang === 'uz' ? 'Telefon raqamingizni kiriting' : 'Введите свой номер телефона',
          type: "number",
          span: true,
          spanTitle: "+998",
          onChange: e => setPhone('+998' + e.target.value),
          style: {
            borderColor: isValidate.phone ? 'red' : '#AEB4BE'
          },
          fullwidth: true
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        mb: "1.65rem",
        variant: "contained",
        color: "primary",
        type: "submit",
        fullwidth: true,
        onClick: e => loginBtn(e),
        children: lang === 'uz' ? 'Kirish' : 'Вход'
      })]
    })
  });
}; // const initialValues = {
// 	phone: "",
// 	code: "",
// }
// const formSchema = yup.object().shape({
// 	email: yup.string().email("invalid email").required("${path} is required"),
// 	password: yup.string().required("${path} is required"),
// })


/* harmony default export */ const sessions_Login = (Login);

/***/ }),

/***/ 1306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ text_field_TextField)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Box.js
var Box = __webpack_require__(6883);
// EXTERNAL MODULE: external "@styled-system/css"
var css_ = __webpack_require__(2038);
var css_default = /*#__PURE__*/__webpack_require__.n(css_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__(5834);
// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__(8967);
;// CONCATENATED MODULE: ./src/components/text-field/TextFieldStyle.js






const SyledTextField = external_styled_components_default().input.withConfig({
  displayName: "TextFieldStyle__SyledTextField",
  componentId: "sc-1xpxuor-0"
})(props => css_default()({
  padding: "8px 12px",
  height: "40px",
  fontSize: "inherit",
  color: "body.text",
  borderRadius: props.span ? '0 5px 5px 0' : 5,
  border: "1px solid",
  borderColor: "text.disabled",
  width: props.fullwidth ? "100%" : "inherit",
  outline: "none",
  fontFamily: "inherit",
  "&:hover": {
    borderColor: "gray.500"
  },
  "&:focus": {
    outlineColor: "primary.main",
    borderColor: "primary.main",
    boxShadow: `1px 1px 8px 4px rgba(${(0,utils/* convertHexToRGB */.Q5)(props.theme.colors.primary.light)}, 0.1)`
  }
}), (0,external_styled_system_.compose)(external_styled_system_.color));
const TextFieldWrapper = external_styled_components_default().div.withConfig({
  displayName: "TextFieldStyle__TextFieldWrapper",
  componentId: "sc-1xpxuor-1"
})(props => css_default()({
  position: "relative",
  width: props.fullwidth ? "100%" : "inherit",
  label: {
    display: "block",
    marginBottom: "6px",
    fontSize: "0.875rem"
  },
  small: {
    display: "block",
    color: "error.main",
    marginTop: "0.25rem",
    marginLeft: "0.25rem"
  },
  ".end-adornment": {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: "0.25rem"
  }
}), (0,external_styled_system_.compose)(external_styled_system_.color, external_styled_system_.space));
// EXTERNAL MODULE: ./src/components/FlexBox.js
var FlexBox = __webpack_require__(2938);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/text-field/TextField.js
const _excluded = ["id", "label", "errorText", "labelColor", "endAdornment", "span", "spanTitle"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const TextField = _ref => {
  let {
    id,
    label,
    errorText,
    labelColor,
    endAdornment,
    span,
    spanTitle
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    0: textId,
    1: setTextId
  } = (0,external_react_.useState)(id); // extract spacing props

  let spacingProps = {};

  for (const key in props) {
    if (key.startsWith("m") || key.startsWith("p")) spacingProps[key] = props[key];
  }

  (0,external_react_.useEffect)(() => {
    if (!id) setTextId(Math.random());
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(TextFieldWrapper, _objectSpread(_objectSpread({
    color: labelColor && `${labelColor}.main`,
    fullwidth: props.fullwidth
  }, spacingProps), {}, {
    children: [label && /*#__PURE__*/jsx_runtime_.jsx("label", {
      htmlFor: textId,
      children: label
    }), /*#__PURE__*/jsx_runtime_.jsx(Box/* default */.Z, {
      position: "relative",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(FlexBox/* default */.Z, {
        alignItems: "center",
        children: [span ? /*#__PURE__*/jsx_runtime_.jsx("span", {
          style: {
            backgroundColor: '#DAE1E7',
            padding: '8px 12px',
            color: '#2B3445',
            borderRadius: '5px 0 0 5px',
            border: '1px solid #DAE1E7'
          },
          children: spanTitle
        }) : null, /*#__PURE__*/jsx_runtime_.jsx(SyledTextField, _objectSpread({
          id: textId,
          span: span
        }, props)), endAdornment && /*#__PURE__*/(0,external_react_.cloneElement)(endAdornment, {
          className: `end-adornment ${endAdornment.className}`
        })]
      })
    }), errorText && /*#__PURE__*/jsx_runtime_.jsx("small", {
      children: errorText
    })]
  }));
};

TextField.defaultProps = {
  color: "default"
};
/* harmony default export */ const text_field_TextField = (TextField);

/***/ }),

/***/ 8221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nq": () => (/* binding */ updateUser),
/* harmony export */   "PR": () => (/* binding */ getUser),
/* harmony export */   "WA": () => (/* binding */ setIsActive),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "co": () => (/* binding */ getOrder),
/* harmony export */   "fS": () => (/* binding */ addOrder)
/* harmony export */ });
/* unused harmony exports setUser, setOrders, setOrder */
/* harmony import */ var utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1643);
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8967);


const SET_USER = 'SET_USER';
const SET_ORDERS = 'SET_ORDERS';
const SET_ORDER = 'SET_ORDER';
const SET_ISACTIVE = 'SET_ISACTIVE';
const SHOW_LOADER = 'SHOW_LOADER';
const HIDE_LOADER = 'HIDE_LOADER';
const defaultState = {
  user: {},
  orders: [],
  order: null,
  isActive: false,
  loading: false
};

function UserReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      state.user = action.user;
      return (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__/* .CachedStateUser */ .$$)('user', action.user, state);

    case SET_ORDERS:
      state.orders = action.orders;
      return state;

    case SET_ORDER:
      state.order = action.order;
      return state;

    case SET_ISACTIVE:
      state.isActive = action.bool;
      return state;

    case SHOW_LOADER:
      state.loading = true;
      return state;

    case HIDE_LOADER:
      state.loading = false;
      return state;

    default:
      return state;
  }
}

const setUser = user => ({
  type: SET_USER,
  user
});
const setOrders = orders => ({
  type: SET_ORDERS,
  orders
});
const setOrder = order => ({
  type: SET_ORDER,
  order
});
const setIsActive = bool => ({
  type: SET_ISACTIVE,
  bool
});
const getUser = () => {
  return async dispatch => {
    dispatch({
      type: SHOW_LOADER
    });
    utils_http__WEBPACK_IMPORTED_MODULE_0__/* .$authHost.get */ .GJ.get(`/v1/user/profile`).then(function (response) {
      if (response?.data?.orders && response?.data?.user) {
        dispatch(setUser(response?.data?.user || {}));
        dispatch(setOrders(response?.data?.orders || []));
      }

      dispatch({
        type: HIDE_LOADER
      });
    }).catch(error => {
      dispatch({
        type: HIDE_LOADER
      });
    });
  };
};
const updateUser = (user, callback) => {
  return async dispatch => {
    dispatch({
      type: SHOW_LOADER
    });
    utils_http__WEBPACK_IMPORTED_MODULE_0__/* .$authHost.put */ .GJ.put(`/v1/user/update`, user).then(function (response) {
      if (response.data.message === 'User updated successfully') {
        callback && callback(null);
        dispatch({
          type: HIDE_LOADER
        });
      } else {
        callback && callback("Error message");
      }
    }).catch(error => {
      dispatch({
        type: HIDE_LOADER
      });
    });
  };
};
const getOrder = id => {
  return async dispatch => {
    dispatch({
      type: SHOW_LOADER
    });
    utils_http__WEBPACK_IMPORTED_MODULE_0__/* .$authHost.get */ .GJ.get(`/v1/order/view/${id}`).then(function (response) {
      if (response?.data?.order) {
        dispatch(setOrder(response?.data?.order || {}));
      }

      dispatch({
        type: HIDE_LOADER
      });
    }).catch(error => {
      dispatch({
        type: HIDE_LOADER
      });
    });
  };
};
const addOrder = (data, callback) => {
  return async dispatch => {
    dispatch({
      type: SHOW_LOADER
    });
    utils_http__WEBPACK_IMPORTED_MODULE_0__/* .$authHost.post */ .GJ.post(`/v1/order/create`, data).then(response => {
      if (response.data.isOk) {
        callback && callback(null);
        dispatch({
          type: HIDE_LOADER
        });
      } else {
        callback && callback("Error message");
      }
    }).catch(error => {
      callback && callback("Error message");
      dispatch({
        type: HIDE_LOADER
      });
    });
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserReducer); // Access token refreshed! 15:11

/***/ }),

/***/ 1643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GJ": () => (/* binding */ $authHost),
/* harmony export */   "hi": () => (/* binding */ api),
/* harmony export */   "y_": () => (/* binding */ $host)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const baseUrl = "https://api.sdb.uz/dev"; // const baseUrl = "https://api.sdb.uz/dev";

const $host = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: baseUrl
});
const $authHost = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: baseUrl
});
$authHost.interceptors.request.use(config => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    config.headers["x-auth-token"] = accessToken;
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return config;
}, error => {
  Promise.reject(error);
});
$authHost.interceptors.response.use(response => {
  return response;
}, function (error) {
  const originalRequest = error.config;
  const refreshToken = localStorage.getItem("refreshToken");

  if (refreshToken && error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    return $authHost.post(`/v1/auth/refresh`, {
      refreshToken: refreshToken
    }).then(res => {
      if (res.status === 200) {
        localStorage.setItem("accessToken", res.data.accessToken);
        return $authHost(originalRequest);
      }
    });
  }

  return Promise.reject(error);
});
const api = {
  login: body => {
    return $authHost.post(`/v1/auth/login`, body);
  },
  logout: body => {
    return $authHost.post(`/v1/auth/logout`, {
      refreshToken: body
    });
  },
  verify: body => {
    return $authHost.post(`/v1/auth/verify`, body);
  }
};


/***/ })

};
;