import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAppSelector } from "../../hooks/hooks";
import LogoLink from "./LogoLink";
import PageLink from "./PageLink";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";

export default function Navbar() {
  const isAuthenticated = useAppSelector((state) => state.authentication.isAuthenticated);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-5 px-5 sm:px-10 flex justify-between items-center sticky top-0 z-50 bg-white shadow-sm">
      <nav className="flex items-center w-full justify-between">
        <LogoLink />

        {isAuthenticated && (
          <button onClick={toggleMenu} className="sm:hidden p-2 focus:outline-none" aria-label="Toggle Menu">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        )}

        {isAuthenticated && (
          <>
            <div
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } sm:hidden flex-col items-center absolute top-20 left-0 w-full bg-white p-4 shadow-sm gap-y-2`}
            >
              <PageLink to="/browse" label="Browse" onClick={toggleMenu} />
              <PageLink to="/favorites" label="Favorites" onClick={toggleMenu} />
              <div className="w-full flex justify-center">
                <SignOutButton />
              </div>
            </div>

            <div className="hidden sm:flex sm:items-center sm:gap-6">
              <PageLink to="/browse" label="Browse" />
              <PageLink to="/favorites" label="Favorites" />
              <SignOutButton />
            </div>
          </>
        )}

        {!isAuthenticated && (
          <div className="flex sm:items-center">
            <SignInButton />
          </div>
        )}
      </nav>
    </header>
  );
}
