import { expect } from 'chai';

import {
  RESTAURANT_PICKER_TOGGLE_PRICE_1,
} from 'src/features/restaurant-picker/redux/constants';

import {
  togglePrice1,
  reducer,
} from 'src/features/restaurant-picker/redux/togglePrice1';

describe('restaurant-picker/redux/togglePrice1', () => {
  it('returns correct action by togglePrice1', () => {
    expect(togglePrice1()).to.have.property('type', RESTAURANT_PICKER_TOGGLE_PRICE_1);
  });

  it('handles action type RESTAURANT_PICKER_TOGGLE_PRICE_1 correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: RESTAURANT_PICKER_TOGGLE_PRICE_1 }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
