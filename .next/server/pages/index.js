"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6883);


const HoverBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Box__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
  displayName: "HoverBox",
  componentId: "sc-1l5rros-0"
})(["position:relative;:after{position:absolute;content:\" \";top:0;bottom:0;left:0;right:0;z-index:1;transition:all 250ms ease-in-out;}:hover:after{background:rgba(0,0,0,0.3);}"]);
HoverBox.defaultProps = {
  overflow: "hidden"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HoverBox);

/***/ }),

/***/ 6847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/Card.js
var components_Card = __webpack_require__(2770);
// EXTERNAL MODULE: ./src/components/Container.js
var Container = __webpack_require__(3158);
// EXTERNAL MODULE: ./src/components/FlexBox.js
var FlexBox = __webpack_require__(2938);
// EXTERNAL MODULE: ./src/components/grid/Grid.js + 1 modules
var Grid = __webpack_require__(7407);
// EXTERNAL MODULE: ./src/components/icon/Icon.js + 1 modules
var Icon = __webpack_require__(5937);
// EXTERNAL MODULE: ./src/components/Typography.js
var Typography = __webpack_require__(2278);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/home/Services.js











const Services = () => {
  const lang = (0,external_react_redux_.useSelector)(state => state.lang.lang);
  return /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
    mb: "70px",
    children: /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
      container: true,
      spacing: 6,
      children: serviceList.map((item, ind) => /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
        item: true,
        lg: 4,
        md: 4,
        xs: 12,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(FlexBox/* default */.Z, {
          as: components_Card/* default */.Z,
          flexDirection: "column",
          alignItems: "center",
          p: "3rem",
          height: "100%",
          borderRadius: 8,
          boxShadow: "border",
          hoverEffect: true,
          children: [/*#__PURE__*/jsx_runtime_.jsx(FlexBox/* default */.Z, {
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "300px",
            bg: "gray.200",
            size: "64px",
            children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
              color: "secondary",
              size: "1.75rem",
              children: item.iconName
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(Typography.H4, {
            mt: "20px",
            mb: "10px",
            textAlign: "center",
            children: lang === 'uz' ? item.title_uz : item.title_ru
          }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* SemiSpan */.kf, {
            textAlign: "center",
            children: lang === 'uz' ? item.desc_uz : item.desc_ru
          })]
        })
      }, ind))
    })
  });
};

