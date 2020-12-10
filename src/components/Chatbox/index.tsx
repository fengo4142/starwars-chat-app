import React, { useRef, FC, useEffect } from 'react';

import { ANONYMOUS_PHOTO_URL } from '../../utils/constants';
import { IChat, IUser } from '../../interfaces';

import './style.scss';

interface IState {
  user: IUser,
  chats: IChat[]
}

const Chatbox: FC<IState> = (props: IState) => {
  const { user, chats } = props;
  const messagesEndRef = useRef<null | HTMLUListElement>(null)

  const scrollToBottom = () => {
    if (messagesEndRef && messagesEndRef.current) {
      // messagesEndRef.current.scrollIntoView({ block: 'end', behavior: "smooth", inline: "nearest" })
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }

  useEffect(scrollToBottom, [chats])

  return(
    <div className="chatbox">
      <ul className='chat-list' ref={messagesEndRef}>
        {chats && chats.map((chat: IChat) => {
          // const postDate = new Date(chat.date);
          return(
            <li key={chat.id} >
              <div className={chat.email === user.email ? 'message sender' : 'message receiver' }>
              {chat.message}
              </div>
              <div className="avatar" style={{ order: chat.email === user.email ? 2 : 1 }}>
                <img 
                  src={(chat.email === user.email) ?
                    user.photoURL || ANONYMOUS_PHOTO_URL :
                    chat.photoURL || ANONYMOUS_PHOTO_URL }
                  alt="avatar" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Chatbox;