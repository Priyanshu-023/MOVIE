import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import MyBookings from "./pages/MyBookings";
import SeatLayout from "./pages/SeatLayout";
import Favourite from "./pages/Favourite";
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./pages/admin/Layout";
import Dashboard from "./pages/admin/Dashboard";
import AddShows from "./pages/admin/AddShows";
import ListBookings from "./pages/admin/ListBookings";
import ListShows from "./pages/admin/ListShows";

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith("/admin");
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/movie/:id/:date" element={<SeatLayout />} />
        <Route path="/mybookings" element={<MyBookings />} />
        <Route path="/favorite" element={<Favourite />} />
        <Route path="/admin/*" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="addshows" element={<AddShows />} />
          <Route path="listshows" element={<ListShows />} />
          <Route path="listbookings" element={<ListBookings />} />
        </Route>
      </Routes>
      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default App;
