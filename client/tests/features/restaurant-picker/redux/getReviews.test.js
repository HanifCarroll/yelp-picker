import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { expect } from 'chai';

import {
  RESTAURANT_PICKER_GET_REVIEWS_BEGIN,
  RESTAURANT_PICKER_GET_REVIEWS_SUCCESS,
  RESTAURANT_PICKER_GET_REVIEWS_FAILURE,
  RESTAURANT_PICKER_GET_REVIEWS_DISMISS_ERROR,
} from 'src/features/restaurant-picker/redux/constants';

import {
  getReviews,
  dismissGetReviewsError,
  reducer,
} from 'src/features/restaurant-picker/redux/getReviews';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('restaurant-picker/redux/getReviews', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when getReviews succeeds', () => {
    const store = mockStore({});

    return store.dispatch(getReviews())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).to.have.property('type', RESTAURANT_PICKER_GET_REVIEWS_BEGIN);
        expect(actions[1]).to.have.property('type', RESTAURANT_PICKER_GET_REVIEWS_SUCCESS);
      });
  });

  it('dispatches failure action when getReviews fails', () => {
    const store = mockStore({});

    return store.dispatch(getReviews({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).to.have.property('type', RESTAURANT_PICKER_GET_REVIEWS_BEGIN);
        expect(actions[1]).to.have.property('type', RESTAURANT_PICKER_GET_REVIEWS_FAILURE);
        expect(actions[1]).to.have.nested.property('data.error').that.exist;
      });
  });

  it('returns correct action by dismissGetReviewsError', () => {
    const expectedAction = {
      type: RESTAURANT_PICKER_GET_REVIEWS_DISMISS_ERROR,
    };
    expect(dismissGetReviewsError()).to.deep.equal(expectedAction);
  });

  it('handles action type RESTAURANT_PICKER_GET_REVIEWS_BEGIN correctly', () => {
    const prevState = { getReviewsPending: false };
    const state = reducer(
      prevState,
      { type: RESTAURANT_PICKER_GET_REVIEWS_BEGIN }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getReviewsPending).to.be.true;
  });

  it('handles action type RESTAURANT_PICKER_GET_REVIEWS_SUCCESS correctly', () => {
    const prevState = { getReviewsPending: true };
    const state = reducer(
      prevState,
      { type: RESTAURANT_PICKER_GET_REVIEWS_SUCCESS, data: {} }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getReviewsPending).to.be.false;
  });

  it('handles action type RESTAURANT_PICKER_GET_REVIEWS_FAILURE correctly', () => {
    const prevState = { getReviewsPending: true };
    const state = reducer(
      prevState,
      { type: RESTAURANT_PICKER_GET_REVIEWS_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getReviewsPending).to.be.false;
    expect(state.getReviewsError).to.exist;
  });

  it('handles action type RESTAURANT_PICKER_GET_REVIEWS_DISMISS_ERROR correctly', () => {
    const prevState = { getReviewsError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: RESTAURANT_PICKER_GET_REVIEWS_DISMISS_ERROR }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getReviewsError).to.be.null;
  });
});
