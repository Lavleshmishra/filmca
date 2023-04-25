import React, { useEffect, useRef, useState } from 'react';
import { Text, Image, View, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Alert, StatusBar, Animated, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import { Colors, CommonStrings } from '../../common'
import ImageIcons from '../../common/ImageIcons'
import InputField from '../../components/forms/inputField';
import { RoundedButton } from '../../components/forms/button';
import Loader from '../../components/modals/Loader';
import AsyncStorage from '@react-native-community/async-storage';
//import messaging from '@react-native-firebase/messaging';
import { requestMultiplePermisisons } from '../../services/permission';
import tw from 'twrnc';

const Filmcascreen = (props) => {

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
    const [rememberMe, setRememberMe] = useState(false)
    const [refreshFiled, setRefreshFiled] = useState(false)
    const [deviceToken, setDeviceToken] = useState();
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);
    useEffect(() => {
        props.assignlogindata();
      }, [])


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
                    colors={[Colors.BLACK, 'rgba(0,0,0,0.1)']}
                    start={{ x: 0, y: 0 }} end={{ x: 0, y: 2 }}
                    style={tw`flex-1 `}>


                    <View style={tw`flex-1 mx-9 mt-15 `}>
                        <View style={tw`flex-1 mt-30 `}>
                            <Text style={tw`text-center font-normal text-[#5fafcf] text-[20]`}>FILMCA</Text>
                            <Text style={tw`text-center font-normal text-[#fff] text-[5.4]`}>be ready to capture</Text>
                        </View>
                        <View style={tw`flex-1 `}>
                            <View style={tw` `}>
                                <RoundedButton
                                    text="Sign In"
                                    onPress={() => props.navigation.navigate("Login")}
                                />
                            </View>
                            <View style={tw`items-center my-5`}>
                                <Text style={tw` font-normal text-[#fff] text-[3.3]`}>Don't have an account ?</Text>
                            </View>

                            <View style={tw``}>
                                <RoundedButton
                                    text="Sign Up"
                                    onPress={() => props.navigation.navigate("Registration")}
                                />
                            </View>

                        </View>


                    </View>

                    <Loader isVisible={props?.loginLoader} />
                </LinearGradient>
            </ImageBackground>
        </KeyboardAvoidingView >
    )
}


const formikEnhancer = withFormik({
    // validateOnMount: true,
    // validationSchema: Yup.object().shape({
    //     email: Yup.string().required('Please enter email address').email('Please enter a valid email address'),
    //     password: Yup.string().required('Please enter password'),
    // }),
    mapPropsToValues: (props) => {
        return {
            // email: '',
            // password: '',
        };
    },
    handleSubmit: async (payload, { props }) => {
        // props.login(payload)
    },
});


export default formikEnhancer(Filmcascreen);