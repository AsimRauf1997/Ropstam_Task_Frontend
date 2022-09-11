import axios from 'axios';
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

export const AddNewCar = (param) => async (dispatch) => {
	try {
		dispatch({
			type: ADD_CAR_REQUEST,
		});
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const { data } = await axios.post(
			process.env.REACT_APP_BASE_URL + '/cars',
			{
				data: param,
			},
			{ config }
		);
		dispatch({
			type: ADD_CAR_SUCCESS,
			payload: data.msg,
		});
	} catch (error) {
		dispatch({
			type: ADD_CAR_FAIL,
			payload: error.response.data.msg,
		});
	}
};
export const updateCar = (param, id) => async (dispatch) => {
	try {
		dispatch({
			type: UPDATE_CAR_REQUEST,
		});
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const { data } = await axios.put(
			process.env.REACT_APP_BASE_URL + `/cars/${id}`,
			{
				data: param,
			},
			{ config }
		);
		dispatch({
			type: UPDATE_CAR_SUCCESS,
			payload: data.msg,
		});
	} catch (error) {
		dispatch({
			type: UPDATE_CAR_FAIL,
			payload: error.response.data.msg,
		});
	}
};
export const deleteCar = (id) => async (dispatch) => {
	try {
		dispatch({
			type: DELETE_CAR_REQUEST,
		});
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const { data } = await axios.delete(
			process.env.REACT_APP_BASE_URL + `/cars/${id}`,
			{ config }
		);
		dispatch({
			type: DELETE_CAR_SUCCESS,
			payload: data.msg,
		});
	} catch (error) {
		dispatch({
			type: DELETE_CAR_FAIL,
			payload: error.response.data.msg,
		});
	}
};
export const getAllCars = (page, size) => async (dispatch) => {
	try {
		dispatch({
			type: GET_CARS_REQUEST,
		});
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const { data } = await axios.get(
			process.env.REACT_APP_BASE_URL + `/cars?page=${page}&size=${size}`,

			{ config }
		);
		dispatch({
			type: GET_CARS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_CARS_FAIL,
			payload: error.response.data.msg,
		});
	}
};
export const getCarById = (id) => async (dispatch) => {
	try {
		dispatch({
			type: GET_CAR_REQUEST,
		});
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const { data } = await axios.get(
			process.env.REACT_APP_BASE_URL + `/cars/${id}`,

			{ config }
		);
		dispatch({
			type: GET_CAR_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_CAR_FAIL,
			payload: error.response.data.msg,
		});
	}
};
