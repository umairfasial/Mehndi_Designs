import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Toptabheader from '../Screens/Toptabheader';
import Savedscr from '../Screens/Savedscr';
import Gridviewscr from '../Screens/Gridviewscr';
import Camerascr from '../Screens/Camerascr';
import Explorescr from '../Screens/Explorescr';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Theme from '../utils/Themes';


const Tab = createBottomTabNavigator();

const Bottomtab = () => {
  return (
    
    <Tab.Navigator
    
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: Theme.lightbrown,height:'7%'},
        tabBarActiveTintColor:Theme.white,
      }}>
      <Tab.Screen
        name="Toptabheader"
        component={Toptabheader}
        options={{ 
          tabBarIcon: ({color}) => (
            <Icon name="home" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Savedscr"
        component={Savedscr}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="favorite" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Gridviewscr"
        component={Gridviewscr}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="grid" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Camerascr"
        component={Camerascr}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="camera" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Explorescr"
        component={Explorescr}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="google-play" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Bottomtab;

const styles = StyleSheet.create({});
