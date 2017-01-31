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

class Scanner extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Scanner'}/>
        <Camera

          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          onBarCodeRead={this.processBarcode.bind(this)}>
        </Camera>
      </View>
    );
  }

  processBarcode(e) {
    alert(`BARCODE! Type: ${e.type} UPC: ${e.data}`);
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
  }
});

export default Scanner;
