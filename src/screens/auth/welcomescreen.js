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
import AppIntroSlider from 'react-native-app-intro-slider';
import tw from 'twrnc';

const welcomescreen = (props) => {

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
    const [showFilmcaApp, setShowFilmcaApp] = useState(false);

    const onDone = () => {
        props.navigation.navigate("Filmcascreen")
        // setShowFilmcaApp(true);
    };

    useEffect(() => {
        props.assignlogindata();
    }, [])

    const slides = [
        {
            key: 1,
            title: 'FILMCA',
            text: 'Description.\nSay something cool',
            image: ImageIcons.sliderimage1,
            backgroundColor: '#fffff',
        },
        {
            key: 2,
            title: 'FILMCA',
            text: 'Other cool stuff',
            image: ImageIcons.sliderimage2,
            backgroundColor: '#fffff',
        },
        {
            key: 3,
            title: 'FILMCA',
            text: 'I\'m already out of descriptions',
            image: ImageIcons.sliderimage3,
            backgroundColor: '#fffff',
        }
    ];
    const RenderItem = ({ item }) => {
        return (
            <ImageBackground
                    style={tw`w-full h-full `}
                    source={item.image}
                    imageStyle={{ resizeMode: 'cover' }}
                >
            </ImageBackground>
        );
    };




    return (
        <>
            {showFilmcaApp ? (
                <SafeAreaView style={styles.container}>
                    <View style={styles.container}>
                        <Text style={styles.titleStyle}>
                            React Native App Intro Slider using AppIntroSlider
                        </Text>
                        <Text style={styles.paragraphStyle}>
                            This will be your screen when you click Skip
                            from any slide or Done button at last
                        </Text>
                        <Button
                            title="Show Intro Slider again"
                            onPress={() => setShowFilmcaApp(false)}
                        />
                    </View>
                </SafeAreaView>
            ) : (
                <AppIntroSlider
                    data={slides}
                    renderItem={RenderItem}
                    onDone={onDone}
                    dotStyle={{backgroundColor: '#E65258'}}
                />
            )}
        </>
    );
};
const formikEnhancer = withFormik({


});

export default formikEnhancer(welcomescreen);