import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/Entypo'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons'
import Theme from '../utils/Themes'
import { useState } from 'react'
import  Share  from 'react-native-share'

const Customheader = ({onpress}) => {
  const [modalVisible, setModalVisible] = useState(false);
    
  const shareitem= async() =>{
    const shareOptions = {
      message: 'some message',
      // url: 'some share url',
      // social: Share.Social,
      // whatsAppNumber: "9199999999",  // country code + phone number
      // filename: 'test' , // only for base64 file in Android
    };
      try{
        const ShareResponse = await Share.open(shareOptions);
      }  catch(err){
        console.log('Error',err)
      }
     // Share.shareSingle(shareOptions)
    //   .then((res) => { console.log(res) })
    //   .catch((err) => { err && console.log(err); });
  }

  return (
    <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:Theme.lightbrown,padding:15}}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <Icon onpress={onpress} name="menu" size={25} color={Theme.white} />
      <Text style={{fontSize:22,marginLeft:'5%',color:Theme.white}}>Mehndi Designs</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      {/* <Icon onPress={shareitem} name="share" size={25} color={Theme.white} style={{paddingHorizontal:30}} /> */}
      <Icon onPress={() => setModalVisible(true)} name="dots-three-vertical" size={20} color={Theme.white} />
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}> 
            <Icon name="save" size={22} color={Theme.white} />
             <Text style={styles.modl}>Open Saved Designs</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}> 
             <MaterialIcons name="favorite" size={22} color={Theme.white} />
             <Text style={styles.modl}>Favourite Designs</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}> 
            <Icon name="share" size={22} color={Theme.white} />
             <Text style={styles.modl}>Share this App</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}> 
             <MaterialIcons name="favorite" size={22} color={Theme.white} />
             <Text style={styles.modl}>Rate this App</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}> 
             <MaterialIcons name="exit-to-app" size={22} color={Theme.white} />
             <Text style={styles.modl}>More Categorized Designs</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}> 
            <Ionicons name="exit-outline" size={22} color={Theme.white} />
             <Text style={styles.modl}>Exit App!</Text>
             </TouchableOpacity>
             
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Customheader;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '55%',
    backgroundColor:Theme.lightgrey,
    borderRadius: 5,
    paddingVertical:10,
    paddingHorizontal:30,
    alignItems: 'center',
  },
  modl: {
    fontSize: 15,
    color:Theme.white,
    fontWeight: 'bold',
    marginLeft:'4%',
    width:'100%',
    marginHorizontal:'6%',
    marginVertical:'10%',
  },
})