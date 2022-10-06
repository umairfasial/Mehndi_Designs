import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Customheader from '../components/Customheader'
import Theme from '../utils/Themes'
import FastImage from 'react-native-fast-image'
import Carousel from 'react-native-snap-carousel'
import { useState } from 'react'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { color } from 'react-native-reanimated'

const Imagescr = ({route}) => {
    const { openimage,sendlist } = route.params;
  // console.log('hloooo',sendlist)
    const [data, setdata] = useState(sendlist || []);
    const [first, setfirst] = useState(0);
    
    // setdata(List);
    useEffect(() => {
      let a = data.filter(item => item !== openimage)
      a.unshift(openimage)
      // console.log('URL: ',openimage)
      // console.log('data',a)
      setdata(a);
    }, []);
     const additem = async()=>{
      const val = await AsyncStorage.getItem('favorite');
      const job = JSON.parse(val);
      // console.log('second',job)
        if(job?.length){
          console.log('if')
          let valeofindex = [...data][first];
          let info = valeofindex.Pic;
          let arr = [...job]
          arr.unshift(info)
          
        await AsyncStorage.setItem("favorite",JSON.stringify(arr))
        // console.log('fourth',arr)
        }else{
          let valeofindex = [...data][first];
          let info = valeofindex.Pic;
          let arr = []
          arr.unshift(info)
          
        await AsyncStorage.setItem("favorite",JSON.stringify(arr))
        // console.log('first',arr)
        }
       
     }
    // const [data1, setdata1] = useState(Secondlist || []);
    // // setdata(List);
    // useEffect(() => {
    //   let b = data.filter(item => item !== openimage)
    //   b.unshift(openimage)
    //   console.log('URL: ',openimage)
    //   console.log('data',b)
    //   setdata1(b);
    // }, [])
   
  return (
    // console.log('hhhh',data), 
    <View style={{flex:1,backgroundColor:Theme.Black}}>
     
      <Customheader title={'Mehndi Designs'} onpress={additem} icon={true} colr={additem ?'red': null}/>
      
      <Carousel
      windowSize={1}
           loop={true}
              sliderWidth={Theme.width}
               itemWidth={Theme.width}
              
               useScrollView={true}
                data={data}
                inactiveSlideScale={20}
                onSnapToItem={(index) => setfirst(index) }
                
                renderItem={({item, index }) => (
                  
             
                  <FastImage  style={{width:'100%',height:'100%'}} resizeMode="contain" source={item.Pic} />
                  
                )}
                
            />
     
      
  
    </View>
  )
}

export default Imagescr

const styles = StyleSheet.create({})