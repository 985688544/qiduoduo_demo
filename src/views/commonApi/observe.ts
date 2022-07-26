import { observable, observe } from "@formily/reactive";
// 与autorun/ reaction 不一样， 使用observe 会舰艇observable对象的所有操作, 支持深度或浅度

export const obs = observable({
  aa: 233,
});

observe(obs, (change) => {
  console.log(change);
});
