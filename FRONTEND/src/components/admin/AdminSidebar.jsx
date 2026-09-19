import { NavLink } from "react-router-dom";
import { LayoutDashboard, PlusSquare, ListVideo, ListChecks } from "lucide-react";
import { assets } from "../../assets/assets";

const adminNavLinks = [
  { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Add Shows", path: "/admin/addshows", icon: PlusSquare },
  { name: "List Shows", path: "/admin/listshows", icon: ListVideo },
  { name: "List Bookings", path: "/admin/listbookings", icon: ListChecks },
];

const AdminSidebar = () => {
  return (
    <div className="w-60 min-h-screen border-r border-gray-700 flex flex-col items-center pt-8">
      <img
        src={assets.profile}
        alt="admin"
        className="w-16 h-16 rounded-full"
      />
      <p className="mt-2 text-base font-medium">Admin User</p>

      <div className="w-full mt-8">
        {adminNavLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            end
            className={({ isActive }) =>
              `relative flex items-center gap-3 w-full py-3 px-8 text-gray-400 hover:bg-gray-800 transition ${
                isActive ? "bg-red-500/10 text-red-500" : ""
              }`
            }
          >
            {({ isActive }) => (
              <>
                <link.icon className="w-5 h-5" />
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute right-0 top-0 h-full w-1 bg-red-500 rounded-l" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
