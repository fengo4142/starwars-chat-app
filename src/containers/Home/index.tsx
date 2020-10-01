import React, { useState, FC } from 'react';
import firebase from '../../firebase';
import {Link} from 'react-router-dom';

import Chat from '../../components/Chat';

import './style.css';

const Home: FC<{}> = () => {
  const [message, setMessage] = useState('')
	const props = { user: {
    displayName: 'R'
  }}
	const handleSubmit = event => {
		event.preventDefault();
		if(message !== ''){
			const chatRef = firebase.database().ref('general');
			const chat = {
				message: message,
				user: props.user.displayName,
				timestamp: new Date().getTime()
			}
			
			chatRef.push(chat);
      setMessage('')
		}
	}

  return(
    <div className="home-container">
      <h1>Connected as Obi-Wan Kenobi</h1>
      {props.user && 
        <div className="allow-chat">
          <Chat />
          <form className="send-chat" onSubmit={handleSubmit}>
            <input
              type="text"
              name="message"
              id="message"
              value={message} 
              onChange={e => setMessage(e.target.value)} 
              placeholder='Leave a message...' />
              <div className="send-btn">
                <img src="/assets/images/icons/send-message.svg" />
              </div>
          </form>
        </div>
      }
      {!props.user && 
        <div className="disallow-chat">
          <p><Link to="/login">Login</Link> or <Link to="/register">Register</Link> to start chatting!</p>
        </div>
      }
    </div>
  );
}

export default Home;