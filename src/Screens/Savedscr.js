import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Customheader from '../components/Customheader'
import Theme from '../utils/Themes'

const Savedscr = () => {
  return (
    <View style={{flex:1}}>
      <Customheader/>
      <View style={{backgroundColor:Theme.Darkbrown,padding:5}}>
      <Text style={styles.txt} >Favorite Designs</Text>
      </View>
    </View>
  )
}

export default Savedscr

const styles = StyleSheet.create({
  txt:{
    fontSize:16,
    fontWeight:'bold',
    color:Theme.white,
    textAlign:'center'
  }
})