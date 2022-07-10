"use strict";
exports.id = 916;
exports.ids = [916];
exports.modules = {

/***/ 8916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ navbar_Navbar)
});

// EXTERNAL MODULE: ./src/components/Box.js
var Box = __webpack_require__(6883);
// EXTERNAL MODULE: ./src/components/categories/category-menu-item/CategoryMenuItemStyle.js
var CategoryMenuItemStyle = __webpack_require__(1381);
// EXTERNAL MODULE: ./src/components/MenuItem.js
var MenuItem = __webpack_require__(4407);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3094);
// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__(5834);
// EXTERNAL MODULE: external "react-horizontal-scrolling-menu"
var external_react_horizontal_scrolling_menu_ = __webpack_require__(916);
// EXTERNAL MODULE: ./src/components/buttons/Button.js
var Button = __webpack_require__(8027);
// EXTERNAL MODULE: ./src/components/categories/Categories.js + 8 modules
var Categories = __webpack_require__(7803);
// EXTERNAL MODULE: ./src/components/Container.js
var Container = __webpack_require__(3158);
// EXTERNAL MODULE: ./src/components/FlexBox.js
var FlexBox = __webpack_require__(2938);
// EXTERNAL MODULE: ./src/components/icon/Icon.js + 1 modules
var Icon = __webpack_require__(5937);
// EXTERNAL MODULE: ./src/components/nav-link/NavLink.js + 1 modules
var NavLink = __webpack_require__(3886);
// EXTERNAL MODULE: ./src/components/Typography.js
var Typography = __webpack_require__(2278);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__(8967);
;// CONCATENATED MODULE: ./src/components/navbar/NavbarStyle.js


const StyledNavbar = external_styled_components_default().div.withConfig({
  displayName: "NavbarStyle__StyledNavbar",
  componentId: "sc-fqywfe-0"
})(["position:relative;height:60px;background:", ";box-shadow:", ";.nav-link{font-size:14px;margin-right:32px;cursor:pointer;:hover{color:", ";}}.nav-link:last-child{margin-right:0px;}.root-child{display:none;position:absolute;left:0;top:100%;z-index:5;}.root:hover{.root-child{display:block;}}.child{display:none;position:absolute;top:0;left:100%;z-index:5;}.parent:hover > .child{display:block;}.dropdown-icon{color:", ";}@media only screen and (max-width:900px){display:none;}"], (0,utils/* getTheme */.gh)("colors.body.paper"), (0,utils/* getTheme */.gh)("shadows.regular"), (0,utils/* getTheme */.gh)("colors.primary.main"), (0,utils/* getTheme */.gh)("colors.text.muted"));
/* harmony default export */ const NavbarStyle = (StyledNavbar);
// EXTERNAL MODULE: ./src/components/grid/Grid.js + 1 modules
var Grid = __webpack_require__(7407);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/navbar/Navbar.js




















const Navbar = ({
  navListOpen
}) => {
  const [selected, setSelected] = external_react_default().useState([]);
  const [position, setPosition] = external_react_default().useState(0);

  const isItemSelected = id => !!selected.find(el => el === id);

  const handleClick = id => ({
    getItemById,
    scrollToItem
  }) => {
    const itemSelected = isItemSelected(id);
    setSelected(currentSelected => itemSelected ? currentSelected.filter(el => el !== id) : currentSelected.concat(id));
  };

  const categories = (0,external_react_redux_.useSelector)(state => state.categories.navbarLinks);
  const [is_hovered, setHovered] = external_react_default().useState(false);
  const [hoveredCategory, setHoveredCategory] = external_react_default().useState([]);
  const lang = (0,external_react_redux_.useSelector)(state => state.lang.lang);

  const mouseIn = (category, event) => {
    setHovered(true);
    setHoveredCategory(category);
  };

  const mouseOut = event => setHovered(false);

  return /*#__PURE__*/jsx_runtime_.jsx(NavbarStyle, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_horizontal_scrolling_menu_.ScrollMenu, {
        onWheel: onWheel,
        LeftArrow: () => /*#__PURE__*/jsx_runtime_.jsx(Arrow, {
          side: "left"
        }),
        RightArrow: () => /*#__PURE__*/jsx_runtime_.jsx(Arrow, {
          side: "right"
        }),
        children: categories === null || categories === void 0 ? void 0 : categories.map(category => /*#__PURE__*/jsx_runtime_.jsx(Card, {
          mouseIn: mouseIn,
          mouseOut: mouseOut,
          itemId: category.id,
          category: category,
          lang: lang,
          onClick: handleClick(category.id),
          selected: isItemSelected(category.id)
        }, category.id))
      }), /*#__PURE__*/jsx_runtime_.jsx(CategoryDetails, {
        is_hovered: is_hovered,
        hoveredCategory: hoveredCategory,
        mouseIn: mouseIn,
        mouseOut: mouseOut,
        lang: lang
      })]
    })
  });
};

