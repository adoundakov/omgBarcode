import { combineReducers } from 'redux';

import ItemReducer from './item_reducer';
import CameraReducer from './camera_reducer';

const RootReducer = combineReducers({
  items: ItemReducer,
  displayCamera: CameraReducer
});

export default RootReducer;
