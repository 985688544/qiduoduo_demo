<template>
  <FormProvider :form="form">
    <SchemaField>
      <SchemaObjectField
        name="Custom"
        x-component="Custom"
        :x-component-props="{
          name: 'INput',
          style: {
            width: '100px',
          },
          schema: {
            type: 'object',
            properties: {
              input: {
                type: 'string',
                default: '测试是否绑定',
                'x-component': 'Input',
                style: {
                  width: 100,
                },
              },
            },
          },
        }"
      />
    </SchemaField>
  </FormProvider>
</template>
<script lang="ts">
import { FormProvider, createSchemaField, RecursionField } from "@formily/vue";
import { defineComponent, h, toRaw, unref } from "vue";
import { Input } from "ant-design-vue";
import { createForm } from "@formily/core";

const Custom = {
  functional: true,
  render(cur) {
    console.log(cur, "cur");
    return h(RecursionField, {
      props: {
        //
        name: cur.$attrs?.name,
        schema: cur.$attrs?.schema,
        style: cur.$attrs?.style,
        onlyRenderproperties: true,
      },
    });
  },
};

const { SchemaField, SchemaObjectField } = createSchemaField({
  components: {
    Custom,
    Input,
  },
});

export default defineComponent({
  components: { FormProvider, SchemaField, SchemaObjectField },
  setup() {
    return {
      form: createForm(),
    };
  },
});
</script>
