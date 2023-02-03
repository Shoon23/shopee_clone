import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import Cart from "./pages/Cart";
import Root from "./pages/Root";
import User from "./pages/User";
import ProductPage from "./pages/ProductPage";
import DailyDiscover from "./pages/DailyDiscover";
import ProtectedRoutes from "./middleware/ProtectedRoutes";

const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        element: <Root />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "user",
            element: <User />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "product/:id",
            element: <ProductPage />,
          },
          {
            path: "daily_discover",
            element: <DailyDiscover />,
          },
        ],
      },
    ],
  },
  {
    path: "auth",
    element: <AuthPage />,
    children: [
      {
        path: "signup",
        element: <SignupForm />,
      },
      {
        path: "login",
        element: <LoginForm />,
      },
    ],
  },
]);

interface Props {}

const App: React.FC<Props> = ({}) => {
  return <RouterProvider router={router} />;
};

export default App;