const serviceList = [{
  iconName: "truck",
  title_uz: "Tez yetkazib berish",
  title_ru: 'Быстрая доставка',
  desc_uz: 'Mahsulotingizni tez va sifatli yetkazib beramiz',
  desc_ru: 'Мы доставим Ваш товар быстро и качественно'
}, {
  iconName: "credit",
  title_uz: "Xavfsiz to'lov",
  title_ru: "Безопасная оплата",
  desc_uz: "Ortiqcha hujjatlarsiz, banklar aralashmagan holda. To'lovni kechiktirganlik uchun jarimasiz, muddatli bo'lib to'lashni tezda tashkil qilish uchun sizda faqat passport va bank kartasi bo'lishi kifoya",
  desc_ru: "Без лишних документов банки не вмешиваются. Все, что вам нужно, это паспорт и банковская карта, чтобы быстро оформить платеж без штрафа за просрочку платежа."
}, {
  iconName: "shield",
  title_uz: "Ishonch bilan xarid qiling",
  title_ru: "Делайте покупки с уверенностью",
  desc_uz: "Televizorlar, smartfonlar, oshxona anjomlaridan tortib gamerlar uchun devays va jihozlarigacha. Bundan tashqari, biz faqat original brendli mahsulotlarni sotamiz va siz kafolat va servis xizmatlarini qo’lga kiritasiz",
  desc_ru: "От телевизоров, смартфонов, кухонной техники до автомобилей и игр, до устройств и техники для геймеров. Кроме того, мы продаем только оригинальные фирменные товары, а вы получаете гарантию и сервис."
}];
/* harmony default export */ const home_Services = (Services);
// EXTERNAL MODULE: ./src/components/products/ProductIntro.js
var ProductIntro = __webpack_require__(8198);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Box.js
var components_Box = __webpack_require__(6883);
// EXTERNAL MODULE: ./src/components/buttons/Button.js
var Button = __webpack_require__(8027);
// EXTERNAL MODULE: ./src/components/Chip.js
var components_Chip = __webpack_require__(1396);
// EXTERNAL MODULE: ./src/components/modal/Modal.js + 1 modules
var Modal = __webpack_require__(7723);
// EXTERNAL MODULE: ./src/components/product-cards/ProductCardStyle.js
var ProductCardStyle = __webpack_require__(9545);
// EXTERNAL MODULE: ./src/reducers/cartReducer.js
var cartReducer = __webpack_require__(7079);
// EXTERNAL MODULE: ./src/reducers/userReducer.js
var userReducer = __webpack_require__(8221);
;// CONCATENATED MODULE: ./src/components/product-cards/SmartphonesView.js
const _excluded = ["id", "imgUrl", "title", "price", "off", "product", "rating"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




















const SmartphonesView = _ref => {
  var _state$lang, _state$cart, _state$cart$cartList, _product$price;

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
  } = (0,external_react_.useState)(false);
  const state = (0,external_react_redux_.useSelector)(state => state); // const { state, dispatch } = useAppContext()

  const lang = state === null || state === void 0 ? void 0 : (_state$lang = state.lang) === null || _state$lang === void 0 ? void 0 : _state$lang.lang;
  const cartItem = state === null || state === void 0 ? void 0 : (_state$cart = state.cart) === null || _state$cart === void 0 ? void 0 : (_state$cart$cartList = _state$cart.cartList) === null || _state$cart$cartList === void 0 ? void 0 : _state$cart$cartList.find(item => item.product_id === (product === null || product === void 0 ? void 0 : product.id));
  const dispatch = (0,external_react_redux_.useDispatch)();
  const toggleDialog = (0,external_react_.useCallback)(() => {
    setOpen(open => !open);
  }, []);

  const myLoader = ({
    src,
    width,
    quality
  }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  }; // const handleCartAmountChange = useCallback(
  // 	(amount) => () => {
  // 		// dispatch({
  // 		// 	type: "CHANGE_CART_AMOUNT",
  // 		// 	payload: {
  // 		// 		name: title,
  // 		// 		qty: amount,
  // 		// 		price,
  // 		// 		imgUrl,
  // 		// 		id,
  // 		// 	},
  // 		// })
  // 	},
  // 	[]
  // )


  const handleAddCartItem = () => {
    if (localStorage.getItem('user')) {
      let addedItem = {};
      addedItem.qty = 1;
      addedItem.product_id = Number(product === null || product === void 0 ? void 0 : product.id);
      (0,cartReducer/* addToCart */.Xq)(addedItem)(dispatch);
    } else {
      dispatch((0,userReducer/* setIsActive */.WA)(true));
    }
  };

  const handleRemoveBtn = id => {
    (0,cartReducer/* removeToCart */.QR)(id)(dispatch);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ProductCardStyle/* StyledProductCard1 */.TO, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "image-holder",
      style: {
        padding: '15px'
      },
      children: [(product === null || product === void 0 ? void 0 : product.is_new) > 0 && /*#__PURE__*/jsx_runtime_.jsx(components_Chip/* Chip */.A, {
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
      }), /*#__PURE__*/jsx_runtime_.jsx(FlexBox/* default */.Z, {
        className: "extra-icons",
        children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
          color: "secondary",
          variant: "small",
          mb: "0.5rem",
          onClick: toggleDialog,
          children: "eye-alt"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: `/product/${product === null || product === void 0 ? void 0 : product.slug}`,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
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
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "details",
      children: /*#__PURE__*/jsx_runtime_.jsx(FlexBox/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_Box/* default */.Z, {
          flex: "1 1 0",
          minWidth: "0px",
          mr: "0.5rem",
          children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: `/product/${product === null || product === void 0 ? void 0 : product.slug}`,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx(Typography.H3, {
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
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FlexBox/* default */.Z, {
            alignItems: "center",
            mt: "10px",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Typography/* SemiSpan */.kf, {
              pr: "0.5rem",
              fontWeight: "600",
              color: "primary.main",
              children: [Intl.NumberFormat().format(product === null || product === void 0 ? void 0 : product.price), " UZS"]
            }), !!off && /*#__PURE__*/jsx_runtime_.jsx(Typography/* SemiSpan */.kf, {
              color: "text.muted",
              fontWeight: "600",
              children: /*#__PURE__*/jsx_runtime_.jsx("del", {
                children: product === null || product === void 0 ? void 0 : (_product$price = product.price) === null || _product$price === void 0 ? void 0 : _product$price.toFixed(2)
              })
            })]
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Modal/* default */.Z, {
      open: open,
      onClose: toggleDialog,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_Card/* default */.Z, {
        p: "1rem",
        position: "relative",
        children: [/*#__PURE__*/jsx_runtime_.jsx(ProductIntro/* default */.Z, {
          imgUrl: product === null || product === void 0 ? void 0 : product.images,
          title: lang === 'uz' ? product === null || product === void 0 ? void 0 : product.name_uz : product === null || product === void 0 ? void 0 : product.name_ru,
          price: product === null || product === void 0 ? void 0 : product.price,
          id: product === null || product === void 0 ? void 0 : product.id,
          product: product,
          lang: lang
        }), /*#__PURE__*/jsx_runtime_.jsx(components_Box/* default */.Z, {
          position: "absolute",
          top: "0.75rem",
          right: "0.75rem",
          cursor: "pointer",
          children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
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

/* harmony default export */ const product_cards_SmartphonesView = (SmartphonesView);
;// CONCATENATED MODULE: ./src/components/CategorySectionHeader.js









const CategorySectionHeader = ({
  title,
  seeMoreLink,
  iconName
}) => {
  const lang = (0,external_react_redux_.useSelector)(state => state.lang.lang);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(FlexBox/* default */.Z, {
    justifyContent: "space-between",
    alignItems: "center",
    mb: "1.5rem",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(FlexBox/* default */.Z, {
      alignItems: "center",
      children: [iconName && /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
        defaultcolor: "auto",
        mr: "0.5rem",
        children: iconName
      }), /*#__PURE__*/jsx_runtime_.jsx(Typography.H2, {
        fontWeight: "bold",
        lineHeight: "1",
        children: title
      })]
    }), seeMoreLink && /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: seeMoreLink,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(FlexBox/* default */.Z, {
          alignItems: "center",
          ml: "0.5rem",
          color: "text.muted",
          children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* SemiSpan */.kf, {
            mr: "0.5rem",
            children: lang === 'uz' ? 'Barchasini ko`rish' : 'Увидеть все'
          }), /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
            size: "12px",
            defaultcolor: "currentColor",
            children: "right-arrow"
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const components_CategorySectionHeader = (CategorySectionHeader);
// EXTERNAL MODULE: ./src/hooks/useWindowSize.js
var hooks_useWindowSize = __webpack_require__(7781);
;// CONCATENATED MODULE: ./src/components/home/Smartphones.js












const Smartphones = ({
  smartphones
}) => {
  const state = (0,external_react_redux_.useSelector)(state => state.products);
  const lang = (0,external_react_redux_.useSelector)(state => state.lang.lang);
  const window = (0,hooks_useWindowSize/* default */.Z)();
  return /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
    mb: window < 568 ? "1.75rem" : "3.75rem",
    children: /*#__PURE__*/jsx_runtime_.jsx(FlexBox/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_Box/* default */.Z, {
        flex: "1 1 0",
        minWidth: "0px",
        children: [/*#__PURE__*/jsx_runtime_.jsx(components_CategorySectionHeader, {
          title: lang === 'uz' ? "Smartfonlar" : 'Смартфоны',
          seeMoreLink: "/products/smartfonlar"
        }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          container: true,
          spacing: 6,
          children: smartphones === null || smartphones === void 0 ? void 0 : smartphones.map((product, ind) => /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
            item: true,
            lg: 3,
            md: 4,
            sm: 6,
            xs: 6,
            children: /*#__PURE__*/jsx_runtime_.jsx(product_cards_SmartphonesView, {
              hoverEffect: true,
              product: product
            })
          }, ind))
        })]
      })
    })
  });
};

/* harmony default export */ const home_Smartphones = (Smartphones);
// EXTERNAL MODULE: ./src/components/product-cards/ProductCard1.js
var ProductCard1 = __webpack_require__(9741);
;// CONCATENATED MODULE: ./src/components/home/SomeProducts.js










const SomeProducts = ({
  recommendedProducts
}) => {
  const state = (0,external_react_redux_.useSelector)(state => state.products);
  const lang = (0,external_react_redux_.useSelector)(state => state.lang.lang);
  const window = (0,hooks_useWindowSize/* default */.Z)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
    mb: window < 568 ? "1.75rem" : "3.75rem",
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_CategorySectionHeader, {
      title: lang === 'uz' ? "Yangi qo`shilganlar" : 'Новое добавлено',
      seeMoreLink: "/products/products?type=recommended"
    }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
      container: true,
      spacing: 6,
      children: recommendedProducts !== null && (recommendedProducts === null || recommendedProducts === void 0 ? void 0 : recommendedProducts.map((item, ind) => /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
        item: true,
        lg: 3,
        md: 4,
        sm: 6,
        xs: 6,
        children: /*#__PURE__*/jsx_runtime_.jsx(ProductCard1/* default */.Z, {
          price: 23,
          off: 25,
          hoverEffect: true,
          product: item // {...item}

        })
      }, ind)))
    })]
  });
};

/* harmony default export */ const home_SomeProducts = (SomeProducts);
;// CONCATENATED MODULE: external "clsx"
const external_clsx_namespaceObject = require("clsx");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_namespaceObject);
;// CONCATENATED MODULE: external "pure-react-carousel"
const external_pure_react_carousel_namespaceObject = require("pure-react-carousel");
// EXTERNAL MODULE: ./src/components/buttons/IconButton.js
var IconButton = __webpack_require__(7395);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/utils/constants.js
var constants = __webpack_require__(6170);
// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__(8967);
;// CONCATENATED MODULE: ./src/components/carousel/CarouselStyle.js
const CarouselStyle_excluded = ["spacing", "showDots", "showArrowOnHover", "dotGroupMarginTop", "dotColor"];

