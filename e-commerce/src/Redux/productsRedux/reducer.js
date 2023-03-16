import * as types from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_PRODUCT_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        products: payload,
      };
    case types.ADD_PRODUCT_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        products: payload,
      };
    case types.PATCH_PRODUCT_SUCCESS:
      return {
        isLoading: false,
        isError: false,
      };
    case types.PRODUCT_FAILURE:
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
