import React, { useEffect, useState } from 'react';
import { Text, View,TextInput,KeyboardAvoidingView,ImageBackground, FlatList, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Fonts, Colors, ImageIcons } from '../../common';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './storestyles';
import moment from 'moment';
import Loader from '../../components/modals/Loader';
import Editprofile from '../../screens/profile/Editprofile';
import { SwipeablePanel } from 'rn-swipeable-panel';
import { RadioButton ,Provider , Portal, Button,} from 'react-native-paper';
import Modal from 'react-native-modal'


const Reportlisting = (props) => {
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

 const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    //onlySmall:true,
    showCloseButton: true,
    closeOnTouchOutside:true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want
  });
  const [isPanelActive, setIsPanelActive] = useState(false);

  const [isaction, setisaction] = useState(true);

let colors = ['#19D8951A','#8862E01A', '#FFFFE6', '#E220201A'];

 const DATA1 = [
       {
        text:'Rs.64 crores',
         text1:'Saved by Plus members',
        image:ImageIcons.boxicon,
       },
        {
       text:'8.6 lakh+',
       text1:'Happy Plus members',
        image:ImageIcons.proclap,
       },
        {
        text:'4.84',
        text1:'Average rating of Plus professionals',
        image:ImageIcons.fillstarclap,
       },
       {
        text:'6.3',
        text1:'Average bookings per member',
        image:ImageIcons.blackbook,
       },
        

     ];

     const openPanel = () => {
    setIsPanelActive(true);
    setisaction(false);
  };

  const closePanel = () => {
    setIsPanelActive(false);
     setisaction(true);
  };

  // const showisaction = () => {
  //   setisaction(true);
  // };
  // const hideisaction = () => {
  //   setisaction(false);
  // };

      
    const containerStyle = {backgroundColor: 'red', padding: '7%',marginHorizontal:'5%',alignItems:'center',};

     const renderItem2 = ({ item ,index }) => {
     return(
       <View style={{padding:8}}>
          <View style={{height:160,width:150,borderRadius:10,backgroundColor: colors[index % colors.length]}}>
            <View>
             <Image source={item.image}  style={{height:23,width:23,marginTop:12,marginHorizontal:8}} />
            </View> 
            <View style={{marginHorizontal:'5%',marginTop:'20%'}}>
              <Text style={{fontSize:16,}}>{item.text}</Text>
              <Text style={{fontSize:16,}}>{item.text1}</Text>
            </View>  
          </View>
       </View>
  );
}


    return (
         <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}style={styles.root}>
            <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" translucent={true} />
            <ScrollView style={{ paddingBottom: 0 }}>
               
               <View style={{backgroundColor:'#ffffff',padding:5,}}>
                 <View style={{flexDirection:'row',marginTop:'35%',marginHorizontal:8,marginVertical:5}}>
                   <Image source={ImageIcons.plusclapblu}  style={{height:35,width:35,marginTop:8}} />
                   <Text style={{fontSize:34,fontWeight:'bold',marginLeft:'3%',color:'#b83dba'}}>plus</Text>
                 </View>
                 <Text style={{fontSize:24,fontWeight:'bold',color:'#000000',marginHorizontal:8}}>Save 15% on every service + top rated professionals</Text>
                    <View style={{flexDirection:'row',marginVertical:'6%',marginHorizontal:8}}>
                     <View>
                       <Image source={ImageIcons.greenright}  style={{height:23,width:23,}} />
                     </View>
                     <Text style={{fontSize:16,color:'#33cc33',marginLeft:5}}>You also get free repair visits</Text>
                    </View>

                    <Text style={{fontSize:16,fontWeight:'bold',marginLeft:'3%',color:'#000000'}}>Select Your Plan</Text>

                    <View style={{borderWidth:1,borderColor:'#f2f2f2',borderRadius:10,marginHorizontal:4,marginVertical:5,padding:'2.5%'}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:5}}>
                        <View>
                           <Text style={{fontSize:14,marginTop:5,color:'#33cc33'}}>Bought 6 Lakh+ Times</Text>
                           <Text style={{fontSize:16,fontWeight:'bold',marginVertical:5}}>12 months</Text>
                            <View style={{flexDirection:'row'}}>
                              <Text style={{fontSize:16,}}>$299</Text>
                              <Text style={{fontSize:14,marginLeft:6,color:'#848484',marginTop:1}}>$999</Text>
                            </View>
                        </View>
                        <View style={{borderWidth:0.1,borderRadius:7,borderColor:'#d9d9d9',height:28,width:70,top:25,elevation:1}}>
                          <Text style={{fontSize:16,fontWeight:'bold',color:'#3333cc',textAlign:'center',top:2}}>Add</Text>
                        </View>
                     </View>   
                 </View>

                  <View style={{borderWidth:1,borderColor:'#f2f2f2',borderRadius:10,marginHorizontal:4,marginVertical:'2%',padding:'3%'}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:5}}>
                        <View>                   
                           <Text style={{fontSize:16,fontWeight:'bold',marginVertical:5,color:'#000000'}}>6 months</Text>
                            <View style={{flexDirection:'row'}}>
                              <Text style={{fontSize:16,}}>$249</Text>
                              <Text style={{fontSize:14,marginLeft:6,color:'#848484',marginTop:1}}>$699</Text>
                            </View>
                        </View>
                        <View style={{borderWidth:0.1,borderRadius:7,borderColor:'#d9d9d9',height:28,width:70,top:15,elevation:1}}>
                          <Text style={{fontSize:16,fontWeight:'bold',color:'#3333cc',textAlign:'center',top:2}}>Add</Text>
                        </View>
                     </View>   
                 </View>
               </View>


               <View style={{backgroundColor:'#ffffff',padding:'2%',marginVertical:'5%'}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                 <View style={{marginVertical:12}}>
                   <Text style={{fontSize:16,fontWeight:'bold',marginLeft:'3%',color:'#000000'}}>100% money back guarantee</Text>
                   <Text style={{fontSize:14,marginLeft:'3%',color:'#848484',width:250,margin:5}}>If you save less than the membership price, we refund you the difference!</Text>
                  </View>
                  <View style={{right:8,top:25}}>
                    <Image source={ImageIcons.bookmark}  style={{height:25,width:14,position:'absolute',marginTop:16}} />
                    <Image source={ImageIcons.rightdiffgreen}  style={{height:28,width:28,borderRadius:20,right:6}} />
                   </View>
                </View>  
               </View>

               <View style={{backgroundColor:'#ffffff',padding:'2%',}}>
                 <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'3%'}}>
                 <View>
                    <Text style={{fontSize:16,fontWeight:'bold',marginLeft:'3%',color:'#000000'}}>Estimated Savings</Text>
                    <Text style={{fontSize:28,fontWeight:'bold',marginLeft:'3%',color:'#009900'}}>$1440</Text>
                  </View>
                  <View style={{alignSelf:'center'}}>
                    <Image source={ImageIcons.coins}  style={{height:40,width:40,borderRadius:20,right:2}} />
                  </View> 
                  </View>
                   
                   <Text style={{fontSize:14,color:'#848484',marginVertical:'5%',marginHorizontal:'4%'}}>No. of services / year</Text>

                   <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'4%',width:'70%'}}>
                       <View style={{borderWidth:1,borderRadius:5,borderColor:'#d9d9d9',padding:5,width:30}}>
                         <Text style={{textAlign:'center'}}>2</Text>
                       </View>
                        <View style={{borderWidth:1,borderRadius:5,borderColor:'#d9d9d9',padding:5,width:30}}>
                         <Text style={{textAlign:'center'}}>4</Text>
                       </View>
                        <View style={{borderWidth:1,borderRadius:5,borderColor:'#d9d9d9',padding:5,width:30}}>
                         <Text style={{textAlign:'center'}}>6</Text>
                       </View>
                        <View style={{borderWidth:1,borderRadius:5,borderColor:'#d9d9d9',padding:5,width:30}}>
                         <Text style={{textAlign:'center'}}>8</Text>
                       </View>
                        <View style={{borderWidth:1,borderRadius:5,borderColor:'#d9d9d9',padding:5,width:30}}>
                         <Text style={{textAlign:'center'}}>10</Text>
                       </View>
                        <View style={{borderWidth:1,borderRadius:5,borderColor:'#d9d9d9',padding:5,width:30}}>
                         <Text style={{textAlign:'center'}}>12</Text>
                       </View>
                   </View>

                   <View style={{flexDirection:'row',marginVertical:'5%',marginHorizontal:'3%'}}>
                     <Image source={ImageIcons.blackbook}  style={{height:23,width:23,marginTop:'3%'}} />
                     <Text style={{fontSize:14,marginLeft:'3%',color:'#848484',width:250,margin:5}}>Subscribe placed 6 orders on average in your area</Text>
                   </View>
               </View>

              <View style={{backgroundColor:'#ffffff',padding:'4%',marginVertical:'5%',}}>
                <Text style={{fontSize:18,fontWeight:'bold',}}>Plus in Numbers</Text>
                 <View style={{marginTop:'8%'}}>
                 <FlatList
                        data={DATA1}
                        renderItem={renderItem2}
                        key={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}
                        />
               </View> 
               </View>

               <View style={{marginBottom:'20%',padding:'4%',backgroundColor:'#FFFFFF'}}>
                 <Text style={{fontSize:20,fontWeight:'bold',marginVertical:'5%'}}>FAQs</Text>
                 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                   <Text style={{fontSize:14,}}>What are the benifits of Plus membership?</Text>
                   <View>
                     <Image source={ImageIcons.dropclap}  style={{height:23,width:23,}} />
                   </View>
                 </View>
                 <View style={{borderBottomWidth:1,borderColor:'#d9d9d9',marginVertical:'4%'}}></View>

                 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                   <Text style={{fontSize:14,width:'90%'}}>How does 100% money back guarantee work?</Text>
                   <View>
                     <Image source={ImageIcons.dropclap}  style={{height:23,width:23,}} />
                   </View>
                 </View>
                 <View style={{borderBottomWidth:1,borderColor:'#d9d9d9',marginVertical:'4%'}}></View>

                 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                   <Text style={{fontSize:14,width:'90%'}}>Is there a limit to maximum discount per transcation?</Text>
                   <View>
                     <Image source={ImageIcons.dropclap}  style={{height:23,width:23,}} />
                   </View>
                 </View>
                 <View style={{borderBottomWidth:1,borderColor:'#d9d9d9',marginVertical:'4%'}}></View>

                 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                   <Text style={{fontSize:14,width:'90%'}}>Is there a limit to number of transactions under the membership?</Text>
                   <View>
                     <Image source={ImageIcons.dropclap}  style={{height:23,width:23,}} />
                   </View>
                 </View>
                 <View style={{borderBottomWidth:1,borderColor:'#d9d9d9',marginVertical:'4%'}}></View>

                 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                   <Text style={{fontSize:14,width:'90%'}}>Is there a limit to total maximum discount I can avail?</Text>
                   <View>
                     <Image source={ImageIcons.dropclap}  style={{height:23,width:23,}} />
                   </View>
                 </View>
                 <View style={{borderBottomWidth:1,borderColor:'#d9d9d9',marginVertical:'4%'}}></View>

                 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                   <Text style={{fontSize:14,width:'90%'}}>Who is a UC Plus professionals</Text>
                   <View>
                     <Image source={ImageIcons.dropclap}  style={{height:23,width:23,}} />
                   </View>
                 </View>
                 <View style={{borderBottomWidth:1,borderColor:'#d9d9d9',marginVertical:'4%'}}></View>

                 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                   <Text style={{fontSize:14,width:'90%'}}>Can i pay for membership through cash?</Text>
                   <View>
                     <Image source={ImageIcons.dropclap}  style={{height:23,width:23,}} />
                   </View>
                 </View>
                 <View style={{borderBottomWidth:1,borderColor:'#d9d9d9',marginVertical:'4%'}}></View>

                 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                   <Text style={{fontSize:14,width:'90%'}}>Can I cancel the membership after buying it or transfer it?</Text>
                   <View>
                     <Image source={ImageIcons.dropclap}  style={{height:23,width:23,}} />
                   </View>
                 </View>
                 <View style={{borderBottomWidth:1,borderColor:'#d9d9d9',marginVertical:'4%'}}></View>

                 <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20}}>
                   <Text style={{fontSize:14,width:'90%'}}>Can I get plus discount on extra services taken after the professsional reaches my place?</Text>
                   <View>
                     <Image source={ImageIcons.dropclap}  style={{height:23,width:23,}} />
                   </View>
                 </View>
            
               </View>

            </ScrollView>  
                <Editprofile/>
            <Loader/>
        </KeyboardAvoidingView>
    )
}

export default Reportlisting;
