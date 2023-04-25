import React from 'react';
import { StyleSheet,Dimensions } from 'react-native';
import { Colors, Fonts } from '../../common';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const { width, height } = Dimensions.get("window");
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;


const styles = StyleSheet.create({
     root: {
        
        backgroundColor: "#e8eded",
       
    },
     threadview3:{
        marginTop:'5%',marginHorizontal:'4%',backgroundColor:"#ffffff",padding:'3%',borderWidth:1,
        borderColor:"#f5f5f0", elevation: 4,borderRadius:8
    },
     Linetext11:{
        marginVertical:'1%'
    },
     ThreadfullView:{
        borderRadius:5,
        marginHorizontal:'4%',
        paddingVertical:'5%'
    }, 
    imageslogo:{
     width:16,
     height:16,
     marginVertical:3
    },
     imageslogo1:{
     width:50,
     height:50,
     marginVertical:15
    },
   
    images1:{
     width:60,
     height:60,
     borderRadius:5,
    },
     images2:{
     width:60,
     height:60,
     borderRadius:5,
     position:'absolute'
    },
    housedropdown: {
        height: 45,
        elevation: 5, shadowColor: '#b3b3b3', backgroundColor: '#ffffff',
        borderWidth: 0.5,
        borderRadius: 8, borderColor: '#d9d9d9',
        paddingHorizontal: '4%'
    },
    house_placeholderStyleorigin: {
        color: '#000000', fontWeight: '700', fontSize: 14
    },
    house_selectedTextStyle: {
        color: '#000000', fontWeight: '700', fontSize: 14
    },
})

export default styles;