/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Custombox from './src/components/Custombox';
import Custombtn from './src/components/Custombtn';
import Customheader from './src/components/Customheader';
import Footdesignscr from './src/Screens/Footdesignscr';
import Homescreen from './src/Screens/Homescreen';
import Welcomescr from './src/Screens/Welcomescr';
import Customcatg from './src/components/Customcatg';
import Categoriesscr from './src/Screens/Categoriesscr';
import Imagescr from './src/Screens/Imagescr';

AppRegistry.registerComponent(appName, () =>App);
