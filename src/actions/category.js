import { CATEGORY_SELECTED } from './types';

export const handleCategoryChange = (event, categories) => {
  //Find the subcategories from categories input
  const subCategoriesFromCategory = categories.find(
    (item) => item.name === event.target.dataset.name
  )?.subcategories;
  return {
    type: CATEGORY_SELECTED,
    payload: subCategoriesFromCategory
  };
};
