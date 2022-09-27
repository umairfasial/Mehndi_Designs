import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Customcatg from '../components/Customcatg';
import Theme from '../utils/Themes';
import { categ } from '../Assests/Constants/Dumydata';

const Categoriesscr = () => {
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

export default Categoriesscr;

const styles = StyleSheet.create({})