import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Linking
} from 'react-native';

import Camera from 'react-native-camera';
import Header from './header';

class Scanner extends Component {
  constructor (props) {
    super(props);
    this.showCamera = props.showCamera.bind(this);
    this.hideCamera = props.hideCamera.bind(this);
    this.processBarcode = this.processBarcode.bind(this);
  }

  componentWillMount() {
    this.props.requestItems();
  }

  processBarcode(e) {
    this.hideCamera();
    const itemKeys = Object.keys(this.props.items);
    let code = e.data.slice(1);
    if (itemKeys.includes(code)) {
      let item = this.props.items[code];
      alert(`Found ${item.name} with code ${code}`);
    } else {
      alert(`No item found with code ${code}`);
    }
  }

  render() {
    if (this.props.displayCamera) {
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
            <Text style={styles.closeCamera} onPress={this.hideCamera}>close</Text>
            <Text style={styles.barcodeOverlay}>Place Barcode in Box</Text>
          </Camera>
        </View>
      );
    } else {
      return (
        <View style={styles.welcome}>
          <Text style={styles.info}>
            Welcome to the omgBarcode Scanner. Please tap 'Start Scanner' to get started!
          </Text>
          <Text style={styles.info}>
            This app was built by Alexander Doundakov as a challenge.
          </Text>
          <Text style={styles.showButton}
                onPress={this.showCamera}>Start Scanner
          </Text>
          <Text style={styles.showButton}
                onPress={() => Linking.openURL('http://github.com/adoundakov/omgBarcode')}>
                GitHub
          </Text>
        </View>
      );
    }
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
  },
  showButton: {
    color: 'white',
    backgroundColor: '#5DB745',
    paddingVertical: 14,
    paddingHorizontal: 28,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 28,
    borderRadius: 4
  },
  closeCamera: {
    position: 'absolute',
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
    right: 15,
    top: 25,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 4,
  },
  info: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    paddingHorizontal: 14
  },
  welcome: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 50
  }
});

export default Scanner;
