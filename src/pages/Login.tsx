import { Card, CardContent } from "@mui/joy";
import LoginForm from "../components/LoginForm";
import dogwalkset2 from "../assets/dogwalkbackground.jpg";

export default function LoginPage() {
  return (
    <div
      className="flex flex-col flex-grow justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${dogwalkset2})` }}
    >
      <Card className="w-full max-w-md">
        <CardContent>
          <section aria-labelledby="login-heading" className="py-6">
            <h1 id="login-heading" className="text-3xl sm:text-2xl font-bold mb-6 text-center">
              Sign In
            </h1>
            <LoginForm />
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
