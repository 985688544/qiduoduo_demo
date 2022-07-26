import { observable, autorun } from "@formily/reactive";

// 创建深劫持deep
export const obs = observable({
  aa: {
    bb: 123,
  },
});

// 创建浅劫持shallow
export const obs1 = observable.shallow({
  aa: {
    bb: 12,
  },
});

// 计算缓存computed 【适用于第一次渲染的数据不怎么进行变化的】
export const obsComputed = observable.computed(() => obs.aa.bb + obs1.aa.bb);

// 创建引用劫持对象
export const obsRef = observable.ref<number>(1);

// 类似ref， 只是读写数据是通过get/set 方法
export const obsBox = observable.box<number>(1);

// 热更新函数【内部接收一个回调函数】
autorun(() => {
  //   console.log("深劫持", obs.aa.bb);
  //   console.log("浅劫持", obs1);
  //   console.log("计算属性", obsComputed);
  //   console.log("引用对象", obsRef.value);
  //   console.log("box", obsBox);

  // autorun.memo 创建持久引用数据，受依赖触发！类似react的useEffect、useCallback等hook函数
  const obs2 = autorun.memo(() =>
    observable({
      bb: 11,
    })
  );
  console.log(obs1.aa.bb, obs2.bb++, "持久化");
});
