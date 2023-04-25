
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
        //backgroundColor: Colors.WHITE
    },
    manclap:{
        height:55,
        width:60,
        alignSelf:'center'
    },
    APPLIANCE:{
        height:55,
        width:60,
        borderRadius:5
        //alignSelf:'center'
    },
    bestsellerview:{
        backgroundColor:'#000000',
        borderRadius:5,
        padding:'2%'

    },
     bestsellerview1:{
        backgroundColor:'#ffffff',
        borderRadius:5,
        padding:'2%',
        borderWidth:1,
        borderColor:'#000000'

    },
    bestsellertext:{
        color:'#ffffff',
        fontSize:14,
        textAlign:'center',
        //margin:'2%'
        marginHorizontal:'8%'
    },
     bestsellertext1:{
        color:'#000000',
        fontSize:14,
        textAlign:'center',
        //margin:'2%'
        marginHorizontal:'8%'
    },
    APPLIANCEvalen:{
         height:80,
        width:85,
        borderRadius:5
    },
    manclap3:{
        height:60,
        width:60,
        alignSelf:'center'
    },
    manclap2:{
        height:95,
        width:150,
        borderRadius:6
        //alignSelf:'center'
    },
     locclap:{
       height:24,width:24, 
    },
    quicktext:{
        alignSelf:'center',fontSize:18,fontWeight:'bold'
    },
    minormajorview:{
        flexDirection:'row',justifyContent:'space-between',marginVertical:'5%',marginHorizontal:'2%'
    },
    minorview:{
        backgroundColor:'#fff5cc',width:70,padding:3,borderRadius:5,alignSelf:'center'
    },
    minortext:{
        fontSize:10,color:'#e6b800',textAlign:'center',fontWeight:'bold'
    },
    gettext:{
        fontSize:12,color:'#000000',fontWeight:'bold',width:140,textAlign:'center',marginTop:'2%'
    },
    majorview:{
        backgroundColor:'#e6ffe6',width:72,padding:3,borderRadius:5,alignSelf:'center'
    },
    majortext:{
        fontSize:10,color:'#00cc00',textAlign:'center',fontWeight:'bold'
    },
    gettext1:{
        fontSize:12,color:'#000000',fontWeight:'bold',width:120,textAlign:'center',marginTop:'2%'
    },
    howtext:{
        fontSize:18,fontWeight:'bold'
    },
    clientinputcolor:{
        borderRadius:10,
        borderWidth:1,
        borderColor:'#d9d9d9',
        padding:'3%',
        marginHorizontal:'5.6%',
        marginVertical:'6%',
        flexDirection:'row',
    },
     
     chatinput: {
       backgroundColor:'#FFFFFF',borderRadius:10,borderWidth:1,
        fontSize:14,paddingLeft:'12%',
        color:'#878787',
    },
     chatinputsearch: {
       backgroundColor:'#FFFFFF',
        fontSize:14,paddingLeft:'12%',
        color:'#878787',
    },
    searchview:{
        borderRadius:10,
        borderWidth:1,
        borderColor:'#d9d9d9',
        padding:'4%',
        marginHorizontal:'5.6%',
        marginVertical:'6%',
        flexDirection:'row',
    },
    viewservices:{
        borderRadius:5,
        borderWidth:1,
        borderColor:'#adadeb',
        backgroundColor:'#f2f2f2',
        padding:'4.5%',
        marginHorizontal:'2%',
        marginVertical:'6%',
        //flexDirection:'row',
    },
    topBlueView: {
        width: '100%',
        height: 40,
        backgroundColor: Colors.BLUE,
        zIndex: -1
    },
    list: {
        paddingTop: 10,
    },
    one:{
        //backgroundColor:'red',
        height:SCREEN_HEIGHT/2.4,
        //marginTop:50
        //zIndex:2000,
        //position:'absolute'
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
    Linetext11:{
        fontSize:16,
        fontWeight:'bold',
        //marginVertical:'2%',
        marginLeft:8,
        marginTop:10
    },
    Linetext12:{
        fontSize:14,
        fontWeight:'bold',
        //marginVertical:'2%',
        marginLeft:8,
        marginTop:10,
        color:'#333132'
    },
    Linetext13:{
        fontSize:14,
        fontWeight:'bold',
        //marginVertical:'2%',
        marginLeft:8,
        marginTop:10,
        color:'#77838f'
    },
    Linetextdes:{
        fontSize:12,
        fontWeight:'bold',
        //marginVertical:'2%',
        marginLeft:8,
        marginTop:10,
        color:'#77838f'
    },
    Linetext14:{
        fontSize:16,
        //fontWeight:'bold',
        //marginVertical:'2%',
        marginLeft:'12%',
        marginTop:10,
        color:'#333132'
    },
    lastview:{
        height:'7%',backgroundColor:'#ffffff',
        marginHorizontal:'4%',borderWidth:1,
        borderColor:'#e1e1e1',borderRadius:10,elevation:2,bottom:'8%'
    },
    totalRedeem: {
        width: '30%',
        height: hp('15%'),
        backgroundColor:'#f5f5f5',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: 12,
        marginLeft:15,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: Colors.GREY,
        shadowOpacity: 0.3,
        elevation: 2,
        //zIndex: 999,
    },
    totalRedeemreport: {
        width: '20%',
        height: hp('10%'),
        backgroundColor:'#f5f5f5',
        //borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: 12,
        marginLeft:'5%',
        shadowOffset: { width: 0, height: 2 },
        shadowColor: Colors.GREY,
        shadowOpacity: 0.3,
        elevation: 4,
        //zIndex: 999,
    },
    orgview:{
        height:hp('6%'),
        backgroundColor:'#ffffff',
        //elevation: 2,
        width: '90%',
        marginLeft:'5%',
        flexDirection:'row',


    },
    popupview:{
        height:60,
        width:60,
        borderRadius:10,
        backgroundColor:'#00000029',

    },
    topview:{
        width:50,borderBottomWidth:4,borderColor:"#00000029",borderRadius:10,
        alignSelf:'center',marginTop:'3%',marginBottom:8
    },
    drop:{
        flexDirection:'row'
    },
    totalRedeem2: {
        width: '62%',
        height: hp('15%'),
        borderTopRightRadius: 20,
        backgroundColor:'#ffffff',
        marginTop: 12,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: Colors.GREY,
        shadowOpacity: 0.3,
        elevation: 5,
        //zIndex: 999,
    },
     totalRedeemreport2: {
        width: '70%',
        height: hp('10%'),
        borderTopRightRadius: 20,
        backgroundColor:'#ffffff',
        marginTop: 12,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: Colors.GREY,
        shadowOpacity: 0.3,
        elevation: 5,
        //zIndex: 999,
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
})

export default styles;