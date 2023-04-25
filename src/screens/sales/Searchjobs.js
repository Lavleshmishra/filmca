import React, { useEffect, useState } from 'react';
import { Text, KeyboardAvoidingView, View, TextInput, FlatList, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Fonts, Colors, ImageIcons } from '../../common';
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


const Searchjobs = (props) => {
    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    const [visible, setVisible] = React.useState(false);
    const [search, setSearch] = React.useState("");
    const [msg, onChangeText2] = React.useState("");
    const [likecount, setLikecount] = React.useState(1);
    const [msgcount, setMsgcount] = React.useState(1);

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



    const openPanel = () => {

        setIsPanelActive(true);
        setisaction(false);
    };
    const handlelikecount = () => {

        setLikecount(likecount + 1)
    };

    const handleMsgcount = () => {
        setMsgcount(msgcount + 1)

    };

    // const showisaction = () => {
    //   setisaction(true);
    // };
    const handlesearch = () => {
        setSearch("");
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

            image: ImageIcons.social,
            text1: 'social Feed',

        },
        {
            image: ImageIcons.event,
            text1: 'Calender',

        },
        {
            image: ImageIcons.event,
            text1: 'About',

        },
        {
            image: ImageIcons.event,
            text1: 'About',

        },

    ];




    const renderItem3 = ({ item, index }) => {
        return (
            <View>
                <View style={tw`w-30 h-38 bg-white mb-6 ml-0.5 mt-5  z-10 `} >
                    <Image source={item.image} style={tw`w-18 h-14 mt-10 mx-auto `} />
                    <Text style={tw`text-center text-black text-base font-semibold mt-1`} >{item.text1}</Text>

                </View>
            </View>
        );
    }

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={tw`my-2 `}>
                <Text style={tw`text-[#000] text-center	 text-[3.5]  px-15 font-normal`}>{item.name}</Text>

                <View style={tw`mt-7`}>

                    <View style={tw`flex-row justify-between mx-4 `}>
                        <View style={tw`flex-row`}>
                            <Image source={ImageIcons.calendar_icon} style={tw`w-4 h-4`} />
                            <Text style={tw`text-[#000] text-center	 text-[2.6] px-1 font-normal`}>{item.days}</Text>
                        </View>
                        <View style={tw`flex-row`}>
                            <Text style={tw`text-[#000] text-center	 text-[2.6] px-1 font-normal`}>{item.time}</Text>
                            <Image source={ImageIcons.timer} style={tw`w-5 h-5`} />
                        </View>
                    </View>
                    <View style={tw`my-2 bg-white pt-14 px-4 mx-auto w-80 rounded-[2]`}>
                        <View style={tw`py-2 `}>
                            <Text style={tw`text-[#000] text-[3.3] font-normal`}>{item.message}</Text>
                            <View style={tw`pt-4`}>
                                <Image source={item.image} style={tw`w-full h-fit	`} />
                            </View>
                        </View>
                        <View style={tw`flex-row justify-between	items-center	py-3`}>
                            <View style={tw`flex-row items-center`}>
                                <TouchableOpacity style={tw`items-center`} onPress={() => handlelikecount()}>
                                    <Image source={item.likeimg} style={tw`w-8 h-8	`} />
                                </TouchableOpacity>
                                <TouchableOpacity style={tw`flex-row ml-2 items-center`} onPress={() => props.navigation.navigate("Likelist")}>
                                    <View style={tw`	z-[20]`}>
                                        <Image source={item.profile} style={tw`w-12 h-12 rounded-full`} />
                                    </View>
                                    <View style={tw`absolute	z-[10] left-6`}>
                                        <Image source={item.profile} style={tw`w-12 h-12	rounded-full`} />
                                    </View>
                                    <View style={tw`absolute z-[0] left-12 bg-[#f2f2f2] w-12 h-12 rounded-full items-center justify-center`}>
                                        <Text>+{likecount}</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>

                            <View style={tw`flex-row `}>
                                <TouchableOpacity style={tw`flex-row items-center`} onPress={() => props.navigation.navigate("Commentlist")}>

                                    <View style={tw`absolute z-[0] `}>
                                        <Image source={item.profile} style={tw`w-12 h-12	rounded-full`} />
                                    </View>
                                    <View style={tw`absolute	z-[10] right-6`}>
                                        <Image source={item.profile} style={tw`w-12 h-12	rounded-full`} />
                                    </View>
                                    <View style={tw`	z-[20] right-12 bg-[#f2f2f2] w-12 h-12 rounded-full items-center justify-center`}>
                                        <Text>+{likecount}</Text>
                                    </View>

                                </TouchableOpacity>
                                <TouchableOpacity style={tw`ml-0 `} onPress={() => handleMsgcount()}>
                                    <Image source={item.chatimg} style={[tw`w-13 h-13	`, { tintColor: '#5fafcf' }]} />
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>

                </View>
                <View>

                </View>
                <View style={tw`absolute  inset-x-0.7/2	 top-8		 `}>
                    {/* <View style={tw`w-3 h-3 bg-[#ff0000] rounded-full absolute left-15 `}></View> */}
                    <View style={tw`w-3 h-3 bg-[#008000] rounded-full absolute left-17 `}></View>
                    <View>
                        <Image source={item.profile} style={tw`w-24 h-24 rounded-full	mt-1`} />
                    </View>
                </View>

            </TouchableOpacity>
        );
    }


    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
            <ScrollView style={{ paddingBottom: 0, marginTop: 0 }}>
                <View style={tw`bg-[#fff] w-80 mx-auto mt-7 rounded`}>
                    <View style={tw`bg-[#fff] flex flex-row rounded-t 	`}>
                        <View style={tw`border-b border-r  border-[#ccc] flex-1 items-center py-6`}>
                            <Image source={ImageIcons.producer} style={[tw`w-15 h-15 `, { tintColor: '#5fafcf' }]} />
                            <Text style={tw`text-[#000] text-[3.5] p-1 font-normal`}>Producer</Text>
                        </View>
                        <View style={tw`border-b border-r border-l border-[#ccc] flex-1 items-center py-6`}>
                            <Image source={ImageIcons.producer} style={[tw`w-15 h-15`, { tintColor: '#5fafcf' }]} />
                            <Text style={tw`text-[#000] text-[3.5] p-1 font-normal`}>Director</Text>
                        </View>
                        <TouchableOpacity style={tw`border-b border-l  border-[#ccc] flex-1 items-center py-6`} onPress={() => setCameramodalVisible(!cameramodalVisible)}>
                            <Image source={ImageIcons.producer} style={[tw`w-15 h-15`, { tintColor: '#5fafcf' }]} />
                            <Text  onPress={() => props.navigation.navigate("Camera")}style={tw`text-[#000] text-[3.5] p-1 font-normal`}>Camera</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={tw`bg-[#fff] flex flex-row`}>
                        <View style={tw`border-b border-r border-t border-[#ccc] flex-1 items-center py-6`}>
                            <Image source={ImageIcons.producer} style={[tw`w-15 h-15 `, { tintColor: '#5fafcf' }]} />
                            <Text onPress={() => props.navigation.navigate("Lighting")} style={tw`text-[#000] text-[3.5] p-1 font-normal`}>Lighting</Text>
                        </View>
                        <View style={tw`border border-[#ccc] flex-1 items-center py-6`}>
                            <Image source={ImageIcons.producer} style={[tw`w-15 h-15`, { tintColor: '#5fafcf' }]} />
                            <Text style={tw`text-[#000] text-[3.5] p-1 font-normal`}>Sound</Text>
                        </View>
                        <View style={tw`border-b border-t border-l border-[#ccc] flex-1 items-center py-6`}>
                            <Image source={ImageIcons.producer} style={[tw`w-15 h-15`, { tintColor: '#5fafcf' }]} />
                            <Text style={tw`text-[#000] text-[3.5] p-1 font-normal`}>Editorial</Text>
                        </View>
                    </View>
                    <View style={tw`bg-[#fff] flex flex-row`}>
                        <View style={tw`border-b border-r border-t border-[#ccc] flex-1 items-center py-6`}>
                            <Image source={ImageIcons.producer} style={[tw`w-15 h-15 `, { tintColor: '#5fafcf' }]} />
                            <Text style={tw`text-[#000] text-[3.5] p-1 font-normal`}>HMU</Text>
                        </View>
                        <View style={tw`border border-[#ccc] flex-1 items-center py-6`}>
                            <Image source={ImageIcons.producer} style={[tw`w-15 h-15`, { tintColor: '#5fafcf' }]} />
                            <Text style={tw`text-[#000] text-[3.5] p-1 font-normal`}>Wardrobe</Text>
                        </View>
                        <View style={tw`border-b border-t border-l border-[#ccc] flex-1 items-center py-6`}>
                            <Image source={ImageIcons.producer} style={[tw`w-15 h-15`, { tintColor: '#5fafcf' }]} />
                            <Text style={tw`text-[#000] text-[3.5] p-1 font-normal`}>Special FX</Text>
                        </View>
                    </View>
                    <View style={tw`bg-[#fff] flex flex-row rounded-b-md`}>
                        <View style={tw` border-r border-t border-[#ccc] flex-1 items-center py-6`}>
                            <Image source={ImageIcons.producer} style={[tw`w-15 h-15 `, { tintColor: '#5fafcf' }]} />
                            <Text style={tw`text-[#000] text-[3.5] p-1 font-normal`}>Art</Text>
                        </View>
                        <View style={tw`border-t border-l border-r border-[#ccc] flex-1 items-center py-6`}>
                            <Image source={ImageIcons.producer} style={[tw`w-15 h-15`, { tintColor: '#5fafcf' }]} />
                            <Text style={tw`text-[#000] text-[3.5] p-1 font-normal`}>Office</Text>
                        </View>
                        <View style={tw`border-t border-l border-[#ccc] flex-1 items-center py-6`}>
                            <Image source={ImageIcons.producer} style={[tw`w-15 h-15`, { tintColor: '#5fafcf' }]} />
                            <Text style={tw`text-[#000] text-[3.5] p-1 font-normal`}>Misc.</Text>
                        </View>
                    </View>

                </View>
                <View style={tw`w-80 mx-auto h-15 bg-white mt-5 rounded-lg`}>
                    <Text style={tw`text-center py-5 text-base`}>Total:627</Text> 
                </View>



            </ScrollView>
            {/* <Editprofile /> */}
            <Loader />
        </KeyboardAvoidingView>
    )
}

export default Searchjobs;
