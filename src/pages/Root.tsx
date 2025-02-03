import { useEffect } from "react";
import { Outlet, useSubmit } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/header/Navbar";
import { useAppSelector } from "../hooks/useStoreHooks";
import { getTokenDuration } from "../util/auth";
import ScrollToTop from "../components/ScrollToTop";

export default function RootLayout() {
  const isAuthenticated = useAppSelector((state) => state.authentication.isAuthenticated);
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
      <main className="flex flex-col flex-grow" role="main" aria-label="Main Content">
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
