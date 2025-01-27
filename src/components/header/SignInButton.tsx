import { Button } from "@mui/joy";
import { NavLink } from "react-router-dom";

function SignInButton() {
  return (
    <Button
      component={NavLink}
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
  );
}

export default SignInButton;
