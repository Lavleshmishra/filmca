/*
Created By: Ashish Swami
Created Date: 01/06/2022
*/

import {
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
    GET_PRODUCTION_LIST,
    SET_PROJECT_ADD,
    GET_MYPROJECT_LIST,
    GET_PROJECTDETAIL_LIST,
    GET_MESSAGEDETAIL_LIST,
    SET_ACCEPT_USER,
    GET_DELETE_USEREQUEST,
    GET_ALL_JOBS,
    SET_APPLY_PROJECT,
    GET_USER_LISTING,
} from '../actions/ActionTypes';

// Redux states
const initialState = {
    businessList: [],
    newpost: false,
    newcomment: false,
    messagesend: false,
    postlikeunlike: false,
    getlikstlist: [],
    getmessagelist: [],
    getpostlist: [],
    grtpostdetail: [],
    getcommentidlist: [],
    getprofilelist: [],
    profileupdate: false,
    backgroundupdate: false,
    updateabout: false,
    postdelete: false,
    getuserdeleterequst:false,
    networktocru: false,
    addproductiontype: false,
    acceptuserreduest: false,
    applyjobproject:false,
    getmycrulist: [],
    getmynetworklist: [],
    geteventcategorylist: [],
    geteventlist: [],
    geteventdetaillist: [],
    getnotificationlist: [],
    getproductionlist: [],
    getprojectlist: [],
    getprojectdetilslist: [],
    getmessagedetilslist: [],
    getalljobprojectlist: [],
    getallalluserlistinglist: [],
    

};

const Vendor = (state = initialState, action) => {
    switch (action.type) {

        case BUSINESS_LIST_DATA:
            console.log('BUSINESS_LIST_DATA::', action.payload)
            return {
                ...state,
                businessList: action.payload,
            };

        case SET_NEW_POST:
            return {
                ...state,
                newpost: action.payload,
            };

        case GET_POST_LIST:
            return {
                ...state,
                getpostlist: action.payload,
            };
        case GET_COMMENT_LIST:
            return {
                ...state,
                getcommentidlist: action.payload,
            };
        case SET_COMMENT_POST:
            return {
                ...state,
                newcomment: action.payload,
            };
        case SET_SEND_MESSAGE:
            return {
                ...state,
                messagesend: action.payload,
            };
        case GET_MESSAGE_LIST:
            return {
                ...state,
                getmessagelist: action.payload,
            };
        case SET_LIKE_UNLIKE_POST:
            return {
                ...state,
                postlikeunlike: action.payload,
            };
        case GET_PROFILE_LIST:
            return {
                ...state,
                getprofilelist: action.payload,
            };
        case SET_UPDATE_PROFILE:
            return {
                ...state,
                profileupdate: action.payload,
            };
        case SET_UPDATE_BACKGROUND:
            return {
                ...state,
                backgroundupdate: action.payload,
            };

        case SET_UPDATE_ABOUT:
            return {
                ...state,
                updateabout: action.payload,
            };
        case GET_DELETE_POST:
            return {
                ...state,
                postdelete: action.payload,
            };

        case SET_NETWORK_CRU:
            return {
                ...state,
                networktocru: action.payload,
            };
        case GET_CRU_LIST:
            return {
                ...state,
                getmycrulist: action.payload,
            };
        case GET_NETWORK_LIST:
            return {
                ...state,
                getmynetworklist: action.payload,
            };
        case GET_EVENT_CATEGORY:
            return {
                ...state,
                geteventcategorylist: action.payload,
            };
        case GET_EVENT_LIST:
            return {
                ...state,
                geteventlist: action.payload,
            };
        case GET_EVENTDETAIL_LIST:
            return {
                ...state,
                geteventdetaillist: action.payload,
            };
        case GET_NOTIFICATION_LIST:
            return {
                ...state,
                getnotificationlist: action.payload,
            };
        case GET_PRODUCTION_LIST:
            return {
                ...state,
                getproductionlist: action.payload,
            };
        case SET_PROJECT_ADD:
            return {
                ...state,
                addproductiontype: action.payload,
            };

        case GET_MYPROJECT_LIST:
            return {
                ...state,
                getprojectlist: action.payload,
            };
        case GET_PROJECTDETAIL_LIST:
            return {
                ...state,
                getprojectdetilslist: action.payload,
            };
        case GET_LIKE_LIST:
            return {
                ...state,
                getlikstlist: action.payload,
            };
        case GET_MESSAGEDETAIL_LIST:
            return {
                ...state,
                getmessagedetilslist: action.payload,
            };
            case SET_ACCEPT_USER:
        return {
            ...state,
            acceptuserreduest: action.payload,
        };
        case GET_DELETE_USEREQUEST:
        return {
            ...state,
            getuserdeleterequst: action.payload,
        };
        case GET_ALL_JOBS:
        return {
            ...state,
            getalljobprojectlist: action.payload,
        };
        case GET_USER_LISTING:
        return {
            ...state,
            getallalluserlistinglist: action.payload,
        };
        
        case SET_APPLY_PROJECT:
        return {
            ...state,
            applyjobproject: action.payload,
        };
        // case GET_PROJECTDETAIL_LIST:
        // return {
        //     ...state,
        //     getprojectdetilslist: action.payload,
        // };
        // case GET_PROJECTDETAIL_LIST:
        // return {
        //     ...state,
        //     getprojectdetilslist: action.payload,
        // };
        // case GET_PROJECTDETAIL_LIST:
        // return {
        //     ...state,
        //     getprojectdetilslist: action.payload,
        // };
        // case GET_PROJECTDETAIL_LIST:
        // return {
        //     ...state,
        //     getprojectdetilslist: action.payload,
        // };

        case GET_POSTDETAIL_LIST:
            return {
                ...state,
                grtpostdetail: action.payload,
            };
        default:
            return state;
    }
};

export default Vendor;
