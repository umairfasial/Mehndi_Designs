import {StyleSheet, Text, View, Modal, TouchableOpacity, Alert, BackHandler} from 'react-native';
import React, {useRef} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Theme from '../utils/Themes';
import {useState} from 'react';
import Share from 'react-native-share';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useNavigation } from '@react-navigation/native';

const Customheader = ({onpress, title, icon,colr,fvrtpress,captpress}) => {
  const refRBSheet = useRef();
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const shareitem = async () => {
    const shareOptions = {
      message: 'some message',
      // url: 'some share url',
      // social: Share.Social,
      // whatsAppNumber: "9199999999",  // country code + phone number
      // filename: 'test' , // only for base64 file in Android
    };
    try {
      const ShareResponse = await Share.open(shareOptions);
    } catch (err) {
      console.log('Error', err);
    }
    // Share.shareSingle(shareOptions)
    //   .then((res) => { console.log(res) })
    //   .catch((err) => { err && console.log(err); });
  };
  const nav = () =>{
    setModalVisible(false);
    fvrtpress();
  };
  const nav1 = () =>{
    setModalVisible(false);
    captpress();
  };
  const grid = () =>{
    setModalVisible(false);
    navigation.navigate('Gridviewscr')
  };
  const exitfn = () =>{
    setModalVisible(false);
    Alert.alert(
      'Confirmation',
      'Do you want to exit app ?',
      [
        {
          text: "No",
          onPress: () => console.log(),
        },
        {
          text: "Yes", onPress: () => BackHandler.exitApp(),
        }
      ]
    )
  }
  const frbsheet =() =>{
    refRBSheet.current.open();
    setTimeout(() => {
      refRBSheet.current.close();
    }, 400);
     onpress();
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Theme.lightbrown,
        padding: 15,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon  name="menu" size={25} color={Theme.white} />
        <Text style={{fontSize: 22, marginLeft: '5%', color: Theme.white}}>
          {title}
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {icon ? (
          <MaterialIcons
          onPress={frbsheet}
            name="favorite"
            size={25}
            color={Theme.white}
            style={{paddingHorizontal: 30}}
          />
        ) : null}
        {/* <Icon onPress={shareitem} name="share" size={25} color={Theme.white} style={{paddingHorizontal:30}} /> */}
        <Icon
          onPress={() => setModalVisible(true)}
          name="dots-three-vertical"
          size={20}
          color={Theme.white}
          style={{paddingHorizontal:10}}
        />
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
            <TouchableOpacity
            onPress={nav1}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="save" size={22} color={Theme.white} />
              <Text style={styles.modl}>Open Capture Designs</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={nav}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialIcons name="favorite" size={22} color={Theme.white} />
              <Text style={styles.modl}>Favourite Designs</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="share" size={22} color={Theme.white} />
              <Text style={styles.modl}>Share this App</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialIcons name="favorite" size={22} color={Theme.white} />
              <Text style={styles.modl}>Rate this App</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={grid}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialIcons name="exit-to-app" size={22} color={Theme.white} />
              <Text style={styles.modl}>More Categorized Designs</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={exitfn}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="exit-outline" size={22} color={Theme.white} />
              <Text style={styles.modl}>Exit App!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <RBSheet
        ref={refRBSheet}       
        customStyles={{
          container: {
            backgroundColor:'transparent',
            height:'10%',
            paddingVertical:5,
          },
          wrapper:{
            backgroundColor:'transparent'
          }
       
        }}>
          <Text style={{fontSize:16,color:Theme.white,textAlign:'center'}}>Added to Favorites</Text>
          </RBSheet>
    </View>
  );
};

export default Customheader;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '55%',
    backgroundColor: Theme.lightgrey,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  modl: {
    fontSize: 15,
    color: Theme.white,
    fontWeight: 'bold',
    marginLeft: '4%',
    width: '100%',
    marginHorizontal: '6%',
    marginVertical: '10%',
  },
});
