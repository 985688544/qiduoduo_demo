import { isSupportObservable, observable } from "@formily/reactive";
// 判断某个对象是否是 Annotation

const obs = observable({
  value: 123,
});

function isObserve(): boolean {
  const isObs = isSupportObservable(obs);
  return isObs;
}

isObserve();
