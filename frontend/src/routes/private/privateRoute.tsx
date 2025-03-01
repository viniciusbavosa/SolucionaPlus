import { Navigate, Outlet } from "react-router-dom";
import { authentication } from "~/auth/authentication";

export function PrivateRoute() {
	return authentication() ? <Outlet /> : (<><h1>Não autorizado</h1></>);
}
