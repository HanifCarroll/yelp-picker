import initialState from './initialState';
import { reducer as getRestaurantsReducer } from './getRestaurants';
import { reducer as updateQueryReducer } from './updateQuery';
import { reducer as updateLocationReducer } from './updateLocation';
import { reducer as toggleSelectedArrayReducer } from './toggleSelectedArray';
import { reducer as toggleFinishedReducer } from './toggleFinished';
import { reducer as updateChosenRestaurantReducer } from './updateChosenRestaurant';
import { reducer as getReviewsReducer } from './getReviews';
import { reducer as updateRadiusReducer } from './updateRadius';
import { reducer as updateResultsLimitReducer } from './updateResultsLimit';
import { reducer as toggleOpenNowReducer } from './toggleOpenNow';
import { reducer as togglePrice1Reducer } from './togglePrice1';
import { reducer as togglePrice2Reducer } from './togglePrice2';
import { reducer as togglePrice3Reducer } from './togglePrice3';
import { reducer as togglePrice4Reducer } from './togglePrice4';

const reducers = [
  getRestaurantsReducer,
  updateQueryReducer,
  updateLocationReducer,
  toggleSelectedArrayReducer,
  toggleFinishedReducer,
  updateChosenRestaurantReducer,
  getReviewsReducer,
  updateRadiusReducer,
  updateResultsLimitReducer,
  toggleOpenNowReducer,
  togglePrice1Reducer,
  togglePrice2Reducer,
  togglePrice3Reducer,
  togglePrice4Reducer,
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
