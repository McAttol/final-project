import React, { /* Component */ useState, useEffect } from "react";
import { Link /* useHistory  */ } from "react-router-dom";
import bookingStore from "../../stores/bookingStore";
import { loadBookingList } from "../../actions/booking-actions";
import { formateDate } from "../../utils/utils";
/* import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; */

/* function BookingList() {
  let [date, setDate] = useState(bookingStore.getRoomsByDate());

  let onChange = (date) => setDate({ date });
  let history = useHistory();

  function routeChange(value) {
    let x = new Date();
    let milli = x.getTime(value);
    milli.toString();
    history.push(`/booking/${milli}`);
  }

  return (
    <Calendar
      locale="en"
      onChange={onChange}
      value={date}
      onClickDay={(value, event) => routeChange(value)}
    />
  );
}
 */
function BookingList() {
  const [bookings, setBookings] = useState(bookingStore.getBooking());

  useEffect(() => {
    bookingStore.addChangeListener(onChange);
    if (bookings.length === 0) loadBookingList();
    return () => bookingStore.removeChangeListener(onChange);
  }, [bookings.length]);

  function onChange() {
    setBookings(bookingStore.getBooking());
  }

  return (
    <ul>
      {bookings.map((bookings) => (
        <li key={bookings.date} className="">
          <Link to={`/booking/${bookings.date}`}>
            {formateDate(bookings.date)}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default BookingList;
