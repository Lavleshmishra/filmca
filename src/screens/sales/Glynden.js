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
import CalendarPicker from 'react-native-calendar-picker';


const Glynden = (props) => {
    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;
    const fromUser = props?.route?.params?.fromUser?._id
    const postid = props?.route?.params?.post_Id
    const loginId = props?.loginCredentials?.data?._id
    const fromUserName = props?.route?.params?.fromUser?.fullName;
    const profileImage = props?.route?.params?.fromUser?.profileImage;

    
    console.log("fromUser====>>>", fromUser)
    const [visible, setVisible] = React.useState(false);
    const [subMsg, onChangeText1] = React.useState("");
    const [msg, setMsg] = React.useState("");

    useEffect(() => {
        props.getlistmessage(fromUser);
    }, [])

    const handleSubmitcomment = async () => {
        if (msg == "") {
            Alert.alert(CommonStrings.AppName, "")
        } else {
            let request = {
                "fromUser": loginId,
                "toUser": fromUser,
                "message": msg,
            }

            props.messagesend(request, props.navigation)
            setMsg("");
            setTimeout(function(){
                props.getlistmessage(fromUser);
            },500)
            
        }
    };


    const renderItem = ({ item, index }) => {
        return (
            <View style={tw`w-11/12`}>
                
                {item?.toUser?._id != loginId ?
                    <View style={tw`flex-row-reverse w-12/12 items-center `}>
                        <View style={tw`  items-center rounded-full`}>
                            {item?.fromUser?.profileImage != null ?
                                <Image source={{ uri: `${Api.imageUri}${item?.fromUser?.profileImage}` }} style={tw`w-15 h-15 rounded-full`} />
                                :
                                <Image source={ImageIcons.man} style={tw`w-15 h-15 rounded-full	`} />
                            }

                        </View>
                        <View style={tw` m-3  bg-[#fff] px-2 rounded-[4] `}>
                            <Text style={tw`text-right pt-3 px-3 pb-1 text-[3.6] text-slate-600	`}>{item.message}</Text>
                            <Text style={tw`text-center pb-2 text-[2] text-slate-600`}>{moment(item?.createdAt).format('h: mm a')}</Text>
                        </View>

                    </View>
                    :
                    <View style={tw`flex-row items-center w-11/12 rounded-[3] `}>
                        <View style={tw` items-center rounded-full`}>
                            {item?.fromUser?.profileImage != null ?
                                <Image source={{ uri: `${Api.imageUri}${item?.fromUser?.profileImage}` }} style={tw`w-15 h-15 rounded-full`} />
                                :
                                <Image source={ImageIcons.man} style={tw`w-15 h-15 rounded-full`} />
                            }
                            
                        </View>
                        <View style={tw` m-3 mr-6 bg-[#fff] px-2 rounded-[4]`}>
                            <Text style={tw` pt-3 px-3 pb-1 text-[3.6] text-slate-600	`}>{item.message}</Text>
                            <Text style={tw`text-center pb-2 text-[2] text-slate-600`}>{moment(item?.createdAt).format('h: mm a')}</Text>
                        </View>
                    </View>
                }
            </View>
        );
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
            <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true} />
            <View style={tw`text-center flex-row bg-white mt-7`}>
                <TouchableOpacity
                    onPress={() => props?.navigation?.navigate("Messages") }
                >
                  <Image source={ ImageIcons.backarrow} style={{tintColor:'#5fafcf', width:wp('3%'), height: wp('6%'),marginTop:24, marginLeft:20, marginRight:15}} />
                </TouchableOpacity>

                {profileImage != null ?
                    <Image source={{ uri: `${Api.imageUri}${profileImage}` }} style={tw`w-12 h-12 rounded-full  mt-3`} />
                    :
                    <Image source={ImageIcons.man} style={tw`w-12 h-12 rounded-full mt-3`} />
                  }
                <Text style={tw`text-center py-5 text-bold mt-2 ml-3`}>{fromUserName}</Text>
            </View>

            <View style={tw`mx-3 w-full mb-20`}>
                <FlatList
                    data={props?.getmessagedetilslist}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                />

            </View>
            <View style={tw`absolute bottom-0	 z-0	flex-1	bg-white flex-row justify-between	w-full p-2 px-4`}>
                <View style={tw`w-11/12`}>
                    <TextInput
                        value={msg}
                        onChangeText={(text) => setMsg(text)}
                        placeholder="Type Your message here..."
                        placeholderTextColor={"#000"}
                        style={{ paddingLeft: "2%", color: "#000" }}
                    ></TextInput>
                </View>
                <TouchableOpacity style={tw`w-11/12`} onPress={() => handleSubmitcomment()}>
                    <Image source={ImageIcons.Sendicon} style={[tw`w-8 h-8`, { tintColor: '#5fafcf' }]} />
                </TouchableOpacity>
            </View>

            <Loader />
        </KeyboardAvoidingView>
    )
}

export default Glynden;
