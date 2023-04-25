import React, { useRef, useState, useEffect } from 'react';
import { Text, Image, View, ImageBackground,FlatList, ScrollView, Alert, StatusBar, KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
 import DashedLine from 'react-native-dashed-line';

const Ucsafe = (props) => {

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
       text1:"In Chandigarh Tricity", 
       },
       { 
         text1:"In Delhi",
       },
       { 
         text1:"In Mumbai",
       },
      ];


      const images = [
   {
    image:'https://mcmscache.epapr.in/post_images/website_350/post_17373155/full.jpg',
    desc: 'Silent Waters in the mountains in midst of Himilayas',
   },
  {
    image:'https://media.istockphoto.com/photos/doctor-gives-vaccine-or-medicine-injection-to-women-patient-in-office-picture-id1302928132?k=20&m=1302928132&s=612x612&w=0&h=2D_VZKAxCd28GhbrutGN0XCnvexHZB7mHdvz1GEZhL0=',
    desc:
      'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
  ];





     const renderItem = ({ item ,index }) => {
     return(
    <View >
            <View style={{marginHorizontal:10,marginVertical:10  ,borderRadius:10,borderWidth:1,borderColor:"#dedede",flexDirection:'row',justifyContent:'space-between'}}>
                         <View>
                          <View style={{marginHorizontal:6,marginVertical:6, borderRadius:10,elevation:1,borderColor:"#dedede",backgroundColor:"#b6b9fa"}}>
                               <Text style={{padding:2,fontSize:12}}>Vaccinated professionsals</Text>
                          </View>
                          <View style={{marginHorizontal:6}}>
                          <Text>{item.text1}</Text>
                          <Text>198 of 200</Text>
                          </View>
                          </View>
                          <View style={{margin:10}}>
                          <Image source={ImageIcons.percentage} style={styles.images1} />
                          </View>
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
                            height={260}
                            timer={5000}
                            onPress={item => alert(JSON.stringify(item))}
                            indicatorContainerStyle={{position:'absolute', bottom: 20}}
                            indicatorActiveColor={'#8e44ad'}
                            indicatorInActiveColor={'#ffffff'}
                            indicatorActiveWidth={30}
                            animation
                          />

                     </View>
                        
                                   
                         <View style={{marginHorizontal:"3%"}}>
                                     <Image source={ImageIcons.vacin} style={{ width:40,height:40,marginTop:'9%'}} />        
                         </View>
                          <View style={{marginHorizontal:"3%",marginVertical:"1%"}}>
                                    
                                     <Text  style={{fontSize:20,fontWeight:'bold'}}>Vaccination of professionsals</Text>
                                     <Text  style={{fontSize:14,}}>Nationwide vaccination drive in partnership with local govrnments and healthcare provider</Text>
                                    
                         </View>
                        

                          <View style={{marginVertical:10}}> 
                            <FlatList
                                data={DATA}
                                horizontal={true}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}  
                             />           
                        </View>
                         <View style={{marginHorizontal:"3%",marginVertical:'4%'}}>
                                     <Image source={ImageIcons.testing} style={{width:24,height:31}} />        
                         </View>
                         <View style={{marginHorizontal:"3%",marginVertical:'0%'}}>
                         <Text  style={{fontSize:18,fontWeight:'bold'}}>covid 19 testing</Text>
                          <Text  style={{fontSize:14}}>Testing facilities and doctor consultations for professionsals indicating any symptoms.</Text>
                         </View>

                         <View style={{marginHorizontal:"3%",marginVertical:'4%'}}>
                                     <Image source={ImageIcons.mask} style={{width:30,height:30}} /> 
                                     <Text  style={{fontSize:18,fontWeight:'bold'}}>Safety Equipments</Text>
                                      <Text  style={{fontSize:14}}>Our professionsals use masks, gloves and sanitizer during services. They also upload picture of the same at the start of the services.</Text> 

                         </View>
                          <View style={{marginHorizontal:"3%",marginVertical:'4%'}}>
                                     <Image source={ImageIcons.temp} style={{width:18,height:30}} /> 
                                     <Text  style={{fontSize:18,fontWeight:'bold'}}>Daily Temperature checks</Text>
                                      <Text  style={{fontSize:14}}>Professionsals with fever or flu-Like symptoms are not allowed to ddeliver services.</Text> 

                         </View>
                         <View style={{marginHorizontal:"3%",marginVertical:'4%'}}>
                                     <Image source={ImageIcons.dest} style={{width:22,height:28}} /> 
                                     <Text  style={{fontSize:18,fontWeight:'bold'}}>Single-use products & disposables</Text>
                                      <Text  style={{fontSize:14}}>Single-use products in beauty & wellness services to pervent cross-contaminations.</Text> 

                         </View>
                     </View> 

                     <View style={{marginVertical:"5%",marginHorizontal:'3%'}}>
                     <Text  style={{fontSize:20,fontWeight:'bold',color:'#5a5ed1'}}>Book a services</Text>
                     <Text  style={{fontSize:12,color:'gray'}}>Enjoy services at the Safety of your home</Text> 
                     </View>
                     <View style={{borderBottomWidth:1,marginTop:'5%',borderColor:'#d9d9d9',marginBottom:'2%'}} />


                     <View style={{marginVertical:"3%",marginHorizontal:'8%',flexDirection:'row',justifyContent:'space-between'}}>
                     <View>
                     <Image source={ImageIcons.man} style={styles.images1} />
                     </View>
                     <View>
                     <Text  style={{fontSize:16,fontWeight:'bold'}}>Salon for Men</Text>
                    <Text  style={{fontSize:12,color:'gray'}}>Sanitized Tools| Single-use Products</Text> 
                     </View>
                     </View>
                      <View style={{borderBottomWidth:1,borderColor:'#d9d9d9',marginBottom:'2%'}} />


                      <View style={{marginVertical:"3%",marginHorizontal:'8%',flexDirection:'row',justifyContent:'space-between'}}>
                      <View>
                     <Image source={ImageIcons.man} style={styles.images1} /> 
                     </View>
                     <View style={{marginRight:"28%"}}>
                     <Text  style={{fontSize:16,fontWeight:'bold'}}>Disinfection  </Text>
                    <Text  style={{fontSize:12,color:'gray'}}>Low-contact sevices</Text> 
                     </View>
                     </View>
                        
                       <View style={{borderBottomWidth:1,borderColor:'#d9d9d9',marginBottom:'2%'}} />
                        <View style={{marginVertical:"3%",marginHorizontal:'8%',flexDirection:'row',justifyContent:'space-between'}}> 
                      <View>
                     <Image source={ImageIcons.man} style={styles.images1} /> 
                     </View>
                     <View >
                     <Text  style={{fontSize:16,fontWeight:'bold'}}>Salon for Women  </Text>
                    <Text  style={{fontSize:12,color:'gray'}}>Sanitized Tools| Single-use Products</Text> 
                     </View>
                     </View>    
                       

                       <View style={{borderBottomWidth:1,borderColor:'#d9d9d9',marginBottom:'2%'}} />


                     <View style={{ marginHorizontal: '3%',marginVertical:"5%" }}>
                                    <RoundedButton
                                        text="View all Services"
                                       onPress={() => props.navigation.navigate('Safeservice')}
                                    />
                                </View>

                      
                    </ScrollView>
               
            {props?.vendorRequestLoader && <Loader isVisible={props?.vendorRequestLoader} />}
        </KeyboardAvoidingView>
    )
}


export default Ucsafe;