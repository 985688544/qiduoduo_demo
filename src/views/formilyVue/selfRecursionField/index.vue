<template>
  <FormProvider :form="form">
    <SchemaField>
      <SchemaArrayField name="custom" x-component="ArrayItems">
        <SchemaObjectField>
          <SchemaStringField :name="0" x-component="Input" />
        </SchemaObjectField>
      </SchemaArrayField>
    </SchemaField>
  </FormProvider>
</template>

<script lang="ts">
import { defineComponent, h, render } from "vue";
import { Input, Button, Space, Tag, Card, Row } from "ant-design-vue";
import { createForm } from "@formily/core";
import {
  FormProvider,
  createSchemaField,
  RecursionField,
  useField,
  useFieldSchema,
  ISchema,
} from "@formily/vue";
import { observer } from "@formily/reactive-vue";
import Buttons from "./components/buttons.vue";

const isIndexComponent = (schema: ISchema) => {
  return schema["x-component"]?.indexOf("Index") > -1;
};
const ArrayItems = observer(
  defineComponent({
    setup(_, { attrs }) {
      const fieldRef = useField();
      const schemaRef = useFieldSchema();

      return () => {
        const field: any = fieldRef.value;
        const schema = schemaRef.value;
        const dataSource = Array.isArray(field.value)
          ? field.value
          : [{ title: "112" }];

        const items = dataSource?.map((item, index) => {
          const items = Array.isArray(schema.items)
            ? schema.items[index] || schema.items[0]
            : schema.items;

          const title = h(
            "span",
            {},
            {
              default: () => [
                h(
                  RecursionField,
                  {
                    schema: items,
                    name: index,
                    filterProperties: (schema: ISchema) => {
                      if (!isIndexComponent(schema)) return false;
                      return true;
                    },
                    onlyRenderProperties: true,
                  },
                  {}
                ),
                attrs.title || field.title,
              ],
            }
          );

          const content = h(
            RecursionField,
            {
              schema: items,
              name: index,
              filterProperties: (schema: ISchema) => {
                if (isIndexComponent(schema)) return false;
                return true;
              },
            },
            {}
          );
          return h(
            "div",
            {
              key: Date.now(),
              index,
              record: item,
            },
            {
              default: () =>
                h(
                  Card,
                  {
                    shadow: "never",
                    ...attrs,
                  },
                  {
                    default: () => [content],
                    header: () =>
                      h(
                        Row,
                        {
                          type: "flex",
                          justify: "space-between",
                        },
                        {
                          default: () => [title],
                        }
                      ),
                  }
                ),
            }
          );
        });

        const button = h(Buttons, {
          onClicks() {
            field.push({ id: Date.now() });
          },
        });
        return h("div", [items, button]);
      };
    },
  })
);

const { SchemaField, SchemaStringField, SchemaArrayField, SchemaObjectField } =
  createSchemaField({
    components: {
      ArrayItems,
      Input,
      Card,
    },
  });

export default {
  components: {
    FormProvider,
    SchemaField,
    SchemaStringField,
    SchemaArrayField,
    SchemaObjectField,
  },
  data() {
    return {
      form: createForm(),
    };
  },
};
</script>
