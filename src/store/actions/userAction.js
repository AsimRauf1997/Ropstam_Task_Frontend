import axios from 'axios';
import {
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
} from '../types';

export const register = (userData) => async (dispatch) => {
	try {
		dispatch({
			type: USER_REGISTER_REQUEST,
		});
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const { data } = await axios.post(
			process.env.REACT_APP_BASE_URL + '/user',
			{
				data: userData,
			},
			{ config }
		);
		dispatch({
			type: USER_REGISTER_SUCCESS,
			payload: data.msg,
		});
	} catch (error) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload: error.response.data.msg,
		});
	}
};

export const userLogin = (userData) => async (dispatch) => {
	console.log(userData);
	try {
		dispatch({
			type: USER_LOGIN_REQUEST,
		});
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const { data } = await axios.post(
			process.env.REACT_APP_BASE_URL + '/user/login',

			{
				data: userData,
			},
			{ config }
		);
		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: USER_LOGIN_FAIL,
			payload: error.response.data.msg,
		});
	}
};
