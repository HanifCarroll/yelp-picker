import { expect } from 'chai';

import {
  RESTAURANT_PICKER_TOGGLE_PRICE_4,
} from 'src/features/restaurant-picker/redux/constants';

import {
  togglePrice4,
  reducer,
} from 'src/features/restaurant-picker/redux/togglePrice4';

describe('restaurant-picker/redux/togglePrice4', () => {
  it('returns correct action by togglePrice4', () => {
    expect(togglePrice4()).to.have.property('type', RESTAURANT_PICKER_TOGGLE_PRICE_4);
  });

  it('handles action type RESTAURANT_PICKER_TOGGLE_PRICE_4 correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: RESTAURANT_PICKER_TOGGLE_PRICE_4 }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
