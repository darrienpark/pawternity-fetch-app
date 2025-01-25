import { Card, CardContent } from "@mui/joy";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col flex-grow justify-center items-center">
      <Card className="w-full max-w-md">
        <CardContent>
          <div className="py-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>
            <LoginForm />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
