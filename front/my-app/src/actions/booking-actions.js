import dispatcher from "../dispatcher";
import axios from "axios";
import actionTypes from "./action-types";

export function loadBooking(bookingDate) {
  return axios.get(`/api/booking/${bookingDate}`).then((bookings) => {
    console.log(bookings);
    dispatcher.dispatch({
      type: actionTypes.LOAD_BOOKING_ROOMS,
      data: bookings.data,
    });
  });
}
export function loadBookingList() {
  return axios.get(`/api/booking/`).then((bookingsList) => {
    dispatcher.dispatch({
      type: actionTypes.LOAD_BOOKING_LIST,
      data: bookingsList.data,
    });
  });
}
