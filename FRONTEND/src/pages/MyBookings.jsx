import BlurCircle from "../components/BlurCircle";
import MyBookingCard from "../components/MyBookingCard";
import { dummyBookingData } from "../assets/assets";

const MyBookings = () => {
  return (
    <div className="relative px-36 pt-30 pb-20 min-h-[80vh]">
      <BlurCircle top="100px" left="0px" />
      <BlurCircle bottom="0px" left="600px" />

      <h1 className="text-lg font-semibold mb-8">My Bookings</h1>

      {dummyBookingData.length === 0 ? (
        <p className="text-gray-400">No bookings yet.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {dummyBookingData.map((booking, index) => (
            <MyBookingCard key={index} booking={booking} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
