import React, { useEffect, useState, FC } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import firebase, { auth } from './firebase.js'

import Routes from './routes';
import reduxStore from './store';
import Header from './components/Header';

import 'antd/dist/antd.css';
import './index.css';

const AppRouter: FC<{}> = () => {
	const [user, setUser] = useState(null);
	const isLoggedIn = useSelector(state => state.isLoggedIn)

	const handleLogout = () => {
		firebase.auth().signOut()
			.then(window.location = "/" as any);
	}

	return(
		<div className="app">
			<BrowserRouter>
				<Header isLoggedIn={isLoggedIn} logout={handleLogout} />
				<Routes />
			</BrowserRouter>
		</div>
	);
}

ReactDOM.render(
	<Provider store={reduxStore}>
		<AppRouter />
	</Provider>,
	document.getElementById('root')
);