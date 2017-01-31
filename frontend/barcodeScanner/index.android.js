// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';

// import Header from './src/components/header';
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

import BadInstagramCloneApp from './src/components/camera';

const App = () => (
  <BadInstagramCloneApp />
);

AppRegistry.registerComponent('barcodeScanner', () => App);
