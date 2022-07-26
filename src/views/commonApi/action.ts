import { action, observable } from "@formily/reactive";

// 事件订阅【批量处理事件】

const obs = observable({
  value: 123,
  value1: 233,
});

export const method = action.bound((val: number) => {
  setValue(val);
  setValue1(val);
});

function setValue(val: number) {
  obs.value = val;
  console.log(obs.value, "update--value");
}
function setValue1(val: number) {
  obs.value1 = val;
  console.log(obs.value1, "update--value1");
}
