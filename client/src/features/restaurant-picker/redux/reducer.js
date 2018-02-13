import initialState from './initialState';
import { reducer as getRestaurantsReducer } from './getRestaurants';
import { reducer as updateQueryReducer } from './updateQuery';
import { reducer as updateLocationReducer } from './updateLocation';
import { reducer as toggleSelectedArrayReducer } from './toggleSelectedArray';
import { reducer as toggleFinishedReducer } from './toggleFinished';
import { reducer as updateChosenRestaurantReducer } from './updateChosenRestaurant';

const reducers = [
  getRestaurantsReducer,
  updateQueryReducer,
  updateLocationReducer,
  toggleSelectedArrayReducer,
  toggleFinishedReducer,
  updateChosenRestaurantReducer,
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
