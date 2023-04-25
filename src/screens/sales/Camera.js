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


const Camera = (props) => {
  const {
    navigation,
    values,
    errors,
    handleChange,
    handleSubmit,
  } = props;
  const userArray = props?.route?.params?.user
  console.log("user====>>", userArray)
  console.log("props====>>", props)
  const loginId = props?.loginCredentials?.data?._id
  console.log("loginId===>", loginId);

  useEffect(() => {
    props.mycrulist(loginId);
    console.log("props.getmycrulist======>>>", props?.getmycrulist);

  }, [])
  const DATA3 = [
    {
      text2: 'Jonathan Williams',

      image: ImageIcons.womanclap,
      text1: 'Cinematographer',

    },

  ];

  const renderItem3 = ({ item, index }) => {
    return (
      <View style={tw`mx-2 w-5.1/12`}>
       
        {item?._id == loginId ?
        <TouchableOpacity  onPress={() => props.navigation.navigate("Matthew", { userId: item?._id })}>
          <View style={tw` bg-white mt-5 p-5 items-center  rounded-[3] `} >
            <Text style={tw`text-center text-black text-xs font-semibold mt-1`} >{item.fullName}</Text>
            <View style={tw`items-center`}>

              {item?.profileImage != null ?
                <Image source={{ uri: `${Api.imageUri}${item?.profileImage}` }} style={tw`w-24 h-24 rounded-full	mt-1`} />
                :
                <Image source={ImageIcons.man} style={tw`w-24 h-24 rounded-full	mt-1`} />
              }
            </View>
            <Text style={tw`text-center text-black text-xs font-semibold mt-1`} >{item?.workDepartments[0]?.position[0]?.name}</Text>
          </View>
        </TouchableOpacity>
        :
        <TouchableOpacity  onPress={() => props.navigation.navigate("Glyndenprofile", { userId: item?._id })}>
          <View style={tw` bg-white mt-5 p-5 items-center  rounded-[3] `} >
            <Text style={tw`text-center text-black text-xs font-semibold mt-1`} >{item.fullName}</Text>
            <View style={tw`items-center`}>

              {item?.profileImage != null ?
                <Image source={{ uri: `${Api.imageUri}${item?.profileImage}` }} style={tw`w-24 h-24 rounded-full	mt-1`} />
                :
                <Image source={ImageIcons.man} style={tw`w-24 h-24 rounded-full	mt-1`} />
              }
            </View>
            <Text style={tw`text-center text-black text-xs font-semibold mt-1`} >{item?.workDepartments[0]?.position[0]?.name}</Text>
          </View>
        </TouchableOpacity>
  }
      </View>

    );
  }



  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
      <View style={tw`flex-row py-3 px-7 justify-between	 bg-[#fff]`}>
        <View>
          <TouchableOpacity onPress={() => props.navigation?.goBack()}>
            <Image source={ImageIcons.backarrow} style={[tw`w-4 h-7  `, { tintColor: '#5fafcf' }]} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={tw`text-center text-black text-[5] font-bold mt-1`} >{userArray?.departmentName}</Text>
        </View>
        <View>
          {props?.getprofilelist?.profileImage != null ?
            <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
              <Image source={{ uri: `${Api.imageUri}${profilename?.getprofilelist?.profileImage}` }} style={{ width: 35, height: 35, borderRadius: 100 }} />
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => props.navigation.navigate("Matthew")}>
              <Image source={ImageIcons.womanclap} style={{ width: 35, height: 35, borderRadius: 100 }} />
            </TouchableOpacity>
          }
        </View>
      </View>
      <ScrollView style={tw`w-full mx-3 mb-10 `}>
        <FlatList
          data={userArray?.user}
          numColumns={2}
          renderItem={renderItem3}
          keyExtractor={item => item.id}
        />
      </ScrollView>

      {/* <Editprofile /> */}
      <Loader />
    </KeyboardAvoidingView>
  )
}

export default Camera;
