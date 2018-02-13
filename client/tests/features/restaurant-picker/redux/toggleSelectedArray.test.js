import { expect } from 'chai';

import {
  RESTAURANT_PICKER_TOGGLE_SELECTED_ARRAY,
} from 'src/features/restaurant-picker/redux/constants';

import {
  toggleSelectedArray,
  reducer,
} from 'src/features/restaurant-picker/redux/toggleSelectedArray';

describe('restaurant-picker/redux/toggleSelectedArray', () => {
  it('returns correct action by toggleSelectedArray', () => {
    expect(toggleSelectedArray()).to.have.property('type', RESTAURANT_PICKER_TOGGLE_SELECTED_ARRAY);
  });

  it('handles action type RESTAURANT_PICKER_TOGGLE_SELECTED_ARRAY correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: RESTAURANT_PICKER_TOGGLE_SELECTED_ARRAY }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
