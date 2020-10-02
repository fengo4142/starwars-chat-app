import React, { useState, useEffect, FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import firebase from '../../firebase';

import { getMessageRequest } from '../../redux/actions';
import Chat from '../../components/Chat';

import './style.css';

const Home: FC<{}> = () => {
  const dispatch = useDispatch()
  const [message, setMessage] = useState('')
	
  const user = useSelector(state => state.user)
	const messages = useSelector(state => state.messages)

	useEffect(() => {
  	dispatch(getMessageRequest())
	}, [])

	const handleSubmit = event => {
		event.preventDefault();
		if (message !== '') {
			const chatRef = firebase.database().ref('general');
      console.log(chatRef, "ref")
			const chat = {
				message,
				user: user.displayName,
				timestamp: new Date().getTime()
			}
			
			chatRef.push(chat);
      setMessage('')
		}
	}

  return(
    <div className="home-container">
      <h1>Connected as {user && user.displayName}</h1>
      {user && 
        <div className="allow-chat">
          <Chat user={user} messages={messages} />
          <form className="send-chat" onSubmit={handleSubmit}>
            <input
              type="text"
              name="message"
              id="message"
              value={message} 
              onChange={e => setMessage(e.target.value)} 
              placeholder='Leave a message...' />
              <div className="send-btn">
                <img src="/assets/images/icons/send-message.svg" alt="send" />
              </div>
          </form>
        </div>
      }
      {!user && 
        <div className="disallow-chat">
          <p><Link to="/login">Login</Link> or <Link to="/register">Register</Link> to start chatting!</p>
        </div>
      }
    </div>
  );
}

export default Home;