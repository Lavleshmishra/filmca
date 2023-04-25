import React, { useEffect, useRef, useState } from 'react';
import { Text, Image, View, ImageBackground, SafeAreaView, Modal, ScrollView, TouchableOpacity, TextInput, Alert, StatusBar, Animated, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import { Colors, CommonStrings } from '../../common';
import ImageIcons from '../../common/ImageIcons';
import InputField from '../../components/forms/inputField';
import { RoundedButton } from '../../components/forms/button';
import Loader from '../../components/modals/Loader';
import AsyncStorage from '@react-native-community/async-storage';
//import messaging from '@react-native-firebase/messaging';
import { requestMultiplePermisisons } from '../../services/permission';
import tw from 'twrnc';

const Registration = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
        setFieldValue
    } = props;

    //Reference
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    // Local states
    const [isShowPassword, setIsShowPassword] = useState(true);
    const [rememberMe, setRememberMe] = useState(false);
    const [refreshFiled, setRefreshFiled] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [deviceToken, setDeviceToken] = useState();
    const [email, setEmail] = useState(false);
    const [username, setUsername] = useState(false);
    const [password, setPassword] = useState(false);

    // Animation references
    const fadeAnim = useRef(new Animated.Value(0)).current
    const transformAnim = useRef(new Animated.Value(300)).current


    useEffect(async () => {
        animateLogo();
        const status = await requestMultiplePermisisons();
    }, [fadeAnim, transformAnim])



    useEffect(() => {
        //requestUserPermission();
    }, [])



    // Animation 
    const animateLogo = () => {
        Animated.parallel([
            Animated.timing(
                fadeAnim,
                {
                    toValue: 1,
                    duration: 1500,
                    useNativeDriver: true
                },

            ),
            Animated.timing(
                transformAnim,
                {
                    toValue: 0,
                    duration: 1500,
                    useNativeDriver: true
                },

            )
        ]).start()
    }

    // Get device token
    const requestUserPermission = async () => {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;
        if (enabled) {
            // console.log('Authorization status:', authStatus);
            const _deviceToken = await messaging().getToken();
            setDeviceToken(_deviceToken)
        }
    }

    // const handlestep = () => {
    //     setModalVisible(false);
    //     props.navigation.navigate("Step1")
    // }
    //  Login request submision 
    const handleLoginSubmit = async () => {
       
        const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
        const strongRegexpass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

        if (username == "") {
            Alert.alert(CommonStrings.AppName, 'Please Enter Username')
        } else if (!strongRegex.test(email)) {
            Alert.alert(CommonStrings.AppName, 'Please Enter Valid Email')
        } else if (!strongRegexpass.test(password)) {
            Alert.alert(CommonStrings.AppName, 'Passwords must include at least 1 number, 1 special character,  1 capital letter, combine a minimum of 8 characters')
        } else {

            let request = {
                "fullName": username,
                "email": email,
                "password": password,

            }

            props.signUp(request, props.navigation);
            //setModalVisible(!modalVisible)

        }
    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" && "padding"}
            style={tw`flex-1 justify-center`}  >
            <StatusBar backgroundColor={Colors.BLACK} barStyle="light-content" translucent={true} />
            <ImageBackground
                style={tw`flex-1 `}
                source={ImageIcons.shootingbackground}
                imageStyle={{ resizeMode: 'cover' }}
            >
                <LinearGradient
                    colors={[Colors.BLACK, 'rgba(0,0,0,0.5)']}
                    start={{ x: 0, y: 0 }} end={{ x: 0, y: 2 }}
                    style={tw`flex-1 `}>
                    <View style={tw`flex-row justify-between mt-15 mx-3`}>
                        <TouchableOpacity onPress={() => props.navigation.goBack()}>
                            <Image source={ImageIcons.backarrow} style={{ tintColor: '#fff', width: 15, height: 25 }} />
                        </TouchableOpacity>
                        <View>
                            <Text style={tw` font-normal text-[#fff] text-[5]`}>Sign Up </Text>
                        </View>
                        <View>

                        </View>
                    </View>

                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">


                        <View style={tw`flex-1 mx-9 mt-15`}>
                            <View style={tw`h-17 `}>
                                <View style={tw`absolute  bottom-6	`}>
                                    <Image source={ImageIcons.proclap} style={[tw`w-5.4 h-4.4`, { tintColor: '#fff' }]} />
                                </View>
                                <TextInput
                                    style={tw`border-b	border-white text-white	pl-7 h-17`}
                                    placeholder="Name"
                                    value={username}
                                    onChangeText={(text) => setUsername(text)}
                                    reference={emailInputRef}
                                    placeholderTextColor={'#999999'}
                                    onSubmitEditing={() => passwordInputRef?.current?.focus()}
                                />
                            </View>
                            <View style={tw`h-17 `}>
                                <View style={tw`absolute  bottom-6	`}>
                                    <Image source={ImageIcons.email_icon} style={tw`w-4.4 h-3.4`} />
                                </View>
                                <TextInput
                                    style={tw`border-b	border-white text-white	pl-7 h-17`}
                                    placeholder="Email"
                                    value={email}
                                    onChangeText={(text) => setEmail(text)}
                                    reference={emailInputRef}
                                    placeholderTextColor={'#999999'}
                                    onSubmitEditing={() => passwordInputRef?.current?.focus()}
                                />
                            </View>
                            <View style={tw`h-17 mt-1`}>
                                <View style={tw`absolute  bottom-6	`}>
                                    <Image source={ImageIcons.lock_icon} style={[tw`w-5 h-5`, { tintColor: '#fff' }]} />
                                </View>
                                <TextInput
                                    style={tw`border-b	border-white text-white	pl-8 h-17`}
                                    value={password}
                                    onChangeText={(text) => setPassword(text)}
                                    secureTextEntry={isShowPassword}
                                    rightIcon={isShowPassword ? ImageIcons.eye_icon_hide : ImageIcons.eye_icon}
                                    reference={passwordInputRef}
                                    onSubmitEditing={() => handleLoginSubmit()}
                                    placeholderTextColor={'#999'}
                                    placeholder="Password"
                                />
                                <TouchableOpacity style={tw`absolute right-2 bottom-5	 `} onPress={() => setIsShowPassword(!isShowPassword)}>
                                    {isShowPassword ?
                                        <Image source={ImageIcons.eye_icon_hide} style={tw`w-5 h-5`} />
                                        :
                                        <Image source={ImageIcons.eye_icon} style={tw`w-5 h-5`} />
                                    }

                                </TouchableOpacity>
                            </View>

                            <View style={tw`items-center mt-8`} >
                                <Text style={tw` font-normal text-[#fff] text-[3.5] text-center	`}>By signing up, you agree to Gaffer.io <Text style={tw`text-center font-bold text-[#fff] text-[4]`}>Terms and Condition of Use </Text>and <Text style={tw` font-bold text-[#fff] text-[4]`}>Privacy Policy</Text></Text>
                            </View>

                            <View style={tw`mt-8`}>
                                <RoundedButton
                                    text="Sign Up"
                                    onPress={() => handleLoginSubmit()}
                                />
                            </View>
                            
                            <View style={tw`mt-15 flex-row center justify-center`}>
                                <Text style={styles.privacyText}>
                                    Already have an account?  
                                </Text>
                                <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                                <Text style={[styles.privacyText,{color:'#E65258'}]}>Sign In</Text>
                                </TouchableOpacity>
                            </View>
                            

                        </View>
                    </ScrollView>
                    <Loader isVisible={props?.loginLoader} />
                </LinearGradient>
            </ImageBackground>
        </KeyboardAvoidingView >
    )
}


const formikEnhancer = withFormik({
    validateOnMount: true,
    validationSchema: Yup.object().shape({
        email: Yup.string().required('Please enter email address').email('Please enter a valid email address'),
        password: Yup.string().required('Please enter password'),
    }),
    mapPropsToValues: (props) => {
        return {
            email: '',
            password: '',
        };
    },
    handleSubmit: async (payload, { props }) => {
        // props.login(payload)
    },
});


export default formikEnhancer(Registration);