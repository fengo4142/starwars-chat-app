import React, { useState, useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getMessageRequest } from '../../redux/actions';
import { pictures } from '../../utils/constants';

import './style.css';

const Chatbox: FC<{}> = () => {
	const dispatch = useDispatch();
//	const { chats } = useSelector(state => state.chats)
	const chats = [
		{ id: 1, user: 'Roland', message: 'hey there?', date: '2020-12-12' },
		{ id: 2, user: 'Anakin', message: 'hey there?', date: '2020-12-12' },
		{ id: 3, user: 'Anakin', message: 'hey there?', date: '2020-12-12' },
		{ id: 4, user: 'Roland', message: `Hey Anakin, it’s Obi-Wan. I haven’t seen you
in a couple of days and every youngling is 
slaughtered. Where are ya??`, date: '2020-12-12' }
	]
	useEffect(() => {
	//		dispatch(getMessageRequest())
	console.log(chats)
	}, [dispatch])

	return(
		<div className="chatbox">
			<ul className='chat-list'>
				{chats.map(chat => {
					const postDate = new Date(chat.date);
					return(
						<li key={chat.id} >
							<div className={chat.user === 'Roland' ? 'sender' : 'receiver' }>
							{chat.message}
							</div>
							<div className="avatar" style={{ order: chat.user === 'Roland' ? 2 : 1 }}>
								<img src={chat.user === 'Roland' ? pictures[6] : pictures[7]} />
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Chatbox;