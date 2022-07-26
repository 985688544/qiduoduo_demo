// model 模式， 自定义生命computed， observable

import { model, autorun } from "@formily/reactive";

// 简易数据绑定模型
export const obs = model({
  aa: 123,
  bb: 344,
  get cc() {
    return this.aa + this.bb;
  },

  updated(aa, bb) {
    this.aa = aa;
    this.bb = bb;
  },
});

autorun(() => {
  console.log(obs.cc, "自动声明");
});
