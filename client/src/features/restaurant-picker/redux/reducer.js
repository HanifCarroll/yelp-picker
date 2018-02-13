import initialState from './initialState';
import { reducer as getRestaurantReducer } from './getRestaurant';
import { reducer as updateQueryReducer } from './updateQuery';
import { reducer as updateLocationReducer } from './updateLocation';
import { reducer as toggleSelectedArrayReducer } from './toggleSelectedArray';

const reducers = [
  getRestaurantReducer,
  updateQueryReducer,
  updateLocationReducer,
  toggleSelectedArrayReducer,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
