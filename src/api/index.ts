// import { Result } from "/#/global";
import request from "/@/utils/http";

interface Api<T = any> {
  login: (arg0: T) => Promise<T>;
  getUerInfo: () => Promise<T>;
}
class api {
  public static SYS: Api = {
    login: (data: any) => {
      return request({
        url: "/api/user/login",
        method: "post",
        data,
      });
    },
    getUerInfo: () => {
      return request({
        url: "/api/getUserInfo",
        method: "get",
      });
    },
  };
}

export { api };
