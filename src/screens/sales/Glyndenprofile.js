import React, { useEffect, useState } from 'react';
import { Text, KeyboardAvoidingView, View, TextInput, Dimensions, FlatList, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Fonts, Colors, ImageIcons, Api } from '../../common';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './storestyles';
import moment from 'moment';
import CalendarPicker from 'react-native-calendar-picker';
import CheckBox from '@react-native-community/checkbox';
import Loader from '../../components/modals/Loader';
import Editprofile from '../../screens/profile/Editprofile';
import { SwipeablePanel } from 'rn-swipeable-panel';
import { RadioButton, Provider, Portal, Button, } from 'react-native-paper';
import Modal from 'react-native-modal'
import { FlatListSlider } from 'react-native-flatlist-slider';
import tw from 'twrnc';


const Glyndenprofile = (props) => {
  const {
    navigation,
    values,
    errors,
    handleChange,
    handleSubmit,
  } = props;
  const loginId = props?.loginCredentials?.data?._id
  const user_Id = props?.route?.params?.userId
  //console.log("props====>", props)


  const { width } = Dimensions.get('window');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [connectVisible, setConnectVisible] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [msg, onChangeText2] = React.useState("");
  const [likecount, setLikecount] = React.useState(1);
  const [msgcount, setMsgcount] = React.useState(1);
  const [checked, setChecked] = React.useState('network');
  const [socilfeed, setSocialfeed] = useState('1');
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    if (props?.grtpostdetail.email == undefined) {
      setTimeout(function () {
        props.postdetails(user_Id);

      }, 1500);
    }
    props.postdetails(user_Id);
    console.log("props.grtpostdetail======>>>", props?.grtpostdetail.email);
  }, [])

  const handlelikeunlike = (id) => {
    setVisible(true)
    // setLikecount(likecount + 1)
    let request = {
      "_id": id,
      "userId": loginId,

    }

    props.likeunlikepost(request, props.navigation)

    setTimeout(function () {
      props.postdetails(user_Id);
    }, 100);
    setTimeout(function () {
      setVisible(false)
    }, 1500);

  };



  const handleMsgcount = () => {
    setMsgcount(msgcount + 1)

  };
  const onDateChange = (date, type) => {
    //function to handle the date change
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };

  // const showisaction = () => {
  //   setisaction(true);
  // };
  const handlemessagesend = () => {
    let request = {
      "fromUser": loginId,
      "toUser": props?.grtpostdetail?._id,
      "message": message,
    }

    props.messagesend(request, props.navigation)
    setMessage("");
    setModalVisible(false)
    props.postdetails(user_Id);
  };
  const handleconnectnetwork = async () => {

    let request = {
      "addedBy": loginId,
      "whomToAdd": props?.grtpostdetail?._id,
      "type": checked
    }
    props.addNetworkCru(request, props.navigation)
    setConnectVisible(false);
  }
  const handletabchange = (id) => {
    setSocialfeed(id);
    console.log("id=======<><>", id)
  };

  const containerStyle = { backgroundColor: 'red', padding: '7%', marginHorizontal: '5%', alignItems: 'center', };

  const DATA = [
    {
      name: "Matthew Grace",
      days: "Friday",
      time: "1 hour ago",
      profile: ImageIcons.womanclap,
      image: ImageIcons.purifier,
      likeimg: ImageIcons.like,
      chatimg: ImageIcons.chat,
      message: "Just used the Briese light for thr first time! Very even light, a great key light when shooting commercials. As you can see we had an audience watching.",
      text1: "Save 15% on every order",
      text2: "Get Plus now",
      text3: "Organization Actions",
    },
  ];
  const DATA3 = [
    {
      id: 1,
      image: ImageIcons.social,
      image2: ImageIcons.socialcolor,
      text1: 'Social Feed',

    },
    {
      id: 2,
      image: ImageIcons.event,
      image2: ImageIcons.calendar_icon,
      text1: 'Calender',

    },
    {
      id: 3,
      image: ImageIcons.about,
      image2: ImageIcons.profile,
      text1: 'About',

    },

  ];

  const DATA2 = [
    {

      image: ImageIcons.social,
      text1: 'Camera operator',

    },
    {
      image: ImageIcons.event,
      text1: 'Cinematographer',

    },
    {
      image: ImageIcons.event,
      text1: 'Gaffer',

    },

  ];


  const renderItem3 = ({ item, index }) => {
    return (
      <View style={tw`my-5 justify-center	`}>
        {socilfeed == item.id ?
          <TouchableOpacity style={tw` bg-white ml-0.5 p-6 items-center	`} onPress={() => handletabchange(item.id)}>

            <Image source={item.image2} style={tw`w-12 h-9  `} />
            <Text style={tw`text-center text-black text-base font-semibold text-[3] `} >{item.text1}</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity style={tw` bg-white  ml-0.5 p-6 items-center	`} onPress={() => handletabchange(item.id)}>
            <Image source={item.image} style={tw`w-12 h-9  `} />
            <Text style={tw`text-center text-black text-base font-semibold text-[3] `} >{item.text1}</Text>
          </TouchableOpacity>
        }
      </View>
    );
  }

  const renderItem1 = ({ item, index }) => {
    return (
      <View >
        <TouchableOpacity style={tw`  border-solid rounded-full mx-2 bg-white`}>
          <Text style={tw`text-center my-auto text-xs p-2 px-3`}>{item?.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={tw`my-2 `}>
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
          <View style={tw`my-2 bg-white pt-14 px-3  rounded-[2]`}>
            <View style={tw`py-2 `}>
              <Text style={tw`text-[#000] text-[3.3] font-normal`}>{item.description}</Text>
              <View style={tw`pt-4`}>
                {item?.image != "" &&
                  <Image source={{ uri: `${Api.imageUri}${item.image}` }} style={tw`w-full h-90	`} />
                }

              </View>
            </View>
            <View style={tw`flex-row justify-between	items-center	py-3`}>
              <View style={tw`flex-row items-center`}>
                {item?.likedBy?.includes(loginId) == "" ?
                  <TouchableOpacity style={tw`items-center`} onPress={() => handlelikeunlike(item._id)}>
                    <Image source={ImageIcons.like} style={tw`w-6 h-6	`} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity style={tw`items-center`} onPress={() => handlelikeunlike(item._id)}>
                    <Image source={ImageIcons.redlike} style={tw`w-6 h-5	`} />
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
                  <Image source={ImageIcons.chat} style={[tw`w-7 h-7	`, { tintColor: '#5fafcf' }]} />
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

      </TouchableOpacity>
    );
  }


  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
      <ScrollView style={{ paddingBottom: 0, marginTop: 0, flex: 1 }}>
        <View style={tw`flex-1`}>


          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, zIndex: 1, width: '100%', transform: [{ scaleX: 2 }], borderBottomStartRadius: 200, borderBottomEndRadius: 200, overflow: 'hidden', }}>

              <Image
                style={{
                  width: '100%', height: 250,

                  transform: [{ scaleX: 0.5 }], resizeMode: 'stretch',
                  //backgroundColor: 'yellow',
                  //alignItems: 'center',
                  //justifyContent: 'center'
                }} source={ImageIcons.rawartist} />

            </View>
            <View style={tw`w-11/12 mx-4 h-95 px-6 pt-68  bg-white  absolute overflow-hidden rounded-[2]	flex-row	justify-between `}>
              <TouchableOpacity style={tw`items-center	`} onPress={() => setModalVisible(!modalVisible)}>
                <Image style={tw`w-11 h-9`} source={ImageIcons.msgs} />
                <Text style={tw`text-black `}>Message</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setConnectVisible(!connectVisible)}>
                <Image style={tw`w-9 h-9  `} source={ImageIcons.cru} />
                <Text style={tw`text-black `}>Connect</Text>
              </TouchableOpacity>
            </View>
            <View style={tw`left-4/12 mt-49 z-50 absolute`}>
              {props?.grtpostdetail?.profileImage != null ?
                <Image source={{ uri: `${Api.imageUri}${props?.grtpostdetail?.profileImage}` }} style={tw`w-30 h-30 rounded-full `} />
                :
                <Image source={ImageIcons.womanclap} style={tw`w-30 h-30 rounded-full `} />
              }
            </View>

          </View>
          <View style={tw`flex-2 mt-40`}>

            <View style={tw`ml-3 `}>
              {(props?.grtpostdetail.email != undefined && props?.grtpostdetail.email != "") &&
                <FlatList
                  horizontal={true}
                  data={props?.grtpostdetail?.workDepartments[0]?.position}
                  renderItem={renderItem1}
                  keyExtractor={item => item.id}
                />
              }
              {/* <FlatList
                horizontal={true}
                data={props?.grtpostdetail?.workDepartments}
                renderItem={renderItem1}
                keyExtractor={item => item.id}
              /> */}
            </View>
            <View style={tw`w-full ml-6 mt-3`}>
              <FlatList
                horizontal={true}
                data={DATA3}
                renderItem={renderItem3}
                keyExtractor={item => item.id}
              />
            </View>
            <View style={tw`mx-5`}>
              {socilfeed == "1" &&
                <FlatList
                  data={props?.grtpostdetail?.posts}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}
                />
              }
              {socilfeed == "2" &&
                <View style={tw`bg-[#fff] rounded-[3] flex py-5`}>
                  <CalendarPicker
                    startFromMonday={true}
                    allowRangeSelection={true}
                    minDate={moment(new Date()).toDate()}
                    maxDate={moment().add(1, 'month').toDate()}
                    weekdays={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
                    months={['January', 'Februray', 'March', 'Abril', 'May', 'June', 'July', 'August', 'Setember', 'October', 'November', 'December']}

                    todayBackgroundColor="#e6ffe6"
                    selectedDayColor="#66ff33"
                    selectedDayTextColor="#000000"
                    scaleFactor={375}
                    textStyle={{
                      fontFamily: 'Cochin',
                      color: '#000000',
                    }}
                    onDateChange={onDateChange}
                  />
                </View>
              }
              {socilfeed == "3" &&
                <TouchableOpacity style={tw`	 border-solid rounded-[3] bg-white`}>
                  <Text style={tw` my-auto text-[3.8] p-7`}>{props?.grtpostdetail?.about}</Text>
                </TouchableOpacity>
              }
            </View>

          </View>


          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
            style={tw`m-0`} >
            <View style={tw`flex-1	 justify-center  bg-zinc-500`}>
              <View style={tw`bg-white rounded-[2]  justify-center  m-4`} >
                <View style={tw`flex-row justify-between items-center border-b border-[#ccc] p-4`}>
                  <View>
                    <Text style={tw`text-base font-normal  text-black `} numberOfLines={1} ellipsizeMode='tail' ></Text>
                  </View>
                  <View>
                    <Text style={tw`text-base font-normal  text-black `} numberOfLines={1} ellipsizeMode='tail' >Message</Text>
                  </View>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Image source={ImageIcons.closetoday} style={[tw`w-4 h-4`, { tintColor: '#5fafcf' }]} />
                  </TouchableOpacity>
                </View>
                <View style={tw`p-3`}>
                  <View style={tw`mx-5`}>
                    <TextInput
                      style={tw`border-b	border-[#ccc] text-black	pl-7 h-15`}
                      placeholder="Type Your Message here...."
                      value={message}
                      onChangeText={(text) => setMessage(text)}
                      placeholderTextColor={'#ccc'}
                      onSubmitEditing={() => handlemessagesend()}
                    />
                  </View>
                  <TouchableOpacity style={tw`bg-[#fff] border-[#5fafcf] border-2	 items-center  justify-center rounded-[10] p-1 my-5 mt-15 mx-10`} onPress={() => handlemessagesend()}>
                    <Text style={tw`text-[#000] text-[3.9] p-2 px-15 font-normal`}>Send</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={connectVisible}
            onRequestClose={() => {
              setConnectVisible(!connectVisible);
            }}
            style={tw`m-0`} >
            <View style={tw`flex-1	 justify-center  bg-zinc-500`}>
              <View style={tw`bg-white rounded-[2]  justify-center  m-4`} >
                <View style={tw`flex-row justify-between items-center border-b border-[#ccc] p-4`}>
                  <View>
                    <Text style={tw`text-base font-normal  text-black `} numberOfLines={1} ellipsizeMode='tail' ></Text>
                  </View>
                  <View>
                    <Text style={tw`text-base font-normal  text-black `} numberOfLines={1} ellipsizeMode='tail' >Connect</Text>
                  </View>
                  <TouchableOpacity onPress={() => setConnectVisible(false)}>
                    <Image source={ImageIcons.closetoday} style={[tw`w-4 h-4`, { tintColor: '#5fafcf' }]} />
                  </TouchableOpacity>
                </View>
                <View style={tw`p-3`}>
                  <View style={tw`mx-5`}>
                    <Text style={tw`text-base font-normal  text-black `} numberOfLines={1} ellipsizeMode='tail' >Add Matthew to My Network or My Cru</Text>
                    <View style={tw`flex-row items-center justify-around  my-3`}>
                      <View style={tw`items-center `}>
                        <Text style={tw`text-[#000000] ml-3 font-normal text-[3.7]`}>My Network</Text>
                        <RadioButton
                          value="network"
                          status={checked === 'network' ? 'checked' : 'unchecked'}
                          onPress={() => setChecked('network')}
                          uncheckedColor={"#5fafcf"}
                          color={'#5fafcf'}
                        />
                      </View>
                      <View style={tw`items-center `}>
                        <Text style={tw`text-[#000000] ml-3 font-normal text-[3.7]`}>My Cru</Text>
                        <RadioButton
                          value="cru"
                          status={checked === 'cru' ? 'checked' : 'unchecked'}
                          onPress={() => setChecked('cru')}
                          uncheckedColor={"#5fafcf"}
                          color={'#5fafcf'}
                        />
                      </View>

                    </View>
                  </View>
                  <TouchableOpacity style={tw`bg-[#fff] border-[#5fafcf] border-2	 items-center  justify-center rounded-[10] p-1 my-5 mt-5 mx-10`} onPress={() => handleconnectnetwork()}>
                    <Text style={tw`text-[#000] text-[3.9] p-2 px-15 font-normal`}>Add</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

          </Modal>
        </View>
      </ScrollView>
      {/* <Editprofile /> */}
      <Loader isVisible={visible} />
    </KeyboardAvoidingView>
  )
}

export default Glyndenprofile;
