<template>
  <h1>Formily响应式APi</h1>
  <ul class="test content1">
    <h3>observe</h3>
    <li>
      <div class="label">observe深度劫持:</div>
      <input v-model.number="obs.aa.bb" />
    </li>
    <li>
      <div class="label">observe浅劫持:</div>
      <input v-model.number="value1" @input="handleSetDeep" />
    </li>
    <li>
      <div class="label">observe的计算属性:</div>
      <div>{{ obsComputed.value }}</div>
    </li>
    <li>
      <div class="label">observe的引用对象Ref:</div>
      <div>{{ obsRef.value }}</div>
    </li>
    <li>
      <div class="label">observe的box:</div>
      <div>{{ obsBox }}</div>
    </li>
  </ul>
  <ul class="test content1">
    <h3>autorun</h3>
    <li>
      <div class="label">autorun的effect:</div>
      <input v-model.number="autorunVal" @input="handleAutoRunVal" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref, unref } from "vue";
import {
  obs,
  obs1,
  obsComputed,
  obsRef,
  obsBox,
} from "../components/observable";

import { val1 } from "../components/autorun";

export default defineComponent({
  setup() {
    const value1 = ref<number>(0);
    const num = ref<number>(0);
    const autorunVal = ref<number>(val1.value);

    function handleSetDeep() {
      obs1.aa = { bb: value1.value };
      obsRef.value++;
      obsBox.set(num.value++);
      // console.log(obsComputed.value, "222");
    }

    // 实现与forimly进行数据绑定
    function handleAutoRunVal() {
      val1.value = unref(autorunVal);
    }

    return {
      obs,
      obs1,
      value1,
      obsComputed,
      obsRef,
      obsBox: obsBox.get(),
      handleSetDeep,
      handleAutoRunVal,
      autorunVal,
    };
  },
});
</script>
<style scoped lang="less">
.test {
  border: 1px solid #515151;
  padding: 10px;
  margin-bottom: 20px;
  li {
    display: flex;
    margin-bottom: 10px;
  }
  .label {
    width: 140px;
  }
}
</style>
