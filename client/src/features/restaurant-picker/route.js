import {
  DefaultPage,
} from './';

export default {
  path: 'restaurant-picker',
  name: 'Restaurant picker',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
  ],
};
