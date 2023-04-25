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


const Searchloc = (props) => {
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
      const DATA1 = [
       {
        text:'Air Condition',
        image:ImageIcons.salonman,
       },
        {
       text:'Water Purifier',
        image:ImageIcons.salonwoman,
       },
        {
        text:'Geyser',
        image:ImageIcons.salonwoman,
       },
       {
        text:'Washing Machine',
        image:ImageIcons.salonman,
       },
        

     ];

      const DATA2 = [
       {
        text:'Salon for Men',
        image:ImageIcons.salonman,
       },
        {
       text:'Salon at Home for Women',
        image:ImageIcons.salonwoman,
       },

     ];

     const DATA3 = [
       {
        text:'Salon for Men',
        image:ImageIcons.cleanclap,
       },
        {
       text:'Salon for Women',
        image:ImageIcons.repairclap,
       },
        {
        text:'Spa for Women',
        image:ImageIcons.repairclap,
       },
       {
        text:'Massage for Men',
        image:ImageIcons.cleanclap,
       },
        {
        text:'Hair services',
        image:ImageIcons.repairclap,
       }, 

     ];

      const renderItem = ({ item ,index }) => {
     return(
       <TouchableOpacity onPress={() => props.navigation.navigate("Vendor")} style={{paddingHorizontal:6, borderRightWidth:1,borderColor:'#f2f2f2',justifyContent:'center'}}>
          <Image source={item.image} style={styles.manclap} />
          <Text style={{fontSize:12,textAlign:'center',maxWidth:55,marginVertical:8}}>{item.text}</Text>
       </TouchableOpacity>
  );
}

 const renderItem2 = ({ item ,index }) => {
     return(
       <View style={{padding:8}}>
          <Image source={item.image} style={styles.manclap2} />
          <Text style={{fontSize:12,textAlign:'center',marginVertical:8}}>{item.text}</Text>
       </View>
  );
}

const renderItem3 = ({ item ,index }) => {
     return(
       <View style={{paddingHorizontal:6, borderRightWidth:1,borderColor:'#f2f2f2',justifyContent:'center'}}>
          <Image source={item.image} style={styles.manclap3} />
          <Text style={{fontSize:12,textAlign:'center',maxWidth:55,marginVertical:8}}>{item.text}</Text>
       </View>
  );
}




    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}style={styles.root}>
            <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true} />
            <ScrollView style={{ paddingBottom: 0,backgroundColor:'#ffffff' }}>
             <View style={{marginTop:'10%'}}>

                <View>
               <View style={{width:'90%',alignSelf:'center',marginTop:'7%'}}>
                <TextInput  style={styles.chatinput}
                    placeholder=" Search for locality, city etc."
                    placeholderTextColor="#999999" 
                    onChangeText={onChangeText1}
                    value={subMsg}
                />
                <TouchableOpacity onPress={() => props.navigation.navigate("Saleslisting")} style={{position:'absolute',marginTop:'5%',marginHorizontal:'3%'}}>
                <Image source={ImageIcons.back}  style={{height:16,width:16,}} /> 
                </TouchableOpacity>
            </View>
            </View>

                

                <TouchableOpacity onPress={() => props.navigation.navigate("Reportlisting")}  style={{flexDirection:'row',marginVertical:'4%',marginHorizontal:'5%'}}>
                  <Image source={ImageIcons.currentloc}  style={{height:20,width:20,marginTop:8}} />
                  <Text style={{fontSize:16,marginLeft:'3%',color:'#990099',marginTop:8}}>Use Current Location</Text>
                 
                </TouchableOpacity>
              </View>

              <View style={{backgroundColor:'#f2f2f2',height:20}}></View>

              <View style={{marginTop:'5%',flexDirection:'row',alignSelf:'center'}}>
              <Text style={{textAlign:'center',marginTop:'2%',fontSize:12}}>powered by</Text>
              <Image source={ImageIcons.google}  style={{height:38,width:38,marginLeft:'1%'}} />
              </View>


            </ScrollView>
                <Editprofile/>
            <Loader/>
        </KeyboardAvoidingView>
    )
}

export default Searchloc;
