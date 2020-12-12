import React from 'react';
import { useSelector } from 'react-redux';
import './subcategories.css';
import { useRouteMatch, useHistory } from 'react-router-dom';

const Subcategories = () => {
  const { params } = useRouteMatch();
  const history = useHistory();

  //Fetching sub-categories from redux store
  const { selectedSubcategoriesFromCategories } = useSelector(
    (state) => state.categoryReducer
  );

  return (
    <>
      <div className='breadcrumbContainer'>
        <div className='breadcrumb'>
          <div onClick={() => history.goBack()}>
            <strong>Equipment Catalog </strong>
          </div>
          &ensp;/&ensp;
          {params.categoryId?.includes('_')
            ? params.categoryId.split('_').join(' ').trim()
            : params.categoryId}
        </div>
      </div>
      {selectedSubcategoriesFromCategories?.length > 0 ? (
        <div className='subcategories'>
          {selectedSubcategoriesFromCategories?.map((item) => (
            <div key={item.name}>
              <img
                alt={item.name}
                src={
                  item.name === 'NA'
                    ? process.env.PUBLIC_URL + '/img/noPage.png'
                    : process.env.PUBLIC_URL +
                      `/category/subcategory/${item.image}`
                }
              />
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className='noSubcategoryDialog'>
          No Sub-category available for this Category
        </div>
      )}
    </>
  );
};

export default Subcategories;
