import { expect } from 'chai';

import {
  RESTAURANT_PICKER_UPDATE_RADIUS,
} from 'src/features/restaurant-picker/redux/constants';

import {
  updateRadius,
  reducer,
} from 'src/features/restaurant-picker/redux/updateRadius';

describe('restaurant-picker/redux/updateRadius', () => {
  it('returns correct action by updateRadius', () => {
    expect(updateRadius()).to.have.property('type', RESTAURANT_PICKER_UPDATE_RADIUS);
  });

  it('handles action type RESTAURANT_PICKER_UPDATE_RADIUS correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: RESTAURANT_PICKER_UPDATE_RADIUS }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
