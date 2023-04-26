import React, { useEffect, useState } from 'react';
import { Text, KeyboardAvoidingView, View, TextInput, FlatList, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Fonts, Colors, ImageIcons ,Api} from '../../common';
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
//import {FlatListSlider} from '../../components/react-native-flatlist-slider';
import { SliderBox } from "react-native-image-slider-box";
//import Video from 'react-native-video';
import { FlatListSlider } from 'react-native-flatlist-slider';
import tw from 'twrnc';
import Search from './Search';


//  import {
//   StepProgressBar
// } from 'react-native-step-progress-bar';
const Usersearch = (props) => {
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
    const [search, setSearch] = React.useState("");

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
    const [showdata, setShowdata] = useState(true);
    useEffect(() => {
        setShowdata(props.getallalluserlistinglist);
        console.log("props.getallalluserlistinglist======>>>", props?.getallalluserlistinglist);
    }, [props?.getallalluserlistinglist])
    



    useEffect(() => {
        props.alluserlisting();
        
    }, [])

    const openPanel = () => {

        setIsPanelActive(true);
        setisaction(false);
    };

    const closePanel = () => {
        setIsPanelActive(false);
        setisaction(true); 

    };
    const searchdata = async () => {
        const unCheckInAttends = props.getallalluserlistinglist.filter((item) => {
            if(item.fullName.toLowerCase().indexOf(search.toLowerCase())>-1){
                return item;
            }
        });
        setShowdata(unCheckInAttends);
    }
    

    // const showisaction = () => {
    //   setisaction(true);
    // };
    // const hideisaction = () => {
    //   setisaction(false);
    // };
    
    const containerStyle = { backgroundColor: 'red', padding: '7%', marginHorizontal: '5%', alignItems: 'center', };
    const renderItem = ({ item ,index }) => {
        return(
       <View >

                     <View style={{marginVertical:8,marginHorizontal:16,flexDirection:'row'}}>
                        <View>
                        {item?.profileImage != null ?
                                <Image source={{ uri: `${Api.imageUri}${item?.profileImage}` }} style={tw`w-15 h-15 rounded-full	mt-1`} />
                                :
                                <Image source={ImageIcons.man} style={tw`w-15 h-15 rounded-full	mt-1`} />
                            }
                        </View>
                        <View style={{paddingTop:15,paddingLeft:20}}>
                         <Text  style={{fontSize:14,color:'black'}}>{item.fullName}</Text> 
                        </View>
                     </View>
                     </View>
     );
   }  
    
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.root}>
            <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true}/>
            <ScrollView style={{ paddingBottom: 0 }}>
                <View>
                <View style={tw`mt-3 flex flex-row w-11/12 mx-auto`}> 
              <View style={tw`w-1.5/12 bg-[#ffffff] rounded-l-lg`}>
                <Image source={ImageIcons.search} style={tw` w-6 h-6 mx-auto my-auto`} />
              </View>
              <TextInput
                style={tw`bg-[#ffffff] border border-[#ffffff] text-black	pl-2 h-13 w-10.5/12 mx-auto rounded-r-lg`}
                placeholder="Search"
                value={search}
                onChangeText={setSearch}
                onSubmitEditing={() => searchdata()}
                placeholderTextColor={'#434343'}
              /></View>
                <View>
                      <FlatList
                                data={showdata || []}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                             />     
                    </View>
                

                </View>
               </ScrollView>
            {/* <Editprofile/> */}
            <Loader />
        </KeyboardAvoidingView>
    )
}

export default Usersearch;
