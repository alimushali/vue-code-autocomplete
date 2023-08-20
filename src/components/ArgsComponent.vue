<template>
  <div class="args-component">
    <template v-for = "(arg, i) in functonTemplates" :key="i">
      <div class="args-component--subtemplate">
        {{ arg }}
      </div>
      <slot :name="i" v-if="i + 1 < functonTemplates.length">
        <input type="text" />
      </slot>
    </template>
  </div>
</template>


<script lang="js">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "ArgsComponent",
  props: {
    template: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    text: "",
  }),
  computed: {
    functonTemplates() {
      return this.template.split(/<% [0-9] %>/);
    }
  }
});
</script>

<style scoped lang="scss">
.args-component {
  display: flex;
  &--subtemplate {
    color: blue;
  }
}
</style>