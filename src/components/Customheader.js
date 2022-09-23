import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/Entypo'
import Theme from '../utils/Themes'

const Customheader = ({onpress}) => {
  
const styles = StyleSheet.create({})

  return (
    <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:Theme.lightbrown,padding:15}}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <Icon onpress={onpress} name="menu" size={25} color={Theme.white} />
      <Text style={{fontSize:22,marginLeft:'5%',color:Theme.white}}>Mehndi Designs</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <Icon name="share" size={25} color={Theme.white} style={{paddingHorizontal:30}} />
      <Icon name="dots-three-vertical" size={20} color={Theme.white} />
      </View>
    </View>
  )
}

export default Customheader;
