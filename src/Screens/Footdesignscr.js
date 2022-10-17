import { StyleSheet, Text, View, FlatList,ImageBackground} from 'react-native'
import React from 'react'
import Customheader from '../components/Customheader'
import Custombox from '../components/Custombox'
import { Foot } from '../Assests/Constants/Dumydata'
import Theme from '../utils/Themes'

const Footdesignscr = ({navigation}) => {
  const renderItem = ({item}) => (
    // console.log('boss',item.Pic),
    <Custombox Picture={item.Pic}   onpress={() =>
      navigation.navigate('Imagescr', {
        openimage: item,
        sendlist: Foot,
      })
    } />
    
);
  return (
    <View style={{flex:1,backgroundColor:Theme.Mehndi}}>
      {/* <ImageBackground
        style={{flex: 1, justifyContent: 'center'}}
        source={require('../Assests/Images/pic1.jpg')}
        resizeMode="cover"> */}
      <FlatList
          style={{margin:8,}}
          data={Foot}
          numColumns={3}
          renderItem={renderItem}
          // keyExtractor={Item => Item.id}
        />
        {/* </ImageBackground> */}
    </View>
  )
}

export default Footdesignscr

const styles = StyleSheet.create({})