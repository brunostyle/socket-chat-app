import { Avatar, Button, Grid, Loading, Row, Tooltip, User } from '@nextui-org/react';
import { Form, Formik, FormikHelpers } from 'formik';
import { MdKeyboardReturn } from 'react-icons/md';
import { MdSend } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { messageSchema } from '../assets/validations';
import { Menu, InputChat, Texture, ContainerCollapse, Messages, Center, Title } from '../components';
import { useAuth, useChat, useSocket } from '../hooks';

interface IMsg { message: string; }

export const Chat = () => {
	const navigate = useNavigate();
	const { socket } = useSocket();
	const { messages, exitChat, contactActive, isLoading } = useChat();
	const { user:{ uid } } = useAuth();
	
	const initial: IMsg = { message: '' };

	const handleSubmit = (data: IMsg, helpers: FormikHelpers<IMsg>) => {		
		socket?.emit('personal-message', {
			from: uid,
			to: contactActive?.uid,
			message: data.message
		})
		helpers.resetForm();
	};

	const exit = () => {
		navigate('/');
		exitChat();
	}

	return (
		<Grid xs={contactActive ? 12 : 0} sm={8}>
			<Texture>
				<ContainerCollapse>
					<Menu>
						<Row>
							<User squared src={contactActive?.avatar} text={contactActive?.name.charAt(0).toUpperCase()} color="gradient" name={contactActive?.name} description={contactActive?.email} />
						</Row>
						<Row justify="flex-end">
							<Tooltip content="Return" placement="bottom">
								<Avatar squared pointer icon={<MdKeyboardReturn />} onClick={exit} />
							</Tooltip>
						</Row>
					</Menu>
					{
						isLoading ?
							<Center><Loading /></Center>
						:
							messages.length === 0 ?
								<Center><Title size="1.5em">You still have no messages</Title></Center>
							:
								<Messages uid={uid} messages={messages} />
					}
					<Formik initialValues={initial} onSubmit={handleSubmit} validationSchema={messageSchema}>
						<Form>
							<Row css={{ p: '.5em', gap: '1em' }}>
								<InputChat name="message" label="Writte a message here" />
								<Button auto type="submit"><MdSend /></Button>
							</Row>
						</Form>
					</Formik>
				</ContainerCollapse>
			</Texture>
		</Grid>
	);
};
