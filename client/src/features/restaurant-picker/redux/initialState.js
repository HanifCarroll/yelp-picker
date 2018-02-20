// Initial state is the place you define all initial values for the Redux store of the feature.
// In the 'standard' way, initialState is defined in reducers: http://redux.js.org/docs/basics/Reducers.html
// But when application grows, there will be multiple reducers files, it's not intuitive what data is managed by the whole store.
// So Rekit extracts the initial state definition into a separate module so that you can have
// a quick view about what data is used for the feature, at any time.

// NOTE: initialState constant is necessary so that Rekit could auto add initial state when creating async actions.
const initialState = {
  getRestaurantsPending: false,
  getRestaurantsError: null,
  chosenRestaurant: {},
  finished: false,
  form: {
    location: '',
    query: '',
    radius: 15,
    resultsLimit: 20,
    openNow: false,
    price1: true,
    price2: true,
    price3: true,
    price4: true,
    priceSearch: []
  },
  restaurants: [],
  selected: [],
  getReviewsPending: false,
  getReviewsError: null,
  reviews: []
};

export default initialState;
