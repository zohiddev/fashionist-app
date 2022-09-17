"use strict";
exports.id = 369;
exports.ids = [369];
exports.modules = {

/***/ 2779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dk": () => (/* binding */ setBrands)
/* harmony export */ });
/* unused harmony exports setLoading, getBrands, getFeaturedBrands */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1643);


const SET_BRANDS = "SET_BRANDS";
const SET_LOADING = 'SET_LOADING';
let initialState = {
  brands: [],
  loading: false
};

const BrandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BRANDS:
      state.brands = action.brands;
      return state;

    case SET_LOADING:
      state.loading = action.loading;
      return state;

    default:
      return state;
  }
};

const setBrands = brands => ({
  type: SET_BRANDS,
  brands
});
const setLoading = loading => ({
  type: SET_LOADING,
  loading
});
const getBrands = () => {
  return async dispatch => {
    dispatch(setLoading(true));
    $host.get("/v1/brand/list").then(function (response) {
      if (!response?.data?.error) {
        dispatch(setBrands(response.data.brands));
      }

      dispatch(setLoading(false));
    }).catch(function (error) {
      console.error(error);
      dispatch(setLoading(false));
    });
  };
};
const getFeaturedBrands = () => {
  return async dispatch => {
    dispatch(setLoading(true));
    $host.get("/v1/brand/list?featured=1").then(function (response) {
      if (!response?.data?.error) {
        dispatch(setBrands(response.data.brands));
      }

      dispatch(setLoading(false));
    }).catch(function (error) {
      console.error(error);
      dispatch(setLoading(false));
    });
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrandsReducer);

/***/ }),

/***/ 8677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DG": () => (/* binding */ setCategories),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports setCategories2, setLoading, setCategoryNav, getCategories, getFeaturedCategories */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const GET_CATEGORIES = "GET_CATEGORIES";
const GET_CATEGORIES2 = "GET_CATEGORIES2";
const SET_LOADING = "SET_LOADING";
const SET_CATEGORY_NAV = 'SET_CATEGORY_NAV';
let initialState = {
  navbarLinks: [],
  categories: [],
  categoryNavIsActive: false,
  loading: false
};

const CategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      state.navbarLinks = action.categories;
      return state;

    case GET_CATEGORIES2:
      state.categories = action.categories;
      return state;

    case SET_CATEGORY_NAV:
      state.categoryNavIsActive = action.bool;
      return state;

    default:
      return state;
  }
};

const setCategories = payload => ({
  type: GET_CATEGORIES,
  categories: payload
});
const setCategories2 = payload => ({
  type: GET_CATEGORIES2,
  categories: payload
});
const setLoading = loading => ({
  type: SET_LOADING,
  loading
});
const setCategoryNav = bool => ({
  type: SET_CATEGORY_NAV,
  bool
});
const getCategories = () => {
  return async dispatch => {
    axios.get("https://api.sdb.uz/dev/v1/category/list").then(function (response) {
      dispatch(setCategories(response.data.categories));
    }).catch(function (error) {
      console.error(error);
    });
  };
};
const getFeaturedCategories = () => {
  return async dispatch => {
    dispatch(setLoading(true));
    axios.get("https://api.sdb.uz/dev/v1/category/featured").then(function (response) {
      if (!response?.data?.error) {
        dispatch(setCategories2(response.data.categories));
      }

      dispatch(setLoading(false));
    }).catch(function (error) {
      console.error(error);
      dispatch(setLoading(false));
    });
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoriesReducer);

/***/ }),

/***/ 5923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Du": () => (/* binding */ setMostVieweddProducts),
/* harmony export */   "G0": () => (/* binding */ setSmartphones),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "mP": () => (/* binding */ setRecommendedProducts)
/* harmony export */ });
/* unused harmony exports setNewProducts, setBrands, setLoading, getSmartphones, getRecommendedProducts, getNewProducts, getMostVieweddProducts, getBrands */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1643);


