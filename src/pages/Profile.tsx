import { Avatar, Button, Grid, Loading, Row, Tooltip, User } from '@nextui-org/react';
import { MdKeyboardReturn, MdLogout } from 'react-icons/md';
import { Center, InputUpdate, Menu, Title } from '../components';
import { useAuth, useChat } from '../hooks';
import { Form, Formik, FormikHelpers } from 'formik';
import { IUpdate } from '../assets/interfaces';
import { updateSchema } from '../assets/validations';

interface IChat {
	setChat: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Profile = ({ setChat }: IChat) => {
	const { user, updateUser, logout, isLoading } = useAuth();
	const { clearChat, contactActive } = useChat();
	const initial: IUpdate = { name: '', email: ''}

	const exit = () => {
		logout();
		clearChat();
	}

	const handleSubmit = ({ name, email }:IUpdate, helpers: FormikHelpers<IUpdate>) => {
		helpers.resetForm();
		if(name) return updateUser({uid: user.uid!, name});
		if(email) return updateUser({uid: user.uid!, email});
	}
	
	return (
		<Grid direction="column" xs={contactActive ? 0 : 12} sm={4}>
			<Menu align="center">
				<Row>
					<Title size="1em">Profile</Title>
				</Row>
				<Row justify="flex-end" css={{ gap: '1em' }}>
					<Tooltip content="Logout" placement="bottom">
						<Avatar squared pointer icon={<MdLogout />} onClick={exit} />
					</Tooltip>
					<Tooltip content="Return" placement="bottom">
						<Avatar squared pointer icon={<MdKeyboardReturn />} onClick={() => setChat(true)} />
					</Tooltip>
				</Row>
			</Menu>
			<Formik initialValues={initial} onSubmit={handleSubmit} validationSchema={updateSchema}>
				<Form>
					<Center css={{mt: '2em'}}>
						<User text={user.name?.charAt(0).toUpperCase()} color="primary" name={user.name} description={user.email!} size="xl" />
						<InputUpdate name="name" label="New Name" />
						<InputUpdate name="email" label="New Email" />
						<Button type="submit" icon={isLoading && <Loading color="white" type="spinner" />} css={{w: '100%'}}>Save</Button>
					</Center>
				</Form>
			</Formik>
		</Grid>
	);
};
