import { $host } from 'utils/http';
const GET_SEARCHED_PRODUCTS = 'GET_SEARCHED_PRODUCTS'
const SET_LOADING = 'SET_LOADING'

let initialState = {
	searchedProducts: [],
	loading:false
}

const SearchReducer = (state = initialState, action) =>{
	switch (action.type) {
		case GET_SEARCHED_PRODUCTS:
			state.searchedProducts = action.products
			return state

		case SET_LOADING:
			state.loading = action.loading
			return state

		default:
			return state
	}
}

export const setSearchedProducts = (payload) =>({type: GET_SEARCHED_PRODUCTS, products: payload})
export const setLoading = (loading) => ({ type: SET_LOADING, loading })

export const getSearchedProducts = (query) => {
	return async (dispatch) =>{
		dispatch(setLoading(true))

		$host.get(`/v1/product/list?type=default&search=${query}`).then(function(response){
			if(!response?.data?.error){
				dispatch(setSearchedProducts(response.data.products))
			}
			dispatch(setLoading(false))

		}).catch(function (error) {
			console.error(error)
			dispatch(setLoading(false))

		})
	}
}

export default SearchReducer;