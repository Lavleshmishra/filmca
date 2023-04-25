import React, { useEffect, useState } from 'react';
import { Text, KeyboardAvoidingView, View, TextInput, FlatList, StatusBar, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
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



const EventScreen = (props) => {
  const {
    navigation,
    values,
    errors,
    handleChange,
    handleSubmit,
  } = props;

  const [socilfeed, setSocialfeed] = useState('');
  const [visible, setVisible] = React.useState(true);
  
  const [eventarr, setEventarr] = React.useState([]);
  const [eventdata, setEventdata] = React.useState(false);

  
  useEffect(() => {
    setTimeout(function () {
      setVisible(false)
      
    }, 2000)
    props.geteventcategory();
  }, [])

  useEffect(() => {
    //setEventarr(props?.geteventlist)
    if(props?.geteventlist?.length>0){
      setEventarr(props?.geteventlist)
    }else {
      props.getevent();
    }
  }, [props?.geteventlist])

  const handletabchange = (id) => {
    const unCheckInAttends = props?.geteventlist.filter((item) => {
      const itemname = item.eventCategory;
      return itemname == id;
    });

    setEventarr(unCheckInAttends)
    setEventdata(true)
    setSocialfeed(id);
  };

  
  const renderItemCategory = ({ item, index }) => {
    return (
      <View>
        {socilfeed == item._id ?
          <TouchableOpacity style={tw`w-46 h-18 bg-[#fff] my-6 ml-5 rounded-xl border-solid border-t-8 border-[#000]`} onPress={() => handletabchange(item._id)}>
            <Text style={tw`text-center pt-6 text-slate-600	`} >{item.title}</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity style={tw`w-46 h-18 bg-white my-6 ml-5 rounded-xl border-solid border-t-8 border-[#ccc]`} onPress={() => handletabchange(item._id)} >
            <Text style={tw`text-center pt-6 text-slate-600	`} >{item.title}</Text>
          </TouchableOpacity>
        }
      </View>

    );
  }

  const renderItemevent = ({ item, index }) => {
    return (
      <TouchableOpacity style={tw`m-3 mx-4`} onPress={() => props.navigation.navigate("Eventdetail", { eventid: item?._id })}>
        <View style={tw` bg-white  rounded-xl `} >
          <Image source={{ uri: `${Api.imageUri}${item.image}` }} style={[tw` h-45 w-5/5 rounded-t-xl `, { resizeMode: 'cover' }]} />
          <Text style={tw`text-center py-4`} >{item.title}</Text>
        </View>
        <View style={tw` bg-white m-6 rounded-[3] border-solid  absolute p-1 px-3`} >
          <Text style={tw`text-center text-black text-[3]`} >{moment(item?.createdAt).format('MMM')}</Text>
          <Text style={tw`text-center text-[4] font-bold text-black `} >{moment(item?.createdAt).format('d')}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
      <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true} />
      <ScrollView style={{ paddingBottom: 0, }}>
        <SafeAreaView style={styles.container}>

          <FlatList
            horizontal={true}
            data={props?.geteventcategorylist}
            renderItem={renderItemCategory}
            keyExtractor={item => item.id}
          />
          <View >

            <FlatList
              data={eventarr}
              renderItem={renderItemevent}
              keyExtractor={item => item.id}
              extraData={eventdata}
            />


          </View>
        </SafeAreaView>

      </ScrollView>

      <Loader isVisible={visible} />
    </KeyboardAvoidingView>
  )
}

export default EventScreen;
