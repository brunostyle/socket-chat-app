import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Contacts, Profile } from '../pages';

export const LayoutApp = () => {
	const [chat, setChat] = useState(true);
	return (
		<div className="w-full grid grid-cols-12">
			{chat ? <Contacts setChat={setChat} /> : <Profile setChat={setChat} />}
			<Outlet />
		</div>
	);
};
