import { createBrowserRouter } from "react-router-dom";
import { action as loginAction } from "./actions/loginAction";
import { action as logoutAction } from "./actions/logoutAction";
import BrowsePage from "./pages/Browse";
import ErrorPage from "./pages/Error";
import Favorites from "./pages/Favorites";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RootLayout from "./pages/Root";
import { checkAuthLoader, isAuthenticated } from "./util/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: isAuthenticated,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "browse", element: <BrowsePage />, loader: checkAuthLoader },
      { path: "favorites", element: <Favorites /> },
      { path: "login", element: <LoginPage />, action: loginAction },
      { path: "logout", action: logoutAction },
    ],
  },
]);

export default router;
