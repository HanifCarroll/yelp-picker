import {
  DefaultPage,
} from './';

export default {
  path: '/',
  name: '/',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
  ],
};