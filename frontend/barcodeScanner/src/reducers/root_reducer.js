import { combineReducers } from 'redux';

import ItemReducer from './item_reducer';
import CameraReducer from './camera_reducer';

const RootReducer = combineReducers({
  items: ItemReducer,
  showCamera: CameraReducer
});

export default RootReducer;
