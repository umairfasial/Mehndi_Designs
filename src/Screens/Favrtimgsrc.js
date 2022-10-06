import {StyleSheet, Text, View, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';
import React from 'react';
import Theme from '../utils/Themes';

const Favrtimgsrc = ({route}) => {
  const {showimage} = route.params;
  console.log('first', showimage);
  return (
    <View style={{flex: 1}}>
      <ScrollView
        horizontal
        contentContainerStyle={{
            flexGrow: 1,
          
        //   width: '100%',
        }}>
        <View style={{flexDirection: 'row',
          alignItems: 'center',
          padding: 5,}}>
          {showimage.map((item, index) => {
            console.log('fds', item);
            return (
              <FastImage
                style={{width:Theme.height/2, height:Theme.width}}
                resizeMode="contain"
                source={item}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Favrtimgsrc;

const styles = StyleSheet.create({
  vew: {},
});
