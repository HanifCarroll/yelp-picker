import { expect } from 'chai';

import {
  RESTAURANT_PICKER_TOGGLE_PRICE_2,
} from 'src/features/restaurant-picker/redux/constants';

import {
  togglePrice2,
  reducer,
} from 'src/features/restaurant-picker/redux/togglePrice2';

describe('restaurant-picker/redux/togglePrice2', () => {
  it('returns correct action by togglePrice2', () => {
    expect(togglePrice2()).to.have.property('type', RESTAURANT_PICKER_TOGGLE_PRICE_2);
  });

  it('handles action type RESTAURANT_PICKER_TOGGLE_PRICE_2 correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: RESTAURANT_PICKER_TOGGLE_PRICE_2 }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
