import { applyMiddleware } from 'redux';
import ItemMiddleware from './item_middleware';

const RootMiddleware = applyMiddleware(
  ItemMiddleware
);

export default RootMiddleware;
