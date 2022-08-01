import type { Component } from "vue";
import { defineComponent } from "vue";
import { merge, each } from "@formily/shared";
import { h } from "@formily/vue";

type ListenersTransformRules = Record<string, string>;

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

export function composeExport<T0 extends {}, T1 extends {}>(
  s0: T0,
  s1: T1
): T0 & T1 {
  return Object.assign(s0, s1)
}