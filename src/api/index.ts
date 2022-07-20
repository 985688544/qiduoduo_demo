import request from "/@/utils/http";

class api {
  public static SYS = {
    login: (data: unknown) => {
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
