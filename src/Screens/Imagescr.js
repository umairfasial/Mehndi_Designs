import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Customheader from '../components/Customheader'
import Theme from '../utils/Themes'
import FastImage from 'react-native-fast-image'

const Imagescr = ({route}) => {
    const { openimage } = route.params;
  return (
    <View style={{flex:1,backgroundColor:Theme.Black}}>
      <Customheader/>
     
      <ScrollView style={{flex:1}}>
     <FastImage  style={{width:'100%',height:'100%',}} resizeMode="contain" source={openimage}/>
     </ScrollView>
  
    </View>
  )
}

export default Imagescr

const styles = StyleSheet.create({})