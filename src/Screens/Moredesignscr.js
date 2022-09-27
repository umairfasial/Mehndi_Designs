import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { categ } from '../Assests/Constants/Dumydata';
import Customcatg from '../components/Customcatg';

const Moredesignscr = () => {
  const renderItem = ({item}) => (
    <Customcatg title={item.title} />
  );
  return (
    <View style={{flex:1,alignItems:'center'}}>
    <FlatList
  
    data={categ}
    numColumns={2}
    renderItem={renderItem}
    // keyExtractor={Item => Item.id}
  />
  </View>
  )
}

export default Moredesignscr

const styles = StyleSheet.create({})