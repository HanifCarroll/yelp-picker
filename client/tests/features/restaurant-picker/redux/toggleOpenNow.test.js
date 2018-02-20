import { expect } from 'chai';

import {
  RESTAURANT_PICKER_TOGGLE_OPEN_NOW,
} from 'src/features/restaurant-picker/redux/constants';

import {
  toggleOpenNow,
  reducer,
} from 'src/features/restaurant-picker/redux/toggleOpenNow';

describe('restaurant-picker/redux/toggleOpenNow', () => {
  it('returns correct action by toggleOpenNow', () => {
    expect(toggleOpenNow()).to.have.property('type', RESTAURANT_PICKER_TOGGLE_OPEN_NOW);
  });

  it('handles action type RESTAURANT_PICKER_TOGGLE_OPEN_NOW correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: RESTAURANT_PICKER_TOGGLE_OPEN_NOW }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
