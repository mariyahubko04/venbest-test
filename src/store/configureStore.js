import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducerPeople from '../reducers/peoples';

const initialState = {
  loadedPeoples: [],
  filterPeoples: [],
  peoplesHasErrored: false,
  peoplesIsLoading: false,
  valueWomanChekbox: false,
  valueManChekbox: false,
  valueAgeInput: '',
  valueSurnameInput: '',
  valueNameInput: '',
};

const store = createStore(reducerPeople, initialState, applyMiddleware(thunk));

export default store;
