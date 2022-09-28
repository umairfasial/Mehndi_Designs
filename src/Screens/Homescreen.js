import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  ImageBackground,
  SectionList
} from 'react-native';
import React from 'react';
import Theme from '../utils/Themes';
import Customheader from '../components/Customheader';
import Custombtn from '../components/Custombtn';
import Custombox from '../components/Custombox';
import { List } from '../Assests/Constants/Dumydata';


const Homescreen = ({navigation}) => {
  <ImageBackground
        style={{flex: 1, justifyContent: 'center'}}
        source={require('../Assests/Images/pic1.jpg')}
        resizeMode="cover"></ImageBackground>
 
  const renderListItem = ({ item }) => {
      return (
        
        
          <Custombox Picture={item.Pic}
          onpress={() =>
                  navigation.navigate('Imagescr', {
                    openimage: item,
                  })
                }
          />
       
      )
    }
  const renderSection = ({ item }) => {
    
    return (
      <View style={{
         paddingVertical: 10,
            width: Theme.width,
            alignItems: 'center',
            
      }}>
        
      <FlatList
    
        data={item.list}
        numColumns={3}
        renderItem={renderListItem}
        // keyExtractor={keyExtractor}
      />
      </View>
    )
  }

  const renderSectionHeader = ({ section }) => {
    return <Custombtn title={section.title} />
  }

 

  // const keyExtractor = (item) => {
  //   return item.Pic
  // }
    return (
      <ImageBackground
        style={{flex: 1, justifyContent: 'center'}}
        source={require('../Assests/Images/pic1.jpg')}
        resizeMode="cover">
        
      <SectionList
        sections={List}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderSection}
      />
     </ImageBackground>
    )

  
  //   // <Custombox
  //   //   Picture={item.Pic}
  //   //   onpress={() =>
  //   //     navigation.navigate('Imagescr', {
  //   //       openimage: item,
  //   //     })
  //   //   }
  //   // />
  

  // return (
  //   <View style={styles.mnvew}>
      
  //     <ImageBackground
  //       style={{flex: 1, justifyContent: 'center'}}
  //       source={require('../Assests/Images/pic1.jpg')}
  //       resizeMode="cover">
  //       <View
  //         style={{
          
  //           // paddingVertical: 10,
  //           // width: Theme.width - 15,
  //           // alignSelf: 'center',
  //           // flexDirection:'row',
  //         }}>

  //           <SectionList
  //           style={{}}
  //         sections={List}
          
  //     keyExtractor={(item, index) => item + index}
  //     renderItem={({ item }) =>
       
  //       <Custombox Picture={item.Pic} />
        
      
  //       }
      
  //     renderSectionHeader={({ section: { title } }) => (
  //       <Text style={styles.header}>{title}</Text>
  //     )}
  //   />
  //         {/* <Custombtn title={'Latest Mehndi Designs'} />
  //         <FlatList
  //           style={{margin: 6}}
  //           data={List}
  //           numColumns={3}
  //           renderItem={renderItem}
  //           keyExtractor={Item => Item.id}
  //         />
  //         <Custombtn title={'Simple Mehndi Designs'} />
  //         <FlatList
  //           style={{margin: 6}}
  //           data={Secondlist}
  //           numColumns={3}
  //           renderItem={renderItem}
  //           // keyExtractor={Item => Item.id}
  //         />
  //         <Custombtn title={'Arm Mehndi Designs'} />
  //         <FlatList
  //           style={{margin: 6}}
  //           data={Armdesign}
  //           numColumns={3}
  //           renderItem={renderItem}
  //           // keyExtractor={Item => Item.id}
  //         />
  //         <Custombtn title={'kids Mehndi Designs'} />
  //         <FlatList
  //           style={{margin: 6,}}
  //           data={Kidsdesign}
  //           numColumns={3}
  //           renderItem={renderItem}
  //           // keyExtractor={Item => Item.id}
  //         /> */}
  //       </View>
  //     </ImageBackground>
  //   </View>
  // );
};

export default Homescreen;

const styles = StyleSheet.create({
  mnvew: {
    flex: 1,
    marginTop:'-2%',
  },
});
