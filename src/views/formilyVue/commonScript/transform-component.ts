import type { Component } from "vue";
import { defineComponent } from "vue";
import { merge, each } from "@formily/shared";
import { h } from "@formily/vue";

type ListenersTransformRules = Record<string, string>;

/**
 * 
 * @param tag 标签
 * @param transformRules  转换规则
 * @param defaultProps // 默认参数
 * @returns 
 */
export const transformComponent = <T extends Record<string, any>>(
  tag: any,
  transformRules?: ListenersTransformRules,
  defaultProps?: Partial<T>
): Component<T> | any => {
  return defineComponent({
    setup(props, { attrs, slots }) {
      return () => {
        let data = {
          ...attrs,
        };
        if (transformRules) {
          const listeners = transformRules;
          each(listeners, (event, extract) => {
            // 事件
            data[`on${event[0].toUpperCase()}${event.slice(1)}`] =
              attrs[`on${extract[0].toUpperCase()}${extract.slice(1)}`];
          });
        }
        if (defaultProps) {
          data = merge(defaultProps, attrs);
        }
        return h(tag, data, slots);
      };
    },
  });
};
