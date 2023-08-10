/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App'; // Comentar para utilizar example.
//import App from './AppExample';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