function CarouselStyle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function CarouselStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? CarouselStyle_ownKeys(Object(source), !0).forEach(function (key) { CarouselStyle_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : CarouselStyle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function CarouselStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CarouselStyle_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CarouselStyle_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CarouselStyle_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const StyledCarousel = external_styled_components_default()(_ref => {
  let {
    spacing,
    showDots,
    showArrowOnHover,
    dotGroupMarginTop,
    dotColor
  } = _ref,
      props = CarouselStyle_objectWithoutProperties(_ref, CarouselStyle_excluded);

  return /*#__PURE__*/jsx_runtime_.jsx(external_pure_react_carousel_namespaceObject.CarouselProvider, CarouselStyle_objectSpread({}, props));
}).withConfig({
  displayName: "CarouselStyle__StyledCarousel",
  componentId: "sc-opn2e5-0"
})(["position:relative;min-width:0px;.custom-slider{margin-left:calc(-1 * ", " / 2);margin-right:calc(-1 * ", " / 2);}.carousel__inner-slide{margin:auto;width:calc(100% - ", ");}.arrow-button{position:absolute;top:calc( 50% - ", " );transform:translateY(-50%);box-shadow:0px 10px 30px rgba(0,0,0,0.1);}.right-arrow-class{right:-22px;}.left-arrow-class{left:-22px;}", " @media only screen and (max-width:1330px){.right-arrow-class{right:0px;}.left-arrow-class{left:0px;}}.custom-dot{display:flex;justify-content:center;margin-top:", ";}.dot{position:relative;height:16px;width:16px;border-radius:300px;margin:0.25rem;cursor:pointer;border:1px solid ", ";}.dot:after{position:absolute;content:\" \";height:9px;width:9px;top:50%;left:50%;border-radius:300px;transform:translate(-50%,-50%) scaleX(0);background:", ";}.dot-active:after{transform:translate(-50%,-50%) scaleX(1);}"], ({
  spacing
}) => spacing || "0px", ({
  spacing
}) => spacing || "0px", ({
  spacing
}) => spacing || "0px", props => props.showDots ? props.dotGroupMarginTop : "0px", props => props.showArrowOnHover ? `
  [class*="arrow-class"] {
    display: none;
  }

  :hover {
    [class*="arrow-class"] {
      display: unset;
    }
  }

  @media only screen and (max-width: ${constants/* deviceSize.sm */.J.sm}px) {
    [class*="arrow-class"] {
      display: block;
    }
  }
  ` : "", props => props.dotGroupMarginTop || "0px", ({
  dotColor
}) => dotColor || (0,utils/* getTheme */.gh)("colors.secondary.main"), ({
  dotColor
}) => dotColor || (0,utils/* getTheme */.gh)("colors.secondary.main"));
;// CONCATENATED MODULE: ./src/components/carousel/Carousel.js
function Carousel_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Carousel_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Carousel_ownKeys(Object(source), !0).forEach(function (key) { Carousel_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Carousel_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Carousel_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const Carousel_Carousel = ({
  children,
  naturalSlideWidth,
  naturalSlideHeight,
  totalSlides,
  visibleSlides,
  currentSlide,
  isIntrinsicHeight,
  hasMasterSpinner,
  infinite,
  autoPlay,
  step,
  interval,
  showDots,
  showArrow,
  showArrowOnHover,
  dotClass,
  dotColor,
  dotGroupMarginTop,
  spacing,
  arrowButtonClass,
  arrowButtonColor,
  leftButtonClass,
  rightButtonClass,
  leftButtonStyle,
  rightButtonStyle
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledCarousel, {
    naturalSlideWidth: naturalSlideWidth,
    naturalSlideHeight: naturalSlideHeight,
    totalSlides: totalSlides,
    visibleSlides: visibleSlides,
    isIntrinsicHeight: isIntrinsicHeight,
    hasMasterSpinner: hasMasterSpinner,
    infinite: infinite,
    isPlaying: autoPlay,
    step: step,
    interval: interval,
    dotColor: dotColor,
    dotGroupMarginTop: dotGroupMarginTop,
    spacing: spacing,
    showDots: showDots,
    currentSlide: currentSlide,
    showArrowOnHover: showArrowOnHover,
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_pure_react_carousel_namespaceObject.Slider, {
      className: "custom-slider",
      children: external_react_default().Children.map(children, (child, ind) => /*#__PURE__*/jsx_runtime_.jsx(external_pure_react_carousel_namespaceObject.Slide, {
        index: ind,
        children: child
      }))
    }), showDots && /*#__PURE__*/jsx_runtime_.jsx(external_pure_react_carousel_namespaceObject.DotGroup, {
      className: `custom-dot ${dotClass}`,
      renderDots: props => renderDots(Carousel_objectSpread(Carousel_objectSpread({}, props), {}, {
        step
      }))
    }), showArrow && /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
        className: `arrow-button left-arrow-class ${arrowButtonClass} ${leftButtonClass}`,
        as: external_pure_react_carousel_namespaceObject.ButtonBack,
        variant: "contained",
        color: arrowButtonColor,
        style: leftButtonStyle || {},
        children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
          variant: "small",
          defaultcolor: "currentColor",
          children: "arrow-left"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
        className: `arrow-button right-arrow-class ${arrowButtonClass} ${rightButtonClass}`,
        as: external_pure_react_carousel_namespaceObject.ButtonNext,
        variant: "contained",
        color: arrowButtonColor,
        style: rightButtonStyle || {},
        children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
          variant: "small",
          defaultcolor: "currentColor",
          children: "arrow-right"
        })
      })]
    })]
  });
};

