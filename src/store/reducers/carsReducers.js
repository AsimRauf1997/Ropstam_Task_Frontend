import {
	ADD_CAR_FAIL,
	ADD_CAR_REQUEST,
	ADD_CAR_SUCCESS,
	DELETE_CAR_FAIL,
	DELETE_CAR_REQUEST,
	DELETE_CAR_SUCCESS,
	GET_CARS_FAIL,
	GET_CARS_REQUEST,
	GET_CARS_SUCCESS,
	GET_CAR_FAIL,
	GET_CAR_REQUEST,
	GET_CAR_SUCCESS,
	UPDATE_CAR_FAIL,
	UPDATE_CAR_REQUEST,
	UPDATE_CAR_SUCCESS,
} from '../types';

export const addCar = (state = {}, action) => {
	switch (action.type) {
		case ADD_CAR_REQUEST: {
			return { loading: true };
		}
		case ADD_CAR_SUCCESS: {
			return {
				...state,
				loading: false,
				success: action.payload,
			};
		}
		case ADD_CAR_FAIL: {
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
export const updateCar = (state = {}, action) => {
	switch (action.type) {
		case UPDATE_CAR_REQUEST: {
			return { loading: true };
		}
		case UPDATE_CAR_SUCCESS: {
			return {
				...state,
				loading: false,
				success: action.payload,
			};
		}
		case UPDATE_CAR_FAIL: {
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
export const deleteCar = (state = {}, action) => {
	switch (action.type) {
		case DELETE_CAR_REQUEST: {
			return { loading: true };
		}
		case DELETE_CAR_SUCCESS: {
			return {
				...state,
				loading: false,
				message: action.payload,
			};
		}
		case DELETE_CAR_FAIL: {
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
export const getCars = (state = { cars: [] }, action) => {
	switch (action.type) {
		case GET_CARS_REQUEST: {
			return { loading: true };
		}
		case GET_CARS_SUCCESS: {
			console.log('Action Payload', action.payload);
			return {
				...state,
				loading: false,
				cars: action.payload.cars,
				page: action.payload.page,
				size: action.payload.size,
			};
		}
		case GET_CARS_FAIL: {
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

export const getSingleCar = (state = { car: {} }, action) => {
	switch (action.type) {
		case GET_CAR_REQUEST: {
			return { loading: true };
		}
		case GET_CAR_SUCCESS: {
			console.log('Action Payload', action.payload);
			return {
				...state,
				loading: false,
				car: action.payload,
			};
		}
		case GET_CAR_FAIL: {
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
