import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import Camera from 'react-native-camera';
import Header from './header';
import { fetchItems } from '../util/item_util';

class Scanner extends Component {
  constructor (props) {
    super(props);
    this.showCamera = this.props.showCamera.bind(this);
    this.hideCamera = this.props.hideCamera.bind(this);
    this.processBarcode = this.processBarcode.bind(this);
  }

  componentWillMount() {
    this.props.fetchItems();
  }

  processBarcode(e) {
    const itemKeys = Object.keys(this.props.items);
    if (itemKeys.includes(e.data)) {
      alert(`Found ${this.props.items[e.data].name} with code ${e.data}`);
    } else {
      alert(`No item found with code ${e.data}`);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Scanner'}/>
        <Camera
          ref={cam => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          onBarCodeRead={this.processBarcode}>
          <Text style={styles.barcodeOverlay}>Place Barcode in Box</Text>
        </Camera>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: (Dimensions.get('window').height - 60),
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
  barcodeOverlay: {
    borderColor: '#F11009',
    color: '#F11009',
    borderWidth: 5,
    bottom: 200,
    paddingTop: 125,
    paddingBottom: 15,
    paddingHorizontal: 75,
    textAlignVertical: 'bottom',
    textAlign: 'center',
    lineHeight: 2,
    elevation: 2
  }
});

export default Scanner;
