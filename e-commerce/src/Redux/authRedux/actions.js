import axios from "axios";
import * as types from "./actionTypes";

export const login = (userData) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
   return axios
    .post("https://reqres.in/api/login", userData)
    .then((res) => {
      console.log(res);
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch(() => {
      dispatch({ type: types.LOGIN_FAILURE });
    });
};
