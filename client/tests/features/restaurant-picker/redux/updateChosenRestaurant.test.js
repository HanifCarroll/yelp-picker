import { expect } from 'chai';

import {
  RESTAURANT_PICKER_UPDATE_CHOSEN_RESTAURANT,
} from 'src/features/restaurant-picker/redux/constants';

import {
  updateChosenRestaurant,
  reducer,
} from 'src/features/restaurant-picker/redux/updateChosenRestaurant';

describe('restaurant-picker/redux/updateChosenRestaurant', () => {
  it('returns correct action by updateChosenRestaurant', () => {
    expect(updateChosenRestaurant()).to.have.property('type', RESTAURANT_PICKER_UPDATE_CHOSEN_RESTAURANT);
  });

  it('handles action type RESTAURANT_PICKER_UPDATE_CHOSEN_RESTAURANT correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: RESTAURANT_PICKER_UPDATE_CHOSEN_RESTAURANT }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
