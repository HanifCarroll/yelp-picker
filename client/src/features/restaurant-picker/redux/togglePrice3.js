import {
  RESTAURANT_PICKER_TOGGLE_PRICE_3,
} from './constants';

export function togglePrice3() {
  return {
    type: RESTAURANT_PICKER_TOGGLE_PRICE_3,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case RESTAURANT_PICKER_TOGGLE_PRICE_3:
      return {
        ...state,
        form: {...state.form, price3: !state.form.price3}
      };

    default:
      return state;
  }
}
