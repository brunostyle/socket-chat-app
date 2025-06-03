import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IRoute {
	children: ReactNode;
	isLogged: boolean;
}

export const Private = ({ children, isLogged }: IRoute) => {
	return isLogged ? children : <Navigate to="/auth" />
};
