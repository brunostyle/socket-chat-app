import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { LayoutApp } from '../layout';
import { Chat, Nothing } from '../pages';
import { useAuth, useChat, useSocket } from '../hooks';
import { Public, Private, RouterAuth } from './index';
import { Center } from '../styles';
import { Spinner } from '@heroui/react';

export const RouterApp = () => {
	const { logged, checking, validateToken } = useAuth();
	const { socket, setOnline, connectSocket, disconnectSocket } = useSocket();
	const { setUsers, newMessage } = useChat();

	useEffect(() => {
		validateToken();
	}, [validateToken])

	// //---------------------------------------------------------------------------
	useEffect(() => {
		if (logged) {
			connectSocket();
		} else {
			disconnectSocket();
		}
	}, [logged]);

	useEffect(() => {
		setOnline(!!socket?.connected);
	}, [socket])

	useEffect(() => {
		socket?.on('connect', () => setOnline(true));
	}, [socket])

	useEffect(() => {
		socket?.on('disconnect', () => setOnline(false));
	}, [socket])

	//Escucha los cambios de los usuarios conectados
	useEffect(() => {
		socket?.on('list-users', setUsers);
	}, [socket])

	//Escucha los mensajes recibidos
	useEffect(() => {
		socket?.on('personal-message', newMessage);
	}, [socket])
	//---------------------------------------------------------------------------

	if (checking) return <Center><Spinner variant="spinner" /></Center>

	return (
		<Routes>
			<Route path="/" element={<Private isLogged={logged}><LayoutApp /></Private>}>
				<Route index element={<Nothing />} />
				<Route path="chat/:contactID" element={<Chat />} />
			</Route>
			<Route path="/auth/*" element={
				<Public isLogged={logged}>
					<RouterAuth />
				</Public>
			} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};
