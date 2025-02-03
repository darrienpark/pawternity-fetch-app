import { NavLink } from "react-router-dom";
import huskyImg from "../../assets/husky.png";

export default function LogoLink() {
  return (
    <NavLink to="/" className="flex items-center space-x-2">
      <img src={huskyImg} alt="Pawternity logo" width={48} />
      <h1 className="text-3xl font-semibold text-gray-800">pawternity</h1>
    </NavLink>
  );
}
