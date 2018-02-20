import { expect } from 'chai';

import {
  RESTAURANT_PICKER_TOGGLE_PRICE_3,
} from 'src/features/restaurant-picker/redux/constants';

import {
  togglePrice3,
  reducer,
} from 'src/features/restaurant-picker/redux/togglePrice3';

describe('restaurant-picker/redux/togglePrice3', () => {
  it('returns correct action by togglePrice3', () => {
    expect(togglePrice3()).to.have.property('type', RESTAURANT_PICKER_TOGGLE_PRICE_3);
  });

  it('handles action type RESTAURANT_PICKER_TOGGLE_PRICE_3 correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: RESTAURANT_PICKER_TOGGLE_PRICE_3 }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
