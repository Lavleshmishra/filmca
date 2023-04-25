import axios from 'axios';
import api from './Api';
import NetInfo from "@react-native-community/netinfo";


const APICalling = async (
  method,
  url,
  data = null,
  authToken = null,
  contentType = `application/json`,
) => {
  let configuration = null;
  let headers = {};
  if (authToken && authToken !== null) {
    headers = {
      Authorization: 'Bearer '+authToken,
      'Content-Type': data && data.constructor === FormData
        ? 'multipart/form-data'
        : 'application/json',
    };
  }
  let timeout = 90000;
  let apiResponse = {
    status: false,
    message: null,
    data: [],
    errorType:""
  };

  switch (method) {
    case 'GET':
      configuration = {
        method: 'get',
        url: url,
        timeout: timeout,
        headers: headers,
      };
      break;
    case 'POST':
      configuration = {
        method: 'post',
        url: url,
        timeout: timeout,
        headers: headers,
        data: data,
      };
      break;
    case 'PUT':
      configuration = {
        method: 'put',
        url: url,
        timeout: timeout,
        headers: headers,
        data: data,
      };
      break;
    default:
      break;
  }

  //console.log('api calling method.', configuration);
  

  await axios(configuration)
    .then((response) => {
      if (response.status === 200) {
        apiResponse.status = response?.status;
        apiResponse.message = null;
        //apiResponse.data = response?.data || [];        
        //apiResponse.data.token = response?.data?.access_token;
        apiResponse.data = response?.data || [];
        apiResponse.data = response?.data?.access_token
          ? {
            ...apiResponse?.data,
            token: response?.data?.access_token,
          }
          : response.data;
      } else {
        apiResponse.status = response?.status || false;
        apiResponse.message = response?.data?.message || 'Something went wrong';
        apiResponse.errorType = response?.data?.errorType || 'Something went wrong';
        apiResponse.data = [];
      }
    })
    .catch((error) => {
     
      console.log(
        '========= api error : response =========',
        error,
        error.response,
        // error.message,
      );

      apiResponse.status = false;
      apiResponse.data = [];
      if (error?.response?.status) {
        switch (error?.response?.status) {
          case 404:
            console.log("Server is not responding..")
            apiResponse.message = 'Server is not responding.';
            break;
          case 400:
          case 401:
          case 404:
          case 403:
          case 409:
          case 422:
          case 500:
            apiResponse.message = error?.response?.data?.message;
            apiResponse.errorType = error?.response?.data?.errorType;
            break;
          default:
            apiResponse.message = 'Something went wrong';
            apiResponse.errorType = error?.response?.data?.errorType;
            break;
        }
      } else {
        apiResponse.message = 'Something went wrong';
      }
    });
  //console.log("apiResponse===>", apiResponse)
  return apiResponse;
};

const utilise = {
  apiCalling: APICalling,
};


export default utilise;
