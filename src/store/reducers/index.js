import {combineReducers} from 'redux';
import {authReducer} from './auth.reducer';
import feedback from './feedback.reducer';

export default combineReducers({
  auth: authReducer,
  feedback: feedback,
});
