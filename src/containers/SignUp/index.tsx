import React, { useState, FC } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signupRequest } from '../../redux/actions';

import { pictures } from '../../utils/constants';
import './style.css';

const SignUp: FC<{}> = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoURL, setPhotoURL] = useState('');
	const isSignedUp = useSelector(state => state.isSignedUp)
  const error = useSelector(state => state.error)

	if (isSignedUp) {
		history.push('/login');
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		dispatch(signupRequest({ username, email, password, photoURL }))
	}

  return (
    <div className="signup-container">
      <h1>Register your account</h1>
      {error && <p className="error-message">{error && error.message}</p>}
      <div className="photo-wrapper">
        {pictures.map(item => 
          <img
            alt="gallery item"
            key={item.id} 
            src={item.src}
            style={{ border: item.src === photoURL ? '2px solid #e90808' : 'none' }} 
            onClick={e => setPhotoURL(item.src)} /> 
        )}
      </div>
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