import { observable, toJS, autorun } from "@formily/reactive";
// 深度递归将 observable 对象转换成普通 JS 对象

// 注意：如果对一个已经是 observable 的对象标记 markRaw，那么 toJS，是不会将它转换成普通对象的

const obs = observable({
  value: 1234,
  children: [
    {
      value: 233,
    },
  ],
});
const js = toJS(obs);

autorun(() => {
  console.log(js.children);
});
