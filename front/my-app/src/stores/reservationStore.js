import EventEmitter from "events";
import dispatcher from "../dispatcher";
import actionTypes from "../actions/action-types";

const CHANGE_EVENT = "change";

let _reservations = [];

let nextReservationNumber = 0;

const takeGreaterValue = (newResNum, reservations) =>
  newResNum > reservations.reservationNumber
    ? newResNum
    : reservations.reservationNumber;

const generateNextReservationNumber = (reservations) =>
  reservations.reduce(takeGreaterValue, 0) + 1;

class ReservationsStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getReservations() {
    return _reservations;
  }

  getReservationByNumber(reservationNumber) {
    return _reservations.find(
      (reservations) => reservations.reservationNumber === reservationNumber
    );
  }
}

const reservationsStore = new ReservationsStore();
dispatcher.register((action) => {
  console.log(action.type);
  switch (action.type) {
    case actionTypes.LOAD_RESERVATION_LIST:
      _reservations = action.data;
      reservationsStore.emitChange();
      nextReservationNumber = generateNextReservationNumber(_reservations);
      break;
    case actionTypes.LOAD_RESERVATION:
      _reservations = action.data;
      reservationsStore.emitChange(_reservations);
      break;
    case actionTypes.UPDATE_RESERVATION:
      _reservations = _reservations.map((reservations) => {
        if (reservations.reservationNumber === action.data.reservationNumber) {
          reservations.roomNumber = action.data.roomNumber;
          reservations.familyName = action.data.familyName;
          reservations.name = action.data.name;
          reservations.arrivalDate = action.data.arrivalDate;
          reservations.departureDate = action.data.departureDate;
          reservations.roomType = action.data.roomType;
          reservations.pension = action.data.pension;
          reservations.daysTotal = action.data.daysTotal;
          reservations.passportNumber = action.data.passportNumber;
        }
        return reservations;
      });
      reservationsStore.emitChange();
      break;
    case actionTypes.CREATE_RESERVATION:
      _reservations = [
        ..._reservations,
        { ...action.data, reservationNumber: nextReservationNumber },
      ];
      ++nextReservationNumber;
      reservationsStore.emitChange();
      break;
    default:
      break;
  }
});

export default reservationsStore;
