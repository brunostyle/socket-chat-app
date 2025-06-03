import { useEffect } from 'react';
import  type { IMessage } from '../assets/interfaces';
import { scrollToBottom } from '../assets/scroll';
import { Collapse, Message } from '../styles';

interface IMessages {
	uid: string | null;
	messages: IMessage[];
}

export const Messages = ({ messages, uid }: IMessages) => {
	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	return (
		<Collapse id="collapse">
			{messages?.map(msg => (
				msg.to === uid 
					? <Message key={msg._id} message={msg.message} hour={msg.createdAt} />
					: <Message key={msg._id} message={msg.message} hour={msg.createdAt} newMessage />
			))}
		</Collapse>
	);
};