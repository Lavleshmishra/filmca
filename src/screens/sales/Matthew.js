import React, { useEffect, useState } from 'react';
import { Text, KeyboardAvoidingView, View, TextInput, Dimensions, FlatList, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Fonts, Colors, Api, ImageIcons } from '../../common';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './storestyles';
import moment from 'moment';
import ImagePicker from 'react-native-image-crop-picker';
import Loader from '../../components/modals/Loader';
import CalendarPicker from 'react-native-calendar-picker';
import { Calendar } from 'react-native-calendars';
import Editprofile from '../../screens/profile/Editprofile';
import { SwipeablePanel } from 'rn-swipeable-panel';
import { RadioButton, Provider, Portal, Button, } from 'react-native-paper';
import Modal from 'react-native-modal'
import { FlatListSlider } from 'react-native-flatlist-slider';
import tw from 'twrnc';
// import Share from 'react-native-share';
import Cru from './Cru';

let customDatesStyles1 = [];

const Matthew = (props) => {
  const {
    navigation,
    values,
    errors,
    handleChange,
    handleSubmit,
  } = props;
  const { width } = Dimensions.get('window');
  const [visible, setVisible] = React.useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [about, setAbout] = React.useState("");
  const [likecount, setLikecount] = React.useState(1);
  const [msgcount, setMsgcount] = React.useState(1);
  const [selectedStartDate, setSelectedStartDate] = useState([]);
  const [selectedEndDate, setSelectedEndDate] = useState('');

  const [datalist, setdatalist] = useState([]);

  const [socilfeed, setSocialfeed] = useState('1');
  const [billImgPath, setBillImgPath] = useState("");
  const [deletepostid, setDeletepostid] = useState('');

  const [dateselect, setdateselect] = useState('');
  const [slectarr, setslectarr] = useState([]);


  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [field, setField] = useState("");
  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");
  const [grade, setGrade] = useState("");
  const [description, setDescription] = useState("");

  const signupId = props?.signupCredentials?.data?._id;
  const loginId = props?.loginCredentials?.data?._id
  //console.log("loginId===>", props);



  useEffect(() => {
    props.mycrulist(loginId);
    props.mynetworklist(loginId);
    props.profiledetail(loginId);
  }, [])

  useEffect(() => {
    //alert(props?.getprofilelist.email)
    if (props?.getprofilelist?.email == undefined) {
      props.profiledetail(loginId);
      setTimeout(function () {
        props.profiledetail(loginId);

      }, 1500);
      setAbout(props?.getprofilelist?.about);
    }
  }, [props.getprofilelist])


  useEffect(() => {
    console.log('props?.updateability?', props?.updateability?.availabilty)
    let customDatesStyles = [];
    var valueToPush = {};
    for (var i = 0; i < props?.updateability?.availabilty?.length; i++) {
      // or "var valueToPush = new Object();" which is the same
      valueToPush[props?.updateability?.availabilty[i]] = { selected: true, selectedColor: '#66ff33', color: '#000000' };
    }
    //customDatesStyles.push(valueToPush);
    setslectarr(valueToPush);
    console.log('sdsdsdsasas', valueToPush)

  }, [props.updateability])


  const openshare = (text) => {
    setModalVisible1(!modalVisible1)
  }


  const onDateChange = (val) => {
    setdateselect(val)
    let request = {
      "_id": loginId,
      "date": val
    }
    props.updateAvailAbilty(request, props.navigation);


  }


  const handlelikeunlike = (id) => {

    //setLikecount(likecount + 1)
    let request = {
      "_id": id,
      "userId": loginId,
    }

    props.likeunlikepost(request, props.navigation)
    props.profiledetail(loginId);
  };

  const handleMsgcount = () => {
    setMsgcount(msgcount + 1)

  };

  // const showisaction = () => {
  //   setisaction(true);
  // };
  const handletabchange = (id) => {
    setSocialfeed(id);

  };

  const selectPhoto = async () => {
    ImagePicker.openPicker({
      width: 400,
      cropping: true,
      mediaType: 'photo',
      compressImageQuality: 0.5,
      height: 400,
    }).then(image => {
      setVisible(true);
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


        const formData = new FormData();
        formData.append("_id", loginId);
        formData.append("image", file);
        props.updateprofile(formData, props.navigation)
        setTimeout(function () {
          setVisible(false);
          props.profiledetail(loginId);
        }, 1000)

      }
    }).catch((error) => {

    });
  }

  const selectPhotobackground = async () => {
    ImagePicker.openPicker({
      width: 400,
      cropping: true,
      mediaType: 'photo',
      compressImageQuality: 0.5,
      height: 400,
    }).then(image => {
      setVisible(true);
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


        const formData = new FormData();
        formData.append("_id", loginId);
        formData.append("image", file);
        props.updatebackgroudimage(formData, props.navigation)
        setTimeout(function () {
          setVisible(false);
          props.profiledetail(loginId);
        }, 1000)
      }
    }).catch((error) => {

    });
  }

  const handleeditcalender = async () => {
    // let request = {
    //     "_id": loginId,
    //     "availabilty": [{
    //         "selectedStartDate":selectedStartDate,
    //         "selectedEndtDate":selectedEndDate,
    //         //"selectedDate":selectedStartDate
    //     }],
    // }
    // props.updateAvailAbilty(request, props.navigation);
    props.profiledetail(loginId);
  }
  const deletepostmodal = async (id) => {
    setDeletepostid(id)
    setModalVisible(true);

  }


  const handledeletepost = async () => {

    props.deletepost(deletepostid)
    setModalVisible(false);
    props.profiledetail(loginId);
  }
  const handleeditabout = async () => {

    let request = {
      "_id": loginId,
      "about": about,

    }
    props.updateabout(request, props.navigation)
    setSocialfeed('3');
    props.profiledetail(loginId);
  }
  const containerStyle = { backgroundColor: 'red', padding: '7%', marginHorizontal: '5%', alignItems: 'center', };
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
  const renderItemnetwork = ({ item, index }) => {

    return (
      <View style={tw`bg-[#fff] w-4/12 flex  justify-center`}>
        <TouchableOpacity style={tw`border  border-[#ccc] items-center py-4 px-2`}
        //onPress={() => handledeparment(item._id, item.departmentName)}
        >
          <Image source={{ uri: `${Api.imageUri}${item.image}` }} style={[tw`w-9 h-9 `, { tintColor: '#5fafcf' }]} />
          <Text style={tw`text-[#000] text-[3.5] p-1 font-normal text-center`}>{item.departmentName}</Text>
          <Text style={tw`text-[#000] text-[3.5] font-normal text-center`}>{item?.user?.length}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  const renderItemcru = ({ item, index }) => {

    return (
      <View style={tw`bg-[#fff] w-4/12 flex  justify-center`}>
        <TouchableOpacity style={tw`border  border-[#ccc] items-center py-4 px-2`}
        //onPress={() => handledeparment(item._id, item.departmentName)}
        >
          <Image source={{ uri: `${Api.imageUri}${item.image}` }} style={[tw`w-9 h-9 `, { tintColor: '#5fafcf' }]} />
          <Text style={tw`text-[#000] text-[3.5] p-1 font-normal text-center`}>{item.departmentName}</Text>
          <Text style={tw`text-[#000] text-[3.5] font-normal text-center`}>{item?.user?.length}</Text>
        </TouchableOpacity>
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

  const renderItem3 = ({ item, index }) => {
    return (
      <View style={tw`my-5 justify-center	`}>
        {item.text1 == 'About' &&
          <TouchableOpacity style={tw`right-5 top-2 z-50 absolute`} onPress={() => setSocialfeed('6')}>
            <Image source={ImageIcons.editclap} style={[tw`w-5 h-5 rounded-full`, { tintColor: '#5fafcf' }]} />
          </TouchableOpacity>
        }
        <TouchableOpacity style={tw` bg-white  ml-0.5 p-6 items-center	w-30`} onPress={() => handletabchange(item.id)}>
          {socilfeed == item.id ?
            <Image source={item.image2} style={tw`w-12 h-9 `} />
            :
            <Image source={item.image} style={tw`w-12 h-9  `} />
          }
          <Text style={tw`text-center text-black text-base font-semibold text-[2.9]`} >{item.text1}</Text>
        </TouchableOpacity>
      </View>
    );
  }



  const renderItem = ({ item, index }) => {
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
          <TouchableOpacity style={tw`items-end	top-10 right-5 z-10 `} onPress={() => deletepostmodal(item._id)}>
            <Image source={ImageIcons.closetoday} style={[tw`w-4 h-4`, { tintColor: '#5fafcf' }]} />
          </TouchableOpacity>
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

          {item?.userId?.profileImage != null ?
            <Image source={{ uri: `${Api.imageUri}${item?.userId?.profileImage}` }} style={tw`w-24 h-24 rounded-full	mt-1`} />
            :
            <Image source={ImageIcons.man} style={tw`w-24 h-24 rounded-full	mt-1`} />
          }
        </View>

      </View>
    );
  }


  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
      <ScrollView style={tw`w-full`}>
        <View >
          <View>
            {props?.getprofilelist?.coverImage != null ?
              <Image source={{ uri: `${Api.imageUri}${props?.getprofilelist?.coverImage}` }} style={tw`w-full h-50 rounded-b-lg z-30 absolute`} />
              :
              <Image source={ImageIcons.rawartist} style={tw`w-full h-50 rounded-b-lg z-30 absolute`} />
            }

            <View style={tw`w-full h-75 pt-55 flex-row	justify-between bg-white `} >
              <View>
                {socilfeed == 4 ?
                  <TouchableOpacity style={tw`items-center ml-10`} onPress={() => setSocialfeed('4')}>
                    <Image style={tw`w-11 h-10 `} source={ImageIcons.crunew} />
                    <Text style={tw`text-black `}>My Cru</Text>
                  </TouchableOpacity>
                  :
                  <TouchableOpacity style={tw`items-center	ml-10`} onPress={() => setSocialfeed('4')}>
                    <Image style={tw`w-11 h-10 `} source={ImageIcons.cru} />
                    <Text style={tw`text-black `}>My Cru</Text>
                  </TouchableOpacity>
                }
              </View>
              <View>
                {socilfeed == 5 ?
                  <TouchableOpacity style={tw`items-center	mr-10`} onPress={() => setSocialfeed('5')}>
                    <Image style={tw`w-11 h-10  `} source={ImageIcons.users} />
                    <Text style={tw`text-black `}>Connections</Text>
                  </TouchableOpacity>
                  :
                  <TouchableOpacity style={tw`items-center	mr-10`} onPress={() => setSocialfeed('5')}>
                    <Image style={tw`w-11 h-10  `} source={ImageIcons.grouprofile} />
                    <Text style={tw`text-black `}>Connections</Text>
                  </TouchableOpacity>
                }
              </View>
            </View>
            <TouchableOpacity style={tw`right-15 mt-33 z-60 absolute`} onPress={() => selectPhotobackground()}>
              <Image source={ImageIcons.editclap} style={[tw`w-7 h-7 rounded-full`, { tintColor: '#5fafcf' }]} />
            </TouchableOpacity>
            <View style={tw` left-4/12 mt-33 z-50 absolute`}>
              {props?.getprofilelist?.profileImage != null ?
                <Image source={{ uri: `${Api.imageUri}${props?.getprofilelist?.profileImage}` }} style={tw`w-30 h-30 rounded-full `} />
                :
                <Image source={ImageIcons.man} style={tw`w-30 h-30 rounded-full `} />
              }
            </View>
            <TouchableOpacity style={tw`left-7/12 mt-48 z-50 absolute`} onPress={() => selectPhoto()}>
              <Image source={ImageIcons.editclap} style={[tw`w-7 h-7 rounded-full`, { tintColor: '#5fafcf' }]} />
            </TouchableOpacity>
          </View>
          <View style={tw`flex flex-row mx-auto w-10.9/12`}>
            <View style={tw` mt-5 w-8/12`}>
              {(props?.getprofilelist?.email != undefined && props?.getprofilelist?.email != "") &&
                <FlatList
                  horizontal={true}
                  data={props?.getprofilelist?.workDepartments[0]?.position}
                  renderItem={renderItem1}
                  keyExtractor={item => item.id}
                />
              }
            </View>
            <View style={tw` mt-5 w-4/12`}>
              <TouchableOpacity onPress={() => openshare()} style={tw`  border-solid rounded-full mx-2 bg-[#44b3f2]`}>
                <Text style={tw`text-center my-auto text-xs p-2 px-3 text-white`}>Share</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible1}
            onRequestClose={() => {
              setModalVisible1(!modalVisible1);
            }}
            style={tw`m-0`} >
            <View style={tw`flex-1	 justify-center  bg-zinc-500 opacity-90`}>
              <View style={tw`bg-white rounded-[2] h-auto justify-center m-4`} >
                <View style={tw` border-b border-[#ccc] p-5 flex flex-row w-12/12`}>
                  <View style={tw`w-11.2/12`}>
                    <Text style={tw`text-base font-normal  text-black `} numberOfLines={1} ellipsizeMode='tail' >Add Education</Text>
                  </View>
                  <TouchableOpacity onPress={() => { setModalVisible1(false) }}>
                    <Image source={ImageIcons.closetoday} style={[tw`w-4 h-4 mt-2`, { tintColor: '#5fafcf' }]} />
                  </TouchableOpacity>
                </View>
                <View style={tw`p-5`}>
                  <View style={tw`h-auto`}>
                    <View >
                      <Text style={tw`text-[#999999]`}>School</Text>
                    </View>
                    <TextInput
                      style={tw` border	border-black text-black	pl-2 h-10 rounded`}
                      placeholder="Ex: Boston University"
                      value={school}
                      onChangeText={(text) => setSchool(text)}
                      placeholderTextColor={'#999999'}
                    />
                    <View >
                      <Text style={tw`text-[#999999] mt-3`}>Degree</Text>
                    </View>
                    <TextInput
                      style={tw` border	border-black text-black	pl-2 h-10`}
                      placeholder="Ex: Bachelor's"
                      value={degree}
                      onChangeText={(text) => setDegree(text)}
                      placeholderTextColor={'#999999'}
                    />
                    <View >
                      <Text style={tw`text-[#999999] mt-3`}>Field of study</Text>
                    </View>
                    <TextInput
                      style={tw`mt-1 border	border-black text-black	pl-2 h-10`}
                      placeholder="Ex: Business"
                      value={field}
                      onChangeText={(text) => setField(text)}
                      placeholderTextColor={'#999999'}
                    />
                    <View >
                      <Text style={tw`text-[#999999] mt-3`}>Start date</Text>
                    </View>
                    <TextInput
                      style={tw`mt-1 border	border-black text-black	pl-2 h-10`}
                      placeholder="dd/mm/yyyy"
                      value={startdate}
                      onChangeText={(text) => setStartDate(text)}
                      placeholderTextColor={'#999999'}
                      keyboardType='numeric'
                    />
                    <View >
                      <Text style={tw`text-[#999999] mt-3`}>End date</Text>
                    </View>
                    <TextInput
                      style={tw`mt-1 border	border-black text-black	pl-2 h-10`}
                      placeholder="dd/mm/yyyy"
                      value={enddate}
                      onChangeText={(text) => setEndDate(text)}
                      placeholderTextColor={'#999999'}
                      keyboardType='numeric'
                    />
                    <View >
                      <Text style={tw`text-[#999999] mt-3`}>Grade</Text>
                    </View>
                    <TextInput
                      style={tw`mt-1 border	border-black text-black	pl-2 h-10`}
                      value={grade}
                      onChangeText={(text) => setGrade(text)}
                      placeholderTextColor={'#999999'}
                    />
                    <View >
                      <Text style={tw`text-[#999999] mt-3`}>Description</Text>
                    </View>
                    <TextInput
                      style={tw`mt-1 border	border-black text-black	pl-2 h-10`}
                      value={description}
                      onChangeText={(text) => setDescription(text)}
                      placeholderTextColor={'#999999'}
                    />
                    <View style={tw`flex flex-row w-12/12`}>
                      <View style={tw`w-8/12`}></View>
                      <View style={tw` mt-5 w-4/12`}>
                        <TouchableOpacity onPress={() => { setModalVisible1(false) }} style={tw`  border-solid rounded-full bg-[#44b3f2]`}>
                          <Text style={tw`text-center my-auto text-xs p-2 px-2 text-white`}>Save</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>

          </Modal>
          <View style={tw`w-full`}>
            <FlatList
              horizontal={true}
              data={DATA3}
              renderItem={renderItem3}
              keyExtractor={item => item.id}
            />
          </View>
        </View>

        <View style={tw`mx-5`}>
          {socilfeed == "1" &&
            <FlatList
              data={props?.getprofilelist?.posts}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
            />
          }
          {socilfeed == "2" &&
            <View style={tw`bg-[#fff] rounded-[3] flex  mb-10 py-2 `}>
              <Calendar
                markedDates={slectarr}
                onDayPress={day => {
                  onDateChange(day.dateString)
                }}
              />
            </View>
          }
          {socilfeed == "3" &&
            <TouchableOpacity style={tw`	 border-solid rounded-[3] bg-white`}>
              <Text style={tw` my-auto text-[3.8] p-7`}>{props?.getprofilelist?.about}</Text>
            </TouchableOpacity>
          }
          {socilfeed == "4" &&
            <View style={tw`rounded-[3] w-full my-5`}>
              <FlatList
                data={props?.getmycrulist?.data}
                renderItem={renderItemcru}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                //horizontal={true}
                numColumns={3}
              />
              <View style={tw`  bg-white my-5 rounded-lg`}>
                <Text style={tw`text-center py-5 text-base`}>Total: {props?.getmycrulist?.cruData?.length}</Text>
              </View>
            </View>

          }
          {socilfeed == "5" &&
            <View style={tw`rounded-[3] w-full my-5`}>
              <FlatList
                data={props?.getmynetworklist?.data}
                renderItem={renderItemnetwork}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                //horizontal={true}
                numColumns={3}
              />
              <View style={tw`  bg-white my-5 rounded-lg`}>
                <Text style={tw`text-center py-5 text-base`}>Total: {props?.getmynetworklist?.cruData?.length}</Text>
              </View>
            </View>
          }
          {socilfeed == "6" &&
            <TouchableOpacity style={tw`	p-5 border-solid rounded-[3] w-full bg-white items-center mb-5 text-black`}>
              <View style={tw`border border-[#ccc] rounded-[3] text-black w-12/12  pl-5`}>

                <TextInput style={tw`text-black`}
                  value={about}
                  placeholder="Share work related content here..."
                  placeholderTextColor={'#D3D3D3'}
                  onChangeText={(text) => setAbout(text)}
                  onSubmitEditing={() => handlenewpost()}
                  multiline={true}
                />

              </View>
              <TouchableOpacity onPress={() => handleeditabout()} style={tw`bg-[#fff] border-[#5fafcf] border-2 my-5	 items-center  justify-center rounded-[10] p-1 ml-4 h-12 w-45`}>
                <Text style={tw`text-[#000] text-[3.5]  px-10 font-normal`}>Save</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          }
          {socilfeed == "7" &&
            <View style={tw`rounded-[3] items-center mx-3 py-5 mb-10`}>
              <View style={tw`bg-[#fff] rounded-[3] w-full flex py-5`}>
                <Calendar
                  markedDates={slectarr}
                  onDayPress={day => {
                    onDateChange(day.dateString)
                  }}
                />
              </View>
              <TouchableOpacity onPress={() => handleeditcalender()} style={tw`bg-[#fff] border-[#5fafcf] border-2 my-5	 items-center  justify-center rounded-[10] p-1 ml-4 h-12 w-7/12`}>
                <Text style={tw`text-[#000] text-[3.5]  px-10 font-normal`}>Save</Text>
              </TouchableOpacity>
            </View>
          }

        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
          style={tw`m-0`} >
          <View style={tw`flex-1	 justify-center  bg-neutral-500	`}>
            <View style={tw`bg-white rounded-[2]  justify-center  m-4`} >
              <View style={tw`items-center border-b border-[#ccc] p-4`}>
                <Text style={tw`text-base font-bold  text-black `} numberOfLines={1} ellipsizeMode='tail' >Delete</Text>
              </View>
              <View style={tw`p-3`}>
                <View style={tw`mx-5`}>
                  <Text style={tw`text-[#000000] mt-1 font-normal text-[3.1]`}>Are You Sure You Want to delete this Post ?</Text>
                </View>
                <View style={tw`flex-row my-5 justify-around`}>
                  <TouchableOpacity style={tw`bg-[#fff] border-[#5fafcf] border-2	  justify-center rounded-[4] p-1 `} onPress={() => handledeletepost()}>
                    <Text style={tw`text-[#000] text-[3.5] p-2 px-6 font-normal`}>Yes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={tw`bg-[#fff] border-[#5fafcf] border-2	 items-center  justify-center rounded-[4] p-1 `} onPress={() => { setModalVisible(false) }}>
                    <Text style={tw`text-[#000] text-[3.5] p-2 px-10 font-normal`}>No</Text>
                  </TouchableOpacity>
                </View>

              </View>
            </View>
          </View>

        </Modal>

      </ScrollView>
      {/* <Editprofile /> */}
      <Loader isVisible={visible} />
    </KeyboardAvoidingView>
  )
}

export default Matthew;
