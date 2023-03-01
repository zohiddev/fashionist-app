"use strict";
(() => {
var exports = {};
exports.id = 304;
exports.ids = [304];
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
/* harmony import */ var _AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5348);
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

/***/ 1774:
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
// EXTERNAL MODULE: ./src/components/buttons/IconButton.js
var IconButton = __webpack_require__(7395);
// EXTERNAL MODULE: ./src/components/Card.js
var Card = __webpack_require__(2770);
// EXTERNAL MODULE: ./src/components/FlexBox.js
var FlexBox = __webpack_require__(2938);
// EXTERNAL MODULE: ./src/components/grid/Grid.js + 1 modules
var Grid = __webpack_require__(7407);
// EXTERNAL MODULE: ./src/components/hidden/Hidden.js
var Hidden = __webpack_require__(2282);
// EXTERNAL MODULE: ./src/components/icon/Icon.js + 1 modules
var Icon = __webpack_require__(5937);
// EXTERNAL MODULE: ./src/components/layout/NavbarLayout.js
var NavbarLayout = __webpack_require__(7103);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-paginate"
const external_react_paginate_namespaceObject = require("react-paginate");
var external_react_paginate_default = /*#__PURE__*/__webpack_require__.n(external_react_paginate_namespaceObject);
// EXTERNAL MODULE: ./src/components/buttons/Button.js
var Button = __webpack_require__(8027);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__(5834);
// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__(8967);
;// CONCATENATED MODULE: ./src/components/pagination/PaginationStyle.js



const StyledPagination = external_styled_components_default().div.withConfig({
  displayName: "PaginationStyle__StyledPagination",
  componentId: "sc-4f3rqv-0"
})([".pagination{margin:0px;display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;list-style-type:none;padding:0px;li{cursor:pointer;a{display:flex;justify-content:center;align-items:center;height:32px;width:32px;margin:0px 5px;border-radius:5px;outline:none;border:1px solid transparent;border-radius:50%;@media only screen and (max-width:450px){margin:4px;}}&:not(.active):hover{a{border:1px solid ", ";color:", ";}}}.active{cursor:none;a{border:1px solid ", ";color:", ";}}.disabled{.control-button{cursor:none;border:1px solid ", ";color:", ";}}}.control-button{height:32px;width:32px;min-width:32px;border:1px solid ", ";}", ""], (0,utils/* getTheme */.gh)("colors.primary.main"), (0,utils/* getTheme */.gh)("colors.primary.main"), (0,utils/* getTheme */.gh)("colors.primary.main"), (0,utils/* getTheme */.gh)("colors.primary.main"), (0,utils/* getTheme */.gh)("colors.primary.light"), (0,utils/* getTheme */.gh)("colors.primary.light"), (0,utils/* getTheme */.gh)("colors.primary.main"), external_styled_system_.space);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/pagination/Pagination.js
const _excluded = ["pageCount", "marginPagesDisplayed", "pageRangeDisplayed", "onChange"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const Pagination = _ref => {
  let {
    pageCount,
    marginPagesDisplayed,
    pageRangeDisplayed,
    onChange
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const router = (0,router_.useRouter)();

  const handlePageChange = async page => {
    if (onChange) {
      onChange(page.selected);
    }

    router.query.page = page.selected + 1;
    router.push(router);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(StyledPagination, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx((external_react_paginate_default()), {
      previousLabel: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        className: "control-button",
        color: "primary",
        overflow: "hidden",
        height: "auto",
        padding: "6px",
        borderRadius: "50%",
        children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
          defaultcolor: "currentColor",
          variant: "small",
          children: "chevron-left"
        })
      }),
      nextLabel: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        className: "control-button",
        color: "primary",
        overflow: "hidden",
        height: "auto",
        padding: "6px",
        borderRadius: "50%",
        children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
          defaultcolor: "currentColor",
          variant: "small",
          children: "chevron-right"
        })
      }),
      breakLabel: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
        defaultcolor: "currentColor",
        variant: "small",
        children: "triple-dot"
      }),
      pageCount: pageCount,
      forcePage: router?.query?.page ? Number(router?.query?.page) - 1 : 0,
      marginPagesDisplayed: marginPagesDisplayed,
      pageRangeDisplayed: pageRangeDisplayed,
      onPageChange: handlePageChange,
      containerClassName: "pagination",
      subContainerClassName: "pages pagination",
      activeClassName: "active",
      disabledClassName: "disabled"
    })
  }));
};

/* harmony default export */ const pagination_Pagination = (Pagination);
// EXTERNAL MODULE: ./src/components/product-cards/ProductCard1.js
var ProductCard1 = __webpack_require__(9741);
// EXTERNAL MODULE: ./src/components/Typography.js
var Typography = __webpack_require__(2278);
;// CONCATENATED MODULE: ./src/components/products/ProductCard1List.js









