<template>
  <!-- SchemaField 组件是专门用于解析JSON-Schema动态渲染表单的组件。 在使用 SchemaField 组件的时候，需要通过 createSchemaField 工厂函数创建一个 SchemaField 组件 -->
  <FormProvider :form="form">
    <SchemaField>
      <SchemaStringField name="input" x-component="Input" />
      <SchemaDateField name="date" x-component="DatePicker" />
      <!-- <SchemaStringField name="Switch" x-component="Switch" /> -->
      <SchemaStringField
        name="select"
        title="选择框"
        x-decorator="FormItem"
        x-component="Select"
        :enum="[
          {
            label: '选项1',
            value: 1,
          },
          {
            label: '选项2',
            value: 2,
          },
        ]"
        :required="true"
      />

      <!-- <SchemaBooleanField
        name="switch"
        x-component="Switch"
      ></SchemaBooleanField> -->
    </SchemaField>
    <br />
  </FormProvider>
  <a-space>
    <a-button type="" @click="handleSee">查看value</a-button>
  </a-space>
</template>

<script lang="ts">
// name 属性一定要注意不可以重复，name重复，filed组件不会渲染
// x-component 用来与createSchemaField中的component对应

import { FormProvider, createSchemaField } from "@formily/vue";
import { defineComponent, h } from "vue";
import { createForm } from "@formily/core";
import { Input, DatePicker, Switch, Select, FormItem } from "ant-design-vue";

const { SchemaField, SchemaStringField, SchemaDateField, SchemaBooleanField } =
  createSchemaField({
    components: {
      Input,
      DatePicker,
      Switch,
      Select,
      FormItem,
    },
  });

export default defineComponent({
  components: {
    FormProvider,
    SchemaField,
    SchemaStringField,
    SchemaDateField,
    SchemaBooleanField,
  },
  setup() {
    const form = createForm();
    const handleSee = () => {
      const name = form.values;
      console.log(name, "22");
    };
    return {
      form,
      handleSee,
    };
  },
});
</script>
<style scoped>
li {
  margin-bottom: 10px;
}
</style>
