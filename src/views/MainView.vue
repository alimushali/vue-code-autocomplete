<template>
  <div class="main-window">
    <args-component
      :template="'CASE <% 0 %> WHEN <% 1 %> THEN <% 2 %> ELSE <% 3 %> END'"
    >
      <template v-for="(arg, i) in args" v-slot:[i]>
        <input type="text" :key="i" :placeholder="`placeholder ${i}`" />
      </template>
    </args-component>
   </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import ArgsComponent from '../components/ArgsComponent.vue';
export default defineComponent({
  components: { ArgsComponent },
  data: () => ({
    text: "",
    args: ["text", "text", "text", "text"]
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