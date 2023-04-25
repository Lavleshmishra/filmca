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
import Modal from 'react-native-modal';
import CalendarPicker from 'react-native-calendar-picker';
import { Dropdown } from 'react-native-element-dropdown';
import SelectDropdown from 'react-native-select-dropdown';

import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { FlatListSlider } from 'react-native-flatlist-slider';
import tw from 'twrnc';


const Newproject = (props) => {
    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;
    const loginId = props?.loginCredentials?.data?._id
    const projectId = props?.addproductiontype?.data?._id;
    //console.log("addproductiontype=======:::",productionid)

    const [modalVisible, setModalVisible] = useState(false);
    const [checkedId1, setcheckedId1] = React.useState([]);
    const [finalarr, setfinalarr] = React.useState([]);
    const [deparmentId, setSepartmentId] = useState('');
    const [newflat1, setnewflat1] = React.useState(false);
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';
    const [userarrlist, setUsearrlist] = React.useState('');
    const [selectprofile, setSelectprofile] = useState(false);
    const [description, setDescription] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [production, setProduction] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [step1, setstep1] = useState(true);
    const [step2, setstep2] = useState(false);
    



    const [selectedItem, setSelectedItem] = useState(null);
    const [allItems, setAllItems] = useState([]);




    useEffect(() => {
        props.getproduction();
        props.mycrulist(loginId);
    }, [])
    const selectedIngredient = (item) => {
        //console.log('selecionado: ' ,item);
        setSelectedItem(item);

        let temp = allItems.filter((parentItem) => parentItem.id !== item.id);

        item.selected = !item.selected;
        temp = temp.concat(item);
        temp.sort((a, b) => parseInt(a.id) - parseInt(b.id));
        //setAllItems(temp);
        //allItems.push(...temp)
        //setAllItems([]);
        let index = allItems.findIndex(obj => obj._id === temp[0]._id);

        if (index >= 0) {
            allItems.splice(index, 1);
        } else {
            allItems.push(...temp);
        }

    };

    const progressStepsStyle = {
        activeStepIconBorderColor: '#000',
        activeLabelColor: '#000',
        activeStepNumColor: 'white',
        activeStepIconColor: '#000',
        disabledStepIconColor: '#fff',
        progressBarColor: '#fff',
        completedStepIconColor: '#000',
        completedProgressBarColor: '#000',
        completedCheckColor: '#fff',
        disabledStepNumColor: '#000'
    };
    const onDateChange = (date, type) => {
        //alert(date)
        //function to handle the date change
        if (type === 'END_DATE') {
            setSelectedEndDate(date);
        } else {
            setSelectedEndDate(null);
            setSelectedStartDate(date);
        }
    };
    const containerStyle = { backgroundColor: 'red', padding: '7%', marginHorizontal: '5%', alignItems: 'center', };

    const housedata = [
        { label: 'Lory', value: '1' },
        { label: 'Port', value: '2' },
        { label: 'Full', value: '2' },
    ];
    const onNextStep1 = async () => {
        if(production!="" && description!=""){
            setstep1(false);
            let request = {
                "userId": loginId,
                "fromDate": selectedStartDate.toDate(),
                "toDate": selectedEndDate.toDate(),
                "productionType": production,
                "description": description,
                "title": title,
            }
            props.addnewproject(request, props.navigation);
        }else{
            setstep1(true);
            alert('Details requried')
            
        }
    }
    const onsubmitbtn = async () => {
        if(allItems.length<1){
            alert('Please select cru members')
        }else {
            let request = {
                "_id": projectId,
                "invitedCru": allItems,
            }

            props.inviteprojectcru(request, props.navigation);
            setModalVisible(!modalVisible)
            setAllItems([]);
        }
        // props.navigation.navigate("Projects")
    }
    const handlecrudata = async (user) => {
        //console.log("item.user===>", user)
        setSelectprofile(!selectprofile);
        setUsearrlist(user);
        //props.navigation.navigate("Camera", { user: item.user })
    }

    const callAction1 = async (value) => {
       
        for (var i = 0; i < userarrlist.length; i++) {
            if (userarrlist[i].fullName == value) {
                if (checkedId1.indexOf(value) > -1) {
                    var index = checkedId1.indexOf(value);
                    checkedId1.splice(index, 1);
                    setcheckedId1(checkedId1)
                } else {
                    checkedId1.push(value);
                    setcheckedId1(checkedId1)
                }
            }
        }
        console.log("checkedId1==>", checkedId1)
        setnewflat1(s => !s);
        finalarr.push({ value });
        setfinalarr(finalarr);
        setcheckedId1([]);
        console.log("finalarr==>", finalarr)
    }

   
    const renderItem3 = ({ item, index }) => {
        //console.log("item?.useritem?.user", item?.user)
        if(item?.user?.length>0){
            return (
                
                <View style={tw`w-full`}>
                    <Text style={tw`text-center text-black text-[4] font-bold mt-1`} >{item.departmentName}</Text>
                    <View style={tw`w-full `}>
                       
                        <FlatList
                            data={item?.user}
                            //Key={2}
                            //numColumns={2}
                            renderItem={renderItem4}
                            keyExtractor={item => item.id}
                            horizontal={true}
                        />
                        
                    </View>
                </View>

            );
        }
    }
    const renderItem4 = ({ item, index }) => {

        return (
            <TouchableOpacity style={tw`m-2`} onPress={() => selectedIngredient(item)}
            //onPress={() => props.navigation.navigate("Glyndenprofile", { userId: item?._id })}
            >
                {!item.selected ?
                    <View style={tw` bg-white mt-5 p-5 px-6  rounded-[3] `} >
                        <View style={tw`flex-row justify-between 	`}>
                            <View>
                                <Text style={tw`text-center text-black text-xs font-semibold mt-1`} ></Text>
                            </View>
                            <View>
                                <Text style={tw`text-center text-black text-xs font-semibold mt-1`} >{item.fullName}</Text>

                            </View>
                            <TouchableOpacity style={tw``} >
                                
                            </TouchableOpacity>
                        </View>

                        <View style={tw`items-center my-2`}>

                            {item?.profileImage != null ?
                                <Image source={{ uri: `${Api.imageUri}${item?.profileImage}` }} style={tw`w-24 h-24 rounded-full mt-1`} />
                                :
                                <Image source={ImageIcons.man} style={tw`w-24 h-24 rounded-full	mt-1`} />
                            }
                        </View>
                        <View style={tw`items-center`}>
                            

                        </View>
                    </View>
                    :
                    <View style={tw` bg-white mt-5 p-5 px-6 bg-[#00cc00] rounded-[3] `} >
                        <View style={tw`flex-row justify-between 	`}>
                            <View>
                                <Text style={tw`text-center text-black text-xs font-semibold mt-1`} ></Text>
                            </View>
                            <View>
                                <Text style={tw`text-center text-black text-xs font-semibold mt-1`} >{item.fullName}</Text>

                            </View>
                            <TouchableOpacity style={tw``} >
                                <Image source={ImageIcons.closetoday} style={[tw`w-4 h-4`, { tintColor: '#5fafcf' }]} />
                            </TouchableOpacity>
                        </View>

                        <View style={tw`items-center my-2`}>

                            {item?.profileImage != null ?
                                <Image source={{ uri: `${Api.imageUri}${item?.profileImage}` }} style={tw`w-24 h-24 rounded-full mt-1`} />
                                :
                                <Image source={ImageIcons.man} style={tw`w-24 h-24 rounded-full	mt-1`} />
                            }
                        </View>
                        <View style={tw`items-center`}>
                            <Text style={tw`text-center text-black text-xs font-semibold mt-1`} >{item.workDepartments[0]?.position[0]?.name}</Text>

                        </View>
                    </View>
                }

            </TouchableOpacity>
        );
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
            <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">

                <View style={tw`flex-1`}>
                    <ProgressSteps {...progressStepsStyle} >
                        <ProgressStep 
                        label="" 
                        onNext={onNextStep1} 
                        errors={step1}>
                            <View style={tw`mx-3`}>
                                <View style={tw` items-center mb-7`}>
                                    <Text style={tw`text-[#000] text-[3.9] font-normal`}>Select the dates and enter the details below </Text>
                                </View>
                                <View style={tw`bg-[#fff] rounded-[3] flex py-5`}>
                                    <CalendarPicker
                                        startFromMonday={true}
                                        allowRangeSelection={true}
                                        minDate={moment().toDate()}
                                        maxDate={moment().add(1, 'month').toDate()}
                                        weekdays={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
                                        months={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}

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
                                <View style={tw` bg-white rounded-t-xl  mt-6 py-7`}>
                                    <View style={tw`flex-row justify-center`}>
                                        <View style={tw` w-35 mr-5`}>
                                            <Text style={tw`text-[4] font-bold text-right	`} >*Date:</Text>
                                        </View>
                                        <View style={tw` w-40`}>
                                            <Text style={tw` text-base font-semibold `}>{startDate != '' ? moment(startDate).format('M/D') : '---'} - {endDate != '' ? moment(endDate).format('M/D') : '---'}</Text>
                                        </View>

                                    </View>
                                    <View style={tw`flex-row justify-center items-center`}>
                                        <View style={tw` w-40 `}>
                                            <Text style={tw` text-[4] font-bold text-right`} >*Project Type: </Text>
                                        </View>
                                        <View style={tw` w-45 `}>

                                            <SelectDropdown
                                                data={props?.getproductionlist}
                                                onSelect={(selectedItem, index) => {
                                                    console.log("id>>", selectedItem._id, index)
                                                    setProduction(selectedItem._id)
                                                }}
                                                defaultButtonText={'Film'}
                                                buttonTextAfterSelection={(selectedItem, index) => {

                                                    return selectedItem.title
                                                }}
                                                buttonStyle={styles.dropdown1BtnStyle}
                                                buttonTextStyle={styles.dropdown1BtnTxtStyle}

                                                rowTextForSelection={(item, index) => {

                                                    return item.title
                                                }}
                                            />
                                        </View>


                                    </View>
                                    <View style={tw`flex-row justify-center items-center`}>
                                        <View style={tw` w-35`}>
                                            <Text style={tw`text-sm font-bold text-right`} >Title: </Text>
                                        </View>
                                        <View style={tw`h-15 w-45`}>

                                            <TextInput
                                                style={tw`border-b	border-[#d9d9d9] text-black	pl-2 h-15`}
                                                placeholder="Tittle"
                                                value={title}
                                                onChangeText={(text) => setTitle(text)}
                                                placeholderTextColor={'#999999'}

                                            />
                                        </View>
                                    </View>
                                    <View style={tw`flex-row mx-auto items-center mb-5`}>
                                        <View style={tw` w-30`}>
                                            <Text style={tw`text-sm font-bold text-right`} >Description: </Text>
                                        </View>
                                        <View style={tw`h-15 w-45`}>

                                            <TextInput
                                                style={tw`border-b	border-[#d9d9d9] text-black	pl-2 h-15`}
                                                placeholder="Description"
                                                value={description}
                                                onChangeText={(text) => setDescription(text)}
                                                placeholderTextColor={'#999999'}
                                                multiline={true}
                                            />
                                        </View>
                                    </View>
                                </View>

                            </View>
                        </ProgressStep>
                        {/* <ProgressStep label="" >
                            <View style={tw`mx-3`}>
                                <View style={tw` items-center mb-7`}>
                                    <Text style={tw`text-[#000] text-[3.9] font-normal`}>Tab a department to select Cru to invite</Text>
                                </View>

                                {selectprofile == true ?
                                    <View style={tw`mx-3 `}>
                                        <FlatList
                                            data={userarrlist}
                                            Key={2}
                                            numColumns={2}
                                            renderItem={renderItem3}
                                            keyExtractor={item => item.id}
                                        />
                                    </View>
                                    :
                                    <View style={tw`rounded-[3]`}>
                                        <FlatList
                                            data={props?.getmycrulist?.data}
                                            renderItem={renderItem}
                                            keyExtractor={item => item.id}
                                            showsHorizontalScrollIndicator={false}
                                            //horizontal={true}
                                            key={3}
                                            numColumns={3}
                                        />
                                    </View>
                                }

                            </View>
                        </ProgressStep> */}
                        <ProgressStep 
                        label="" 
                        onSubmit={onsubmitbtn} 
                        errors={step2}>
                            <View style={tw`mx-3`}>
                                <View style={tw` items-center mb-7`}>
                                    <Text style={tw`text-[#000] text-[3.9] font-normal`}>{step1} {step2} Review your Cru invites before sending</Text>
                                </View>
                                {/* <View style={tw` `}>
                                    <FlatList
                                        data={props?.getmycrulist?.data}
                                        Key={2}
                                        numColumns={2}
                                        renderItem={renderItem4}
                                        keyExtractor={item => item.id}
                                    />
                                </View> */}
                                <View style={tw`w-full `}>
                                    <FlatList
                                        data={props?.getmycrulist?.data}
                                        Key={2}
                                        //numColumns={2}
                                        renderItem={renderItem3}
                                        keyExtractor={item => item.id}
                                    />
                                </View>
                            </View>
                        </ProgressStep>
                    </ProgressSteps>
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
                                <View style={tw`items-center border-b border-[#ccc] p-4`}>
                                    <Text style={tw`text-base font-normal  text-black `} numberOfLines={1} ellipsizeMode='tail' >Invites Send</Text>
                                </View>
                                <View style={tw`p-3`}>
                                    <View style={tw`mx-5 my-4`}>
                                        <Text style={tw`text-[#000000] text-center mt-1 font-normal text-[3.1]`}>Thanku for listing Your project on Cru !</Text>
                                    </View>
                                    <TouchableOpacity style={tw`bg-[#fff] border-[#5fafcf] border-2	 items-center  justify-center rounded-[10] p-1 my-5 mx-10`} onPress={() => { setModalVisible(false); props.navigation.navigate('Projectdetails', { projectid: projectId }) }}>
                                        <Text style={tw`text-[#000] text-[3.5] p-2 px-15 font-normal`}>View Project</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </Modal>
                </View>

            </ScrollView>

            <Loader />
        </KeyboardAvoidingView>
    )
}

export default Newproject;
