import axios from "axios";

import {
  API_NOTIFICATION_MESSAGES,
  SERVICE_URLS,
} from "../constants/config.js";

const API_URL = "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000, 
  headers: {
    "content-type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  function (config) {  
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    // Stop global loader here
    return processResponse(response);
  },
  function (error) {
    // Stop global loader here
    return Promise.reject(ProcessError(error));
  }
);
const processResponse = (response) => {
  if (response?.status === 200) {
    return { isSuccess: true, data: response.data };
  } else {
    return {
      isFailure: true,
      status: response?.status,
      msg: response?.msg,
      code: response?.code,
    };
  }
};
const ProcessError = async (error) => {
 if(error.response) {
  console.log('ERROR IN RESPONSE: ' , error.toJSON());
  return {
    isError : true,
    msg : API_NOTIFICATION_MESSAGES.responseFailure,
     code : error.response.status
  }
 } else if(error.request) {
  console.log('ERROR IN REQUEST: ' , error.toJSON());
  return {
    isError : true,
    msg : API_NOTIFICATION_MESSAGES.responseFailure,
     code : ""
  }
 } else {
  console.log('ERROR IN NETWORK: ' , error.toJSON());
  return {
    isError : true,
    msg : API_NOTIFICATION_MESSAGES.networkError,
     code : ""
  }
 }
};

const API = {};

for (const [key, value] of Object.entries(SERVICE_URLS)) {
  API[key] = (body, showUploadProgress, showDownloadProgress) =>
    axiosInstance({
      method: value.method,
      url: value.url,
      data: body,
      responseType: value.responseType,
      onUploadProgress: function (progressEvent) {
        if (showUploadProgress) {
          let percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showUploadProgress(percentCompleted);
        }
      },
      onDownloadProgress: function (progressEvent) {
        if (showDownloadProgress) {
          let percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showDownloadProgress(percentCompleted);
        }
      },
    });
}

export { API };

 export const loadUser = async (id)=>{
  try{
       return await axios.get(`${API_URL}/${id}`)
  }catch(error){
    console.log("Error while calling getUser api", error)
  }
 }

 export const editUserData = async (user, id)=>{
  try{
       return await axios.put(`${API_URL}/${id}`, user)
  }catch(error){
    console.log("Error while calling getUser api", error)
  }
 }
 export const deleteUser = async (id)=>{
  try{
       return await axios.delete(`${API_URL}/${id}`)
  }catch(error){
    console.log("Error while calling getUser api", error)
  }
 }