import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loginUser, registerUser } from './reducers/userReducer';
import { addCategory, getCategories } from './reducers/categories.Reducer';
import {
	addCar,
	getCars,
	getSingleCar,
	updateCar,
} from './reducers/carsReducers';
import { deleteCar } from './actions/carsAction';
const reducer = combineReducers({
	user: registerUser,
	userLogin: loginUser,
	addCategory: addCategory,
	categories: getCategories,
	addCar: addCar,
	cars: getCars,
	car: getSingleCar,
	updateCar: updateCar,
  deleteCar:deleteCar
});

console.log(localStorage);
const initialState = {};
const middleware = [thunk];
const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
