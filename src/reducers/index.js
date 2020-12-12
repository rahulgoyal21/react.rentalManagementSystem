import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import branchReducer from './branchReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
  locationReducer,
  branchReducer,
  categoryReducer
});

export default rootReducer;
