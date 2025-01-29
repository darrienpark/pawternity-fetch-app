import { Card, CardContent } from "@mui/joy";
import LoginForm from "../components/LoginForm";
import dogwalkset2 from "../assets/dogwalkbackground.jpg";
import Layout from "../components/Layout";

const LoginPage = () => {
  return (
    <div
      className="flex flex-col flex-grow justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${dogwalkset2})` }}
    >
      <Layout>
        <Card className="w-full max-w-md m-auto">
          <CardContent>
            <section aria-labelledby="login-heading" className="py-6">
              <h1 id="login-heading" className="text-3xl sm:text-2xl font-bold mb-6 text-center">
                Sign In
              </h1>
              <LoginForm />
            </section>
          </CardContent>
        </Card>
      </Layout>
    </div>
  );
};

export default LoginPage;
