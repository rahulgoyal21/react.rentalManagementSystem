import React from 'react';
import './homepage.css';
import { useSelector } from 'react-redux';
import Categories from '../../components/Categories';

const Homepage = () => {
  const { selectedCategoriesFromBranch } = useSelector(
    (state) => state.branchReducer
  );

  return (
    <>
      {selectedCategoriesFromBranch.length > 0 ? (
        <Categories />
      ) : (
        <div className='homePage'>
          <div>
            <strong>Welcome To Rental Management System</strong>
          </div>
          <br />
          <div>Please Select Location</div>
        </div>
      )}
    </>
  );
};
export default Homepage;
