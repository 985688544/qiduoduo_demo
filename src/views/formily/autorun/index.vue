<template>
  <h1>Formily响应式APi</h1>
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
import { val1 } from "../../components/autorun";

export default defineComponent({
  setup() {
    const autorunVal = ref<number>(val1.value);

    // 实现与forimly进行数据绑定
    function handleAutoRunVal() {
      val1.value = unref(autorunVal);
    }

    return {
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
