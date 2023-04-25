/*
Created By: Ashish Swami
Created Date: 01/06/2022
*/

import {
  SIGNUP_CREDENTIALS,
  SET_REGISTER_ACCOUNT,
  SET_LOGIN_CREDENTIAL,
  SET_LOGIN_LOADER,
  SET_NETWORK_STATE,
  SET_DEFAULT_AUTH_SCREEN,
  GET_DEPARTMENT_LIST,
  GET_SUBDEPARTMENT_LIST,
  SET_UPDATE_WORKDEPARTMENT,
  SET_UPDATE_AREATRAVEL,
  SET_UPDATE_ABILITY,

} from '../actions/ActionTypes';

// Redux states
const initialState = {
  isInternetConnected: false,
  loginCredentials: null,
  signupCredentials: null,
  loginLoader: false,
  getdepartMentlist: [],
  getsubdepartmentlist: [],
  departmentworkupdate: false,
  updatetravel: false,
  updateability: false,
  defaultAuthScreen: "Login"  //Login, ResetPaswword
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case SET_NETWORK_STATE:
      return {
        ...state,
        isInternetConnected: action.payload,
      };
    case SET_REGISTER_ACCOUNT:
      console.log('SET_REGISTER_ACCOUNT:', action.payload)
      return {
        ...state,
        signupCredentials: action.payload,
      };

    case GET_DEPARTMENT_LIST:
      return {
        ...state,
        getdepartMentlist: action.payload,
      };

    case GET_SUBDEPARTMENT_LIST:
      return {
        ...state,
        getsubdepartmentlist: action.payload,
      };

    case SET_UPDATE_WORKDEPARTMENT:
      return {
        ...state,
        departmentworkupdate: action.payload,
      };

    case SET_UPDATE_AREATRAVEL:
      return {
        ...state,
        updatetravel: action.payload,
      };

      case SET_UPDATE_ABILITY:
      return {
        ...state,
        updateability: action.payload,
      };

      
    case SET_LOGIN_CREDENTIAL:
      console.log('SET_LOGIN_CREDENTIAL:', action.payload)
      return {
        ...state,
        loginCredentials: action.payload,
      };
    case SET_LOGIN_LOADER:
      return {
        ...state,
        loginLoader: action.payload,
      };
    case SET_DEFAULT_AUTH_SCREEN:
      return {
        ...state,
        defaultAuthScreen: action.payload,
      };
    default:
      return state;
  }
};

export default Auth;
