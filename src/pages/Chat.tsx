import { Form, Formik, type FormikHelpers } from 'formik';
import { IoArrowBackOutline, IoSendOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { messageSchema } from '../assets/validations';
import { Messages, CustomButtonIcon, Avatar, CustomInput, WithoutMessage } from '../components';
import { useAuth, useChat, useSocket } from '../hooks';
import { Spinner } from '@heroui/react';
import { Center, ContainerCollapse, Flex, Menu } from '../styles';


interface IMsg { message: string; }

export const Chat = () => {
	const navigate = useNavigate();
	const { socket } = useSocket();
	const { messages, exitChat, contactActive, isLoading } = useChat();
	const { user: { uid } } = useAuth();

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
		<div className={`${contactActive ? 'col-span-12' : 'hidden'} sm:block sm:col-span-8`}>
			<ContainerCollapse className="texture">
				<Menu>
					<Avatar name={contactActive?.name!} email={contactActive?.email!!} image={contactActive?.img!!} />
					<CustomButtonIcon onPress={exit}><IoArrowBackOutline /></CustomButtonIcon>
				</Menu>
				{
					isLoading
						? <Center><Spinner size="sm" variant="spinner" /></Center>
						: messages.length === 0
							? <WithoutMessage />
							: <Messages uid={uid} messages={messages} />
				}
				<Formik initialValues={initial} onSubmit={handleSubmit} validationSchema={messageSchema}>
					<Form>
						<Flex className="p-2">
							<CustomInput name="message" placeholder="Escribe un mensaje aqui" />
							<CustomButtonIcon color="primary" variant="solid"><IoSendOutline /></CustomButtonIcon>
						</Flex>
					</Form>
				</Formik>
			</ContainerCollapse>
		</div>
	);
};
