import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import {
    View,
    Alert,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Auth from '../route/Auth';
import RNBootSplash from "react-native-bootsplash";
import CustomDrawer from './CustomDrawer';
import { login, setNetworkConnection, logout } from '../redux/actions/Auth'
import NetInfo from "@react-native-community/netinfo";

import { Colors } from '../common';

const RootNavigation = (props) => {

    //Local states
    const [isResetLink, setIsResetLink] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    // Redux states
    let { loginCredentials, defaultAuthScreen } = useSelector(state => state.auth)

    useEffect(() => {
        NetInfo.fetch().then(state => {
            props.setNetworkConnection(state.isConnected);
        });
    }, [loginCredentials])

    useEffect(async () => {    
        validateLoginCredential();
    }, [])

    
    // Validate login credential
    const validateLoginCredential = async () => {                   
        setIsLoading(false)
    }

    // handle dynamic link
    const handleDynamicLink = link => {
        // Handle dynamic link inside your own application
        if (link?.url) {
            console.log("link.url===>", link?.url)
            props.logout();
            setTimeout(() => {
                NetInfo.fetch().then(state => {
                    props.setNetworkConnection(state.isConnected);
                });                
            }, 500);
            setIsResetLink(true)
        }        
    };

    if (isLoading) {
        return <View style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: Colors.BLACK
        }}>
            <ActivityIndicator size="large" color={Colors.GREEN} />
        </View >
    } else {

        // console.log('loginCredentials123',loginCredentials)
         //console.log('loginCredentialsstatus',loginCredentials?.status)
         
        return (
            <NavigationContainer >
                {(!loginCredentials ) && <Auth />}
                {(loginCredentials ) && <CustomDrawer />}                
            </NavigationContainer>
        );
    }
}

const style = StyleSheet.create({
    root: {

    }
});

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
    login,    
    setNetworkConnection,
    logout
};
export default connect(mapStateToProps, mapDispatchToProps)(RootNavigation);
