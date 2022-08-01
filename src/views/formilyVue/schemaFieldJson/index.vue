<template>
  <FormProvider :form="form">
    <SchemaField
      :schema="schema"
      :scope="{ useAsyncDataSource, transformAddress }"
    >
    </SchemaField>
  </FormProvider>
</template>
<script lang="ts" setup>
import { createForm } from "@formily/core";
import { defineComponent } from "vue";
import { FormProvider, createSchemaField } from "@formily/vue";
import { Input, Cascader } from "ant-design-vue";
import { action } from "@formily/reactive";

const form = createForm();
const transformAddress = (data = {}) => {
  return Object.entries(data).reduce(
    (
      buf,
      [key, value]: [
        string,
        (
          | {
              name: string;
              code: string;
              cities: number;
              districts: number;
            }
          | string
        )
      ]
    ) => {
      if (typeof value === "string")
        return buf.concat({
          label: value,
          value: key,
        });
      const { name, code, cities, districts } = value;
      const _cities = transformAddress(cities);
      const _districts = transformAddress(districts);
      return buf.concat({
        label: name,
        value: code,
        children: _cities.length
          ? _cities
          : _districts.length
          ? _districts
          : undefined,
      });
    },
    []
  );
};

const useAsyncDataSource = (url, transform) => {
  console.log(url, "ww");
  return (field) => {
    field.loading = true;
    fetch(url)
      .then((res) => {
        res.json();
      })
      .then(
        action.bound((data) => {
          field.dataSource = transform(data);
          console.log(field.dataSource);
          field.loading = false;
        })
      );
  };
};

const schema = {
  type: "object",
  properties: {
    input: {
      type: "string", // 类型
      title: "yi", // 标题
      format: {},
      uniqueItems: true, // 是否校验重复
      default: "2221", // 默认值
      description: "字段描述",
      "x-read-only": false,
      "x-component": "Input",
    },
    cascader: {
      type: "string",
      title: "地址选择",
      "x-decorator": "FormItem",
      "x-component": "Cascader",
      "x-component-props": {
        style: {
          width: "240px",
        },
      },
      "x-reactions": [
        '{{useAsyncDataSource("//unpkg.com/china-location/dist/location.json",transformAddress)}}',
      ],
      dataSource: [
        {
          label: "北京市",
          value: "110000",
          children: [
            {
              label: "北京市",
              value: "110000",
              children: [
                {
                  label: "东城区",
                  value: "110101",
                },
                {
                  label: "西城区",
                  value: "110102",
                },
                {
                  label: "朝阳区",
                  value: "110105",
                },
                {
                  label: "丰台区",
                  value: "110106",
                },
                {
                  label: "石景山区",
                  value: "110107",
                },
                {
                  label: "海淀区",
                  value: "110108",
                },
                {
                  label: "门头沟区",
                  value: "110109",
                },
                {
                  label: "房山区",
                  value: "110111",
                },
                {
                  label: "通州区",
                  value: "110112",
                },
                {
                  label: "顺义区",
                  value: "110113",
                },
                {
                  label: "昌平区",
                  value: "110114",
                },
                {
                  label: "大兴区",
                  value: "110115",
                },
                {
                  label: "怀柔区",
                  value: "110116",
                },
                {
                  label: "平谷区",
                  value: "110117",
                },
                {
                  label: "密云区",
                  value: "110118",
                },
                {
                  label: "延庆区",
                  value: "110119",
                },
              ],
            },
          ],
        },
      ],
    },
  },
};

const { SchemaField } = createSchemaField({
  components: {
    Input,
    Cascader,
  },
});
</script>
