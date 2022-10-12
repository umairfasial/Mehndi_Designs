import { StyleSheet, Text, View,ImageBackground,FlatList } from 'react-native'
import React from 'react'
import { Indianhand } from '../Assests/Constants/Dumydata';
import Custombox from '../components/Custombox';
import Theme from '../utils/Themes';
import { useNavigation } from '@react-navigation/native';

const Gridhand = ({data}) => {
  const navigation = useNavigation();
    const renderItem = ({item}) => (
        // console.log('boss',item.Pic),
        <Custombox Picture={item.Pic} 
          onpress={() =>
          navigation.navigate('Imagescr', {
            openimage: item,
            sendlist: data,
          })
        } 
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

export default Gridhand

const styles = StyleSheet.create({})