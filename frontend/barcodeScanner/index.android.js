import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import Header from './src/components/header';
import Scanner from './src/components/camera';

const App = () => (
    <Scanner />
);

AppRegistry.registerComponent('barcodeScanner', () => App);
