import { CATEGORY_SELECTED } from '../actions/types';

const initialState = {
  selectedSubcategoriesFromCategories: ''
};
const categoryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_SELECTED:
      return {
        ...state,
        selectedSubcategoriesFromCategories: payload
      };
    default:
      return { ...state };
  }
};

export default categoryReducer;
