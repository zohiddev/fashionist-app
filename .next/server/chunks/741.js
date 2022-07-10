"use strict";
exports.id = 741;
exports.ids = [741];
exports.modules = {

/***/ 9741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_products_ProductIntro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8198);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reducers_cartReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7079);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6883);
/* harmony import */ var _buttons_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8027);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2770);
/* harmony import */ var _Chip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1396);
/* harmony import */ var _FlexBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2938);
/* harmony import */ var _icon_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5937);
/* harmony import */ var _modal_Modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7723);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2278);
/* harmony import */ var _ProductCardStyle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9545);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var reducers_userReducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8221);
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7781);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);
const _excluded = ["id", "imgUrl", "title", "price", "off", "product", "rating"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





















const ProductCard1 = _ref => {
  var _state$lang, _state$cart, _state$cart$cartList;

  let {
    id,
    imgUrl,
    title,
    price,
    off,
    product,
    rating
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_14__.useSelector)(state => state);
  const lang = state === null || state === void 0 ? void 0 : (_state$lang = state.lang) === null || _state$lang === void 0 ? void 0 : _state$lang.lang;
  const cartItem = (_state$cart = state.cart) === null || _state$cart === void 0 ? void 0 : (_state$cart$cartList = _state$cart.cartList) === null || _state$cart$cartList === void 0 ? void 0 : _state$cart$cartList.find(item => item.product_id === (product === null || product === void 0 ? void 0 : product.id));
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_14__.useDispatch)();
  const windowSize = (0,_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)();
  const toggleDialog = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    setOpen(open => !open);
  }, []);
  const src = `${product === null || product === void 0 ? void 0 : product.image}`;

  const handleDeleteBtn = id => {
    (0,reducers_cartReducer__WEBPACK_IMPORTED_MODULE_4__/* .deleteToCart */ .ul)(id)(dispatch);
  };

  const handleRemoveBtn = id => {
    (0,reducers_cartReducer__WEBPACK_IMPORTED_MODULE_4__/* .removeToCart */ .QR)(id)(dispatch);
  };

  const handleAddBtn = id => {
    if (localStorage.getItem('user')) {
      let addedItem = {};
      addedItem.qty = 1;
      addedItem.product_id = Number(id);
      (0,reducers_cartReducer__WEBPACK_IMPORTED_MODULE_4__/* .addToCart */ .Xq)(addedItem)(dispatch);
    } else {
      dispatch((0,reducers_userReducer__WEBPACK_IMPORTED_MODULE_15__/* .setIsActive */ .WA)(true));
    }
  };

  const myLoader = ({
    src,
    width,
    quality
  }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_ProductCardStyle__WEBPACK_IMPORTED_MODULE_13__/* .StyledProductCard1 */ .TO, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
      className: "image-holder",
      style: {
        padding: '15px'
      },
      children: [(product === null || product === void 0 ? void 0 : product.is_new) > 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Chip__WEBPACK_IMPORTED_MODULE_8__/* .Chip */ .A, {
        position: "absolute",
        bg: "primary.main",
        color: "primary.text",
        fontSize: "10px",
        fontWeight: "600",
        p: "5px 10px",
        top: "10px",
        left: "10px",
        zIndex: "10",
        children: "new"
      }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_FlexBox__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        className: "extra-icons",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_icon_Icon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          color: "secondary",
          variant: "small",
          mb: "0.5rem",
          onClick: toggleDialog,
          children: "eye-alt"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `/product/${product === null || product === void 0 ? void 0 : product.slug}`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("a", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            loader: myLoader,
            src: product === null || product === void 0 ? void 0 : product.images[0],
            layout: "responsive",
            alt: product === null || product === void 0 ? void 0 : product.name_uz,
            width: 100,
            height: 100,
            quality: "85",
            placeholder: "blur",
            blurDataURL: "placeholder.png"
          })
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
      className: "details",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_FlexBox__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          flex: "1 1 0",
          minWidth: "0px",
          mr: "0.5rem",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: `/product/${product === null || product === void 0 ? void 0 : product.slug}`,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("a", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_12__.H3, {
                className: "title",
                fontSize: "14px",
                textAlign: "left",
                fontWeight: "600",
                color: "text.secondary",
                mb: "10px",
                title: lang === 'uz' ? product === null || product === void 0 ? void 0 : product.name_uz : product === null || product === void 0 ? void 0 : product.name_ru,
                children: lang === 'uz' ? product === null || product === void 0 ? void 0 : product.name_uz : product === null || product === void 0 ? void 0 : product.name_ru
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_FlexBox__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            alignItems: "center",
            mt: "10px",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Typography__WEBPACK_IMPORTED_MODULE_12__/* .SemiSpan */ .kf, {
              pr: "0.5rem",
              fontWeight: "600",
              color: "primary.main",
              children: [Intl.NumberFormat().format(product === null || product === void 0 ? void 0 : product.price), " UZS"]
            })
          })]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_modal_Modal__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      open: open,
      style: {
        paddingTop: windowSize < 769 ? '100px' : '0'
      },
      onClose: toggleDialog,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Card__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        p: "1rem",
        position: "relative",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(components_products_ProductIntro__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
          imgUrl: product === null || product === void 0 ? void 0 : product.images,
          title: product === null || product === void 0 ? void 0 : product.name_uz,
          price: product === null || product === void 0 ? void 0 : product.price,
          id: product === null || product === void 0 ? void 0 : product.id,
          product: product
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Box__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          position: "absolute",
          top: "0.75rem",
          right: "0.75rem",
          cursor: "pointer",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_icon_Icon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            className: "close",
            color: "primary",
            variant: "small",
            onClick: toggleDialog,
            children: "close"
          })
        })]
      })
    })]
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard1);

