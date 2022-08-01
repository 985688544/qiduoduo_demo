import { observable, autorun } from "@formily/reactive";

/**
 *  总结: 用来做热更新
 */
export const val1 = observable({
  value: 134,
});

autorun(() => {
  // 在 autorun 中用于创建持久引用数据，仅仅只会受依赖变化而重新执行 memo 内部函数
  const val2 = autorun.memo(() =>
    observable({
      value: 0,
    })
  );
  console.log(val1.value, val2.value++);

  //在 autorun 中用于响应 autorun 第一次执行的下一个微任务时机与响应 autorun 的 dispose
  autorun.effect(() => {
    console.log("初始化", val2.value);
    val2.value++;
  }, []);

});
