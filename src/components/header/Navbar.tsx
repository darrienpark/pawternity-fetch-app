import { FaBars, FaTimes } from "react-icons/fa";
import { useNavbarState } from "../../hooks/useNavbarState";
import LogoLink from "./LogoLink";
import MobileMenu from "./MobileMenu";
import PageLink from "./PageLink";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import { useAppSelector } from "../../hooks/useStoreHooks";

export default function Navbar() {
  const isAuthenticated = useAppSelector((state) => state.authentication.isAuthenticated);
  const { isMenuOpen, toggleMenu } = useNavbarState();

  return (
    <header className="w-full py-5 px-5 sm:px-10 flex justify-between items-center sticky top-0 z-50 bg-white shadow-sm">
      <nav className="flex items-center w-full justify-between">
        <LogoLink />

        {isAuthenticated && (
          <button onClick={toggleMenu} className="sm:hidden p-2 focus:outline-none" aria-label="Toggle Menu">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        )}

        {isAuthenticated && <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}

        {isAuthenticated && (
          <div className="hidden sm:flex sm:items-center sm:gap-6">
            <PageLink to="/browse" label="Browse" />
            <PageLink to="/favorites" label="Favorites" />
            <SignOutButton />
          </div>
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
