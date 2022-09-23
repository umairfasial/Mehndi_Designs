import { StyleSheet, Text, View,FlatList, ScrollView, ImageBackground} from 'react-native'
import React from 'react'
import Theme from '../utils/Themes'
import Customheader from '../components/Customheader'
import Custombtn from '../components/Custombtn'
import Custombox from '../components/Custombox'
import {List} from '../Assests/Constants/Dumydata'



const Homescreen = ({navigation}) => {
  const renderItem = ({item}) => (
      <Custombox  Picture={item.Pic} onpress={()=> navigation.navigate('Imagescr',{
        openimage:item.Pic,
      })}/>
      
  );

  return (
    <View style={styles.mnvew}>
      <ImageBackground style={{flex:1,justifyContent:'center'}} source={require('../Assests/Images/bckgrnd.jpg')} resizeMode='cover' >
      <Customheader onpress={() => navigation.toggleDrawer()}/>
      
      <ScrollView style={{flex:1,paddingVertical:10,width:Theme.width-15,alignSelf:"center",}}>
      <Custombtn title={'Latest Mehndi Designs'}/>
      <FlatList
          style={{margin:6,}}
          data={List}
          numColumns={3}
          renderItem={renderItem}
          keyExtractor={Item => Item.id}
        />
        <Custombtn title={'Simple Mehndi Designs'}/>
        <FlatList
          style={{margin:6,}}
          data={List}
          numColumns={3}
          renderItem={renderItem}
          // keyExtractor={Item => Item.id}
        />
        </ScrollView>
        </ImageBackground>
    </View>
  )
}

export default Homescreen;

const styles = StyleSheet.create({
    mnvew:{
        flex:1,
        
    }
})