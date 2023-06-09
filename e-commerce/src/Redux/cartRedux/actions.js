import {
  DELETE_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  POST_CART_SUCESS,
  CHANGE_CART_ITEMS,
} from "./actionTypes";
import axios from "axios";

export const getCartProductsRequestAction = () => {
  return { type: GET_CART_REQUEST };
};

export const getCartProductsSuccessAction = (payload) => {
  return { type: GET_CART_SUCCESS, payload };
};

export const getCartProductsFailureAction = () => {
  return { type: GET_CART_FAILURE };
};

export const PostCartSuccess = (payload) => {
  return { type: POST_CART_SUCESS, payload };
};

export const DeleteCartSuccess = () => {
  return { type: DELETE_CART_SUCCESS };
};

export const getCartProducts = () => (dispatch) => {
  dispatch(getCartProductsRequestAction());
  return axios
    .get("http://localhost:8080/cart")
    .then((res) => {
      dispatch(getCartProductsSuccessAction(res.data));
    })
    .catch((err) => {
      dispatch(getCartProductsFailureAction());
    });
};

export const postCartRequest = (payload) => (dispatch) => {
  dispatch(getCartProductsRequestAction());
  axios
    .post("http://localhost:8080/cart", payload)
    .then((res) => {
      dispatch(PostCartSuccess(res.data));
    })
    .then((err) => {
      dispatch(getCartProductsFailureAction());
    });
};

export const deleteCartdata = (id) => (dispatch) => {
  dispatch(getCartProductsRequestAction());
  return axios
    .delete(`http://localhost:8080/cart/${id}`)
    .then((res) => {
      dispatch(DeleteCartSuccess());
    })
    .catch((err) => {
      dispatch(getCartProductsFailureAction());
    });
};

export const changeCartItems = (id, qty) => (dispatch) => {
  dispatch(getCartProductsRequestAction());
  const data = { qty };
  const headers = { "Content-Type": "application/json" };
  return axios
    .patch(`http://localhost:8080/cart/${id}`, data, { headers })
    .then((res) => {
      dispatch({ type: CHANGE_CART_ITEMS, payload: res.data });
    })
    .catch((error) => {
      dispatch(getCartProductsFailureAction(error));
    });
};

// return fetch(`http://localhost:8080/cart/${id}`, {
//   method: "PATCH",
//   body: JSON.stringify({ qty }),
//   headers: {
//     "Content-Type": "application/json",

//   },
// })
//   .then((res) => res.json())
//   .then((res) => {
//     // console.log(res);
//     dispatch({ type: CHANGE_CART_ITEMS, payload: res.data });
//   });
