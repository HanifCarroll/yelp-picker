import { expect } from 'chai';

import {
  RESTAURANT_PICKER_TOGGLE_FINISHED,
} from 'src/features/restaurant-picker/redux/constants';

import {
  toggleFinished,
  reducer,
} from 'src/features/restaurant-picker/redux/toggleFinished';

describe('restaurant-picker/redux/toggleFinished', () => {
  it('returns correct action by toggleFinished', () => {
    expect(toggleFinished()).to.have.property('type', RESTAURANT_PICKER_TOGGLE_FINISHED);
  });

  it('handles action type RESTAURANT_PICKER_TOGGLE_FINISHED correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: RESTAURANT_PICKER_TOGGLE_FINISHED }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
