import { connect } from 'react-redux';

import Scanner from './scanner';
import { requestItems } from '../actions/item_actions';
import { showCamera, hideCamera } from '../actions/camera_actions';

const mapStateToProps = (state) => ({
   showCamera: state.showCamera,
   items: state.items
 });

 const mapDispatchToProps = (dispatch) => ({
    requestItems: () => dispatch(requestItems()),
    showCamera: () => dispatch(showCamera()),
    hideCamera: () => dispatch(hideCamera())
 });

export default connect(mapStateToProps, mapDispatchToProps)(Scanner);
