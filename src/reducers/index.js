import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import branchReducer from './branchReducer';

const rootReducer = combineReducers({ locationReducer, branchReducer });

export default rootReducer;
