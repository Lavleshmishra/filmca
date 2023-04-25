import React, { useEffect, useState } from 'react';
import { Text, KeyboardAvoidingView, View, TextInput, FlatList, StatusBar, TouchableOpacity, ScrollView, Image, Keyboard, Alert } from 'react-native';
import { Fonts, Colors, ImageIcons } from '../../common';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './storestyles';
import { Api, Utilise, CommonStrings } from '../../common';
import ImagePicker from 'react-native-image-crop-picker';

import moment from 'moment';
import Loader from '../../components/modals/Loader';
import Editprofile from '../../screens/profile/Editprofile';
import { SwipeablePanel } from 'rn-swipeable-panel';
import { RadioButton, Provider, Portal, Button, } from 'react-native-paper';
import Modal from 'react-native-modal'
import { FlatListSlider } from 'react-native-flatlist-slider';
import VideoPlayer from 'react-native-video-player';
import tw from 'twrnc';


const Vendor = (props) => {

  const {
    navigation,
    values,
    errors,
    handleChange,
    handleSubmit,
  } = props;

  console.log("props=====>>>>>", props)
  const loginId = props?.loginCredentials?.data?._id
  const [visible, setVisible] = React.useState(true);
  const [description, setDescription] = React.useState("");
  const [msg, onChangeText2] = React.useState("");
  const [likecount, setLikecount] = React.useState(1);
  const [msgcount, setMsgcount] = React.useState(1);
  const [billImgPath, setBillImgPath] = useState("");
  const [search, setSearch] = React.useState('')

  useEffect(() => {
    setTimeout(function () {
      setVisible(false)
    }, 2000)
    props.socialfeedlist();
    console.log("props.getpostlist======>>>", props?.getpostlist);
    //setLikecount(item?.likedBy?.length)
    //props.profiledetail(loginId);
    setTimeout(function () {
      props.profiledetail(loginId);
      //setLikecount(item?.likedBy?.length)
    }, 1500);
  }, [])

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

  const handlelikeunlike = (id) => {
    setVisible(true)
    //setLikecount(likecount + 1)
    let request = {
      "_id": id,
      "userId": loginId,
    }
    props.likeunlikepost(request, props.navigation)
    props.socialfeedlist();
    setTimeout(function () {
      props.socialfeedlist();
    }, 1000);
    setTimeout(function () {
      setVisible(false)
    }, 1500);
  };

  const handleMsgcount = () => {
    setMsgcount(msgcount + 1)

  };


  const containerStyle = { backgroundColor: 'red', padding: '7%', marginHorizontal: '5%', alignItems: 'center', };
  const selectPhoto = async () => {
    ImagePicker.openPicker({
      width: 400,
      cropping: false,
      mediaType: 'any',
      compressImageQuality: 0.5,
      height: 400,
    }).then(image => {
      if (image?.path) {
        let fileName = image?.path?.split('/').pop();
        let mimeType = image?.path?.split('.').pop();
        let file = {
          'uri': image?.path,
          'type': `image/${mimeType}`,
          'name': fileName
        }
        // setFieldValue("couponImage", file);
        setBillImgPath(file);
      }
    }).catch((error) => {

    });
  }
  const handlenewpost = async () => {

    if (description == "") {
      alert('Description is required')
    } else {
      setVisible(true)
      const formData = new FormData();
      formData.append("description", description);
      formData.append("userId", loginId);
      formData.append("image", billImgPath);
      console.log('tanuformData', formData)
      props.addpostnew(formData, props.navigation)


    }
    setDescription('');
    setTimeout(function () {
      setBillImgPath('')
      props.socialfeedlist();
    }, 3000);
    setTimeout(function () {
      setVisible(false)
    }, 2000);
  }



  const renderItem = ({ item, index }) => {
    //console.log("suhfifhusfhusufhu",item?.userId?._id)
    return (
      <View style={tw`my-2 `}>
        <Text style={tw`text-[#000] text-center	 text-[3.5]  px-15 font-normal`}>{item?.userId?.fullName}</Text>

        <View style={tw`mt-7`}>

          <View style={tw`flex-row justify-between mx-4 `}>
            <View style={tw`flex-row`}>
              <Image source={ImageIcons.calendar_icon} style={tw`w-4 h-4`} />
              <Text style={tw`text-[#000] text-center	 text-[2.6] px-1 font-normal`}>{moment(item?.createdAt).format('dddd')}</Text>
            </View>
            <View style={tw`flex-row`}>
              <Text style={tw`text-[#000] text-center	 text-[2.6] px-1 font-normal`}>{moment(item?.createdAt).startOf('hour').fromNow()}</Text>
              <Image source={ImageIcons.timer} style={tw`w-5 h-5`} />
            </View>
          </View>
          <View style={tw`my-2 bg-white pt-14 px-2 mx-5   rounded-[2] `}>
            <View style={tw`py-2 `}>
              <Text style={tw`text-[#000] text-[3.3] font-normal`}>{item.description}</Text>

              <View style={tw`pt-4`}>
                {item?.image != "" &&
                  <View>
                    {item?.image.endsWith(".mp4") ?
                      <VideoPlayer
                        video={{ uri: `${Api.imageUri}${item.image}` }}
                        videoWidth={1600}
                        videoHeight={900}

                      />
                      :
                      // <View style={tw`border-2 border-[#ccc]`}>
                      <Image source={{ uri: `${Api.imageUri}${item.image}` }} style={tw`w-full h-90]`} />
                      // </View>
                    }

                  </View>
                }

              </View>
            </View>
            <View style={tw`w-full h-0.2 bg-[#ccc] mt-2`}></View>
            <View style={tw`flex-row justify-between 	items-center 	py-2`}>
              <View style={tw`flex-row items-center  w-6/12  `}>

                {item?.likedBy?.includes(loginId) == "" ?
                  <TouchableOpacity style={tw`items-center`} onPress={() => handlelikeunlike(item._id)}>
                    <Image source={ImageIcons.like} style={tw`w-6 h-6	`} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity style={tw`items-center`} onPress={() => handlelikeunlike(item._id)}>
                    <Image source={ImageIcons.redlike} style={tw`w-6 h-5`} />
                  </TouchableOpacity>

                }
                {item?.likedBy?.length > 0 ?
                  <TouchableOpacity style={tw`flex-row ml-2 `} onPress={() => props.navigation.navigate("Likelist", { post_Id: item._id })}>

                    <View style={tw` `}>
                      <Text style={tw`text-[#000] text-[3.5]  font-normal`}> {item?.likedBy?.length} Likes</Text>
                    </View>
                  </TouchableOpacity>
                  :
                  <TouchableOpacity style={tw`flex-row ml-2 `} >

                    <View style={tw``}>
                      <Text style={tw`text-[#000]	 text-[3.5]  font-normal`}> {item?.likedBy?.length} Likes</Text>
                    </View>
                  </TouchableOpacity>
                }

              </View>

              <View style={tw`flex-row items-center   `}>
                <TouchableOpacity style={tw`items-center`} onPress={() => props.navigation.navigate("Commentlist", { post_Id: item._id })}>
                  <Text style={tw`text-[#000]	 text-[3.5]  font-normal`}>{item?.comments?.length} Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw` `} onPress={() => { handleMsgcount(), props.navigation.navigate("Commentlist", { post_Id: item._id }) }}>
                  <Image source={ImageIcons.chat} style={[tw`w-8 h-8	`, { tintColor: '#5fafcf' }]} />
                </TouchableOpacity>
              </View>

            </View>

          </View>

        </View>
        <View>

        </View>
        <View style={tw`absolute  inset-x-0.7/2	 top-8		 `}>
          {/* <View style={tw`w-3 h-3 bg-[#ff0000] rounded-full absolute left-15 `}></View> */}

          {item?.userId?._id == loginId ?
            <TouchableOpacity onPress={() => props.navigation.navigate("Matthew", { userId: item?.userId?._id })}>
              {item?.userId?.profileImage != null ?
                <Image source={{ uri: `${Api.imageUri}${item?.userId?.profileImage}` }} style={tw`w-24 h-24 rounded-full	mt-1`} />
                :
                <Image source={ImageIcons.man} style={tw`w-24 h-24 rounded-full	mt-1`} />
              }
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => props.navigation.navigate("Glyndenprofile", { userId: item?.userId?._id })}>
              {item?.userId?.profileImage != null ?
                <Image source={{ uri: `${Api.imageUri}${item?.userId?.profileImage}` }} style={tw`w-24 h-24 rounded-full	mt-1`} />
                :
                <Image source={ImageIcons.man} style={tw`w-24 h-24 rounded-full	mt-1`} />
              }
            </TouchableOpacity>
          }
        </View>

      </View>
    );
  }


  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
      <ScrollView style={{ paddingBottom: 0, marginTop: 0 }}>
        <View >
          <TouchableOpacity onPress={() => props.navigation.navigate("Usersearch")}>
            <View style={tw`mt-3 flex flex-row w-11/12 mx-auto`}>
              <View style={tw`w-1.5/12 bg-white rounded-l-[2]`}>
                <Image source={ImageIcons.search} style={tw` w-6 h-6 mx-auto my-auto`} />
              </View>

              <View style={tw`bg-white text-black	pl-2 h-11 w-11/12 mx-auto rounded-r-[2]`} >

                <Text style={tw`my-auto`}>Search</Text>

              </View>

              {/* <TextInput
                style={tw`bg-white text-black	pl-2 h-11 w-10.5/12 mx-auto rounded-r-[2]`}
                placeholder="Search"
                value={search}
                onChangeText={(text) => setSearch(text)}
                placeholderTextColor={'#ccc'}
              /> */}
            </View>
            </TouchableOpacity>

            <View style={tw`bg-white m-4 rounded-[2] p-3 px-5 h-38`}>
              <View style={tw`border-b border-[#ccc] pl-5`}>
                <TextInput
                  value={description}
                  placeholder="Share work related content here..."
                  placeholderTextColor={'#D3D3D3'}
                  style={tw`text-black`}
                  onChangeText={(text) => setDescription(text)}
                  onSubmitEditing={() => handlenewpost()}
                />
              </View>
              <View style={tw`flex-row my-5 justify-center`}>
                <TouchableOpacity onPress={() => selectPhoto()}>
                  {(billImgPath.uri != "" && billImgPath.uri != undefined) ?
                    <Image source={{ uri: billImgPath.uri }} style={tw`w-10 h-10`} />
                    :
                    <Image source={ImageIcons.camrea} style={tw`w-10 h-10`} />
                  }
                </TouchableOpacity>
                <View style={tw`mr-9 ml-3`}>
                  <TouchableOpacity onPress={() => handlenewpost()} style={tw`bg-[#fff] border-[#5fafcf] border-2	 items-center  justify-center rounded-[10] p-1 ml-4 h-12 w-45`}>
                    <Text style={tw`text-[#000] text-[3.5]  px-10 font-normal`}>New Post</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={tw` `}>
              <FlatList
                data={props?.getpostlist}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                extraData={props}
              />
            </View>
        </View>
      </ScrollView>
      {/* <Editprofile /> */}
      <Loader isVisible={visible} />
    </KeyboardAvoidingView>
  )
}

export default Vendor;
