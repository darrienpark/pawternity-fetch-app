import { Card, CardContent } from "@mui/joy";
import bg from "../assets/dogwalkbackground.webp";
import Layout from "../components/Layout";
import LoginForm from "../components/LoginForm";
import { useState, useEffect } from "react";

const LoginPage = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = bg;
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <div
      className="flex flex-col flex-grow justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: bgLoaded ? `url(${bg})` : "none" }}
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
