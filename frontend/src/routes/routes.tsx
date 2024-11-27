import { createBrowserRouter } from "react-router-dom";
import { ForgotPassword, Home, SignIn, Signup } from "~/pages";
import { NewTicket } from "~/pages/tickets";
import { PrivateRoute } from '~/routes/private/privateRoute';

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <h1>Erro</h1>,
		children: [
			{
				path: "signin",
				element: <SignIn />,
			},
			{
				path: "signup",
				element: <Signup />,
			},
			{
				path: "forgotPassword",
				element: <ForgotPassword />,
			},
		],
	},
	{
		element: <PrivateRoute />,
		children: [
			{
				path: 'ticket/new',
				element: <NewTicket />
			}
		]
	}
]);