const SET_PRODUCTS = "SET_PRODUCTS";
const SET_RECOMMENDED_PRODUCTS = "SET_RECOMMENDED_PRODUCTS";
const SET_BRANDS = "SET_BRANDS";
const SET_LOADING = "SET_LOADING";
const SET_NEW_PRODUCTS = "SET_NEW_PRODUCTS";
const SET_MOST_VIEWED_PRODUCTS = "SET_MOST_VIEWED_PRODUCTS";
let initialState = {
  products: [],
  recommendedProducts: [],
  brands: [],
  mostViewedProducts: [],
  newProducts: [],
  loading: false
};

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      state.products = action.products;
      return state;

    case SET_RECOMMENDED_PRODUCTS:
      state.recommendedProducts = action.products;
      return state;

    case SET_BRANDS:
      state.brands = action.brands;
      return state;

    case SET_LOADING:
      state.loading = action.loading;
      return state;

    case SET_MOST_VIEWED_PRODUCTS:
      state.mostViewedProducts = action.products;
      return state;

    case SET_NEW_PRODUCTS:
      state.newProducts = action.products;
      return state;

    default:
      return state;
  }
};

const setSmartphones = products => ({
  type: SET_PRODUCTS,
  products
});
const setRecommendedProducts = products => ({
  type: SET_RECOMMENDED_PRODUCTS,
  products
});
const setNewProducts = products => ({
  type: SET_NEW_PRODUCTS,
  products
});
const setMostVieweddProducts = products => ({
  type: SET_MOST_VIEWED_PRODUCTS,
  products
});
const setBrands = brands => ({
  type: SET_BRANDS,
  brands: brands
});
const setLoading = loading => ({
  type: SET_LOADING,
  loading
});
const getSmartphones = () => {
  return async dispatch => {
    dispatch(setLoading(true));
    $host.get("/v1/category/smartfonlar?per_page=12").then(function (response) {
      if (!response?.data?.error) {
        dispatch(setSmartphones(response.data.products));
      }

      dispatch(setLoading(false));
    }).catch(function (error) {
      console.error(error);
      dispatch(setLoading(false));
    });
  };
};
const getRecommendedProducts = () => {
  return async dispatch => {
    dispatch(setLoading(true));
    $host.get("/v1/product/list?type=recommended&per_page=12").then(function (response) {
      if (!response?.data?.error) {
        dispatch(setRecommendedProducts(response.data.products));
      }

      dispatch(setLoading(false));
    }).catch(function (error) {
      console.error(error);
      dispatch(setLoading(false));
    });
  };
};
const getNewProducts = () => {
  return async dispatch => {
    dispatch(setLoading(true));
    $host.get("/v1/product/list?sort=id,desc&per_page=9").then(function (response) {
      if (!response?.data?.error) {
        dispatch(setNewProducts(response.data.products));
      }

      dispatch(setLoading(false));
    }).catch(function (error) {
      console.error(error);
      dispatch(setLoading(false));
    });
  };
};
const getMostVieweddProducts = () => {
  return async dispatch => {
    dispatch(setLoading(true));
    $host.get("/v1/product/list?sort=views,desc&per_page=9").then(function (response) {
      if (!response?.data?.error) {
        dispatch(setMostVieweddProducts(response.data.products));
      }

      dispatch(setLoading(false));
    }).catch(function (error) {
      console.error(error);
      dispatch(setLoading(false));
    });
  };
};
const getBrands = () => {
  return async dispatch => {
    dispatch(setLoading(true));
    $host.get("/v1/brand/list").then(function (response) {
      if (!response?.data?.error) {
        dispatch(setBrands(response.data.brands));
      }

      dispatch(setLoading(false));
    }).catch(function (error) {
      console.error(error);
      dispatch(setLoading(false));
    });
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsReducer);

/***/ }),

/***/ 1508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Yw": () => (/* binding */ setSlides),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports setLoading, getSlides */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const SET_SLIDES = "SET_SLIDES";
const SET_LOADING = "SET_LOADING";
let initialState = {
  slides: [],
  loading: false
};

const SlidesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SLIDES:
      state.slides = action.slides;
      return state;

    case SET_LOADING:
      state.loading = action.loading;
      return state;

    default:
      return state;
  }
};

const setSlides = slides => ({
  type: SET_SLIDES,
  slides
});
const setLoading = loading => ({
  type: SET_LOADING,
  loading
});
const getSlides = () => {
  return async dispatch => {
    dispatch(setLoading(true));
    axios.get("https://api.sdb.uz/dev/v1/events/list").then(function (response) {
      if (!response?.data?.error) {
        dispatch(setSlides(response.data.events));
      }

      dispatch(setLoading(false));
    }).catch(function (error) {
      console.error(error);
      dispatch(setLoading(false));
    });
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SlidesReducer);

/***/ })

};
;