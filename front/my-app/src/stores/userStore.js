import EventEmitter from "events";
import dispatcher from "../dispatcher";
import actionTypes from "../actions/action-types";

const CHANGE_EVENT = "change";

let _user = [];

class UserStore extends EventEmitter {
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
    return _user;
  }

  getRoomsByDate(date) {
    return _user.find((users) => users.id === id);
  }
}

const userStore = new UserStore();
dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.USER_REGISTER:
      _user = action.data;
      userStore.emitChange();
      break;
    default:
      break;
  }
});

export default userStore;
