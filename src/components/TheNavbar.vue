<script setup lang="ts">
import { useLayoutStore } from '@/stores/layout';
import { IconHomeFilled } from '@tabler/icons-vue';
import { useTemplateRef, watch } from 'vue';
import NavLink from './NavLink.vue';

const layoutStore = useLayoutStore();

const openSidebarButtonRef = useTemplateRef<HTMLButtonElement>('open-sidebar-button');

watch(
  () => layoutStore.sidebarIsOpen,
  (newValue) => {
    if (openSidebarButtonRef.value && !newValue) {
      setTimeout(() => openSidebarButtonRef.value!.focus());
    }
  },
);
</script>

<template>
  <nav
    class="flex items-center bg-gray-100 h-4.5 p-[var(--spacing-screen-padding)] lg:min-h-screen lg:items-start"
  >
    <button
      class="lg:hidden mr-1 cursor-pointer"
      type="button"
      aria-label="Open sidebar"
      @click="layoutStore.sidebarIsOpen = true"
      :aria-expanded="layoutStore.sidebarIsOpen"
      ref="open-sidebar-button"
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
