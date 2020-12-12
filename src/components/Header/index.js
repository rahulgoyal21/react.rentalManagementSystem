import React from 'react';
import './header.css';
import { catalog } from '../../catalog';
import { handleLocationChange } from '../../actions/location';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const { selectedBranchFromLocation, locationName } = useSelector(
    (state) => state.locationReducer
  );

  //Extracting locations name from catalog
  const locations = catalog.data.locations.reduce((acc, item) => {
    acc.push({ id: item.dealers_id, name: item.name });
    return acc;
  }, []);

  console.log('LOCATIONS', locations);
  console.log('BRANCHES', selectedBranchFromLocation);
  return (
    <div className='header'>
      <div className='content'> Rental Management System</div>
      <div></div>
      <div></div>
      <div className='content'>
        <select
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
      </div>
    </div>
  );
};
export default Header;
