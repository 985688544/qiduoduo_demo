<template>
  <h1>Formily响应式APi</h1>
  <ul class="test content1">
    <h3>define</h3>
    <li>
      <div class="label">define:</div>
      <input v-model.number="value1" @input="handleAutoRunVal" />
    </li>
  </ul>
</template>

<script lang="ts">
import { autorun } from "@formily/reactive";
import { defineComponent, ref } from "vue";
import { DomainModel } from "../../commonApi/define";

export default defineComponent({
  setup() {
    const value1 = ref<number>(0);

    function handleAutoRunVal() {
      const newModel = new DomainModel();

      newModel.action(1, 3);
      newModel.action(1, 4);
      newModel.action(1, 5);

      autorun(() => {
        console.log(newModel.computed, "newModel");
      });
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
