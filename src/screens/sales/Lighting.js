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


const Lighting = (props) => {
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

    useEffect(() => {
        props.alljobproject();
        console.log("props.getalljobprojectlist======>>>", props?.getalljobprojectlist);

    }, [])
    const DATA = [
        {
            text1: 'June',
            text2: '9',
            text3: 'Music Video',
            text4: 'R&B Artist',
            text5: '$400',


        },



    ];


    const renderItem2 = ({ item, index }) => {
        return (
            <View style={tw`w-46 h-18 bg-white my-6 ml-5 rounded-xl border-solid border-t-8 border-black`} >
                <Text style={tw`text-center pt-6 text-slate-600	`} >{item.text}</Text>
            </View>
        );
    }


    const renderItem = ({ item, index }) => {
        return (
            <View>
                <View style={tw`w-full bg-white rounded-xl px-2 mt-2`}>
                    <TouchableOpacity style={tw` items-center  flex-row my-2 py-2`} onPress={() => props.navigation.navigate("Jobdetails1", { item: item })}>
                        <View style={tw`  w-3/12  bg-white items-center `} >

                            <Text style={tw`text-center text-black text-base font-semibold `} >{moment(item?.fromDate).format('MMM')}</Text>
                            <Text style={tw`text-center text-black text-base font-bold `} >{moment(item?.toDate).format('D')}</Text>

                        </View>
                        <View style={tw`border-l border-[#ccc] w-9/12  px-4 `}>
                            <Text style={tw` text-black text-base font-bold `} >{item?.productionType?.title}</Text>
                            <Text style={tw`text-black text-[3.5] font-semibold  `} >{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

        );
    }





    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
            <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true} />
            <ScrollView style={tw``}>

                <View style={tw`mx-5 my-6`}>
                    <FlatList
                        data={props?.getalljobprojectlist}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>

                {/* <TouchableOpacity style={tw`bg-[#fff] border-[#5fafcf] border-2	 items-center  justify-center rounded-[10] p-1 mx-auto h-12 w-52 mt-1 mb-15`}>
                    <Text style={tw`text-[#000] text-base  px-10 font-normal`}>View Details</Text>
                </TouchableOpacity> */}
            </ScrollView>

            <Loader />
        </KeyboardAvoidingView>
    )
}

export default Lighting;
