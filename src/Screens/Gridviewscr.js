import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Customheader from '../components/Customheader'
import Gridparenttab from './Gridparenttab'
import Theme from '../utils/Themes'


const Gridviewscr = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:Theme.Mehndi}}>
      <Customheader 
      captpress={() => navigation.navigate('Camerascr')}
      fvrtpress={() => navigation.navigate('Savedscr')}
      title={'Mehndi Designs'}
      />
      <Gridparenttab />
    </View>
  )
}

export default Gridviewscr

const styles = StyleSheet.create({})