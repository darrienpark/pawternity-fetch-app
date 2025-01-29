import { Button } from "@mui/joy";
import { NavLink } from "react-router-dom";

function SignInButton() {
  return (
    <Button component={NavLink} to="/login" variant="solid" color="primary">
      Sign In
    </Button>
  );
}

export default SignInButton;
