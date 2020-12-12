import { BRANCH_SELECTED } from './types';

export const handleBranchChange = (event, branches) => {
  //Find the categories from branch input
  const categoriesFromBranch = branches.find(
    (item) => item.branch_id === event.target.dataset.id
  )?.categories;
  return {
    type: BRANCH_SELECTED,
    payload: categoriesFromBranch
  };
};
