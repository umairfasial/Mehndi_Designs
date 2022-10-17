import {StyleSheet, Text, View, ScrollView,ImageBackground} from 'react-native';
import FastImage from 'react-native-fast-image';
import React from 'react';
import Theme from '../utils/Themes';
import Icon from 'react-native-vector-icons/Entypo';
import {useState} from 'react';
import Customcarousel from '../components/Customcarousel';
import Customheader from '../components/Customheader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Favrtimgsrc = ({route,navigation}) => {
  const {showimage, pic} = route.params;
  const [first, setfirst] = useState(pic);
  const [Cdata, setCdata] = useState(showimage);


  const deleteitem = async() => {
    // console.log('first',Cdata.length)
    // if (Cdata.length == 1) {
    //   Cdata.pop()
    //   await AsyncStorage.removeItem('favorite');
    //   navigation.goBack()

    // } else {
      
      let a = Cdata;
      let arr = a.filter((item, index) => {
        // console.log('lhr', index, first);
        return index !== first;
        //  index match ni hony chahiye
      });

      if(arr.length == first){
        setfirst(0)
      }

      if(!arr.length){
      await AsyncStorage.removeItem('favorite');
      navigation.goBack()
      }
      
      setCdata(arr);    
      await AsyncStorage.setItem('favorite', JSON.stringify(arr));
    // }
   
    
    // let arr = Cdata.filter((item, index) => {
    //   console.log('lhr', index, first);
    //   return index !== first;
    //   //  index match ni hony chahiye
    // });
    

    // return
    // if (Cdata.length == 2 ) {

    //   console.log('if')


    //   Cdata.splice(1,1)
    //   console.log('ifffff',Cdata)
    //   setCdata(Cdata)
    //   await AsyncStorage.setItem('favorite', JSON.stringify(Cdata));
    //   setfirst(0)

    // }else if(Cdata.length == 1 && first == 0){
    //   Cdata.pop()
    //   setCdata(Cdata)
    //         await AsyncStorage.removeItem('favorite');
    //   navigation.goBack()

    // } else {
      // if(Cdata.length == 1){
      //   Cdata.pop()
      //     setCdata(Cdata)
      //           await AsyncStorage.removeItem('favorite');
      //     navigation.goBack()
      // } else{
       
  
        // if(arr.length == 1){
        //   setfirst(0)
        // }else if(arr.length == first){
        //   setfirst(first - 1)
        // }
  
        // console.log('hloo',arr);
        // console.log('first', pic);
        // a.splice(pic,1)
       
      // }   
    // }
  };
  const render = ({item,index}) => {
    // console.log('hlo',item.Pic)
    return (
      <ImageBackground
      style={{flex: 1, justifyContent: 'center'}}
      source={item}
      blurRadius={8}
      resizeMode="cover">
      <FastImage
        style={{width: '100%', height: '100%'}}
        resizeMode="contain"
        source={item}
      />
       <Icon
          name="circle-with-cross"
          onPress={() => deleteitem(first)}
          size={60}
          style={{
            color: Theme.white,
            alignSelf: 'center',
            backgroundColor: Theme.Mehndi,
            width: '20%',
            height: '9%',
            textAlign: 'center',
            textAlignVertical: 'center',
            borderRadius: 5,
            marginBottom: '18%',
          }}
        />
      </ImageBackground>
    );
  };

  return (
    <View style={{flex: 1,backgroundColor:Theme.Mehndi}}>
      <View>
        <Customheader
        captpress={() => navigation.navigate('Camerascr')}
        fvrtpress={() => navigation.navigate('Savedscr')}
        />
      </View>
      <View style={{flex: 1}}>
        <Customcarousel
          data={Cdata}
          
          snapitem={index => setfirst(index)}
          firstItem={first}
          render={render}
        />
       
      </View>
    </View>
  );
};

export default Favrtimgsrc;

const styles = StyleSheet.create({
  vew: {},
});

{
  /* <ScrollView
        horizontal
        // onScroll={(e) => setPos(e.nativeEvent.contentOffset.y)}
        style={{flexGrow: 0}}
        contentContainerStyle={{
          backgroundColor: 'cyan',
          padding: 4,
          
        }}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: -18}}>
          {showimage.map((item, index) => {
            img = item
            console.log('fds', index);
            return (
                
              <FastImage
                style={{width: Theme.height / 2, height: Theme.width}}
                resizeMode="contain"
                source={item}
              />
            );
            
          })}
        </View>
      </ScrollView> */
}
