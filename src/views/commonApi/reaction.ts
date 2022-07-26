import { batch, observable, reaction, autorun } from "@formily/reactive";

// 做类似于watcher，消息订阅模式

export const obs = observable({
  aa: 1,
  bb: 22,
});

// 启用热更新
const dispatch = autorun(() => {
  reaction(
    () => {
      //   console.log(obs.aa, "2333");
      return obs.aa > 0;
    }, // tracker: () => T
    (newV, oldV) => {
      console.log(newV, "new");
      console.log(oldV, "oldV");
    }, // subscriber?: (newValue: T, oldValue: T) => void,
    {
      name: "initObs", // 名称
      fireImmediately: false, //是否第一次默认触发，绕过脏检查
    }
  );

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
