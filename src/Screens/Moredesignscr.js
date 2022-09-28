import { StyleSheet, Text, View,FlatList, ImageBackground } from 'react-native'
import React from 'react'
import Customcatg from '../components/Customcatg';
import { morecateg } from '../Assests/Constants/Dumydata';

const Moredesignscr = () => {
  const renderItem = ({item}) => (
    <Customcatg title={item.title} />
  );
  return (
    <View style={{flex:1,alignItems:'center'}}>
      <ImageBackground
        style={{flex: 1, justifyContent: 'center'}}
        source={require('../Assests/Images/pic1.jpg')}
        resizeMode="cover">
    <FlatList
  
    data={morecateg}
    numColumns={2}
    renderItem={renderItem}
    // keyExtractor={Item => Item.id}
  />
  </ImageBackground>
  </View>
  )
}

export default Moredesignscr

const styles = StyleSheet.create({})