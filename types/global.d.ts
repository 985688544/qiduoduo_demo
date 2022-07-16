// import { ComponentPublicInstance, FunctionalComponent } from "vue";

declare module "*.ts";

declare module "*.vue" {
  import { defineComponent } from "vue";
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}
