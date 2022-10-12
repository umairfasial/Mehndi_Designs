import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Gridhand from './Gridhand';
import Gridfoot from './Gridfoot';
import Theme from '../utils/Themes';

const Tab = createMaterialTopTabNavigator();

const Gridchildtab = ({hand,foot}) => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarScrollEnabled:true,
      tabBarStyle: {backgroundColor: Theme.Darkbrown,},
      tabBarLabelStyle:{color:Theme.white,},
      
      tabBarIndicatorStyle:{backgroundColor:Theme.white},
      tabBarItemStyle:{height:Theme.height/22,marginTop:'-2%',width:'auto',paddingHorizontal:50}
    }}>
    <Tab.Screen name="Gridhand" children={()=> <Gridhand data={hand} />} options={{tabBarLabel:'Hand Designs'}} />
    <Tab.Screen name="Gridfoot" children={()=> <Gridhand data={foot} />} options={{tabBarLabel:'Foot Designs',}} />
    
  </Tab.Navigator>
  )
}

export default Gridchildtab

const styles = StyleSheet.create({})