import { LOCATION_SELECTED } from '../actions/types';

const initialState = {
  selectedBranchFromLocation: '',
  locationName: ''
};
const locationReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOCATION_SELECTED:
      return {
        ...state,
        selectedBranchFromLocation: payload.branches,
        locationName: payload.location
      };
    default:
      return { ...state };
  }
};

export default locationReducer;
