import { Button } from "@mui/joy";
import { Form } from "react-router-dom";

function SignOutButton() {
  return (
    <Form action="/logout" method="POST">
      <Button
        variant="solid"
        type="submit"
        sx={{
          backgroundColor: "#ffbe83",
          color: "#205036",
          whiteSpace: "nowrap",
          "&:hover": {
            backgroundColor: "#ffb069",
          },
        }}
      >
        Sign Out
      </Button>
    </Form>
  );
}

export default SignOutButton;
