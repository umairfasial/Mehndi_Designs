import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Alert,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Customheader from '../components/Customheader';
import Theme from '../utils/Themes';
import FastImage from 'react-native-fast-image';
import Carousel from 'react-native-snap-carousel';
import {useState} from 'react';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Imagescr = ({route}) => {
  const {openimage, sendlist} = route.params;
  // console.log('hloooo',sendlist)
  const [data, setdata] = useState(sendlist || []);
  const [first, setfirst] = useState(0);
  const [hlo, sethlo] = useState('')
  // setdata(List);
  useEffect(() => {
    let a = data.filter(item => item !== openimage);
    a.unshift(openimage);
    // console.log('URL: ',openimage)
    // console.log('data',a)
    setdata(a);
  }, []);
  const additem = async () => {
    const val = await AsyncStorage.getItem('favorite');
    const job = JSON.parse(val);
    // console.log('second',job)
    if (job?.length) {
      // console.log('if')
      let valeofindex = [...data][first]; //get current item of array
      let info = valeofindex.Pic;
      // console.log('first',info)
      let arr = [...job];
      // console.log('arry',arr)

      let check = false;

      arr.forEach(item => {
        if (item.uri == info.uri) {
          check = true;
        }
      });

      if (check) {
        Alert.alert('Favorites', 'Image already added in favorites.', [
          {
            text: 'OK',
            onPress: () => console.log(''),
          },
        ]);
      } else {
        arr.unshift(info);
      }

      // console.log('includ',check)

      await AsyncStorage.setItem('favorite', JSON.stringify(arr));

      // console.log('fourth',arr)
    } else {
      // console.log('else')
      let valeofindex = [...data][first];
      let info = valeofindex.Pic;
      let arr = [];
      arr.unshift(info);

      await AsyncStorage.setItem('favorite', JSON.stringify(arr));
      // console.log('first',arr)
    }
  };
  // const [data1, setdata1] = useState(Secondlist || []);
  // // setdata(List);
  // useEffect(() => {
  //   let b = data.filter(item => item !== openimage)
  //   b.unshift(openimage)
  //   console.log('URL: ',openimage)
  //   console.log('data',b)
  //   setdata1(b);
  // }, [])

  const render = ({item,index}) => {
    // console.log('hlo',item.Pic)
    return (
      <ImageBackground
      style={{flex: 1, justifyContent: 'center'}}
      source={item.Pic}
      blurRadius={8}
      resizeMode="cover">
      <FastImage
        style={{width: '100%', height: '100%'}}
        resizeMode="contain"
        source={item.Pic}
      />
      </ImageBackground>
    );
  };

  return (
    // console.log('hhhh',data),
    <View style={{flex: 1,}}>
      <Customheader title={'Mehndi Designs'} onpress={additem} icon={true} />
     
        <Carousel
          windowSize={1}
          loop={true}
          sliderWidth={Theme.width}
          itemWidth={Theme.width}
          useScrollView={true}
        
          data={data}
          inactiveSlideScale={2}
          onSnapToItem={index => setfirst(index)}
          renderItem={render}
        />
      
    </View>
  );
};

export default Imagescr;

const styles = StyleSheet.create({});
