import React, { useEffect, useState } from 'react';
import { Text,KeyboardAvoidingView, View,TextInput, FlatList, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Fonts, Colors, ImageIcons } from '../../common';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './storestyles';
import moment from 'moment';
import Loader from '../../components/modals/Loader';
import Editprofile from '../../screens/profile/Editprofile';
import { SwipeablePanel } from 'rn-swipeable-panel';
import { RadioButton ,Provider , Portal, Button,} from 'react-native-paper';
import Modal from 'react-native-modal'
//import {FlatListSlider} from '../../components/react-native-flatlist-slider';
import { SliderBox } from "react-native-image-slider-box";
//import Video from 'react-native-video';
 import {FlatListSlider} from 'react-native-flatlist-slider';
//  import {
//   StepProgressBar
// } from 'react-native-step-progress-bar';


const Search = (props) => {
const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

 const [visible, setVisible] = React.useState(false);
 const [subMsg, onChangeText1] = React.useState("");
 const [msg, onChangeText2] = React.useState("");

 const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    //onlySmall:true,
    showCloseButton: true,
    closeOnTouchOutside:true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want
  });
  const [isPanelActive, setIsPanelActive] = useState(false);

  const [isaction, setisaction] = useState(true);
  const [text1, ChangeText1] = React.useState("");



      const openPanel = () => {

    setIsPanelActive(true);
    setisaction(false);
  };

  const closePanel = () => {
    setIsPanelActive(false);
    setisaction(true);

  };

  // const showisaction = () => {
  //   setisaction(true);
  // };
  // const hideisaction = () => {
  //   setisaction(false);
  // };
    const containerStyle = {backgroundColor: 'red', padding: '7%',marginHorizontal:'5%',alignItems:'center',};

     const images = [
   {
    image:'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    desc: 'Silent Waters in the mountains in midst of Himilayas',
   },
  {
    image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc:
      'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
  ]

   const DATA = [
       {
        text:'Salon for Men',
        image:ImageIcons.manclap,
       },
        {
       text:'Salon for Women',
        image:ImageIcons.womanclap,
       },
        {
        text:'Spa for Women',
        image:ImageIcons.womanclap,
       },
       {
        text:'Massage for Men',
        image:ImageIcons.manclap,
       },
        {
        text:'Hair services',
        image:ImageIcons.womanclap,
       }, 

     ];
      

      
      const images1 = [
    {
    image:'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    desc: 'Silent Waters in the mountains in midst of Himilayas',
   },
  {
    image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc:
      'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
  {
    image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc:
      'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
  {
    image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc:
      'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
  
  ]

      const renderItem = ({ item ,index }) => {
     return(
       <View style={{paddingHorizontal:6, borderRightWidth:1,borderColor:'#f2f2f2',justifyContent:'center'}}>
          <Image source={item.image} style={styles.manclap} />
          <Text style={{fontSize:12,textAlign:'center',maxWidth:55,marginVertical:8}}>{item.text}</Text>
       </View>
  );
}



    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}style={styles.root}>
            <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true} />
            

            <View style={{marginVertical:'5%'}}>
               <View style={{width:'100%',alignSelf:'center',marginTop:'7%'}}>
                <TextInput  style={styles.chatinputsearch}
                    placeholder=" Search for locality, city etc."
                    placeholderTextColor="#999999" 
                    onChangeText={onChangeText1}
                    value={subMsg}
                />
                <TouchableOpacity onPress={() => props.navigation.navigate("Saleslisting")} style={{position:'absolute',marginTop:'4.5%',marginHorizontal:'4%'}}>
                <Image source={ImageIcons.back}  style={{height:16,width:16,}} /> 
                 </TouchableOpacity>
            </View>
            </View>


            <View style={{backgroundColor:'#ffffff'}}>
            <View style={{marginVertical:'2%',flexDirection:'row',justifyContent:'space-around'}}>
              <View style={styles.bestsellerview}>
                 <Text style={styles.bestsellertext}>Best Seller</Text>
              </View>
              <View style={styles.bestsellerview1}>
                 <Text style={styles.bestsellertext1}>Top Offers</Text>
              </View>
            </View>
            </View>

             <ScrollView style={{ paddingBottom: 0 }}>
             
              <View style={{backgroundColor:'#ffffff',marginVertical:'5%',}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'5%',marginTop:5}}>
                <Text style={{fontSize:18,letterSpacing:0.3,fontWeight:'bold',color:'#000000'}}>Sofa & Carpet Cleaning</Text>
                <Text style={{color:'#9933ff',fontSize:12,marginTop:5}}>See more</Text>
              </View>
              <View style={{flexDirection:'row',marginHorizontal:'5%',marginVertical:'2%'}}>
                <Text style={{fontSize:14,letterSpacing:0.3,color:'#009933'}}>25k orders</Text>
                <Text style={{color:'#848484',fontSize:12,marginTop:2,marginLeft:5}}>this month</Text>
              </View>   
                  <FlatListSlider
                data={images1}
                height={200}
                timer={5000}
                width={280}
                separatorWidth={25}
                onPress={item => alert(JSON.stringify(item))}
                contentContainerStyle={{paddingHorizontal: 16,}}
                indicatorContainerStyle={{top:30}}
                indicatorActiveColor={'#8e44ad'}
                indicatorInActiveColor={'#d9d9d9'}
                indicatorActiveWidth={8}
                animation
                /> 
                 <View style={{marginHorizontal:'5%',marginBottom:20,marginTop:-15}}>
                <Text style={{fontSize:14,letterSpacing:0.3,color:'#000000'}}>Cushions Cleaning(Set of 5)</Text>
                <Text style={{color:'#848484',fontSize:12,fontWeight:'bold',}}>Rs.149</Text>
              </View>          
              </View>


              <View style={{backgroundColor:'#ffffff',marginVertical:'5%',}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'5%',marginTop:5}}>
                <Text style={{fontSize:18,letterSpacing:0.3,fontWeight:'bold',color:'#000000'}}>Salon for Men Offers</Text>
                <Text style={{color:'#9933ff',fontSize:12,marginTop:5}}>See more</Text>
              </View>
              <View style={{flexDirection:'row',marginHorizontal:'5%',marginVertical:'2%'}}>
                <Text style={{fontSize:14,letterSpacing:0.3,color:'#009933'}}>25k orders</Text>
                <Text style={{color:'#848484',fontSize:12,marginTop:2,marginLeft:5}}>this month</Text>
              </View>   
                  <FlatListSlider
                data={images1}
                height={200}
                timer={5000}
                width={280}
                separatorWidth={25}
                onPress={item => alert(JSON.stringify(item))}
                contentContainerStyle={{paddingHorizontal: 16,}}
                indicatorContainerStyle={{top:30}}
                indicatorActiveColor={'#8e44ad'}
                indicatorInActiveColor={'#d9d9d9'}
                indicatorActiveWidth={8}
                animation
                /> 
                 <View style={{marginHorizontal:'5%',marginBottom:20,marginTop:-15}}>
                <Text style={{fontSize:14,letterSpacing:0.3,color:'#000000'}}>Cushions Cleaning(Set of 5)</Text>
                <Text style={{color:'#848484',fontSize:12,fontWeight:'bold',}}>Rs.149</Text>
              </View>          
              </View>

              <View style={{backgroundColor:'#ffffff',marginVertical:'5%',}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'5%',marginTop:5}}>
                <Text style={{fontSize:18,letterSpacing:0.3,fontWeight:'bold',color:'#000000',width:'70%'}}>Massage Therapy for Men Offers</Text>
                <Text style={{color:'#9933ff',fontSize:12,marginTop:5}}>See more</Text>
              </View>
              <View style={{flexDirection:'row',marginHorizontal:'5%',marginVertical:'2%'}}>
                <Text style={{fontSize:14,letterSpacing:0.3,color:'#009933'}}>25k orders</Text>
                <Text style={{color:'#848484',fontSize:12,marginTop:2,marginLeft:5}}>this month</Text>
              </View>   
                  <FlatListSlider
                data={images1}
                height={200}
                timer={5000}
                width={280}
                separatorWidth={25}
                onPress={item => alert(JSON.stringify(item))}
                contentContainerStyle={{paddingHorizontal: 16,}}
                indicatorContainerStyle={{top:30}}
                indicatorActiveColor={'#8e44ad'}
                indicatorInActiveColor={'#d9d9d9'}
                indicatorActiveWidth={8}
                animation
                /> 
                 <View style={{marginHorizontal:'5%',marginBottom:20,marginTop:-15}}>
                <Text style={{fontSize:14,letterSpacing:0.3,color:'#000000'}}>Cushions Cleaning(Set of 5)</Text>
                <Text style={{color:'#848484',fontSize:12,fontWeight:'bold',}}>Rs.149</Text>
              </View>          
              </View>


              <View style={{backgroundColor:'#ffffff',marginVertical:'5%',}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'5%',marginTop:5}}>
                <Text style={{fontSize:18,letterSpacing:0.3,fontWeight:'bold',color:'#000000',width:'70%'}}>Salon At Home For Women Offers</Text>
                <Text style={{color:'#9933ff',fontSize:12,marginTop:5}}>See more</Text>
              </View>
              <View style={{flexDirection:'row',marginHorizontal:'5%',marginVertical:'2%'}}>
                <Text style={{fontSize:14,letterSpacing:0.3,color:'#009933'}}>25k orders</Text>
                <Text style={{color:'#848484',fontSize:12,marginTop:2,marginLeft:5}}>this month</Text>
              </View>   
                  <FlatListSlider
                data={images1}
                height={200}
                timer={5000}
                width={280}
                separatorWidth={25}
                onPress={item => alert(JSON.stringify(item))}
                contentContainerStyle={{paddingHorizontal: 16,}}
                indicatorContainerStyle={{top:30}}
                indicatorActiveColor={'#8e44ad'}
                indicatorInActiveColor={'#d9d9d9'}
                indicatorActiveWidth={8}
                animation
                /> 
                 <View style={{marginHorizontal:'5%',marginBottom:20,marginTop:-15}}>
                <Text style={{fontSize:14,letterSpacing:0.3,color:'#000000'}}>Cushions Cleaning(Set of 5)</Text>
                <Text style={{color:'#848484',fontSize:12,fontWeight:'bold',}}>Rs.149</Text>
              </View>          
              </View>

             

            </ScrollView>
                
            <Loader/>
        </KeyboardAvoidingView>
    )
}

export default Search;
