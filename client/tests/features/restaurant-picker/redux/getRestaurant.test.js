import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { expect } from 'chai';

import {
  RESTAURANT_PICKER_GET_RESTAURANT_BEGIN,
  RESTAURANT_PICKER_GET_RESTAURANT_SUCCESS,
  RESTAURANT_PICKER_GET_RESTAURANT_FAILURE,
  RESTAURANT_PICKER_GET_RESTAURANT_DISMISS_ERROR,
} from 'src/features/restaurant-picker/redux/constants';

import {
  getRestaurant,
  dismissGetRestaurantError,
  reducer,
} from 'src/features/restaurant-picker/redux/getRestaurant';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('restaurant-picker/redux/getRestaurant', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when getRestaurant succeeds', () => {
    const store = mockStore({});

    return store.dispatch(getRestaurant())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).to.have.property('type', RESTAURANT_PICKER_GET_RESTAURANT_BEGIN);
        expect(actions[1]).to.have.property('type', RESTAURANT_PICKER_GET_RESTAURANT_SUCCESS);
      });
  });

  it('dispatches failure action when getRestaurant fails', () => {
    const store = mockStore({});

    return store.dispatch(getRestaurant({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).to.have.property('type', RESTAURANT_PICKER_GET_RESTAURANT_BEGIN);
        expect(actions[1]).to.have.property('type', RESTAURANT_PICKER_GET_RESTAURANT_FAILURE);
        expect(actions[1]).to.have.nested.property('data.error').that.exist;
      });
  });

  it('returns correct action by dismissGetRestaurantError', () => {
    const expectedAction = {
      type: RESTAURANT_PICKER_GET_RESTAURANT_DISMISS_ERROR,
    };
    expect(dismissGetRestaurantError()).to.deep.equal(expectedAction);
  });

  it('handles action type RESTAURANT_PICKER_GET_RESTAURANT_BEGIN correctly', () => {
    const prevState = { getRestaurantPending: false };
    const state = reducer(
      prevState,
      { type: RESTAURANT_PICKER_GET_RESTAURANT_BEGIN }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getRestaurantPending).to.be.true;
  });

  it('handles action type RESTAURANT_PICKER_GET_RESTAURANT_SUCCESS correctly', () => {
    const prevState = { getRestaurantPending: true };
    const state = reducer(
      prevState,
      { type: RESTAURANT_PICKER_GET_RESTAURANT_SUCCESS, data: {} }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getRestaurantPending).to.be.false;
  });

  it('handles action type RESTAURANT_PICKER_GET_RESTAURANT_FAILURE correctly', () => {
    const prevState = { getRestaurantPending: true };
    const state = reducer(
      prevState,
      { type: RESTAURANT_PICKER_GET_RESTAURANT_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getRestaurantPending).to.be.false;
    expect(state.getRestaurantError).to.exist;
  });

  it('handles action type RESTAURANT_PICKER_GET_RESTAURANT_DISMISS_ERROR correctly', () => {
    const prevState = { getRestaurantError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: RESTAURANT_PICKER_GET_RESTAURANT_DISMISS_ERROR }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getRestaurantError).to.be.null;
  });
});
