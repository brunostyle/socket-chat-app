import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IRoute {
	children: ReactNode;
	isLogged: boolean;
}

export const Public = ({ children, isLogged }: IRoute) => {
   return isLogged ? <Navigate to="/" /> : children
}