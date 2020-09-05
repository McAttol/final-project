import React, { useEffect, useState } from "react";
import bookingStore from "../../stores/bookingStore";
import { loadBooking } from "../../actions/booking-actions";
import { formateDate } from "../../utils/utils";
import "./detail.css";

loadBooking("1599551388000");

function BookingDetail(props) {
  const [booking, setBooking] = useState(bookingStore.getBooking());

  useEffect(() => {
    bookingStore.addChangeListener(onChange);
    if (booking.length === 0) {
      loadBooking();
    }
    return () => bookingStore.removeChangeListener(onChange);
  }, [booking.length]);

  function onChange() {
    setBooking(bookingStore.getBooking());
  }
  console.log(booking);
  return (
    (booking && (
      <div className="container">
        <h1 className="container__title">{formateDate(booking[0].date)}</h1>
        <div className="container__info">
          <h2 className="h2">INDIVIDUAL</h2>
          <div className="individual__img">
            <img
              src="https://image.flaticon.com/icons/png/512/78/78257.png"
              alt="individual bed"
            />
            <div>
              <h3 className="h3">TOTAL</h3>
              <input
                value={booking[0].rooms.individual.total}
                type="number"
                min="0"
                max="10"
                className="booking__detail--input"
              />
            </div>
            <div>
              <h3 className="h3">DISPONIBLE</h3>
              <input
                value={booking[0].rooms.individual.available}
                type="number"
                max="10"
                className="booking__detail--input"
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="h2">DOUBLE</h2>
          <div className="individual__img">
            <div className="twin">
              <img
                src="https://image.flaticon.com/icons/png/512/78/78257.png"
                alt="twin bed"
              />
              <img
                src="https://image.flaticon.com/icons/png/512/78/78257.png"
                alt="twin bed"
              />
            </div>
            <div>
              <h3 className="h3">TOTAL</h3>
              <input
                value={booking[0].rooms.twin.total}
                type="number"
                min="0"
                max="10"
                className="booking__detail--input"
              />
            </div>
            <div>
              <h3 className="h3">DISPONIBLE</h3>
              <input
                value={booking[0].rooms.twin.available}
                type="number"
                max="10"
                className="booking__detail--input"
              />
            </div>
          </div>
          <div className="individual__img">
            <img
              src="https://i.pinimg.com/originals/3c/b8/f8/3cb8f87972f071b0b287a9a1015a9949.png"
              alt="double bed"
            />
            <div>
              <h3 className="h3">TOTAL</h3>
              <input
                value={booking[0].rooms.double.total}
                type="number"
                min="0"
                max="5"
                className="booking__detail--input"
              />
            </div>
            <div>
              <h3 className="h3">DISPONIBLE</h3>
              <input
                value={booking[0].rooms.double.available}
                type="number"
                max="5"
                className="booking__detail--input"
              />
            </div>
          </div>
        </div>
      </div>
    )) || <p>loading</p>
  );
}
export default BookingDetail;
