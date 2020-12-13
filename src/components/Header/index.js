import React, { useState } from 'react';
import './header.css';
import { catalog } from '../../catalog';
import { handleLocationChange } from '../../actions/location';
import { useSelector, useDispatch } from 'react-redux';
import { handleBranchChange } from '../../actions/branch';
import { useHistory, Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [openBranchesOptions, setOpenBranchesOption] = useState(false);

  //Fetching branches and locationName from redux store
  const { selectedBranchFromLocation, locationName } = useSelector(
    (state) => state.locationReducer
  );

  //Extracting locations name from catalog
  const locations = catalog.data.locations.reduce((acc, item) => {
    acc.push({ id: item.dealers_id, name: item.name });
    return acc;
  }, []);

  //Handler function
  const handleInputChange = (event) => {
    dispatch(handleBranchChange(event, selectedBranchFromLocation));
    history.push(`/categories/${event.target.dataset.id}`);
    setOpenBranchesOption(false);
  };

  return (
    <div className='header'>
      <Link to='/' className='tilteStyle'>
        <div className='content'> Rental Management System</div>
      </Link>
      <div className='content'>
        {/* Location Dropdown */}
        <select
          style={{ padding: '5px' }}
          value={locationName}
          onChange={(event) => {
            dispatch(handleLocationChange(event));
            setOpenBranchesOption(true);
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

        {/* Branches Dropdown */}
        <div className='branches' onClick={(event) => handleInputChange(event)}>
          {selectedBranchFromLocation.length > 0 &&
            openBranchesOptions &&
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
