import axios from 'axios';
import apiUrl from 'src/utils/api';
import { saveProducts, FETCH_PRODUCTS } from '../actions/products';

export default (store) => (next) => (action) => {

  switch (action.type) {
    case FETCH_PRODUCTS:
      axios.get(`${apiUrl()}products/categories/1`)
        .then((response) => {
          //console.log(response.data);
          store.dispatch(saveProducts(response.data));
        }).catch((error) => {
          console.log('error');
        }).finally((response) => {

        });
      next(action);
      break;
    default:
      next(action);
  }

};
