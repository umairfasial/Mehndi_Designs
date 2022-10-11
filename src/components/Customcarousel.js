import { StyleSheet, Text, View } from 'react-native'
import React ,{useRef,useEffect}from 'react'
import Carousel from 'react-native-snap-carousel'
import Theme from '../utils/Themes'

const Customcarousel = ({data,contentContainerStyle,style,snapitem,render,firstItem,}) => {
const carouselRef = useRef(null);
useEffect(() => {
  if(data?.length===1){
    carouselRef?.current?.snapToItem (0, animated = true, fireCallback = true)
    
  }
}, [data])  

  return (
    <Carousel
    style={style}
    contentContainerStyle={contentContainerStyle}
    windowSize={1}
    ref={carouselRef}
         loop={true}
            sliderWidth={Theme.width}
             itemWidth={Theme.width}
            sliderHeight={0}
             useScrollView={true}
             enableSnap={true}
             firstItem={firstItem}
              data={data}
              inactiveSlideScale={2}
              onSnapToItem={snapitem}
              
              renderItem={render}
              
          />
  )
}

export default Customcarousel

const styles = StyleSheet.create({})