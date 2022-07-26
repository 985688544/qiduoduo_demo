<template>
  <h1>Formily响应式APi</h1>
  <ul class="test content1">
    <h3>reaction</h3>
    <li>
      <div class="label">autorun的effect:</div>
      <input v-model.number="value1" @input="handleAutoRunVal" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref, unref } from "vue";
import { obs } from "../../components/reaction";

export default defineComponent({
  setup() {
    const value1 = ref<number>(0);

    // 实现与forimly进行数据绑定
    function handleAutoRunVal() {
      obs.aa = unref(value1); //数据更新，触发;
      //   obs.aa = 222 //数据不更新、不触发;
    }

    return {
      handleAutoRunVal,
      value1,
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
