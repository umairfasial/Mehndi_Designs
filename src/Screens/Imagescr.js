import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Customheader from '../components/Customheader'
import Theme from '../utils/Themes'
import FastImage from 'react-native-fast-image'
import Carousel from 'react-native-snap-carousel'
import { List } from '../Assests/Constants/Dumydata'

const Imagescr = ({route}) => {
    const { openimage } = route.params;
  return (
    <View style={{flex:1,backgroundColor:Theme.Black}}>
      <Customheader/>
     <Carousel 
     loop
     onSnapToItem={openimage}
     data={List}
     autoplay={true}
     renderItem={({openimage})=>
    (
      <View style={{flex:1,justifyContent:'center'}}>
      <FastImage  style={{width:'100%',height:'100%',}} resizeMode="contain" source={openimage}/>
      </View>
    )
    }
     />
      
  
    </View>
  )
}

export default Imagescr

const styles = StyleSheet.create({})