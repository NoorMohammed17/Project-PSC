import * as types from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  singleProduct : [],
  shipping:[],
  card:[],
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
      case types.GET_SHIPPING_SUCCESS:
        return {
          isLoading: false,
          isError: false,
          shipping: payload,
        };
        case types.GET_CART2_SUCCESS:
          return {
            isLoading: false,
            isError: false,
            cart2: payload,
          };
    case types.ADD_PRODUCT_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        products: payload,
      };
      case types.ADD_SHIPPING_SUCCESS:
        return {
          isLoading: false,
          isError: false,
          shipping: payload,
        };

        case types.ADD_CART2_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        cart2: payload,
      };
      
    case types.PATCH_PRODUCT_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        singleProduct: [...state.singleProduct,payload],
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
