import { Form, Link, useRouteLoaderData } from "react-router-dom";
import huskyImg from "../assets/husky.png";
import { Button } from "@mui/joy";

export default function Navbar() {
  const isAuthenticated = useRouteLoaderData("root");

  return (
    <header className="w-full py-5 px-5 sm:px-10 flex justify-between items-center sticky top-0 z-50 bg-white ">
      <nav className="flex items-center w-full justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src={huskyImg} alt="Pawternity logo" width={48} />
          <h1 className="text-3xl font-semibold text-gray-800">pawternity</h1>
        </Link>

        {isAuthenticated && (
          <div className="flex gap-6 items-center">
            <Link to="/browse">
              <h1 className="text-lg   text-gray-800">Browse</h1>
            </Link>

            <Link to="/favorites">
              <h1 className="text-lg   text-gray-800">Favorites</h1>
            </Link>

            <Form action="/logout" method="POST">
              <Button
                variant="solid"
                type="submit"
                sx={{
                  backgroundColor: "#ffbe83",
                  color: "#205036",
                  "&:hover": {
                    backgroundColor: "#ffb069 ",
                  },
                }}
              >
                Sign Out
              </Button>
            </Form>
          </div>
        )}

        {!isAuthenticated && (
          <Button
            component={Link}
            to="/login"
            variant="solid"
            sx={{
              backgroundColor: "#193d2a",
              "&:hover": {
                backgroundColor: "#205036",
              },
            }}
          >
            Sign In
          </Button>
        )}
      </nav>
    </header>
  );
}
