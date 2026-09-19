import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowRightIcon, ClockIcon } from "lucide-react";
import toast from "react-hot-toast";
import {
  assets,
  dummyDateTimeData,
  dummyShowsData,
  dummyBookingData,
} from "../assets/assets";
import BlurCircle from "../components/BlurCircle";

const groupRows = [
  ["A", "B"],
  ["C", "D"],
  ["E", "F"],
  ["G", "H"],
  ["I", "J"],
];

const PRICE_PER_SEAT = 200;

const SeatLayout = () => {
  const { id, date } = useParams();
  const navigate = useNavigate();

  const movie = dummyShowsData.find((show) => show._id === id);
  const timings = dummyDateTimeData[date] || [];

  const [prevDate, setPrevDate] = useState(date);
  const [selectedTime, setSelectedTime] = useState(timings[0] || null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  if (date !== prevDate) {
    setPrevDate(date);
    setSelectedTime(timings[0] || null);
    setSelectedSeats([]);
  }

  const handleSeatClick = (seatId) => {
    if (!selectedTime) {
      return toast("Please select a time first");
    }
    if (!selectedSeats.includes(seatId) && selectedSeats.length >= 5) {
      return toast("You can only select up to 5 seats");
    }
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((seat) => seat !== seatId)
        : [...prev, seatId]
    );
  };

  const renderSeatRow = (row) => (
    <div key={row} className="flex gap-2 mt-2">
      {Array.from({ length: 9 }, (_, i) => {
        const seatId = `${row}${i + 1}`;
        const isSelected = selectedSeats.includes(seatId);
        return (
          <button
            key={seatId}
            onClick={() => handleSeatClick(seatId)}
            className={`h-8 w-8 rounded border text-xs transition cursor-pointer ${
              isSelected
                ? "bg-primary border-primary text-white"
                : "border-primary/60 text-gray-300 hover:border-primary"
            }`}
          >
            {seatId}
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="relative flex flex-col md:flex-row px-6 md:px-16 lg:px-40 pt-30 pb-20 min-h-[80vh]">
      <BlurCircle top="150px" left="0px" />
      <BlurCircle bottom="0px" right="0px" />

      <div className="w-60 h-max bg-primary/10 border border-primary/20 rounded-lg py-10">
        <p className="text-lg font-semibold px-6">Available Timings</p>
        <div className="mt-5 space-y-1">
          {timings.map((item) => (
            <div
              key={item.time}
              onClick={() => setSelectedTime(item)}
              className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-full cursor-pointer transition ${
                selectedTime?.time === item.time
                  ? "bg-primary text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <ClockIcon className="w-4 h-4" />
              <p className="text-sm">
                {new Date(item.time).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex flex-col items-center mt-16 md:mt-0">
        <h1 className="text-2xl font-semibold">Select your seat</h1>

        <img src={assets.screenImage} alt="screen" className="mt-10" />
        <p className="text-gray-400 text-sm mb-10">SCREEN SIDE</p>

        <div className="flex flex-col items-center gap-1">
          <div className="flex flex-col items-center">
            {groupRows[0].map((row) => renderSeatRow(row))}
          </div>

          <div className="grid grid-cols-2 gap-x-11 gap-y-6 mt-6">
            {groupRows.slice(1).map((group, index) => (
              <div key={index} className="flex flex-col items-center">
                {group.map((row) => renderSeatRow(row))}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => {
            if (!selectedTime) {
              return toast("Please select a time first");
            }
            if (selectedSeats.length === 0) {
              return toast("Please select at least one seat");
            }

            dummyBookingData.unshift({
              show: {
                movie,
                showDateTime: selectedTime.time,
              },
              amount: selectedSeats.length * PRICE_PER_SEAT,
              bookedSeats: selectedSeats,
            });

            navigate("/mybookings");
            window.scrollTo(0, 0);
          }}
          className="flex items-center gap-1 mt-20 px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
        >
          Proceed to Checkout
          <ArrowRightIcon className="w-4 h-4" strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};

export default SeatLayout;
