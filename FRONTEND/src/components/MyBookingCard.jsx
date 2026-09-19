const timeFormat = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours} hour${hours !== 1 ? "s" : ""} ${mins} minute${
    mins !== 1 ? "s" : ""
  }`;
};

const dateFormat = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const year = date.getFullYear();
  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  let suffix = "th";
  if (day === 1 || day === 21 || day === 31) suffix = "st";
  else if (day === 2 || day === 22) suffix = "nd";
  else if (day === 3 || day === 23) suffix = "rd";

  return `${day}${suffix} ${month} ${year} • ${time}`;
};

const MyBookingCard = ({ booking }) => {
  const { movie, showDateTime } = booking.show;

  return (
    <div className="flex justify-between p-4 h-40 w-240 bg-primary/8 border border-primary/20 rounded-lg">
      <div className="flex gap-4">
        <img
          src={movie.poster_path}
          alt={movie.title}
          className="w-46 h-32 rounded-lg object-cover object-top"
        />
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-lg font-semibold">{movie.title}</p>
            <p className="text-gray-400 text-sm mt-1">
              {timeFormat(movie.runtime)}
            </p>
          </div>
          <p className="text-gray-400 text-sm">{dateFormat(showDateTime)}</p>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between">
        <p className="text-2xl font-semibold">
          <span className="text-base">₹</span>
          {booking.amount}
        </p>
        <div className="text-sm text-right">
          <p>
            Total Tickets:{" "}
            <span className="font-semibold">{booking.bookedSeats.length}</span>
          </p>
          <p>
            Seat Number:{" "}
            <span className="font-semibold">
              {booking.bookedSeats.join(", ")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyBookingCard;