const renderDots = ({
  step,
  currentSlide,
  visibleSlides,
  totalSlides,
  carouselStore
}) => {
  const dots = [];
  const total = totalSlides - visibleSlides + 1;

  for (let i = 0; i < total; i += step) {
    dots.push( /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: external_clsx_default()({
        dot: true,
        "dot-active": currentSlide === i
      }),
      onClick: () => carouselStore.setStoreState({
        currentSlide: i,
        autoPlay: false
      })
    }, i));

    if (total - i - 1 < step && total - i - 1 !== 0) {
      dots.push( /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: external_clsx_default()({
          dot: true,
          "dot-active": currentSlide === totalSlides - visibleSlides
        }),
        onClick: () => carouselStore.setStoreState({
          currentSlide: totalSlides - visibleSlides,
          autoPlay: false
        })
      }, i + total));
    }
  }

  return dots;
};

Carousel_Carousel.defaultProps = {
  naturalSlideWidth: 100,
  naturalSlideHeight: 125,
  totalSlides: 10,
  visibleSlides: 5,
  isIntrinsicHeight: true,
  hasMasterSpinner: false,
  infinite: false,
  autoPlay: false,
  step: 1,
  interval: 2000,
  showDots: false,
  showArrow: true,
  dotGroupMarginTop: "0rem",
  spacing: "1.5rem",
  arrowButtonColor: "secondary"
};
/* harmony default export */ const carousel_Carousel = (Carousel_Carousel);
;// CONCATENATED MODULE: ./src/components/CategorySectionCreator.js








