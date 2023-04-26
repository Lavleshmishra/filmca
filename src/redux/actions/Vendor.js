import {
  SET_LOGIN_LOADER,
  BUSINESS_LIST_DATA,
  SET_NEW_POST,
  GET_POST_LIST,
  GET_POSTDETAIL_LIST,
  GET_COMMENT_LIST,
  SET_COMMENT_POST,
  SET_SEND_MESSAGE,
  GET_MESSAGE_LIST,
  SET_LIKE_UNLIKE_POST,
  GET_LIKE_LIST,
  GET_PROFILE_LIST,
  SET_UPDATE_PROFILE,
  SET_UPDATE_BACKGROUND,
  SET_UPDATE_ABOUT,
  GET_DELETE_POST,
  SET_NETWORK_CRU,
  GET_CRU_LIST,
  GET_NETWORK_LIST,
  GET_EVENT_CATEGORY,
  GET_EVENT_LIST,
  GET_EVENTDETAIL_LIST,
  GET_NOTIFICATION_LIST,
  SET_PROJECT_ADD,
  GET_PRODUCTION_LIST,
  GET_MYPROJECT_LIST,
  GET_PROJECTDETAIL_LIST,
  SET_INVITE_CRU_PROJECT,
  GET_MESSAGEDETAIL_LIST,
  SET_ACCEPT_USER,
  GET_DELETE_USEREQUEST,
  GET_ALL_JOBS,
  SET_APPLY_PROJECT,
} from './ActionTypes';
import { Alert } from 'react-native';
import { Api, Utilise } from '../../common';
//import AsyncStorage from '@react-native-community/async-storage';
import { search } from '../../common/SearchApiCalling';
import { CommonActions, StackActions } from '@react-navigation/native';

//msgdataid
export const openMessage = (data, navigation) => {
  console.log(data, "msgidddd");
  return async (dispatch, getState) => {
    dispatch({ type: SET_OPENMESSAGE_DATA, payload: data });
    console.log(data, "msgidddd");
    navigation.navigate("MessageData");
  }
}
export const Newcoupon = (request, navigation) => {
  return async (getState) => {
    // let isInternetConnected = await getState().auth?.isInternetConnected;
    // if (isInternetConnected) {
    try {
      //console.log('abc')
      console.log('requestpayment==>>', request)

      let response = await Utilise.apiCalling('POST', Api.Newcoupon, request);
      console.log("xcç", response)
      if (response.status == "200") {
        Alert.alert("Transport", 'Save successfully.')
        // navigation.dispatch(
        //   StackActions.replace('Profile')
        // );
      } else {
        Alert.alert("Transport", String(response?.message))
      }
    } catch (error) {
      Alert.alert("Transport", String(error?.message))
    }
  };
}

// Add Report 

export const businessList = (navigation) => {

  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    let loginCredentials = await getState().auth?.loginCredentials;
    let loginToken = loginCredentials.token;

    let request = {
      "searchKey": "",
      "pageNo": 1,
      "pageSize": 32,
      "unconnectedFront": null,
      "searchFilterWithExpression": null,
      "baseTableIds": null,
      "uiCustomViewLayoutId": null,
      "uiCustomViewResolutionId": null,
      "uiComponentNameList": ["fronts.frontList"]
    }

    if (isInternetConnected) {
      console.log('businessList request::::', request);
      try {
        //dispatch({ type: SET_LOGIN_LOADER, payload: true });
        let response = await Utilise.apiCalling('POST', Api.businessList, request, loginToken);
        console.log('businessList response::::', response);
        //Alert.alert(type+' report added successfully');
        //dispatch({ type: SET_LOGIN_LOADER, payload: false });

        //navigation.navigate("Logs");
        //if (response?.status==200) {
        dispatch({ type: BUSINESS_LIST_DATA, payload: response?.data?.payload?.list });
        // } else {
        //     Alert.alert(response?.message)
        // }    
      } catch (error) {
        dispatch({ type: SET_LOGIN_LOADER, payload: false });
        dispatch({ type: BUSINESS_LIST_DATA, payload: [] })
        Alert.alert("VCA", String(error?.message))
      }
    }
  };
};

