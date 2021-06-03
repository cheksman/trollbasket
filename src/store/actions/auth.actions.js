import {ADD_TO_CART, REMOVE_FROM_CART, CHANGE_FIRST_TIME} from './action.types';
import {showFeedback} from './feedback.actions';

export const changeFromFirstTimer = () => {
  return {
    type: CHANGE_FIRST_TIME,
  };
};

export const addToCart = data => async dispatch => {
  try {
    dispatch({
      type: ADD_TO_CART,
      payload: [data],
    });
    dispatch(showFeedback('Item added to cart successfully'));
  } catch (error) {
    dispatch(showFeedback('Item added to cart successfully'));
  }
};

export const checkout = () => dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
  });
};
