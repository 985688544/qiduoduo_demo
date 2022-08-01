<template>
  <FormProvider :form="form">
    <ObjectField
      name="iobject"
      title="对象节点容器"
      :reactions="
        (field) => {
          field.title = (field.value && field.value.date) || field.title;
        }
      "
    >
      <Field name="date" title="日期" :component="[DatePicker]" />
      <Field name="input" title="输入框" :component="[Input]" />
    </ObjectField>
  </FormProvider>
</template>
<script lang="ts" setup>
import { FormProvider, ObjectField, Field } from "@formily/vue";
import { createForm } from "@formily/core";
import { Input, DatePicker } from "ant-design-vue";
const form = createForm();
</script>
