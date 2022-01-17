import { $host } from "utils/http"
const SET_FILTERED_PRODUCTS = "SET_FILTERED_PRODUCTS"

let initialState = {
	filteredProducts: [],
	loading: false,
}

const ProductsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_FILTERED_PRODUCTS:
			state.filteredProducts = action.products
			return state

		case SET_LOADING:
			state.loading = action.loading
			return state

		default:
			return state
	}
}

export const setFilteredProducts = (products) => ({ type: SET_FILTERED_PRODUCTS, products })
export const setLoading = (loading) => ({ type: SET_LOADING, loading })

export const getFilteredProducts = () => {
	return async (dispatch) => {
		dispatch(setLoading(true))
		$host.get("/v1/category/smartfonlar?per_page=12")
			.then(function (response) {
				if(!response?.data?.error){
					dispatch(setFilteredProducts(response.data.products))
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
