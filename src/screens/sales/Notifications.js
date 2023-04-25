import React, { useEffect, useState } from 'react';
import { Text, KeyboardAvoidingView, View, TextInput, FlatList, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Fonts, Colors, ImageIcons, Api } from '../../common';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './storestyles';
import moment from 'moment';
import Loader from '../../components/modals/Loader';
import Editprofile from '../../screens/profile/Editprofile';
import { SwipeablePanel } from 'rn-swipeable-panel';
import { RadioButton, Provider, Portal, Button, } from 'react-native-paper';
import Modal from 'react-native-modal'
import { FlatListSlider } from 'react-native-flatlist-slider';
import tw from 'twrnc';


const Notifications = (props) => {
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


  const loginId = props?.loginCredentials?.data?._id

  useEffect(() => {
    props.getnotification(loginId);
    console.log("props.getnotificationlist======>>>", props?.getnotificationlist);

  }, [])
  const containerStyle = { backgroundColor: 'red', padding: '7%', marginHorizontal: '5%', alignItems: 'center', };


  const renderItem = ({ item, index }) => {
    return (
      <View>

        <View style={tw`bg-white rounded w-full mx-2 flex-row mb-0.5 p-2 py-4`} >
          <View style={tw`w-2/12 items-center`}>
            {item?.from?.profileImage != null ?
              <Image source={{ uri: `${Api.imageUri}${item?.from?.profileImage}` }} style={tw`w-15 h-15 rounded-full	mt-1`} />
              :
              <Image source={ImageIcons.man} style={tw`w-15 h-15 rounded-full	mt-1`} />
            }
          </View>
          <View style={tw`flex-row items-center	w-10/12`}>
            <View style={tw` w-8/12`}>
              <Text style={tw` text-black text-base font-bold ml-2`} >{item?.from?.fullName}</Text>
              <Text style={tw`text-[#808080] text-sm font-semibold  ml-2`} >{item.message}</Text>
            </View>
            <View style={tw` w-4/12 pr-5`}>
              <Text style={tw`text-black text-xs text-right	 font-semibold  `} >{moment(item?.createdAt).format("h:mm a")}</Text>
            </View>
          </View>

        </View>

      </View>
    );
  }


  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
      <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true} />
      <ScrollView style={tw``}>

        <View style={tw`mx-3 mt-6`}>
          {props?.getnotificationlist?.length > 0 ?
            <FlatList
              data={props?.getnotificationlist}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            :
            <Text style={tw`text-[#000] text-[5] font-bold text-center	mt-20`}>No Notifications</Text>
          }
        </View>



      </ScrollView>

      <Loader />
    </KeyboardAvoidingView>
  )
}

export default Notifications;
