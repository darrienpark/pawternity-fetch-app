import { NavLink } from "react-router-dom";

type PageLinkProps = {
  to: string;
  label: string;
  onClick?: () => void;
};

export default function PageLink({ to, label, onClick }: PageLinkProps) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `text-lg ${
          isActive ? "font-bold text-[#205036]" : "text-gray-800"
        } w-full text-center py-1 px-3 rounded-lg hover:bg-[#ffbe83] sm:hover:bg-transparent transition-colors duration-200`
      }
    >
      {label}
    </NavLink>
  );
}
