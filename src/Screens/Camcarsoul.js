import { StyleSheet, Text, View,Alert } from 'react-native'
import React from 'react'
import Theme from '../utils/Themes'
import Customheader from '../components/Customheader'
import Customcarousel from '../components/Customcarousel'
import Icon from 'react-native-vector-icons/Entypo';
import { useState,useEffect } from 'react'
import FastImage from 'react-native-fast-image'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Camcarsoul = ({route,navigation}) => {
    const {openimage, sendlist} = route.params;
   const [first, setfirst] = useState(openimage);
   const [data, setdata] = useState(sendlist);
   const [ittem, setittem] = useState('');
   
   const additem = async()=>{
    const val = await AsyncStorage.getItem('favorite');
    const job = JSON.parse(val);
    // console.log('second',job)
      if(job?.length){
        // console.log('if')
        let valeofindex = [...data][first]; //get current item of array
        // let info = valeofindex.Pic;
        // console.log('first',info)
        let arr = [...job]
        // console.log('arry',arr)

        let check = false;

        arr.forEach(item => {
          
          if(valeofindex.uri == item.uri){
            check = true;
          }
        })

        if(check){
          Alert.alert(
            'Favorites',
            'Image already added in favorites.',
            [
              {
                text: "OK", onPress: () => console.log(''),
              }
            ]
          )
        }else{
          
          arr.unshift(valeofindex)
        }

      // console.log('includ',check)
        
       
      await AsyncStorage.setItem("favorite",JSON.stringify(arr))
      
      // console.log('fourth',arr)
      }else{
        // console.log('else')
        let valeofindex = [...data][first];
        // let info = valeofindex.Pic;
        let arr = []
        arr.unshift(valeofindex)
        
      await AsyncStorage.setItem("favorite",JSON.stringify(arr))
      // console.log('first',arr)
      }
     
   }

// const additem = async()=>{
//       let valeofindex =[...data][first];
      
//       console.log('first',valeofindex)
//       let arr = [...arr]
//       arr.unshift(valeofindex)

//       await AsyncStorage.setItem("favorite",JSON.stringify(arr))
      
//    }
  return (
    <View style={{flex:1,backgroundColor:Theme.Mehndi}}>
       <View>
        <Customheader
        onpress={additem}
        icon={true}
        captpress={() => navigation.navigate('Camerascr')}
        fvrtpress={() => navigation.navigate('Savedscr')}
        />
      </View>
      <View style={{flex: 1}}>
        <Customcarousel
          data={data}
          
          snapitem={index => setfirst(index)}
          firstItem={first}
          render={({item, index}) => {
          
            // console.log('ggg', item) 
            return(
              <FastImage
                style={{width: '100%', height: '80%', flex: 1}}
                resizeMode="contain"
                source={item}
              />
            )
            }}
        />
        {/* <Icon
          name="circle-with-cross"
          onPress={() => deleteitem(first)}
          size={60}
          style={{
            color: Theme.white,
            alignSelf: 'center',
            backgroundColor: Theme.Mehndi,
            width: '20%',
            height: '9%',
            textAlign: 'center',
            textAlignVertical: 'center',
            borderRadius: 5,
            marginBottom: '12%',
          }}
        /> */}
      </View> 
    </View>
  )
}

export default Camcarsoul

const styles = StyleSheet.create({})