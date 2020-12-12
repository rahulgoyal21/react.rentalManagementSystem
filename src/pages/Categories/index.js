import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './categories.css';
import { handleCategoryChange } from '../../actions/category';
import { useHistory } from 'react-router-dom';

const Categories = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { selectedCategoriesFromBranch } = useSelector(
    (state) => state.branchReducer
  );

  console.log(
    '.....selectedCategoriesFromBranch from CATEGORIES....',
    selectedCategoriesFromBranch
  );
  const handleCategorySelection = (event) => {
    console.log('.....includes....', event.target.dataset.name?.includes(' '));
    const categoryName = event.target.dataset.name?.includes(' ')
      ? event.target.dataset.name?.split(' ').join('_').trim()
      : event.target.dataset.name;
    dispatch(handleCategoryChange(event, selectedCategoriesFromBranch));
    history.push(`/subcategories/${categoryName}`);
  };
  return (
    <>
      <div
        className='categories'
        onClick={(event) => handleCategorySelection(event)}
      >
        {selectedCategoriesFromBranch.map((item) => (
          <div key={item.name}>
            <img
              alt={item.name}
              src={process.env.PUBLIC_URL + `/category/${item.image}`}
              data-name={item.name}
            />
            <div data-name={item.name}>{item.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
