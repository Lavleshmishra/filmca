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
import CalendarPicker from 'react-native-calendar-picker';


const Jobdetails1 = (props) => {
    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    const jobdata = props?.route?.params?.item;
    const loginId = props?.loginCredentials?.data?._id
    console.log("jobdata===========>>>>", jobdata)
    const [visible, setVisible] = React.useState(false);
    const [subMsg, onChangeText1] = React.useState("");
    const [msg, onChangeText2] = React.useState("");

    const handleapply = async () => {
        let request = {
            "project": jobdata._id,
            "appliedBy": loginId,
        
        }
        //console.log("selectedStartDate===>",selectedStartDate.toDate())
        props.applyjobsuser(request, props.navigation);
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
            <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true} />
            <ScrollView style={tw``}>
                <View style={tw`flex-1 mx-3`}>
                    <View style={tw`bg-[#fff] rounded-[3] flex py-5`}>
                        <CalendarPicker
                            startFromMonday={true}
                            allowRangeSelection={false}
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

                        />
                    </View>

                    <View style={tw` rounded-xl  mt-4 py-4`}>
                        <View style={tw`flex-row bg-white w-full rounded-t-[3]	 mb-0.5 py-4 items-center`}>
                            <View style={tw` w-5/12 mr-5`}>
                                <Text style={tw`text-[4] font-bold text-right`} >Date: </Text>
                            </View>
                            <View style={tw`w-7/12`}>
                                <Text style={tw` text-base font-semibold `}>{moment(jobdata?.fromDate).format('MMM D')} - {moment(jobdata?.toDate).format('MMM D')}</Text>
                            </View>

                        </View>
                        <View style={tw`flex-row bg-white w-full py-4 mb-0.5 items-center`}>
                            <View style={tw` w-5/12 mr-5 `}>
                                <Text style={tw` text-[4] font-bold text-right`} >Project Type: </Text>
                            </View>
                            <View style={tw` w-7/12 `}>
                                <Text style={tw` text-base font-semibold `}>{jobdata?.productionType?.title}</Text>
                            </View>


                        </View>
                        <View style={tw`flex-row bg-white w-full py-4 mb-0.5 items-center`}>
                            <View style={tw` w-5/12 mr-5`}>
                                <Text style={tw`text-[4] font-bold text-right`} >Title: </Text>
                            </View>
                            <View style={tw` w-7/12`}>
                                <Text style={tw` text-base font-semibold `}>{jobdata?.title}</Text>
                            </View>
                        </View>
                        {/* <View style={tw`flex-row bg-white w-full py-4 mb-0.5 items-center`}>
                        <View style={tw` w-5/12 mr-5`}>
                            <Text style={tw`text-[4] font-bold text-right`} >Rate: </Text>
                        </View>
                        <View style={tw` w-7/12`}>
                            <Text style={tw` text-base font-semibold `}>{props?.getprojectdetilslist?.title}</Text>
                        </View>
                    </View>
                    <View style={tw`flex-row bg-white w-full py-4 mb-0.5 items-center`}>
                        <View style={tw` w-5/12 mr-5`}>
                            <Text style={tw`text-[4] font-bold text-right`} >Hours: </Text>
                        </View>
                        <View style={tw` w-7/12`}>
                            <Text style={tw` text-base font-semibold `}>{props?.getprojectdetilslist?.title}</Text>
                        </View>
                    </View> */}
                        <View style={tw`flex-row bg-white w-full rounded-b-[3]	 py-4 mb-0.5  mb-5 pr-4`}>
                            <View style={tw`w-5/12 mr-5`}>
                                <Text style={tw`text-[4] font-bold text-right`} >Description: </Text>
                            </View>
                            <View style={tw`w-7/12 pr-3 `}>
                                <Text style={tw` text-base font-semibold `}>{jobdata?.description}</Text>
                            </View>
                        </View>
                    </View>


                    <TouchableOpacity style={tw`bg-[#fff] border-[#5fafcf] border-2	 items-center  justify-center rounded-[10] p-1 mx-auto h-12 w-52 mt-6 mb-15`}
                        onPress={() => handleapply()}>
                        <Text style={tw`text-[#000] text-base  px-10 font-normal`}>Apply</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>

            <Loader />
        </KeyboardAvoidingView>
    )
}

export default Jobdetails1;
