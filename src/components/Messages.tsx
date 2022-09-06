import { Text } from '@nextui-org/react';
import { IMessage } from '../assets/interfaces';
import { Collapse, Message, NewMessage } from './Ui';

interface IMessages {
	uid: string | null;
	messages: IMessage[];
}

export const Messages = ({ messages, uid }: IMessages) => (
	<Collapse>
		{messages?.map(msg => {
			const hour = new Date(msg.createdAt);
			if (msg.to === uid) {
				return (
					<Message key={msg._id} span>
						<Text size=".9em">{msg.message}</Text>
						<Text css={{ ta: 'end' }} size=".8em">
							{("0" + hour.getHours()).slice(-2)}:{("0" + hour.getMinutes()).slice(-2)}		
						</Text>
					</Message>
				);
			} else {
				return (
					<NewMessage key={msg._id} span>
						<Text size=".9em">{msg.message}</Text>
						<Text css={{ ta: 'end' }} size=".8em">
							{("0" + hour.getHours()).slice(-2)}:{("0" + hour.getMinutes()).slice(-2)}		
						</Text>
					</NewMessage>
				);
		}
		})}
	</Collapse>
);