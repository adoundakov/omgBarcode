import { RECEIVE_ITEMS } from '../actions/item_actions';

const ItemReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ITEMS:
      return action.items;
    default:
      return state;
  }
};

export default ItemReducer;
