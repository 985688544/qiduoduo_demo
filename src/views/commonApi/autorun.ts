import { observable, autorun } from "@formily/reactive";

/**
 *  总结: 用来做热更新
 */
export const val1 = observable({
  value: 134,
});

autorun(() => {
  const val2 = autorun.memo(() =>
    observable({
      value: 0,
    })
  );
  console.log(val1.value, val2.value++);

  autorun.effect(() => {
    console.log("初始化", val2.value);
    val2.value++;
  }, []);
});