const CategorySectionCreator_CategorySectionCreator = ({
  iconName,
  seeMoreLink,
  title,
  children
}) => {
  const window = (0,hooks_useWindowSize/* default */.Z)();
  return /*#__PURE__*/jsx_runtime_.jsx(components_Box/* default */.Z, {
    mb: window < 568 ? "1.75rem" : "3.75rem",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
      pb: "1rem",
      children: [title && /*#__PURE__*/jsx_runtime_.jsx(components_CategorySectionHeader, {
        title: title,
        seeMoreLink: seeMoreLink,
        iconName: iconName
      }), children]
    })
  });
};

/* harmony default export */ const components_CategorySectionCreator = (CategorySectionCreator_CategorySectionCreator);
// EXTERNAL MODULE: ./src/components/HoverBox.js
var components_HoverBox = __webpack_require__(9786);
;// CONCATENATED MODULE: ./src/components/product-cards/TopCategoriesView.js








const TopCategoriesView_TopCategoriesView = ({
  title,
  image,
  lang
}) => {
  return /*#__PURE__*/_jsxs(Card, {
    position: "relative",
    children: [/*#__PURE__*/_jsx(Chip, {
      bg: "secondary.main",
      position: "absolute",
      color: "white",
      fontWeight: "600",
      fontSize: "10px",
      p: "4px 10px",
      top: "0.875rem",
      left: "0.875rem",
      zIndex: 2,
      children: title
    }), /*#__PURE__*/_jsx(Chip, {
      bg: "gray.300",
      position: "absolute",
      color: "gray.800",
      fontWeight: "600",
      fontSize: "10px",
      p: "4px 10px",
      top: "0.875rem",
      right: "0.875rem",
      zIndex: 2,
      children: lang === 'uz' ? 'Eng zo`rlari' : 'Лучший'
    }), /*#__PURE__*/_jsx(HoverBox, {
      position: "relative",
      height: "120px",
      borderRadius: 8,
      children: image ? /*#__PURE__*/_jsx(NextImage, {
        src: image,
        layout: "fill",
        objectFit: "cover",
        placeholder: "blur",
        blurDataURL: "/assets/images/placeholder.png"
      }) : /*#__PURE__*/_jsx(NextImage, {
        src: "/assets/images/banners/category-1.png",
        layout: "fill",
        objectFit: "cover",
        placeholder: "blur",
        blurDataURL: "/assets/images/placeholder.png"
      })
    })]
  });
};

/* harmony default export */ const product_cards_TopCategoriesView = ((/* unused pure expression or super */ null && (TopCategoriesView_TopCategoriesView)));
;// CONCATENATED MODULE: ./src/components/home/TopCategories.js










const TopCategories = ({
  featuredCategories
}) => {
  const {
    0: visibleSlides,
    1: setVisibleSlides
  } = useState(3);
  const width = useWindowSize();
  const state = useSelector(state => state.categories);
  const lang = useSelector(state => state.lang.lang);
  useEffect(() => {
    if (width < 650) setVisibleSlides(1);else if (width < 950) setVisibleSlides(2);else setVisibleSlides(3);
  }, [width]);
  return /*#__PURE__*/_jsx(CategorySectionCreator, {
    iconName: "categories",
    title: lang === 'uz' ? "Ommabop bo'limlar" : "Популярные разделы",
    seeMoreLink: "#",
    children: /*#__PURE__*/_jsx(Carousel, {
      totalSlides: featuredCategories === null || featuredCategories === void 0 ? void 0 : featuredCategories.length,
      visibleSlides: visibleSlides,
      showDots: width < 650 ? true : false,
      showArrow: width < 650 ? false : true,
      children: featuredCategories && featuredCategories.map((item, ind) => /*#__PURE__*/_jsx(Link, {
        href: "/products/" + item.slug,
        children: /*#__PURE__*/_jsx("a", {
          children: /*#__PURE__*/_jsx(Card, {
            p: "1rem",
            children: /*#__PURE__*/_jsx(TopCategoriesView, {
              title: lang === 'uz' ? item.name_uz : item.name_ru // subtitle={item.subtitle}
              ,
              imgUrl: item.image,
              lang: lang
            })
          })
        })
      }, ind))
    })
  });
};

/* harmony default export */ const home_TopCategories = ((/* unused pure expression or super */ null && (TopCategories)));
// EXTERNAL MODULE: ./src/components/layout/AppLayout.js + 19 modules
var AppLayout = __webpack_require__(2685);
// EXTERNAL MODULE: ./src/reducers/categoriesReducer.js
var categoriesReducer = __webpack_require__(8677);
;// CONCATENATED MODULE: ./src/components/home/MostViewed.js















