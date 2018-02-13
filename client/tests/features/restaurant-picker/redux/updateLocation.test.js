import { expect } from 'chai';

import {
  RESTAURANT_PICKER_UPDATE_LOCATION,
} from 'src/features/restaurant-picker/redux/constants';

import {
  updateLocation,
  reducer,
} from 'src/features/restaurant-picker/redux/updateLocation';

describe('restaurant-picker/redux/updateLocation', () => {
  it('returns correct action by updateLocation', () => {
    expect(updateLocation()).to.have.property('type', RESTAURANT_PICKER_UPDATE_LOCATION);
  });

  it('handles action type RESTAURANT_PICKER_UPDATE_LOCATION correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: RESTAURANT_PICKER_UPDATE_LOCATION }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
