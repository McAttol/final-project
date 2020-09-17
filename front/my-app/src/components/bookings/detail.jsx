import React, { useEffect, useState } from "react";
import bookingStore from "../../stores/bookingStore";
import { loadBooking } from "../../actions/booking-actions";
import { formatDate } from "../../utils/utils";
import "./detail.css";

function BookingDetail(props) {
  console.log(+props.match.params.bookingDate);
  const [booking, setBooking] = useState(
    bookingStore.getRoomsByDate(+props.match.params.bookingDate)
  );

  useEffect(() => {
    bookingStore.addChangeListener(onChange);

    if (!booking) {
      loadBooking(props.match.params.bookingDate);
    }

    return () => bookingStore.removeChangeListener(onChange);
  }, [booking]);

  function onChange() {
    setBooking(bookingStore.getRoomsByDate(+props.match.params.bookingDate));
  }
  console.log(booking);
  return (
    (booking && (
      <div className="container">
        <h1 className="container__title">{formatDate(booking.date)}</h1>
        <div className="container__info">
          <h2 className="h2">INDIVIDUAL</h2>
          <div className="individual__img">
            <img
              src="https://trello-attachments.s3.amazonaws.com/5f11b957273429681522af65/5f5755d3493d338105fdb51a/da21630f0e3b6a56356b6668273796c8/1.png"
              alt="individual bed"
            />
            <div>
              <h3 className="h3">TOTAL</h3>
              <input
                value={booking.rooms.individual.total}
                type="number"
                min="0"
                max="10"
                className="booking__detail--input"
              />
            </div>
            <div>
              <h3 className="h3">DISPONIBLE</h3>
              <input
                value={booking.rooms.individual.available}
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
                src="https://trello-attachments.s3.amazonaws.com/5f11b957273429681522af65/5f5755d3493d338105fdb51a/3d19d5395aa8d8a2c833890d039c4588/2.png"
                alt="twin bed"
              />
            </div>
            <div>
              <h3 className="h3">TOTAL</h3>
              <input
                value={booking.rooms.twin.total}
                type="number"
                min="0"
                max="10"
                className="booking__detail--input"
              />
            </div>
            <div>
              <h3 className="h3">DISPONIBLE</h3>
              <input
                value={booking.rooms.twin.available}
                type="number"
                max="10"
                className="booking__detail--input"
              />
            </div>
          </div>
          <div className="individual__img">
            <img
              src="https://trello-attachments.s3.amazonaws.com/5f11b957273429681522af65/5f5755d3493d338105fdb51a/c863ffbd6ad18092cc621a0f0188a89e/3.png"
              alt="double bed"
            />
            <div>
              <h3 className="h3">TOTAL</h3>
              <input
                value={booking.rooms.double.total}
                type="number"
                min="0"
                max="5"
                className="booking__detail--input"
              />
            </div>
            <div>
              <h3 className="h3">DISPONIBLE</h3>
              <input
                value={booking.rooms.double.available}
                type="number"
                max="5"
                className="booking__detail--input"
              />
            </div>
          </div>
        </div>
      </div>
    )) || <p>Mooooc!!</p>
  );
}
export default BookingDetail;
