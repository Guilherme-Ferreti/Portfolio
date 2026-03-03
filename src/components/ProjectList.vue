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
import type { Project } from '@/types';
import { image, technologies } from '@/utils';
import ProjectListItem from './ProjectListItem.vue';

const projects: Project[] = [
  {
    name: 'Exclusive (work in progress)',
    description:
      'Exclusive is a fictional online shop that sells high-quality collectibles such as Pokemon cards and comic books.',
    image: image('projects/exclusive.webp'),
    technologies: [
      technologies.laravel,
      technologies.vue,
      technologies.tailwind,
      technologies.inertia,
      technologies.phpstan,
    ],
    githubUrl: 'https://github.com/Guilherme-Ferreti/Exclusive',
    url: 'https://exclusive-guilherme-ferreti.laravel.cloud',
  },
  {
    name: 'Skillbridge',
    description:
      'A fictional platform that helps you unlock your creative potential by offering a wide range of online design and development courses.',
    image: image('projects/skillbridge.webp'),
    technologies: [
      technologies.laravel,
      technologies.sass,
      technologies.filament,
      technologies.phpstan,
    ],
    githubUrl: 'https://github.com/Guilherme-Ferreti/Skillbridge',
    url: 'https://skillbridge-guilherme-ferreti.laravel.cloud',
  },
  {
    name: 'Flaskr',
    description:
      'Fast, minimal, and practical — Flaskr makes blogging straightforward and enjoyable.',
    image: image('projects/flaskr.webp'),
    technologies: [technologies.python, technologies.flask],
    githubUrl: 'https://github.com/Guilherme-Ferreti/Flaskr',
    url: null,
  },
  {
    name: 'Aleague API',
    description:
      'Create and manage soccer tournaments quickly and easily. Choose from various competition formats, add participating teams, and enter results as you wish.',
    image: image('projects/aleague-api.webp'),
    technologies: [technologies.laravel, technologies.phpstan],
    githubUrl: 'https://github.com/Guilherme-Ferreti/Aleague-API',
    url: null,
  },
  {
    name: 'Trello Board',
    description:
      'A simple and easy-to-use Trello board. Create and manage tasks, assign them to different columns, and track their progress.',
    image: image('projects/trello-board.webp'),
    technologies: [technologies.nuxt, technologies.tailwind],
    githubUrl: 'https://github.com/Guilherme-Ferreti/Trello-Board',
    url: 'https://guilherme-ferreti.github.io/Trello-Board/',
  },
  {
    name: 'TS Journal',
    description: 'Write the happenings of your life in the form of a journal.',
    image: image('projects/ts-journal.webp'),
    technologies: [technologies.vue, technologies.tailwind],
    githubUrl: 'https://github.com/Guilherme-Ferreti/TS-Journal',
    url: 'https://guilherme-ferreti.github.io/TS-Journal/',
  },
  {
    name: 'Recipes App',
    description: 'A collection of delicious and easy-to-cook recipes to satisfy your cravings.',
    image: image('projects/recipes-app.webp'),
    technologies: [technologies.vue, technologies.sass],
    githubUrl: 'https://github.com/Guilherme-Ferreti/Recipes-App',
    url: 'https://guilherme-ferreti.github.io/Recipes-App',
  },
  {
    name: 'Diverse HTML Pages',
    description:
      'A collection of HTML pages to practice and improve my skills in HTML, CSS, and JavaScript.',
    image: image('projects/diverse-html-pages.webp'),
    technologies: [technologies.html, technologies.css, technologies.javascript],
    githubUrl: 'https://github.com/Guilherme-Ferreti/html',
    url: 'https://guilherme-ferreti.github.io/html',
  },
];
</script>
