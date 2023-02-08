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
import Persist from "./middleware/Persist";
import CheckAuth from "./middleware/CheckAuth";
import SellerPage from "./pages/SellerPage";
import SellerProducts from "./components/SellerProducts";
import Setting from "./components/Setting";

const router = createBrowserRouter([
  {
    element: <Persist />,
    children: [
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: "/seller",
            element: <SellerPage />,
            children: [
              {
                path: "products",
                element: <SellerProducts />,
              },
              {
                path: "setting",
                element: <Setting />,
              },
            ],
          },
          {
            element: <Root />,
            children: [
              {
                path: "user",
                element: <User />,
              },
              {
                path: "cart",
                element: <Cart />,
              },
            ],
          },
        ],
      },
      {
        element: <Root />,
        children: [
          {
            path: "daily_discover",
            element: <DailyDiscover />,
          },
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "product/:id",
            element: <ProductPage />,
          },
        ],
      },
    ],
  },

  {
    element: <CheckAuth />,
    children: [
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
    ],
  },
]);

interface Props {}

const App: React.FC<Props> = ({}) => {
  return <RouterProvider router={router} />;
};

export default App;