const MostViewed = ({
  mostViewedProducts
}) => {
  const state = (0,external_react_redux_.useSelector)(state => state.products);
  const lang = (0,external_react_redux_.useSelector)(state => state.lang.lang);
  const {
    0: visibleSlides,
    1: setVisibleSlides
  } = (0,external_react_.useState)(6);
  const width = (0,hooks_useWindowSize/* default */.Z)();

  const myLoader = ({
    src,
    width,
    quality
  }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  (0,external_react_.useEffect)(() => {
    if (width < 370) setVisibleSlides(1);else if (width < 650) setVisibleSlides(2);else if (width < 950) setVisibleSlides(4);else setVisibleSlides(5);
  }, [width]);
  return /*#__PURE__*/jsx_runtime_.jsx(components_CategorySectionCreator, {
    iconName: "ranking-1",
    title: lang === 'uz' ? "Top mahsulotlar" : 'Лучшие товары',
    seeMoreLink: "/products/products?views=views,desc",
    children: /*#__PURE__*/jsx_runtime_.jsx(components_Box/* default */.Z, {
      my: "-0.25rem",
      children: /*#__PURE__*/jsx_runtime_.jsx(carousel_Carousel, {
        totalSlides: 9,
        visibleSlides: visibleSlides,
        showDots: width < 650 ? true : false,
        showArrow: width < 650 ? false : true,
        children: mostViewedProducts === null || mostViewedProducts === void 0 ? void 0 : mostViewedProducts.map((item, ind) => /*#__PURE__*/jsx_runtime_.jsx(components_Box/* default */.Z, {
          py: "0.25rem",
          children: /*#__PURE__*/jsx_runtime_.jsx(components_Card/* default */.Z, {
            p: "1rem",
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: `/product/${item === null || item === void 0 ? void 0 : item.slug}`,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                children: [/*#__PURE__*/jsx_runtime_.jsx(components_HoverBox/* default */.Z, {
                  borderRadius: 8,
                  mb: "0.5rem",
                  children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
                    loader: myLoader,
                    src: item === null || item === void 0 ? void 0 : item.images[0],
                    layout: "responsive",
                    alt: item === null || item === void 0 ? void 0 : item.name_uz,
                    width: 100,
                    height: 100,
                    quality: "85",
                    placeholder: "blur",
                    blurDataURL: "placeholder.png"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(Typography.H3, {
                  className: "details title",
                  fontSize: "14px",
                  textAlign: "left",
                  fontWeight: "600",
                  color: "text.secondary",
                  mb: "10px",
                  title: lang === 'uz' ? item === null || item === void 0 ? void 0 : item.name_uz : item === null || item === void 0 ? void 0 : item.name_ru,
                  children: lang === 'uz' ? item === null || item === void 0 ? void 0 : item.name_uz : item === null || item === void 0 ? void 0 : item.name_ru
                }), /*#__PURE__*/jsx_runtime_.jsx(FlexBox/* default */.Z, {
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Typography.H4, {
                    fontWeight: "600",
                    fontSize: "14px",
                    color: "primary.main",
                    mr: "0.5rem",
                    children: [Math.ceil(item === null || item === void 0 ? void 0 : item.price).toLocaleString(), /*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: " UZS"
                    })]
                  })
                })]
              })
            })
          })
        }, item.id))
      })
    })
  });
};

/* harmony default export */ const home_MostViewed = (MostViewed);
;// CONCATENATED MODULE: ./src/components/carousel-cards/CarouselCardStyle.js

const StyledCarouselCard1 = external_styled_components_default().div.withConfig({
  displayName: "CarouselCardStyle__StyledCarouselCard1",
  componentId: "sc-n1pr25-0"
})(["text-align:left;padding:1rem 0 1rem 0;.title{font-size:50px;margin-top:0px;margin-bottom:1.35rem;line-height:1.2;}.image-holder{position:relative;img{width:100%;border-radius:8px;}}@media only screen and (max-width:900px){margin-left:0px;padding:0px;.title{font-size:32px;}}@media only screen and (max-width:425px){.title{font-size:16px;}.title + *{font-size:13px;}.button-link{padding:0.66rem 0.95rem;font-size:13px;}}"]);
;// CONCATENATED MODULE: ./src/components/carousel-cards/CarouselCard1.js










const CarouselCard1 = ({
  slide
}) => {
  const window = (0,hooks_useWindowSize/* default */.Z)();

  const myLoader = ({
    src,
    width,
    quality
  }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return /*#__PURE__*/jsx_runtime_.jsx(StyledCarouselCard1, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
      children: (slide === null || slide === void 0 ? void 0 : slide.url) !== null ? /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: `/${slide === null || slide === void 0 ? void 0 : slide.url}`,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "image-holder",
            style: {
              width: '100%',
              height: (slide === null || slide === void 0 ? void 0 : slide.position) === 'lower' ? window < 568 ? '150px' : '350px' : window < 568 ? '150px' : '300px',
              display: 'block',
              position: 'relative'
            },
            children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
              loader: myLoader,
              src: slide === null || slide === void 0 ? void 0 : slide.image,
              layout: "fill",
              alt: "banner_img",
              width: 100,
              height: 100,
              quality: "85",
              placeholder: "blur",
              blurDataURL: "placeholder.png"
            })
          })
        })
      }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "image-holder",
        style: {
          width: '100%',
          display: 'block',
          position: 'relative'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
          loader: myLoader,
          src: slide === null || slide === void 0 ? void 0 : slide.image,
          layout: "fill",
          width: 100,
          height: 100,
          alt: "banner_img",
          quality: "85",
          placeholder: "blur",
          blurDataURL: "placeholder.png"
        })
      })
    })
  });
};

/* harmony default export */ const carousel_cards_CarouselCard1 = (CarouselCard1);
// EXTERNAL MODULE: ./src/components/navbar/Navbar.js + 1 modules
var Navbar = __webpack_require__(8916);
;// CONCATENATED MODULE: ./src/components/home/SliderHero.js











const SliderHero = ({
  slides
}) => {
  var _slides$filter;

  const state = (0,external_react_redux_.useSelector)(state => state.slides);
  const window = (0,hooks_useWindowSize/* default */.Z)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Navbar/* default */.Z, {
      navListOpen: true
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Box/* default */.Z, {
      bg: "gray.white",
      mb: window < 568 ? "1.75rem" : "3.75rem",
      children: /*#__PURE__*/jsx_runtime_.jsx(carousel_Carousel, {
        totalSlides: slides.filter(el => el.position == "hero").length,
        visibleSlides: 1,
        infinite: true,
        autoPlay: true,
        showDots: false,
        showArrow: false,
        spacing: "0px",
        children: slides === null || slides === void 0 ? void 0 : (_slides$filter = slides.filter(el => el.position == "hero")) === null || _slides$filter === void 0 ? void 0 : _slides$filter.map((slide, ind) => /*#__PURE__*/jsx_runtime_.jsx(carousel_cards_CarouselCard1, {
          slide: slide
        }, ind))
      })
    })]
  });
};

/* harmony default export */ const home_SliderHero = (SliderHero);
;// CONCATENATED MODULE: ./src/components/home/SliderLower.js









const SliderLower = ({
  slides
}) => {
  var _slides$filter;

  const state = (0,external_react_redux_.useSelector)(state => state.slides);
  const window = (0,hooks_useWindowSize/* default */.Z)();
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(components_Box/* default */.Z, {
      mb: window < 568 ? "1.75rem" : "3.75rem",
      children: /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
        children: /*#__PURE__*/jsx_runtime_.jsx(carousel_Carousel, {
          totalSlides: slides.filter(el => el.position == "lower").length,
          visibleSlides: 1,
          infinite: true,
          autoPlay: true,
          showDots: false,
          showArrow: false,
          spacing: "0px",
          children: slides === null || slides === void 0 ? void 0 : (_slides$filter = slides.filter(el => (el === null || el === void 0 ? void 0 : el.position) == "lower")) === null || _slides$filter === void 0 ? void 0 : _slides$filter.map((slide, ind) => /*#__PURE__*/jsx_runtime_.jsx(carousel_cards_CarouselCard1, {
            slide: slide
          }, ind))
        })
      })
    })
  });
}; // asdasdsd


/* harmony default export */ const home_SliderLower = (SliderLower);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/home/Brands.js















const Brands = ({
  featuredBrands
}) => {
  const state = useSelector(state => state.products);
  const lang = useSelector(state => state.lang.lang);
  const {
    0: visibleSlides,
    1: setVisibleSlides
  } = useState(6);
  const width = useWindowSize();
  const router = useRouter();

  const myLoader = ({
    src,
    width,
    quality
  }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  useEffect(() => {
    if (width < 370) setVisibleSlides(1);else if (width < 650) setVisibleSlides(2);else if (width < 950) setVisibleSlides(5);else setVisibleSlides(7);
  }, [width]);
  return /*#__PURE__*/_jsx(_Fragment, {
    children: (featuredBrands === null || featuredBrands === void 0 ? void 0 : featuredBrands.length) > 0 ? /*#__PURE__*/_jsx(CategorySectionCreator, {
      iconName: "Group",
      title: lang === 'uz' ? "Mashxur brendlar" : 'Известные бренды',
      seeMoreLink: `/products/products`,
      children: /*#__PURE__*/_jsx(Box, {
        my: "-0.25rem",
        children: /*#__PURE__*/_jsx(Carousel, {
          totalSlides: 9,
          visibleSlides: visibleSlides,
          showDots: width < 650 ? true : false,
          showArrow: width < 650 ? false : true,
          children: featuredBrands === null || featuredBrands === void 0 ? void 0 : featuredBrands.map((item, ind) => /*#__PURE__*/_jsx(Box, {
            py: "0.25rem",
            children: /*#__PURE__*/_jsx(Card, {
              p: "1rem",
              textAlign: "center",
              children: /*#__PURE__*/_jsx(Link, {
                href: `/products/products?brand=${item === null || item === void 0 ? void 0 : item.id}`,
                children: /*#__PURE__*/_jsxs("a", {
                  children: [/*#__PURE__*/_jsx(Image, {
                    loader: myLoader,
                    src: item === null || item === void 0 ? void 0 : item.image,
                    alt: item === null || item === void 0 ? void 0 : item.name_uz,
                    width: "100%",
                    objectFit: "contain",
                    height: 90,
                    quality: "85",
                    placeholder: "blur",
                    blurDataURL: "placeholder.png"
                  }), /*#__PURE__*/_jsx(H3, {
                    className: "title",
                    fontSize: "14px",
                    textAlign: "center",
                    fontWeight: "600",
                    color: "text.secondary",
                    mb: "10px",
                    title: lang === 'uz' ? item === null || item === void 0 ? void 0 : item.name_uz : item === null || item === void 0 ? void 0 : item.name_ru,
                    onClick: () => handleBrandId(item.id),
                    children: lang === 'uz' ? item === null || item === void 0 ? void 0 : item.name_uz : item === null || item === void 0 ? void 0 : item.name_ru
                  })]
                })
              })
            })
          }, item === null || item === void 0 ? void 0 : item.id))
        })
      })
    }) : null
  });
};

/* harmony default export */ const home_Brands = ((/* unused pure expression or super */ null && (Brands)));
// EXTERNAL MODULE: ./src/reducers/brandsReducer.js
var brandsReducer = __webpack_require__(2779);
// EXTERNAL MODULE: ./src/reducers/slidesReducer.js
var slidesReducer = __webpack_require__(1508);
// EXTERNAL MODULE: ./src/reducers/productsReducer.js
var productsReducer = __webpack_require__(5923);
// EXTERNAL MODULE: ./src/reducers/LangReducer.js
var LangReducer = __webpack_require__(6007);
;// CONCATENATED MODULE: ./src/pages/index.js






















const IndexPage = ({
  items,
  featuredBrands,
  slides,
  // featuredCategories,
  mostViewedProducts,
  // newProducts,
  smartphones,
  recommendedProducts
}) => {
  var _state$categories;

  const dispatch = (0,external_react_redux_.useDispatch)();
  const state = (0,external_react_redux_.useSelector)(state => state);
  const isActive = state === null || state === void 0 ? void 0 : (_state$categories = state.categories) === null || _state$categories === void 0 ? void 0 : _state$categories.categoryNavIsActive;
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(true);
  (0,external_react_.useEffect)(() => {
    dispatch((0,categoriesReducer/* setCategories */.DG)(items));
    dispatch((0,brandsReducer/* setBrands */.dk)(featuredBrands));
    dispatch((0,slidesReducer/* setSlides */.Yw)(slides));
    dispatch((0,productsReducer/* setMostVieweddProducts */.Du)(mostViewedProducts));
    dispatch((0,productsReducer/* setSmartphones */.G0)(smartphones));
    dispatch((0,productsReducer/* setRecommendedProducts */.mP)(recommendedProducts));
    (0,cartReducer/* getCartItems */.fq)()(dispatch);
    dispatch((0,LangReducer/* setLang */.W)(localStorage.getItem('lang')));
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(home_SliderHero, {
      slides: slides
    }), /*#__PURE__*/jsx_runtime_.jsx(home_MostViewed, {
      mostViewedProducts: mostViewedProducts
    }), /*#__PURE__*/jsx_runtime_.jsx(home_Smartphones, {
      smartphones: smartphones
    }), /*#__PURE__*/jsx_runtime_.jsx(home_SliderLower, {
      slides: slides
    }), /*#__PURE__*/jsx_runtime_.jsx(home_SomeProducts, {
      recommendedProducts: recommendedProducts
    }), /*#__PURE__*/jsx_runtime_.jsx(home_Services, {})]
  });
};

IndexPage.layout = AppLayout/* default */.Z;
async function getStaticProps() {
  const [categoriesRes, featuredBrandsRes, slidesRes, mostViewedProductsRes, smartphonesRes, recommendedProductsRes] = await Promise.all([fetch('https://api.sdb.uz/dev/v1/category/list'), fetch('https://api.sdb.uz/dev/v1/brand/list?featured=1'), fetch('https://api.sdb.uz/dev/v1/events/list'), fetch('https://api.sdb.uz/dev/v1/product/list?sort=views,desc&per_page=9'), fetch('https://api.sdb.uz/dev/v1/category/smartfonlar?per_page=12'), fetch('https://api.sdb.uz/dev/v1/product/list?type=recommended&per_page=12')]);
  const [categories, featuredBrands, slides, mostViewedProducts, smartphones, recommendedProducts] = await Promise.all([categoriesRes.json(), featuredBrandsRes.json(), slidesRes.json(), mostViewedProductsRes.json(), smartphonesRes.json(), recommendedProductsRes.json()]);
  return {
    props: {
      items: categories.categories,
      featuredBrands: featuredBrands === null || featuredBrands === void 0 ? void 0 : featuredBrands.brands,
      slides: slides === null || slides === void 0 ? void 0 : slides.events,
      mostViewedProducts: mostViewedProducts === null || mostViewedProducts === void 0 ? void 0 : mostViewedProducts.products,
      smartphones: smartphones === null || smartphones === void 0 ? void 0 : smartphones.products,
      recommendedProducts: recommendedProducts === null || recommendedProducts === void 0 ? void 0 : recommendedProducts.products
    },
    revalidate: 10
  };
}
/* harmony default export */ const pages = (IndexPage);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [383,664,675,938,928,27,372,483,685,916,545,741,369], () => (__webpack_exec__(6847)));
module.exports = __webpack_exports__;

})();