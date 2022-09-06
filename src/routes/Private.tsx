import { Navigate } from "react-router-dom";

interface IRoute {
	children: JSX.Element;
	isLogged: boolean;
}

export const Private = ({ children, isLogged }: IRoute) => {
	return isLogged ? children : <Navigate to="/auth" />
};
