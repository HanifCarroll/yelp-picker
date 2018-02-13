import {
  RESTAURANT_PICKER_TOGGLE_SELECTED_ARRAY,
} from './constants';

export function toggleSelectedArray(element) {
  return {
    type: RESTAURANT_PICKER_TOGGLE_SELECTED_ARRAY,
    data: element,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case RESTAURANT_PICKER_TOGGLE_SELECTED_ARRAY:
    // If the clicked element exists in the array, remove it.
      if (state.selected.includes(action.data)) {
        return {
          ...state,
          selected: state.selected.filter(selected => selected != action.data)
        };
      }
      // If the clicked element does not exist in the array, add it.
      return {
        ...state,
        selected: [...state.selected, action.data]
      };

    default:
      return state;
  }
}
