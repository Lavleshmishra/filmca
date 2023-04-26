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


const Cru = (props) => {
    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;
    //console.log("props",)
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
    const loginId = props?.loginCredentials?.data?._id
    console.log("loginId===>", loginId);

    useEffect(() => {
        props.mycrulist(loginId);
        console.log("props.getmycrulist======>>>", props?.getmycrulist);

    }, [])

    const renderItemcru = ({ item, index }) => {

        return (
            <View style={tw`bg-[#fff] w-4/12 flex  justify-center`}>
                {item?.user?.length > 0 ?
                    <TouchableOpacity style={tw`border  border-[#ccc]  items-center py-4 px-4`} onPress={() => props.navigation.navigate("Camera", { user: item })}>
                        <Image source={{ uri: `${Api.imageUri}${item.image}` }} style={[tw`w-9 h-9 `, { tintColor: '#5fafcf' }]} />
                        <Text style={tw`text-[#000] text-[3.5] font-normal`}>{item.departmentName}</Text>
                        <Text style={tw`text-[#000] text-[3.5] text-center font-normal`}>{item?.user?.length}</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={tw`border  border-[#ccc]  items-center py-4 px-4`} >
                        <Image source={{ uri: `${Api.imageUri}${item.image}` }} style={[tw`w-9 h-9 `, { tintColor: '#5fafcf' }]} />
                        <Text style={tw`text-[#000] text-[3.5] font-normal`}>{item.departmentName}</Text>
                        <Text style={tw`text-[#000] text-[3.5] text-center font-normal`}>{item?.user?.length}</Text>
                    </TouchableOpacity>
                }
            </View>
        );
    }


    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
            <ScrollView >
                <View style={tw`mx-3 my-5`}>
                    <View style={tw`rounded-[3] w-full my-5 mb-5`}>
                        <FlatList
                            data={props?.getmycrulist?.data}
                            renderItem={renderItemcru}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            //horizontal={true}
                            numColumns={3}
                        />
                    </View>
                    <View style={tw`  bg-white my-5 rounded-lg`}>
                        <Text style={tw`text-center py-5 text-base`}>Total: {props?.getmycrulist?.cruData?.length}</Text>
                    </View>
                    <TouchableOpacity style={tw` mx-15 bg-white mt-5 rounded-3xl border-2 border-sky-400 `} onPress={() => props.navigation.navigate("Viewall", { crudata: props?.getmycrulist?.cruData })}>
                        <Text style={tw`text-center py-4 text-base`}>View All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`mx-15 bg-white mt-5 rounded-3xl border-2 border-sky-400  `} onPress={() => props.navigation.navigate("Newproject")}>
                        <Text style={tw`text-center py-4 text-base`}>New Project</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Loader />
        </KeyboardAvoidingView>
    )
}

export default Cru;
