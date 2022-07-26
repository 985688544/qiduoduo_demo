import { observable, autorun } from "@formily/reactive";

export const obs = observable({
  aa: {
    bb: 123,
  },
});

autorun(() => {
  console.log(obs.aa.bb);
});
