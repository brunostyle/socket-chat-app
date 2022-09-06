import { Navigate, Route, Routes } from 'react-router-dom';
import { Login, Register } from '../pages';

export const RouterAuth = () => (
	<Routes>
		<Route path="/">
			<Route index element={<Login />} />
			<Route path="register" element={<Register />} />
			<Route path="*" element={<Navigate to="/auth/" />} />
		</Route>
	</Routes>
);
