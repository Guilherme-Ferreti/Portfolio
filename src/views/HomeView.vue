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

      <SkillsCarousel />
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
import EducationHistory from '@/components/EducationHistory.vue';
import SkillsCarousel from '@/components/SkillsCarousel.vue';
import WorkHistory from '@/components/WorkHistory.vue';
</script>

<style scoped>
@reference '@/assets/css/app.css';

.section__title {
  @apply mb-1 text-center text-3xl font-bold text-dark;
}
</style>
