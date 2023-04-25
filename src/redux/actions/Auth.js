/*
Created By: Ashish Swami
Created Date: 01/06/2022
*/

import {
  SET_REGISTER_ACCOUNT,
  SET_LOGIN_CREDENTIAL,  
  SET_NETWORK_STATE,
  SET_LOGIN_LOADER,
  GET_DEPARTMENT_LIST,
  GET_SUBDEPARTMENT_LIST,
  SET_UPDATE_WORKDEPARTMENT,
  SET_UPDATE_AREATRAVEL,
  SET_UPDATE_ABILITY,
  USER_LOGOUT
} from '../actions/ActionTypes';
import { Alert } from 'react-native';
import { Api,Utilise } from '../../common';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions } from '@react-navigation/native';
//Set Network Connection
export const setNetworkConnection = (networkState) => {
  return async (dispatch, getState) => {
    dispatch({ type: SET_NETWORK_STATE, payload: networkState });
  }
}
//signUp
export const signUp = (request, navigation) => {
  console.log("requestsignup==>", request)
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.register, request);
        console.log("newsignup==>>", response?.data)

        if (response?.status) {
          dispatch({ type: SET_REGISTER_ACCOUNT, payload: response.data });
          navigation.navigate("Step1")
        } else {
          //alert(response?.status)
          Alert.alert("Filmca", "User Already Exist")
          // if(response.status == 500 ){

          //   Alert.alert("Filmca", "user already exist")
          // }
          // navigation.navigate("Step1")
        }
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};
//departmentList
export const departmentList = () => {
  return async (dispatch, getState) => {
      let loginCredentials = await getState().auth?.loginCredentials;
      let isInternetConnected = await getState().auth?.isInternetConnected;
      if (isInternetConnected) {
          try {
              dispatch({ type: GET_DEPARTMENT_LIST, payload: true });
              let response = await Utilise.apiCalling('GET', `${Api.departmentlist}`)
              console.log("DEPARTMENT_reponse",response)
              dispatch({ type: GET_DEPARTMENT_LIST, payload: false });
              if (response?.status) {
                  
                  dispatch({ type: GET_DEPARTMENT_LIST, payload: response.data.data });
                  
              } else {
                  Alert.alert("Filmca", String(response?.message))
              }
          } catch (error) {
              Alert.alert("Filmca", String(error?.message))
          }
      };
  }
};
//subdepartmentList
export const subdepartmentList = (id) => {
  return async (dispatch, getState) => {
      let loginCredentials = await getState().auth?.loginCredentials;
      let isInternetConnected = await getState().auth?.isInternetConnected;
      if (isInternetConnected) {
          try {
              dispatch({ type: GET_SUBDEPARTMENT_LIST, payload: true });
              let response = await Utilise.apiCalling('GET', `${Api.subDepartmentlist}/${id}`)
              console.log("SUBDEPARTMENT_reponse",response)
              dispatch({ type: GET_SUBDEPARTMENT_LIST, payload: false });
              if (response?.status) {
                  
                  dispatch({ type: GET_SUBDEPARTMENT_LIST, payload: response.data.data });
                  
              } else {
                  Alert.alert("Filmca", String(response?.message))
              }
          } catch (error) {
              Alert.alert("Filmca", String(error?.message))
          }
      };
  }
};
//updateWorkDepartments
export const updateworkdepartment = (request, navigation) => {
  console.log("updateworkdepartmentresponse==>", request)
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.updateWorkdepartment, request);
        console.log("updateworkdepartment==>>", response?.data)

        if (response?.status) {
          dispatch({ type: SET_UPDATE_WORKDEPARTMENT, payload: response.data });
        } else {
          //alert("hello")
          Alert.alert("Filmca", "Save successfully")
        }
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};
//updateAreatoTravel
export const updateAreatoTravel = (request, navigation) => {
  console.log("requestupdatetravel==>", request)
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.updateareatotravel, request);
        console.log("updateareatotravel==>>", response?.data)

        if (response?.status) {
          dispatch({ type: SET_UPDATE_AREATRAVEL, payload: response.data });
        } else {
          //alert("hello")
          Alert.alert("Filmca", "Save successfully")
        }
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};

