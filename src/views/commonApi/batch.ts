import { observable, batch, autorun } from "@formily/reactive";

/**
 *用来做初始化：类似于created｜ mounted
 */

const obs = observable({
  aa: 22,
});

batch(() => {
  batch.endpoint(() => {
    console.log("绑定注册结束执行？？");
  });
  batch.scope(() => {
    console.log("2", obs.aa);
    obs["aa"] = 1;
    obs["bb"] = 22233;

  });
  batch.scope(() => {
    console.log("2", obs.aa);
    obs.aa = 3344;
    console.log("1");
  });
});

export const dispose = autorun(() => {
  console.log(obs.aa, obs.bb, obs.cc);
});
