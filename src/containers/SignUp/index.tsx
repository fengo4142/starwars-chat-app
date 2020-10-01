import React, { useState, FC } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signupRequest } from '../../redux/actions';

import './style.css';

const SignUp: FC<{}> = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

	const handleSubmit = event => {
		event.preventDefault();
		dispatch(signupRequest({ username, email, password }))
	}

  return (
    <div className="signup-container">
      <h1>Register your account</h1>
      {/* {error && <p className="error-message">{error && error.message}</p>} */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="email">Email address</label>
        <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Choose a password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="general-submit" children="Get Started" />
        <p>Already have an account? <Link className="login-btn" to="/login">Login here</Link></p>
      </form>
    </div>
  );
}

export default SignUp