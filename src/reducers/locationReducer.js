import { LOCATION_SELECTED } from '../actions/types';

const initialState = {
  selectedBranchFromLocation: ''
};
const locationReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOCATION_SELECTED:
      return { ...state, selectedBranchFromLocation: payload };
    default:
      return { ...state };
  }
};

export default locationReducer;
