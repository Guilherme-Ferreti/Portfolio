<template>
  <li>
    <RouterLink
      class="grid place-items-center size-2.5 rounded-full bg-gray-500 [&.router-link-active]:bg-primary [&.router-link-active]:text-dark"
      :to="to"
    >
      <component
        class="size-[1.25rem]"
        :is="icon"
      />
    </RouterLink>
  </li>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';

defineProps<{
  icon: unknown;
  to: RouteLocationRaw;
}>();
</script>
