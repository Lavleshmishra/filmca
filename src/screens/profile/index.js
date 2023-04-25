import React, { useEffect, useState } from 'react';
import { Text, View,Button,ScrollView,Image,KeyboardAvoidingView, FlatList,PanelContent, StatusBar, TouchableOpacity } from 'react-native';
import { Fonts, Colors,ImageIcons } from '../../common';
import Loader from '../../components/modals/Loader';
import styles from './styles';
import { SwipeablePanel } from 'rn-swipeable-panel';
//import SwipeUpDown from 'react-native-swipe-up-down';
//import SwipeUpDownModal from 'react-native-swipe-modal-up-down';
import Editprofile from '../../screens/profile/Editprofile';


const Profile = (props) => {    
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
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled" style={{backgroundColor:"#ffffff"}}>
          
          <View style={{backgroundColor:'#FFFFFF',padding:'4%',elevation:4}}>
            <Text style={{fontSize:16}}>Verified Customer</Text>
            <Image source={ImageIcons.editclap}  style={styles.editclap} />
            <Text style={{fontSize:16,color:'#848484'}}>+91 1234567898</Text>
          </View>

          <TouchableOpacity onPress={() => props.navigation.navigate("Help")} style={styles.helpview}>
            <Image source={ImageIcons.msgclap}  style={styles.msgclap} />
            <Text style={{fontSize:16,marginLeft:'4%'}}>Help Center</Text>
          </TouchableOpacity>

           <View style={{backgroundColor:'#FFFFFF',elevation:4,}}>
              <View style={styles.helpviewbig}>
                <Image source={ImageIcons.handshake}  style={styles.msgclap} />
                <Text style={{fontSize:16,marginLeft:'4%'}}>Register As Partner</Text>
              </View>
              <View style={{borderBottomWidth:1,borderColor:'#d9d9d9'}}></View>

              <View style={styles.helpviewbig}>
                <Image source={ImageIcons.locationclap}  style={styles.msgclap} />
                <Text style={{fontSize:16,marginLeft:'4%'}}>Manage Addresses</Text>
              </View>
              <View style={{borderBottomWidth:1,borderColor:'#d9d9d9'}}></View>

              <TouchableOpacity onPress={() => props.navigation.navigate("Washing")} style={styles.helpviewbig}>
                <Image source={ImageIcons.ucclap}  style={styles.msgclap} />
                <Text style={{fontSize:16,marginLeft:'4%'}}>About Urban Company</Text>
              </TouchableOpacity>
              <View style={{borderBottomWidth:1,borderColor:'#d9d9d9'}}></View>

              <View style={styles.helpviewbig}>
                <Image source={ImageIcons.shareclap}  style={styles.msgclap} />
                <Text style={{fontSize:16,marginLeft:'4%'}}>Share Urban Company</Text>
              </View>
              <View style={{borderBottomWidth:1,borderColor:'#d9d9d9'}}></View>

              <View style={styles.helpviewbig}>
                <Image source={ImageIcons.referclap}  style={styles.msgclap} />
                <Text style={{fontSize:16,marginLeft:'4%'}}>Refer & Earn</Text>
              </View>
              <View style={{borderBottomWidth:1,borderColor:'#d9d9d9'}}></View>

              <TouchableOpacity onPress={() => props.navigation.navigate("Gyser")} style={styles.helpviewbig}>
                <Image source={ImageIcons.starclap}  style={styles.msgclap} />
                <Text style={{fontSize:16,marginLeft:'4%'}}>My Rating</Text>
              </TouchableOpacity>
              <View style={{borderBottomWidth:1,borderColor:'#d9d9d9'}}></View>

              <View style={styles.helpviewbig}>
                <Image source={ImageIcons.giftclap}  style={styles.msgclap} />
                <Text style={{fontSize:16,marginLeft:'4%'}}>My Gift Cards</Text>
              </View>
              <View style={{borderBottomWidth:1,borderColor:'#d9d9d9'}}></View>

              <View style={styles.helpviewbig}>
                <Image source={ImageIcons.walletclap}  style={styles.msgclap} />
                <Text style={{fontSize:16,marginLeft:'4%'}}>My Wallet</Text>
              </View>
              <View style={{borderBottomWidth:1,borderColor:'#d9d9d9'}}></View>

              <View style={styles.helpviewbig}>
                <Image source={ImageIcons.walletclap}  style={styles.msgclap} />
                <Text style={{fontSize:16,marginLeft:'4%'}}>Scheduled Booking</Text>
              </View>
              <View style={{borderBottomWidth:1,borderColor:'#d9d9d9'}}></View>

              <View style={styles.helpviewbig}>
                <Image source={ImageIcons.ratethumbclap}  style={styles.msgclap} />
                <Text style={{fontSize:16,marginLeft:'4%'}}>Rate Urban Company</Text>
              </View>
              <View style={{borderBottomWidth:1,borderColor:'#d9d9d9'}}></View>

              <View style={styles.helpviewbig}>
                <Image source={ImageIcons.payclap}  style={styles.msgclap} />
                <Text style={{fontSize:16,marginLeft:'4%'}}>Payment Options</Text>
              </View>
              <View style={{borderBottomWidth:1,borderColor:'#d9d9d9'}}></View>

              <View style={styles.helpviewbig}>
                <Image source={ImageIcons.settingclap}  style={styles.msgclap} />
                <Text style={{fontSize:16,marginLeft:'4%'}}>Settings</Text>
              </View>
              <View style={{borderBottomWidth:1,borderColor:'#d9d9d9'}}></View>
              
              <View style={{alignItems:'center',marginVertical:'7%'}}>
                <Text style={{fontSize:16,color:'#ff0000'}}>Logout</Text>
              </View>

              <View style={{alignSelf:'center',backgroundColor:'#f2f2f2',padding:'1.2%',borderRadius:20,marginBottom:'18%'}}>
                <Text style={{fontSize:12,color:'#848484'}}>7.4.32 R185</Text>
              </View>


           </View>

           </ScrollView>
           <Editprofile/>
    </KeyboardAvoidingView>
    )
}



export default Profile;