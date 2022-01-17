import axios from "axios"
import {$host} from 'utils/http'
const SET_BRANDS = "SET_BRANDS"
const SET_LOADING = 'SET_LOADING'

let initialState = {
	brands: [],
	loading: false,
}

const BrandsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_BRANDS:
			state.brands = action.brands
			return state
		case SET_LOADING:
			state.loading = action.loading
			return state

		default:
			return state
	}
}

export const setBrands = (brands) => ({ type: SET_BRANDS, brands })
export const setLoading = (loading) => ({ type: SET_LOADING, loading })

export const getBrands = () => {
	return async (dispatch) => {
		dispatch(setLoading(true))
		$host.get("/v1/brand/list")
			.then(function (response) {
				if(!response?.data?.error){
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

export const getFeaturedBrands = () => {
	return async (dispatch) => {
		dispatch(setLoading(true))
		$host.get("/v1/brand/list?featured=1")
			.then(function (response) {
				if(!response?.data?.error){
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

export default BrandsReducer
