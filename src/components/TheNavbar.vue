<script setup lang="ts">
import { IconHomeFilled } from '@tabler/icons-vue';
import NavLink from './NavLink.vue';

defineEmits<{
  'toggle-sidebar': [];
}>();
</script>

<template>
  <nav
    class="flex items-center bg-gray-100 h-4.5 p-[var(--spacing-screen-padding)] lg:min-h-screen lg:items-start"
  >
    <button
      class="lg:hidden mr-1"
      type="button"
      @click="$emit('toggle-sidebar')"
    >
      Menu
    </button>
    <ul class="flex gap-1 lg:flex-col">
      <NavLink
        to="#"
        :icon="IconHomeFilled"
      />
      <NavLink
        to="#"
        :icon="IconHomeFilled"
      />
    </ul>
  </nav>
</template>
