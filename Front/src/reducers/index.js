import { combineReducers } from 'redux';

import userReducer from '../reducers/user';
import collectionsReducer from '../reducers/collections';
import categoriesReducer from '../reducers/categories';
import favoritesReducer from '../reducers/favorites';
import createUserReducer from '../reducers/createUser';
import sliderReducer from '../reducers/slider';
import editUserReducer from '../reducers/editUser';
import ordersReducer from '../reducers/orders';
<<<<<<< HEAD
import statusReducer from '../reducers/status';
=======
import productsReducer from '../reducers/products';
>>>>>>> front
// on importer les différents reducers

const combineReducer = combineReducers({
  user: userReducer,
  collections: collectionsReducer,
  categories: categoriesReducer,
  favorites: favoritesReducer,
  createUser: createUserReducer,
  slider: sliderReducer,
  editUser: editUserReducer,
  orders: ordersReducer,
<<<<<<< HEAD
  status: statusReducer,
=======
  products: productsReducer,
>>>>>>> front
  // on combine tous les reducers
});

export default combineReducer;
