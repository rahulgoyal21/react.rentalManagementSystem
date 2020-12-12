import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './categories.css';

const Categories = () => {
  const dispatch = useDispatch();
  const { selectedCategoriesFromBranch } = useSelector(
    (state) => state.branchReducer
  );

  console.log(
    '.....selectedCategoriesFromBranch from CATEGORIES....',
    selectedCategoriesFromBranch
  );
  const handleChange = (event) => {
    console.log('....handleChange HOMEPAGE...', event, event.target);
  };
  return (
    <>
      <div className='categories' onClick={(event) => handleChange(event)}>
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
