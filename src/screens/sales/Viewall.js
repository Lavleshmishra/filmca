import React, { useEffect, useState } from 'react';
import { Text, KeyboardAvoidingView, View, TextInput, FlatList, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Fonts, Colors, ImageIcons,Api } from '../../common';
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


const Viewall = (props) => {
    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;
    const cru_data = props?.route?.params?.crudata
    console.log("cru_data>><<<<<<", cru_data)

    const [visible, setVisible] = React.useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    
    const handlestepSubmit = async () => {
        setModalVisible(!modalVisible)
    }
    const containerStyle = { backgroundColor: 'red', padding: '7%', marginHorizontal: '5%', alignItems: 'center', };

    

    const renderItem = ({ item, index }) => {
        return (
            <View style={tw`mx-2 w-5.1/12`}>
                <View style={tw`bg-white mt-5 p-5 items-center  rounded-[3] `} >
                    <Text style={tw`text-center text-black text-xs font-semibold mt-1`} >{item.fullName}</Text>

                    {item?.profileImage != null ?
                        <Image source={{ uri: `${Api.imageUri}${item?.profileImage}` }} style={tw`w-24 h-24 rounded-full	mt-1`} />
                        :
                        <Image source={ImageIcons.man} style={tw`w-24 h-24 rounded-full	mt-1`} />
                    }
                    <Text style={tw`text-center text-black text-xs font-semibold mt-1`} >{item.workDepartments[0]?.position[0]?.name}</Text>

                </View>
            </View>
        );
    }


    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
            <ScrollView style={{ paddingBottom: 0, marginTop: 0 }}>
               
                    <View style={tw`w-full mx-3 mb-5`}>
                        <FlatList

                            data={cru_data}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            key={2}
                            numColumns={2}
                        />
                    </View>
               

                {/* <TouchableOpacity style={tw`bg-[#e6e6e6] border-[#5fafcf] border-2	 items-center  justify-center rounded-[10] p-1 my-5 mx-10`} onPress={() => handlestepSubmit()}  >
                    <Text style={tw`text-[#000] text-[3.5] p-3 px-15 font-normal`}>Step 2</Text>
                </TouchableOpacity> */}

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                    style={tw`m-0`} >
                    <View style={tw`flex-1	 justify-center  bg-zinc-500`}>
                        <View style={tw`bg-white rounded-[2]  justify-center drop-shadow-xl m-4`} >
                            <View style={tw`items-center border-b border-[#ccc] p-4`}>
                                <Text style={tw`text-lg font-normal  text-black `} numberOfLines={1} ellipsizeMode='tail' >John Hafner</Text>
                            </View>
                            <View style={tw`p-3`}>
                                <TouchableOpacity style={tw`bg-[#fff] border-[#5fafcf] border-2	 items-center  justify-center rounded-[10] mt-4 mb-4 h-13  mx-10`} onPress={() => setModalVisible(false)}>
                                    <Text style={tw`text-[#000] text-[3.5] p-2 px-15 font-normal`}>View Profile </Text>
                                </TouchableOpacity>

                                <View style={tw`flex flex-row`}>
                                    <Image style={tw`w-15 h-12 ml-8 `} source={ImageIcons.msgs} ></Image>
                                    <Image style={tw`w-15 h-12 ml-6 `} source={ImageIcons.msgs} ></Image>
                                    <Image style={tw`w-15 h-12 ml-6 `} source={ImageIcons.msgs} ></Image></View>
                                <View style={tw`flex flex-row`}>
                                    <Text style={tw`text-[#000] text-sm p-2  ml-9 font-normal`}>Msg</Text>
                                    <Text style={tw`text-[#000] text-[3.5] p-2 ml-9 font-normal`}>E-mail </Text>
                                    <Text style={tw`text-[#000] text-[3.5] p-2 ml-9 font-normal`}>Call </Text>

                                </View>
                            </View>

                        </View>

                    </View>

                </Modal>






            </ScrollView>
            {/* <Editprofile /> */}
            <Loader />
        </KeyboardAvoidingView>
    )
}

export default Viewall;
