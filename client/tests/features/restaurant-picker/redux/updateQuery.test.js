import { expect } from 'chai';

import {
  RESTAURANT_PICKER_UPDATE_QUERY,
} from 'src/features/restaurant-picker/redux/constants';

import {
  updateQuery,
  reducer,
} from 'src/features/restaurant-picker/redux/updateQuery';

describe('restaurant-picker/redux/updateQuery', () => {
  it('returns correct action by updateQuery', () => {
    expect(updateQuery()).to.have.property('type', RESTAURANT_PICKER_UPDATE_QUERY);
  });

  it('handles action type RESTAURANT_PICKER_UPDATE_QUERY correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: RESTAURANT_PICKER_UPDATE_QUERY }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
