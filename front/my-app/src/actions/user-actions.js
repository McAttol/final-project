import dispatcher from "../dispatcher";
import axios from "axios";
import actionTypes from "./action-types";

export function verificateUser(sub) {
  return axios.get(`/api/user/${sub}`).then((users) => {
    console.log(users);
    dispatcher.dispatch({
      type: actionTypes.USER_REGISTER,
      data: users.data,
    });
  });
}
