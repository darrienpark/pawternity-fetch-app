import { Button } from "@mui/joy";
import { NavLink } from "react-router-dom";

export default function SignInButton() {
  return (
    <Button component={NavLink} to="/login" variant="solid" color="primary">
      Sign In
    </Button>
  );
}
