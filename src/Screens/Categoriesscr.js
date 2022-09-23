import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Customcatg from '../components/Customcatg';
const Categ =[
    {
        id:'1',
        text:'ghjklcv',
    },
    {
        id:'2',
        text:'ghjklcv',
    },
    {
        id:'3',
        text:'ghjklcv',
    },
    {
        id:'4',
        text:'ghjklcv',
    },
]

const Categoriesscr = () => {
    const renderItem = ({item}) => (
        <Customcatg title={item.text} />
        
    );
  return (
    <FlatList
    style={{width:'50%'}}
    data={Categ}
    numColumns={2}
    renderItem={renderItem}
    // keyExtractor={Item => Item.id}
  />
  )
}

export default Categoriesscr;

const styles = StyleSheet.create({})