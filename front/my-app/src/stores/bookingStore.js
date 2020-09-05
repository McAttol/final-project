import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import actionTypes from "../actions/action-types";

const CHANGE_EVENT = "change";

let _booking = [];

class BookingStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getBooking() {
    return _booking;
  }

  getRoomsByDate(date) {
    return _booking.find((bookings) => bookings.date === date);
  }
}

const bookingStore = new BookingStore();
dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOAD_BOOKING_LIST:
      _booking = action.data;
      bookingStore.emitChange();
      break;
    case actionTypes.LOAD_BOOKING_ROOMS:
      _booking = action.data;

      bookingStore.emitChange();
      break;
    default:
      break;
  }
});

export default bookingStore;
