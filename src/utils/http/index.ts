import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { message } from "ant-design-vue";
import { Result } from "/#/global";

const services = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: false,
  // 请求时长
  //   timeout: 1000 * 30,
});

services.interceptors.request.use(
  (config): AxiosRequestConfig => {
    config.headers["token"] = sessionStorage.getItem("token") || "";
    config.headers["authorization"] = sessionStorage.getItem("token") || "";
    return config;
  },
  () => {
    message.error("请求错误");
    return Promise.reject("请求出错");
  }
);

services.interceptors.response.use(
  (config: AxiosResponse<any>) => {
    if (config.status === 200) {
      if (config && config.data && config.data.code < 0) {
        message.error(config.data.message);
        return Promise.reject(config.data.message);
      }

      return Promise.resolve(config.data);
    } else {
      message.error("denlucuowu");
      return Promise.reject("请求不正常");
    }
  },
  () => {
    return Promise.reject("请求出错");
  }
);

export default services;
