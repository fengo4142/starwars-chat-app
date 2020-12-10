import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { auth } from './firebase'

import Routes from './routes';
import reduxStore from './store';
import Header from './components/Header';

import './index.scss';

const AppRouter: FC<{}> = () => {
  const { user, isLoggedIn } = useSelector(state => state)
  
  const handleLogout = () => {
    auth.signOut()
      .then(window.location = "/" as any);
  }

  return(
    <div className="app">
      <BrowserRouter>
        <Header user={user} logout={handleLogout} />
        <Routes isLoggedIn={isLoggedIn} />
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