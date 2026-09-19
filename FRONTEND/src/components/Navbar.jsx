import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { Search, TicketPlus } from "lucide-react";
import { useClerk, useUser, UserButton } from "@clerk/react";

const Navbar = () => {
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 z-50 flex justify-between items-center w-full px-6 md:px-16 lg:px-36 py-5">
      <Link to="/">
        <img src={assets.logo} alt="logo" />
      </Link>

      <div className="flex items-center space-x-7 rounded-4xl bg-gray-800 px-6 py-3 ">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/">Theatres</Link>
        <Link to="/">Releases</Link>
        <Link to="/favorite">Favourites</Link>
      </div>

      <div className="flex items-center gap-8 mr-10">
        <Search className="w-6 h-6 cursor-pointer hover:text-gray-300 transition" />
        {user ? (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<TicketPlus width={15} />}
                onClick={() => navigate("/myBookings")}
              />
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button
            onClick={openSignIn}
            className="bg-red-500 hover:bg-red-600 py-2 px-6 rounded-3xl cursor-pointer transition"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
