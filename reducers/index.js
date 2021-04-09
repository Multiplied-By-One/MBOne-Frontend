import { combineReducers } from 'redux';
import headmate from './headmateReducer';
import trait from './traitReducer';

export default combineReducers({
  headmate,
  trait
})