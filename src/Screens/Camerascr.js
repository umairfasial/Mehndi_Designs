import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import Customheader from '../components/Customheader'
import Theme from '../utils/Themes'
const Camerascr = () => {

  return (
    <View style={{flex:1,backgroundColor:Theme.Mehndi}}>
      <Customheader/>
       
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity> 
             <Text style={styles.modl}>Open Camera</Text>
             </TouchableOpacity>
             <TouchableOpacity> 
             <Text style={styles.modl}>Show Captured Designs</Text>
             </TouchableOpacity>
             <TouchableOpacity > 
             <Text style={styles.modl}>Cancel</Text>
             </TouchableOpacity>
          
          </View>
        </View>
      
    </View>
  )
}

export default Camerascr

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '85%',
    backgroundColor:Theme.white,
    borderRadius: 3,
    paddingVertical:10,
    paddingHorizontal:30,
    
  },
  modl: {
    fontSize: 15,
    color:Theme.Black,
    fontWeight: 'bold',
    width:'100%',
    marginVertical:'4%',
  },
})