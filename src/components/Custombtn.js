import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'

import Theme from '../utils/Themes'

const Custombtn = ({onpress,title}) => {
    const styles = StyleSheet.create({
        vew:{
           paddingVertical:'2%',
           backgroundColor:Theme.Mehndi,
        },
        btn:{
            flexDirection:'row',
            backgroundColor:Theme.Darkbrown,
            alignItems:'center',
            justifyContent:'space-between',
            width:'98%',
            alignSelf:'center',
            padding:10,
            borderColor:Theme.Offwhite,
            borderWidth:1,
            borderRadius:7,
            
        }
    })
  return (
    <View style={styles.vew}>
        <TouchableOpacity onPress={onpress} disabled={true} style={styles.btn}>
        <Text style={{fontSize:18,fontWeight:'bold',color:Theme.white,}}>{title}</Text>
        {/* <Text style={{color:Theme.white}}>More</Text> */}
      </TouchableOpacity>
    </View>
  )
}

export default Custombtn

