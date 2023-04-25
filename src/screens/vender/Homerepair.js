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

const Homerepair = (props) => {

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
    
   

  
      const ucsafedata = [
   {
    image:'https://mcmscache.epapr.in/post_images/website_350/post_17373155/full.jpg',
    desc: 'Electrician',
   },
  {
    image:'https://menglish.sakshi.com/sites/default/files/styles/storypage_main/public/gallery_images/2021/12/2/urbancompany9-1638419777.jpg?itok=YtfUC3D3',
    desc:
      'Plumbers',
  },
  {
    image:'https://static.bangkokpost.com/media/content/20200421/c1_1904000_200421091756.jpg',
    desc:
      'Carpanters',
  },
 
  ];





     const renderItem = ({ item ,index }) => {
     return(
    <View >
                  <View style={{marginVertical:6,marginHorizontal:16,flexDirection:'row'}}>
                     <View>
                     <Image source={item.image  ? { uri:item.image } : ImageIcons.profi} style={styles.images1} />
                     </View>
                     <View style={{paddingTop:15,paddingLeft:20}}>
                      <Text  style={{fontSize:14,color:'black'}}>{item.desc}</Text> 
                     </View>
                  </View>

           
      </View>
  );
}  



 

    return (
        <KeyboardAvoidingView>
            <StatusBar backgroundColor={Colors.BLACK} barStyle="light-content" translucent={true} />
                    <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true}  >
                    
                    <View>
                      <FlatList
                                data={ucsafedata}
                           
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}  
                             />     
                    </View>
                     
                     


                    

                 </ScrollView>
               
            {props?.vendorRequestLoader && <Loader isVisible={props?.vendorRequestLoader} />}
        </KeyboardAvoidingView>
    )
}


export default Homerepair;