import { createBrowserRouter } from "react-router-dom";
import { Home, SignIn } from "./pages";
import { Signup } from "./pages";

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
				element: <Signup />
			}
		],
	},
]);
