<template>
  <div class="px-[var(--spacing-screen-padding)] space-y-3">
    <section
      class="bg-white p-2 lg:p-4 @container"
      aria-labelledby="hero__heading"
    >
      <div class="@xl:w-[60%]">
        <h1
          class="text-dark text-4xl/2.75 font-bold mb-1 flex flex-col"
          id="hero__heading"
        >
          <span>I'm Guilherme Ferreti</span>
          <span><span class="text-primary">Fullstack</span> Developer</span>
        </h1>
        <p>
          Web developer with over 6 years of experience specializing in PHP, with a strong focus on
          Laravel and Vue.js for building dynamic, scalable, and high-performance applications.
        </p>
      </div>
    </section>
    <section
      aria-labelledby="skils-section__heading"
      id="skills"
    >
      <h2
        class="section__title"
        id="skills-section__heading"
      >
        My Skills
      </h2>
      <ul class="flex flex-wrap gap-1 items-center justify-center">
        <li
          v-for="skill in skills"
          class="card grid place-items-center hover:scale-105 transition-transform duration-300 w-16 h-7.5"
        >
          <component
            :is="skill.logo"
            :aria-label="skill.name"
          />
        </li>
      </ul>
    </section>
    <section
      aria-labelledby="work-history-section__heading"
      id="work-history"
    >
      <h2
        class="section__title"
        id="work-history-section__heading"
      >
        Work History
      </h2>

      <WorkHistory />
    </section>
    <section
      aria-labelledby="education-history-section__heading"
      id="education-history"
    >
      <h2
        class="section__title"
        id="education-history-section__heading"
      >
        Education
      </h2>
      <EducationHistory />
    </section>
  </div>
</template>

<script lang="ts" setup>
import DockerLogo from '@/assets/images/logos/docker.svg';
import FilamentPHPLogo from '@/assets/images/logos/filamentphp.svg';
import LaravelLogo from '@/assets/images/logos/laravel.svg';
import LivewireLogo from '@/assets/images/logos/livewire.svg';
import PHPStanLogo from '@/assets/images/logos/phpstan.svg';
import PHPUnitLogo from '@/assets/images/logos/phpunit.svg';
import SQLLogo from '@/assets/images/logos/sql.svg';
import TailwindLogo from '@/assets/images/logos/tailwindcss.svg';
import VueLogo from '@/assets/images/logos/vuejs.svg';
import EducationHistory from '@/components/EducationHistory.vue';
import WorkHistory from '@/components/WorkHistory.vue';

const skills = [
  {
    logo: LaravelLogo,
    name: 'Laravel',
  },
  {
    logo: VueLogo,
    name: 'Vue.js',
  },
  {
    logo: TailwindLogo,
    name: 'TailwindCSS',
  },
  {
    logo: LivewireLogo,
    name: 'Livewire',
  },
  {
    logo: PHPStanLogo,
    name: 'PHPStan',
  },
  {
    logo: PHPUnitLogo,
    name: 'PHPUnit',
  },
  {
    logo: DockerLogo,
    name: 'Docker',
  },
  {
    logo: FilamentPHPLogo,
    name: 'FilamentPHP',
  },
  {
    logo: SQLLogo,
    name: 'SQL',
  },
];
</script>

<style scoped>
@reference '@/assets/css/app.css';

.section__title {
  @apply mb-1 text-center text-3xl font-bold text-dark;
}
</style>
