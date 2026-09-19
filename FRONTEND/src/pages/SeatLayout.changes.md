# SeatLayout.jsx changes

## Imports
- Added `dummyShowsData` and `dummyBookingData` to the `assets.js` import.
- Added a `PRICE_PER_SEAT = 200` constant.

## Movie lookup
- `useParams()` now also destructures `id` (previously only `date`).
- Added: `const movie = dummyShowsData.find((show) => show._id === id);`
  so the component knows which movie the seats are being booked for.

## "Proceed to Checkout" button
Previously the button just navigated to `/mybookings` with no validation
and no data. Now, on click, it:

1. Shows a toast and stops if no time is selected.
2. Shows a toast and stops if no seats are selected.
3. Otherwise adds a new booking to the front of `dummyBookingData`:
   ```js
   dummyBookingData.unshift({
     show: {
       movie,
       showDateTime: selectedTime.time,
     },
     amount: selectedSeats.length * PRICE_PER_SEAT,
     bookedSeats: selectedSeats,
   });
   ```
4. Then navigates to `/mybookings` and scrolls to top (same as before).

## Effect
Booking a movie here now makes it show up as a real card on the My
Bookings page ([MyBookings.jsx](MyBookings.jsx) → [MyBookingCard.jsx](../components/MyBookingCard.jsx)),
using the actual selected movie, showtime, and seats instead of static
placeholder data.

Note: since there's no backend, this only mutates the in-memory
`dummyBookingData` array — it resets on a full page reload.
