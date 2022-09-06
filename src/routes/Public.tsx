import { Navigate } from "react-router-dom";

interface IRoute {
	children: JSX.Element;
	isLogged: boolean;
}

export const Public = ({ children, isLogged }: IRoute) => {
   return isLogged ? <Navigate to="/" /> : children
}