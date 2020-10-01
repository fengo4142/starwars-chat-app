import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import './style.css';

const Header = (props: any) => {
  const {
    user,
    isLoggedIn,
    logout
  } = props;

  return (
    <nav className="main-nav">
      {!isLoggedIn &&
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Register</Link>
        </div>
      }

      {isLoggedIn && 
        <a href="#!" onClick={logout}>Logout</a>
      }
    </nav>
  )
}

export default Header;