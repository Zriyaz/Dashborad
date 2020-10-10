import { combineReducers } from 'redux';
import graphReducers from './graphReducer';

export default combineReducers({
  data: graphReducers,
});
