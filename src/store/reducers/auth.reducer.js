import {
  ADD_TO_CART,
  CHANGE_FIRST_TIME,
  REMOVE_FROM_CART,
} from '../actions/action.types';

const initialState = {
  cart: [],
  firstAccess: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: state?.cart?.concat(action.payload),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: [],
      };
    case CHANGE_FIRST_TIME:
      return {
        ...state,
        firstAccess: false,
      };
    default:
      return state;
  }
};
