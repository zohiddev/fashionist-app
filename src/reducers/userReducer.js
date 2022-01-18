import { $authHost } from "utils/http"
import { CachedStateUser } from "utils/utils"

const SET_USER = 'SET_USER'
const SET_ORDERS = 'SET_ORDERS'
const SET_ORDER = 'SET_ORDER'
const SET_ISACTIVE = 'SET_ISACTIVE'
const SHOW_LOADER = 'SHOW_LOADER'
const HIDE_LOADER = 'HIDE_LOADER'

const defaultState = {
	user: {},
	orders: [],
	order: null,
	isActive: false,
	loading: false,
}

function UserReducer(state = defaultState, action) {
	switch (action.type) {
		case SET_USER:
			state.user = action.user
			return CachedStateUser('user', action.user, state)

		case SET_ORDERS:
			state.orders = action.orders
			return state

		case SET_ORDER:
			state.order = action.order
			return  state

		case SET_ISACTIVE:
			state.isActive = action.bool
			return state

		case SHOW_LOADER:
			state.loading = true
			return state

		case HIDE_LOADER:
			state.loading = false
			return state

		default:
			return state
	}
}


export const setUser = (user) => ({ type: SET_USER, user })
export const setOrders = (orders) =>({ type: SET_ORDERS, orders })
export const setOrder = (order) =>({ type: SET_ORDER, order })
export const setIsActive = (bool) => ({type: SET_ISACTIVE, bool})

export const getUser = () =>{
	return async (dispatch) =>{
		dispatch({ type: SHOW_LOADER })
		$authHost.get(`/v1/user/profile`).then(function (response){
			if(response?.data?.orders && response?.data?.user) {
				dispatch(setUser(response?.data?.user || {}))
				dispatch(setOrders(response?.data?.orders || []))
			}
			dispatch({ type: HIDE_LOADER })
		}).catch(error => {
			dispatch({ type: HIDE_LOADER })
		})
	}
}

export const updateUser = (user, callback) =>{
	return async (dispatch) =>{
		dispatch({ type: SHOW_LOADER })
		$authHost.put(`/v1/user/update`, user).then(function (response){
			if(response.data.message === 'User updated successfully'){
				callback && callback(null)
				dispatch({ type: HIDE_LOADER })
			} else{
				callback && callback("Error message")
			}
		}).catch(error => {
			dispatch({ type: HIDE_LOADER })
		})
	}
}

export const getOrder = (id) =>{
	return async (dispatch) =>{
		dispatch({ type: SHOW_LOADER })
		$authHost.get(`/v1/order/view/${id}`).then(function (response){
			if(response?.data?.order) {
				dispatch(setOrder(response?.data?.order || {}))
			}
			dispatch({ type: HIDE_LOADER })
		}).catch(error => {
			dispatch({ type: HIDE_LOADER })
		})
	}
}

export const addOrder = (data, callback) => {
	return async (dispatch) =>{
		dispatch({type: SHOW_LOADER})
		$authHost.post(`/v1/order/create`, data).then((response) => {
			if(response.data.isOk){
				callback && callback(null)
				dispatch({ type: HIDE_LOADER })
			} else{
				callback && callback("Error message")
			}
		})
			.catch((error) => {
				callback && callback("Error message")
				dispatch({ type: HIDE_LOADER })
			})
	}
}

export default UserReducer



// Access token refreshed! 15:11