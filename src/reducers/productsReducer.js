import axios from "axios"
import { $host } from "utils/http"
const SET_PRODUCTS = "SET_PRODUCTS"
const SET_RECOMMENDED_PRODUCTS = "SET_RECOMMENDED_PRODUCTS"
const SET_BRANDS = "SET_BRANDS"
const SET_LOADING = "SET_LOADING"
const SET_NEW_PRODUCTS = "SET_NEW_PRODUCTS"
const SET_MOST_VIEWED_PRODUCTS = "SET_MOST_VIEWED_PRODUCTS"

let initialState = {
	products: [],
	recommendedProducts: [],
	brands: [],
	mostViewedProducts: [],
	newProducts: [],
	loading: false,
}

const ProductsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PRODUCTS:
			state.products = action.products
			return state

		case SET_RECOMMENDED_PRODUCTS:
			state.recommendedProducts = action.products
			return state

		case SET_BRANDS:
			state.brands = action.brands
			return state

		case SET_LOADING:
			state.loading = action.loading
			return state
		case SET_MOST_VIEWED_PRODUCTS:
			state.mostViewedProducts = action.products
			return state
		case SET_NEW_PRODUCTS:
			state.newProducts = action.products
			return state

		default:
			return state
	}
}

export const setSmartphones = (products) => ({ type: SET_PRODUCTS, products })

export const setRecommendedProducts = (products) => ({
	type: SET_RECOMMENDED_PRODUCTS,
	products,
})

export const setNewProducts = (products) => ({
	type: SET_NEW_PRODUCTS,
	products,
})
export const setMostVieweddProducts = (products) => ({
	type: SET_MOST_VIEWED_PRODUCTS,
	products,
})
export const setBrands = (brands) => ({ type: SET_BRANDS, brands: brands })
export const setLoading = (loading) => ({ type: SET_LOADING, loading })

export const getSmartphones = () => {
	return async (dispatch) => {
		dispatch(setLoading(true))
		$host
			.get("/v1/category/smartfonlar?per_page=12")
			.then(function (response) {
				if (!response?.data?.error) {
					dispatch(setSmartphones(response.data.products))
				}
				dispatch(setLoading(false))
			})
			.catch(function (error) {
				console.error(error)
				dispatch(setLoading(false))
			})
	}
}

export const getRecommendedProducts = () => {
	return async (dispatch) => {
		dispatch(setLoading(true))
		$host
			.get("/v1/product/list?type=recommended&per_page=12")
			.then(function (response) {
				if (!response?.data?.error) {
					dispatch(setRecommendedProducts(response.data.products))
				}
				dispatch(setLoading(false))
			})
			.catch(function (error) {
				console.error(error)
				dispatch(setLoading(false))
			})
	}
}

export const getNewProducts = () => {
	return async (dispatch) => {
		dispatch(setLoading(true))
		$host
			.get("/v1/product/list?sort=id,desc&per_page=9")
			.then(function (response) {
				if (!response?.data?.error) {
					dispatch(setNewProducts(response.data.products))
				}
				dispatch(setLoading(false))
			})
			.catch(function (error) {
				console.error(error)
				dispatch(setLoading(false))
			})
	}
}

export const getMostVieweddProducts = () => {
	return async (dispatch) => {
		dispatch(setLoading(true))
		$host
			.get("/v1/product/list?sort=views,desc&per_page=9")
			.then(function (response) {
				if (!response?.data?.error) {
					dispatch(setMostVieweddProducts(response.data.products))
				}
				dispatch(setLoading(false))
			})
			.catch(function (error) {
				console.error(error)
				dispatch(setLoading(false))
			})
	}
}

export const getBrands = () => {
	return async (dispatch) => {
		dispatch(setLoading(true))
		$host
			.get("/v1/brand/list")
			.then(function (response) {
				if (!response?.data?.error) {
					dispatch(setBrands(response.data.brands))
				}
				dispatch(setLoading(false))
			})
			.catch(function (error) {
				console.error(error)
				dispatch(setLoading(false))
			})
	}
}

export default ProductsReducer
