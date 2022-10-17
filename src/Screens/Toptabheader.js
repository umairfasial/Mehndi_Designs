import {StyleSheet, Text, View, Alert, BackHandler} from 'react-native';
import React from 'react';
import Customheader from '../components/Customheader';
import Toptabnav, { TopTabStack } from './Toptabnav';
import {useEffect} from 'react';
import Homescreen from './Homescreen';

const Toptabheader = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Customheader
        captpress={() => navigation.navigate('Camerascr')}
        fvrtpress={() => navigation.navigate('Savedscr')}
        title={'Mehndi Designs'}
      />
      <Toptabnav />
    </View>
  );
};

export default Toptabheader;

const styles = StyleSheet.create({});
