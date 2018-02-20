import {
  RESTAURANT_PICKER_TOGGLE_PRICE_4,
} from './constants';

export function togglePrice4() {
  return {
    type: RESTAURANT_PICKER_TOGGLE_PRICE_4,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case RESTAURANT_PICKER_TOGGLE_PRICE_4:
      return {
        ...state,
        form: {...state.form, price4: !state.form.price4}
      };

    default:
      return state;
  }
}
