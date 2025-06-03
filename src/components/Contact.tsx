import { useNavigate } from 'react-router-dom';
import type { IUser } from '../assets/interfaces';
import { useChat } from '../hooks';
import { Badge, Card, CardBody } from '@heroui/react';
import { Avatar } from './Avatar';

export const Contact = ({ uid, name, email, img, online }: IUser) => {
	const navigate = useNavigate();
	const { activeChat, loadMessages } = useChat();

	const goChat = async () => {
		navigate('/chat/' + uid)
		activeChat({ uid, name, email, img, online });
		loadMessages(uid!);
	}

	return (
		<Card isPressable onClick={goChat} radius="sm">
			<CardBody>
				<Badge content="" color="success" placement="top-left" variant="solid" isInvisible={!online} disableAnimation>
					<Avatar name={name} email={email} image={img} />
				</Badge>
			</CardBody>
		</Card>
	);
};
