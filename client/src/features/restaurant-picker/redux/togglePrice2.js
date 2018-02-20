import {
  RESTAURANT_PICKER_TOGGLE_PRICE_2,
} from './constants';

export function togglePrice2() {
  return {
    type: RESTAURANT_PICKER_TOGGLE_PRICE_2,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case RESTAURANT_PICKER_TOGGLE_PRICE_2:
      return {
        ...state,
        form: {...state.form, price2: !state.form.price2}
      };

    default:
      return state;
  }
}
