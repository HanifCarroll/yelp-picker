import {
  RESTAURANT_PICKER_TOGGLE_PRICE_1,
} from './constants';

export function togglePrice1() {
  return {
    type: RESTAURANT_PICKER_TOGGLE_PRICE_1,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case RESTAURANT_PICKER_TOGGLE_PRICE_1:
      return {
        ...state,
        form: {...state.form, price1: !state.form.price1}
      };

    default:
      return state;
  }
}