//addnewpost
export const addpostnew = (request, navigation) => {
  
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.addnewpost, request);
        console.log("requestaddpost==>", request)
        //alert("hello")
        Alert.alert("Filmca", "Save successfully")
        console.log('error',error);
      } catch (error) {
        console.log('error',error);
        //Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};
//postlisting socialfeedlist
export const socialfeedlist = () => {
  return async (dispatch, getState) => {
    let loginCredentials = await getState().auth?.loginCredentials;
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        dispatch({ type: SET_LOGIN_LOADER, payload: true });
        //dispatch({ type: GET_POST_LIST, payload: true });
        let response = await Utilise.apiCalling('GET', `${Api.postlisting}`)
        //console.log("postlisting_reponse", response)
        //dispatch({ type: GET_POST_LIST, payload: false });
        if (response?.status) {
          dispatch({ type: GET_POST_LIST, payload: response.data.data });
        } else {
          Alert.alert("Filmca", String(response?.message))
        }
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};
//postDetails 
export const postdetails = (id) => {
  return async (dispatch, getState) => {
    let loginCredentials = await getState().auth?.loginCredentials;
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        dispatch({ type: GET_POSTDETAIL_LIST, payload: false });
        let response = await Utilise.apiCalling('GET', `${Api.postDetails}/${id}`)
        console.log("postlisting_reponse", response)
        dispatch({ type: GET_POSTDETAIL_LIST, payload: false });
        if (response?.status) {

          dispatch({ type: GET_POSTDETAIL_LIST, payload: response.data.data });

        } else {
          Alert.alert("Filmca", String(response?.message))
        }
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};
//viewprofile 
export const profiledetail = (id) => {
  return async (dispatch, getState) => {
    let loginCredentials = await getState().auth?.loginCredentials;
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('GET', `${Api.viewprofile}/${id}`)
        console.log("viewprofile====?", response)
        dispatch({ type: GET_PROFILE_LIST, payload: response.data.data });
        console.log("viewprofile_reponse", response.data.data)

      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};

//commentlistid 
export const commentIdlist = (id) => {
  return async (dispatch, getState) => {
    let loginCredentials = await getState().auth?.loginCredentials;
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        dispatch({ type: GET_COMMENT_LIST, payload: true });
        let response = await Utilise.apiCalling('GET', `${Api.commentlistid}/${id}`)
        console.log("commentid_reponse", response)
        dispatch({ type: GET_COMMENT_LIST, payload: false });
        if (response?.status) {

          dispatch({ type: GET_COMMENT_LIST, payload: response.data.data });

        } else {
          Alert.alert("Filmca", String(response?.message))
        }
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};
//addcomment 
export const commentAdd = (request, navigation) => {
  console.log("requestcommentAdd==>", request)
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.addcomment, request);
        console.log("commentAdd==>>", response?.data)

        if (response?.status) {
          dispatch({ type: SET_COMMENT_POST, payload: response.data });

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
//sendmessage 
export const messagesend = (request, navigation) => {
  console.log("requestmessagesend==>", request)
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.sendmessage, request);
        console.log("messagesend==>>", response?.data)

        if (response?.status) {
          dispatch({ type: SET_SEND_MESSAGE, payload: response.data });

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
//messagelist 
export const getmessage = (id) => {
  return async (dispatch, getState) => {
    let loginCredentials = await getState().auth?.loginCredentials;
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        dispatch({ type: GET_MESSAGE_LIST, payload: true });
        let response = await Utilise.apiCalling('GET', `${Api.messagelist}/${id}`)
        console.log("commentid_reponse", response)
        dispatch({ type: GET_MESSAGE_LIST, payload: false });
        if (response?.status) {

          dispatch({ type: GET_MESSAGE_LIST, payload: response.data.data });

        } else {
          Alert.alert("Filmca", String(response?.message))
        }
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};

//likeUnlikepost
export const likeunlikepost = (request, navigation) => {
  console.log("requestlikeUnlikepost==>", request)
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.likeUnlikepost, request);
        console.log("likeUnlikepost==>>", response?.data)

        if (response?.status) {
          dispatch({ type: SET_LIKE_UNLIKE_POST, payload: response.data });

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
//likelisting
export const getlike = (id) => {
  return async (dispatch, getState) => {
    let loginCredentials = await getState().auth?.loginCredentials;
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        dispatch({ type: GET_LIKE_LIST, payload: true });
        let response = await Utilise.apiCalling('GET', `${Api.likelisting}/${id}`)
        console.log("getlike_reponse", response)
        dispatch({ type: GET_LIKE_LIST, payload: false });
        if (response?.status) {

          dispatch({ type: GET_LIKE_LIST, payload: response.data.data });

        } else {
          Alert.alert("Filmca", String(response?.message))
        }
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};

//updateProfileImage 
export const updateprofile = (request, navigation) => {
  console.log("updateProfileImagerequest==>", request)
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.updateProfileImage, request);
        console.log("updateProfileImage==>>", response?.data)

        if (response?.status) {
          dispatch({ type: SET_UPDATE_PROFILE, payload: response.data });

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
//updatecoverImage 
export const updatebackgroudimage = (request, navigation) => {
  console.log("updatebackgroudimageresponse==>", request)
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.updatecoverImage, request);
        console.log("updatebackgroudimage==>>", response?.data)

        if (response?.status) {
          dispatch({ type: SET_UPDATE_BACKGROUND, payload: response.data });

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
//updateuserAbout updateabout
export const updateabout = (request, navigation) => {
  console.log("updatebackgroudimageresponse==>", request)
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.updateuserAbout, request);
        console.log("updatebackgroudimage==>>", response?.data)

        if (response?.status) {
          dispatch({ type: SET_UPDATE_ABOUT, payload: response.data });

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
//deletePost
export const deletepost = (id) => {
  return async (dispatch, getState) => {
    let loginCredentials = await getState().auth?.loginCredentials;
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        dispatch({ type: GET_DELETE_POST, payload: true });
        let response = await Utilise.apiCalling('GET', `${Api.deletePost}/${id}`)
        console.log("deletepost==>>>", response)
        dispatch({ type: GET_DELETE_POST, payload: false });
        if (response?.status) {

          dispatch({ type: GET_DELETE_POST, payload: response.data.data });

        } else {
          Alert.alert("Filmca", String(response?.message))
        }
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};
//addnetworkCru 
export const addNetworkCru = (request, navigation) => {
  console.log("addnetworkCruresponse==>", request)
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.addnetworkCru, request);
        console.log("addnetworkCru==>>", response?.data)

        if (response?.status) {
          dispatch({ type: SET_NETWORK_CRU, payload: response.data });

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
//mycru mycrulist
export const mycrulist = (id) => {
  return async (dispatch, getState) => {
    let loginCredentials = await getState().auth?.loginCredentials;
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        dispatch({ type: GET_CRU_LIST, payload: true });
        let response = await Utilise.apiCalling('GET', `${Api.mycru}/${id}`)
        console.log("mycru==>>>", response)
        dispatch({ type: GET_CRU_LIST, payload: false });
        if (response?.status) {

          dispatch({ type: GET_CRU_LIST, payload: response.data });

        } else {
          Alert.alert("Filmca", String(response?.message))
        }
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};
//mynetwork
export const mynetworklist = (id) => {
  return async (dispatch, getState) => {
    let loginCredentials = await getState().auth?.loginCredentials;
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        dispatch({ type: GET_NETWORK_LIST, payload: true });
        let response = await Utilise.apiCalling('GET', `${Api.mynetwork}/${id}`)
        console.log("mynetworklist==>>>", response)
        dispatch({ type: GET_NETWORK_LIST, payload: false });
        if (response?.status) {

          dispatch({ type: GET_NETWORK_LIST, payload: response.data });

        } else {
          Alert.alert("Filmca", String(response?.message))
        }
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};
//eventcategory 
export const geteventcategory = () => {
  return async (dispatch, getState) => {
    let loginCredentials = await getState().auth?.loginCredentials;
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        dispatch({ type: GET_EVENT_CATEGORY, payload: true });
        let response = await Utilise.apiCalling('GET', `${Api.eventcategory}`)
        console.log("geteventcategory_reponse", response)
        dispatch({ type: GET_EVENT_CATEGORY, payload: false });
        if (response?.status) {

          dispatch({ type: GET_EVENT_CATEGORY, payload: response.data.data });

        } else {
          Alert.alert("Filmca", String(response?.message))
        }
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};
// eventlist
export const getevent = () => {
  return async (dispatch, getState) => {
    let loginCredentials = await getState().auth?.loginCredentials;
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {

        let response = await Utilise.apiCalling('GET', `${Api.eventlist}`)
        console.log("eventlist_reponse", response)
        dispatch({ type: GET_EVENT_LIST, payload: false });
        if (response?.status) {

          dispatch({ type: GET_EVENT_LIST, payload: response.data.data });

        } else {
          Alert.alert("Filmca", String(response?.message))
        }
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};
//eventdetail
export const geteventdetail = (id) => {
  return async (dispatch, getState) => {
    let loginCredentials = await getState().auth?.loginCredentials;
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        dispatch({ type: GET_EVENTDETAIL_LIST, payload: true });
        let response = await Utilise.apiCalling('GET', `${Api.eventdetail}/${id}`)
        console.log("eventdetail_reponse", response)
        dispatch({ type: GET_EVENTDETAIL_LIST, payload: false });
        if (response?.status) {

          dispatch({ type: GET_EVENTDETAIL_LIST, payload: response.data.data });

        } else {
          Alert.alert("Filmca", String(response?.message))
        }
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};
//notificationlist
export const getnotification = (id) => {
  return async (dispatch, getState) => {
    let loginCredentials = await getState().auth?.loginCredentials;
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        dispatch({ type: GET_NOTIFICATION_LIST, payload: true });
        let response = await Utilise.apiCalling('GET', `${Api.notificationlist}/${id}`)
        console.log("getnotification_reponse", response)
        dispatch({ type: GET_NOTIFICATION_LIST, payload: false });
        if (response?.status) {

          dispatch({ type: GET_NOTIFICATION_LIST, payload: response.data.data });

        } else {
          Alert.alert("Filmca", String(response?.message))
        }
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};
//addprojectnew
export const addnewproject = (request, navigation) => {
  console.log("addprojectnewresponse==>", request)
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.addprojectnew, request);
        console.log("addprojectnew==>>", response?.data)

        if (response?.status) {
          dispatch({ type: SET_PROJECT_ADD, payload: response.data });

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
//productiontypes
export const getproduction = () => {
  return async (dispatch, getState) => {
    let loginCredentials = await getState().auth?.loginCredentials;
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        dispatch({ type: SET_LOGIN_LOADER, payload: true });
        dispatch({ type: GET_PRODUCTION_LIST, payload: true });
        let response = await Utilise.apiCalling('GET', `${Api.productiontypes}`)
        console.log("productiontypesrespose", response)
        dispatch({ type: GET_PRODUCTION_LIST, payload: false });
        if (response?.status) {

          dispatch({ type: GET_PRODUCTION_LIST, payload: response.data.data });

        } else {
          Alert.alert("Filmca", String(response?.message))
        }
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};
//myprojectdata
export const getprojectdata = (id) => {
  return async (dispatch, getState) => {
    let loginCredentials = await getState().auth?.loginCredentials;
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        dispatch({ type: GET_MYPROJECT_LIST, payload: true });
        let response = await Utilise.apiCalling('GET', `${Api.myprojectdata}/${id}`)
        console.log("getprojectdata_reponse", response)
        dispatch({ type: GET_MYPROJECT_LIST, payload: false });
        if (response?.status) {

          dispatch({ type: GET_MYPROJECT_LIST, payload: response.data.data });

        } else {
          Alert.alert("Filmca", String(response?.message))
        }
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};
//projectdetails
export const getprojectdetail = (id) => {
  return async (dispatch, getState) => {
    let loginCredentials = await getState().auth?.loginCredentials;
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('GET', `${Api.projectdetails}/${id}`)
        if (response?.status) {
          dispatch({ type: GET_PROJECTDETAIL_LIST, payload: response.data.data });

        } else {
          Alert.alert("Filmca", String(response?.message))
        }
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};
//invitecruproject
export const inviteprojectcru = (request, navigation) => {
  console.log("invitecruprojectresponse==>", request)
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.invitecruproject, request);
        console.log("invitecruproject==>>", response?.data)

        if (response?.status) {
          dispatch({ type: SET_INVITE_CRU_PROJECT, payload: response.data });

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
//messagedetail
export const getlistmessage = (fromUser) => {
  return async (dispatch, getState) => {
    let loginCredentials = await getState().auth?.loginCredentials;
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('GET', `${Api.messagedetail}?fromUser=${fromUser}&toUser=${loginCredentials?.data?._id}`)
        if (response?.status) {
          dispatch({ type: GET_MESSAGEDETAIL_LIST, payload: response.data.data });
        } else {
          Alert.alert("Filmca", String(response?.message))
        }
      } catch (error) {
        //Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};
//acceptuser
export const acceptuser = (request, navigation) => {
  console.log("acceptuserRESPONSE==>", request)
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.acceptJobs, request);
        console.log("acceptuser==>>", response?.data)

        if (response?.status) {
          dispatch({ type: SET_ACCEPT_USER, payload: response.data });

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
//declineJobs
export const deleteuserrequest = (request, navigation) => {
  console.log("acceptuserRESPONSE==>", request)
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.declineJobs, request);
        console.log("acceptuser==>>", response?.data)

        if (response?.status) {
          dispatch({ type: GET_DELETE_USEREQUEST, payload: response.data });

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

//declineJobs
export const removeuserfromlist = (request, navigation) => {
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.removeJobs, request);
        console.log("acceptuser==>>", response?.data)
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};


//allProjects
export const alljobproject = () => {
  return async (dispatch, getState) => {
    let loginCredentials = await getState().auth?.loginCredentials;
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        dispatch({ type: GET_ALL_JOBS, payload: true });
        let response = await Utilise.apiCalling('GET', `${Api.allprojects}`)
        console.log("alljobproject==>>>", response)
        dispatch({ type: GET_ALL_JOBS, payload: false });
        if (response?.status) {

          dispatch({ type: GET_ALL_JOBS, payload: response.data.data });

        } else {
          Alert.alert("Filmca", String(response?.message))
        }
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};
//applyjobs
export const applyjobsuser = (request, navigation) => {
  console.log("applyjobsresponse==>", request)
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.applyjobs, request);
        console.log("applyjobs==>>", response?.data)

        if (response?.status) {
          dispatch({ type: SET_APPLY_PROJECT, payload: response.data });
          Alert.alert("Filmca", response?.data?.message)
        } 
      } catch (error) {
        Alert.alert("Filmca", String(error?.message))
      }
    };
  }
};