import {
  DELETE_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  POST_CART_SUCESS,
  CHANGE_CART_ITEMS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  cart: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CART_REQUEST: {
      return { ...state, isLoading: true };
    }

    case GET_CART_SUCCESS: {
      return { ...state, isLoading: false, cart: payload };
    }

    case GET_CART_FAILURE: {
      return { ...state, isError: true, isLoading: false };
    }

    case POST_CART_SUCESS: {
      return { ...state, isLoading: false, cart: [payload, ...state.cart] };
    }
    case CHANGE_CART_ITEMS:
      return { ...state, cart: payload };

    case DELETE_CART_SUCCESS: {
      return { ...state, isLoading: false };
    }

    default:
      return state;
  }
};
