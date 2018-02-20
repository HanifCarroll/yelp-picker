import {
  RESTAURANT_PICKER_UPDATE_RESULTS_LIMIT,
} from './constants';

export function updateResultsLimit(limit) {
  return {
    type: RESTAURANT_PICKER_UPDATE_RESULTS_LIMIT,
    limit
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case RESTAURANT_PICKER_UPDATE_RESULTS_LIMIT:
      return {
        ...state,
        form: {...state.form, resultsLimit: action.limit, }
      };

    default:
      return state;
  }
}
