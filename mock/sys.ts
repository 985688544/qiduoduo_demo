import { MockMethod } from "vite-plugin-mock";
import { MenuOptions } from "./Menu";
import {
  resultError,
  resultSuccess,
  getRequestToken,
  requestParams,
} from "./_util";

export function createFakeUserList() {
  return [
    {
      userId: "1",
      username: "jack",
      realName: "guolinjie",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640",
      desc: "manager",
      password: "redballoon",
      token: "fakeToken1",
      homePath: "/dashboard/analysis",
      roles: [
        {
          roleName: "Super Admin",
          value: "super",
        },
      ],
      menus: MenuOptions,
    },
    {
      userId: "2",
      username: "test",
      password: "123456",
      realName: "test user",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=339449197&s=640",
      desc: "tester",
      token: "fakeToken2",
      homePath: "/dashboard/workbench",
      roles: [
        {
          roleName: "Tester",
          value: "test",
        },
      ],
    },
  ];
}
export default [
  // mock user login
  {
    url: "/api/user/login",
    timeout: 200,
    method: "post",
    response: ({ body }) => {
      const { username, password } = body;
      const checkUser = createFakeUserList().find(
        (item) => item.username === username && password === item.password
      );
      if (!checkUser) {
        return resultError("Incorrect account or password！");
      }
      const {
        userId,
        username: _username,
        token,
        realName,
        desc,
        roles,
      } = checkUser;
      return resultSuccess({
        roles,
        userId,
        username: _username,
        token,
        realName,
        desc,
      });
    },
  },
  {
    url: "/api/getUserInfo",
    method: "get",
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) return resultError("Invalid token");
      const checkUser = createFakeUserList().find(
        (item) => item.token === token
      );
      if (!checkUser) {
        return resultError(
          "The corresponding user information was not obtained!"
        );
      }
      return resultSuccess(checkUser);
    },
  },
] as MockMethod[];
