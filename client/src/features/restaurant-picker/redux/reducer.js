import initialState from './initialState';
import { reducer as getRestaurantReducer } from './getRestaurant';
import { reducer as updateQueryReducer } from './updateQuery';
import { reducer as updateLocationReducer } from './updateLocation';

const reducers = [
  getRestaurantReducer,
  updateQueryReducer,
  updateLocationReducer,
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
