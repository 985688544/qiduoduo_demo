import { define, observable, autorun } from "@formily/reactive";

/**
 *  自定义一个领域模型
 */
export class DomainModel {
  deep = { aa: 1 };
  shallow = {};
  box: any = 0;
  ref = "";

  constructor() {
    define(this, {
      deep: observable,
      shallow: observable.shallow,
      box: observable.box,
      ref: observable.ref,
      computed: observable.computed,
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
