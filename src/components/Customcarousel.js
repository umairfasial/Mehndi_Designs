import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import Theme from '../utils/Themes'

const Customcarousel = ({data,contentContainerStyle,style,snapitem,render}) => {
  return (
    <Carousel
    style={style}
    contentContainerStyle={contentContainerStyle}
    windowSize={1}
         loop={true}
            sliderWidth={Theme.width}
             itemWidth={Theme.width}
            sliderHeight={0}
             useScrollView={true}
              data={data}
              inactiveSlideScale={2}
              onSnapToItem={snapitem}
              
              renderItem={render}
              
          />
  )
}

export default Customcarousel

const styles = StyleSheet.create({})