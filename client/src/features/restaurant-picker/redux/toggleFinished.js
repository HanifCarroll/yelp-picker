import {
  RESTAURANT_PICKER_TOGGLE_FINISHED,
} from './constants';

export function toggleFinished() {
  return {
    type: RESTAURANT_PICKER_TOGGLE_FINISHED,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case RESTAURANT_PICKER_TOGGLE_FINISHED:
      return {
        ...state,
        finished: !state.finished,
      };

    default:
      return state;
  }
}