//updateAvailAbilty
export const updateAvailAbilty = (request, navigation) => {
  console.log("requestupdateability==>", request)
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.updateAvailabilty, request);
        console.log("updateAvailabilty==>>", response?.data)
        if (response?.status) {
          dispatch({ type: SET_UPDATE_ABILITY, payload: response.data.data });
          
        } else {
          //alert("hello")
          Alert.alert("Filmca", "Save successfully")
          navigation?.navigate("Vendor")
        }
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};


export const login = (loginCredentials, navigation) => {
  console.log('signinnnnn',loginCredentials)
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        dispatch({ type: SET_LOGIN_LOADER, payload: true });
        let response = await Utilise.apiCalling('POST', Api.login, loginCredentials);
        //alert(isInternetConnected)
        console.log('response::::',response);
        
        dispatch({ type: SET_LOGIN_LOADER, payload: false });
        if (response?.status) {
          response.data.isVerified = true;
          dispatch({ type: SET_LOGIN_CREDENTIAL, payload: response?.data });
          dispatch(changeLoginCredentials(response?.data));
          //navigation.navigate("Login");
         
          return;
        } else if (response?.status) {
          //console.log('logindataaaa')
          dispatch({ type: SET_VERIFICAITON_STEPS, payload: 0 })
         
          dispatch(changeLoginCredentials(response?.data));
        } else {
          Alert.alert("Filmca", String(response?.message))
        }
      } catch (error) {
      // console.log('abcdef',error)
        dispatch({ type: SET_LOGIN_LOADER, payload: false });
        dispatch(changeLoginCredentials(null));
        Alert.alert("Filmca", String(error?.message))
      }
    }
  };
};


export const changeLoginCredentials = (loginCredentials) => {
  // console.log("loginCredentials==>", loginCredentials)
   return async (dispatch, getState) => {
     await AsyncStorage.setItem('@loginCredential', JSON.stringify(loginCredentials));
     await AsyncStorage.setItem('@authtoken', JSON.stringify(loginCredentials));
     dispatch({ type: SET_LOGIN_CREDENTIAL, payload: loginCredentials });
     let verificationStatus = loginCredentials?.store?.verificationStatus
     if (loginCredentials?.role === "vendor") {
       if (loginCredentials?.store) {
         dispatch({ type: SET_VERIFICAITON_STATUS, payload: verificationStatus })
         dispatch({ type: SET_CREATE_STORE_INFO, payload: loginCredentials?.store });
         if (verificationStatus?.isStore && verificationStatus?.isStoreImage && verificationStatus?.isUtilityBill) {
           dispatch({ type: SET_VERIFICAITON_STEPS, payload: 3 })
         }
         dispatch(setStoreAutofilInfo(loginCredentials?.store, loginCredentials?.store?._id, verificationStatus));
         await AsyncStorage.setItem('@storeInfo', JSON.stringify(loginCredentials?.store));
       } else {
         let verificationStatuss = {
           "isStore": false,
           "isStoreImage": false,
           "isUtilityBill": false
         }
         dispatch(setStoreAutofilInfo(loginCredentials, null, verificationStatuss))
       }
     }
     //global.authToken = loginCredentials?.token || null;
   };
 };
// LOGOUT  
export const logout = () => {
  return async (dispatch, getState) => {
    //await AsyncStorage.setItem('loginstatus', false);
    dispatch({ type: SET_LOGIN_CREDENTIAL, payload: []});
    await AsyncStorage.removeItem('@loginCredential');
    dispatch({ type: "USER_LOGOUT", payload: false });
    global.authToken = null;   
  };
};

// loginset  
export const assignlogindata = () => {
  return async (dispatch, getState) => {
    let loginCredentials = await AsyncStorage.getItem('@loginCredential');
     console.log('loginCredentials',loginCredentials);
    if(loginCredentials!=undefined){
      dispatch({ type: SET_LOGIN_CREDENTIAL, payload: JSON.parse(loginCredentials) });
      global.authToken = JSON.parse(loginCredentials).token;   
    }
  };
};