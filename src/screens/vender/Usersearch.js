import React, { useRef, useState, useEffect } from 'react';
import { Text, Image, View, ImageBackground,FlatList,TouchableOpacity, Dimensions,ScrollView, Alert, StatusBar, KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import { Colors, CommonStrings } from '../../common'
import ImageIcons from '../../common/ImageIcons'
import InputField from '../../components/forms/inputField';
import { RoundedButton } from '../../components/forms/button';
import { phoneRegExp } from '../../services/helper';
import DropdownField from '../../components/dropdown/DropDownMenu';
import Loader from '../../components/modals/Loader';
import RnIncrementDecrementBtn  from 
'react-native-increment-decrement-button';
import {FlatListSlider} from 'react-native-flatlist-slider';
import { SwipeablePanel } from 'rn-swipeable-panel';
import DashedLine from 'react-native-dashed-line';
 const deviceWidth = Dimensions.get('window').width; 
const deviceHeight = Dimensions.get('window').height; 

const Usersearch = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;


    useEffect(() => {
        props.businessList();        
    },[])
    
     const DATA = [
       { 
        text1:"Save 15% on every order",
        text2:"Get Plus now",
        text3:"Organization Actions",
       },
       { 
         text1:"Save 15% on every order",
        text2:"Get Plus now",
        text3:"Organization Actions",
       },
       { 
        text1:"Save 15% on every order",
        text2:"Get Plus now",
        text3:"Organization Actions",
       },
       ];

  const DATA1 = [
       { 
       
        text2:"Services",
        
       },
       
      ];

        const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    showCloseButton: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    
      });

    const [isPanelActive, setIsPanelActive] = useState(false);

    const openPanel = () => {
        setIsPanelActive(true);
      };

    const closePanel = () => {
        setIsPanelActive(false);
    };


      const images = [
   {
    image:'https://cdn.johnmooreservices.com/wp-content/uploads/2016/07/Garbage-Disposal-862x539.jpg',
    desc: 'Silent Waters in the mountains in midst of Himilayas',
   },
   {
    image:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-clean-different-surfaces-1615565548.jpg?crop=1.00xw:0.754xh;0,0.184xh&resize=1200:*',
    desc:
      'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
 
  ];

  const hairdata=[
     {
        text1:"Haircut + Massage", 
     },
      {
        text1:"Haircut + Beard Care", 
     },
      {
        text1:"Anti-Tan Ess", 
     },
     ];

     const haircutdata=[
     {
        text1:"Full Services", 
     },
      {
        text1:"Regular Services"
     },
      {
        text1:"Service checkup ", 
     },
      {
        text1:"RO Uninstallation ", 
     },
     ]

     const Therapydata=[
     {
        text1:"Classic Deep Cleaning", 
     },
      {
        text1:"Intense Deep Cleaning", 
     },
     
     ]




     const renderItem = ({ item ,index }) => {
     return(
    <View >
            <View style={{borderRadius:5,borderColor:"#bbbdbb",marginHorizontal:10,marginVertical:20,backgroundColor:"#e8eded",elevation:2}}>
             <View style={{flexDirection:'row',marginHorizontal:8}}>
                <View> 
                <Image source={ImageIcons.secure} style={styles.imageslogo} />
                </View>
                <View style={{marginHorizontal:5,marginVertical:2}}>
                 <Text>{item.text1}</Text>
                </View>
            </View>
            <View style={{marginLeft:30,marginBottom:3}}>
            <Text style={{color:"#8a8a8a"}}>{item.text2}</Text>
            </View>
            </View>
      </View>
  );
}



 const renderItem1 = ({ item ,index }) => {
     return(
    <View >
            <View style={{flexDirection:'row',justifyContent:'space-around',marginHorizontal:18,marginVertical:20}}>
                                    <View  style={{alignItems:'center',}}> 
                                    <Image source={ImageIcons.gyser} style={styles.images1} />
                                    <Text>{item.text2}</Text>
                                    </View>
                                    <View style={{alignItems:'center',width:150}}> 
                                    <Image source={ImageIcons.gyser} style={styles.images1} />
                                    <Text>{item.text2}</Text>
                                    </View>
                                     <View  style={{alignItems:'center',}}> 
                                    <Image source={ImageIcons.gyser} style={styles.images1} />
                                    <Text >{item.text2}</Text>
                                    </View>
           </View>
      </View>
  );
}

 const renderItem2 = ({ item ,index }) => {
     return(
    <View >
             <View style={{marginHorizontal:'3%'}}>
            
             <View><Text style={{fontSize:14,color:'#48b5ac'}}>Classic Deep Cleaning</Text></View>

              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                            
                                            <View style={{marginVertical:2}}>
                                             <Text style={{fontSize:16,fontWeight:'bold'}}>{item.text1}</Text>
                                            </View>
                                            <View style={{marginTop:"1%",marginHorizontal:"2%"}}>
                                                <RnIncrementDecrementBtn
                                                    minVal={0} 
                                                    minreq={1} 
                                                    max={10}

                                                    //val={Incval}
                                                    styleBtn={{width:30.6,height:26,backgroundColor:'#ffffff',borderColor:"#330066"}}
                                                    styleTextInput={{width:38.25,height:26,backgroundColor:'#ffffff',borderColor:"#330066"}}
                                                    labelStyle={{fontSize:15,marginTop:'1%',color:'#330066',fontFamily:'SourceSansPro-Regular'}}
                                                   //handleClick={()=> setIncval(Incval)}
                                                    />
                                             </View>
             </View>
                               <View style={{flexDirection:'row'}}>
                                    <View> 
                                    <Image source={ImageIcons.star} style={styles.imageslogo} />
                                    </View>
                                    <View style={{marginHorizontal:5,marginVertical:2}}>
                                     <Text>4.75 (974k)</Text>
                                    </View>
                                 </View>

                                 <View>
                                <Text>Rs299  -  40 min</Text>
                                </View>
                                <View style={{ padding: '3%'}}>
                                <DashedLine dashLength={4} dashColor='#dedede' dashThickness={1}/>
                                </View>
                                <View style={{marginHorizontal:5,marginVertical:2}}>
                                     <Text>Superior shine & stain removal for spic & span bathroom </Text>
                                     <Text>Targets dirt stains and black stains in corner</Text>
                                </View>
                               
                                 <View style={{borderBottomWidth:1,marginTop:'5%',borderColor:'#dedede',marginBottom:'2%'}} />


             </View>
      </View>
  );
}

const renderItem3 = ({ item ,index }) => {
     return(
    <View >
             <View style={{marginHorizontal:'3%',marginTop:"5%"}}>
             
             <View><Text style={{fontSize:14,color:'#48b5ac'}}>Packages</Text></View>

              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                            
                                            <View style={{marginVertical:2}}>
                                             <Text style={{fontSize:16,fontWeight:'bold'}}>{item.text1}</Text>
                                            </View>
                                            <View style={{marginTop:"1%",marginHorizontal:"2%"}}>
                                            <View style={{marginBottom:45,marginLeft:18}}><Image source={ImageIcons.man} style={styles.images2} /></View>
                                                <RnIncrementDecrementBtn
                                                    minVal={0} 
                                                    minreq={1} 
                                                    max={10}

                                                    //val={Incval}
                                                    styleBtn={{width:30.6,height:26,backgroundColor:'#ffffff',borderColor:"#330066"}}
                                                    styleTextInput={{width:38.25,height:26,backgroundColor:'#ffffff',borderColor:"#330066"}}
                                                    labelStyle={{fontSize:15,marginTop:'1%',color:'#330066',fontFamily:'SourceSansPro-Regular'}}
                                                   //handleClick={()=> setIncval(Incval)}
                                                    />
                                             </View>
             </View>
                               <View style={{flexDirection:'row',marginTop:"-10%"}}>
                                    <View> 
                                    <Image source={ImageIcons.star} style={styles.imageslogo} />
                                    </View>
                                    <View style={{marginHorizontal:5,marginVertical:2}}>
                                     <Text>4.75 (974k)</Text>
                                    </View>
                                 </View>

                                 <View>
                                <Text>Rs299  -  40 min</Text>
                                </View>
                                <View style={{ padding: '3%'}}>
                                <DashedLine dashLength={4} dashColor='#dedede' dashThickness={1}/>
                                </View>
                                <View style={{marginHorizontal:2,marginVertical:2}}>
                                     
                                   <Text>installation and repalcement available</Text>
                                </View>
                               <TouchableOpacity  onPress={() =>openPanel()} >
                                <Text style={{fontSize:14,fontWeight:'bold',color:'#330066',marginVertical:'3%'}}>View details</Text>
                                </TouchableOpacity>
                                 <View style={{borderBottomWidth:1,marginTop:'5%',borderColor:'#dedede',marginBottom:'2%'}} />


             </View>
      </View>
  );
}
 
const renderItem4 = ({ item ,index }) => {
     return(
    <View >
             <View style={{marginHorizontal:'3%',marginTop:"5%"}}>
             <Image source={ImageIcons.cleanclap} style={{height:200, width:deviceWidth/1.07,borderRadius:10}} />
             <View><Text style={{fontSize:14,color:'#48b5ac'}}>Classic Deep Cleaning</Text></View>

              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                            
                                            <View style={{marginVertical:2}}>
                                             <Text style={{fontSize:16,fontWeight:'bold'}}>{item.text1}</Text>
                                            </View>
                                            <View style={{marginTop:"1%",marginHorizontal:"2%"}}>
                                            <View style={{marginBottom:45,marginLeft:18}}><Image source={ImageIcons.man} style={styles.images2} /></View>
                                                <RnIncrementDecrementBtn
                                                    minVal={0} 
                                                    minreq={1} 
                                                    max={10}

                                                    //val={Incval}
                                                    styleBtn={{width:30.6,height:26,backgroundColor:'#ffffff',borderColor:"#330066"}}
                                                    styleTextInput={{width:38.25,height:26,backgroundColor:'#ffffff',borderColor:"#330066"}}
                                                    labelStyle={{fontSize:15,marginTop:'1%',color:'#330066',fontFamily:'SourceSansPro-Regular'}}
                                                   //handleClick={()=> setIncval(Incval)}
                                                    />
                                             </View>
             </View>
                               <View style={{flexDirection:'row'}}>
                                    <View> 
                                    <Image source={ImageIcons.star} style={styles.imageslogo} />
                                    </View>
                                    <View style={{marginHorizontal:5,marginVertical:2}}>
                                     <Text>4.75 (974k)</Text>
                                    </View>
                                 </View>

                                 <View>
                                <Text>Rs299  -  40 min</Text>
                                </View>
                                <View style={{ padding: '3%'}}>
                                <DashedLine dashLength={4} dashColor='#dedede' dashThickness={1}/>
                                </View>
                                <View style={{marginHorizontal:5,marginVertical:2}}>
                                     <Text>Superior shine & stain removal for spic & span bathroom</Text>
                                     <Text>Superior shine & stain removal for spic & span bathroom</Text>
                                </View>
                               
                                 <Text style={{fontSize:14,fontWeight:'bold',color:'#330066',marginVertical:"3%"}}>View details</Text>
                                 <View style={{borderBottomWidth:1,marginTop:'5%',borderColor:'#dedede',marginBottom:'2%'}} />


             </View>
      </View>
  );
} 

    return (
        <KeyboardAvoidingView>
            <StatusBar backgroundColor={Colors.BLACK} barStyle="light-content" translucent={true} />
                    <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true}  style={styles.root}>
                     <View style={{backgroundColor:'white'}}>
                     <View>
                     <FlatListSlider
                            data={images}
                            height={230}
                            timer={5000}
                            onPress={item => alert(JSON.stringify(item))}
                            indicatorContainerStyle={{position:'absolute', bottom: 20}}
                            indicatorActiveColor={'#8e44ad'}
                            indicatorInActiveColor={'#ffffff'}
                            indicatorActiveWidth={30}
                            animation
                          />
                     </View>
                         <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:"3%",marginVertical:20}}>
                                <View style={{width:"65%"}}>
                                <Text style={{fontSize:25,fontWeight:'bold'}}>Water Purifier</Text>
                                </View>
                                <TouchableOpacity onPress={() => props.navigation.navigate("Ucsafe")} style={{flexDirection:'row',borderWidth:1,borderRadius:5,borderColor:"#bbbdbb",alignSelf:'center',marginHorizontal:2}}>
                                    <View> 
                                    <Image source={ImageIcons.secure} style={styles.imageslogo} />
                                    </View>
                                    <View style={{marginHorizontal:3,marginVertical:2}}>
                                     <Text>UC Safe</Text>
                                    </View>
                                </TouchableOpacity>
                         </View>
                         <View style={{flexDirection:'row',marginHorizontal:"5%"}}>
                                    <View> 
                                    <Image source={ImageIcons.star} style={styles.imageslogo} />
                                    </View>
                                    <View style={{marginHorizontal:5,marginVertical:2}}>
                                     <Text>4.75 (974k)</Text>
                                    </View>
                         </View>
                          <View style={{flexDirection:'row',marginHorizontal:"5%"}}>
                                    <View> 
                                    <Image source={ImageIcons.rightadd} style={styles.imageslogo} />
                                    </View>
                                    <View style={{marginHorizontal:5,marginVertical:2}}>
                                     <Text>44,804 booking in Chandigarh Tricity this year</Text>
                                    </View>
                         </View>
                         
                          <View style={{marginBottom:10}}> 
                            <FlatList
                                data={DATA}
                                horizontal={true}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}  
                             />           
                        </View>
                     </View> 
                      
                           
                          <View style={{backgroundColor:'white',marginVertical:"2%"}}> 
                            <FlatList
                                data={DATA1}
                              
                                renderItem={renderItem1}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}  
                             />           
                        </View> 

                        
                         
                        
                         <View style={{backgroundColor:'white',marginVertical:"2%"}}> 
                           <Text style={{fontSize:20,fontWeight:'bold',marginHorizontal:"3%",marginVertical:"2%"}}>Service</Text>
                            <FlatList
                                data={haircutdata}
                              
                                renderItem={renderItem3}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}  
                             />           
                        </View> 
                       
                      

                      
                    </ScrollView>
                     <SwipeablePanel {...panelProps} isActive={isPanelActive} style={{height:deviceHeight/1.2,backgroundColor:"#f1f0f2"}}>
                      <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true}  >
                        <View>
                     <FlatListSlider
                            data={images}
                            height={230}
                            timer={5000}
                            onPress={item => alert(JSON.stringify(item))}
                            indicatorContainerStyle={{position:'absolute', bottom: 20}}
                            indicatorActiveColor={'#8e44ad'}
                            indicatorInActiveColor={'#ffffff'}
                            indicatorActiveWidth={30}
                            animation
                          />
                     </View>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'3%',marginVertical:'4%'}}>
                                            
                                            <View style={{marginVertical:2}}>
                                             <Text style={{fontSize:16,fontWeight:'bold'}}>Regular Service</Text>
                                            </View>
                                            <View style={{marginTop:"1%",marginHorizontal:"2%"}}>
                                            <View style={{marginBottom:45,marginLeft:18}}><Image source={ImageIcons.man} style={styles.images2} /></View>
                                                <RnIncrementDecrementBtn
                                                    minVal={0} 
                                                    minreq={1} 
                                                    max={10}

                                                    //val={Incval}
                                                    styleBtn={{width:30.6,height:26,backgroundColor:'#ffffff',borderColor:"#330066"}}
                                                    styleTextInput={{width:38.25,height:26,backgroundColor:'#ffffff',borderColor:"#330066"}}
                                                    labelStyle={{fontSize:15,marginTop:'1%',color:'#330066',fontFamily:'SourceSansPro-Regular'}}
                                                   //handleClick={()=> setIncval(Incval)}
                                                    />
                                             </View>
                        </View>
                          <View style={{flexDirection:'row',marginHorizontal:"3%",marginTop:"-15%"}}>
                                    <View> 
                                    <Image source={ImageIcons.star} style={styles.imageslogo} />
                                    </View>
                                    <View style={{marginHorizontal:5,marginVertical:2}}>
                                     <Text>4.75 (974k)</Text>
                                    </View>
                         </View>
                          <View style={{marginHorizontal:"3%",marginVertical:"1%"}}>
                                <Text>Rs1199  - 40 min</Text>
                          </View>
                           <View style={{marginHorizontal:"3%",marginVertical:"1%"}}>
                                <Text>Rs800 off </Text>
                          </View>
                          <View style={{flexDirection:'row',marginHorizontal:"3%",borderColor:"#c1c5c7",borderWidth:1,borderRadius:5,marginVertical:"5%"}}>
                                <View> 
                                <Image source={ImageIcons.blackbook} style={styles.imageslogo} />
                                </View>
                                <View style={{marginHorizontal:5,marginVertical:2,}}>
                                 <Text >Charges will be as per rate card</Text>
                                </View>
                                <View> 
                                <Image source={ImageIcons.rightarrow} style={styles.imageslogo} />
                                </View>
                        </View>
                         
                           <View style={{marginHorizontal:"3%",marginVertical:'0%'}}>
                         <Text  style={{fontSize:18,fontWeight:'bold'}}>What all included in the pack? </Text>
                         </View> 
                         <View style={{marginHorizontal:"3%",marginVertical:'3%'}}>
                         <Text  style={{fontSize:18,fontWeight:'bold'}}>Sediment Filter</Text>
                          <Text  style={{fontSize:14}}>This the first stage of filtration inside the purifier . It function like a net that filter unwanted dirt practice as water flows through the system. </Text>
                         </View>
                          <View style={{marginHorizontal:"3%",marginVertical:'3%'}}>
                         <Text  style={{fontSize:18,fontWeight:'bold'}}>Sediment Filter</Text>
                          <Text  style={{fontSize:14}}>This the first stage of filtration inside the purifier . It function like a net that filter unwanted dirt practice as water flows through the system. </Text>
                         </View>
                          <View style={{marginHorizontal:"3%",marginVertical:'3%'}}>
                         <Text  style={{fontSize:18,fontWeight:'bold'}}>Sediment Filter</Text>
                          <Text  style={{fontSize:14}}>This the first stage of filtration inside the purifier . It function like a net that filter unwanted dirt practice as water flows through the system. </Text>
                         </View>

                            
                   </ScrollView>
               </SwipeablePanel>
                   
               
            {props?.vendorRequestLoader && <Loader isVisible={props?.vendorRequestLoader} />}
        </KeyboardAvoidingView>
    )
}


export default Usersearch;