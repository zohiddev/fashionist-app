import axios from "axios";
const GET_CATEGORIES = "GET_CATEGORIES";
const GET_CATEGORIES2 = "GET_CATEGORIES2";
const SET_LOADING = "SET_LOADING";
const SET_CATEGORY_NAV = "SET_CATEGORY_NAV";

let initialState = {
    navbarLinks: [],
    categories: [],
    categoryNavIsActive: false,
    loading: false,
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

export const setCategories = (payload) => ({
    type: GET_CATEGORIES,
    categories: payload,
});
export const setCategories2 = (payload) => ({
    type: GET_CATEGORIES2,
    categories: payload,
});
export const setLoading = (loading) => ({ type: SET_LOADING, loading });
export const setCategoryNav = (bool) => ({ type: SET_CATEGORY_NAV, bool });

export const getCategories = () => {
    return async (dispatch) => {
        axios
            .get("https://ecommerce.main-gate.appx.uz/dev/v1/category/list")
            .then(function (response) {
                dispatch(setCategories(response.data.categories));
            })
            .catch(function (error) {
                console.error(error);
            });
    };
};

export const getFeaturedCategories = () => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        axios
            .get("https://ecommerce.main-gate.appx.uz/dev/v1/category/featured")
            .then(function (response) {
                if (!response?.data?.error) {
                    dispatch(setCategories2(response.data.categories));
                }
                dispatch(setLoading(false));
            })
            .catch(function (error) {
                console.error(error);
                dispatch(setLoading(false));
            });
    };
};

export default CategoriesReducer;
