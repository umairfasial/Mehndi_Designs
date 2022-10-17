import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Theme from '../utils/Themes';
import Gridchildtab from './Gridchildtab';
import { Africanfoot, Africanhand, Arabicfoot, Arabichand, Floralfoot, Floralhand, Glitterfoot, Glitterhand, Indianfoot, Indianhand, Pakistanifoot, Pakistanihand } from '../Assests/Constants/Dumydata';
import Gridhand from './Gridhand';
import { useEffect, useState } from 'react';

const Tab = createMaterialTopTabNavigator();

const Gridparenttab = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarStyle: {backgroundColor: Theme.Brown,borderBottomWidth:5,borderColor:Theme.lightbrown },
        tabBarLabelStyle: {color: Theme.white},
        tabBarIndicatorStyle: {backgroundColor: Theme.white,height:'100%',},
        tabBarActiveTintColor:Theme.Brown,
        tabBarInactiveTintColor:Theme.white,
        tabBarPressColor:Theme.Mehndi,
        tabBarItemStyle: {
          height: Theme.height / 20,
         marginHorizontal:'2%',
         width:'auto',
                   
          
        },
      }}>
      <Tab.Screen
        name="Floral"
        children={()=> <Gridchildtab hand={Floralhand} foot={Floralfoot} />}
        options={{
          tabBarLabel: 'Floral',
          tabBarLabelStyle: {
            textTransform:'capitalize',
            fontWeight:'bold',
          },
        }}
      />
      <Tab.Screen
        name="Pakistani"
        children={()=> <Gridchildtab hand={Pakistanihand} foot={Pakistanifoot} />}
        options={{tabBarLabel: 'Pakistani',
        tabBarLabelStyle: {
          textTransform:'capitalize',
          fontWeight:'bold',
        },
      }}
      />
      <Tab.Screen
        name="Indian"
        children={()=> <Gridchildtab hand={Indianhand} foot={Indianfoot} />}
        options={{tabBarLabel: 'Indian',
        tabBarLabelStyle: {
          textTransform:'capitalize',
          fontWeight:'bold',
        },
      }}
      />
      <Tab.Screen
        name="Glitter"
        children={()=> <Gridchildtab hand={Glitterhand} foot={Glitterfoot} />}
        options={{tabBarLabel: 'Glitter',
        tabBarLabelStyle: {
          textTransform:'capitalize',
          fontWeight:'bold',
        },
      }}
      />
      <Tab.Screen
        name="Arabic"
        children={()=> <Gridchildtab hand={Arabichand} foot={Arabicfoot} />}
        options={{tabBarLabel: 'Arabic',
        tabBarLabelStyle: {
          textTransform:'capitalize',
          fontWeight:'bold',
        },
      }}
      />
      <Tab.Screen
        name="African"
        children={()=> <Gridchildtab hand={Africanhand} foot={Africanfoot} />}
        options={{tabBarLabel: 'African',
        tabBarLabelStyle: {
          textTransform:'capitalize',
          fontWeight:'bold',
        },
      }}
      />
    </Tab.Navigator>
  );
};

export default Gridparenttab;

const styles = StyleSheet.create({});
