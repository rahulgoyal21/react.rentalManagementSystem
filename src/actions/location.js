import { LOCATION_SELECTED } from './types';
import { catalog } from '../catalog';

export const handleLocationChange = (event) => {
  //Find the branches from location input
  const branchesFromLocation = catalog.data.locations.find(
    (item) => item.name === event.target.value
  ).branches;

  return {
    type: LOCATION_SELECTED,
    payload: { branches: branchesFromLocation, location: event.target.value }
  };
};
