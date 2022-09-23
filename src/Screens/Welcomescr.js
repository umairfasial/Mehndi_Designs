import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import Theme from '../utils/Themes'


const Welcomescr = ({navigation}) => {
  setTimeout(()=>{
    navigation.navigate('Homescreen');
  },3000)
  return (
    <View style={styles.mnvew}>
      <Text style={styles.txt}>Mehndi Designs</Text>
      
      <View style={{width:'30%',height:'15%'}}>
        <Image source={require('../Assests/Images/pic.jpg')} style={styles.img} />
        
      </View>
    </View>
  )
}
export default Welcomescr;

const styles = StyleSheet.create({
  mnvew:{
    flex:1,
    backgroundColor:Theme.lightbrown,
    alignItems:'center',
    justifyContent:'center',
  },
  txt:{
    fontSize:25,
    fontWeight:'bold',
    color:Theme.white,
    marginBottom:'5%'
  },
  img:{
    width:'100%',
    height:'100%',
    borderRadius:20,
  }
})