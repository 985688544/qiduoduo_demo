import { define, observable, autorun } from "@formily/reactive";

/**
 *  手动定义领域模型，可以指定具体属性的响应式行为，也可以指定某个方法为 batch 模式
 */
export class DomainModel {
  deep = { aa: 1 };
  shallow = {};
  box: any = 0;
  ref = "";

  constructor() {
    define(this, {
      deep: observable, //定义深度劫持响应式属性
      shallow: observable.shallow,// 定义浅劫持响应式属性
      box: observable.box, // 容器
      ref: observable.ref, // 定义引用劫持响应式属性
      computed: observable.computed, //定义计算属性
    });
  }

  get computed() {
    return this.deep.aa + this.box.get();
  }
  action(aa, box) {
    this.deep.aa = aa;
    this.box.set(box);
  }
}
