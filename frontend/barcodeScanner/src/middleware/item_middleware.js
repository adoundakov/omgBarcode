import { fetchItems, receiveItems } from '../util/item_util';
import { REQUEST_ITEMS } from '../actions/item_actions';

const ItemMiddleware = ({getState, dispatch}) => next => action => {
  const fetchItemsSuccess = items => dispatch(receiveItems(items);
  const fetchItemsError = error => console.log(error);

  switch (action.type) {
    case REQUEST_ITEMS:
      fetchItems(fetchItemsSuccess, fetchItemsError);
      return next(action);
    default:
      return next(action);
  }
};

export default ItemMiddleware;
