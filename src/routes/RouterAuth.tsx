import { Navigate, Route, Routes } from 'react-router-dom';
import { LayoutAuth } from '../layout';

export const RouterAuth = () => (
	<Routes>
		<Route path="/">
			<Route index element={<LayoutAuth />} />
			<Route path="*" element={<Navigate to="/auth/" />} />
		</Route>
	</Routes>
);