/* harmony default export */ const navbar_Navbar = (Navbar);

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

const Card = ({
  onClick,
  mouseIn,
  mouseOut,
  category,
  lang
}) => {
  var _category$image;

  const visibility = external_react_default().useContext(external_react_horizontal_scrolling_menu_.VisibilityContext);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    onMouseEnter: event => mouseIn(category, event),
    onMouseLeave: mouseOut,
    onClick: () => onClick(visibility),
    tabIndex: 0,
    className: "category_swipe_item",
    children: /*#__PURE__*/jsx_runtime_.jsx(CategoryMenuItemStyle/* StyledCategoryMenuItem */.v, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          display: 'flex',
          flexDirection: 'row'
        },
        children: [category.image && /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: (_category$image = category.image) === null || _category$image === void 0 ? void 0 : _category$image.replace(/https:\/\/api.sdb.uz/gi, "https://api.sdb.uz"),
          alt: ""
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "title",
          style: {
            padding: '20px',
            lineHeight: 1.2
          },
          children: lang === 'uz' ? category[`name_${'uz'}`] : category[`name_${'ru'}`]
        }), /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
          variant: "small",
          style: {
            display: 'flex',
            alignItems: 'center'
          },
          children: "chevron-down"
        })]
      })
    })
  });
};

const Arrow = ({
  side = 'left'
}) => {
  const {
    isLastItemVisible,
    isFirstItemVisible,
    scrollNext,
    scrollPrev
  } = external_react_default().useContext(external_react_horizontal_scrolling_menu_.VisibilityContext);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "arrow_button_round",
    onClick: () => {
      if (side === 'left') !isFirstItemVisible && scrollPrev();else !isLastItemVisible && scrollNext();
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
      variant: "small",
      children: `chevron-${side}`
    })
  });
};

const CategoryDetails = ({
  is_hovered,
  hoveredCategory,
  mouseIn,
  mouseOut,
  lang
}) => {
  var _hoveredCategory$chil;

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    onMouseEnter: event => mouseIn(hoveredCategory, event),
    onMouseLeave: mouseOut,
    className: "wrap_cat_banner",
    style: {
      display: is_hovered ? 'block' : 'none'
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        height: '30px'
      }
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "category_banner_details",
      px: "1.25rem",
      py: "0.875rem",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Typography.H3, {
        className: "title",
        fontSize: "18px",
        textAlign: "left",
        fontWeight: "600",
        color: "text.secondary",
        pl: "20px",
        mb: "10px" // title={product?.name_uz}
        ,
        children: lang === 'uz' ? hoveredCategory[`name_${'uz'}`] : hoveredCategory[`name_${'ru'}`]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(FlexBox/* default */.Z, {
          px: "1.25rem",
          py: "0.875rem",
          children: /*#__PURE__*/jsx_runtime_.jsx(Box/* default */.Z, {
            flex: "1 1 0",
            children: /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
              container: true,
              spacing: 4,
              children: (_hoveredCategory$chil = hoveredCategory.children) === null || _hoveredCategory$chil === void 0 ? void 0 : _hoveredCategory$chil.map((sub, i2) => {
                var _sub$children;

                return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
                  item: true,
                  md: 3,
                  children: [/*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
                    className: "child-link",
                    href: `/products/${sub.slug}`,
                    children: /*#__PURE__*/jsx_runtime_.jsx(Typography.H3, {
                      className: "title",
                      fontSize: "14px",
                      textAlign: "left",
                      fontWeight: "600",
                      color: "text.secondary",
                      mb: "10px",
                      children: lang === 'uz' ? sub.name_uz : sub.name_ru
                    })
                  }, i2), (_sub$children = sub.children) === null || _sub$children === void 0 ? void 0 : _sub$children.map((item, i2) => /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
                    className: "child-link",
                    style: {
                      display: 'block'
                    },
                    href: `/products/${item.slug}`,
                    children: lang === 'uz' ? item.name_uz : item.name_ru
                  }, i2))]
                }, i2);
              })
            })
          })
        })
      })]
    })]
  });
};

/***/ })

};
;