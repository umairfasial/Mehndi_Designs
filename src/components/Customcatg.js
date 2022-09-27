import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Theme from '../utils/Themes';

const Customcatg = ({title}) => {
  return (
    <View style={{padding: 2}}>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: Theme.Darkbrown,
          width: Theme.width / 2.1,
          height: '25%',
          borderRadius: 3,
          paddingVertical: 10,
        }}>
        <Text style={{fontSize: 18, textAlign: 'center', color: Theme.white}}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Customcatg;

const styles = StyleSheet.create({});
