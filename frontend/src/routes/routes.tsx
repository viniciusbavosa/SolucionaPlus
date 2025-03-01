import { createBrowserRouter } from "react-router-dom";
import { authentication } from "~/auth/authentication";
import {
  ForgotPassword,
  Home,
  MainLayout,
  SignIn,
  Signup,
  UserProfile,
} from "~/pages";
import { ListTickets, NewTicket } from "~/pages/tickets";
import { PrivateRoute } from "~/routes/private/privateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Erro</h1>,
    children: [
      {
        path: "/",
        element: <MainLayout />,
      },
      {
        path: "signin",
        element: authentication() ? <h1>Você já está logado!</h1> : <SignIn />,
      },
      {
        path: "signup",
        element: authentication() ? <h1>Você já está logado!</h1> : <Signup />,
      },
      {
        path: "forgotPassword",
        element: authentication() ? (
          <h1>Você já está logado!</h1>
        ) : (
          <ForgotPassword />
        ),
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "ticket/new",
            element: <NewTicket />,
          },
          {
            path: "tickets",
            element: <ListTickets />,
          },
          {
            path: "user/:id",
            element: <UserProfile />,
          },
        ],
      },
    ],
  },
]);
