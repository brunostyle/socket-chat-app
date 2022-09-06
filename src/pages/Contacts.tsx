import { Avatar, Grid, Tooltip, User } from '@nextui-org/react';
import { Menu, Collapse, Contact, ContainerCollapse } from '../components';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { useAuth, useChat } from '../hooks';

interface IChat {
	setChat: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Contacts = ({ setChat }: IChat) => {
	const { user:{ uid, name } } = useAuth();
	const { users, contactActive } = useChat();
	return (
		<Grid xs={contactActive ? 0 : 12} sm={4}>
			<ContainerCollapse>
				<Menu justify="space-between">
					<User bordered text={name?.charAt(0).toUpperCase()} color="error" name={name} />
					<Tooltip content="Edit" placement="bottom">
						<Avatar squared pointer icon={<MdOutlineModeEditOutline />} onClick={() => setChat(false)} />
					</Tooltip>
				</Menu>
				<Collapse>
					{users
      				.filter(user => user.uid !== uid)
						.map(user => <Contact key={user.uid} {...user} />)
					}
				</Collapse>
			</ContainerCollapse>
		</Grid>
	);
};
