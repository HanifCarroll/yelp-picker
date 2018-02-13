import {
  RESTAURANT_PICKER_UPDATE_LOCATION,
} from './constants';

export function updateLocation(location) {
  return {
    type: RESTAURANT_PICKER_UPDATE_LOCATION,
    location
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case RESTAURANT_PICKER_UPDATE_LOCATION:
      return {
        ...state,
        location: action.location
      };

    default:
      return state;
  }
}
