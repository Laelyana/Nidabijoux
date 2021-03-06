import { SAVE_PRODUCTS } from '../actions/products';

const initialState = {
  products: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    default:
      return {
        ...state,
      };
  }
};
