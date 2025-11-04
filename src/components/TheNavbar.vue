<template>
  <nav
    class="flex items-center bg-gray-100 h-4.5 p-(--spacing-screen-padding) lg:min-h-screen lg:items-start"
  >
    <button
      class="lg:hidden mr-1 cursor-pointer"
      type="button"
      aria-label="Open sidebar"
      @click="layoutStore.sidebarIsOpen = true"
      :aria-expanded="layoutStore.sidebarIsOpen"
      ref="open-sidebar-button"
      v-tooltip.left="'Guilherme\'s profile'"
    >
      <img
        class="rounded-full size-2.25 object-cover object-center"
        src="@/assets/images/profile-picture.png"
        alt="Guilherme's profile picture"
      />
    </button>
    <ul class="flex gap-1 lg:flex-col">
      <NavLink
        :to="{ name: 'home' }"
        :icon="IconHomeFilled"
        :isActive="layoutStore.currentlyVisibleSectionsIds.includes(AppSectionId.HERO)"
        v-tooltip.left="'Home'"
        aria-label="Home"
      />
      <NavLink
        :to="{ name: 'home', hash: `#${AppSectionId.SKILLS}` }"
        :icon="IconCodeCircle2Filled"
        :isActive="layoutStore.currentlyVisibleSectionsIds.includes(AppSectionId.SKILLS)"
        v-tooltip.left="'Skills'"
        aria-label="Skills"
      />
      <NavLink
        :to="{ name: 'home', hash: `#${AppSectionId.PROJECTS}` }"
        :icon="IconDeviceDesktopFilled"
        :isActive="layoutStore.currentlyVisibleSectionsIds.includes(AppSectionId.PROJECTS)"
        v-tooltip.left="'Projects'"
        aria-label="Projects"
      />
      <NavLink
        :to="{ name: 'home', hash: `#${AppSectionId.WORK_HISTORY}` }"
        :icon="IconBriefcaseFilled"
        :isActive="layoutStore.currentlyVisibleSectionsIds.includes(AppSectionId.WORK_HISTORY)"
        v-tooltip.left="'Work History'"
        aria-label="Work History"
      />
      <NavLink
        :to="{ name: 'home', hash: `#${AppSectionId.EDUCATION_HISTORY}` }"
        :icon="IconBookFilled"
        :isActive="layoutStore.currentlyVisibleSectionsIds.includes(AppSectionId.EDUCATION_HISTORY)"
        v-tooltip.left="'Education History'"
        aria-label="Education History"
      />
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { AppSectionId } from '@/enums/AppSectionId';
import { useLayoutStore } from '@/stores/layout';
import {
  IconBookFilled,
  IconBriefcaseFilled,
  IconCodeCircle2Filled,
  IconDeviceDesktopFilled,
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
