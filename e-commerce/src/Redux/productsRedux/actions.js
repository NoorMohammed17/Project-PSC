import axios from "axios";
import * as types from "./actionTypes";

export const addProduct = (data) => (dispatch) => {
  dispatch({ type: types.PRODUCT_REQUEST });
  axios
    .post("http://localhost:8080/products", data)
    .then(() => {
      // console.log(res);
      dispatch({ type: types.ADD_PRODUCT_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: types.PRODUCT_FAILURE });
    });
};

export const addShipping = (data) => (dispatch) => {
  dispatch({ type: types.PRODUCT_REQUEST });
  axios
    .post("http://localhost:8080/shipping", data)
    .then(() => {
      // console.log(res);
      dispatch({ type: types.ADD_SHIPPING_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: types.PRODUCT_FAILURE });
    });
};

export const getProducts = (paramObj) => (dispatch) => {
  dispatch({ type: types.PRODUCT_REQUEST });
  axios
    .get("http://localhost:8080/products", paramObj)
    .then((res) => {
      console.log(res);
      dispatch({ type: types.GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: types.PRODUCT_FAILURE });
    });
};
export const getShipping = () => (dispatch) => {
  dispatch({ type: types.PRODUCT_REQUEST });
  axios
    .get("http://localhost:8080/shipping" )
    .then((res) => {
      console.log(res);
      dispatch({ type: types.GET_SHIPPING_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: types.PRODUCT_FAILURE });
    });
};

// export const editProduct = (dataObj, id) => (dispatch) => {
//   dispatch({ type: types.PRODUCT_REQUEST });
//   axios
//     .patch(`http://localhost:8080/products/${id}`, dataObj)
//     .then((res) => {
//       console.log(res);
//       dispatch({ type: types.PATCH_PRODUCT_SUCCESS });
//     })
//     .catch(() => {
//       dispatch({ type: types.PRODUCT_FAILURE });
//     });
// };

export const editProduct = ( id) => (dispatch) => {
  dispatch({ type: types.PRODUCT_REQUEST });
  axios
    .get(`http://localhost:8080/products/${id}`)
    .then((res) => {
      console.log('editProducts',res.data);
      dispatch({ type: types.PATCH_PRODUCT_SUCCESS, payload:res.data });
    })
    .catch(() => {
      dispatch({ type: types.PRODUCT_FAILURE });
    });
};
