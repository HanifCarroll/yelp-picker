import {
  RESTAURANT_PICKER_TOGGLE_OPEN_NOW,
} from './constants';

export function toggleOpenNow() {
  return {
    type: RESTAURANT_PICKER_TOGGLE_OPEN_NOW,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case RESTAURANT_PICKER_TOGGLE_OPEN_NOW:
      return {
        ...state,
        form: {...state.form, openNow: !state.form.openNow}
      };

    default:
      return state;
  }
}
