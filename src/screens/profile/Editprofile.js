import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Fonts, Colors, ImageIcons } from '../../common';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './styles';
import moment from 'moment';
import Loader from '../../components/modals/Loader';
import { useNavigation } from '@react-navigation/native';


const Editprofile = (props) => {

 const navigation = useNavigation();

    return (
        <View style={styles.footerView}>
         

        
     
        <View style={styles.maincartview}> 
   
        <TouchableOpacity onPress={() => { navigation.navigate('Saleslisting'); }}>
        <View>
         <Image source={ImageIcons.homeclap}  style={{height:24,width:24,}} />
         <Text style={styles.customertext}>Home</Text>        
        </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => { navigation.navigate('Booking'); }}>
         <View>
         <Image source={ImageIcons.bookclap}  style={{height:22,width:22,}} />
         <Text style={styles.customertext1}>Bookings</Text>         
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Ucsafe'); }}>
         <View>
         <Image source={ImageIcons.securityclap}  style={{height:23,width:20}} /> 
         <Text style={styles.customertext1}>UC Safe</Text>        
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Reportlisting'); }}>
         <View>
         <Image source={ImageIcons.plusclap}  style={{height:23,width:23}} /> 
         <Text style={styles.customertext1}>UC Plus</Text>        
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Profile'); }}>
         <View>
         <Image source={ImageIcons.profileclap}  style={{height:24,width:24,borderRadius:20,}} />
         <Text style={styles.customertext2}>Profile</Text>         
        </View>
        </TouchableOpacity>
        </View>
        

        </View>
    )
}

export default Editprofile;
