<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="navbar">
    <RouterLink to="/">MainWindow</RouterLink>
  </div>
  <RouterView class="router-view"/>
</template>

<style lang="scss">
.navbar {
  display: flex;
  a.router-link-exact {
    padding: 5px 10px;
    color: var(--color-text);
    &-active {
      color: var(--color-text);
    }
  }
}
</style>
