import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Homescreen from '../Screens/Homescreen';
import Footdesignscr from '../Screens/Footdesignscr';
import Categoriesscr from '../Screens/Categoriesscr';
import Moredesignscr from '../Screens/Moredesignscr';
import Customheader from '../components/Customheader';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Theme from '../utils/Themes';
import Gridviewscr from './Gridviewscr';
import Gridparenttab from './Gridparenttab';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const Toptabnav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarScrollEnabled:true,
        tabBarStyle: {backgroundColor: Theme.Darkbrown,},
        tabBarLabelStyle:{color:Theme.white,},
        
        tabBarIndicatorStyle:{backgroundColor:Theme.white},
        tabBarItemStyle:{height:Theme.height/22,marginTop:'-5%',width:'auto',paddingHorizontal:'4%'}
      }}>
      <Tab.Screen name="Homescreen" component={Homescreen} options={{tabBarLabel:'Hand Designs'}} />
      <Tab.Screen name="Footdesignscr" component={Footdesignscr} options={{tabBarLabel:'Foot Designs',}} />
      <Tab.Screen name="Categoriesscr" component={Categoriesscr} options={{tabBarLabel:'Categories'}} />
      {/* <Tab.Screen name="Moredesignscr" component={Moredesignscr} options={{tabBarLabel:'More Designs'}} /> */}
    </Tab.Navigator>
  );
};


export default Toptabnav;

//  export const TopTabStack = () =>{
//   return(
//     <Stack.Navigator initialRouteName='Toptabnav' screenOptions={{headerShown:false}}>
//     <Stack.Screen name="Toptabnav" component={Toptabnav} />
//     <Stack.Screen name="Gridparenttab" component={Gridparenttab} />
//     </Stack.Navigator>
//   );
// }

const styles = StyleSheet.create({});