const ProductCard1List = ({
  products,
  pagination
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
      container: true,
      spacing: 6,
      children: products?.map((item, ind) => /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
        item: true,
        lg: 4,
        sm: 6,
        xs: 12,
        children: /*#__PURE__*/jsx_runtime_.jsx(ProductCard1/* default */.Z, {
          product: item
        })
      }, item.id))
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FlexBox/* default */.Z, {
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      mt: "32px",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* SemiSpan */.kf, {}), /*#__PURE__*/jsx_runtime_.jsx(pagination_Pagination, {
        pageCount: pagination?.total_pages
      })]
    })]
  });
};

/* harmony default export */ const products_ProductCard1List = (ProductCard1List);
// EXTERNAL MODULE: ./src/components/accordion/Accordion.js
var Accordion = __webpack_require__(9678);
// EXTERNAL MODULE: ./src/components/accordion/AccordionHeader.js
var AccordionHeader = __webpack_require__(1478);
// EXTERNAL MODULE: ./src/components/avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(5555);
// EXTERNAL MODULE: ./src/components/CheckBox.js
var CheckBox = __webpack_require__(8277);
// EXTERNAL MODULE: ./src/components/Divider.js
var Divider = __webpack_require__(1177);
// EXTERNAL MODULE: ./src/components/text-field/TextField.js + 1 modules
var TextField = __webpack_require__(1306);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/products/ProductFilterCard.js


















const ProductFilterCard = ({
  subCats,
  categoryBrands,
  categoryAttributes,
  brandCategories
}) => {
  const lang = (0,external_react_redux_.useSelector)(state => state.lang.lang);
  const {
    0: brand_ids,
    1: setBrand_ids
  } = (0,external_react_.useState)([]);
  const {
    0: attr,
    1: setAttr
  } = (0,external_react_.useState)([]);
  const router = (0,router_.useRouter)();

  const handleBrandIds = e => {
    if (e.target.checked) {
      setBrand_ids([...brand_ids, e.target.value]);
    } else {
      setBrand_ids(brand_ids.filter(item => item !== e.target.value));
    }
  };

  const handleAttr = e => {
    if (e.target.checked) {
      setAttr([...attr, e.target.value]);
    } else {
      setAttr(attr.filter(item => item !== e.target.value));
    }
  };

  (0,external_react_.useEffect)(() => {
    if (router.query.id !== 'products') {
      brand_ids.length === 0 ? delete router.query.brand_ids : router.query.brand_ids = brand_ids.join(',');
      attr.length === 0 ? delete router.query.attr : router.query.attr = attr.join(',');
      router.push(router);
    }
  }, [brand_ids, attr]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card/* default */.Z, {
    p: "18px 27px 64px 27px",
    elevation: 5,
    children: [subCats?.length === 0 || subCats === undefined ? null : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Typography.H6, {
        mb: "10px",
        children: lang === 'uz' ? 'Kategoriyalar' : 'Категории'
      }), subCats?.map((item, index) => item.subCategories ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(Accordion/* default */.Z, {
        expanded: true,
        children: [/*#__PURE__*/jsx_runtime_.jsx(AccordionHeader/* default */.Z, {
          px: "0px",
          py: "6px",
          color: "text.muted" // justifyContent="flex-start"
          ,
          children: /*#__PURE__*/jsx_runtime_.jsx(Typography/* SemiSpan */.kf, {
            className: "cursor-pointer",
            mr: "9px",
            children: item?.title
          })
        }), item?.subCategories.map((name, index) => /*#__PURE__*/jsx_runtime_.jsx(Typography/* Paragraph */.nv, {
          className: "cursor-pointer",
          fontSize: "14px",
          color: "text.muted",
          pl: "22px",
          py: "6px",
          children: name
        }, index))]
      }, index) : /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: `/products/${item?.slug}`,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx(Typography/* Paragraph */.nv, {
            className: "cursor-pointer",
            fontSize: "14px",
            color: "text.muted",
            py: "6px",
            children: lang === 'uz' ? item?.name_uz : item?.name_ru
          }, item?.id)
        })
      })), /*#__PURE__*/jsx_runtime_.jsx(Divider/* default */.Z, {
        my: "24px"
      })]
    }), brandCategories?.length === 0 || brandCategories === undefined ? null : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Typography.H6, {
        mb: "10px",
        children: lang === 'uz' ? 'Kategoriyalar' : 'Категории'
      }), brandCategories?.map((item, index) => item.subCategories ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(Accordion/* default */.Z, {
        expanded: true,
        children: [/*#__PURE__*/jsx_runtime_.jsx(AccordionHeader/* default */.Z, {
          px: "0px",
          py: "6px",
          color: "text.muted" // justifyContent="flex-start"
          ,
          children: /*#__PURE__*/jsx_runtime_.jsx(Typography/* SemiSpan */.kf, {
            className: "cursor-pointer",
            mr: "9px",
            children: item?.title
          })
        }), item?.subCategories.map((name, index) => /*#__PURE__*/jsx_runtime_.jsx(Typography/* Paragraph */.nv, {
          className: "cursor-pointer",
          fontSize: "14px",
          color: "text.muted",
          pl: "22px",
          py: "6px",
          children: name
        }, index))]
      }, index) : /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: `/products/${item?.slug}`,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx(Typography/* Paragraph */.nv, {
            className: "cursor-pointer",
            fontSize: "14px",
            color: "text.muted",
            py: "6px",
            children: lang === 'uz' ? item?.c_uz || item?.name_uz : item?.c_ru || item?.name_ru
          }, item?.id)
        })
      })), /*#__PURE__*/jsx_runtime_.jsx(Divider/* default */.Z, {
        my: "24px"
      })]
    }), categoryBrands ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Typography.H6, {
        mb: "16px",
        children: lang === 'uz' ? 'Brandlar' : 'Бренды'
      }), categoryBrands?.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx(CheckBox/* default */.Z, {
        name: lang === 'uz' ? item?.name_uz : item?.name_ru,
        value: item?.id,
        color: "secondary",
        label: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Typography/* SemiSpan */.kf, {
          color: "inherit",
          children: [lang === 'uz' ? item?.name_uz : item?.name_ru, " \xA0 ", item?.count]
        }),
        my: "10px",
        onChange: e => {
          handleBrandIds(e);
        }
      }, index))]
    }) : null, categoryAttributes ? categoryAttributes.map(attribute => {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Divider/* default */.Z, {
          my: "24px"
        }), /*#__PURE__*/jsx_runtime_.jsx(Typography.H6, {
          mb: "16px",
          children: lang === 'uz' ? attribute.name_uz : attribute.name_ru
        }), attribute?.values?.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx(CheckBox/* default */.Z, {
          name: lang === 'uz' ? item?.value_uz : item?.value_ru,
          value: item?.value_id,
          color: "secondary",
          label: /*#__PURE__*/jsx_runtime_.jsx(Typography/* SemiSpan */.kf, {
            color: "inherit",
            children: item?.value_uz
          }),
          my: "10px",
          onChange: e => {
            handleAttr(e);
          }
        }, index))]
      });
    }) : null]
  });
};

