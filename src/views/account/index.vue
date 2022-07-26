<template>
  <h1>账户管理{{ autorunVal }}</h1>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const autorunVal = ref<number>(0);
    return {
      autorunVal,
    };
  },
});
</script>
<style scoped lang="less"></style>
