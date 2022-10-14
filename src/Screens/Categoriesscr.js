import { StyleSheet, Text, View, FlatList, ImageBackground} from 'react-native'
import React from 'react'
import Customcatg from '../components/Customcatg';
import Theme from '../utils/Themes';
import { categ } from '../Assests/Constants/Dumydata';

const Categoriesscr = ({navigation}) => {
    const renderItem = ({item}) => (
        <Customcatg onpress={()=>navigation.navigate(item.title)} title={item.title} />
        
    );
  return (
    <View style={{flex:1,alignItems:'center',backgroundColor:Theme.Mehndi,paddingVertical:9}}>
      {/* <ImageBackground
        style={{flex: 1, justifyContent: 'center'}}
        source={require('../Assests/Images/pic1.jpg')}
        resizeMode="cover"> */}
    <FlatList
  
    data={categ}
    numColumns={2}
    renderItem={renderItem}
    // keyExtractor={Item => Item.id}
  />
  {/* </ImageBackground> */}
  </View>
  )
}

export default Categoriesscr;

const styles = StyleSheet.create({})