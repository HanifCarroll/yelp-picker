import {
  RESTAURANT_PICKER_UPDATE_RADIUS,
} from './constants';

export function updateRadius(radius) {
  return {
    type: RESTAURANT_PICKER_UPDATE_RADIUS,
    radius
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case RESTAURANT_PICKER_UPDATE_RADIUS:
      return {
        ...state,
        form: {...state.form, radius: action.radius}
      };

    default:
      return state;
  }
}
