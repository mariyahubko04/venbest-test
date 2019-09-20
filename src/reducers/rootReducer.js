import { combineReducers } from 'redux';
import {
  peoples,
  peoplesHasErrored,
  peoplesIsLoading,
  filterPeople } from './peoples';

export default combineReducers({
    peoples,
    peoplesHasErrored,
    peoplesIsLoading,
    filterPeople
});
