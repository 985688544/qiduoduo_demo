<template>
  <div>
    <label>observe更新:</label>
    <input v-model="obs.aa.bb" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { obs } from "../components/observable";
export default defineComponent({
  setup() {
    obs.aa.bb = 1112;
    return {
      obs,
    };
  },
});
</script>
