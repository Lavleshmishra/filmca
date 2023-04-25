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


const Projectdetails = (props) => {
    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;


    const project_Id = props?.route?.params?.projectid
    //console.log("project_Id===>>>>",project_Id)
    const [visible, setVisible] = React.useState(false);
    const [subMsg, onChangeText1] = React.useState("");
    const [projectmember, setProjectmember] = useState('1');

    useEffect(() => {
        props.getprojectdetail(project_Id);
        console.log("props.getprojectdetilslist======>>>", props?.getprojectdetilslist);
        console.log("props?.getprojectdetilslist?.appliedJobs======>>>", props?.getprojectdetilslist?.appliedJobs);
    }, [])

    const handletabchange = (id) => {
        setProjectmember(id);

    };
    const handleacceptrequest = async (id) => {
        let request = {
            "_id": id,
        }
        props.acceptuser(request, props.navigation);
    }
    const handledeclinerequest = async (id) => {
        let request = {
            "_id": id,
        }
        props.deleteuserrequest(request, props.navigation);
        props.getprojectdetail(project_Id);
    }
    
    const handleremoverequest = async (id) => {
        let request = {
            "_id": project_Id,
            "user_id":id
        }
        props.removeuserfromlist(request, props.navigation);
        setTimeout(function(){
            props.getprojectdetail(project_Id);
        },1500);
        
    }

    const DATA = [
        {
            id: '1',
            text: 'Project Members',
            //  image:ImageIcons.salonman,
        },
        {
            id: '2',
            text: 'Applied Users',
            //  image:ImageIcons.salonwoman,
        },


    ];
    const DATA1 = [
        {

            image: ImageIcons.womanclap,
            image2: ImageIcons.tik,
            image1: ImageIcons.Cross,
            text1: 'Sarah Orefice',
            text2: '2nd Assistant director ',
            text3: '8:44 pm',

        },
        {
            image: ImageIcons.womanclap,
            image2: ImageIcons.tik,
            image1: ImageIcons.Cross,
            text1: 'Sarah Orefice',
            text2: 'Ist Assistant director',
            text3: '6:29 pm',

        },
    ]
    const DATA2 = [
        {

            image: ImageIcons.womanclap,
            image2: ImageIcons.tik,
            image1: ImageIcons.Cross,
            text1: 'Sarah Orefice',
            text2: '2nd Assistant director ',
            text3: '8:44 pm',

        },
        {
            image: ImageIcons.womanclap,
            image2: ImageIcons.tik,
            image1: ImageIcons.Cross,
            text1: 'Jonathan Williams',
            text2: 'Ist Assistant director',
            text3: '6:29 pm',

        },
    ]
    const DATA3 = [
        {

            image: ImageIcons.womanclap,
            image2: ImageIcons.tik,
            image1: ImageIcons.Cross,
            text1: 'Sarah Orefice',
            text2: '2nd Assistant director ',
            text3: '8:44 pm',

        },
        {
            image: ImageIcons.womanclap,
            image2: ImageIcons.tik,
            image1: ImageIcons.Cross,
            text1: 'Sarah Orefice',
            text2: 'Ist Assistant director',
            text3: '6:29 pm',

        },
        {
            image: ImageIcons.womanclap,
            image2: ImageIcons.tik,
            image1: ImageIcons.Cross,
            text1: 'Jonathan Williams',
            text2: 'Ist Assistant director',
            text3: '6:29 pm',

        },
    ]






    const renderItem = ({ item, index }) => {
        return (
            <View style={tw`mx-2`}>
                {projectmember == item.id ?
                    <TouchableOpacity style={tw`w-46 h-18 bg-[#fff] my-6  rounded-xl border-solid border-t-8 border-[#000]`} onPress={() => handletabchange(item.id)}>
                        <Text style={tw`text-center pt-4 text-base text-[#000]	font-bold`} >{item.text}</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={tw`w-46 h-18 bg-[#fff] my-6 rounded-xl border-solid border-t-8 border-[#ccc]`} onPress={() => handletabchange(item.id)}>
                        <Text style={tw`text-center pt-4 text-base text-[#000]	font-bold`}>{item.text}</Text>
                    </TouchableOpacity>
                }
            </View>
        );
    }

    
    const renderItemmember = ({ item, index }) => {
        return (
            <View style={tw`w-full bg-white rounded-xl px-2 mt-2`}>
                <TouchableOpacity style={tw` items-center  flex-row my-2 `} onPress={() => props?.navigation?.navigate("Projectdetails", { projectid: item._id })}>
                    <View style={tw`  w-2.3/12  bg-white items-center `} >
                    {item?.profileImage != null ?
                            <Image source={{ uri: `${Api.imageUri}${item?.profileImage}` }} style={tw`w-18 h-18 rounded-full`} />
                            :
                            <Image source={ImageIcons.man} style={tw`w-18 h-18 rounded-full`} />
                        }
                       
                    </View>
                    <View style={tw` w-9.6/12 flex-row justify-between pl-3 `}>
                        <View>
                            <Text style={tw` text-black text-base font-bold `} >{item?.fullName}</Text>
                            <Text style={tw`text-black text-[3.5] font-semibold  `} >{item?.workDepartments[0]?.position[0]?.name}</Text>
                        </View>
                        <View style={tw`w-2.4/12  flex-row justify-between	items-center `}>

                            <View>
                                
                            </View>
                            <View>
                            <TouchableOpacity onPress={() => handleremoverequest(item._id)}>
                                <Image source={ImageIcons.Cross} style={tw`w-11 h-10 `} />
                            </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    const renderItemaplied = ({ item, index }) => {
        return (
            <View style={tw`w-full bg-white rounded-xl px-2 mt-2`}>
                <TouchableOpacity style={tw` items-center  flex-row my-2 `} onPress={() => props?.navigation?.navigate("Projectdetails", { projectid: item._id })}>
                    <View style={tw`  w-2.3/12  bg-white items-center `} >
                        {item?.appliedBy?.profileImage != null ?
                            <Image source={{ uri: `${Api.imageUri}${item?.appliedBy?.profileImage}` }} style={tw`w-18 h-18 rounded-full`} />
                            :
                            <Image source={ImageIcons.man} style={tw`w-18 h-18 rounded-full`} />
                        }

                    </View>
                    <View style={tw` w-9.6/12 flex-row justify-between pl-3 `}>
                        <View>
                            <Text style={tw` text-black text-base font-bold `} >{item?.appliedBy?.fullName}</Text>
                            <Text style={tw`text-black text-[3.5] font-semibold  `} >{item?.appliedBy?.workDepartments?.position?.name}</Text>
                        </View>
                        {item.status == "pending" &&
                            <View style={tw`w-3.6/12  flex-row justify-between	items-center `}>
                                <TouchableOpacity onPress={() => handleacceptrequest(item._id)}>
                                    <Image source={ImageIcons.tik} style={tw`w-11 h-10 `} />
                                </TouchableOpacity >
                                <TouchableOpacity onPress={() => handledeclinerequest(item._id)}>
                                    <Image source={ImageIcons.Cross} style={tw`w-11 h-10 `} />
                                </TouchableOpacity>
                            </View>
                        }
                        {item.status == "Accepted" &&
                            <TouchableOpacity >
                                <Image source={ImageIcons.green_tik} style={tw`w-11 h-10 `} />
                            </TouchableOpacity>
                        }
                    </View>
                </TouchableOpacity>
            </View>
        );
    }




    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
            <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true} />
            <ScrollView style={tw``}>

                <View style={tw` rounded-xl mx-5 mt-4 py-4`}>
                    <View style={tw`flex-row bg-white w-full rounded-t-[3]	 mb-1 py-4 items-center`}>
                        <View style={tw` w-5/12 mr-5`}>
                            <Text style={tw`text-[4] font-bold text-right`} >Date: </Text>
                        </View>
                        <View style={tw`w-7/12`}>
                            <Text style={tw` text-base font-semibold `}>{moment(props?.getprojectdetilslist?.fromDate).format('MMM D')} - {moment(props?.getprojectdetilslist?.toDate).format('MMM D')}</Text>
                        </View>

                    </View>
                    <View style={tw`flex-row bg-white w-full py-4 mb-1 items-center`}>
                        <View style={tw` w-5/12 mr-5 `}>
                            <Text style={tw` text-[4] font-bold text-right`} >Project Type: </Text>
                        </View>
                        <View style={tw` w-7/12 `}>
                            <Text style={tw` text-base font-semibold `}>{props?.getprojectdetilslist?.productionType?.title}</Text>

                        </View>


                    </View>
                    <View style={tw`flex-row bg-white w-full py-4 mb-1 items-center`}>
                        <View style={tw` w-5/12 mr-5`}>
                            <Text style={tw`text-[4] font-bold text-right`} >Title: </Text>
                        </View>
                        <View style={tw` w-7/12`}>
                            <Text style={tw` text-base font-semibold `}>{props?.getprojectdetilslist?.title}</Text>
                        </View>
                    </View>
                    <View style={tw`flex-row bg-white w-full rounded-b-[3]	 py-4 mb-1  mb-5 pr-4`}>
                        <View style={tw`w-5/12 mr-5`}>
                            <Text style={tw`text-[4] font-bold text-right`} >Description: </Text>
                        </View>
                        <View style={tw`w-7/12 pr-3 `}>
                            <Text style={tw` text-base font-semibold `}>{props?.getprojectdetilslist?.description}</Text>
                        </View>
                    </View>
                </View>
                <View style={tw`mx-2 w-full`}>
                    <FlatList
                        horizontal={true}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                {projectmember == 1 &&
                    <View style={tw`mx-2 my-6`}>
                        <FlatList
                            data={props?.getprojectdetilslist?.invitedCru}
                            renderItem={renderItemmember}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}

                        />
                    </View>
                }

                {projectmember == 2 &&
                    <View style={tw`mx-2 my-6`}>
                        {props?.getprojectdetilslist?.appliedJobs?.length > 0 ?
                            <FlatList
                                data={props?.getprojectdetilslist?.appliedJobs}
                                renderItem={renderItemaplied}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}

                            />
                            :
                            <Text style={tw`text-[#000] text-[5] font-bold text-center	mt-20`}>No User</Text>
                        }

                    </View>
                }


            </ScrollView>

            <Loader />
        </KeyboardAvoidingView>
    )
}

export default Projectdetails;
