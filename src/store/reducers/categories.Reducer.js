import {
	ADD_CATEGORY_FAIL,
	ADD_CATEGORY_REQUEST,
	ADD_CATEGORY_SUCCESS,
	DELETE_CATEGORY_FAIL,
	DELETE_CATEGORY_REQUEST,
	DELETE_CATEGORY_SUCCESS,
	GET_CATEGORIES_FAIL,
	GET_CATEGORIES_REQUEST,
	GET_CATEGORIES_SUCCESS,
	UPDATE_CATEGORY_FAIL,
	UPDATE_CATEGORY_REQUEST,
	UPDATE_CATEGORY_SUCCESS,
} from '../types';

export const addCategory = (state = {}, action) => {
	switch (action.type) {
		case ADD_CATEGORY_REQUEST: {
			return { loading: true };
		}
		case ADD_CATEGORY_SUCCESS: {
			return {
				...state,
				loading: false,
				success: action.payload,
			};
		}
		case ADD_CATEGORY_FAIL: {
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		}
		default: {
			return state;
		}
	}
};
export const updateCategory = (state = {}, action) => {
	switch (action.type) {
		case UPDATE_CATEGORY_REQUEST: {
			return { loading: true };
		}
		case UPDATE_CATEGORY_SUCCESS: {
			return {
				...state,
				loading: false,
				success: action.payload,
			};
		}
		case UPDATE_CATEGORY_FAIL: {
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		}
		default: {
			return state;
		}
	}
};
export const deleteCategory = (state = {}, action) => {
	switch (action.type) {
		case DELETE_CATEGORY_REQUEST: {
			return { loading: true };
		}
		case DELETE_CATEGORY_SUCCESS: {
			return {
				...state,
				loading: false,
				success: action.payload,
			};
		}
		case DELETE_CATEGORY_FAIL: {
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		}
		default: {
			return state;
		}
	}
};
export const getCategories = (state = { categories: [] }, action) => {
	switch (action.type) {
		case GET_CATEGORIES_REQUEST: {
			return { loading: true };
		}
		case GET_CATEGORIES_SUCCESS: {
			console.log('Action Payload', action.payload);
			return {
				...state,
				loading: false,
				categories: action.payload,
			};
		}
		case GET_CATEGORIES_FAIL: {
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		}
		default: {
			return state;
		}
	}
};
