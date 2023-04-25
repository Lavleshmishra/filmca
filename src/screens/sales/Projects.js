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


const Projects = (props) => {
    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    const loginId = props?.loginCredentials?.data?._id
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
    useEffect(() => {
        props.getprojectdata(loginId);
        console.log("props.getprojectlist======>>>", props?.getprojectlist);

    }, [])

    const renderItem = ({ item, index }) => {
        return (
            <View style={tw`w-full bg-white rounded-xl px-2 mt-2`}>
                <TouchableOpacity style={tw`border-l-8 border-[#000] items-center  flex-row my-2 p-2`} onPress={() => props?.navigation?.navigate("Projectdetails", { projectid: item._id })}>
                    <View style={tw`  w-3/12  bg-white items-center `} >

                        <Text style={tw`text-center text-black text-base font-semibold `} >{moment(item?.createdAt).format('MMM')}</Text>
                        <Text style={tw`text-center text-black text-base font-bold `} >{moment(item?.fromDate).format('D')}</Text>

                    </View>
                    <View style={tw`border-l border-[#ccc] w-9/12  px-4 `}>
                        <Text style={tw` text-black text-base font-bold `} >{item?.productionType?.title}</Text>
                        <Text style={tw`text-black text-[3.5] font-semibold  `} >{item.title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }



    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
            <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true} />
            <ScrollView style={tw``}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Newproject")} style={tw`bg-[#fff] border-[#5fafcf] border-2	 items-center  justify-center rounded-[10] p-1 mx-auto h-12 w-52 mt-6`}>
                    <Text style={tw`text-[#000] text-base  px-10 font-normal`}>New Project</Text>
                </TouchableOpacity>


                <View style={tw`mx-5 my-6`}>
                    <FlatList
                        data={props?.getprojectlist}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />

                </View>


            </ScrollView>

            <Loader />
        </KeyboardAvoidingView>
    )
}

export default Projects;
