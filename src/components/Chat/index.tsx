import React, { FC } from 'react';

import { pictures } from '../../utils/constants';

import './style.css';

interface IState {
	user: any,
	messages: any[]
}

const Chatbox: FC<IState> = (props: IState) => {
	const { user, messages } = props;
// 	const chats = [
// 		{ id: 1, user: 'Roland', message: 'hey there?', date: '2020-12-12' },
// 		{ id: 2, user: 'Anakin', message: 'hey there?', date: '2020-12-12' },
// 		{ id: 3, user: 'Anakin', message: 'hey there?', date: '2020-12-12' },
// 		{ id: 4, user: 'Roland', message: `Hey Anakin, it’s Obi-Wan. I haven’t seen you
// in a couple of days and every youngling is 
// slaughtered. Where are ya??`, date: '2020-12-12' }
// ]

	return(
		<div className="chatbox">
			<ul className='chat-list'>
				{messages && messages.length && messages.map(chat => {
					// const postDate = new Date(chat.date);
					return(
						<li key={chat.id} >
							<div className={chat.user === user.displayName ? 'sender' : 'receiver' }>
							{chat.message}
							</div>
							<div className="avatar" style={{ order: chat.user === user.displayName ? 2 : 1 }}>
								<img src={chat.user === user.displayName ? user.photoURL : pictures[7].src} alt="avatar" />
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Chatbox;