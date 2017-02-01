import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store/store';
import ScannerContainer from './src/components/scanner_container';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ScannerContainer />
  </Provider>
);

AppRegistry.registerComponent('barcodeScanner', () => App);
