import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Customheader from '../components/Customheader'
import Toptabnav from './Toptabnav'


const Toptabheader = () => {
  return (
    <View style={{flex:1}}>
      <Customheader title={'Mehndi Designs'}/>
      <Toptabnav/>
    </View>
  )
}

export default Toptabheader

const styles = StyleSheet.create({})