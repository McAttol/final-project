import dispatcher from "../dispatcher";
import axios from "axios";
import actionTypes from "./action-types";

export function createReservation(reservationNumber) {
  return axios
    .post(`/api/reservations/${reservationNumber}`)
    .then((resNumber) => {
      dispatcher.dispatch({
        type: actionTypes.CREATE_RESERVATION,
        data: resNumber.data,
      });
    });
}
export function loadReservation(reservationNumber) {
  return axios
    .get(`/api/reservations/${reservationNumber}`)
    .then((resNumber) => {
      dispatcher.dispatch({
        type: actionTypes.LOAD_RESERVATION,
        data: resNumber.data,
      });
    });
}
export function saveReservation(reservation) {
  return axios
    .put(`/api/reservations/${reservation.reservationNumber}`, reservation)
    .then((savedReservation) => {
      dispatcher.dispatch({
        type: reservation
          ? actionTypes.UPDATE_RESERVATION
          : actionTypes.CREATE_RESERVATION,
        data: reservation,
      });
    });
}
export function loadReservationList() {
  return axios.get(`/api/reservations/`).then((resList) => {
    dispatcher.dispatch({
      type: actionTypes.LOAD_RESERVATION_LIST,
      data: resList.data,
    });
  });
}
