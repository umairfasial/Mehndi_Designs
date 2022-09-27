import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Customheader from '../components/Customheader'
import Theme from '../utils/Themes'
import FastImage from 'react-native-fast-image'
import Carousel from 'react-native-snap-carousel'
import { List } from '../Assests/Constants/Dumydata'
import { useState } from 'react'

const Imagescr = ({route}) => {
    const { openimage } = route.params;
    console.log(List)
    const [data, setdata] = useState(List);
    // setdata(List);
  
  return (
    <View style={{flex:1,backgroundColor:Theme.Black}}>
     
      <Customheader/>
      <Carousel
      windowSize={1}
    loop
              sliderWidth={Theme.width}
               itemWidth={Theme.width}
               
                data={data}
                layout="default"
                onSnapToItem={(index) => console.log('current index:', index) }
                
                renderItem={({item, index }) => (
                
                
                  <FastImage  style={{width:'100%',height:'100%'}} resizeMode="contain" source={item.Pic}/>
                )}
                
            />
     
      
  
    </View>
  )
}

export default Imagescr

const styles = StyleSheet.create({})