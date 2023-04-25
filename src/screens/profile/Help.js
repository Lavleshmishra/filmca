import React, { useEffect, useState } from 'react';
import { Text, View,Button,ScrollView,Image,KeyboardAvoidingView, FlatList,PanelContent, StatusBar, TouchableOpacity } from 'react-native';
import { Fonts, Colors,ImageIcons } from '../../common';
import Loader from '../../components/modals/Loader';
import styles from './styles';
import { SwipeablePanel } from 'rn-swipeable-panel';
//import SwipeUpDown from 'react-native-swipe-up-down';
//import SwipeUpDownModal from 'react-native-swipe-modal-up-down';
import Editprofile from '../../screens/profile/Editprofile';


const Help = (props) => {    
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={styles.listItem}>
                <View style={{ width: '100%' }}>
                    
                </View>
            </TouchableOpacity>
        )
    }

    const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    //onlySmall:true,
    showCloseButton: false,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want
  });
  const [isPanelActive, setIsPanelActive] = useState(false);



  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };

    const [ShowComment, setShowModelComment] = useState(false);
  const [animateModal, setanimateModal] = useState(false);

  const DATA = [
       { 
        text1:"Logistics Sale",
        text2:"No Description added",
        text3:"Organization Actions",
       },
       ];
        
           

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}style={styles.registrationRoot1}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <View style={{backgroundColor:'#f2f2f2',padding:'3.5%'}}>
           <TouchableOpacity onPress={() => props.navigation.navigate("Saleslisting")}>
            <Image source={ImageIcons.back}  style={{height:14,width:14,marginTop:'12%'}} />
           </TouchableOpacity> 
            <Text style={{fontSize:24,marginTop:'12%',fontWeight:'bold'}}>How can we help you?</Text>
          </View>

         

           <View style={{backgroundColor:'#FFFFFF',}}>
           <Text style={{fontSize:18,margin:'4%',fontWeight:'bold'}}>All topics</Text>
              <View style={{flexDirection:'row',justifyContent:'space-between',margin:'4%'}}>
              <View style={styles.helpviewbig2}>
                <Image source={ImageIcons.profileclap}  style={styles.msgclap} />
                <Text style={{fontSize:16,marginLeft:'9%'}}>Account</Text> 
              </View> 
              <Image source={ImageIcons.rightclap}  style={{height:23,width:23,}} />
              </View>

              <View style={{borderBottomWidth:1,borderColor:'#d9d9d9'}}></View>
              
              <View style={{flexDirection:'row',justifyContent:'space-between',margin:'4%'}}>
              <View style={styles.helpviewbig2}>
                <Image source={ImageIcons.startuc}  style={{height:22,width:23,}} />
                <Text style={{fontSize:16,marginLeft:'6%'}}>Getting started with UC</Text>
              </View>
              <Image source={ImageIcons.rightclap}  style={{height:23,width:23,}} />
              </View>

              <View style={{borderBottomWidth:1,borderColor:'#d9d9d9'}}></View>
              
              <View style={{flexDirection:'row',justifyContent:'space-between',margin:'4%'}}>
              <View style={styles.helpviewbig2}>
                <Image source={ImageIcons.paycredit}  style={{height:22,width:23,}} />
                <Text style={{fontSize:16,marginLeft:'6%'}}>Payment & UC credits</Text>
              </View>
              <Image source={ImageIcons.rightclap}  style={{height:23,width:23,}} />
              </View>

              <View style={{borderBottomWidth:1,borderColor:'#d9d9d9'}}></View>
              
              <View style={{flexDirection:'row',justifyContent:'space-between',margin:'4%'}}>
              <View style={styles.helpviewbig2}>
                <Image source={ImageIcons.membership}  style={styles.msgclap} />
                <Text style={{fontSize:16,marginLeft:'6%'}}>UC Plus membership</Text>
              </View>
              <Image source={ImageIcons.rightclap}  style={{height:23,width:23,}} />
              </View>

              <View style={{borderBottomWidth:1,borderColor:'#d9d9d9'}}></View>
              
              <View style={{flexDirection:'row',justifyContent:'space-between',margin:'4%'}}>
              <View style={styles.helpviewbig2}>
                <Image source={ImageIcons.referclap}  style={styles.msgclap} />
                <Text style={{fontSize:16,marginLeft:'6%'}}>UC Safety</Text>
              </View>
              <Image source={ImageIcons.rightclap}  style={{height:23,width:23,}} />
              </View>

              <View style={{borderBottomWidth:1,borderColor:'#d9d9d9'}}></View>
              
              <View style={{flexDirection:'row',justifyContent:'space-between',margin:'4%'}}>
              <View style={styles.helpviewbig2}>
                <Image source={ImageIcons.starclap}  style={styles.msgclap} />
                <Text style={{fontSize:16,marginLeft:'6%'}}>Warrenty</Text>
              </View>
              <Image source={ImageIcons.rightclap}  style={{height:23,width:23,}} />
              </View>

           </View>

             <View style={{backgroundColor:'#ffffff',marginVertical:'5%',}}>
             <View style={{flexDirection:'row',marginVertical:'3%',marginHorizontal:'5%'}}>
              <View>
               <Text style={{fontSize:16,fontWeight:'bold'}}>How are we doing?</Text>
               <Text style={{fontSize:14,width:'80%',color:"#848484"}}>Report a bug or suggest ways to make UC better</Text>
               </View>
               <View style={{alignSelf:'center',right:15}}>
                 <Image source={ImageIcons.best}  style={{height:45,width:45,borderRadius:20}} />
               </View>
               </View>

              <View style={styles.feedbackview}>
                <Text style={{fontSize:14,padding:'5%',textAlign:'center',fontWeight:'bold'}}>Give Feedback</Text>
              </View>

             </View>

           </ScrollView>
           <Editprofile/>
    </KeyboardAvoidingView>
    )
}



export default Help;