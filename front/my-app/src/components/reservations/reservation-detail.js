import React, { useEffect, useState } from "react";
import reservationsStore from "../../stores/reservationStore";
import {
  loadReservation,
  saveReservation,
} from "../../actions/reservation-actions";
import { calculateDays, formateDateNum } from "../../utils/utils";
import "./reservation-detail.css";

function ReservationDetail(props) {
  const [reservation, setReservation] = useState(
    reservationsStore.getReservationByNumber(
      +props.match.params.reservationNumber
    )
  );
  const [familyName, setFamilyName] = useState("");
  const [name, setName] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState(
    formateDateNum(reservation.departureDate)
  );
  const [roomNumber, setRoomNumber] = useState(null);
  const [roomType, setRoomType] = useState("");
  const [pension, setPension] = useState("");
  const [passportNumber, setPassportNumber] = useState(null);
  const [daysTotal, setDaysTotal] = useState(null);

  useEffect(() => {
    reservationsStore.addChangeListener(onChange);
    if (reservation.length === 0) {
      loadReservation();
    } else if (reservation) {
      setFamilyName(reservation.familyName);
      setName(reservation.name);
      setArrivalDate(reservation.arrivalDate);
      setDepartureDate(reservation.departudeDate);
      setRoomNumber(reservation.roomNumber);
      setRoomType(reservation.roomType);
      setPension(reservation.pension);
      setPassportNumber(reservation.passportNumber);
      setDaysTotal(reservation.daysTotal);
    }
    return () => reservationsStore.removeChangeListener(onChange);
  }, [reservation.length]);

  function onChange() {
    setReservation(reservationsStore.getResrvationByNumber());
  }

  function onFieldChange(value, setValue) {
    setValue(value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const surname = familyName.trim();
    const firstName = name.trim();
    const roomNum = roomNumber;
    const arrDate = arrivalDate;
    const depDate = departureDate;
    const rType = roomType;
    const pens = pension;
    const passNum = passportNumber;
    const daysTotal = daysTotal;
    if (
      surname ||
      firstName ||
      arrDate ||
      depDate ||
      rType ||
      pens ||
      passNum ||
      roomNum
    ) {
      saveReservation({
        name: firstName,
        reservationNumber: reservation,
        roomNumber: roomNum,
        arrivalDate: arrDate,
        departureDate: depDate,
        familyName: surname,
        roomType: rType,
        pension: pens,
        daysTotal,
        passportNumber: passNum,
      });
    }
  }

  return (
    (reservation && (
      <form className="container__reservation--detail" onSubmit={handleSubmit}>
        <h3>Reservation number : {reservation.reservationNumber}</h3>
        <h3>
          Nights :{" "}
          {calculateDays(reservation.arrivalDate, reservation.departureDate)}
        </h3>
        <input
          value={reservation.roomNumber}
          name="roomName"
          placeholder="room number"
          onChange={(event) => onFieldChange(event.target.value, setFamilyName)}
        />
        <input
          value={reservation.familyName}
          name="familyName"
          placeholder="surname"
          onChange={(event) => onFieldChange(event.target.value, setFamilyName)}
        />
        <input
          value={reservation.name}
          name="name"
          placeholder="name"
          onChange={(event) => onFieldChange(event.target.value, setName)}
        />
        <input
          value={reservation.passportNumber}
          name="passportNumber"
          placeholder="passport number"
          onChange={(event) =>
            onFieldChange(event.target.value, setPassportNumber)
          }
        />
        <input
          value={formateDateNum(reservation.arrivalDate)}
          type="date"
          name="arrivalDate"
          placeholder="arrival date"
          onChange={(event) =>
            onFieldChange(event.target.value, setArrivalDate)
          }
        />
        <input
          value={departureDate}
          type="date"
          name="departureDate"
          placeholder="departure date"
          onChange={(event) => {
            onFieldChange(event.target.value, setDepartureDate);
          }}
        />
        <select
          value={reservation.roomType}
          name="roomType"
          onChange={(event) => onFieldChange(event.target.value, setRoomType)}
        >
          <option>individual</option>
          <option>twin</option>
          <option>double</option>
        </select>
        <select
          value={reservation.pension}
          name="pension"
          onChange={(event) => onFieldChange(event.target.value, setPension)}
        >
          <option>breackfast</option>
          <option>half pension</option>
          <option>full pension</option>
          <option>all inclusive</option>
        </select>
        <button type="submit">Save</button>
      </form>
    )) || <p>mooooc!!</p>
  );
}

export default ReservationDetail;
