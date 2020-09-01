import React, { useEffect, useState } from "react";
import bookingStore from "../../stores/bookingStore";
import { loadBooking } from "../../actions/booking-actions";
import { formateDate } from "../../utils/utils";
import "./detail.css";

function BookingDetail(props) {
  const [booking, setBooking] = useState(bookingStore.getBooking());
  const [roomId, setRoomId] = useState(+props.match?.params?.roomId);

  const roomDetail = {
    date: 1599551388000,
    rooms: {
      individual: {
        total: 10,
        available: 10,
      },
      twin: {
        total: 10,
        available: 10,
      },
      double: {
        total: 5,
        available: 5,
      },
    },
  };

  useEffect(() => {
    bookingStore.addChangeListener(onChange);
    if (booking.length === 0) {
      loadBooking();
    } else if (roomId) {
      const room = bookingStore.getRoomById(roomId);
      if (room) {
        setRoomId(room.id);
      }
    }
    return () => bookingStore.removeChangeListener(onChange);
  }, [booking.length, props.match.params.roomId, roomId]);

  function onChange() {
    setBooking(bookingStore.getBooking());
  }

  return (
    <div className="container">
      <h1 className="container__title">{formateDate(roomDetail.date)}</h1>
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
              value={roomDetail.rooms.individual.total}
              type="number"
              min="0"
              max="10"
              className="booking__detail--input"
            />
          </div>
          <div>
            <h3 className="h3">DISPONIBLE</h3>
            <input
              value={roomDetail.rooms.individual.available}
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
              value={roomDetail.rooms.twin.total}
              type="number"
              min="0"
              max="10"
              className="booking__detail--input"
            />
          </div>
          <div>
            <h3 className="h3">DISPONIBLE</h3>
            <input
              value={roomDetail.rooms.twin.available}
              type="number"
              max="10"
              className="booking__detail--input"
            />
          </div>
        </div>
        <div className="individual__img">
          <img
            src="https://i.pinimg.com/originals/3c/b8/f8/3cb8f87972f071b0b287a9a1015a9949.png"
            alt=""
          />
          <div>
            <h3 className="h3">TOTAL</h3>
            <input
              value={roomDetail.rooms.double.total}
              type="number"
              min="0"
              max="5"
              className="booking__detail--input"
            />
          </div>
          <div>
            <h3 className="h3">DISPONIBLE</h3>
            <input
              value={roomDetail.rooms.double.available}
              type="number"
              max="5"
              className="booking__detail--input"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default BookingDetail;
