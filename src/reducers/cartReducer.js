const CHANGE_CART_AMOUNT = "CHANGE_CART_AMOUNT"
import { $authHost } from 'utils/http';
const SET_CART_ITEMS = "SET_CART_ITEMS"
const ADD_TO_CART = "ADD_TO_CART"
const DELETE_TO_CART = "ADD_TO_CART"
const CLEAR_CART = "CLEAR_CART"
const SET_LOADING = "SET_LOADING"


export const cartInitialState = {
	cartList: [],
	loading: false,
}

export const cartReducer = (state = cartInitialState, action) => {
	switch (action.type) {
		case SET_LOADING:
			state.loading = action.loading
			return state

		case SET_CART_ITEMS:
			state.cartList = action.items
			return state

		default:
			return state
	}
}

export const setCartItems = (payload) => ({type: SET_CART_ITEMS, items: payload})
export const setLoading = (loading) => ({ type: SET_LOADING, loading })

export const getCartItems = () => {
	return async (dispatch) => {
		dispatch(setLoading(true))
		$authHost
			.get("/v1/cart/list")
			.then(function (response) {
				if (!response?.data?.error) {
					dispatch(setCartItems(response.data.cart))
				}
				dispatch(setLoading(false))
			})
			.catch(function (error) {
				console.error(error)
				dispatch(setLoading(false))
			})
	}
}

export const addToCart = (item) => {
	return async (dispatch) => {
		$authHost.post('/v1/cart/add', {...item}).then(function(res){
			if(!res?.data?.error){
				dispatch(setCartItems(res.data.cart))
			}
			dispatch(setLoading(false))
		})
		.catch(function(error){
			console.log(error)
			dispatch(setLoading(false))
		})
	}
}

export const removeToCart = (id) => {
	return async (dispatch) => {
		$authHost.post(`/v1/cart/remove/${id}`).then(function(res){
			if(!res?.data?.error){
				dispatch(setCartItems(res.data.cart))
			}
			dispatch(setLoading(false))
		})
		.catch(function(error){
			console.log(error)
			dispatch(setLoading(false))
		})
	}
}

export const deleteToCart = (id) => {
	return async (dispatch) => {
		$authHost.post(`/v1/cart/delete/${id}`).then(function(res){
			if(!res?.data?.error){
				dispatch(setCartItems(res.data.cart))
			}
			dispatch(setLoading(false))
		})
		.catch(function(error){
			console.log(error)
			dispatch(setLoading(false))
		})
	}
}

export const clearCart = () => {
	return async (dispatch) => {
		$authHost.post(`/v1/cart/clear`).then(function(res){
			if(!res?.data?.error){
				dispatch(setCartItems(res.data.cart))
			}
			dispatch(setLoading(false))
		})
		.catch(function(error){
			console.log(error)
			dispatch(setLoading(false))
		})
	}
}