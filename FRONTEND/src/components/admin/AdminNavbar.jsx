import logo from "../../assets/logo.svg"; 
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-6 border-b border-gray-700">
      <Link to="/">
        <img src={logo} alt="logo" className="w-36 h-auto" />
      </Link>
    </div>
  );
};

export default AdminNavbar;
