import { StyleSheet, Text, View, FlatList} from 'react-native'
import React from 'react'
import Customheader from '../components/Customheader'
import Custombox from '../components/Custombox'
import { Foot } from '../Assests/Constants/Dumydata'
import Theme from '../utils/Themes'

const Footdesignscr = () => {
  const renderItem = ({item}) => (
    <Custombox Picture={item.Pic} />
    
);
  return (
    <View style={{flex:1,backgroundColor:Theme.lightbrown}}>
      <Customheader/>
      <FlatList
          style={{margin:6,}}
          data={Foot}
          numColumns={3}
          renderItem={renderItem}
          // keyExtractor={Item => Item.id}
        />
    </View>
  )
}

export default Footdesignscr

const styles = StyleSheet.create({})