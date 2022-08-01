<template>
  <!-- 专门用于将 ViewModel 与输入控件做绑定的桥接组件 适用于一些没有复杂操作的组件 比如：【input,inputNumber】-->
  <FormProvider :form="form">
    <Field
      name="input"
      :component="[Input, { placeholder: '请输入', name: 'File1' }]"
    ></Field>
  </FormProvider>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { Input } from "ant-design-vue";
import { createForm } from "@formily/core";
import { Field, FormProvider } from "@formily/vue";

export default defineComponent({
  components: {
    Field,
    FormProvider,
  },
  setup() {
    const form = createForm();
    const value = ref<number>(10);
    return {
      form,
      Input,
      value,
    };
  },
});
</script>
