import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './categories.css';
import { handleCategoryChange } from '../../actions/category';
import { useHistory } from 'react-router-dom';

const Categories = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  //Fetching categories from redux store
  const { selectedCategoriesFromBranch } = useSelector(
    (state) => state.branchReducer
  );

  //Handler function for subcategory page navigation
  const handleCategorySelection = (event) => {
    const categoryName = event.target.dataset.name?.includes(' ')
      ? event.target.dataset.name?.split(' ').join('_').trim()
      : event.target.dataset.name;
    if (event.target.tagName === 'IMG' || event.target.tagName === 'SECTION') {
      dispatch(handleCategoryChange(event, selectedCategoriesFromBranch));
      history.push(`/subcategories/${categoryName}`);
    }
  };

  return (
    <>
      <div className='headingConatiner'>
        <span className='heading'>
          <strong>Equipment Catalog</strong>
        </span>
      </div>

      {/* Event Delegation */}
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
            <section data-name={item.name}>{item.name}</section>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
