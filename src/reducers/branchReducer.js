import { BRANCH_SELECTED } from '../actions/types';

const initialState = {
  selectedCategoriesFromBranch: ''
};
const branchReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case BRANCH_SELECTED:
      return {
        ...state,
        selectedCategoriesFromBranch: payload
      };
    default:
      return { ...state };
  }
};

export default branchReducer;
