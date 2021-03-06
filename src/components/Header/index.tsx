import React, { FC } from 'react'
import { Link } from 'react-router-dom';

import { IUser } from '../../interfaces';
import { ANONYMOUS_PHOTO_URL } from '../../utils/constants';

import './style.scss';

interface IState {
  user: IUser,
  logout: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

const Header: FC<IState> = (props: IState) => {
  const { user, logout } = props;

  return (
    <nav className="main-nav">
      {!user &&
        <div className="wrapper-nav">
          <div className="leading">
            {!user && <div>Starwars Chat</div> }
          </div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Register</Link>
        </div>
      }
      {user && 
        <div className="wrapper-nav">
           <div className="leading">
             <img src={user.photoURL ? user.photoURL : ANONYMOUS_PHOTO_URL } alt="counter part"/>
             <div className="leading-info">
               <span className="leading-info__name">{ user.displayName }</span>
               <span className="leading-info__status">Active</span>
             </div>
           </div>
           <div className="refresh">
              <img src="/assets/images/icons/Vector.svg" alt="refresh" />
              <a href="#!"
                // style={{ display: 'none' }} 
                onClick={e => logout(e)}>Logout</a>
           </div>
        </div>
      }
    </nav>
  )
}

export default Header;