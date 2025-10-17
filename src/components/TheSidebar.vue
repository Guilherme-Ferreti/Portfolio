<script setup lang="ts">
import { IconBrandGithubFilled, IconBrandLinkedinFilled, IconX } from '@tabler/icons-vue';
import ProgressBar from './ProgressBar.vue';

defineProps<{ isOpen?: boolean }>();

defineEmits<{
  close: [];
}>();

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
  extraSkills: ['PHP', 'JavaScript', 'Unit Testing', 'Restful APIs', 'SASS', 'Git Knowledge'],
};
</script>

<template>
  <aside
    class="flex flex-col items-center gap-0.75 bg-white w-[min(100vw,_20rem)] scrollbar-thin p-[var(--spacing-screen-padding)] h-screen fixed z-10 top-0 -left-20 transition-[left] duration-300 ease-in-out lg:sticky lg:left-0 overflow-y-auto"
    :class="{ 'left-0': isOpen }"
    :aria-expanded="isOpen"
  >
    <button
      class="self-end w-fit lg:hidden text-dark"
      aria-label="Close sidebar"
      @click="$emit('close')"
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
    <div class="flex gap-0.5">
      <a
        v-for="icon in profile.socialIcons"
        class="grid place-items-center size-2 rounded-full bg-primary text-dark hover:text-white"
        target="_blank"
        rel="external"
        :href="icon.link"
        :aria-label="icon.ariaLabel"
      >
        <component
          :is="icon.icon"
          width="20"
          height="20"
        />
      </a>
    </div>
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
  </aside>
</template>

<style scoped>
@reference '@/assets/css/app.css';

.sidebar__section-title {
  @apply self-start text-lg text-dark;
}
</style>
