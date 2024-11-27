import { Navigate, Outlet } from "react-router-dom";
import { authentication } from "~/auth/authentication";

export function PrivateRoute() {
  return authentication() ? <Outlet /> : <Navigate replace to='/' />
}