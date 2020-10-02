import React, { useState, useEffect, FC, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import firebase from '../../firebase';
import Chatbox from '../../components/Chatbox';
import { IChat } from '../../interfaces';

import './style.scss';

const Home: FC<{}> = () => {
	const [chats, setChats] = useState([] as IChat[])
  const [message, setMessage] = useState('')
	const [isSending, setIsSending] = useState(false)

  const user = useSelector(state => state.user)

	useEffect(() => {
    setIsSending(false);

    const chatRef = firebase.database().ref('general');
		chatRef.on('value', snapshot => {
			const data = snapshot.val();
      const items: IChat[] = Object.keys(data).map(item => {
        return { ...data[item], id: item }
      });
      setChats(items)
    })
	}, [isSending])

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
    if (message !== '') {
			const chatRef = firebase.database().ref('general');
			const chat: IChat = {
        id: '',
				message,
        email: user.email,
				user: user.displayName,
        photoURL: user.photoURL,
				timestamp: new Date().getTime()
			}
			
			chatRef.push(chat);
      setMessage('')
      setIsSending(true)
		}
	}

  return(
    <div className="home-container">
      <h1>Connected as {user && user.displayName}</h1>
      {user && 
        <div className="allow-chat">
          <Chatbox user={user} chats={chats} />
          <form className="send-chat" onSubmit={handleSubmit}>
            <input
              type="text"
              name="message"
              id="message"
              value={message} 
              onChange={e => setMessage(e.target.value)} 
              placeholder='Leave a message...' />
              <div className="send-btn" role="button" tabIndex={0} onClick={handleSubmit}>
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