import dispatcher from "../dispatcher";
import axios from "axios";
import actionTypes from "./action-types";

export function verificateUser() {
  return axios.get(`/api/user/`).then((users) => {
    console.log(users);
    dispatcher.dispatch({
      type: actionTypes.LOAD_BOOKING_ROOMS,
      data: users.data,
    });
  });
}
