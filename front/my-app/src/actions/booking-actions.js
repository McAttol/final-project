import dispatcher from "../dispatcher";
import axios from "axios";
import actionTypes from "./action-types";

export function loadBooking(bookingDate) {
  return axios
    .get(`/api/booking/${bookingDate}`)
    .then((bookings) => {
      dispatcher.dispatch({
        type: actionTypes.LOAD_BOOKING_ROOMS,
        data: bookings.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
