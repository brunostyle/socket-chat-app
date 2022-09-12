import { Card, Row, User, Badge } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../assets/interfaces';
import { useChat } from '../hooks';

export const Contact = ({ uid, name, email, img, online }: IUser) => {
	const navigate = useNavigate();
	const { activeChat, loadMessages } = useChat();

	const goChat = async () => {
		navigate('/chat/' + uid)
		activeChat({ uid, name, email, img, online });
		loadMessages(uid!);
	}
	
	return (
		<Row>
			<Card isPressable onClick={goChat}>
				<Card.Body>
					<div>
						<Badge content="" color="success" placement="top-left"  variant="dot" isInvisible={!online} disableAnimation>
							<User src={img!} text={name.charAt(0).toUpperCase()} squared color="gradient" name={name} description={email} />
						</Badge>
					</div>
				</Card.Body>
			</Card>
		</Row>
	);
};
