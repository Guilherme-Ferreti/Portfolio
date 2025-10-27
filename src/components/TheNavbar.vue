<script setup lang="ts">
import { useLayoutStore } from '@/stores/layout';
import {
  IconBookFilled,
  IconBriefcaseFilled,
  IconCodeCircle2Filled,
  IconHomeFilled,
} from '@tabler/icons-vue';
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
        :to="{ name: 'home' }"
        :icon="IconHomeFilled"
        v-tooltip.left="'Home'"
        aria-label="Home"
      />
      <NavLink
        :to="{ name: 'home', hash: '#skills' }"
        :icon="IconCodeCircle2Filled"
        v-tooltip.left="'Skills'"
        aria-label="Skills"
      />
      <NavLink
        :to="{ name: 'home', hash: '#work-history' }"
        :icon="IconBriefcaseFilled"
        v-tooltip.left="'Work History'"
        aria-label="Work History"
      />
      <NavLink
        :to="{ name: 'home', hash: '#education-history' }"
        :icon="IconBookFilled"
        v-tooltip.left="'Education History'"
        aria-label="Education History"
      />
    </ul>
  </nav>
</template>
