<template>
  <ul class="grid gap-1 bg-white p-2 @container">
    <li
      v-for="(project, index) in projects"
      :class="{
        'bg-white flex flex-col @2xl:flex-row border border-gray-600 rounded-lg': true,
        'flex-row-reverse': index % 2 === 1,
      }"
    >
      <div class="overflow-hidden flex-1">
        <img
          :src="project.image"
          :alt="`${project.name} homepage screenshot`"
          class="w-full h-full object-cover bg-no-repeat hover:scale-105 transition-transform duration-300 ease-in-out"
          role="presentation"
          loading="lazy"
        />
      </div>
      <div class="p-1.5 gap-1 flex flex-col flex-1">
        <h3 class="text-dark text-xl font-bold text-center">{{ project.name }}</h3>
        <p>{{ project.description }}</p>
        <AppLink
          text="View Project"
          :to="project.url"
          class="mt-auto"
        />
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import AppLink from './AppLink.vue';

const projects = [
  {
    name: 'Skillbridge',
    description:
      'A fictional platform that helps you unlock your creative potential by offering a wide range of online design and development courses.',
    image: new URL('@/assets/images/projects/skillbridge.webp', import.meta.url).href,
    url: 'https://skillbridge-guilherme-ferreti.laravel.cloud/',
  },
];
</script>
