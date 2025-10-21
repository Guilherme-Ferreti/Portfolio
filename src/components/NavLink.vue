<template>
  <li>
    <AppLink
      class="size-2.5 rounded-full"
      :to="to"
      :icon="icon"
      color="secondary"
    />
  </li>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';
import AppLink from './AppLink.vue';

defineProps<{
  icon: unknown;
  to: RouteLocationRaw;
}>();
</script>
