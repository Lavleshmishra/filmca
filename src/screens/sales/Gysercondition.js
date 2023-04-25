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


const Gysercondition = (props) => {
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
            <ScrollView style={{ paddingBottom: 0 }}>
             
              <View style={{backgroundColor:'#ffffff',}}>
                  <FlatListSlider
                data={images1}
                height={360}
                timer={5000}
                onPress={item => alert(JSON.stringify(item))}
                contentContainerStyle={{paddingHorizontal: 1}}
                indicatorContainerStyle={{position:'absolute', bottom: 15}}
                indicatorActiveColor={'#8e44ad'}
                indicatorInActiveColor={'#ffffff'}
                indicatorActiveWidth={8}
                animation
                />            
              </View>

              <View style={{flexDirection:'row',marginHorizontal:'5%',marginVertical:'2%'}}>
                <View>
                  <Image source={ImageIcons.bargraph}  style={{height:18,width:18,}} />
                </View>
                <Text style={{color:"#848484",marginLeft:5}}>1,575 times booked this month</Text>
              </View> 

              <View style={{backgroundColor:'#ffffff',padding:'5%'}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Geyser Video Consult (Free)</Text>
                <View style={{borderBottomWidth:1,borderColor:'#f2f2f2',width:'98%',alignSelf:'center',marginVertical:'7%'}}></View>
                 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={{fontSize:14,fontWeight:'bold'}}>Hindi</Text>
                  <View style={{borderWidth:0.1,borderRadius:7,borderColor:'#d9d9d9',height:28,width:70,elevation:1,right:5}}>
                      <Text style={{fontSize:16,color:'#3333cc',textAlign:'center',top:3}}>Select</Text>
                   </View>
                 </View>
              </View>

              <View style={{backgroundColor:'#FFFFFF',padding:'5%',flexDirection:'row',marginVertical:'5%',}}>
                 <View>
                  <Image source={ImageIcons.uclogo}  style={{height:44,width:70,}} />
                 </View> 
                   <Text style={{marginLeft:'2%',alignSelf:'center'}}>Hygienic service. Everytime.</Text>    
              </View>

              <View style={{backgroundColor:'#ffffff',padding:'4%',}}>
                <Text style={styles.quicktext}>Quick help from our senior experts</Text>
                <View style={styles.minormajorview}>
                 <View>
                   <View style={styles.minorview}>
                      <Text style={styles.minortext}>MINOR ISSUE</Text>
                   </View>
                     <Text style={styles.gettext}>Get your appliance repaired in under 10 mins</Text>
                 </View>
                 <View style={{borderRightWidth:1,borderColor:'#d9d9d9',height:45}}></View>
                 <View>
                   <View style={styles.majorview}>
                      <Text style={styles.majortext}>MAJOR ISSUE</Text>
                   </View>
                     <Text style={styles.gettext1}>Get accurate diagnosis & estimate</Text>
                 </View>
                </View> 
                <View style={{flexDirection:'row',justifyContent:'center',marginVertical:'2%'}}>
                  <Image source={ImageIcons.clockclap}  style={{height:14,width:14,marginTop:2}} />
                  <Text style={{fontSize:12,color:'#848484',marginLeft:'2%'}}>Available between 7 AM - 11:30 PM</Text>
                </View>
              </View>

              <View style={{backgroundColor:'#ffffff',padding:'4%',marginVertical:'5%',}}>
              <View style={{backgroundColor:'#f2f2f2',padding:'4%',borderRadius:10}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                 <View>
                   <Text style={styles.howtext}>How it works</Text>
                   <Text style={{fontSize:12,color:'#848484'}}>Our expert will call you within a minute</Text>
                  </View>
                  <View>
                    <Image source={ImageIcons.videocall}  style={{height:34,width:34,marginTop:2}} />
                  </View>
                </View> 
                <View style={{ borderStyle: 'dotted',borderColor:'#d9d9d9', borderWidth: 1,borderRadius: 1,marginVertical:'5%',width:'70%'}}></View>
                <View style={{flexDirection:'row',marginVertical:'4%'}}>
                  <Image source={ImageIcons.one}  style={{height:24,width:24,borderRadius:20}} />
                  <Text style={{fontSize:12,color:'#848484',alignSelf:'center',marginLeft:'4%'}}>Book a video call request</Text>
                </View>
                 <View style={{flexDirection:'row',marginVertical:'4%'}}>
                  <Image source={ImageIcons.two}  style={{height:24,width:24,borderRadius:20}} />
                  <Text style={{fontSize:12,color:'#848484',alignSelf:'center',marginLeft:'4%'}}>Talk to our expert over Whatsapp call</Text>
                </View>
                 <View style={{flexDirection:'row',marginVertical:'4%'}}>
                  <Image source={ImageIcons.thre}  style={{height:24,width:24,borderRadius:20}} />
                  <Text style={{fontSize:12,color:'#848484',alignSelf:'center',marginLeft:'4%'}}>Get accurate diagnosis and resolution</Text>
                </View>
                 <View style={{flexDirection:'row',marginVertical:'4%'}}>
                  <Image source={ImageIcons.four}  style={{height:24,width:24,borderRadius:20}} />
                  <Text style={{fontSize:12,color:'#848484',alignSelf:'center',marginLeft:'4%'}}>Book an in-person visit only if required</Text>
                </View> 
              </View>
              <View style={{flexDirection:'row',alignSelf:'center',marginVertical:'4%'}}>
                <Image source={ImageIcons.info}  style={{height:14,width:14,borderRadius:20}} />
                <Text style={{fontSize:13,color:'#000000',marginLeft:'2%'}}>Please be near your appliance before the call</Text>
              </View>
              </View>

              <View style={{backgroundColor:'#ffffff',padding:'4%'}}>
              <Text style={[styles.howtext,{marginVertical:'2%'}]}>Our promise</Text>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:'6%'}}>
              <View>
                <Image source={ImageIcons.accuracy}  style={{height:18,width:16,borderRadius:20,alignSelf:'center'}} />
                <Text style={{color:'#000000',width:100,textAlign:'center'}}>Accurate diagnosis</Text>
              </View>
              <View>
                <Image source={ImageIcons.rupee}  style={{height:16,width:16,borderRadius:20,alignSelf:'center'}} />
                <Text style={{color:'#000000',width:100,textAlign:'center'}}>Correct estimates</Text>
              </View>
              <View>
                <Image source={ImageIcons.fastcharge}  style={{height:16,width:16,borderRadius:20,alignSelf:'center'}} />
                <Text style={{color:'#000000',width:110,textAlign:'center'}}>Quick resolution in 10 mins</Text>
              </View>
              </View>
             </View>

             <View style={{backgroundColor:'#ffffff',padding:'4%',marginVertical:'5%'}}>
                   <Text style={{fontSize:12,color:'#848484'}}>OUR UC EXPERT</Text>
                   <Text style={[styles.howtext,{color:'#000000'}]}>15+ years of industry experience</Text>
                    <Image source={ImageIcons.expimg}  style={{height:170,width:'100%',borderRadius:20,alignSelf:'center',marginVertical:'5%'}} />

                    <View style={{flexDirection:'row',justifyContent:'space-around',marginVertical:'2%'}}>
                      <View style={{flexDirection:'row'}}>
                        <Image source={ImageIcons.fillstar}  style={{height:32,width:32,borderRadius:20,alignSelf:'center'}} />
                        <View style={{marginLeft:'4%'}}>
                          <Text style={{fontSize:16,fontWeight:'bold'}}>15,000+</Text>
                          <Text style={{fontSize:12,color:'#848484'}}>Appliances fixed</Text>
                        </View>
                      </View>
                      <View style={{flexDirection:'row'}}>
                        <Image source={ImageIcons.trophy}  style={{height:32,width:32,borderRadius:22,alignSelf:'center'}} />
                        <View  style={{marginLeft:'4%'}}>
                          <Text style={{fontSize:16,fontWeight:'bold'}}>Skill India</Text>
                          <Text style={{fontSize:12,color:'#848484'}}>Certified experts</Text>
                        </View>
                      </View>

                    </View>
             </View>

              <View style={{flexDirection:'row',marginBottom:'20%',backgroundColor:'#ffffff',marginVertical:'2%',padding:'5%'}}>
                        <Image source={ImageIcons.lock}  style={{height:24,width:24,borderRadius:22,alignSelf:'center'}} />
                        <View  style={{marginLeft:'4%'}}>
                          <Text style={{fontSize:16,fontWeight:'bold'}}>Data and Privacy</Text>
                          <Text style={{fontSize:12,color:'#848484'}}>Your consultation will be private and confidential</Text>
                        </View>
                      </View>
              

            </ScrollView>
                <Editprofile/>
            <Loader/>
        </KeyboardAvoidingView>
    )
}

export default Gysercondition;
