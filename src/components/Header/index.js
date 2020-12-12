import React from 'react';
import './header.css';
import { catalog } from '../../catalog';
import { handleLocationChange } from '../../actions/location';
import { useSelector, useDispatch } from 'react-redux';
import { handleBranchChange } from '../../actions/branch';

const Header = () => {
  const dispatch = useDispatch();
  const { selectedBranchFromLocation, locationName } = useSelector(
    (state) => state.locationReducer
  );
  const { selectedCategoriesFromBranch } = useSelector(
    (state) => state.branchReducer
  );

  //Extracting locations name from catalog
  const locations = catalog.data.locations.reduce((acc, item) => {
    acc.push({ id: item.dealers_id, name: item.name });
    return acc;
  }, []);

  console.log('LOCATIONS', locations);
  console.log('BRANCHES', selectedBranchFromLocation);
  console.log('CATEGORIES', selectedCategoriesFromBranch);

  return (
    <div className='header'>
      <div className='content'> Rental Management System</div>
      <div></div>
      <div></div>
      <div className='content'>
        <select
          style={{ position: 'relative' }}
          value={locationName}
          onChange={(event) => {
            dispatch(handleLocationChange(event));
          }}
          placeholder='Select Location'
        >
          <option value='' disabled>
            Select Location
          </option>
          {locations.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        <div
          className='branches'
          onClick={(event) =>
            dispatch(handleBranchChange(event, selectedBranchFromLocation))
          }
        >
          {selectedBranchFromLocation.length > 0 &&
            selectedBranchFromLocation.map((item) => (
              <div
                className='branchName'
                key={item.branch_id}
                data-id={item.branch_id}
              >
                {item.name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Header;
