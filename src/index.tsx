import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import firebase from './firebase.js'

import Routes from './routes';
import reduxStore from './store';
import Header from './components/Header';

import './index.css';

const AppRouter: FC<{}> = () => {
	const user = useSelector(state => state.user)

	const handleLogout = () => {
		firebase.auth().signOut()
			.then(window.location = "/" as any);
	}

	return(
		<div className="app">
			<BrowserRouter>
				<Header user={user} logout={handleLogout} />
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