import { Button } from "@mui/joy";
import { Form } from "react-router-dom";

function SignOutButton() {
  return (
    <Form action="/logout" method="POST">
      <Button variant="solid" type="submit" color="neutral">
        Sign out
      </Button>
    </Form>
  );
}

export default SignOutButton;
