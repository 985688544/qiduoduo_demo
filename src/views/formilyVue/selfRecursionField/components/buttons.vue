<template>
  <Button @click="handleAdd">Add</Button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Button } from "ant-design-vue";
export default defineComponent({
  components: {
    Button,
  },
  setup(_, { emit }) {
    const handleAdd = () => {
      emit("clicks", 2222);
    };

    return {
      handleAdd,
    };
  },
});
</script>
