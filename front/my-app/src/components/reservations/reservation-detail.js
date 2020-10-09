import React, { useEffect, useState } from "react";
import reservationsStore from "../../stores/reservationStore";
import {
  loadReservation,
  loadReservationList,
  saveReservation,
} from "../../actions/reservation-actions";
import {
  calculateDays,
  formatDateNum,
  formatDateToMilliseconds,
} from "../../utils/utils";
import "./reservation-detail.css";

function ReservationDetail(props) {
  const [reservations, setReservations] = useState(
    reservationsStore.getReservations()
  );
  const paramsNumber = +props.match.params.reservationNumber;
  if (paramsNumber === 0) {
    paramsNumber = reservations.length + 1;
  }
  const [reservation, setReservation] = useState(
    reservationsStore.getReservationByNumber(paramsNumber)
  );

  const [familyName, setFamilyName] = useState("");
  const [name, setName] = useState("");
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [roomNumber, setRoomNumber] = useState(null);
  const [roomType, setRoomType] = useState("");
  const [pension, setPension] = useState("");
  const [passportNumber, setPassportNumber] = useState("");

  const [daysTotal, setDaysTotal] = useState(null);

  const roomsTypeAvailable = {
    individual: "individual",
    twin: "twin",
    double: "double",
  };
  const pensionsAvailable = {
    breackfast: "breackfast",
    halfBoard: "half board",
    fullBoard: "full board",
    allInclusive: "all inclusive",
  };

  useEffect(() => {
    reservationsStore.addChangeListener(onChange);
    if (!reservation) {
      setReservations(loadReservationList());
      setReservation(loadReservation());
    } else if (reservation) {
      setFamilyName(reservation.familyName);
      setName(reservation.name);
      setArrivalDate(reservation.arrivalDate);
      setDepartureDate(reservation.departureDate);
      setRoomNumber(reservation.roomNumber);
      setRoomType(reservation.roomType);
      setPension(reservation.pension);
      setPassportNumber(reservation.passportNumber);
      setDaysTotal(
        calculateDays(reservation.arrivalDate, reservation.departureDate)
      );
    }
    return () => reservationsStore.removeChangeListener(onChange);
  }, [reservation]);

  function onChange() {
    setReservation(
      reservationsStore.getReservationByNumber(
        +props.match.params.reservationNumber
      )
    );
  }

  function onFieldChange(value, setValue) {
    setValue(value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const surname = familyName.trim();
    const firstName = name.trim();
    const roomNum = roomNumber;
    const arrDate = formatDateToMilliseconds(arrivalDate);
    const depDate = formatDateToMilliseconds(departureDate);
    const rType = roomType.trim();
    const pens = pension.trim();
    const passNum = passportNumber.trim();
    const daysDiff = daysTotal;
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
        reservationNumber: reservation.reservationNumber,
        roomNumber: roomNum,
        arrivalDate: arrDate,
        departureDate: depDate,
        familyName: surname,
        roomType: rType,
        pension: pens,
        daysTotal: daysDiff,
        passportNumber: passNum,
      });
    }
  }
  return (
    (reservation && (
      <form className="container__reservation--detail" onSubmit={handleSubmit}>
        <h3>Reservation number : {reservation.reservationNumber}</h3>
        <h3>Nights : {daysTotal} </h3>
        <input
          value={roomNumber}
          name="roomNumber"
          placeholder="room number"
          onChange={(event) => onFieldChange(event.target.value, setFamilyName)}
        />
        <input
          value={familyName}
          name="familyName"
          placeholder="surname"
          onChange={(event) => onFieldChange(event.target.value, setFamilyName)}
        />
        <input
          value={name}
          name="name"
          placeholder="name"
          onChange={(event) => onFieldChange(event.target.value, setName)}
        />
        <input
          value={passportNumber}
          name="passportNumber"
          placeholder="passport number"
          onChange={(event) =>
            onFieldChange(event.target.value, setPassportNumber)
          }
        />
        <input
          value={formatDateNum(arrivalDate)}
          type="date"
          name="arrivalDate"
          placeholder="arrival date"
          onChange={(event) => {
            onFieldChange(event.target.value, setArrivalDate);
            console.log(event.target.value);
          }}
        />
        <input
          value={formatDateNum(departureDate)}
          type="date"
          name="departureDate"
          placeholder="departure date"
          onChange={(event) => {
            onFieldChange(event.target.value, setDepartureDate);
            console.log(departureDate);
          }}
        />
        <select
          value={roomType}
          name="roomType"
          onChange={(event) => onFieldChange(event.target.value, setRoomType)}
        >
          <option>{roomsTypeAvailable.individual}</option>
          <option>{roomsTypeAvailable.twin}</option>
          <option>{roomsTypeAvailable.double}</option>
        </select>
        <select
          value={pension}
          name="pension"
          onChange={(event) => onFieldChange(event.target.value, setPension)}
        >
          <option>{pensionsAvailable.breackfast}</option>
          <option>{pensionsAvailable.halfBoard}</option>
          <option>{pensionsAvailable.fullBoard}</option>
          <option>{pensionsAvailable.allInclusive}</option>
        </select>
        <button type="submit">Save</button>
      </form>
    )) || <p>not found</p>
  );
}

export default ReservationDetail;