/***/ }),

/***/ 8198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2116);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reducers_cartReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7079);
/* harmony import */ var _avatar_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5555);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6883);
/* harmony import */ var _buttons_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8027);
/* harmony import */ var _FlexBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2938);
/* harmony import */ var _grid_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7407);
/* harmony import */ var _icon_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5937);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2278);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var reducers_userReducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8221);
/* harmony import */ var react_toast__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9180);
/* harmony import */ var react_toast__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_toast__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);


















const ProductIntro = ({
  imgUrl,
  title,
  price = 200,
  id,
  product
}) => {
  var _state$cart, _state$lang, _product$brand, _product$brand2, _product$price, _cartItem$qty;

  const {
    0: selectedImage,
    1: setSelectedImage
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useDispatch)();
  const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(state => state);
  const cartList = state === null || state === void 0 ? void 0 : (_state$cart = state.cart) === null || _state$cart === void 0 ? void 0 : _state$cart.cartList;
  const lang = state === null || state === void 0 ? void 0 : (_state$lang = state.lang) === null || _state$lang === void 0 ? void 0 : _state$lang.lang;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const routerId = router.query.id;
  const cartItem = cartList.find(item => item.product_id === (product === null || product === void 0 ? void 0 : product.id));

  const handleImageClick = ind => () => {
    setSelectedImage(ind);
  };

  const handleRemoveBtn = id => {
    (0,reducers_cartReducer__WEBPACK_IMPORTED_MODULE_4__/* .removeToCart */ .QR)(id)(dispatch);
  };

  const handleAddBtn = id => {
    if (localStorage.getItem('user')) {
      let addedItem = {};
      addedItem.qty = 1;
      addedItem.product_id = Number(id);
      (0,reducers_cartReducer__WEBPACK_IMPORTED_MODULE_4__/* .addToCart */ .Xq)(addedItem)(dispatch);
      react_toast__WEBPACK_IMPORTED_MODULE_14__.toast.success(`${lang === 'uz' ? 'Mahsulot qo`shildi' : 'Товар добавлен'}`);
    } else {
      dispatch((0,reducers_userReducer__WEBPACK_IMPORTED_MODULE_13__/* .setIsActive */ .WA)(true));
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    (0,reducers_cartReducer__WEBPACK_IMPORTED_MODULE_4__/* .getCartItems */ .fq)()(dispatch);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    overflow: "hidden",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_toast__WEBPACK_IMPORTED_MODULE_14__.ToastContainer, {
      position: "top-right",
      delay: "3000"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grid_Grid__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      container: true,
      justifyContent: "center",
      spacing: 16,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_grid_Grid__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        item: true,
        md: 6,
        xs: 12,
        alignItems: "center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_FlexBox__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            justifyContent: "center",
            mb: "50px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(components_Image__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
              quality: "85",
              width: 300,
              height: 300,
              src: product === null || product === void 0 ? void 0 : product.images[selectedImage],
              style: {
                objectFit: "contain"
              }
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_FlexBox__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            overflow: "auto",
            children: product === null || product === void 0 ? void 0 : product.images.map((url, ind) => {
              var _product$images;

              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Box__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                size: 70,
                minWidth: 70,
                bg: "white",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                border: "1px solid",
                ml: ind === 0 && "auto",
                mr: ind === (product === null || product === void 0 ? void 0 : (_product$images = product.images) === null || _product$images === void 0 ? void 0 : _product$images.length) - 1 ? "auto" : "10px",
                borderColor: selectedImage === ind ? "primary.main" : "gray.400",
                onClick: handleImageClick(ind),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_avatar_Avatar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                  src: url,
                  borderRadius: "10px",
                  size: 40
                })
              }, ind);
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grid_Grid__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        item: true,
        md: 6,
        xs: 12,
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_11__.H1, {
          mb: "1rem",
          children: lang === 'uz' ? product === null || product === void 0 ? void 0 : product.name_uz : product === null || product === void 0 ? void 0 : product.name_ru
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_FlexBox__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          alignItems: "center",
          mb: "1rem",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_11__/* .SemiSpan */ .kf, {
            children: "Brand:"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_11__.H6, {
            ml: "8px",
            children: lang === 'uz' ? product === null || product === void 0 ? void 0 : (_product$brand = product.brand) === null || _product$brand === void 0 ? void 0 : _product$brand.name_uz : product === null || product === void 0 ? void 0 : (_product$brand2 = product.brand) === null || _product$brand2 === void 0 ? void 0 : _product$brand2.name_ru
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Box__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          mb: "24px",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Typography__WEBPACK_IMPORTED_MODULE_11__.H2, {
            color: "primary.main",
            mb: "4px",
            lineHeight: "1",
            children: [product === null || product === void 0 ? void 0 : (_product$price = product.price) === null || _product$price === void 0 ? void 0 : _product$price.toLocaleString(), " UZS"]
          })
        }), !(cartItem !== null && cartItem !== void 0 && cartItem.qty) ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_buttons_Button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          variant: "contained",
          size: "small",
          color: "primary",
          mb: "36px",
          onClick: () => handleAddBtn(product === null || product === void 0 ? void 0 : product.id),
          children: lang === 'uz' ? 'Savatga qo’shish' : 'Добавить в корзину'
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_FlexBox__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          alignItems: "center",
          mb: "36px",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_buttons_Button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            p: "9px",
            variant: "outlined",
            size: "small",
            color: "primary",
            onClick: () => handleRemoveBtn(product === null || product === void 0 ? void 0 : product.id),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_icon_Icon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
              variant: "small",
              children: "minus"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_11__.H3, {
            fontWeight: "600",
            mx: "20px",
            children: cartItem === null || cartItem === void 0 ? void 0 : (_cartItem$qty = cartItem.qty) === null || _cartItem$qty === void 0 ? void 0 : _cartItem$qty.toString().padStart(2, "0")
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_buttons_Button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            p: "9px",
            variant: "outlined",
            size: "small",
            color: "primary",
            onClick: () => handleAddBtn(product === null || product === void 0 ? void 0 : product.id),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_icon_Icon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
              variant: "small",
              children: "plus"
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_FlexBox__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          alignItems: "start",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_11__.H4, {
            children: lang === 'uz' ? 'Mahsulot haqida qisqacha:' : 'Коротко о товаре:'
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
            className: "product_desc",
            dangerouslySetInnerHTML: {
              __html: lang === 'uz' ? product === null || product === void 0 ? void 0 : product.description_uz : product === null || product === void 0 ? void 0 : product.description_ru
            }
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductIntro);

/***/ })

};
;