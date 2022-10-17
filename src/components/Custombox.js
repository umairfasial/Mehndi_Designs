import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Theme from '../utils/Themes';
import FastImage from 'react-native-fast-image';

const Custombox = ({Picture,onpress}) => {
  return (
    
      <TouchableOpacity
        onPress={onpress}
        style={{
          backgroundColor: Theme.lightbrown,
          width:Theme.width/3.1,
          height: Theme.height/6,
          borderWidth: 1,
          borderColor: Theme.Offwhite,
          borderRadius: 10,
          overflow:'hidden',
          alignItems:'center',
        
        }}>
            <FastImage source={Picture} 
            resizeMode="cover"
            style={{width:'100%',height:'100%',borderRadius:10,alignSelf:'center'}}
            />
        </TouchableOpacity>
        
        

  );
};

export default Custombox;

const styles = StyleSheet.create({});
