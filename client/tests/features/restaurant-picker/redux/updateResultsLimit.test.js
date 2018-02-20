import { expect } from 'chai';

import {
  RESTAURANT_PICKER_UPDATE_RESULTS_LIMIT,
} from 'src/features/restaurant-picker/redux/constants';

import {
  updateResultsLimit,
  reducer,
} from 'src/features/restaurant-picker/redux/updateResultsLimit';

describe('restaurant-picker/redux/updateResultsLimit', () => {
  it('returns correct action by updateResultsLimit', () => {
    expect(updateResultsLimit()).to.have.property('type', RESTAURANT_PICKER_UPDATE_RESULTS_LIMIT);
  });

  it('handles action type RESTAURANT_PICKER_UPDATE_RESULTS_LIMIT correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: RESTAURANT_PICKER_UPDATE_RESULTS_LIMIT }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
