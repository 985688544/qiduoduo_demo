<template>
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
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  obs,
  obs1,
  obsComputed,
  obsRef,
  obsBox,
} from "../../commonApi/observable";

export default defineComponent({
  setup() {
    const value1 = ref(0);
    const num = ref(0);

    function handleSetDeep() {
      obs1.aa = { bb: value1.value };
      obsRef.value++;
      obsBox.set(num.value++);
      // console.log(obsComputed.value, "222");
    }
    return {
      obs,
      obs1,
      value1,
      obsComputed,
      obsRef,
      obsBox: obsBox.get(),
      handleSetDeep,
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
