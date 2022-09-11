/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './screens/login/LoginPage';
import CategoriesPage from './screens/Categories';
import CarsPage from './screens/Cars';

import Signup from './screens/signup/Signup';
import MainPage from './screens/HomePage';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const App = () => {
	return (
		<Router history={history}>
			{/* <Header /> */}
			<Routes>
				<>
					<Route exact path='/' element={<MainPage />} />
					<Route exact path='/login' element={<LoginPage />} />
					<Route exact path='/signup' element={<Signup />} />
					<Route exact path='/categories' element={<CategoriesPage />} />
					<Route exact path='/cars' element={<CarsPage />} />
				</>
			</Routes>
		</Router>
	);
};

export default App;
