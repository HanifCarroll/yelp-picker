import axios from 'axios';
import {
  RESTAURANT_PICKER_GET_RESTAURANTS_BEGIN,
  RESTAURANT_PICKER_GET_RESTAURANTS_SUCCESS,
  RESTAURANT_PICKER_GET_RESTAURANTS_FAILURE,
  RESTAURANT_PICKER_GET_RESTAURANTS_DISMISS_ERROR,
} from './constants';

// Rekit uses redux-thunk for async actions by default: https://github.com/gaearon/redux-thunk
// If you prefer redux-saga, you can use rekit-plugin-redux-saga: https://github.com/supnate/rekit-plugin-redux-saga
export function getRestaurants(args = {}) {
  return (dispatch, getState) => { // optionally you can have getState as the second argument
    dispatch({
      type: RESTAURANT_PICKER_GET_RESTAURANTS_BEGIN,
    });

    // Return a promise so that you could control UI flow without states in the store.
    // For example: after submit a form, you need to redirect the page to another when succeeds or show some errors message if fails.
    // It's hard to use state to manage it, but returning a promise allows you to easily achieve it.
    // e.g.: handleSubmit() { this.props.actions.submitForm(data).then(()=> {}).catch(() => {}); }
    const promise = new Promise((resolve, reject) => {
      // doRequest is a placeholder Promise. You should replace it with your own logic.
      // See the real-word example at:  https://github.com/supnate/rekit/blob/master/src/features/home/redux/fetchRedditReactjsList.js
      // args.error here is only for test coverage purpose.
      const { query, location } = getState().restaurantPicker;
      const doRequest = axios.post('http://localhost:5000', {
        term: query,
        location: location
      });
      doRequest.then(
        (res) => {
          dispatch({
            type: RESTAURANT_PICKER_GET_RESTAURANTS_SUCCESS,
            data: res,
          });
          resolve(res);
        },
        // Use rejectHandler as the second argument so that render errors won't be caught.
        (err) => {
          dispatch({
            type: RESTAURANT_PICKER_GET_RESTAURANTS_FAILURE,
            data: { error: err },
          });
          reject(err);
        },
      );
    });

    return promise;
  };
}

// Async action saves request error by default, this method is used to dismiss the error info.
// If you don't want errors to be saved in Redux store, just ignore this method.
export function dismissGetRestaurantsError() {
  return {
    type: RESTAURANT_PICKER_GET_RESTAURANTS_DISMISS_ERROR,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case RESTAURANT_PICKER_GET_RESTAURANTS_BEGIN:
      // Just after a request is sent
      return {
        ...state,
        getRestaurantsPending: true,
        getRestauranstError: null,
        chosen: {},
        finished: false,
        restaurants: []
      };

    case RESTAURANT_PICKER_GET_RESTAURANTS_SUCCESS:
      // The request is success
      return {
        ...state,
        getRestaurantsPending: false,
        getRestaurantsError: null,
        restaurants: action.data.data
      };

    case RESTAURANT_PICKER_GET_RESTAURANTS_FAILURE:
      // The request is failed
      return {
        ...state,
        getRestaurantsPending: false,
        getRestaurantsError: action.data.error,
      };

    case RESTAURANT_PICKER_GET_RESTAURANTS_DISMISS_ERROR:
      // Dismiss the request failure error
      return {
        ...state,
        getRestaurantsError: null,
      };

    default:
      return state;
  }
}
