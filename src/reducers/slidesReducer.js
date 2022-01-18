import axios from "axios"
const SET_SLIDES = "SET_SLIDES"
const SET_LOADING = "SET_LOADING"

let initialState = {
	slides: [],
	loading: false,
}

const SlidesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SLIDES:
			state.slides = action.slides
			return state
		case SET_LOADING:
			state.loading = action.loading
			return state

		default:
			return state
	}
}

export const setSlides = (slides) => ({ type: SET_SLIDES, slides })
export const setLoading = (loading) => ({ type: SET_LOADING, loading })

export const getSlides = () => {
	return async (dispatch) => {
		dispatch(setLoading(true))
		axios.get("https://api.sdb.uz/dev/v1/events/list")
			.then(function (response) {
				if (!response?.data?.error) {
					dispatch(setSlides(response.data.events))
				}
				dispatch(setLoading(false))
			})
			.catch(function (error) {
				console.error(error)
				dispatch(setLoading(false))
			})
	}
}

export default SlidesReducer
