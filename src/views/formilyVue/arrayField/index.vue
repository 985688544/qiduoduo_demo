<template>
  <FormProvider :form="form">
    <ArrayField
      :name="formRefs"
      :dataSource="[
        { label: '选项1', value: 1 },
        { label: '选项2', value: 2 },
      ]"
    >
      <template #default="{ field }">
        <div
          v-for="(item, index) in field.dataSource || []"
          :key="item.id"
          :style="{ marginBottom: '10px' }"
        >
          <Space>
            <span>{{ item.label }}</span>
            <Field
              :name="`${index}.value`"
              :value="item.field"
              :component="[Checkbox]"
            ></Field>
          </Space>
        </div>
      </template>
    </ArrayField>
  </FormProvider>
  <Button @click="handleSubmit">Submit</Button>
</template>

<script lang="ts" setup>
import { Checkbox, Space, Button, FormItem } from "ant-design-vue";
import { createForm } from "@formily/core";
import { FormProvider, ArrayField, Field } from "@formily/vue";

const formRefs = "arrayFrom";

const form = createForm();
const handleSubmit = () => {
  console.log(form, "form");
};
</script>
