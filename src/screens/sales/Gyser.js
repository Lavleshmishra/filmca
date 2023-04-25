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
import {FlatListSlider} from 'react-native-flatlist-slider';


const Gyser = (props) => {
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
           
             
            <View style={{backgroundColor:'#ffffff',padding:'5%'}}>
           <TouchableOpacity onPress={() => props.navigation.navigate("Saleslisting")}>
            <Image source={ImageIcons.back}  style={{height:14,width:14,marginTop:'12%'}} />
           </TouchableOpacity> 
          </View>

           <ScrollView style={{ paddingBottom: 0,backgroundColor:'#ffffff' }}>

          <View style={{backgroundColor:'#f2f2f2',padding:'6%',}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
             <Text style={{fontSize:24,fontWeight:'bold',width:'60%'}}>You currently have no ratings</Text>
             <Image source={ImageIcons.ratingstar}  style={{height:54,width:54,alignSelf:'center'}} />
            </View> 
          </View>

          <View style={{padding:'5%'}}>
            <Text style={{fontSize:16,fontWeight:'bold',}}>Introducing customer ratings</Text>
            <Text style={{fontSize:14,color:'#848484',width:'100%',marginVertical:5,letterSpacing:0.3}}>Your app rating is a reflection of how users respond to your app. Learn what affects your rating and what you can do to influence it,Your app rating is a reflection of how users respond to your app. Learn what affects your rating and what you can do to influence it.</Text>
          </View>

          <View style={{padding:'5%'}}>
            <Text style={{fontSize:16,fontWeight:'bold',}}>How can I be a 5-star customer?</Text>
            <Text style={{fontSize:14,color:'#848484',width:'100%',marginVertical:5,letterSpacing:0.3}}>Your app rating is a reflection of how users respond to your app. Learn what affects your rating and what you can do to influence it.</Text>
          </View>

          <View style={{marginHorizontal:'5%',marginTop:'5%'}}>
             <Image source={ImageIcons.heartinhand}  style={{height:54,width:54,}} />
          </View>

            <View style={{padding:'5%'}}>
            <Text style={{fontSize:16,fontWeight:'bold',}}>Empathise</Text>
            <Text style={{fontSize:14,color:'#848484',width:'100%',marginVertical:5,letterSpacing:0.3}}>Your app rating is a reflection of how users respond to your app.</Text>
          </View> 

          <View style={{marginHorizontal:'5%',marginTop:'5%'}}>
             <Image source={ImageIcons.heartinhand}  style={{height:54,width:54,}} />
          </View>

            <View style={{padding:'5%'}}>
            <Text style={{fontSize:16,fontWeight:'bold',}}>Support</Text>
            <Text style={{fontSize:14,color:'#848484',width:'100%',marginVertical:5,letterSpacing:0.3}}>Your app rating is a reflection of how users respond to your app. a reflection of how users respond to your app.</Text>
          </View> 

          <View style={{marginHorizontal:'5%',marginTop:'5%'}}>
             <Image source={ImageIcons.heartinhand}  style={{height:54,width:54,}} />
          </View>

            <View style={{padding:'5%'}}>
            <Text style={{fontSize:16,fontWeight:'bold',}}>Respect</Text>
            <Text style={{fontSize:14,color:'#848484',width:'100%',marginVertical:5,letterSpacing:0.3}}>Your app rating is a reflection of how users respond to your app.</Text>
          </View>    

          <View style={{padding:'5%',marginBottom:'20%'}}>
            <Text style={{fontSize:16,fontWeight:'bold',}}>How is customer rating calculated?</Text>
            <Text style={{fontSize:14,color:'#848484',width:'100%',marginVertical:5,letterSpacing:0.3}}>Your app rating is a reflection of how users respond to your app. Learn what affects your rating and what you can do to influence it,Your app rating is a reflection of how users respond to your app. Learn what affects your rating and what you can do to influence it.</Text>
          </View>      

            </ScrollView>
                <Editprofile/>
            <Loader/>
        </KeyboardAvoidingView>
    )
}

export default Gyser;
