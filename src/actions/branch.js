import { BRANCH_SELECTED } from './types';

export const handleBranchChange = (event, branches) => {
  //Find the categories from branch input
  const categoriesFromBranch = branches.find(
    (item) => item.name === event.target.value
  ).branches;

  return {
    type: LOCATION_SELECTED,
    payload: categoriesFromBranch
  };
};
