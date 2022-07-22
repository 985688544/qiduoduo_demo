// import { ComponentPublicInstance, FunctionalComponent } from "vue";

export declare module "*.ts";

export declare module "*.vue" {
  import { defineComponent } from "vue";
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

export interface Result<T = any> {
  code: number;
  type: "success" | "error" | "warning";
  result: T;
  message: string;
}
