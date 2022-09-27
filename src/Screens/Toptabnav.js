import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Homescreen from '../Screens/Homescreen';
import Footdesignscr from '../Screens/Footdesignscr';
import Categoriesscr from '../Screens/Categoriesscr';
import Moredesignscr from '../Screens/Moredesignscr';
import Customheader from '../components/Customheader';
import Theme from '../utils/Themes';
const Tab = createMaterialTopTabNavigator();

const Toptabnav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled:true,
        tabBarStyle: {backgroundColor: Theme.Darkbrown,},
        tabBarLabelStyle:{color:Theme.white,},
        
        tabBarIndicatorStyle:{backgroundColor:Theme.white},
        tabBarItemStyle:{height:Theme.height/22,marginTop:'-8%',width:'auto'}
      }}>
      <Tab.Screen name="Homescreen" component={Homescreen} options={{tabBarLabel:'Hand Designs'}} />
      <Tab.Screen name="Footdesignscr" component={Footdesignscr} options={{tabBarLabel:'Foot Designs',}} />
      <Tab.Screen name="Categoriesscr" component={Categoriesscr} options={{tabBarLabel:'Categories'}} />
      <Tab.Screen name="Moredesignscr" component={Moredesignscr} options={{tabBarLabel:'More Designs'}} />
    </Tab.Navigator>
  );
};

export default Toptabnav;

const styles = StyleSheet.create({});
