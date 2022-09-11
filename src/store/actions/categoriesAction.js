import axios from 'axios';
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

export const AddNewCategory = (name) => async (dispatch) => {
	try {
		dispatch({
			type: ADD_CATEGORY_REQUEST,
		});
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const { data } = await axios.post(
			process.env.REACT_APP_BASE_URL + '/categories',
			{
				name: name,
			},
			{ config }
		);
		dispatch({
			type: ADD_CATEGORY_SUCCESS,
			payload: data.msg,
		});
	} catch (error) {
		dispatch({
			type: ADD_CATEGORY_FAIL,
			payload: error.response.data.msg,
		});
	}
};
export const getAllCategories = (page, size) => async (dispatch) => {
	try {
		dispatch({
			type: GET_CATEGORIES_REQUEST,
		});
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const { data } = await axios.get(
			process.env.REACT_APP_BASE_URL + `/categories?page=${page}&size=${size}`,
			{ config }
		);
		console.log(data);
		dispatch({
			type: GET_CATEGORIES_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_CATEGORIES_FAIL,
			payload: error.response.data.msg,
		});
	}
};
export const updateCategory = (name, id) => async (dispatch) => {
	try {
		dispatch({
			type: UPDATE_CATEGORY_REQUEST,
		});
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const { data } = await axios.put(
			process.env.REACT_APP_BASE_URL + `/categories/${id}`,
			{
				name: name,
			},
			{ config }
		);
		dispatch({
			type: UPDATE_CATEGORY_SUCCESS,
			payload: data.msg,
		});
	} catch (error) {
		dispatch({
			type: UPDATE_CATEGORY_FAIL,
			payload: error.response.data.msg,
		});
	}
};
export const deleteCategory = (id) => async (dispatch) => {
	try {
		dispatch({
			type: DELETE_CATEGORY_REQUEST,
		});
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const { data } = await axios.delete(
			process.env.REACT_APP_BASE_URL + `/categories/${id}`,
			{ config }
		);
		dispatch({
			type: DELETE_CATEGORY_SUCCESS,
			payload: data.msg,
		});
	} catch (error) {
		dispatch({
			type: DELETE_CATEGORY_FAIL,
			payload: error.response.data.msg,
		});
	}
};
