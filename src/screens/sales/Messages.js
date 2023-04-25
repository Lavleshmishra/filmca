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


const Messages = (props) => {
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
    closeOnTouchOutside: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want
  });
  const [isPanelActive, setIsPanelActive] = useState(false);

  const [isaction, setisaction] = useState(true);
  const loginId = props?.loginCredentials?.data?._id
  useEffect(() => {
    props.getmessage(loginId);
    console.log("props.getmessagelist======>>>", props?.getmessagelist);

  }, [])

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
  const containerStyle = { backgroundColor: 'red', padding: '7%', marginHorizontal: '5%', alignItems: 'center', };



  const DATA = [
    {

      image: ImageIcons.womanclap,
      text1: 'Glynden Kenzie',
      text2: 'Yo I need my shoulder pad.. ',
      text3: '8:44 pm',

    },
    {
      image: ImageIcons.womanclap,
      text1: 'Jonathan Williams',
      text2: 'Yo I need my shoulder pad..',
      text3: '6:29 pm',

    },
    {
      image: ImageIcons.womanclap,
      text1: 'Jianna Maarten',
      text2: 'Yo I need my shoulder pad..',
      text3: '03:11 pm',

    },


  ];





  const renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity onPress={() => props.navigation.navigate("Glynden", { fromUser: item.fromUser })}>

          <View style={tw`bg-white rounded w-full mx-2 flex-row mb-0.5 p-2 py-4`} >
            <View style={tw`w-2/12 items-center`}>
              {item?.fromUser?.profileImage != null ?
                <Image source={{ uri: `${Api.imageUri}${item?.fromUser?.profileImage}` }} style={tw`w-15 h-15 rounded-full	mt-1`} />
                :
                <Image source={ImageIcons.man} style={tw`w-15 h-15 rounded-full	mt-1`} />
              }
            </View>
            <View style={tw`flex-row items-center	w-10/12`}>
              <View style={tw` w-7/12`}>
                <Text style={tw` text-black text-base font-bold ml-2`} >{item?.fromUser?.fullName}</Text>
                <Text style={tw`text-[#808080] text-sm font-semibold  ml-2`} >{item.message}</Text>
              </View>
              <View style={tw` w-5/12 pr-5`}>
                <Text style={tw` text-black text-xs text-right font-semibold  `} >{moment(item?.createdAt).startOf('hour').fromNow()}</Text>
              </View>
            </View>

          </View>
        </TouchableOpacity>
      </View>
    );
  }



  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
      <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true} />
      <ScrollView style={tw``}>
        {/* <View style={tw`mx-auto mt-6`}><Text style={tw`text-base font-bold`}>Today</Text></View> */}

        <View style={tw`mx-3 mt-6`}>
          {props?.getmessagelist?.length > 0 ?
            <FlatList
              data={props?.getmessagelist}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            :
            <Text style={tw`text-[#000] text-[5] font-bold text-center	mt-20`}>No Messages</Text>
          }
        </View>

      </ScrollView>

      <Loader />
    </KeyboardAvoidingView>
  )
}

export default Messages;
