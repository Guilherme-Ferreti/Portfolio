<template>
  <li
    class="bg-white flex flex-col border border-gray-600 rounded-lg hover:bg-gray-100 shadow-md @2xl:*:flex-1"
    :class="{
      '@2xl:flex-row-reverse': reversed,
      '@2xl:flex-row': !reversed,
    }"
  >
    <div class="overflow-hidden">
      <img
        :src="project.image"
        :alt="`${project.name} homepage screenshot`"
        class="h-full object-cover bg-no-repeat hover:scale-105 transition-transform duration-300 ease-in-out"
        role="presentation"
        loading="lazy"
      />
    </div>
    <div class="p-1.5 gap-1.25 flex flex-col">
      <h3 class="text-dark text-xl font-bold text-center">{{ project.name }}</h3>
      <p>{{ project.description }}</p>
      <div class="flex gap-0.75 items-center">
        <span class="text-dark text-sm font-bold">Technologies:</span>
        <component
          v-for="technology in project.technologies"
          :is="technology"
          class="size-1.5"
        />
      </div>
      <div
        class="grid gap-0.75 mt-auto"
        :class="{ '@sm:grid-cols-2': project.url }"
      >
        <AppLink
          :to="project.githubUrl"
          text="See on Github"
          :icon="IconBrandGithubFilled"
          :aria-label="`See ${project.name} on Github`"
          color="secondary"
        />
        <AppLink
          v-if="project.url"
          text="Live View"
          :to="project.url"
          :icon="IconExternalLink"
          :aria-label="`See ${project.name} live view`"
        />
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { Project } from '@/types';
import { IconBrandGithubFilled, IconExternalLink } from '@tabler/icons-vue';
import AppLink from './AppLink.vue';

defineProps<{
  project: Project;
  reversed?: boolean;
}>();
</script>
