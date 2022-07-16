import axios from "axios";
import { message } from "ant-design-vue";

const services = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: false,
  // 请求时长
  //   timeout: 1000 * 30,
});

services.interceptors.request.use(
  (config) => {
    config.headers["token"] = "qjndqkjnyav";
    return config;
  },
  () => {
    message.error("请求错误");
    return Promise.reject("请求出错");
  }
);

services.interceptors.response.use(
  (config) => {
    console.log(config);
    if (config.status === 200) {
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
