<template>
  <div class="main-window">
    <input type="text" class="main-window--text" />
   </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data: () => ({
    text: "",
  }),
});
</script>

<style scoped lang="scss">
.main-window {
  &--text {
    width: 100%;
  }
}
</style>