import { batch, observable, reaction, autorun } from "@formily/reactive";

export const obs = observable({
  aa: 1,
  bb: 22,
});

// 启用热更新
const dispatch = autorun(() => {
  reaction(() => {
    // 类似watch！ 但是只有数据发生变化触发
    console.log(obs.aa, "2333");
    return obs.aa > 0;
  });
  batch(() => {
    console.log("数据变化");
  });
});

// 没有启用热更新
// const dispatch = reaction(() => {
//   console.log(obs.aa + obs.bb, "2333");
//   return obs.aa + obs.bb;
// });

dispatch();
