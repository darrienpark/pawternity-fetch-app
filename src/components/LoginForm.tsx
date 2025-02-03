import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { Button, FormControl, FormHelperText, FormLabel, Input } from "@mui/joy";
import { Form } from "react-router-dom";
import useLoginForm from "../hooks/useLoginForm";

export default function LoginForm() {
  const {
    enteredValues,
    isNameValid,
    isEmailValid,
    showNameError,
    showEmailError,
    handleInputChange,
    handleInputBlur,
  } = useLoginForm();

  return (
    <Form method="post" className="space-y-4">
      <div>
        <FormControl error={showNameError}>
          <FormLabel>Name</FormLabel>
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            onBlur={() => handleInputBlur("name")}
            onChange={(event) => {
              handleInputChange("name", event.target.value);
            }}
            value={enteredValues.name}
          />
          {showNameError && (
            <FormHelperText>
              <ErrorOutlineOutlinedIcon fontSize="small" />
              Please enter a valid name.
            </FormHelperText>
          )}
        </FormControl>
      </div>
      <div>
        <FormControl error={showEmailError}>
          <FormLabel>Email</FormLabel>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            onBlur={() => handleInputBlur("email")}
            onChange={(event) => {
              handleInputChange("email", event.target.value);
            }}
            value={enteredValues.email}
          />
          {showEmailError && (
            <FormHelperText>
              <ErrorOutlineOutlinedIcon fontSize="small" />
              Please enter a valid email address.
            </FormHelperText>
          )}
        </FormControl>
      </div>
      <div className="mt-6">
        <Button
          type="submit"
          variant="solid"
          className="w-full"
          color="primary"
          disabled={!(isNameValid && isEmailValid)}
        >
          Sign In
        </Button>
      </div>
    </Form>
  );
}
