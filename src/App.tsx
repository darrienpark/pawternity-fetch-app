import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { action as loginAction } from "./actions/loginAction";
import { action as logoutAction } from "./actions/logoutAction";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RootLayout from "./pages/Root";
import { checkAuthLoader, isAuthenticated } from "./util/auth";
import BrowsePage from "./pages/Browse";
import Favorites from "./pages/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: () => {
      return isAuthenticated();
    },
    children: [
      { path: "/", element: <HomePage /> },
      { path: "browse", element: <BrowsePage />, loader: checkAuthLoader },
      { path: "favorites", element: <Favorites /> },
      {
        path: "login",
        element: <LoginPage />,
        action: loginAction,
      },
      { path: "logout", action: logoutAction },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
