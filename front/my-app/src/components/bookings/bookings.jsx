import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import bookingStore from "../../stores/bookingStore";
import Calendar from "react-calendar";
import "./bookings.css";

function BookingList() {
  let [date, setDate] = useState(bookingStore.getRoomsByDate());

  let onChange = (date) => setDate({ date });
  let history = useHistory();

  function routeChange(value) {
    let x = new Date(value);
    let milli = x.getTime();
    milli.toString();
    history.push(`/booking/${milli}`);
  }

  return (
    <div className="calendar">
      <Calendar
        className="react-calendar"
        locale="en"
        onChange={onChange}
        value={date}
        onClickDay={(value, event) => routeChange(value)}
      />
    </div>
  );
}

export default BookingList;
