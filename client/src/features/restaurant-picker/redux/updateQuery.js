import {
  RESTAURANT_PICKER_UPDATE_QUERY,
} from './constants';

export function updateQuery(term) {
  return {
    type: RESTAURANT_PICKER_UPDATE_QUERY,
    term
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case RESTAURANT_PICKER_UPDATE_QUERY:
      return {
        ...state,
        form: {...state.form, query: action.term}
      };

    default:
      return state;
  }
}
