import { Button } from "@mui/joy";
import HeroBackground from "../assets/HeroBackground.webp";
import { NavLink } from "react-router-dom";
import Layout from "./Layout";

export default function Hero() {
  return (
    <div className="relative w-full min-h-[50vh] md:min-h-[40vh] flex items-end justify-start pt-48 pb-24 px-6 md:px-16">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroBackground})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/60"></div>

      <Layout>
        <div className="relative z-10 flex flex-col items-start max-w-2xl">
          <h1 className="text-[3.25rem] font-bold text-white">Find Your Furry Best Friend Today!</h1>
          <p className="text-[1.25rem] mt-4 text-white">Because every wagging tail deserves a loving home.</p>
          <div className="mt-4">
            <Button component={NavLink} to="/browse" variant="solid" size="lg" color="primary">
              Get started
            </Button>
          </div>
        </div>
      </Layout>
    </div>
  );
}
