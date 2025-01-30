import PageLink from "./PageLink";
import SignOutButton from "./SignOutButton";

export default function MobileMenu({ isMenuOpen, toggleMenu }: { isMenuOpen: boolean; toggleMenu: () => void }) {
  return (
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
  );
}
