import {StyleSheet, Text, View, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';
import React from 'react';
import Theme from '../utils/Themes';
import Icon from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';
import Customcarousel from '../components/Customcarousel';
import Customheader from '../components/Customheader';

const Favrtimgsrc = ({route}) => {
  const {showimage} = route.params;
  //   console.log('first', showimage);

  // const deleteitem = Index => {
  //   console.log('hloo', Index);
  //   let a = showimage;
  //   a.splice(Index, 1);
  //   setfirst([...a]);
  // };

  return (
   
    <View style={{flex:1,backgroundColor:Theme.Mehndi,justifyContent:"space-between"}}>
      <View style={{height:"10%", backgroundColor:'cyan'}}>
      <Customheader/>
      </View>
      <View style={{backgroundColor:'green',height:"90%",justifyContent:"center"}}>
      <Customcarousel
        data={showimage}
        snapitem={(index) => console.log('Current', index)}
        render={({item, index}) => (
          <FastImage
            style={{width: '100%', height: '5%',backgroundColor:'red'}}
            resizeMode="contain"
            source={item}
          />
        )}
      />
      <Icon
        name="delete"
        // onPress={()=>deleteitem(indx)}
        size={30}
        style={{
          color:Theme.white,
          alignSelf:'center',
          backgroundColor: Theme.Mehndi,
          width: '20%',
          textAlign: 'center',
          textAlignVertical: 'center',
          borderRadius:5,
      
        }}
      />
</View>
      
    </View>
  );
};

export default Favrtimgsrc;

const styles = StyleSheet.create({
  vew: {},
});

{
  /* <ScrollView
        horizontal
        // onScroll={(e) => setPos(e.nativeEvent.contentOffset.y)}
        style={{flexGrow: 0}}
        contentContainerStyle={{
          backgroundColor: 'cyan',
          padding: 4,
          
        }}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: -18}}>
          {showimage.map((item, index) => {
            img = item
            console.log('fds', index);
            return (
                
              <FastImage
                style={{width: Theme.height / 2, height: Theme.width}}
                resizeMode="contain"
                source={item}
              />
            );
            
          })}
        </View>
      </ScrollView> */
}

 

