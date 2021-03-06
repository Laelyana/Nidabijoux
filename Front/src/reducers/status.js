import { SAVE_STATUS } from '../actions/site';

const initialState = {
  status: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return {
        ...state,
      };
  }
};
