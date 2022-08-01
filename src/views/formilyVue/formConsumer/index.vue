<template>
  <FormProvider :form="form"> </FormProvider>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import { FieldEffectHooks, FromEffectHooks } from "./index";

export default defineComponent({
  setup() {
    const form = new FromEffectHooks();
    form.init();

    const field = new FieldEffectHooks();
    field.init();

    return { form };
  },
});
</script>
