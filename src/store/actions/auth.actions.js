import {ADD_TO_CART, REMOVE_FROM_CART, CHANGE_FIRST_TIME} from './action.types';
import {showFeedback} from './feedback.actions';

export const changeFromFirstTimer = () => {
  return {
    type: CHANGE_FIRST_TIME,
  };
};

export const addToCart = data => dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: [data],
  });
  showFeedback('Item added to cart successfully');
};

export const checkout = () => dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
  });
};
