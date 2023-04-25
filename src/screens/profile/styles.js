
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
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
        flex: 1,
        backgroundColor: Colors.WHITE
    },
     registrationRoot1:{
        //justifyContent: 'center',
         flex: 1,
    },
    editclap:{
        height:24,width:24,alignSelf:'flex-end',right:10
    },
    msgclap:{
       height:24,width:24, 
    },
    helpview:{
        backgroundColor:'#FFFFFF',padding:'4%',elevation:4,marginVertical:'3.5%',flexDirection:'row',
    },
     helpviewbig:{
        flexDirection:'row',margin:'4%'
    },
     helpviewbig2:{
        flexDirection:'row',
    },
    feedbackview:{
        backgroundColor:'#ffffff',width:'30%',marginVertical:'3%',
        borderWidth:1,borderColor:'#d9d9d9',borderRadius:5,marginHorizontal:'5%',
    },
    one:{
        //backgroundColor:'red',
        height:SCREEN_HEIGHT/3,
        //marginTop:50
        //zIndex:1000
    },
    topBlueView: {
        width: '100%',
        height: 40,
        backgroundColor: Colors.BLUE,
        zIndex: -1
    },
    footerView:{
    width: '100%', 
    backgroundColor: '#ffffff',
    height: 45,justifyContent:'center',
     shadowColor: '#000000',  shadowOffset: {width: 1, height: 1},
        shadowOpacity: 1,
        elevation: 5,  
    position:'absolute', 
    borderTopWidth:1,
    borderColor:"#d6d6c2",
    bottom:0
    },
    maincartview:{
    flexDirection:'row',marginTop:'2%',justifyContent:'space-around'
    },
    customertextred:{
        color:'#e64d3c',
        fontSize:20,
        fontWeight:'bold',
        marginLeft:12
    },
    customertext:{
     fontSize:12,lineHeight:15,fontStyle:'normal',fontWeight:'600',
    color:'#848484',justifyContent:'space-between',right:3
    },
    customertext1:{
        fontSize:12,lineHeight:15,fontStyle:'normal',fontWeight:'600',
    color:'#848484',justifyContent:'space-between',right:10
    },
    customertext2:{
        fontSize:12,lineHeight:15,fontStyle:'normal',fontWeight:'600',
    color:'#848484',justifyContent:'space-between',right:3
    },
    list: {
        paddingTop: 10,
    },
    listItem: {
        // padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        shadowColor: '#000',
        borderRadius: 5,
        backgroundColor: Colors.WHITE,
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowOffset: { width: 0, height: 2 },
        shadowColor: Colors.GREY,
        shadowOpacity: 0.3,
        elevation: 2,
        zIndex: 999,
    },
    titleText: {
        fontSize: 16,
        color: Colors.WHITE,
        paddingLeft: wp('3%'),
        fontFamily: Fonts.RalewayExtraBold
    },
    titleSubText: {
        fontSize: 12,
        color: Colors.BLACK,
        fontFamily: Fonts.HomepageBaukastenBold,
        lineHeight: 20,
    },
    subTitleContainer: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems:'center'
    },
    timeLeftText: {
        fontSize: 12,
        fontFamily: Fonts.QuestrialRegular,
        color: Colors.DARK_GREY,
    },
    discountText: {
        fontSize: 12,
        fontFamily: Fonts.HomepageBaukastenBold,
        color: Colors.BLACK,
    },
    balanceText: {
        fontSize: 16,
        fontFamily: Fonts.QuestrialRegular
    },
    titleContainer: {
        width: '100%',
        height: hp('5%'),
        backgroundColor: Colors.BLUE,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        justifyContent: 'center',
        paddingHorizontal: 5,
    },
    chartContainer: {
        height: hp('40%'),
        paddingHorizontal: 10,
        backgroundColor: Colors.WHITE,
        elevation: 4,
        margin: 10,
        borderRadius: 10
    },
    graphStyle: {
        flex: 1,
        paddingLeft: -10,
        alignSelf: 'center'
    },
    totalRedeem: {
        width: '95%',
        height: hp('8%'),
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: hp('10%'),
        shadowOffset: { width: 0, height: 2 },
        shadowColor: Colors.GREY,
        shadowOpacity: 0.3,
        elevation: 2,
        zIndex: 999,
    },
    totalRedeemText: {
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: Fonts.HomepageBaukastenBold
    },
    dropdownIcon: {
        width: 10,
        height: 10,
        resizeMode: 'contain',
        marginLeft: 5
    },
    graphHeader: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        flexDirection: 'row'
    },
    dropDownContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    filterModal: {
        width: wp('50%'),
        height: hp('18%'),
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    filterItemText: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: 2,
        paddingHorizontal: 10,
        marginVertical: 5
    },
    emptyInsight: {
        height: hp('90%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyListText: {
        fontSize: 16,
        color: Colors.LIGHT_GREY,
        fontFamily: Fonts.QuestrialRegular
    },

    containerContent: { marginTop: 40},
  containerHeader: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#F1F1F1',
  },
  headerContent:{
    marginTop: 0,
  },
  Modal: {
    backgroundColor: '#005252',
    marginTop: 0,
    marginTop:20
  }
})

export default styles;