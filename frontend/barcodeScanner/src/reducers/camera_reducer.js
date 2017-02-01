import { SHOW_CAMERA, HIDE_CAMERA } from '../actions/camera_actions';

const CameraReducer = (state = {}, action) => {
  switch (action.type) {
    case SHOW_CAMERA:
      return true;
    case HIDE_CAMERA:
      return false;
    default:
      return state;
  }
};

export default CameraReducer;
