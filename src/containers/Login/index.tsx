import React, { useState, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { loginRequest } from '../../redux/actions';

import './style.css';

const Login: FC<{}> = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const error = useSelector(state => state.error)
	const isLoggedIn = useSelector(state => state.isLoggedIn)

	if (isLoggedIn) {
		history.push('/home');
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		dispatch(loginRequest({ email, password }));
	}

	return(
		<div className="login-container">
			<h1>Login</h1>
			<p className="intro-text">Login to access your account</p>
			{error && <p className="error-message">{error.message}</p>}
			<form className="login-form" onSubmit={handleSubmit}>
				<label htmlFor="email">Email address</label>
				<input type="email" name="email" id="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
				<label htmlFor="password">Password</label>
				<input 
					type="password"
					name="password"
					id="password"
					placeholder="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<button type="submit" className="general-submit">Log in</button>
				<p>Don't have an account yet? <Link className="login-btn" to="/signup">Register here</Link></p>
			</form>
		</div>
	);
}

export default Login;