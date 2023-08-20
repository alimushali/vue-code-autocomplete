<template>
  <div class="main-window">
    <args-component
      :template="'CASE <% 0 %> WHEN <% 1 %> THEN <% 2 %> ELSE <% 3 %> END'"
    ></args-component>
    <args-component
      :template="'<% 0 %> + <% 1 %>'"
    ></args-component>
    <args-component
      :template="'POW(<% 0 %>, <% 1 %>)'"
    >
      <template #1>
        <h2>LOOOL</h2>
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