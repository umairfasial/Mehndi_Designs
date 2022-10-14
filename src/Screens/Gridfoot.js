import { StyleSheet, Text, View,ImageBackground,FlatList } from 'react-native'
import React from 'react'
import { Indianfoot } from '../Assests/Constants/Dumydata';
import Custombox from '../components/Custombox';
import Theme from '../utils/Themes';

const Gridfoot = ({navigation,data}) => {
    const renderItem = ({item}) => (
        // console.log('boss',item.Pic),
        <Custombox Picture={item.Pic} 
        //   onpress={() =>
        //   navigation.navigate('Imagescr', {
        //     openimage: item,
        //     sendlist: Indianfoot,
        //   })
        // } 
        />
        
    );
  return (
    <View style={{flex:1,backgroundColor:Theme.Mehndi}}>
    {/* <ImageBackground
      style={{flex: 1, justifyContent: 'center'}}
      source={require('../Assests/Images/pic1.jpg')}
      resizeMode="cover"> */}
    <FlatList
        style={{margin:8,}}
        data={data}
        numColumns={3}
        renderItem={renderItem}
        // keyExtractor={Item => Item.id}
      />
      {/* </ImageBackground> */}
  </View>
  )
}

export default Gridfoot

const styles = StyleSheet.create({})