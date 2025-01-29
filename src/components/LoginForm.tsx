import { Button, Input } from "@mui/joy";
import { Form } from "react-router-dom";

export default function LoginForm() {
  return (
    <>
      <Form method="post" className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <Input id="name" type="text" name="name" placeholder="Enter your name" required className="w-full" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <Input id="email" type="email" name="email" placeholder="Enter your email" required className="w-full" />
        </div>
        <div className="mt-6">
          <Button type="submit" variant="solid" className="w-full" color="primary">
            Sign In
          </Button>
        </div>
      </Form>
    </>
  );
}
