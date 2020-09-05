import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bookingStore from "../../stores/bookingStore";
import { loadBookingList } from "../../actions/booking-actions";
import { formateDate } from "../../utils/utils";

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
          <Link to={`/${bookings.date}`}>{formateDate(bookings.date)}</Link>
        </li>
      ))}
    </ul>
  );
}

export default BookingList;
