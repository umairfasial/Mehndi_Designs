import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import Customheader from '../components/Customheader';
import Theme from '../utils/Themes';
import ImagePicker, {openCamera} from 'react-native-image-crop-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Entypo';
import Custombox from '../components/Custombox';
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Camerascr = ({navigation}) => {
  const [data, setdata] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  // const additem = async() =>{
  //   const arry =[image]
  //  try {

  //   console.log('first',image)
  //  } catch (error) {
  //   console.log(error)
  //  }
  // }
  // const getdata= async()=>{
  //   try {

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  const Opengal = () => {
    setModalVisible(false);
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(async images => {
      console.log(images);
      if (data?.length) {
        // console.log('if condition')
        const infor = [...data];

        infor.unshift({uri: images.path});

        await AsyncStorage.setItem('uri', JSON.stringify(infor));

        // console.log('first infor',infor)
        setdata(infor);
      } else {
        // console.log('else condition')
        let arr1 = [];
        arr1.push({uri: images?.path});
        await AsyncStorage.setItem('uri', JSON.stringify(arr1));

        // console.log('second log',arr1)
        setdata(arr1);
      }
    });
  };
  const Opencam = () => {
    setModalVisible(false);
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(async image => {
      // console.log('hloo', image);
      if (data?.length) {
        console.log('if');
        const info = [...data];
        info.unshift({uri: image.path});

        await AsyncStorage.setItem('uri', JSON.stringify(info));

        // console.log('first', info);
        setdata(info);
      } else {
        // console.log('else');
        let arr = [];
        arr.push({uri: image?.path});
        await AsyncStorage.setItem('uri', JSON.stringify(arr));

        // console.log('second', arr);
        setdata(arr);
      }

      //  setdata( arr => [...arr,`${image.path}`]);
    });
  };
  const getdata = async () => {
    const value = await AsyncStorage.getItem('uri');
    const obj = JSON.parse(value);
    setdata(obj);
  };
  useEffect(() => {
    getdata();
  }, []);

  const renderItem = ({item, index}) => {

    return (
      <Custombox
        Picture={item}
        onpress={() =>
          navigation.navigate('Camcarsoul', {
            openimage: index,
            sendlist: data,
          })
        } 
      />
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: Theme.Mehndi}}>
      <Customheader
        captpress={() => navigation.navigate('Camerascr')}
        fvrtpress={() => navigation.navigate('Savedscr')}
        title={'Capture Designs'}
      />
      <View style={{marginTop: '2%'}}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.btn}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: Theme.white,
              textAlign: 'center',
            }}>
            Add item
          </Text>
        </TouchableOpacity>
        {data?.length ? (
        <FlatList
          style={{margin: 8}}
          data={data}
          numColumns={3}
          renderItem={renderItem}
          // keyExtractor={Item => Item.id}
        />
        ) : (
          <View style={{marginTop:'60%'}}>
            <Text style={{
               color: Theme.white,
              fontSize: 20,
              fontFamily: 'arial',
              textAlign: 'center',
            
              }}>You have no Captured Images</Text>
          </View>
        )}
      </View>
      {/* <View style={{marginTop:'2%'}}>
      <TouchableOpacity onPress={Opengal} style={styles.btn}>
        <Text style={{fontSize:18,fontWeight:'bold',color:Theme.white,}}>Open Camera</Text>
        <Icon name="camera" size={22} color={Theme.white} />
      </TouchableOpacity>
      </View> */}
      {/* <Custombox Picture={{uri:data}}/> */}
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
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={Opencam}>
              <MaterialCommunityIcons
                name="camera"
                size={22}
                color={Theme.white}
              />
              <Text style={styles.modl}>Open Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={Opengal}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="image" size={22} color={Theme.white} />
              <Text style={styles.modl}>Open Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={() => setModalVisible(false)}>
              <Icon name="circle-with-cross" size={24} color={Theme.white} />
              <Text style={{...styles.modl, textAlign: 'center'}}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Camerascr;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '85%',
    backgroundColor: Theme.lightgrey,
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  modl: {
    fontSize: 15,
    color: Theme.white,
    fontWeight: 'bold',

    marginVertical: '4%',
    marginHorizontal: '4%',
  },
  btn: {
    backgroundColor: Theme.Darkbrown,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
    padding: 10,
    borderColor: Theme.Offwhite,
    borderWidth: 1,
    borderRadius: 7,
  },
});
