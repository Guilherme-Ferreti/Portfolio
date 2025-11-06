<template>
  <ul class="grid gap-1.25 bg-white p-2 @container">
    <ProjectListItem
      v-for="(project, index) in projects"
      :project="project"
      :reversed="index % 2 === 0"
    />
  </ul>
</template>

<script setup lang="ts">
import CSSIcon from '@/assets/images/icons/css.svg';
import FilamentPHPIcon from '@/assets/images/icons/filamentphp.svg';
import HTMLIcon from '@/assets/images/icons/html.svg';
import JavascriptIcon from '@/assets/images/icons/javascript.svg';
import LaravelIcon from '@/assets/images/icons/laravel.svg';
import NuxtIcon from '@/assets/images/icons/nuxt.svg';
import PHPStanIcon from '@/assets/images/icons/phpstan.svg';
import SASSIcon from '@/assets/images/icons/sass.svg';
import TailwindIcon from '@/assets/images/icons/tailwind.svg';
import VueIcon from '@/assets/images/icons/vue.svg';
import type { Project } from '@/types';
import ProjectListItem from './ProjectListItem.vue';

const projects: Project[] = [
  {
    name: 'Skillbridge',
    description:
      'A fictional platform that helps you unlock your creative potential by offering a wide range of online design and development courses.',
    image: new URL('@/assets/images/projects/skillbridge.webp', import.meta.url).href,
    technologies: [LaravelIcon, SASSIcon, FilamentPHPIcon, PHPStanIcon],
    githubUrl: 'https://github.com/Guilherme-Ferreti/Skillbridge',
    url: 'https://skillbridge-guilherme-ferreti.laravel.cloud',
  },
  {
    name: 'Aleague API',
    description:
      'Create and manage soccer tournaments quickly and easily. Choose from various competition formats, add participating teams, and enter results as you wish.',
    image: new URL('@/assets/images/projects/aleague-api.webp', import.meta.url).href,
    technologies: [LaravelIcon, PHPStanIcon],
    githubUrl: 'https://github.com/Guilherme-Ferreti/Aleague-API',
    url: null,
  },
  {
    name: 'Trello Board',
    description:
      'A simple and easy-to-use Trello board. Create and manage tasks, assign them to different columns, and track their progress.',
    image: new URL('@/assets/images/projects/trello-board.webp', import.meta.url).href,
    technologies: [NuxtIcon, TailwindIcon],
    githubUrl: 'https://github.com/Guilherme-Ferreti/Trello-Board',
    url: 'https://guilherme-ferreti.github.io/Trello-Board/',
  },
  {
    name: 'TS Journal',
    description: 'Write the happenings of your life in the form of a journal.',
    image: new URL('@/assets/images/projects/ts-journal.webp', import.meta.url).href,
    technologies: [VueIcon, TailwindIcon],
    githubUrl: 'https://github.com/Guilherme-Ferreti/TS-Journal',
    url: 'https://guilherme-ferreti.github.io/TS-Journal/',
  },
  {
    name: 'Recipes App',
    description: 'A collection of delicious and easy-to-cook recipes to satisfy your cravings.',
    image: new URL('@/assets/images/projects/recipes-app.webp', import.meta.url).href,
    technologies: [VueIcon, SASSIcon],
    githubUrl: 'https://github.com/Guilherme-Ferreti/Recipes-App',
    url: 'https://guilherme-ferreti.github.io/Recipes-App',
  },
  {
    name: 'Diverse HTML Pages',
    description:
      'A collection of HTML pages to practice and improve my skills in HTML, CSS, and JavaScript.',
    image: new URL('@/assets/images/projects/diverse-html-pages.webp', import.meta.url).href,
    technologies: [HTMLIcon, CSSIcon, JavascriptIcon],
    githubUrl: 'https://github.com/Guilherme-Ferreti/html',
    url: 'https://guilherme-ferreti.github.io/html',
  },
];
</script>
