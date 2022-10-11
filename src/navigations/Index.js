import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Welcomescr from '../Screens/Welcomescr';
import Homescreen from '../Screens/Homescreen';
import Imagescr from '../Screens/Imagescr';
import Footdesignscr from '../Screens/Footdesignscr';
import Categoriesscr from '../Screens/Categoriesscr';
import Moredesignscr from '../Screens/Moredesignscr';
import Drawernav from './Drawernav';
import Toptabnav from '../Screens/Toptabnav';
import Toptabheader from '../Screens/Toptabheader';
import Bottomtab from './Bottomtab';
import Favrtimgsrc from '../Screens/Favrtimgsrc';
import Savedscr from '../Screens/Savedscr';
import Customheader from '../components/Customheader';
import Camerascr from '../Screens/Camerascr';



const Stack = createNativeStackNavigator();
const Index = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Welcomescr'  screenOptions={{headerShown:false}}>
      <Stack.Screen name="Welcomescr" component={Welcomescr} />
      <Stack.Screen name="Homescreen" component={Homescreen} />
      <Stack.Screen name="Imagescr" component={Imagescr}  />
      <Stack.Screen name="Footdesignscr" component={Footdesignscr} />
      <Stack.Screen name="Categoriesscr" component={Categoriesscr} />
      <Stack.Screen name="Moredesignscr" component={Moredesignscr} />
      <Stack.Screen name="Toptabnav" component={Toptabnav} />
      <Stack.Screen name="Toptabheader" component={Toptabheader} />
      <Stack.Screen name="Bottomtab" component={Bottomtab} />
      <Stack.Screen name="Favrtimgsrc" component={Favrtimgsrc} />
      <Stack.Screen name="Savedscr" component={Savedscr} />
      <Stack.Screen name="Customheader" component={Customheader} />
      <Stack.Screen name="Camerascr" component={Camerascr} />
      {/* <Stack.Screen name="Drawernav" component={Drawernav} /> */}
      
      
      

      
    </Stack.Navigator>
    
  </NavigationContainer>
  )
}

export default Index

const styles = StyleSheet.create({})