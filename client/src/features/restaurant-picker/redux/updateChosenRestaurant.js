import {
  RESTAURANT_PICKER_UPDATE_CHOSEN_RESTAURANT,
} from './constants';

export function updateChosenRestaurant(restaurant) {
  return {
    type: RESTAURANT_PICKER_UPDATE_CHOSEN_RESTAURANT,
    data: restaurant
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case RESTAURANT_PICKER_UPDATE_CHOSEN_RESTAURANT:
      return {
        ...state,
        chosenRestaurant: action.data
      };

    default:
      return state;
  }
}
