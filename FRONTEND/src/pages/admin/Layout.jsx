import { Outlet } from "react-router-dom";
import AdminNavbar from "../../components/admin/AdminNavbar";
import AdminSidebar from "../../components/admin/AdminSidebar";


const Layout = () => {
  return (
    <>
      <AdminNavbar />
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout