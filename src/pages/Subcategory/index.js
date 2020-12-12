import React from 'react';
import { useSelector } from 'react-redux';
import './subcategories.css';

const Subcategories = () => {
  const { selectedSubcategoriesFromCategories } = useSelector(
    (state) => state.categoryReducer
  );

  console.log(
    '.....selectedSubcategoriesFromCategories from SUBCATEGORIES....',
    selectedSubcategoriesFromCategories
  );

  return (
    <>
      <div className='subcategories'>
        {selectedSubcategoriesFromCategories.map((item) => (
          <div key={item.name}>
            <img
              alt={item.name}
              src={
                process.env.PUBLIC_URL + `/category/subcategory/${item.image}`
              }
            />
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Subcategories;
