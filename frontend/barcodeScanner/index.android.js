import React from 'react';
import { AppRegistry } from 'react-native';

import Scanner from './src/components/camera';

const App = () => (
    <Scanner />
);

AppRegistry.registerComponent('barcodeScanner', () => App);
