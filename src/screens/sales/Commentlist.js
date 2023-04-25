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


const Commentlist = (props) => {
  const {
    navigation,
    values,
    errors,
    handleChange,
    handleSubmit,
  } = props;

  const postid = props?.route?.params?.post_Id
  const loginId = props?.loginCredentials?.data?._id
  console.log("loginId===>", loginId)
  const [visible, setVisible] = React.useState(false);
  const [subMsg, onChangeText1] = React.useState("");
  const [msg, setMsg] = React.useState("");

 
  useEffect(() => {
    setTimeout(function(){
      setVisible(false)
    },2000)
    props.commentIdlist(postid);
    console.log("props.getcommentidlist======>>>", props?.getcommentidlist);

  }, [])

  const handleSubmitcomment = async () => {
    if (msg == "") {
      Alert.alert(CommonStrings.AppName, "")
    } else {
      let request = {
        "post": postid,
        "commentedBy": loginId,
        "message": msg,
      }

      props.commentAdd(request, props.navigation)
      setMsg('');
      props.commentIdlist(postid);
      props.socialfeedlist();
    }
  };
  // const hideisaction = () => {
  //   setisaction(false);
  // };
  const containerStyle = { backgroundColor: 'red', padding: '7%', marginHorizontal: '5%', alignItems: 'center', };

  const renderItem = ({ item, index }) => {
    return (
      <View style={tw`mt-2`}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Air")} style={tw`flex-row justify-between	py-5 px-4 w-full `}>
          <View style={tw`flex-row items-center ml-2 w-3/12`}>
            {item?.commentedBy?.profileImage != null ?
              <Image source={{ uri: `${Api.imageUri}${item?.commentedBy?.profileImage}` }} style={tw`w-20 h-20 rounded-full`} />
              :
              <Image source={ImageIcons.man} style={tw`w-20 h-20 rounded-full`} />
            }

          </View>
          <View style={tw`flex-row items-center w-9.2/12	`}>
            <View style={tw`ml-2 w-11.3/12`}>
              <View style={tw`flex-row items-center	justify-between `}>
                <Text style={tw`text-[#000]	 text-[3.4] font-bold`}>{item?.commentedBy?.fullName}</Text>

                <View style={tw`	`}>
                  <Text style={tw`text-[#000] text-center	 text-[2.4] font-bold`}>{moment(item?.createdAt).startOf('hour').fromNow()}</Text>
                </View>
              </View>
              <Text style={tw`text-[#000] text-[3.4] font-normal`}>{item.message}</Text>
            </View>

          </View>
        </TouchableOpacity>
        <View style={tw`border-b border-[#ccc] `}></View>
      </View>
    );
  }




  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
      <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true} />
      <ScrollView style={tw``}>
        <View>
          {props?.getcommentidlist?.length > 0 ?
            <View style={tw`bg-white m-4 mb-22 rounded-[3]`}>
              <FlatList
                data={props?.getcommentidlist}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
              />

            </View>
            :
            <Text style={tw`text-[#000] text-[5] font-bold text-center	mt-20`}>No Comment</Text>
          }

        </View>
      </ScrollView>
      <View style={tw`absolute bottom-0	 z-0	flex-1	bg-white flex-row justify-between	w-full p-2 px-4`}>
        <View style={tw``}>
          <TextInput
            value={msg}
            onChangeText={(text) => setMsg(text)}
            placeholder="Type Your comment here..."
            placeholderTextColor={"#000"}
            style={{ paddingLeft: "2%", color: "#000" }}
          ></TextInput>
        </View>
        <TouchableOpacity style={tw``} onPress={() => handleSubmitcomment()}>
          <Image source={ImageIcons.Sendicon} style={[tw`w-8 h-8`, { tintColor: '#5fafcf' }]} />
        </TouchableOpacity>
      </View>
      <Loader />
    </KeyboardAvoidingView>
  )
}

export default Commentlist;
