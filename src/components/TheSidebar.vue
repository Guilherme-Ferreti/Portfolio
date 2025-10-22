<template>
  <div>
    <aside
      class="flex flex-col items-center gap-0.75 bg-white w-[min(100vw,_20rem)] scrollbar-thin p-[var(--spacing-screen-padding)] h-screen fixed z-50 top-0 -left-20 transition-[left] duration-300 ease-in-out lg:sticky lg:left-0 overflow-y-auto"
      aria-label="Guilherme Ferreti's profile information"
      ref="sidebar"
      :class="{ 'left-0': layoutStore.sidebarIsOpen }"
      :inert="breakpoints.smaller('lg').value && !layoutStore.sidebarIsOpen"
    >
      <button
        class="self-end w-fit lg:hidden text-dark cursor-pointer"
        aria-label="Close sidebar"
        @click="layoutStore.sidebarIsOpen = false"
        ref="close-sidebar-button"
      >
        <IconX />
      </button>
      <img
        class="rounded-full size-8 object-cover object-center mb-0.75"
        src="@/assets/images/profile-picture.png"
        alt="Guilherme's profile picture"
      />
      <span class="text-dark text-xl text-trim text-center">Guilherme Ferreti</span>
      <span class="text-trim text-center">Fullstack Developer</span>
      <ul class="flex gap-0.5">
        <li v-for="icon in profile.socialIcons">
          <AppLink
            class="rounded-full"
            :to="icon.link"
            :aria-label="icon.ariaLabel"
            :icon="icon.icon"
          />
        </li>
      </ul>
      <hr class="divider" />
      <div
        v-for="info in profile.generalInfo"
        class="flex justify-between w-full text-dark"
      >
        <span class="mr-auto bg-primary px-0.25">{{ info.label }}:</span>
        <span>{{ info.value }}</span>
      </div>
      <hr class="divider" />
      <span class="sidebar__section-title">Languages</span>
      <ul
        class="w-full"
        role="list"
      >
        <li
          v-for="language in profile.languages"
          class="mb-0.5"
        >
          <div class="flex justify-between mb-0.25">
            <span>{{ language.label }}</span>
            <span>{{ language.value }}</span>
          </div>
          <ProgressBar :percentage="language.percentage" />
        </li>
      </ul>
      <hr class="divider" />
      <span class="sidebar__section-title">Skills</span>
      <ul
        class="w-full"
        role="list"
      >
        <li
          v-for="skill in profile.skills"
          class="mb-0.5"
        >
          <div class="flex justify-between mb-0.25">
            <span>{{ skill.label }}</span>
            <span>{{ skill.value }}%</span>
          </div>
          <ProgressBar :percentage="skill.value" />
        </li>
      </ul>
      <hr class="divider" />
      <span class="sidebar__section-title">Extra Skills</span>
      <ul
        class="w-full list-inside"
        role="list"
        style="list-style-image: url('/icons/squares.svg')"
      >
        <li v-for="skill in profile.extraSkills">
          <span class="ml-[1ch]">{{ skill }}</span>
        </li>
      </ul>
      <hr class="divider" />
      <div class="w-full">
        <AppLink
          to="https://drive.google.com/file/d/11t6hKuRFdOq5-qiHS1FpsTkwfwkpD4Ru/view?usp=drive_link"
          text="DOWNLOAD CV"
          :icon="IconExternalLink"
        />
      </div>
    </aside>

    <div
      aria-hidden="true"
      :class="{
        'fixed z-40 inset-0 bg-black opacity-50 pointer-events-auto w-screen h-screen': true,
        block: layoutStore.sidebarIsOpen && breakpoints.smaller('lg').value,
        hidden: !layoutStore.sidebarIsOpen || breakpoints.greaterOrEqual('lg').value,
      }"
      @click="layoutStore.sidebarIsOpen = false"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { useLayoutStore } from '@/stores/layout';
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconExternalLink,
  IconX,
} from '@tabler/icons-vue';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap';
import { nextTick, useTemplateRef, watch } from 'vue';
import AppLink from './AppLink.vue';
import ProgressBar from './ProgressBar.vue';

const layoutStore = useLayoutStore();

const sidebarRef = useTemplateRef<HTMLElement>('sidebar');

const { activate, deactivate } = useFocusTrap(sidebarRef, {
  allowOutsideClick: true,
});

const breakpoints = useBreakpoints(breakpointsTailwind);

watch(
  () => layoutStore.sidebarIsOpen,
  (isOpen) => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      nextTick(activate);
    } else {
      document.body.style.overflow = 'auto';
      deactivate();
    }
  },
);

const profile = {
  socialIcons: [
    {
      icon: IconBrandGithubFilled,
      link: 'https://github.com/Guilherme-Ferreti',
      ariaLabel: "Access Guilherme's Github page",
    },
    {
      icon: IconBrandLinkedinFilled,
      link: 'https://www.linkedin.com/in/guilherme-ferreti-de-souza/',
      ariaLabel: "Access Guilherme's Linkedin page",
    },
  ],
  generalInfo: [
    {
      label: 'Age',
      value: new Date().getFullYear() - new Date('2001-03-28').getFullYear(),
    },
    {
      label: 'Address',
      value: 'Brazil',
    },
  ],
  languages: [
    {
      label: 'Portuguese',
      value: 'Native',
      percentage: 100,
    },
    {
      label: 'English',
      value: 'Fluent',
      percentage: 90,
    },
  ],
  skills: [
    {
      label: 'PHP',
      value: 100,
    },
    {
      label: 'Laravel',
      value: 100,
    },
    {
      label: 'Vue.js',
      value: 80,
    },
    {
      label: 'Tailwind CSS',
      value: 80,
    },
  ],
  extraSkills: [
    'JavaScript',
    'Unit Testing',
    'Static Analysis',
    'Restful APIs',
    'SASS',
    'Git Knowledge',
  ],
};
</script>

<style scoped>
@reference '@/assets/css/app.css';

.sidebar__section-title {
  @apply self-start text-lg text-dark;
}
</style>
