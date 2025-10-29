<template>
  <ul class="grid gap-1.25 bg-white p-2 @container">
    <li
      v-for="(project, index) in projects"
      :class="{
        'bg-white flex flex-col @2xl:[&>*]:flex-1 border border-gray-600 rounded-lg hover:bg-gray-100': true,
        '@2xl:flex-row': index % 2 === 0,
        '@2xl:flex-row-reverse': index % 2 === 1,
      }"
    >
      <div class="p-1.5 gap-1.25 flex flex-col">
        <h3 class="text-dark text-xl font-bold text-center">{{ project.name }}</h3>
        <p>{{ project.description }}</p>
        <div class="flex gap-0.75 items-center">
          <span class="text-dark text-sm font-bold">Technologies:</span>
          <component
            v-for="technology in project.technologies"
            :is="technology"
            class="size-[1.5rem]"
          />
        </div>
        <div class="grid gap-0.75 mt-auto @sm:grid-cols-2">
          <AppLink
            :to="project.githubUrl"
            text="See on Github"
            :icon="IconBrandGithubFilled"
            :aria-label="`See ${project.name} on Github`"
            color="secondary"
          />
          <AppLink
            text="Live View"
            :to="project.url"
            :icon="IconExternalLink"
            :aria-label="`See ${project.name} live view`"
          />
        </div>
      </div>
      <div class="overflow-hidden">
        <img
          :src="project.image"
          :alt="`${project.name} homepage screenshot`"
          class="h-full object-cover bg-no-repeat hover:scale-105 transition-transform duration-300 ease-in-out"
          role="presentation"
          loading="lazy"
        />
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import FilamentPHPIcon from '@/assets/images/icons/filamentphp.svg';
import LaravelIcon from '@/assets/images/icons/laravel.svg';
import PHPStanIcon from '@/assets/images/icons/phpstan.svg';
import SASSIcon from '@/assets/images/icons/sass.svg';
import { IconBrandGithubFilled, IconExternalLink } from '@tabler/icons-vue';
import AppLink from './AppLink.vue';

const projects = [
  {
    name: 'Skillbridge',
    description:
      'A fictional platform that helps you unlock your creative potential by offering a wide range of online design and development courses.',
    image: new URL('@/assets/images/projects/skillbridge.webp', import.meta.url).href,
    technologies: [LaravelIcon, SASSIcon, FilamentPHPIcon, PHPStanIcon],
    githubUrl: 'https://github.com/Guilherme-Ferreti/Skillbridge',
    url: 'https://skillbridge-guilherme-ferreti.laravel.cloud/',
  },
];
</script>
