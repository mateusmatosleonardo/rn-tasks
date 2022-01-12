/**
 * @format
 */

import {AppRegistry} from 'react-native';
// Apontando para TaskList, para ser a rota principal
import TasksList from './src/screens/TasksList';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => TasksList);
