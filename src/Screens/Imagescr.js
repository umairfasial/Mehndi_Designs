import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Customheader from '../components/Customheader'
import Theme from '../utils/Themes'
import FastImage from 'react-native-fast-image'

const Imagescr = ({route,navigation}) => {
    const { openimage } = route.params;
  return (
    <View style={{flex:1,backgroundColor:Theme.Black}}>
      <Customheader/>
      <View style={{flex:1,justifyContent:'center'}}>
     <FastImage style={{width:'100%',height:'100%',}} resizeMode="contain" source={openimage}/>
     </View>
    </View>
  )
}

export default Imagescr

const styles = StyleSheet.create({})