import { observable, autorun, raw } from "@formily/reactive";
// 从 observable 对象中获取源数据，通常情况下并不推荐使用该 API 【类似vue的reactive&ref】

const obs = observable({
  bb: 22,
});

autorun(() => {
  console.log(raw(obs), "获取对象中的源数据");
});
