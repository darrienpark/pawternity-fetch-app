import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import Header from "../components/Navbar";
import { useEffect } from "react";
import { getTokenDuration } from "../util/auth";
import Footer from "../components/Footer";

export default function RootLayout() {
  const isAuthenticated = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    const tokenDuration = getTokenDuration();
    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [isAuthenticated, submit]);

  return (
    <div className="flex flex-col min-h-screen bg-[#f9f6ef]">
      <Header />
      <main
        className="flex flex-col flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6"
        role="main"
        aria-label="Main Content"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
