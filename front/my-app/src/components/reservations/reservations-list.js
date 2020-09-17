import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import reservationsStore from "../../stores/reservationStore";
import { loadReservationList } from "../../actions/reservation-actions";

function ReservationList() {
  const [reservations, setReservations] = useState(
    reservationsStore.getReservations()
  );

  useEffect(() => {
    reservationsStore.addChangeListener(onChange);
    if (reservations.length === 0) loadReservationList();
    return () => reservationsStore.removeChangeListener(onChange);
  }, [reservations.length]);

  function onChange() {
    setReservations(reservationsStore.getReservations());
  }
  return (
    <ul className="reservation__container">
      {reservations.map((reservations) => (
        <li key={reservations.reservationNumber} className="reservation__list">
          <Link to={`/reservations/${reservations.reservationNumber}`}>
            Res: {reservations.reservationNumber}
            <br /> Room: {reservations.roomNumber} <br /> Surname:{" "}
            {reservations.familyName}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ReservationList;
