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
    registrationRoot: {
        flex: 1,
        justifyContent: 'center'
    },
    registrationRoot1:{
        justifyContent: 'center',
         flex: 1,
    },
    clientinput: {
        marginHorizontal:'9%',
        borderWidth: 1,borderColor:'#ABABAB',paddingLeft:'5%',
        borderRadius:25,color:'#000000'
    },
    clientinputpicker: {
        marginHorizontal:'10%',
        borderWidth: 1,borderColor:'#ABABAB',padding:'3%',
        borderRadius:25,color:'#000000'
    },
    clientinputpickeraddress: {
        marginHorizontal:'10%',
        borderWidth: 1,borderColor:'#ABABAB',padding:'0.5%',
        borderRadius:25,color:'#000000'
    },
    clientinputcolor:{
        marginHorizontal:'10%',paddingVertical:'2%',paddingLeft:10,textAlignVertical: 'top',
        borderWidth: 1,borderColor:'#ABABAB',marginVertical:'2%',
        borderRadius:8,color:'#000000'
    },
    clientinputDescription:{
        marginHorizontal:'10%',paddingVertical:'8%',textAlignVertical:'top',
        borderWidth: 1,borderColor:'#ABABAB',marginVertical:'2%',
        borderRadius:5,color:'#000000',
    },
    boderlineview:{
        borderBottomWidth:1,borderColor:"#BDBDBD",
        marginHorizontal:'4%',marginVertical:'2%'
    },
    Linetext:{
        fontSize:13,color:'#4E4E4E',fontWeight:'normal',fontStyle:'normal',
        lineHeight:16
    },
    Linetext1:{
        fontSize:13,color:'#4E4E4E',fontWeight:'normal',fontStyle:'normal',
        lineHeight:16
    },
    Linetext12:{
        fontSize:13,color:'#4E4E4E',fontWeight:'normal',fontStyle:'normal',
        lineHeight:16,marginVertical:'1%'
    },
    threadview:{
        marginTop:'5%',marginHorizontal:'4%',
    }, 
    threadview2:{
        flexDirection:'row',justifyContent:'space-between',
    },
    threadview3:{
        marginTop:'5%',marginHorizontal:'4%',backgroundColor:"#ffffff",padding:'3%',borderWidth:1,
        borderColor:"#f5f5f0", elevation: 4,borderRadius:8
    },
    threadviewmessage:{
        marginTop:'2%',marginHorizontal:'4%',backgroundColor:"#ffffff",padding:'3%',borderWidth:1,
        borderColor:"#f5f5f0", elevation: 4,borderLeftWidth:2,borderStartColor:"#2C1977"
    },
    threadviewmessage1:{
        marginTop:'2%',marginHorizontal:'4%',backgroundColor:"#ffffff",padding:'3%',borderWidth:1,
        borderColor:"#f5f5f0", elevation: 4,borderLeftWidth:2,borderStartColor:"#2C1977",marginVertical:'3%'
    },
    ThreadfullView:{
        borderRadius:5,marginHorizontal:'4%',
        paddingVertical:'5%'
    }, 
    dayTitle:{
        color: '#302369',
        fontSize: 13,
        marginVertical:'1%'
    },  
    TIME:{
        textAlign:'center',
        fontSize:20,
        marginLeft:'1%',
        marginVertical:'2%'
    },
    text2:{
        alignItems:'center',
        marginVertical:'1%',  
    },
     profile1:{
        width:45,
        height:45,
        borderRadius:20,
        alignSelf:'center'
      },
      purple:{
        width:45,
        height:45,
        borderRadius:20,
        //alignSelf:'flex-end',
        //marginTop:'3%',
        //marginRight:'5%',
        

      },
      purpleview:{
        position:'absolute',
        zIndex:10000,
        right:10,
        top:10
      },
    reportview:{
        //width:'65%',
         width: SCREEN_WIDTH / 1.5,
        padding:'4%',
        //height:'10%',
        backgroundColor:"#330066",
        alignSelf:'center',
        //marginVertical:'1%',
        borderRadius:25
    },
    reportviewpark:{
        width: SCREEN_WIDTH / 1.5,
        padding:'4%',
        backgroundColor:"#330066",
        alignSelf:'center',
        borderRadius:25,
        marginBottom:'20%'
    },
    reportview11:{
        //width:'65%',
         width: SCREEN_WIDTH / 1.5,
        padding:'4%',
        //height:'10%',
        backgroundColor:"#330066",
        alignSelf:'center',
        marginTop:'5%',
        //marginVertical:'5%',
        borderRadius:25
    },
     reportview1:{
        //width:'85%',
         width: SCREEN_WIDTH / 1.2,
        padding:'4%',
        //height:'10%',
        backgroundColor:"#330066",
        alignSelf:'center',
        //marginVertical:'1%',
        marginVertical:'3%',
        borderRadius:25
    },
    reportview2:{
         width: SCREEN_WIDTH / 1.2,
        padding:'4%',
        backgroundColor:"#330066",
        alignSelf:'center',
        marginVertical:'12%',
        borderRadius:25,
        marginBottom:'20%'
    },
    
    reportviewtext:{
        color:"#ffffff",
        alignSelf:'center'
    },
    reportviewtext1:{
        color:"#ffffff",
        alignSelf:'center'
    },
    createthread:{ 
        width: SCREEN_WIDTH / 2,
        padding:'3%',
        alignSelf:'flex-end',
        backgroundColor:"#330066",
        marginVertical:'3%',
        marginHorizontal:'3%',
        borderRadius:5
    },
    popBtn2: {
        borderRadius: 15,
        padding:'4%',
        width:65,
        backgroundColor:"#330066",
        //alignSelf:'center',        
      },
    sceduleview:{
        //width:'65%',
        width: SCREEN_WIDTH / 1.5,
        padding:'4%',
        borderRadius:25,
        borderColor:"#330066",
        alignSelf:'center',
        marginVertical:'3%',
        borderWidth:1,
        marginBottom:'20%'
    },
    sceduleview11:{
        //width:'65%',
        width: SCREEN_WIDTH / 1.5,
        padding:'4%',
        borderRadius:25,
        borderColor:"#330066",
        alignSelf:'center',
        marginVertical:'3%',
        borderWidth:1,
        //marginBottom:'20%'
    },
    sceduleview12:{
        //width:'65%',
        width: SCREEN_WIDTH / 1.5,
        padding:'4%',
        borderRadius:25,
        borderColor:"#00bfff",
        alignSelf:'center',
        //marginVertical:'3%',
        borderWidth:1,
        //marginBottom:'20%'
    },
    cameraview:{
        width: SCREEN_WIDTH / 1.25,
        padding:'3%',
        borderRadius:5,
        borderColor:"#808080",
        borderStyle:'dotted',
        alignSelf:'center',
        marginVertical:'3%',
        borderWidth:1,
        flexDirection:'row'
    },
    sceduleview1:{
        //width:'85%',
         width: SCREEN_WIDTH / 1.2,
        padding:'4%',
        borderRadius:25,
        borderColor:"#330066",
        alignSelf:'center',
        //marginVertical:'3%',
        borderWidth:1
    },
    Linetext11:{
        marginVertical:'1%'
    },
    scheduleviewtext:{
        color:"#330066",
        alignSelf:'center'
    },
    scheduleviewtext12:{
        color:"#00bfff",
        alignSelf:'center'
    },
    scheduleviewtextimage:{
        color:"#1a1a1a",
        marginTop:'1%'
        //alignSelf:'center'
    },
    clock1:{
        alignSelf:'center',
        height:'40%',
        width:'40%',
        //marginVertical:'15%'
        marginTop:'15%'
    },
    refresh1:{
        width:40,
        height:40,
        position:'absolute'
    },
    clocktext:{
        textAlign:'center',
        color:"#ffffff"
    },
    heading: {
        // paddingVertical: '2%',
        alignItems: 'center',
        marginTop: hp('10%'),
        // paddingBottom:hp('5%')
    },
    input1:{
        backgroundColor:'#ffffff'
    },
    headingText: {
        textAlign: 'center',
        fontSize: 24,
        color: Colors.WHITE,
        fontFamily: Fonts.RalewayExtraBold,
        paddingHorizontal:'20%'
    },
    phoneTitle: {
        color: Colors.WHITE,
        paddingVertical: 5,
        fontSize: 16,
        fontFamily: Fonts.RalewayExtraBold
    },
    phoneContainer: {
        width: '100%',
        height: 50,
        backgroundColor: Colors.LIGHT_BLACK,
        borderRadius: 10,
        color: Colors.WHITE,
    },
    phoneTextContainer: {
        height: 50,
        backgroundColor: Colors.LIGHT_BLACK,
        color: Colors.WHITE,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    phoneInput: {
        height: 50,
        backgroundColor: Colors.LIGHT_BLACK,
        color: Colors.WHITE,
    },
    logoImg: {
        // resizeMode: 'contain',
        width: wp('25%'),
        height: wp('38%'),
        marginTop:'4%'
    },
    loginSubtitleContainer: {
        // paddingHorizontal: 30,
        marginTop: 10,
        width: wp('60%')
    },
    loginSubtitleText: {
        textAlign: 'center',
        color: Colors.WHITE,
        fontSize: 16
    },
    showtime:{
         width: SCREEN_WIDTH / 1.1,
        padding:'1%',
        borderRadius:25,
        borderColor:"#BDBDBD",
        alignSelf:'center',
        borderWidth:1,
        //color:'blue'
    },
    showtime2:{
         width: SCREEN_WIDTH / 1.1,
        padding:'1%',
        borderRadius:25,
        borderColor:"#BDBDBD",
        alignSelf:'center',
        marginVertical:'3%',
        borderWidth:1,
        //backgroundColor:'red',
        //color:'blue'
    },
    textbutton:{
        color:"#000000"
    },
    inputreason: {
    height:42,
    marginHorizontal:'5%',
    marginVertical:'1%',
    borderWidth: 1,borderColor:'#b3b3b3',
    borderRadius:5, 
    color:'#000000'
  },
   inputreasontext: {
    height:42,
    marginHorizontal:'2%',
    marginVertical:'1%',
    borderWidth: 1,borderColor:'#b3b3b3',
    borderRadius:20, 
    color:'#000000'
  },
  modalreason: {
    height:42,
    marginHorizontal:'3%',
    //marginVertical:'1%',
    borderWidth: 1,borderColor:'#000000',
    borderRadius:5, 
    color:'#000000'
  },
  modalreason2:{
     height:80,
    marginHorizontal:'3%',
    //marginVertical:'1%',
    borderWidth: 1,borderColor:'#000000',
    borderRadius:5, 
    color:'#000000'
  },
    countdown: {
        marginTop: '5%',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center'
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '8%',
        paddingHorizontal:'5%',
    },
    rememberMeContainer1: {
        flexDirection: 'row',
        marginHorizontal:'2%',
        marginVertical:'2%',
        //alignItems: 'center',
        //marginTop: '8%',
        //paddingHorizontal:'5%',
    },
    map:{
        height:310,
        width:'100%'
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
    flexDirection:'row',justifyContent:'space-between',marginTop:'2%',marginHorizontal:'4%'
    },
    home1: {
         width:24,
         height:24,
        alignSelf:'center'
    },
    camera1: {
         width:24,
         height:24,
         marginRight:'2%'
    },
    customertextred:{
     fontSize:12,lineHeight:15,fontStyle:'normal',fontWeight:'600',
    color:'#330066',textAlign:'center',
    },
    customertext:{
    fontSize:12,lineHeight:15,fontStyle:'normal',fontWeight:'600',
    color:'#bdbdbd',textAlign:'center',
    },

    rememberMeText: {
        color: Colors.WHITE,
        fontSize: 16,
        //fontFamily: Fonts.RalewayExtraBold,
        paddingLeft:20
    },
    privacyText: {
        color: Colors.WHITE,
        fontSize: 14,
        paddingLeft:10
    },
    linkText:{
        color:Colors.GREEN,
        textDecorationLine:'underline'
    },
    matterText:{
        fontFamily:Fonts.HomepageBaukastenBold,
        fontSize:20,
        color:Colors.GREEN,
        textAlign:'right',
        marginTop:-50,
        width: wp('60%')
    },
    subtitleLogoText:{
        //fontFamily:Fonts.HomepageBaukastenBold,
        fontSize:30,
        textAlign:'center',
       // width:'70%',
        color:"#fff",
       // position:'relative',
        //top:"-15%"
    },
    imageslogo:{
     marginTop:'20%'
    },
    subtitleLogoText1:{
        //fontFamily:Fonts.HomepageBaukastenBold,
        fontSize:20,
        textAlign:'center',
        width:'100%',
        color:Colors.BLACK,
        position:'relative',
        top:'25%'
    },
    subtitleSubText:{
        fontFamily:Fonts.HomepageBaukastenBold,
        fontSize:16,
        textAlign:'center',
        width:'70%',
        color:Colors.WHITE,
        position:'relative',
        top:-20
    },
    sortModal: {
        backgroundColor: 'white',
        // alignItems: 'center',
        borderRadius: 10,
        padding: 20,
        height: 240,
    },
    sortText: {
        fontSize: 16,
        margin: 5
    },
     rememberMeContainer2: {
        //flexDirection: 'row',
        marginHorizontal:'4%',
        //marginVertical:'1%',
        //alignItems: 'center',
        //marginTop: '8%',
        //paddingHorizontal:'5%',
    },
    submission:{
        marginVertical:'9%', flexDirection:'row',marginHorizontal:'15%'
    },
     pickerView: {
    paddingTop: '1%',borderWidth: 1,width:'60%',marginTop:'4%',marginHorizontal:'18%',
    borderColor:'#dedfe0', borderRadius:5,height:50,
    alignItems: "center"
  },
   inputreason1: {
    height:SCREEN_HEIGHT/7.8,
    //width:'76%',
    textAlignVertical: 'top',
    marginHorizontal:'12%',
    marginVertical:'1%',
    borderWidth: 1,borderColor:'#8c8c8c',
    borderRadius:5, 
    color:'#000000'
  },
   reportview3:{
         width: SCREEN_WIDTH / 1.3,
        padding:'4%',
        backgroundColor:"#330066",
        alignSelf:'center',
        marginVertical:'2%',
        borderRadius:25,
       
    },
     profiImg: {
        // resizeMode: 'contain',
        width: wp('8%'),
        height: wp('11%'),
        marginTop:'4%',
        borderRadius:5,
    },
      pickerView1: {
    borderWidth:1,width:'85%',marginTop:'2%',marginHorizontal:'8%',
    borderColor:'#dedfe0', borderRadius:5,height:50,
    alignItems: "center"
  },
  inputreason2: {
    width:'85%',
    marginHorizontal:'8%',
    marginVertical:'1%',
    borderWidth: 1,
    borderColor:'#b3b3b3',
    borderRadius:5, 
    color:'#000000'
  },
   inputtex3: {
    width:'85%',
   height:SCREEN_HEIGHT/8,
    textAlignVertical: 'top',
    marginHorizontal:'8%',
    marginVertical:'1%',
    borderWidth: 1,borderColor:'#b3b3b3',
    borderRadius:5, 
    color:'#000000'
  },
    profiImg1: {
        // resizeMode: 'contain',
        width: wp('10%'),
        height: wp('8%'),
       
         marginLeft:'5%',
        borderRadius:5,
    },
    inputimag:{
            marginTop:'6%',
              flexDirection:"row",
              borderWidth:1,
              marginVertical:'1%',
              marginHorizontal:'8%', 
              alignItems: "center",
              borderRadius:5,
              borderStyle:'dashed',
              borderColor:"#262626"
          },
  reportview4:{
         width: SCREEN_WIDTH / 1.2,
        padding:'4%',
        backgroundColor:"#330066",
        alignSelf:'center',
        marginBottom:'15%',
        borderRadius:25,
        marginVertical:'2%',
    },
     chatinput: {
       backgroundColor:'#E1E1E1',borderRadius:29,padding:'4%',
        fontSize:11.3,lineHeight:17,letterSpacing:-0.125172,
        color:'#878787',fontWeight:'normal',fontStyle:'normal',marginLeft:"10%",
    },
     accountmainview:{
        flexDirection:'row', justifyContent:'space-between',
        marginHorizontal:'3%',paddingVertical:4
        //backgroundColor:"#ffffff"
    },
     sendmsg1:{
       //position:'absolute',
       alignSelf:'flex-end',
       //right:10,
       width:36,height:36,
       //top:6
    },
 cameram: {
        height:35,
        width:35,
        marginTop:5
    },
})

export default styles;