import { createBrowserRouter } from "react-router-dom";
import { Home, SignIn } from "./pages";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <h1>Erro</h1>,
		children: [
			{
				path: "login",
				element: <SignIn />,
			},
		],
	},
]);