/* harmony default export */ const products_ProductFilterCard = (ProductFilterCard);
// EXTERNAL MODULE: ./src/components/Select.js
var Select = __webpack_require__(5737);
// EXTERNAL MODULE: ./src/components/sidenav/Sidenav.js + 1 modules
var Sidenav = __webpack_require__(4546);
// EXTERNAL MODULE: ./src/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(7781);
// EXTERNAL MODULE: ./src/components/Container.js
var Container = __webpack_require__(3158);
;// CONCATENATED MODULE: ./src/pages/products/[id].js























const ProductSearchResult = ({
  data,
  rest
}) => {
  const {
    0: view,
    1: setView
  } = (0,external_react_.useState)("grid");
  const lang = (0,external_react_redux_.useSelector)(state => state.lang.lang);
  const width = (0,useWindowSize/* default */.Z)();
  const {
    0: sortValue,
    1: setSortValue
  } = (0,external_react_.useState)('');
  const isTablet = width < 1025;
  const router = (0,router_.useRouter)();

  const handleGoBack = async () => {
    router.back();
  };

  const handleSelectChange = e => {
    setSortValue(e.value);
  };

  (0,external_react_.useEffect)(() => {
    if (sortValue === '' || sortValue === 'all') {
      delete router.query.sort_by;
      delete router.query.order_type;
    } else {
      router.query.sort_by = 'price';
      router.query.order_type = sortValue;
    }

    router.push(router);
  }, [sortValue]);
  return /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
    pb: "2rem",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Box/* default */.Z, {
      pt: "20px",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(FlexBox/* default */.Z, {
        p: "1.25rem",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        mb: "55px",
        elevation: 5,
        as: Card/* default */.Z,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx(Typography/* Paragraph */.nv, {
            color: "text.muted",
            children: lang === 'uz' ? `Jami ${data?.pagination?.total} ta topildi` : `Всего найдено ${data?.pagination?.total}`
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FlexBox/* default */.Z, {
          alignItems: "center",
          flexWrap: "wrap",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Typography/* Paragraph */.nv, {
            color: "text.muted",
            mr: "1rem",
            children: [lang === 'uz' ? 'Saralash' : 'Сортировка', ":"]
          }), /*#__PURE__*/jsx_runtime_.jsx(Box/* default */.Z, {
            flex: "1 1 0",
            mr: "1.75rem",
            minWidth: "150px",
            children: /*#__PURE__*/jsx_runtime_.jsx(Select/* default */.Z, {
              placeholder: lang === 'uz' ? 'Saralash' : 'Сортировка',
              isSearchable: false,
              defaultValue: lang === 'uz' ? sortOptions_uz[0] : sortOptions_ru[0],
              options: lang === 'uz' ? sortOptions_uz : sortOptions_ru,
              onChange: e => handleSelectChange(e)
            })
          }), isTablet && /*#__PURE__*/jsx_runtime_.jsx(Sidenav/* default */.Z, {
            position: "left",
            scroll: true,
            handle: /*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
              size: "small",
              children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
                children: "options"
              })
            }),
            children: /*#__PURE__*/jsx_runtime_.jsx(products_ProductFilterCard, {
              subCats: data?.subCats,
              categoryBrands: data?.categoryBrands,
              categoryAttributes: data?.categoryAttributes,
              brandCategories: data?.relatedCategories
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
        container: true,
        spacing: 6,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
          as: Grid/* default */.Z,
          item: true,
          lg: 3,
          xs: 12,
          down: 1024,
          children: /*#__PURE__*/jsx_runtime_.jsx(products_ProductFilterCard, {
            subCats: data?.subCats,
            categoryBrands: data?.categoryBrands,
            categoryAttributes: data?.categoryAttributes,
            brandCategories: data?.relatedCategories
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          item: true,
          lg: 9,
          xs: 12,
          children: data?.products?.length !== 0 ? /*#__PURE__*/jsx_runtime_.jsx(products_ProductCard1List, {
            products: data?.products,
            pagination: data?.pagination
          }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(FlexBox/* default */.Z, {
            flexDirection: "column",
            minHeight: "100vh",
            justifyContent: "center",
            alignItems: "center",
            px: "1rem",
            children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.ZP, {
              children: lang === 'uz' ? 'Kechirasiz, hozirda ushbu kategoriyada hech qanday mahsulot yoʻq.' : 'К сожалению, в данной категории временно нет товаров'
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FlexBox/* default */.Z, {
              flexWrap: "wrap",
              children: [/*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
                variant: "outlined",
                color: "primary",
                m: "0.5rem",
                onClick: handleGoBack,
                children: lang === 'uz' ? 'Ortga qaytish' : 'Возвращаться'
              }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
                  variant: "contained",
                  color: "primary",
                  m: "0.5rem",
                  children: lang === 'uz' ? 'Bosh sahifaga qaytish' : 'Вернуться домой'
                })
              })]
            })]
          })
        })]
      })]
    })
  });
};

const sortOptions_uz = [{
  label: "Barchasini ko'rsatish",
  value: "all"
}, {
  label: "Arzon yuqorida",
  value: "asc"
}, {
  label: "Qimmat yuqorida",
  value: "desc"
}];
const sortOptions_ru = [{
  label: "Показать все",
  value: "all"
}, {
  label: "Дешево выше",
  value: "asc"
}, {
  label: "Дорого выше",
  value: "desc"
}];
ProductSearchResult.layout = NavbarLayout/* default */.Z;
async function getServerSideProps({
  params,
  query
}) {
  if (params.id !== "products") {
    const res = await fetch(`https://api.sdb.uz/dev/v1/category/${params.id}?per_page=15${query.page ? `&page=${query.page}` : ''}${query.brand_ids ? `&brand_ids=${query.brand_ids}` : ''}${query.attr ? `&attr=${query.attr}` : ''}${query.sort_by ? `&sort=${query.sort_by},${query.order_type}` : ''}`);
    const data = await res.json();
    return {
      props: {
        data: data,
        rest: query
      }
    };
  } else {
    const res = await fetch(`https://api.sdb.uz/dev/v1/product/list?per_page=15&page=${query.page}${query.brand ? `&brand_ids=${query.brand}` : ''}${query.sort_by ? `&sort=${query.sort_by},${query.order_type}` : ''}${query.views ? `&sort=${query.views}` : ''}${query.news ? `&sort=${query.news}` : ''}${query.type ? `&type=${query.type}` : ''}${query.search ? `&type=default&search=${query.search}` : ''}`);
    const data = await res.json();
    return {
      props: {
        data: data,
        rest: query
      }
    };
  }
}
/* harmony default export */ const _id_ = (ProductSearchResult);

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

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

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

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 3094:
/***/ ((module) => {

module.exports = require("react-scroll");

/***/ }),

/***/ 1929:
/***/ ((module) => {

module.exports = require("react-select");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [383,664,675,938,903,27,372,483,348,916,545,741,282,308,505], () => (__webpack_exec__(1774)));
module.exports = __webpack_exports__;

})();