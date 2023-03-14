import * as types from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  auth: false,
  token: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.LOGIN_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        auth: true,
        token: payload,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default: {
      return state;
    }
  }
};
