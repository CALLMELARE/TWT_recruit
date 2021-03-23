/*
 * @Author: TWT Studio
 * @Date: 2021-03-23 20:11:20
 * @LastEditTime: 2021-03-23 20:16:22
 * @Description: Wrapped axios
 */

import axios from "axios";
import qs from "querystring";
import router from "@/router";

const app_key = process.env.VUE_APP_KEY;
const app_secret = process.env.VUE_APP_SECRET;
const domain = process.env.VUE_APP_DOMAIN;

const service = axios.create({
  baseURL: process.env.VUE_APP_SERVER,
  transformRequest: [
    (oldData, config) => {
      if (!config["Content-Type"]) {
        config["Content-Type"] = "application/x-www-form-urlencoded";
        return qs.stringify(oldData);
      }
      switch (config["Content-Type"]) {
        case "multipart/form-data":
          return oldData;
        case "application/json":
          return JSON.stringify(oldData);
        default:
          return qs.stringify(oldData);
      }
    },
  ],
  timeout: 60000,
  headers: {
    domain,
    "Access-Control-Allow-Credentials": "true",
    ticket: window.btoa(`${app_key}.${app_secret}`),
  },
  withCredentials: true,
});

service.interceptors.request.use(
  (config) => {
    //   config.headers['token'] = getToken();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {},
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
