import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Customheader from '../components/Customheader'
import Theme from '../utils/Themes'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import Custombox from '../components/Custombox'

const Savedscr = ({navigation}) => {
  const [data, setdata] = useState('');

  const renderItem = ({item,index}) => {
    // console.log('Boss',item)
    return (
      <Custombox Picture={item} onpress={()=> 
         navigation.navigate('Favrtimgsrc',{
               showimage: data,
               pic:index,
         })
      } />
    )
  }

  const additem = async()=>{
    const val = await AsyncStorage.getItem('favorite');
    const job = JSON.parse(val);
    setdata(job);
    // console.log('first',job)
  }
  useEffect(() => {
    additem();
    navigation.addListener('focus', () => {
      additem();
    });

  }, []);
  return (
    <View style={{flex:1,backgroundColor:Theme.Mehndi}}>
      <Customheader 
      captpress={() => navigation.navigate('Camerascr')}
      fvrtpress={() => navigation.navigate('Savedscr')}
      title={'Favorite Designs'}/>
      <FlatList
          style={{margin:8}}
          data={data}
          numColumns={3}
          renderItem={renderItem}
          // keyExtractor={Item => Item.id}
        />
    </View>
  )
}

export default Savedscr

const styles = StyleSheet.create({
  txt:{
    fontSize:16,
    fontWeight:'bold',
    color:Theme.white,
    textAlign:'center'
  }
})