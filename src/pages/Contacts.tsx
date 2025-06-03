import { Avatar, Contact, CustomButtonIcon } from '../components';
import { IoSettingsOutline } from 'react-icons/io5';
import { useAuth, useChat } from '../hooks';
import { Card, Spinner } from '@heroui/react';
import { Collapse, Menu, ContainerCollapse, Center } from '../styles';

interface IChat {
	setChat: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Contacts = ({ setChat }: IChat) => {
	const { user: { uid, name, img, email } } = useAuth();
	const { users, isLoadingUsers, contactActive } = useChat();
	return (
		<Card style={{ background: '#101010' }} className={`${contactActive ? 'hidden' : 'col-span-12'} sm:block sm:col-span-4`} radius="none">
			<ContainerCollapse>
				<Menu>
					<Avatar color="default" name={name!} email={email!} image={img!} />
					<CustomButtonIcon onPress={() => setChat(false)}><IoSettingsOutline /></CustomButtonIcon>
				</Menu>
				<Collapse>
					{isLoadingUsers
						? <Center><Spinner size="sm" variant="spinner" /></Center>
						: users
							.filter(user => user.uid !== uid)
							.map(user => <Contact key={user.uid} {...user} />)
					}
				</Collapse>
			</ContainerCollapse>
		</Card>
	);
};
